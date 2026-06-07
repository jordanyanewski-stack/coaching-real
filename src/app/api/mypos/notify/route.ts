export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';
import { verifyNotify } from '@/lib/mypos';
import { getPaidGroupId, getPendingGroupId, getProduct, type ProductSlug } from '@/lib/products';
import { cleanEnv } from '@/lib/validators';

async function inviteIfNewBuyer(email: string) {
  if (!email) return;
  try {
    const clerk = await clerkClient();
    const existing = await clerk.users.getUserList({ emailAddress: [email] });
    if (existing.totalCount > 0) return; // already has an account

    const siteUrl = cleanEnv(process.env.NEXT_PUBLIC_SITE_URL) || 'https://coachingreallive.com';
    await clerk.invitations.createInvitation({
      emailAddress: email,
      redirectUrl: `${siteUrl}/sign-up`,
      ignoreExisting: true,
    });
  } catch (err) {
    console.error('[myPOS notify] Clerk invitation FAILED', {
      email,
      error: (err as Error).message,
    });
  }
}

export async function POST(request: NextRequest) {
  // The whole handler is wrapped: ANY error path returns 200 to MyPOS so it
  // doesn't retry. Idempotency of the SQL UPDATE means a successful retry on
  // a transient failure is fine, but in practice the side-effects (MailerLite
  // group move, Clerk invite) are not safely re-runnable in bulk and a 5xx
  // here causes MyPOS to retry indefinitely. Log loudly instead.
  try {
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
      try {
        await sql`
          UPDATE orders
          SET status = 'paid',
              mypos_transaction_id = ${IPC_Trnref ?? null},
              updated_at = now()
          WHERE mypos_order_id = ${OrderID}
        `;
      } catch (err) {
        console.error('[myPOS notify] order UPDATE FAILED', {
          orderId: OrderID,
          error: (err as Error).message,
        });
        return new Response('OK', { status: 200 });
      }

      let row: { email: string; product: string } | undefined;
      try {
        const rows = (await sql`
          SELECT email, product FROM orders WHERE mypos_order_id = ${OrderID}
        `) as { email: string; product: string }[];
        row = rows[0];
      } catch (err) {
        console.error('[myPOS notify] order SELECT FAILED', {
          orderId: OrderID,
          error: (err as Error).message,
        });
        return new Response('OK', { status: 200 });
      }

      if (row?.email) {
        const product = getProduct(row.product);
        if (product) {
          const paidGroupId = getPaidGroupId(product.slug as ProductSlug);
          const pendingGroupId = getPendingGroupId(product.slug as ProductSlug);
          if (paidGroupId) {
            try {
              await moveToPaid(row.email, paidGroupId, pendingGroupId || undefined);
            } catch (err) {
              console.error('[myPOS notify] MailerLite moveToPaid FAILED', {
                email: row.email,
                product: product.slug,
                error: (err as Error).message,
              });
            }
          } else {
            console.error('[myPOS notify] Missing paid group id env var', {
              email: row.email,
              product: product.slug,
              envVar: product.mlPaidGroupIdEnv,
            });
          }
        } else {
          console.error('[myPOS notify] Unknown product on paid order', {
            email: row.email,
            product: row.product,
            orderId: OrderID,
          });
        }
        // Only products that grant dashboard access (the audiobook) need a Clerk
        // account, so invite only when the product opts in via `requiresAccount`.
        // Live Zoom programs and email-delivered courses create no account.
        if (product?.requiresAccount) {
          await inviteIfNewBuyer(row.email);
        }
      }
    } else if (IPCmethod === 'IPCPurchaseRollback' || IPCmethod === 'IPCPurchaseCancel') {
      try {
        await sql`
          UPDATE orders
          SET status = ${IPCmethod === 'IPCPurchaseCancel' ? 'cancelled' : 'failed'},
              updated_at = now()
          WHERE mypos_order_id = ${OrderID}
        `;
      } catch (err) {
        console.error('[myPOS notify] rollback UPDATE FAILED', {
          orderId: OrderID,
          method: IPCmethod,
          error: (err as Error).message,
        });
      }
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('[myPOS notify] UNHANDLED', {
      error: (err as Error).message,
      stack: (err as Error).stack,
    });
    return new Response('OK', { status: 200 });
  }
}
