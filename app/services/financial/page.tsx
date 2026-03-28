import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Financial Services',
  description: 'Wealth structuring, independent advisory, and HNW financial planning through EXRM.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="6" stroke="#C9A96E" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Wealth Structuring',
    description: 'Bespoke wealth structuring solutions including trusts, family offices, and offshore arrangements for high-net-worth individuals.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 24l8-8 4 4 8-12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8h8v8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Investment Advisory',
    description: 'Independent advice across equities, alternatives, real estate, and structured products — aligned to your goals and risk profile.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 14h16M8 18h10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="#C9A96E" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Estate & Tax Planning',
    description: 'Comprehensive estate planning, inheritance tax mitigation, and multi-jurisdictional tax structuring for international clients.',
  },
]

export default function FinancialPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'FINANCIAL SERVICES',
        title: 'Wealth managed\nwith precision.',
        subtitle: 'Independent financial advisory and wealth structuring for ultra-HNW individuals, provided through our FCA-authorised partner EXRM.',
        imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920',
        imageAlt: 'Modern financial district at night — glass towers reflecting city lights',
      }}
      intro={{
        body: 'Vertex Concierge introduces clients to EXRM, an independent FCA-authorised financial adviser specialising in complex, high-value wealth management. Whether you require bespoke investment advisory, multi-jurisdictional tax planning, or family office establishment, EXRM\'s team of senior advisers delivers outcomes that conventional wealth managers cannot.',
        pullQuote: 'Financial clarity is not a luxury — it is a foundation.',
      }}
      features={features}
      partner={{
        name: 'EXRM',
        description: 'EXRM is an independent, FCA-authorised financial adviser with a focused practice serving ultra-high-net-worth individuals, family offices, and entrepreneurs. Their advisers have decades of experience across global markets, tax law, and wealth structuring.',
      }}
      service="Financial Services"
      disclaimer="Financial services are provided through EXRM, an independent FCA-authorised adviser. Vertex Concierge acts as an introducer only and does not provide financial advice. Your capital is at risk. Past performance is not a reliable indicator of future results."
      relatedServices={[
        { title: 'Currency Exchange', href: '/services/currency', imageSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
        { title: 'Aviation', href: '/services/aviation', imageSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800' },
      ]}
    />
  )
}
