import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Vertex Concierge — twelve years of arranging the exceptional for the world\'s most discerning individuals.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-obsidian section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <Label color="champagne" className="mb-6">OUR STORY</Label>
            <h1 className="font-display font-light italic text-white mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05' }}>
              The world&apos;s finest
              <br />
              concierge, redefined.
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-[560px]">
              Founded on the belief that true luxury is about access, not excess —
              Vertex Concierge has spent twelve years quietly arranging the
              impossible for the people who can afford anything.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="text-section-heading font-display font-light text-obsidian mb-8">
                Built on
                <br />
                relationships.
              </h2>
              <div className="space-y-5 text-text-secondary text-base leading-relaxed">
                <p>
                  Vertex Concierge was established with a singular purpose: to give ultra-high-net-worth
                  individuals access to a single, trusted point of contact for every extraordinary arrangement
                  in their lives.
                </p>
                <p>
                  Our relationships span private aviation, superyachting, luxury automotive, financial services,
                  currency markets, and fine jewellery — built over more than a decade with partners who share
                  our commitment to excellence.
                </p>
                <p>
                  We operate with complete discretion. Our clients are never a ticket number, and their
                  requests are never an inconvenience. They are the entire reason we exist.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="relative h-[480px] overflow-hidden" style={{ borderRadius: '4px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900"
                  alt="Elegant private lounge — the Vertex Concierge environment"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-pearl section-py">
        <div className="container-site">
          <SectionReveal className="mb-14">
            <Label color="muted" className="mb-4">OUR VALUES</Label>
            <h2 className="text-section-heading font-display font-light text-obsidian">
              What we stand for.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Discretion',
                body: 'Everything we know about our clients stays with us. Unconditionally, permanently, and without exception.',
              },
              {
                title: 'Access',
                body: 'We open doors that others cannot. Our network is built on trust and maintained through results.',
              },
              {
                title: 'Precision',
                body: 'Every detail is considered. Every arrangement is confirmed. Nothing is left to chance.',
              },
            ].map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08}>
                <div className="bg-white p-8 border border-border-subtle" style={{ borderRadius: '4px' }}>
                  <h3 className="font-display text-[28px] font-light italic text-obsidian mb-4">{v.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">{v.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian section-py">
        <div className="container-site max-w-2xl text-center">
          <SectionReveal>
            <h2 className="font-display font-light italic text-white mb-6"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Ready to arrange something extraordinary?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-champagne text-champagne text-label tracking-wider hover:bg-champagne hover:text-obsidian transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              SPEAK TO A CONCIERGE
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
