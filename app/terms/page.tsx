import type { Metadata } from 'next'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of Vertex Concierge services.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-white section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <Label color="muted" className="mb-4">LEGAL</Label>
            <h1 className="text-section-heading font-display font-light text-obsidian mb-8">Terms of Service</h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-small text-text-muted mb-8">Last updated: January 2025</p>

            <div className="space-y-8 text-text-secondary text-base leading-relaxed">
              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">1. Introduction</h2>
                <p>These Terms of Service govern your use of Vertex Concierge services. By engaging our services, you agree to these terms. Please read them carefully.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">2. Services</h2>
                <p>Vertex Concierge acts as an introducer and concierge coordinator. We arrange services through our partner network. The terms of individual services are governed by the agreements with the relevant service provider.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">3. Financial services disclaimer</h2>
                <p>Financial services described on this website are provided through EXRM, an independent FCA-authorised adviser. Vertex Concierge acts as an introducer only and does not provide regulated financial advice. Your capital is at risk.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">4. Limitation of liability</h2>
                <p>To the maximum extent permitted by law, Vertex Concierge shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or the services of our partners.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">5. Governing law</h2>
                <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.</p>
              </section>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
