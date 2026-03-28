'use client'

import { trackWhatsAppClick } from '@/lib/analytics'

export default function WhatsAppWidget() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447000000000'
  const message = "Hi, I'd like to arrange a concierge service."
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    trackWhatsAppClick()
    window.open(waUrl, '_blank', 'noopener noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" style={{ right: '24px', bottom: '24px' }}>
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-champagne animate-pulse-ring"
        aria-hidden="true"
      />
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-champagne flex items-center justify-center shadow-lg hover:bg-champagne-light transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 2C7.477 2 3 6.477 3 12c0 1.89.525 3.658 1.44 5.17L3 22l4.972-1.415A9.965 9.965 0 0013 22c5.523 0 10-4.477 10-10S18.523 2 13 2z"
            fill="#0A0A0A"
          />
          <path
            d="M9.5 9c0-.5.4-.9.9-.9h.4c.3 0 .6.2.7.5l.9 2c.1.3 0 .6-.2.8l-.5.5c.7 1.2 1.7 2.2 2.9 2.9l.5-.5c.2-.2.5-.3.8-.2l2 .9c.3.1.5.4.5.7v.4c0 .5-.4.9-.9.9C13 18 8 13 8 9.5v-.5z"
            fill="#F5F4F1"
          />
        </svg>
      </button>
    </div>
  )
}
