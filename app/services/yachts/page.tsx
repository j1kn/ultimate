import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Yacht Charter',
  description: 'Superyacht charters and crewed sailing experiences arranged through Optimum Yachts.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 22c0 0 6-10 12-10s12 10 12 10H4z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12V6M16 6l8 6M4 26h24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Superyacht Selection',
    description: 'Access to an exclusive fleet of motor yachts and sailing vessels from 30 to 100+ metres.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 20l4-8 4 4 4-8 4 8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24h24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Destination Planning',
    description: 'Bespoke itineraries across the Mediterranean, Caribbean, and the Pacific — with experienced local captains.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="8" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M12 16l3 3 5-5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full Crew & Provisioning',
    description: 'Professional crew, gourmet provisioning, watersports equipment, and all onboard arrangements managed for you.',
  },
]

export default function YachtsPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'YACHT CHARTER',
        title: 'The ocean,\nat your command.',
        subtitle: 'Superyacht charters and crewed sailing experiences in the world\'s most extraordinary waters, arranged through Optimum Yachts.',
        imageSrc: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920',
        imageAlt: 'Luxury superyacht on calm Mediterranean waters',
      }}
      intro={{
        body: 'There is no finer way to experience the world\'s most beautiful coastlines than aboard a private yacht. Vertex Concierge works exclusively with Optimum Yachts to source and arrange the finest vessels in the charter market — from sleek motor yachts to classic sailing ketches — fully crewed and provisioned to your exact specifications.',
        pullQuote: 'The sea does not change. Only the way one experiences it.',
      }}
      features={features}
      partner={{
        name: 'Optimum Yachts',
        description: 'Optimum Yachts is a premier yacht charter broker with a curated portfolio of the finest vessels in the Mediterranean, Caribbean, and beyond. With an experienced team of charter specialists, they deliver unparalleled service from enquiry to disembarkation.',
      }}
      service="Yachts"
      relatedServices={[
        { title: 'Aviation', href: '/services/aviation', imageSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800' },
        { title: 'Automotive', href: '/services/automotive', imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
      ]}
    />
  )
}
