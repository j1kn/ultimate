'use client'

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void
    fbq: (command: string, event: string, params?: Record<string, unknown>) => void
    _linkedin_partner_id: string
    lintrk: (command: string, params: Record<string, unknown>) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackFormSubmit(service: string, page: string): void {
  trackEvent('form_submit', {
    service_type: service,
    page,
  })
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click')
}

export function initAnalytics(): void {
  if (typeof window === 'undefined') return

  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  // GA4 is loaded via script tag in layout; this just signals consent
  if (ga4Id && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    })
  }

  // Meta Pixel
  if (metaPixelId && typeof window.fbq === 'function') {
    window.fbq('consent', 'grant')
    window.fbq('track', 'PageView')
  }
}
