import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Get locale from cookie
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

    // Add locale to request headers for server components
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', locale);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|flags).*)'],
};
