export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';

// Minimal status probe for the thank-you page's pending-payment watcher.
// Returns only the status string — no PII. Order ids are unguessable UUIDs.
export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get('order');
  if (!orderId) {
    return Response.json({ status: 'unknown' }, { status: 400 });
  }
  try {
    const sql = getDb();
    const rows = (await sql`
      SELECT status FROM orders WHERE mypos_order_id = ${orderId} LIMIT 1
    `) as { status: string }[];
    return Response.json({ status: rows[0]?.status ?? 'unknown' });
  } catch {
    return Response.json({ status: 'unknown' }, { status: 500 });
  }
}
