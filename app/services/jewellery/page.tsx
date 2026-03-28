import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Fine Jewellery',
  description: 'Access to private collections from Louis Vuitton and other maisons. Bespoke commissions arranged.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 6l4 6H12l4-6zM8 12l4 6 4 8 4-8 4-6H8z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Private Collections Access',
    description: 'Exclusive access to private sales, vault collections, and limited editions from Louis Vuitton and other prestigious maisons.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bespoke Commissions',
    description: 'Collaborate with master craftspeople to design and commission one-of-a-kind pieces using the world\'s finest gemstones.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="16" height="20" rx="2" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M12 12h8M12 16h8M12 20h5" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Authentication & Valuation',
    description: 'Expert authentication, certification, and valuation services for existing pieces in your collection.',
  },
]

export default function JewelleryPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'FINE JEWELLERY',
        title: 'Beauty without\ncompromise.',
        subtitle: 'Access to private sales and bespoke commissions from Louis Vuitton and other prestigious maisons, arranged exclusively for Vertex clients.',
        imageSrc: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920',
        imageAlt: 'Close-up of fine diamond jewellery on dark velvet',
      }}
      intro={{
        body: 'The finest jewellery is rarely found on a shelf. Through our relationships with Louis Vuitton and other elite maisons, Vertex Concierge provides clients with access to private collections, sale opportunities, and the ability to commission bespoke pieces from master craftspeople. Each arrangement is handled with absolute discretion.',
        pullQuote: 'The finest things are not bought — they are arranged.',
      }}
      features={features}
      partner={{
        name: 'Louis Vuitton & Partners',
        description: 'Vertex Concierge maintains established relationships with some of the world\'s most prestigious jewellery houses and independent master craftspeople, enabling our clients to access pieces that never reach the public market.',
      }}
      service="Jewellery"
      relatedServices={[
        { title: 'Automotive', href: '/services/automotive', imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800' },
        { title: 'Currency Exchange', href: '/services/currency', imageSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
      ]}
    />
  )
}
