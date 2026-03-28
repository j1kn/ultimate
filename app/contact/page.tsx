import type { Metadata } from 'next'
import EnquiryForm from '@/components/forms/EnquiryForm'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Speak to a Vertex Concierge specialist — available 24 hours, 365 days a year.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-pearl section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <SectionReveal>
              <Label color="muted" className="mb-4">GET IN TOUCH</Label>
              <h1 className="text-section-heading font-display font-light text-obsidian mb-6">
                Let&apos;s arrange
                <br />
                the exceptional.
              </h1>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-[400px]">
                Our concierge team is available 24 hours a day, 365 days a year.
                Complete the form and a specialist will be in touch within 2 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-border-subtle" style={{ borderRadius: '2px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-label text-text-muted mb-1">EMAIL</p>
                    <a href="mailto:concierge@vertexconcierge.com" className="text-[15px] text-obsidian hover:text-champagne transition-colors">
                      concierge@vertexconcierge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-border-subtle" style={{ borderRadius: '2px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 1C5.238 1 3 3.462 3 5.5c0 3.375 5 9.5 5 9.5s5-6.125 5-9.5C13 3.462 10.762 1 8 1zm0 6a2 2 0 110-4 2 2 0 010 4z" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-label text-text-muted mb-1">LOCATION</p>
                    <p className="text-[15px] text-obsidian">London & Dubai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-border-subtle" style={{ borderRadius: '2px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="#C9A96E" strokeWidth="1.2"/>
                      <path d="M8 5v3l2 2" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-label text-text-muted mb-1">AVAILABILITY</p>
                    <p className="text-[15px] text-obsidian">24 hours · 365 days</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={0.15}>
              <div className="bg-white p-8 lg:p-10 border border-border-subtle" style={{ borderRadius: '4px' }}>
                <EnquiryForm sourcePage="/contact" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
