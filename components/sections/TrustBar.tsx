import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

const partners = [
  { name: 'SHY AVIATION', service: 'Private Aviation' },
  { name: 'OPTIMUM YACHTS', service: 'Yacht Charter' },
  { name: 'EXRM', service: 'Financial Advisory' },
  { name: 'EFX ONLINE', service: 'Currency Exchange' },
  { name: 'LOUIS VUITTON', service: 'Fine Jewellery' },
]

export default function TrustBar() {
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <SectionReveal>
          <Label className="text-center mb-10" color="muted">TRUSTED PARTNERS</Label>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {partners.map((partner, i) => (
              <div key={partner.name} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-border-subtle text-xl hidden sm:block" aria-hidden="true">·</span>
                )}
                <span
                  className="font-body font-light tracking-[0.15em] text-[13px] uppercase text-text-muted hover:text-text-secondary transition-colors cursor-default"
                  title={partner.service}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
