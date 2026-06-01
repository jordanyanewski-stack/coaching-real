export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';
import { getDb } from '@/lib/db';

// Keeps the Neon compute awake so a customer's checkout never hits a cold-start
// DB wakeup (the ~35s first-request hang we saw). Triggered by a Vercel cron
// every few minutes — see vercel.json.
//
// Gated by CRON_SECRET when it's set (Vercel sends `Authorization: Bearer
// <CRON_SECRET>` on cron invocations). Allowed when unset so the keepalive works
// immediately on deploy, before the secret is configured.
export async function GET(request: NextRequest) {
  const secret = (process.env.CRON_SECRET ?? '').trim();
  if (secret) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${secret}`) {
      return new Response('Unauthorized', { status: 401 });
    }
  }

  try {
    const sql = getDb();
    await sql`SELECT 1`;
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[keepalive] DB ping failed', { error: (err as Error).message });
    return Response.json({ ok: false }, { status: 500 });
  }
}
