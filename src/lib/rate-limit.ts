/**
 * In-memory sliding-window rate limiter.
 *
 * Per-instance state: each Vercel function instance has its own counter. This
 * is good enough to block casual flooding from a single source but won't stop
 * coordinated DDoS — for that, swap the storage for Upstash KV / Vercel KV
 * via the same interface.
 *
 * Returns `{ ok: false, retryAfter }` when the caller has exceeded the limit
 * within the window; otherwise `{ ok: true, remaining }`.
 */

type Hit = { count: number; resetAt: number };
const buckets = new Map<string, Hit>();

interface Options {
  /** Distinct bucket key (e.g. `'checkout:1.2.3.4'`). */
  key: string;
  /** Max hits allowed inside `windowMs`. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
}

interface Result {
  ok: boolean;
  remaining: number;
  retryAfter: number; // seconds until the bucket resets (0 if ok)
}

export function checkRateLimit({ key, limit, windowMs }: Options): Result {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  if (existing.count >= limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { ok: true, remaining: limit - existing.count, retryAfter: 0 };
}

/** Extract the caller IP from forwarding headers, with a stable fallback. */
export function clientIp(request: { headers: { get(name: string): string | null } }): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
}

/** Periodic cleanup so the bucket map doesn't grow unbounded. Called lazily on each check is overkill; we just clear stale entries occasionally. */
let lastSweep = 0;
function sweep() {
  const now = Date.now();
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [k, v] of buckets) {
    if (v.resetAt <= now) buckets.delete(k);
  }
}

export function rateLimitResponse(retryAfter: number): Response {
  sweep();
  return new Response(
    JSON.stringify({ error: 'Too many requests. Please try again shortly.' }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(retryAfter),
      },
    },
  );
}
