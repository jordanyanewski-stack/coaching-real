export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';
import { uploadToBunny } from '@/lib/bunny';

// Middleware (src/middleware.ts) already gates /api/admin/* behind basic-auth.
// If the request reaches this handler, the caller is authorized.

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_PREFIXES = ['image/'];

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const file = form.get('file');

  if (!(file instanceof File)) {
    return Response.json({ error: 'No file provided.' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ error: 'File too large (max 10 MB).' }, { status: 413 });
  }
  if (!ALLOWED_PREFIXES.some(p => file.type.startsWith(p))) {
    return Response.json({ error: `Unsupported file type: ${file.type}` }, { status: 415 });
  }

  try {
    const result = await uploadToBunny(file, 'blog/');
    return Response.json(result);
  } catch (err) {
    console.error('[admin upload]', err);
    return Response.json(
      { error: (err as Error).message || 'Upload failed.' },
      { status: 500 },
    );
  }
}
