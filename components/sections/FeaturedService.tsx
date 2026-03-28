'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Label from '@/components/ui/Label'

const benefits = [
  'Empty leg flights and last-minute availability sourced globally',
  'Dedicated flight coordinators available 24/7, 365 days a year',
  'Seamless ground transportation, catering, and customs clearance',
]

export default function FeaturedService() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        {/* Image */}
        <motion.div
          className="relative h-[400px] lg:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?w=1200"
            alt="Private aviation — luxury aircraft on the tarmac"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col justify-center p-10 lg:p-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Label className="mb-5" color="champagne">FEATURED SERVICE</Label>
          <h2 className="text-section-heading font-display font-light text-obsidian mb-6">
            Private
            <br />
            Aviation
          </h2>

          <ul className="space-y-5 mb-10">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 shrink-0" aria-hidden="true">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6l4 4L15 1" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-text-secondary text-[15px] leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/services/aviation"
            className="inline-flex items-center justify-center self-start px-8 py-4 bg-obsidian text-white text-label tracking-wider hover:bg-surface-dark transition-colors"
            style={{ borderRadius: '2px' }}
          >
            EXPLORE AVIATION
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
