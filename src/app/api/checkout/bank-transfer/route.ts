export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { getProduct } from '@/lib/products';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { emailLooksValid, normalizeEmail, readJsonBody } from '@/lib/validators';

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  const rate = checkRateLimit({
    key: `bank-transfer:${ip}`,
    limit: 10,
    windowMs: 60 * 1000,
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  const body = await readJsonBody<{
    name?: string;
    email?: string;
    product?: string;
  }>(request);
  if (!body) {
    return Response.json({ error: 'Невалидни данни.' }, { status: 400 });
  }

  const { name, email, product: productSlug } = body;

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: 'Името и имейлът са задължителни.' }, { status: 400 });
  }
  const cleanEmail = normalizeEmail(email);
  if (!emailLooksValid(cleanEmail)) {
    return Response.json({ error: 'Моля въведи валиден имейл адрес.' }, { status: 400 });
  }

  const product = getProduct(productSlug);
  if (!product) {
    return Response.json({ error: 'Невалиден продукт.' }, { status: 400 });
  }
  if (!product.supportsBankTransfer) {
    return Response.json(
      { error: 'Този продукт не приема банков превод.' },
      { status: 400 }
    );
  }

  const orderId = randomUUID();

  const sql = getDb();
  await sql`
    INSERT INTO orders (mypos_order_id, email, name, amount, currency, status, product)
    VALUES (${orderId}, ${cleanEmail}, ${name.trim()}, ${parseFloat(product.price)}, ${product.currency}, 'awaiting_bank_transfer', ${product.slug})
  `;

  return Response.json({ orderId });
}
