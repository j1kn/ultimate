import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Sign In | Vertex Concierge',
}

// Dynamically import SignIn so it only loads when Clerk is configured
async function ClerkSignIn() {
  const hasClerk = !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.CLERK_SECRET_KEY
  )

  if (!hasClerk) {
    return (
      <div className="text-center">
        <p className="text-white/50 text-[14px] mb-6">
          Client portal access is by invitation only.
          <br />
          Please contact your concierge manager directly.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 border border-champagne text-champagne text-label tracking-wider hover:bg-champagne hover:text-obsidian transition-all duration-300"
          style={{ borderRadius: '2px' }}
        >
          CONTACT US
        </Link>
      </div>
    )
  }

  const { SignIn } = await import('@clerk/nextjs')
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: '#C9A96E',
          colorBackground: '#111111',
          colorText: '#ffffff',
          colorTextSecondary: '#9A9A9A',
          colorInputBackground: '#1a1a1a',
          colorInputText: '#ffffff',
          borderRadius: '2px',
        },
        elements: {
          card: 'shadow-none border border-white/10',
          headerTitle: 'font-display font-light text-white',
          headerSubtitle: 'text-white/50',
          formButtonPrimary: 'bg-champagne text-obsidian hover:bg-champagne-light',
          footerActionLink: 'text-champagne',
        },
      }}
    />
  )
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="font-display text-[22px] tracking-[0.25em] uppercase text-white hover:text-champagne transition-colors"
          >
            VERTEX
          </Link>
          <p className="text-label text-champagne mt-2">CLIENT PORTAL</p>
        </div>
        <ClerkSignIn />
      </div>
    </div>
  )
}
