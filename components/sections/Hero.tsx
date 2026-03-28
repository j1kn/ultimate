'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920"
          alt="Private aviation — interior of a luxury private jet"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-label text-champagne mb-6 block">
              PRIVATE CONCIERGE SERVICES
            </span>
          </motion.div>

          <motion.h1
            className="text-hero text-white mb-6 font-display font-light italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            The world,
            <br />
            arranged for you.
          </motion.h1>

          <motion.p
            className="text-white/80 text-base leading-relaxed max-w-[520px] mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            From private aviation and superyachts to bespoke financial solutions,
            Vertex Concierge orchestrates the exceptional for the world&apos;s most
            discerning individuals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-label tracking-wider hover:bg-white hover:text-obsidian transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              EXPLORE OUR SERVICES
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-champagne text-obsidian text-label tracking-wider hover:bg-champagne-light transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              BECOME A MEMBER
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-px h-8 bg-white/30" />
        <div className="animate-bounce-slow">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-label="Scroll down">
            <path d="M1 1l7 7 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
