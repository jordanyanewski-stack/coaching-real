export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { Webhook } from 'svix';
import { getDb } from '@/lib/db';
import { normalizeEmail } from '@/lib/validators';

type ClerkUserCreatedEvent = {
  type: 'user.created' | 'user.updated' | string;
  data: {
    id: string;
    primary_email_address_id: string | null;
    email_addresses: { id: string; email_address: string }[];
  };
};

export async function POST(request: NextRequest) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!secret) {
    console.error('[clerk webhook] missing CLERK_WEBHOOK_SIGNING_SECRET');
    return new Response('Server misconfigured', { status: 500 });
  }

  const svixId = request.headers.get('svix-id');
  const svixTimestamp = request.headers.get('svix-timestamp');
  const svixSignature = request.headers.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  const body = await request.text();
  const wh = new Webhook(secret);

  let event: ClerkUserCreatedEvent;
  try {
    event = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    }) as ClerkUserCreatedEvent;
  } catch (err) {
    console.error('[clerk webhook] verify failed', (err as Error).message);
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type !== 'user.created' && event.type !== 'user.updated') {
    return new Response('OK', { status: 200 });
  }

  const { id: userId, email_addresses, primary_email_address_id } = event.data;
  const primary =
    email_addresses.find(e => e.id === primary_email_address_id) ?? email_addresses[0];
  // normalizeEmail (trim + lowercase) — matches the order-insert + dashboard +
  // stream normalization so the user_id backfill claim never misses on whitespace.
  const email = normalizeEmail(primary?.email_address ?? '');

  if (!email) return new Response('OK', { status: 200 });

  const sql = getDb();
  // Use RETURNING to get a real backfill count. The neon tagged-template
  // returns an array of rows; previously the code cast the result to
  // `{rowCount}` which doesn't actually exist on the driver's return value,
  // so the log line below always printed `rowCount: undefined`.
  const backfilled = (await sql`
    UPDATE orders
    SET user_id = ${userId}
    WHERE user_id IS NULL AND lower(email) = ${email}
    RETURNING mypos_order_id
  `) as { mypos_order_id: string }[];

  if (backfilled.length > 0) {
    // Make the freshly-claimed orders visible on the next dashboard fetch.
    revalidatePath('/dashboard');
  }

  console.log('[clerk webhook] backfilled orders', {
    userId,
    email,
    count: backfilled.length,
  });

  return new Response('OK', { status: 200 });
}
