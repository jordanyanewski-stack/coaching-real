export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { cleanEnv, emailLooksValid, normalizeEmail } from '@/lib/validators';

const ML_API = 'https://connect.mailerlite.com/api/subscribers';

interface WaitlistBody {
  name?: string;
  email?: string;
  phone?: string;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const rate = checkRateLimit({
    key: `kickstart-waitlist:${ip}`,
    limit: 5,
    windowMs: 60 * 1000,
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  let body: WaitlistBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Невалидни данни.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = normalizeEmail(body.email ?? '');
  const phone = body.phone?.trim() ?? '';

  if (!name) {
    return NextResponse.json({ error: 'Моля въведи името си.' }, { status: 400 });
  }
  if (!email || !emailLooksValid(email)) {
    return NextResponse.json({ error: 'Моля въведи валиден имейл адрес.' }, { status: 400 });
  }

  const apiKey = cleanEnv(process.env.MAILERLITE_API_KEY);
  if (!apiKey) {
    console.error('[kickstart waitlist] MAILERLITE_API_KEY missing');
    return NextResponse.json(
      { error: 'Записването временно не работи. Опитай по-късно.' },
      { status: 500 },
    );
  }

  const groupId =
    cleanEnv(process.env.MAILERLITE_KICKSTART_WAITLIST_GROUP_ID) ||
    cleanEnv(process.env.MAILERLITE_PENDING_GROUP_ID);

  const payload: {
    email: string;
    fields: { name: string; phone?: string };
    groups?: string[];
    status: 'active';
  } = {
    email,
    fields: phone ? { name, phone } : { name },
    status: 'active',
  };
  if (groupId) payload.groups = [groupId];

  try {
    const res = await fetch(ML_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error('[kickstart waitlist] MailerLite subscribe failed', res.status, data);
      if (res.status === 422) {
        return NextResponse.json({ ok: true, status: 'already_subscribed' });
      }
      return NextResponse.json(
        { error: 'Не успяхме да те запишем. Опитай отново след малко.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, status: 'subscribed' });
  } catch (err) {
    console.error('[kickstart waitlist] MailerLite call threw', err);
    return NextResponse.json(
      { error: 'Мрежова грешка. Опитай отново след малко.' },
      { status: 502 },
    );
  }
}
