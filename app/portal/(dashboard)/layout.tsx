import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Client Portal',
    default: 'Client Portal | Vertex Concierge',
  },
}

const portalNav = [
  { label: 'Dashboard', href: '/portal', icon: '◈' },
  { label: 'Bookings', href: '/portal/bookings', icon: '◻' },
  { label: 'Documents', href: '/portal/documents', icon: '◱' },
]

// Auth disabled — portal is publicly viewable
// TODO: Re-enable auth when Clerk keys are configured
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-pearl flex flex-col lg:flex-row pt-20">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-60 bg-obsidian min-h-[calc(100vh-80px)] shrink-0">
        <div className="p-8 border-b border-white/10">
          <p className="text-label text-champagne">CLIENT PORTAL</p>
        </div>
        <nav className="flex-1 p-4">
          {portalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 transition-colors text-[14px] mb-1"
              style={{ borderRadius: '4px' }}
            >
              <span className="text-champagne">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <Link
            href="/"
            className="text-label text-white/30 hover:text-white/60 transition-colors"
          >
            ← MAIN SITE
          </Link>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-obsidian border-t border-white/10 z-50 flex">
        {portalNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex-1 flex flex-col items-center justify-center py-3 text-white/50 hover:text-white transition-colors text-[11px] gap-1"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <main className="flex-1 p-6 lg:p-10 pb-20 lg:pb-10">{children}</main>
    </div>
  )
}
