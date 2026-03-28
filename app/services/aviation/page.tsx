import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Private Aviation',
  description: 'Private jet charters, helicopter transfers, and bespoke aviation services arranged through our partner Shy Aviation.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M28 16L4 8l6 8-6 8 24-8z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Global Charter Network',
    description: 'Access to thousands of aircraft worldwide including light jets, super-mids, and large cabin long-range jets.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M16 10v6l4 2" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '24/7 Flight Operations',
    description: 'Dedicated flight coordinators available round the clock to arrange, amend, or reroute your travel at a moment\'s notice.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 26V14l10-8 10 8v12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="20" width="8" height="6" stroke="#C9A96E" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Empty Leg Opportunities',
    description: 'Priority access to empty leg flights for significant cost savings on one-way routes without compromising on comfort.',
  },
]

export default function AviationPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'PRIVATE AVIATION',
        title: 'Fly without\ncompromise.',
        subtitle: 'Charter flights arranged globally through Shy Aviation, our trusted aviation partner with decades of experience in private air travel.',
        imageSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920',
        imageAlt: 'Interior of a luxury private jet',
      }}
      intro={{
        body: 'Private aviation redefines what it means to travel. With Vertex Concierge and our partner Shy Aviation, every flight is arranged around your schedule, your preferences, and your destinations — with no queues, no delays, and complete privacy. From a last-minute flight to a multi-leg itinerary across continents, we handle every detail.',
        pullQuote: 'Your schedule. Your aircraft. Your world.',
      }}
      features={features}
      partner={{
        name: 'Shy Aviation',
        description: 'Shy Aviation is a leading private jet charter broker with over two decades of experience connecting high-net-worth clients with the world\'s finest aircraft. Their team of aviation experts provides 24/7 support and access to over 3,000 aircraft worldwide.',
        url: 'https://shyaviation.com',
      }}
      service="Aviation"
      relatedServices={[
        { title: 'Yachts', href: '/services/yachts', imageSrc: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800' },
        { title: 'Automotive', href: '/services/automotive', imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
      ]}
    />
  )
}
