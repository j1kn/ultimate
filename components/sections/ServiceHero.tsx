import Image from 'next/image'
import Link from 'next/link'
import Label from '@/components/ui/Label'

interface ServiceHeroProps {
  label: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
}

export default function ServiceHero({
  label,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText = 'Make an Enquiry',
  ctaHref = '/contact',
}: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[480px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container-site w-full">
        <div className="max-w-xl">
          <Label className="mb-5" color="champagne">{label}</Label>
          <h1 className="font-display font-light italic text-white mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.05' }}>
            {title}
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-[440px] mb-8">
            {subtitle}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-champagne text-obsidian text-label tracking-wider hover:bg-champagne-light transition-colors"
            style={{ borderRadius: '2px' }}
          >
            {ctaText.toUpperCase()}
          </Link>
        </div>
      </div>
    </section>
  )
}
