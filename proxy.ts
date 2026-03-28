import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Auth disabled — all routes are publicly accessible
// TODO: Re-enable Clerk auth when ready by replacing this with clerkMiddleware
export default function proxy(_req: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
