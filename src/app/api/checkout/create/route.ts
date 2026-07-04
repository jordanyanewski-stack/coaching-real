export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import { after } from 'next/server';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { addToPending } from '@/lib/mailerlite';
import { buildPurchaseParams } from '@/lib/mypos';
import { getPendingGroupId, getProduct } from '@/lib/products';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { emailLooksValid, normalizeEmail, readJsonBody } from '@/lib/validators';

export async function POST(request: NextRequest) {
  const ip = clientIp(request);
  const rate = checkRateLimit({
    key: `checkout-create:${ip}`,
    limit: 10,            // 10 attempts
    windowMs: 60 * 1000,  // per minute
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

  const orderId = randomUUID();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const rawIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    '';
  // myPOS rejects loopback and unspecified addresses as invalid client IP.
  // Production gets a real public IP via Vercel's edge headers; in local dev
  // we substitute a real-looking public IP sentinel so myPOS accepts the call.
  const isUnroutable = (ip: string) =>
    !ip || ip === '::1' || ip === '127.0.0.1' || ip === '0.0.0.0' || ip.startsWith('192.168.') || ip.startsWith('10.');
  const customerIp = isUnroutable(rawIp) ? '8.8.8.8' : rawIp;

  const sql = getDb();
  await sql`
    INSERT INTO orders (mypos_order_id, email, name, amount, currency, status, product)
    VALUES (${orderId}, ${cleanEmail}, ${name.trim()}, ${parseFloat(product.price)}, ${product.currency}, 'pending', ${product.slug})
  `;

  // Runs AFTER the response is sent — a slow/unreachable MailerLite must never
  // delay or hang the redirect to myPOS. Errors are logged, not surfaced.
  const pendingGroupId = getPendingGroupId(product.slug);
  after(async () => {
    try {
      if (pendingGroupId) {
        await addToPending(cleanEmail, name.trim(), pendingGroupId);
      } else if (product.mlPendingGroupIdEnv) {
        // Only an error when the product WANTS pending capture but the env is missing;
        // products without mlPendingGroupIdEnv skip pre-payment capture by design.
        console.error('[MailerLite] Missing pending group id env var', {
          product: product.slug,
          envVar: product.mlPendingGroupIdEnv,
        });
      }
    } catch (err) {
      console.error('[MailerLite addToPending FAILED]', {
        email: cleanEmail,
        product: product.slug,
        error: (err as Error).message,
      });
    }
  });

  const { action, fields } = buildPurchaseParams({
    orderId,
    amount: product.price,
    currency: product.currency,
    customerEmail: cleanEmail,
    customerName: name.trim(),
    customerIp,
    urlOk: `${siteUrl}/thank-you?order=${orderId}`,
    urlCancel: `${siteUrl}/payment-cancelled?order=${orderId}`,
    urlNotify: `${siteUrl}/api/mypos/notify`,
    productName: product.name,
  });

  return Response.json({ action, fields });
}
