import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: () => ({ ok: true }),
  clientIp: () => '127.0.0.1',
  rateLimitResponse: vi.fn(),
}));

describe('Пълен график signup', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
    process.env.MAILERLITE_API_KEY = 'test-key';
    process.env.MAILERLITE_FULL_CALENDAR_GROUP_ID = 'full-calendar-group';
  });

  it('rejects an invalid email before calling MailerLite', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const { POST } = await import('./route');
    const response = await POST(new Request('http://localhost/api/palen-grafik-postoyanni-klienti/signup', {
      method: 'POST', body: JSON.stringify({ name: 'Ива Петрова', email: 'invalid' }),
    }));
    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('subscribes to the dedicated free-course group', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ data: { id: 'subscriber-1' } }), { status: 201 }));
    const { POST } = await import('./route');
    const response = await POST(new Request('http://localhost/api/palen-grafik-postoyanni-klienti/signup', {
      method: 'POST', body: JSON.stringify({ name: 'Ива Петрова', email: 'iva@example.com' }),
    }));
    expect(response.status).toBe(200);
    const [, options] = fetchMock.mock.calls[0];
    expect(JSON.parse(String(options?.body))).toMatchObject({
      email: 'iva@example.com',
      groups: ['full-calendar-group'],
      status: 'active',
    });
  });
});
