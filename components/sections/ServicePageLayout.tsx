import Link from 'next/link'
import Image from 'next/image'
import ServiceHero from './ServiceHero'
import EnquiryForm from '@/components/forms/EnquiryForm'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Partner {
  name: string
  description: string
  url?: string
}

interface RelatedService {
  title: string
  href: string
  imageSrc: string
}

interface ServicePageLayoutProps {
  hero: {
    label: string
    title: string
    subtitle: string
    imageSrc: string
    imageAlt: string
  }
  intro: {
    body: string
    pullQuote: string
  }
  features: Feature[]
  partner: Partner
  service: string
  relatedServices: RelatedService[]
  disclaimer?: string
}

export default function ServicePageLayout({
  hero,
  intro,
  features,
  partner,
  service,
  relatedServices,
  disclaimer,
}: ServicePageLayoutProps) {
  return (
    <>
      <ServiceHero {...hero} />

      {/* Introduction */}
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-base text-text-secondary leading-relaxed">{intro.body}</p>
              {disclaimer && (
                <p className="text-[12px] text-text-muted mt-6 leading-relaxed border-l-2 border-border-subtle pl-4">
                  {disclaimer}
                </p>
              )}
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <blockquote className="border-l-2 border-champagne pl-6">
                <p className="font-display text-[clamp(20px,3vw,28px)] font-light italic text-obsidian leading-snug">
                  &ldquo;{intro.pullQuote}&rdquo;
                </p>
              </blockquote>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-pearl section-py">
        <div className="container-site">
          <SectionReveal className="mb-12">
            <Label color="muted" className="mb-3">WHAT WE OFFER</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              Everything you need,
              <br />
              nothing you don&apos;t.
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="bg-white p-8 border border-border-subtle" style={{ borderRadius: '4px' }}>
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="font-body font-medium text-[17px] text-obsidian mb-3">{feature.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Block */}
      <section className="bg-white section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <div className="border border-border-subtle p-10" style={{ borderRadius: '4px' }}>
              <Label color="muted" className="mb-6">OUR PARTNER</Label>
              <h3 className="font-display text-[clamp(24px,3vw,36px)] font-light text-obsidian mb-4">
                {partner.name}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mb-6">{partner.description}</p>
              {partner.url && (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-label text-champagne hover:text-obsidian transition-colors"
                >
                  VISIT PARTNER WEBSITE →
                </a>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-pearl section-py">
        <div className="container-site max-w-2xl">
          <SectionReveal className="mb-10">
            <Label color="muted" className="mb-4">MAKE AN ENQUIRY</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              Let&apos;s arrange
              <br />
              something remarkable.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <EnquiryForm defaultService={service} sourcePage={`/services/${service.toLowerCase()}`} />
          </SectionReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white section-py">
        <div className="container-site">
          <SectionReveal className="mb-10">
            <Label color="muted" className="mb-3">EXPLORE MORE</Label>
            <h2 className="text-subheading font-display font-light text-obsidian">Related Services</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((rs) => (
              <SectionReveal key={rs.href}>
                <Link href={rs.href} className="group block overflow-hidden" style={{ borderRadius: '4px' }}>
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={rs.imageSrc}
                      alt={rs.title}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/30 transition-colors" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <h3 className="font-display font-light italic text-white text-[22px]">{rs.title}</h3>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
