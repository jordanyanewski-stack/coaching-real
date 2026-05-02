export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';
import { verifyNotify } from '@/lib/mypos';

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const { valid, fields } = verifyNotify(rawBody);

  if (!valid) {
    console.error('myPOS notify: invalid signature', rawBody);
    return new Response('OK', { status: 200 });
  }

  const { OrderID, Status, TransactionID } = fields;

  if (Status === '1') {
    const sql = getDb();

    await sql`
      UPDATE orders
      SET status = 'paid',
          mypos_transaction_id = ${TransactionID ?? null},
          updated_at = now()
      WHERE mypos_order_id = ${OrderID}
    `;

    const rows = await sql`
      SELECT email FROM orders WHERE mypos_order_id = ${OrderID}
    ` as { email: string }[];

    if (rows[0]?.email) {
      moveToPaid(rows[0].email).catch((err) =>
        console.error('MailerLite moveToPaid error:', err)
      );
    }
  }

  return new Response('OK', { status: 200 });
}
