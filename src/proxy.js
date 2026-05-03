import { NextResponse } from 'next/server'
import { auth } from '@/app/lib/auth'

export async function proxy(request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    const isLoginPage = request.nextUrl.pathname.startsWith('/Login');

    if (!session && !isLoginPage) {
      return NextResponse.redirect(new URL('/Login', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.log("Middleware error:", err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [ "/CrouseDettails/:path*" ],
};