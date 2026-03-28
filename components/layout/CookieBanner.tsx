'use client'

import { useState, useEffect } from 'react'
import { initAnalytics } from '@/lib/analytics'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      initAnalytics()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    initAnalytics()
  }

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-obsidian text-white"
      style={{ height: '60px' }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-site h-full flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-white/70">
          We use cookies to improve your experience.
        </p>
        <div className="flex items-center gap-6 shrink-0">
          <button
            onClick={handleReject}
            className="text-xs text-white/40 hover:text-white transition-colors tracking-wider uppercase"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={handleReject}
            className="text-xs text-white/40 hover:text-white transition-colors tracking-wider uppercase"
          >
            Manage Preferences
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-1.5 bg-champagne text-obsidian text-xs font-medium tracking-wider uppercase hover:bg-champagne-light transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
