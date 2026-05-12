import { NextResponse, type NextRequest } from 'next/server';

function isAdminAuthorized(request: NextRequest): boolean {
  const expected = (process.env.ADMIN_PASSWORD ?? '').trim();
  if (!expected) return false;

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) return false;

  try {
    const decoded = atob(header.slice(6));
    const [, password] = decoded.split(':');
    return password === expected;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // myPOS posts back to URL_OK / URL_CANCEL with method POST. Our static
  // thank-you / payment-cancelled pages only respond to GET, which yields
  // a 405. Convert the POST to a 303 See Other → GET on the same URL so
  // the page renders and the ?order= query string is preserved.
  if (
    request.method === 'POST' &&
    (pathname === '/thank-you' || pathname === '/payment-cancelled')
  ) {
    return NextResponse.redirect(request.nextUrl, 303);
  }

  if (pathname.startsWith('/admin')) {
    if (!isAdminAuthorized(request)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Coaching Real Admin"' },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/thank-you', '/payment-cancelled', '/admin/:path*'],
};
