import type { Metadata } from 'next'
import ServicePageLayout from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Currency Exchange',
  description: 'Preferential exchange rates and cryptocurrency transactions through EFX Online.',
}

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 12l4-4 4 4M20 20l4 4-4 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v14M20 10v14M8 20h8M16 12h8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Preferential Rates',
    description: 'High-volume exchange rates not available at retail banks, consistently beating high-street and online providers.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M10 14h6l-2-4M22 18h-6l2 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Multi-Currency Transfers',
    description: 'Fast, secure international transfers in 40+ currencies with same-day or next-day settlement where available.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M20 12a4 4 0 100-8 4 4 0 000 8z" stroke="#C9A96E" strokeWidth="1.5"/>
        <path d="M4 28a8 8 0 0116 0" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 14v6M21 17h6" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Crypto Transactions',
    description: 'Regulated cryptocurrency exchange and custody services for Bitcoin, Ethereum, and major digital assets.',
  },
]

export default function CurrencyPage() {
  return (
    <ServicePageLayout
      hero={{
        label: 'CURRENCY EXCHANGE',
        title: 'Move money\nwithout friction.',
        subtitle: 'Preferential foreign exchange rates and cryptocurrency services through EFX Online — fast, secure, and available to our clients at institutional rates.',
        imageSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920',
        imageAlt: 'Abstract financial data and currency exchange concept',
      }}
      intro={{
        body: 'Large international transactions demand speed, security, and rate transparency. Through our partnership with EFX Online, Vertex Concierge clients access institutional-grade foreign exchange services — including live rate quotes, multi-currency transfers, and regulated cryptocurrency transactions — without the overhead of traditional banking.',
        pullQuote: 'The right rate, at the right moment, makes all the difference.',
      }}
      features={features}
      partner={{
        name: 'EFX Online',
        description: 'EFX Online is a specialist FX and payments company providing preferential exchange rates, multi-currency accounts, and cryptocurrency services to high-net-worth individuals and businesses. All services are subject to applicable UK regulatory requirements.',
      }}
      service="Currency Exchange"
      disclaimer="Currency exchange and cryptocurrency services are subject to applicable UK regulatory requirements. Exchange rates are indicative and subject to change. Cryptocurrency values can fluctuate significantly and past performance is not indicative of future results."
      relatedServices={[
        { title: 'Financial Services', href: '/services/financial', imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800' },
        { title: 'Jewellery', href: '/services/jewellery', imageSrc: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' },
        { title: 'Membership', href: '/membership', imageSrc: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=800' },
      ]}
    />
  )
}
