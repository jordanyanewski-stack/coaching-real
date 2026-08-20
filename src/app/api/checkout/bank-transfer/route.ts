export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import { after } from 'next/server';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { addToPending } from '@/lib/mailerlite';
import { getBankTransferGroupId, getProduct } from '@/lib/products';
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

  // Add the bank-intent lead only to the campaign's dedicated bank-transfer
  // group. Card checkout attempts remain in the regular pending group.
  // Runs after the response; failures are logged, not surfaced.
  // NOTE: bank orders are not auto-confirmed — moving them to the PAID group +
  // (for the audiobook) granting access still requires a manual mark-paid step
  // in /admin/bank-orders, since there is no webhook for bank transfers.
  const bankTransferGroupId = getBankTransferGroupId(product.slug);
  after(async () => {
    try {
      if (bankTransferGroupId) {
        await addToPending(cleanEmail, name.trim(), bankTransferGroupId);
      } else {
        console.error('[MailerLite] Missing bank-transfer group id env var', {
          product: product.slug,
          envVar: product.mlBankTransferGroupIdEnv,
        });
      }
    } catch (err) {
      console.error('[MailerLite addToPending FAILED (bank-transfer)]', {
        email: cleanEmail,
        product: product.slug,
        error: (err as Error).message,
      });
    }
  });

  return Response.json({ orderId });
}
