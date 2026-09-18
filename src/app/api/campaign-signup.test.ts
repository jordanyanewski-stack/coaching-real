import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: () => ({ ok: true }),
  clientIp: () => '127.0.0.1',
  rateLimitResponse: vi.fn(),
}));

const campaigns = [
  {
    slug: 'stuck-in-the-middle',
    groupEnv: 'MAILERLITE_STUCK_MIDDLE_GROUP_ID',
    load: () => import('./stuck-in-the-middle/signup/route'),
  },
  {
    slug: 'palen-grafik-postoyanni-klienti',
    groupEnv: 'MAILERLITE_FULL_CALENDAR_GROUP_ID',
    load: () => import('./palen-grafik-postoyanni-klienti/signup/route'),
  },
];

describe.each(campaigns)('$slug registration outcome', ({ slug, groupEnv, load }) => {
  beforeEach(() => {
    vi.stubEnv('MAILERLITE_API_KEY', 'test-key');
    vi.stubEnv(groupEnv, 'test-campaign-group');
    vi.spyOn(console, 'error').mockImplementation(() => {});
    // All upstream calls are isolated; an unconfigured mock fails closed.
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Unexpected request'));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  async function submit() {
    const { POST } = await load();
    return POST(new Request(`http://localhost/api/${slug}/signup`, {
      method: 'POST',
      body: JSON.stringify({ name: 'Test Participant', email: 'test@example.com' }),
    }));
  }

  it.each([200, 201])('accepts a confirmed upsert (%i), including an existing subscriber', async (status) => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ data: { id: 'test-subscriber' } }), { status }));
    const response = await submit();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetch).toHaveBeenCalledTimes(1);
    const options = vi.mocked(fetch).mock.calls[0]?.[1];
    expect(JSON.parse(String(options?.body))).toMatchObject({ groups: ['test-campaign-group'] });
  });

  it.each([400, 401, 403, 422, 429, 500, 503])('does not report success when MailerLite rejects the request (%i)', async (status) => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ message: 'Private upstream details' }), { status }));
    const response = await submit();
    expect(response.status).toBe(502);
    const body = await response.json();
    expect(body.ok).toBeUndefined();
    expect(body.error).toEqual(expect.any(String));
    expect(JSON.stringify(body)).not.toContain('Private upstream details');
  });

  it('returns a retryable failure on a network error without leaking upstream details', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Private upstream details'));
    const response = await submit();
    expect(response.status).toBe(502);
    expect((await response.json()).ok).toBeUndefined();
    expect(JSON.stringify(vi.mocked(console.error).mock.calls)).not.toContain('Private upstream details');
  });

  it('aborts a stalled MailerLite request after eight seconds', async () => {
    const { POST } = await load();
    vi.useFakeTimers();
    vi.mocked(fetch).mockImplementation((_url, options) => new Promise((_resolve, reject) => {
      options?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true });
    }));
    const pending = POST(new Request(`http://localhost/api/${slug}/signup`, {
      method: 'POST', body: JSON.stringify({ name: 'Test Participant', email: 'test@example.com' }),
    }));
    await vi.advanceTimersByTimeAsync(8000);
    const response = await pending;
    expect(response.status).toBe(502);
    expect((await response.json()).ok).toBeUndefined();
    expect(vi.mocked(fetch).mock.calls[0]?.[1]?.signal?.aborted).toBe(true);
    expect(vi.getTimerCount()).toBe(0);
  });
});
