export const runtime = 'nodejs';

import { buildPurchaseParams } from '@/lib/mypos';

export async function GET() {
  const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim();
  const fakeOrderId = 'debug-' + Date.now();

  const { action, fields } = buildPurchaseParams({
    orderId: fakeOrderId,
    amount: (process.env.PRODUCT_PRICE ?? '1.00').trim(),
    currency: (process.env.PRODUCT_CURRENCY ?? 'EUR').trim(),
    customerEmail: 'test@example.com',
    customerName: 'Test User',
    urlOk:     `${SITE_URL}/thank-you?order=${fakeOrderId}`,
    urlCancel: `${SITE_URL}/payment-cancelled?order=${fakeOrderId}`,
    urlNotify: `${SITE_URL}/api/mypos/notify`,
    productName: (process.env.PRODUCT_NAME ?? 'Product').trim(),
  });

  // Reconstruct the concat exactly as the signer did, for inspection
  const valuesInOrder = Object.entries(fields)
    .filter(([k]) => k !== 'Signature')
    .map(([, v]) => v as string);
  const concat = valuesInOrder.join('-');
  const concatBase64 = Buffer.from(concat, 'utf8').toString('base64');

  return Response.json({
    action,
    field_count: Object.keys(fields).length - 1,
    fields_in_order: Object.entries(fields)
      .filter(([k]) => k !== 'Signature')
      .map(([k, v]) => ({ key: k, value: v as string, length: (v as string).length })),
    concat,
    concat_length: concat.length,
    concat_base64_first_60: concatBase64.slice(0, 60),
    signature_first_40: (fields.Signature as string).slice(0, 40),
    signature_length: (fields.Signature as string).length,
  });
}
