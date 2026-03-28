import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Vertex Concierge partners — the world\'s leading names in aviation, yachting, finance, and luxury.',
}

const partners = [
  {
    name: 'Shy Aviation',
    category: 'Private Aviation',
    description: 'A leading private jet charter broker with over two decades of experience, providing access to 3,000+ aircraft worldwide.',
    href: '/services/aviation',
  },
  {
    name: 'Optimum Yachts',
    category: 'Yacht Charter',
    description: 'Premier yacht charter specialists with a curated portfolio spanning the Mediterranean, Caribbean, and the Pacific.',
    href: '/services/yachts',
  },
  {
    name: 'EXRM',
    category: 'Financial Advisory',
    description: 'Independent, FCA-authorised financial advisers specialising in wealth structuring and investment advisory for ultra-HNW individuals.',
    href: '/services/financial',
  },
  {
    name: 'EFX Online',
    category: 'Currency Exchange',
    description: 'Specialist FX and payments company providing preferential exchange rates and multi-currency services.',
    href: '/services/currency',
  },
  {
    name: 'Louis Vuitton',
    category: 'Fine Jewellery',
    description: 'One of the world\'s most prestigious luxury maisons, providing access to private collections and bespoke commissions.',
    href: '/services/jewellery',
  },
  {
    name: 'Dubai Luxury Fleet',
    category: 'Automotive',
    description: 'Dubai\'s premier curated exotic vehicle fleet, available for daily hire through to long-term arrangement.',
    href: '/services/automotive',
  },
]

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <section className="bg-pearl section-py">
        <div className="container-site">
          <SectionReveal className="mb-16">
            <Label color="muted" className="mb-4">OUR PARTNERS</Label>
            <h1 className="text-section-heading font-display font-light text-obsidian max-w-2xl">
              The names behind
              <br />
              the experience.
            </h1>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, i) => (
              <SectionReveal key={partner.name} delay={i * 0.07}>
                <div className="bg-white p-8 border border-border-subtle hover:border-champagne transition-colors duration-300 group" style={{ borderRadius: '4px' }}>
                  <Label color="champagne" className="mb-3">{partner.category.toUpperCase()}</Label>
                  <h2 className="font-display text-[28px] font-light text-obsidian mb-3">{partner.name}</h2>
                  <p className="text-text-secondary text-[15px] leading-relaxed mb-5">{partner.description}</p>
                  <Link
                    href={partner.href}
                    className="text-label text-champagne group-hover:text-obsidian transition-colors tracking-wider"
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
