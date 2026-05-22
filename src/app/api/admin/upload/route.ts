export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';
import { fileTypeFromBuffer } from 'file-type';
import { uploadToBunny } from '@/lib/bunny';

// Middleware (src/middleware.ts) already gates /api/admin/* behind basic-auth.
// If the request reaches this handler, the caller is authorized.

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/gif']);

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const file = form.get('file');

  if (!(file instanceof File)) {
    return Response.json({ error: 'No file provided.' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ error: 'File too large (max 10 MB).' }, { status: 413 });
  }

  // Sniff actual content — do NOT trust client-provided file.type.
  const buffer = Buffer.from(await file.arrayBuffer());
  const detected = await fileTypeFromBuffer(buffer);
  if (!detected || !ALLOWED_MIME.has(detected.mime)) {
    return Response.json(
      { error: `Unsupported file type${detected ? `: ${detected.mime}` : ''}.` },
      { status: 415 },
    );
  }

  try {
    // Replace name extension with the verified one so saved filename matches the actual bytes.
    const baseName = file.name.replace(/\.[^.]+$/, '') || 'upload';
    const verifiedFile = new File([buffer], `${baseName}.${detected.ext}`, { type: detected.mime });
    const result = await uploadToBunny(verifiedFile, 'blog/');
    return Response.json(result);
  } catch (err) {
    console.error('[admin upload]', err);
    return Response.json(
      { error: (err as Error).message || 'Upload failed.' },
      { status: 500 },
    );
  }
}
