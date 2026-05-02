export const runtime = 'nodejs';

import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');
  if (!email) return Response.json({ error: 'pass ?email=' }, { status: 400 });

  const apiKeyRaw = process.env.MAILERLITE_API_KEY ?? '';
  const apiKey = apiKeyRaw.trim();
  const pendingGroupRaw = process.env.MAILERLITE_PENDING_GROUP_ID ?? '';
  const pendingGroup = pendingGroupRaw.trim();
  const paidGroupRaw = process.env.MAILERLITE_PAID_GROUP_ID ?? '';
  const paidGroup = paidGroupRaw.trim();

  const env_check = {
    api_key_length: apiKeyRaw.length,
    api_key_trimmed_length: apiKey.length,
    api_key_had_whitespace: apiKeyRaw !== apiKey,
    pending_group: pendingGroup,
    pending_had_whitespace: pendingGroupRaw !== pendingGroup,
    paid_group: paidGroup,
    paid_had_whitespace: paidGroupRaw !== paidGroup,
  };

  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      fields: { name: 'Debug', last_name: 'Test' },
      groups: [pendingGroup],
    }),
  });

  const text = await res.text();
  let parsed: unknown;
  try { parsed = JSON.parse(text); } catch { parsed = text; }

  return Response.json({
    env_check,
    request: {
      url: 'https://connect.mailerlite.com/api/subscribers',
      email,
      group: pendingGroup,
    },
    response: {
      status: res.status,
      ok: res.ok,
      body: parsed,
    },
  });
}
