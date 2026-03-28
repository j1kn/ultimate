import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'

const tiers = ['Obsidian', 'Platinum', 'Black']

export default function MembershipCTA() {
  return (
    <section className="bg-obsidian section-py">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-section-heading font-display font-light italic text-white mb-6">
              Access that others
              <br />
              simply cannot offer.
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tiers.map((tier) => (
                <span
                  key={tier}
                  className="inline-flex items-center px-5 py-2 border border-white/30 text-white/70 text-label tracking-wider"
                  style={{ borderRadius: '2px' }}
                >
                  {tier.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-white/70 text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Our membership tiers provide priority access, dedicated concierge
              managers, and privileges reserved exclusively for members.
            </p>

            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-10 py-4 border border-champagne text-champagne text-label tracking-wider hover:bg-champagne hover:text-obsidian transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              ENQUIRE ABOUT MEMBERSHIP
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
