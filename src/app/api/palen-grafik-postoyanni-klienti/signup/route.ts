export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { checkRateLimit, clientIp, rateLimitResponse } from '@/lib/rate-limit';
import { cleanEnv, emailLooksValid, normalizeEmail } from '@/lib/validators';

const MAILERLITE_SUBSCRIBERS = 'https://connect.mailerlite.com/api/subscribers';

export async function POST(request: Request) {
  const rate = checkRateLimit({
    key: `full-calendar-signup:${clientIp(request)}`,
    limit: 5,
    windowMs: 60 * 1000,
  });
  if (!rate.ok) return rateLimitResponse(rate.retryAfter);

  let body: { name?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Невалидни данни във формата.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = normalizeEmail(body.email ?? '');
  if (!name) return NextResponse.json({ error: 'Въведи име и фамилия.' }, { status: 400 });
  if (!email || !emailLooksValid(email)) {
    return NextResponse.json({ error: 'Въведи валиден имейл адрес.' }, { status: 400 });
  }

  const apiKey = cleanEnv(process.env.MAILERLITE_API_KEY);
  const groupId = cleanEnv(process.env.MAILERLITE_FULL_CALENDAR_GROUP_ID);
  if (!apiKey || !groupId) {
    console.error('[full-calendar signup] MailerLite configuration missing');
    return NextResponse.json({ error: 'Регистрацията временно не е достъпна. Опитай отново след малко.' }, { status: 500 });
  }

  const [firstName, ...rest] = name.split(/\s+/);
  try {
    const response = await fetch(MAILERLITE_SUBSCRIBERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: { name: firstName, ...(rest.length ? { last_name: rest.join(' ') } : {}) },
        groups: [groupId],
        status: 'active',
      }),
    });
    if (!response.ok && response.status !== 422) {
      console.error('[full-calendar signup] MailerLite subscribe failed', response.status);
      return NextResponse.json({ error: 'Не успяхме да завършим регистрацията. Опитай отново.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[full-calendar signup] MailerLite request failed', (error as Error).message);
    return NextResponse.json({ error: 'Няма връзка със системата. Опитай отново след малко.' }, { status: 502 });
  }
}

