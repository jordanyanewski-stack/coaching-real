export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { auth, currentUser } from '@clerk/nextjs/server';
import { getDb } from '@/lib/db';
import { PRODUCTS } from '@/lib/products';

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await currentUser();
  const email =
    user?.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress?.toLowerCase() ?? '';

  const sql = getDb();
  const rows = (await sql`
    SELECT 1
    FROM orders
    WHERE product = 'audiobook'
      AND status = 'paid'
      AND (user_id = ${userId} OR (${email} <> '' AND lower(email) = ${email}))
    LIMIT 1
  `) as unknown[];

  if (rows.length === 0) {
    return new Response('Forbidden', { status: 403 });
  }

  const hostname = (process.env.BUNNY_CDN_HOSTNAME ?? '').trim();
  const filename = PRODUCTS.audiobook.bunnyFile;
  if (!hostname || !filename) {
    console.error('[audiobook stream] missing BUNNY_CDN_HOSTNAME or PRODUCTS.audiobook.bunnyFile');
    return new Response('Server misconfigured', { status: 500 });
  }

  return Response.redirect(`https://${hostname}/${filename}`, 302);
}
