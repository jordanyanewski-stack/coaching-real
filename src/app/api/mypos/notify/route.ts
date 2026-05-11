export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';
import { verifyNotify } from '@/lib/mypos';
import { sendPaidOrderNotification } from '@/lib/email';

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
      SELECT email, name, amount::text AS amount, currency
      FROM orders WHERE mypos_order_id = ${OrderID}
    ` as { email: string; name: string; amount: string; currency: string }[];

    const order = rows[0];
    if (order?.email) {
      try {
        await moveToPaid(order.email);
      } catch (err) {
        console.error('[myPOS notify] MailerLite moveToPaid FAILED', {
          email: order.email,
          error: (err as Error).message,
        });
      }

      try {
        await sendPaidOrderNotification({
          orderId: OrderID,
          name: order.name,
          email: order.email,
          amount: order.amount,
          currency: order.currency,
          transactionId: IPC_Trnref ?? null,
        });
      } catch (err) {
        console.error('[myPOS notify] admin email FAILED', {
          orderId: OrderID,
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
