export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get('order');
  const email = request.nextUrl.searchParams.get('email');
  if (!orderId && !email) {
    return Response.json({ error: 'pass ?order= or ?email=' }, { status: 400 });
  }

  const sql = getDb();

  if (orderId) {
    await sql`
      UPDATE orders SET status = 'paid', updated_at = now()
      WHERE mypos_order_id = ${orderId}
    `;
  } else if (email) {
    await sql`
      UPDATE orders SET status = 'paid', updated_at = now()
      WHERE email = ${email} AND status != 'paid'
    `;
  }

  const targetEmail = email ?? (
    (await sql`SELECT email FROM orders WHERE mypos_order_id = ${orderId!}` as { email: string }[])[0]?.email
  );

  if (targetEmail) {
    try {
      await moveToPaid(targetEmail);
      return Response.json({ ok: true, email: targetEmail, moved_to_paid: true });
    } catch (err) {
      return Response.json({ ok: false, email: targetEmail, mailerlite_error: (err as Error).message });
    }
  }

  return Response.json({ ok: false, error: 'no email found' });
}
