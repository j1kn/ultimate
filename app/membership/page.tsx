import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'
import EnquiryForm from '@/components/forms/EnquiryForm'

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Vertex Concierge membership tiers — Obsidian, Platinum, and Black. Priority access and dedicated concierge management.',
}

const tiers = [
  {
    name: 'Obsidian',
    description: 'The foundation of the Vertex Concierge experience. Priority access and a dedicated relationship manager.',
    features: [
      'Dedicated concierge manager',
      'Priority service on all requests',
      'Monthly lifestyle briefing',
      'Partner network access',
    ],
    color: 'border-border-subtle',
  },
  {
    name: 'Platinum',
    description: 'Elevated access and bespoke lifestyle management for the most discerning individuals.',
    features: [
      'Everything in Obsidian',
      '24/7 direct concierge line',
      'Quarterly private events access',
      'Preferential partner rates',
      'Proactive lifestyle curation',
    ],
    color: 'border-champagne',
    featured: true,
  },
  {
    name: 'Black',
    description: 'Our most exclusive tier. Absolute access, absolute discretion, no limits.',
    features: [
      'Everything in Platinum',
      'Personal concierge on retainer',
      'Private club memberships',
      'Access to closed-door opportunities',
      'International presence management',
    ],
    color: 'border-obsidian',
  },
]

export default function MembershipPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-obsidian section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <Label color="champagne" className="mb-5">MEMBERSHIP</Label>
            <h1 className="font-display font-light italic text-white mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05' }}>
              Access that
              <br />
              others cannot offer.
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-[520px]">
              Vertex Concierge membership grants you a dedicated team, priority access across
              all six service verticals, and privileges reserved exclusively for our members.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-pearl section-py">
        <div className="container-site">
          <SectionReveal className="mb-12">
            <Label color="muted" className="mb-3">THE TIERS</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              Choose your level of access.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`bg-white p-8 border-2 ${tier.color} relative h-full flex flex-col`}
                  style={{ borderRadius: '4px' }}
                >
                  {tier.featured && (
                    <div className="absolute top-0 right-6 -translate-y-1/2">
                      <span className="bg-champagne text-obsidian text-[10px] font-medium tracking-wider uppercase px-3 py-1" style={{ borderRadius: '2px' }}>
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-[32px] font-light text-obsidian">{tier.name}</h3>
                    <p className="text-text-secondary text-[14px] mt-2 leading-relaxed">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                          <path d="M1 5.5l4 4L13 1" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[14px] text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-center w-full py-3.5 border border-obsidian text-obsidian text-label tracking-wider hover:bg-obsidian hover:text-white transition-all duration-300"
                    style={{ borderRadius: '2px' }}
                  >
                    ENQUIRE
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership enquiry form */}
      <section className="bg-white section-py">
        <div className="container-site max-w-2xl">
          <SectionReveal className="mb-10">
            <Label color="muted" className="mb-4">APPLY FOR MEMBERSHIP</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              Begin your
              <br />
              membership journey.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <EnquiryForm defaultService="General Enquiry" sourcePage="/membership" />
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
