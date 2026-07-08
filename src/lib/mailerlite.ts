const API_URL = 'https://connect.mailerlite.com/api';

async function request(path: string, method: string, body?: unknown) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(process.env.MAILERLITE_API_KEY ?? '').trim()}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MailerLite ${method} ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

export async function addToPending(email: string, name: string, pendingGroupId: string) {
  if (!pendingGroupId) {
    throw new Error('addToPending called without a pending group id');
  }
  const [firstName, ...rest] = name.trim().split(' ');
  await request('/subscribers', 'POST', {
    email,
    fields: { name: firstName, last_name: rest.join(' ') },
    groups: [pendingGroupId],
  });
}

export async function moveToPaid(email: string, paidGroupId: string, pendingGroupId?: string, name?: string) {
  if (!paidGroupId) {
    throw new Error('moveToPaid called without a paid group id');
  }

  // Upsert first: products without a pending group (e.g. izlez-ot-zastoy) sell
  // to buyers who were never captured pre-purchase, so the subscriber may not
  // exist yet. POST /subscribers creates-or-updates and adds the paid group
  // either way. No `status` is sent — an unsubscribed contact stays unsubscribed.
  const [firstName, ...rest] = (name ?? '').trim().split(' ');
  const data = await request('/subscribers', 'POST', {
    email,
    ...(firstName ? { fields: { name: firstName, last_name: rest.join(' ') } } : {}),
    groups: [paidGroupId],
  });

  const subscriberId = data.data?.id;
  if (subscriberId && pendingGroupId) {
    try {
      await request(`/subscribers/${subscriberId}/groups/${pendingGroupId}`, 'DELETE');
    } catch {
      // subscriber may not be in the group — not fatal
    }
  }
}
