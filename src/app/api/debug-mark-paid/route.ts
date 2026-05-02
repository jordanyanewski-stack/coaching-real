export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';
import { moveToPaid } from '@/lib/mailerlite';

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get('order');
  if (!orderId) return Response.json({ error: 'missing ?order=' }, { status: 400 });

  const sql = getDb();
  await sql`
    UPDATE orders
    SET status = 'paid', updated_at = now()
    WHERE mypos_order_id = ${orderId}
  `;

  const rows = await sql`
    SELECT email, status FROM orders WHERE mypos_order_id = ${orderId}
  ` as { email: string; status: string }[];

  if (rows[0]?.email) {
    try {
      await moveToPaid(rows[0].email);
    } catch (err) {
      return Response.json({ updated: rows[0], mailerlite_error: (err as Error).message });
    }
  }

  return Response.json({ updated: rows[0] ?? null });
}
