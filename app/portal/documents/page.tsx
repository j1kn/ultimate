import type { Metadata } from 'next'
import Label from '@/components/ui/Label'

export const metadata: Metadata = { title: 'Documents' }

// TODO: replace with API data
const documents = [
  { name: 'Membership Agreement', type: 'PDF', date: '1 Jan 2025', size: '245 KB' },
  { name: 'Aviation Booking Confirmation — VC-24891023', type: 'PDF', date: '10 Jan 2025', size: '128 KB' },
  { name: 'Financial Advisory Terms of Engagement', type: 'PDF', date: '15 Nov 2024', size: '312 KB' },
  { name: 'GDPR Consent Record', type: 'PDF', date: '1 Jan 2025', size: '89 KB' },
]

export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-8">
        <Label color="muted" className="mb-2">PORTAL</Label>
        <h1 className="font-display text-[clamp(24px,4vw,40px)] font-light text-obsidian">Documents</h1>
      </div>

      <div className="bg-white border border-border-subtle overflow-hidden" style={{ borderRadius: '4px' }}>
        <div className="divide-y divide-border-subtle">
          {documents.map((doc) => (
            <div key={doc.name} className="flex items-center gap-4 px-6 py-5 hover:bg-pearl/50 transition-colors">
              <div className="w-10 h-10 bg-pearl flex items-center justify-center shrink-0" style={{ borderRadius: '2px' }}>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M9 1H3a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7L9 1z" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 1v6h6M5 10h6M5 13h4" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[14px] text-obsidian truncate">{doc.name}</p>
                <p className="text-small text-text-muted">{doc.type} · {doc.size} · {doc.date}</p>
              </div>
              <button
                className="shrink-0 text-label text-champagne hover:text-obsidian transition-colors tracking-wider"
                aria-label={`Download ${doc.name}`}
              >
                DOWNLOAD
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
