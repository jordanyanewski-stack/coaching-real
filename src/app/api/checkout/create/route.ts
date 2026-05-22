export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { addToPending } from '@/lib/mailerlite';
import { buildPurchaseParams } from '@/lib/mypos';
import { getPendingGroupId, getProduct } from '@/lib/products';

export async function POST(request: NextRequest) {
  const { name, email, product: productSlug } = await request.json() as {
    name?: string;
    email?: string;
    product?: string;
  };

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: 'Името и имейлът са задължителни.' }, { status: 400 });
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
    VALUES (${orderId}, ${email.trim()}, ${name.trim()}, ${parseFloat(product.price)}, ${product.currency}, 'pending', ${product.slug})
  `;

  try {
    const pendingGroupId = getPendingGroupId(product.slug);
    if (pendingGroupId) {
      await addToPending(email.trim(), name.trim(), pendingGroupId);
    } else {
      console.error('[MailerLite] Missing pending group id env var', {
        product: product.slug,
        envVar: product.mlPendingGroupIdEnv,
      });
    }
  } catch (err) {
    console.error('[MailerLite addToPending FAILED]', {
      email: email.trim(),
      product: product.slug,
      error: (err as Error).message,
    });
  }

  const { action, fields } = buildPurchaseParams({
    orderId,
    amount: product.price,
    currency: product.currency,
    customerEmail: email.trim(),
    customerName: name.trim(),
    customerIp,
    urlOk: `${siteUrl}/thank-you?order=${orderId}`,
    urlCancel: `${siteUrl}/payment-cancelled?order=${orderId}`,
    urlNotify: `${siteUrl}/api/mypos/notify`,
    productName: product.name,
  });

  return Response.json({ action, fields });
}
