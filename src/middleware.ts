import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // myPOS posts back to URL_OK / URL_CANCEL with method POST. Our static
  // thank-you / payment-cancelled pages only respond to GET, which yields
  // a 405. Convert the POST to a 303 See Other → GET on the same URL so
  // the page renders and the ?order= query string is preserved.
  if (
    request.method === 'POST' &&
    (request.nextUrl.pathname === '/thank-you' ||
      request.nextUrl.pathname === '/payment-cancelled')
  ) {
    return NextResponse.redirect(request.nextUrl, 303);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/thank-you', '/payment-cancelled'],
};
