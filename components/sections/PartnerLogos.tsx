import { SectionReveal } from '@/components/ui/SectionReveal'
import Label from '@/components/ui/Label'

const partners = [
  { name: 'SHY AVIATION', description: 'Private Aviation' },
  { name: 'OPTIMUM YACHTS', description: 'Yacht Charter' },
  { name: 'EXRM', description: 'Financial Advisory' },
  { name: 'EFX ONLINE', description: 'Currency Exchange' },
  { name: 'LOUIS VUITTON', description: 'Fine Jewellery' },
  { name: 'DUBAI FLEET', description: 'Luxury Automotive' },
]

export default function PartnerLogos() {
  return (
    <section className="bg-white section-py">
      <div className="container-site">
        <SectionReveal className="mb-14 text-center">
          <Label color="muted" className="mb-4">OUR PARTNERS</Label>
          <h2 className="text-section-heading font-display font-light text-obsidian">
            The names that
            <br />
            define excellence.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center py-8 px-4 border border-border-subtle hover:border-champagne transition-colors duration-300 group"
                style={{ borderRadius: '4px' }}
              >
                <span
                  className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-text-muted group-hover:text-obsidian transition-colors duration-300 text-center leading-tight"
                >
                  {partner.name}
                </span>
                <span className="font-body text-[10px] text-text-muted/60 mt-2 tracking-wider uppercase group-hover:text-champagne transition-colors">
                  {partner.description}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
