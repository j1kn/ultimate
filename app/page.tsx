import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import BrandStatement from '@/components/sections/BrandStatement'
import FeaturedService from '@/components/sections/FeaturedService'
import StatsBar from '@/components/sections/StatsBar'
import JournalPreview from '@/components/sections/JournalPreview'
import MembershipCTA from '@/components/sections/MembershipCTA'
import PartnerLogos from '@/components/sections/PartnerLogos'

export const metadata: Metadata = {
  title: 'Vertex Concierge — Private Luxury Concierge Services',
  description:
    "From private aviation and superyachts to bespoke financial solutions, Vertex Concierge orchestrates the exceptional for the world's most discerning individuals.",
  openGraph: {
    title: 'Vertex Concierge — Private Luxury Concierge Services',
    description: 'The world, arranged for you.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <BrandStatement />
      <FeaturedService />
      <StatsBar />
      <JournalPreview />
      <MembershipCTA />
      <PartnerLogos />
    </>
  )
}
