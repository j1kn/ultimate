import Link from 'next/link'
import { SectionReveal, SectionRevealContainer, SectionRevealItem } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

const services = [
  {
    title: 'Aviation',
    description: 'Private jet charters, helicopter transfers, and air ambulance services arranged with absolute discretion.',
    href: '/services/aviation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M28 16L4 8l6 8-6 8 24-8z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M10 16h12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Yachts',
    description: 'Superyacht charters and crewed sailing experiences across the Mediterranean, Caribbean, and beyond.',
    href: '/services/yachts',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 22c0 0 6-10 12-10s12 10 12 10H4z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M16 12V6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 6l8 6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 26h24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Automotive',
    description: 'Curated fleet management, exotic car hire, and chauffeur services from our Dubai and London operations.',
    href: '/services/automotive',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="8" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
        <circle cx="16" cy="16" r="3" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
        <path d="M16 8v2M16 22v2M8 16h2M22 16h2" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Financial',
    description: 'Wealth structuring, independent advisory, and high-net-worth financial planning through EXRM.',
    href: '/services/financial',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26V14l10-8 10 8v12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="12" y="20" width="8" height="6" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
        <path d="M12 16h8M12 13h8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Currency',
    description: 'Preferential exchange rates and cryptocurrency transactions handled with speed and security.',
    href: '/services/currency',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 12l4-4 4 4M20 20l4 4-4 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v14M20 10v14" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 20h8M16 12h8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Jewellery',
    description: 'Access to private collections from Louis Vuitton and other maisons. Bespoke commissions arranged.',
    href: '/services/jewellery',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 6l4 6H12l4-6z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 12l4 6 4 8 4-8 4-6H8z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M12 12l4 14M20 12l-4 14" stroke="#C9A96E" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-pearl section-py">
      <div className="container-site">
        <SectionReveal className="mb-14">
          <Label color="muted" className="mb-4">OUR SERVICES</Label>
          <h2 className="text-section-heading font-display font-light text-obsidian">
            Every privilege,
            <br />
            one relationship.
          </h2>
        </SectionReveal>

        <SectionRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <SectionRevealItem key={service.href}>
              <Link
                href={service.href}
                className="group block bg-white border border-border-subtle p-8 transition-all duration-500 hover:shadow-lg hover:border-t-champagne"
                style={{
                  borderRadius: '4px',
                  borderTopWidth: '2px',
                  borderTopColor: 'transparent',
                }}
              >
                <div className="mb-6 transition-transform duration-500 group-hover:scale-105 origin-left">
                  {service.icon}
                </div>
                <h3 className="font-body font-medium text-[18px] text-obsidian mb-3">
                  {service.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed line-clamp-2 mb-6">
                  {service.description}
                </p>
                <span className="text-label text-text-muted group-hover:text-champagne transition-colors duration-300">
                  EXPLORE →
                </span>
              </Link>
            </SectionRevealItem>
          ))}
        </SectionRevealContainer>
      </div>
    </section>
  )
}
