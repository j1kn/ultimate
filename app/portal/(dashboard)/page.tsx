import type { Metadata } from 'next'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Dashboard',
}

// TODO: replace with API data
const mockSummary = {
  nextBooking: {
    service: 'Private Aviation — London Luton to Nice',
    date: '15 April 2025',
    status: 'Confirmed',
    ref: 'VC-24891023',
  },
  activeServices: 2,
  documents: 4,
  concierge: {
    name: 'James Hartley',
    title: 'Senior Concierge Manager',
    phone: '+44 7700 000001',
  },
}

function getGreeting(): string {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default async function PortalDashboard() {
  let firstName = 'there'
  try {
    const user = await currentUser()
    firstName = user?.firstName ?? 'there'
  } catch {
    // Clerk not configured — use default greeting
  }

  return (
    <div>
      <div className="mb-8">
        <Label color="muted" className="mb-2">PORTAL</Label>
        <h1 className="font-display text-[clamp(28px,4vw,44px)] font-light text-obsidian">
          {getGreeting()}, {firstName}.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {/* Next Booking */}
        <div className="bg-white p-6 border border-border-subtle col-span-1 sm:col-span-2" style={{ borderRadius: '4px' }}>
          <Label color="muted" className="mb-4">NEXT BOOKING</Label>
          <p className="font-body font-medium text-obsidian text-[16px] mb-1">{mockSummary.nextBooking.service}</p>
          <p className="text-text-muted text-[14px] mb-3">{mockSummary.nextBooking.date}</p>
          <div className="flex items-center justify-between">
            <span className="bg-green-50 text-green-700 text-[11px] font-medium tracking-wider px-3 py-1 uppercase" style={{ borderRadius: '2px' }}>
              {mockSummary.nextBooking.status}
            </span>
            <span className="text-small text-text-muted">{mockSummary.nextBooking.ref}</span>
          </div>
        </div>

        {/* Active Services */}
        <div className="bg-white p-6 border border-border-subtle" style={{ borderRadius: '4px' }}>
          <Label color="muted" className="mb-4">ACTIVE SERVICES</Label>
          <p className="font-display text-[48px] font-light text-obsidian leading-none">{mockSummary.activeServices}</p>
          <Link href="/portal/bookings" className="text-label text-champagne mt-4 block hover:text-obsidian transition-colors">
            VIEW ALL →
          </Link>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 border border-border-subtle" style={{ borderRadius: '4px' }}>
          <Label color="muted" className="mb-4">DOCUMENTS</Label>
          <p className="font-display text-[48px] font-light text-obsidian leading-none">{mockSummary.documents}</p>
          <Link href="/portal/documents" className="text-label text-champagne mt-4 block hover:text-obsidian transition-colors">
            VIEW ALL →
          </Link>
        </div>
      </div>

      {/* Your Concierge */}
      <div className="bg-obsidian p-8 max-w-md" style={{ borderRadius: '4px' }}>
        <Label color="champagne" className="mb-4">YOUR CONCIERGE</Label>
        <p className="font-display text-[22px] font-light italic text-white mb-1">{mockSummary.concierge.name}</p>
        <p className="text-white/50 text-[14px] mb-6">{mockSummary.concierge.title}</p>
        <a
          href={`tel:${mockSummary.concierge.phone}`}
          className="flex items-center gap-3 text-champagne text-[14px] hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 2h3l1.5 3.5L6 7a8 8 0 004 4l1.5-1.5L15 11v3a1 1 0 01-1 1A13 13 0 012 2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {mockSummary.concierge.phone}
        </a>
      </div>
    </div>
  )
}
