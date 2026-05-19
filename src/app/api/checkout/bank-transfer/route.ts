export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  const { name, email } = await request.json() as { name?: string; email?: string };

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: 'Името и имейлът са задължителни.' }, { status: 400 });
  }

  const orderId = randomUUID();
  const amount = (process.env.PRODUCT_PRICE ?? '67.00').trim();
  const currency = (process.env.PRODUCT_CURRENCY ?? 'EUR').trim();

  const sql = getDb();
  await sql`
    INSERT INTO orders (mypos_order_id, email, name, amount, currency, status)
    VALUES (${orderId}, ${email.trim()}, ${name.trim()}, ${parseFloat(amount)}, ${currency}, 'awaiting_bank_transfer')
  `;

  return Response.json({ orderId });
}
