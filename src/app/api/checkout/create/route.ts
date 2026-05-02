export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { addToPending } from '@/lib/mailerlite';
import { buildPurchaseParams } from '@/lib/mypos';

export async function POST(request: NextRequest) {
  const { name, email } = await request.json() as { name?: string; email?: string };

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: 'Името и имейлът са задължителни.' }, { status: 400 });
  }

  const orderId = randomUUID();
  const amount = (process.env.PRODUCT_PRICE ?? '97.00').trim();
  const currency = (process.env.PRODUCT_CURRENCY ?? 'EUR').trim();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const customerIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    '0.0.0.0';

  const sql = getDb();
  await sql`
    INSERT INTO orders (mypos_order_id, email, name, amount, currency, status)
    VALUES (${orderId}, ${email.trim()}, ${name.trim()}, ${parseFloat(amount)}, ${currency}, 'pending')
  `;

  addToPending(email.trim(), name.trim()).catch((err) =>
    console.error('[MailerLite addToPending FAILED]', { email: email.trim(), error: (err as Error).message })
  );

  const { action, fields } = buildPurchaseParams({
    orderId,
    amount,
    currency,
    customerEmail: email.trim(),
    customerName: name.trim(),
    customerIp,
    urlOk: `${siteUrl}/thank-you?order=${orderId}`,
    urlCancel: `${siteUrl}/payment-cancelled?order=${orderId}`,
    urlNotify: `${siteUrl}/api/mypos/notify`,
  });

  return Response.json({ action, fields });
}
