export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';
import { verifyNotify } from '@/lib/mypos';

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const { valid, fields } = verifyNotify(rawBody);

  if (!valid) {
    console.error('[myPOS notify] invalid signature', { rawBody });
    return new Response('OK', { status: 200 });
  }

  const { IPCmethod, OrderID, IPC_Trnref } = fields;
  console.log('[myPOS notify]', { IPCmethod, OrderID, IPC_Trnref });

  const sql = getDb();

  if (IPCmethod === 'IPCPurchaseNotify') {
    await sql`
      UPDATE orders
      SET status = 'paid',
          mypos_transaction_id = ${IPC_Trnref ?? null},
          updated_at = now()
      WHERE mypos_order_id = ${OrderID}
    `;

    const rows = await sql`
      SELECT email FROM orders WHERE mypos_order_id = ${OrderID}
    ` as { email: string }[];

    if (rows[0]?.email) {
      try {
        await moveToPaid(rows[0].email);
      } catch (err) {
        console.error('[myPOS notify] MailerLite moveToPaid FAILED', {
          email: rows[0].email,
          error: (err as Error).message,
        });
      }
    }
  } else if (IPCmethod === 'IPCPurchaseRollback' || IPCmethod === 'IPCPurchaseCancel') {
    await sql`
      UPDATE orders
      SET status = ${IPCmethod === 'IPCPurchaseCancel' ? 'cancelled' : 'failed'},
          updated_at = now()
      WHERE mypos_order_id = ${OrderID}
    `;
  }

  return new Response('OK', { status: 200 });
}
