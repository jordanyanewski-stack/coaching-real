export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { auth, currentUser } from '@clerk/nextjs/server';
import { getDb } from '@/lib/db';
import { PRODUCTS } from '@/lib/products';
import { cleanEnv, normalizeEmail } from '@/lib/validators';

/**
 * Stream the audiobook through this gated route so the underlying Bunny URL
 * stays unexposed to the browser. Previously a 302 to a public Bunny URL — a
 * paid customer could copy that URL from DevTools and share it.
 *
 * Range requests are forwarded through so HTML5 <audio> seeking still works
 * (the player issues partial-content requests as the user scrubs).
 */

export async function GET(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await currentUser();
  const email = normalizeEmail(
    user?.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress ?? '',
  );

  const sql = getDb();
  // Match the order by user_id first. Email is a fallback ONLY for orders
  // that have not yet been claimed (user_id IS NULL) — prevents a new Clerk
  // user who verifies a prior buyer's email from reading the buyer's content.
  const rows = (await sql`
    SELECT 1
    FROM orders
    WHERE product = 'audiobook'
      AND status = 'paid'
      AND (
        user_id = ${userId}
        OR (user_id IS NULL AND ${email} <> '' AND lower(email) = ${email})
      )
    LIMIT 1
  `) as unknown[];

  if (rows.length === 0) {
    return new Response('Forbidden', { status: 403 });
  }

  const hostname = cleanEnv(process.env.BUNNY_CDN_HOSTNAME);
  const filename = PRODUCTS.audiobook.bunnyFile;
  if (!hostname || !filename) {
    console.error('[audiobook stream] missing BUNNY_CDN_HOSTNAME or PRODUCTS.audiobook.bunnyFile');
    return new Response('Server misconfigured', { status: 500 });
  }

  // Forward the Range header so the player can stream + seek.
  const range = request.headers.get('range') ?? undefined;
  const upstream = await fetch(`https://${hostname}/${filename}`, {
    headers: range ? { Range: range } : undefined,
    // Don't follow redirects beyond Bunny's own zone.
    redirect: 'follow',
  });

  if (!upstream.ok && upstream.status !== 206) {
    console.error('[audiobook stream] upstream non-OK', { status: upstream.status });
    return new Response('Upstream error', { status: 502 });
  }

  // Pass through Content-Type, Content-Length, Content-Range, Accept-Ranges
  // so the browser audio player gets what it needs for streaming + seeking.
  const headers = new Headers();
  const passthrough = ['content-type', 'content-length', 'content-range', 'accept-ranges', 'last-modified'];
  for (const h of passthrough) {
    const v = upstream.headers.get(h);
    if (v) headers.set(h, v);
  }
  if (!headers.has('cache-control')) {
    // Private to this user — never cache at the edge.
    headers.set('cache-control', 'private, no-store');
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
