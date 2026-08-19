'use server';

import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';
import { getBankTransferGroupId, getPaidGroupId, getProduct } from '@/lib/products';

/**
 * Admin: confirm a bank-transfer order as paid.
 *
 * Bank transfers have no myPOS webhook, so without this the order is stuck at
 * `awaiting_bank_transfer` forever — the buyer never enters the paid MailerLite
 * group and (for the audiobook) never gets dashboard access. This flips the
 * order to `paid` and runs the same paid-group move the card webhook does.
 *
 * The route is already gated by HTTP Basic auth in proxy.ts (the /admin prefix),
 * so this server action inherits that protection.
 *
 * NOTE: for the €25 audiobook bought by bank transfer (a new account), the buyer
 * still needs a Clerk account whose email matches the order — they self-register
 * (or use the dashboard "different email? contact us" path). Course/€-only
 * products need no account, so the status flip + group move is sufficient.
 */
export async function markBankOrderPaid(formData: FormData) {
  const orderId = String(formData.get('orderId') ?? '').trim();
  if (!orderId) return;

  const sql = getDb();
  // Only promote orders still awaiting transfer — idempotent, can't re-flip a
  // cancelled/already-paid row.
  const rows = (await sql`
    UPDATE orders
    SET status = 'paid'
    WHERE mypos_order_id = ${orderId} AND status = 'awaiting_bank_transfer'
    RETURNING email, name, product
  `) as { email: string; name: string; product: string }[];

  const order = rows[0];
  if (!order) {
    revalidatePath('/admin/bank-orders');
    return;
  }

  const product = getProduct(order.product);
  if (product) {
    try {
      const paidGroupId = getPaidGroupId(product.slug);
      const bankTransferGroupId = getBankTransferGroupId(product.slug);
      if (paidGroupId) {
        await moveToPaid(order.email, paidGroupId, bankTransferGroupId || undefined, order.name);
      } else {
        console.error('[admin mark-paid] missing paid group id', { orderId, product: product.slug });
      }
    } catch (err) {
      // Status is already flipped; surface the sync failure in logs for manual retry.
      console.error('[admin mark-paid] moveToPaid FAILED', { orderId, error: (err as Error).message });
    }
  }

  revalidatePath('/admin/bank-orders');
}
