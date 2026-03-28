import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Luxury Automotive',
  description: 'Curated fleet management, exotic car hire, and chauffeur services from our Dubai and London operations.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="12" width="24" height="10" rx="3" stroke="#C9A96E" strokeWidth="1.5"/>
        <circle cx="9" cy="22" r="2.5" stroke="#C9A96E" strokeWidth="1.5"/>
        <circle cx="23" cy="22" r="2.5" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M4 16h24M8 12V8h10l4 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Dubai Exotic Fleet',
    description: 'Curated selection of supercars and luxury SUVs available for short or long-term hire across the UAE.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M16 10v6l3 3" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Executive Chauffeur',
    description: 'Professionally trained chauffeurs with vetted vehicles in London, Dubai, and major international cities.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26V14l10-8 10 8v12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 26v-8h8v8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 18h4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Fleet Management',
    description: 'Full concierge management of your personal vehicle collection including maintenance, storage, and logistics.',
  },
]

export default function AutomotivePage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'LUXURY AUTOMOTIVE',
        title: 'Every road,\nworth driving.',
        subtitle: 'Curated exotic car hire, executive chauffeur services, and personal fleet management from our Dubai and London operations.',
        imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920',
        imageAlt: 'Luxury sports car on an open road at dusk',
      }}
      intro={{
        body: 'Whether you require a Lamborghini for a weekend in Dubai, a discreet chauffeur for a series of London meetings, or full management of a private vehicle collection, Vertex Concierge provides comprehensive automotive services through our established network of luxury operators. Every vehicle is immaculate, every driver is vetted, and every arrangement is seamless.',
        pullQuote: 'The right vehicle transforms any journey into an occasion.',
      }}
      features={features}
      partner={{
        name: 'Dubai Luxury Fleet',
        description: 'Our Dubai automotive partner maintains one of the UAE\'s finest curated fleets of exotic and prestige vehicles, available for daily hire, extended rental, or long-term arrangement for our members and clients.',
      }}
      service="Automotive"
      relatedServices={[
        { title: 'Aviation', href: '/services/aviation', imageSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800' },
        { title: 'Yachts', href: '/services/yachts', imageSrc: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
      ]}
    />
  )
}
