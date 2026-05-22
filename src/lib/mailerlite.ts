const API_URL = 'https://connect.mailerlite.com/api';

async function request(path: string, method: string, body?: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${(process.env.MAILERLITE_API_KEY ?? '').trim()}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
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

export async function moveToPaid(email: string, paidGroupId: string, pendingGroupId?: string) {
  if (!paidGroupId) {
    throw new Error('moveToPaid called without a paid group id');
  }

  const data = await request(`/subscribers/${encodeURIComponent(email)}`, 'GET');
  const subscriberId = data.data?.id;

  if (subscriberId && pendingGroupId) {
    try {
      await request(`/subscribers/${subscriberId}/groups/${pendingGroupId}`, 'DELETE');
    } catch {
      // subscriber may not be in the group — not fatal
    }
  }

  await request('/subscribers', 'POST', {
    email,
    groups: [paidGroupId],
  });
}
