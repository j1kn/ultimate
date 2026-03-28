'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  services: NavLink[]
  navLinks: NavLink[]
}

const allLinks = (services: NavLink[], navLinks: NavLink[]) => [
  { label: 'SERVICES', href: '/services', isHeading: true },
  ...services.map((s) => ({ ...s, label: s.label.toUpperCase(), isHeading: false, indent: true })),
  ...navLinks.map((l) => ({ ...l, label: l.label.toUpperCase(), isHeading: false, indent: false })),
]

export default function MobileMenu({ isOpen, onClose, services, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const links = allLinks(services, navLinks)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-obsidian flex flex-col"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16">
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-[20px] tracking-[0.25em] uppercase text-white"
            >
              VERTEX
            </Link>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="Close navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 pt-8 pb-12">
            <div className="space-y-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.isHeading ? (
                    <div className="text-label text-champagne mb-2 mt-6 first:mt-0">
                      {link.label}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block py-3 text-label tracking-wider transition-colors hover:text-champagne ${
                        (link as { indent?: boolean }).indent
                          ? 'text-white/50 pl-4'
                          : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-10 border-t border-white/10 pt-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full py-4 border border-champagne text-champagne text-label tracking-wider hover:bg-champagne hover:text-obsidian transition-all duration-300"
              style={{ borderRadius: '2px' }}
            >
              SPEAK TO A CONCIERGE
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
