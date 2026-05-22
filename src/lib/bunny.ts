/**
 * Bunny CDN storage upload helper. Used by the admin image upload route to
 * push files into the coaching-real storage zone so they're served via
 * https://coaching-real.b-cdn.net/<path>.
 */

export interface UploadResult {
  url: string;
  filename: string;
  size: number;
}

function requireEnv(name: string): string {
  const v = (process.env[name] ?? '').trim();
  if (!v) {
    throw new Error(`Missing env var: ${name}`);
  }
  return v;
}

/** Generate a path-safe filename, preserving the extension. */
function sanitizeFilename(original: string, prefix = ''): string {
  const dot = original.lastIndexOf('.');
  const ext = dot >= 0 ? original.slice(dot).toLowerCase() : '';
  // 12 chars from a UUID — collision-resistant, hides original name from URL.
  const rand = crypto.randomUUID().replace(/-/g, '').slice(0, 12);
  return `${prefix}${rand}${ext}`;
}

export async function uploadToBunny(
  file: { name: string; type: string; arrayBuffer: () => Promise<ArrayBuffer> },
  prefix = 'blog/',
): Promise<UploadResult> {
  const endpoint = requireEnv('BUNNY_STORAGE_ENDPOINT');
  const zone     = requireEnv('BUNNY_STORAGE_ZONE');
  const password = requireEnv('BUNNY_STORAGE_PASSWORD');
  const hostname = requireEnv('BUNNY_CDN_HOSTNAME');

  const filename = sanitizeFilename(file.name, prefix);
  const body = await file.arrayBuffer();

  const res = await fetch(`${endpoint}/${zone}/${filename}`, {
    method: 'PUT',
    headers: {
      'AccessKey': password,
      'Content-Type': file.type || 'application/octet-stream',
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Bunny upload failed (${res.status}): ${text}`);
  }

  return {
    url: `https://${hostname}/${filename}`,
    filename,
    size: body.byteLength,
  };
}
