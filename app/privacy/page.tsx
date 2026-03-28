import type { Metadata } from 'next'
import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Vertex Concierge collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-white section-py">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <Label color="muted" className="mb-4">LEGAL</Label>
            <h1 className="text-section-heading font-display font-light text-obsidian mb-8">Privacy Policy</h1>
          </SectionReveal>

          <SectionReveal delay={0.1} className="prose prose-slate max-w-none">
            <p className="text-small text-text-muted mb-8">Last updated: January 2025</p>

            <div className="space-y-8 text-text-secondary text-base leading-relaxed">
              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">1. Who we are</h2>
                <p>Vertex Concierge (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a luxury concierge services company registered in England and Wales. We are committed to protecting your personal data and operating in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">2. What data we collect</h2>
                <p>We collect personal data that you provide to us when making an enquiry, completing a membership application, or using our client portal. This includes your name, email address, telephone number, and any preferences or requirements you share with us.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">3. How we use your data</h2>
                <p>We use your personal data to respond to enquiries, manage your account, arrange services on your behalf, and send you relevant communications where you have consented to receive them. We do not sell your personal data to third parties.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">4. Data retention</h2>
                <p>We retain your personal data for as long as necessary to provide our services and comply with our legal obligations. Client relationship data is typically retained for 7 years following the conclusion of our relationship.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">5. Your rights</h2>
                <p>Under UK GDPR, you have the right to access, rectify, erase, restrict, or object to processing of your personal data. To exercise any of these rights, please contact us at privacy@vertexconcierge.com.</p>
              </section>

              <section>
                <h2 className="font-body font-medium text-obsidian text-[18px] mb-3">6. Contact</h2>
                <p>For any data protection queries, please contact our Data Protection Officer at privacy@vertexconcierge.com.</p>
              </section>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
