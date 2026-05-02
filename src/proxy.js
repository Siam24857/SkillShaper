import { NextResponse } from 'next/server'
import { auth } from './app/lib/auth'

export async function middleware(request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session && !request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.log("Middleware error:", err);
    return NextResponse.next();  
  }
}

export const config = {
  matcher: ["/CrouseDettails/:path*"],
};