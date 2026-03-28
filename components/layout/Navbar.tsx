'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Aviation', href: '/services/aviation' },
  { label: 'Yachts', href: '/services/yachts' },
  { label: 'Automotive', href: '/services/automotive' },
  { label: 'Financial', href: '/services/financial' },
  { label: 'Currency', href: '/services/currency' },
  { label: 'Jewellery', href: '/services/jewellery' },
]

const navLinks = [
  { label: 'Partners', href: '/partners' },
  { label: 'Journal', href: '/journal' },
  { label: 'Membership', href: '/membership' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isScrolled = scrollY > 60

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Wordmark */}
            <Link
              href="/"
              className={cn(
                'font-display text-[20px] tracking-[0.25em] uppercase transition-colors duration-300',
                isScrolled ? 'text-obsidian' : 'text-white'
              )}
            >
              VERTEX
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    'text-label tracking-[0.12em] transition-colors duration-300 flex items-center gap-1.5',
                    isScrolled ? 'text-text-secondary hover:text-obsidian' : 'text-white/80 hover:text-white'
                  )}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  SERVICES
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 bg-white border border-border-subtle shadow-xl py-3 w-48"
                      style={{ borderRadius: '4px' }}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-2.5 text-label text-text-secondary hover:text-obsidian hover:bg-pearl transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-label tracking-[0.12em] transition-colors duration-300',
                    isScrolled ? 'text-text-secondary hover:text-obsidian' : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  'hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-label tracking-wider border transition-all duration-300',
                  isScrolled
                    ? 'border-obsidian text-obsidian hover:bg-obsidian hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-obsidian'
                )}
                style={{ borderRadius: '2px' }}
              >
                SPEAK TO A CONCIERGE
              </Link>

              {/* Hamburger */}
              <button
                className={cn(
                  'lg:hidden flex flex-col gap-[5px] p-2 transition-colors',
                  isScrolled ? 'text-obsidian' : 'text-white'
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
              >
                <span className="w-5 h-0.5 bg-current block" />
                <span className="w-5 h-0.5 bg-current block" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        services={services}
        navLinks={navLinks}
      />
    </>
  )
}
