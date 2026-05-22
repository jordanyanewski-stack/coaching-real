export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { Webhook } from 'svix';
import { getDb } from '@/lib/db';

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
  const email = primary?.email_address?.toLowerCase();

  if (!email) return new Response('OK', { status: 200 });

  const sql = getDb();
  const result = await sql`
    UPDATE orders
    SET user_id = ${userId}
    WHERE user_id IS NULL AND lower(email) = ${email}
  ` as unknown as { rowCount?: number };

  console.log('[clerk webhook] backfilled orders for', { userId, email, rowCount: result?.rowCount });

  return new Response('OK', { status: 200 });
}
