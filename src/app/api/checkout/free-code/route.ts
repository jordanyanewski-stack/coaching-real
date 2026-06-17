export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { addToPending } from '@/lib/mailerlite';
import { getPaidGroupId, getProduct, type ProductSlug } from '@/lib/products';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { emailLooksValid, normalizeEmail, readJsonBody } from '@/lib/validators';

/**
 * Promo codes that grant free enrollment, bypassing myPOS entirely.
 * Code (uppercased) → product slug recorded on the €0 order. Deactivate a code
 * by removing its line. Unlimited uses by design — the same email twice is
 * harmless (MailerLite upserts; an extra €0 order row changes nothing).
 */
const FREE_CODES: Record<string, ProductSlug> = {
  NATALIAK12: 'biznes-dusha-day1',
};

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  const rate = checkRateLimit({
    key: `checkout-free-code:${ip}`,
    limit: 10,            // 10 attempts
    windowMs: 60 * 1000,  // per minute
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  const body = await readJsonBody<{
    name?: string;
    email?: string;
    code?: string;
  }>(request);
  if (!body) {
    return Response.json({ error: 'Невалидни данни.' }, { status: 400 });
  }

  const { name, email, code } = body;

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: 'Името и имейлът са задължителни.' }, { status: 400 });
  }
  const cleanEmail = normalizeEmail(email);
  if (!emailLooksValid(cleanEmail)) {
    return Response.json({ error: 'Моля въведи валиден имейл адрес.' }, { status: 400 });
  }

  const productSlug = FREE_CODES[(code ?? '').trim().toUpperCase()];
  if (!productSlug) {
    return Response.json({ error: 'Невалиден промо код.' }, { status: 400 });
  }
  const product = getProduct(productSlug)!;

  const orderId = randomUUID();
  const sql = getDb();
  await sql`
    INSERT INTO orders (mypos_order_id, email, name, amount, currency, status, product)
    VALUES (${orderId}, ${cleanEmail}, ${name.trim()}, 0, ${product.currency}, 'free', ${product.slug})
  `;

  // Awaited (unlike the paid flow) — there's no myPOS redirect to protect, and
  // the MailerLite group IS the product delivery (Zoom link email). A failure
  // is still non-fatal: the order row above is the recovery source of truth.
  try {
    const groupId = getPaidGroupId(productSlug);
    if (groupId) {
      await addToPending(cleanEmail, name.trim(), groupId);
    } else {
      console.error('[free-code] Missing MailerLite group id env var', {
        product: productSlug,
        envVar: product.mlPaidGroupIdEnv,
      });
    }
  } catch (err) {
    console.error('[free-code MailerLite FAILED]', {
      email: cleanEmail,
      product: productSlug,
      error: (err as Error).message,
    });
  }

  return Response.json({ orderId });
}
