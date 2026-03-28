import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal, SectionRevealContainer, SectionRevealItem } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Private aviation, yacht charters, luxury automotive, financial services, currency exchange, and fine jewellery — all through a single relationship.',
}

const services = [
  {
    title: 'Aviation',
    subtitle: 'Private jet charters worldwide',
    href: '/services/aviation',
    imageSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800',
    partner: 'Shy Aviation',
  },
  {
    title: 'Yachts',
    subtitle: 'Superyacht charter experiences',
    href: '/services/yachts',
    imageSrc: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
    partner: 'Optimum Yachts',
  },
  {
    title: 'Automotive',
    subtitle: 'Exotic fleet hire & chauffeur',
    href: '/services/automotive',
    imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    partner: 'Dubai Fleet',
  },
  {
    title: 'Financial',
    subtitle: 'Wealth structuring & advisory',
    href: '/services/financial',
    imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    partner: 'EXRM',
  },
  {
    title: 'Currency',
    subtitle: 'FX & crypto transactions',
    href: '/services/currency',
    imageSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    partner: 'EFX Online',
  },
  {
    title: 'Jewellery',
    subtitle: 'Private collections & commissions',
    href: '/services/jewellery',
    imageSrc: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    partner: 'LV & others',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-pearl section-py">
        <div className="container-site">
          <SectionReveal>
            <Label color="muted" className="mb-4">WHAT WE DO</Label>
            <h1 className="text-section-heading font-display font-light text-obsidian max-w-2xl">
              Six verticals.
              <br />
              One point of contact.
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white section-py">
        <div className="container-site">
          <SectionRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <SectionRevealItem key={service.href}>
                <Link href={service.href} className="group block overflow-hidden border border-border-subtle hover:border-champagne transition-colors duration-500" style={{ borderRadius: '4px' }}>
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-label text-champagne mb-1">{service.partner.toUpperCase()}</p>
                      <h2 className="font-display font-light italic text-white text-[28px]">{service.title}</h2>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <p className="text-[14px] text-text-secondary">{service.subtitle}</p>
                    <span className="text-champagne text-label group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </SectionRevealItem>
            ))}
          </SectionRevealContainer>
        </div>
      </section>
    </div>
  )
}
