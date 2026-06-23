export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { cleanEnv, emailLooksValid, normalizeEmail } from '@/lib/validators';

const ML_API = 'https://connect.mailerlite.com/api/subscribers';

interface OptinBody {
  name?: string;
  email?: string;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const rate = checkRateLimit({
    key: `freebie-optin:${ip}`,
    limit: 5,
    windowMs: 60 * 1000,
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  let body: OptinBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Невалидни данни.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = normalizeEmail(body.email ?? '');

  if (!name) {
    return NextResponse.json({ error: 'Моля въведи името си.' }, { status: 400 });
  }
  if (!email || !emailLooksValid(email)) {
    return NextResponse.json({ error: 'Моля въведи валиден имейл адрес.' }, { status: 400 });
  }

  const apiKey = cleanEnv(process.env.MAILERLITE_API_KEY);
  if (!apiKey) {
    console.error('[freebie optin] MAILERLITE_API_KEY missing');
    return NextResponse.json(
      { error: 'Записването временно не работи. Опитай по-късно.' },
      { status: 500 },
    );
  }

  const groupId = cleanEnv(process.env.MAILERLITE_FREEBIE_GROUP_ID);

  const parts = name.split(' ');
  const firstName = parts[0] ?? name;
  const lastName = parts.slice(1).join(' ');
  const payload: {
    email: string;
    fields: { name: string; last_name?: string };
    groups?: string[];
    status: 'active';
  } = {
    email,
    fields: lastName ? { name: firstName, last_name: lastName } : { name: firstName },
    status: 'active',
  };
  if (groupId) payload.groups = [groupId];

  const mlHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };
  const mlBody = JSON.stringify(payload);

  // Retry once on a transient failure (network throw or 5xx) so a brief
  // MailerLite blip doesn't strip the lead's opt-in. We still only set the
  // funnel_optin cookie on a confirmed subscribe (or 422 already-subscribed) —
  // never handing out funnel eligibility for a request we couldn't persist.
  let res: Response | null = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      res = await fetch(ML_API, { method: 'POST', headers: mlHeaders, body: mlBody });
      if (res.status >= 500 && attempt === 0) continue; // transient server error → retry once
      break;
    } catch (err) {
      console.error('[freebie optin] MailerLite call threw', { attempt, error: (err as Error).message });
      res = null;
      if (attempt === 0) continue; // network error → retry once
    }
  }

  if (!res) {
    return NextResponse.json(
      { error: 'Мрежова грешка. Опитай отново след малко.' },
      { status: 502 },
    );
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('[freebie optin] MailerLite subscribe failed', res.status, data);
    if (res.status === 422) {
      const resp = NextResponse.json({ ok: true, status: 'already_subscribed' });
      resp.cookies.set('funnel_optin', String(Date.now()), { path: '/', maxAge: 60 * 60 * 24 * 30, httpOnly: false });
      return resp;
    }
    return NextResponse.json(
      { error: 'Не успяхме да те запишем. Опитай отново след малко.' },
      { status: 502 },
    );
  }

  const resp = NextResponse.json({ ok: true, status: 'subscribed' });
  resp.cookies.set('funnel_optin', String(Date.now()), { path: '/', maxAge: 60 * 60 * 24 * 30, httpOnly: false });
  return resp;
}
