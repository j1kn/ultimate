import type { Metadata } from 'next'
import Label from '@/components/ui/Label'

export const metadata: Metadata = { title: 'Bookings' }

// TODO: replace with API data
const bookings = [
  {
    ref: 'VC-24891023',
    service: 'Private Aviation',
    description: 'London Luton → Nice Côte d\'Azur',
    date: '15 Apr 2025',
    status: 'Confirmed' as const,
  },
  {
    ref: 'VC-24730821',
    service: 'Yacht Charter',
    description: 'Mediterranean — 7 night itinerary',
    date: '3 Jun 2025',
    status: 'Pending' as const,
  },
  {
    ref: 'VC-24510234',
    service: 'Automotive',
    description: 'Dubai — Lamborghini Urus, 3 days',
    date: '12 Feb 2025',
    status: 'Completed' as const,
  },
]

const statusStyles: Record<string, string> = {
  Confirmed: 'bg-green-50 text-green-700',
  Pending: 'bg-amber-50 text-amber-700',
  Completed: 'bg-gray-50 text-gray-500',
}

export default function BookingsPage() {
  return (
    <div>
      <div className="mb-8">
        <Label color="muted" className="mb-2">PORTAL</Label>
        <h1 className="font-display text-[clamp(24px,4vw,40px)] font-light text-obsidian">Bookings</h1>
      </div>

      <div className="bg-white border border-border-subtle overflow-hidden" style={{ borderRadius: '4px' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pearl border-b border-border-subtle">
              <tr>
                {['Reference', 'Service', 'Details', 'Date', 'Status'].map((h) => (
                  <th key={h} className="text-left px-6 py-4 text-label text-text-muted">{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {bookings.map((booking) => (
                <tr key={booking.ref} className="hover:bg-pearl/50 transition-colors">
                  <td className="px-6 py-5 text-small font-medium text-obsidian">{booking.ref}</td>
                  <td className="px-6 py-5 text-small text-text-secondary">{booking.service}</td>
                  <td className="px-6 py-5 text-small text-text-secondary">{booking.description}</td>
                  <td className="px-6 py-5 text-small text-text-secondary">{booking.date}</td>
                  <td className="px-6 py-5">
                    <span className={`text-[11px] font-medium tracking-wider uppercase px-3 py-1 ${statusStyles[booking.status]}`} style={{ borderRadius: '2px' }}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
