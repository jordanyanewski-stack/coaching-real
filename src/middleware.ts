import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, type NextRequest } from 'next/server';

// Edge-runtime-safe constant-time equality. Node's crypto.timingSafeEqual
// isn't available here, so XOR every byte regardless of length so the
// observable timing doesn't leak how far the prefix matched.
function constantTimeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const aBuf = enc.encode(a);
  const bBuf = enc.encode(b);
  let mismatch = aBuf.length === bBuf.length ? 0 : 1;
  const len = Math.max(aBuf.length, bBuf.length);
  for (let i = 0; i < len; i++) {
    mismatch |= (aBuf[i] ?? 0) ^ (bBuf[i] ?? 0);
  }
  return mismatch === 0;
}

function isAdminAuthorized(request: NextRequest): boolean {
  const expected = (process.env.ADMIN_PASSWORD ?? '').trim();
  if (!expected) return false;

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) return false;

  try {
    const decoded = atob(header.slice(6));
    const [, password] = decoded.split(':');
    if (!password) return false;
    return constantTimeEqual(password, expected);
  } catch {
    return false;
  }
}

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;

  // myPOS posts back to URL_OK / URL_CANCEL with method POST. Static
  // thank-you / payment-cancelled pages only respond to GET (405),
  // so convert the POST to a 303 See Other → GET, preserving ?order=.
  if (
    request.method === 'POST' &&
    (pathname === '/thank-you' || pathname === '/payment-cancelled')
  ) {
    return NextResponse.redirect(request.nextUrl, 303);
  }

  // Basic-auth gate for /admin and /api/admin (separate from Clerk auth).
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    if (!isAdminAuthorized(request)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Coaching Real Admin"' },
      });
    }
    return NextResponse.next();
  }

  // Clerk auth gate for /dashboard and any future protected routes.
  if (isProtectedRoute(request)) {
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('redirect_url', request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
