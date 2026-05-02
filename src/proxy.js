import { NextResponse } from 'next/server'
import { auth } from './app/lib/auth'
import { headers } from 'next/headers'
 
 
export async function proxy(request) {

  const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log(session)

   

if(session){
    return NextResponse.next()
}
  return NextResponse.redirect(new URL('/Login', request.url))


}

export const config = {
  matcher:  ["/CrouseDettails/:path*"]
}
