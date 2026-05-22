/** Shared input validators. Single source of truth so checkout, register, and any future routes use the same rules. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function emailLooksValid(s: string): boolean {
  return EMAIL_RE.test(s);
}

/** Normalize an email for storage / lookup: trimmed, lowercased. */
export function normalizeEmail(s: string): string {
  return s.trim().toLowerCase();
}

/**
 * Vercel CLI sometimes pulls env values with a literal "\n" at the end —
 * strip both real and literal newlines. Same helper used everywhere env
 * values are consumed.
 */
export function cleanEnv(v: string | undefined): string {
  return (v ?? '').replace(/\\n/g, '').replace(/[\r\n]/g, '').trim();
}
