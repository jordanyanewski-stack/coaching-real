export const runtime = 'nodejs';

import { randomUUID } from 'crypto';
import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { getProduct } from '@/lib/products';

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
    VALUES (${orderId}, ${email.trim()}, ${name.trim()}, ${parseFloat(product.price)}, ${product.currency}, 'awaiting_bank_transfer', ${product.slug})
  `;

  return Response.json({ orderId });
}
