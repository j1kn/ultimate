import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import WhatsAppWidget from '@/components/widgets/WhatsAppWidget'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vertexconcierge.com'
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
const linkedInPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

export const metadata: Metadata = {
  title: {
    template: '%s | Vertex Concierge',
    default: 'Vertex Concierge — Private Luxury Concierge Services',
  },
  description:
    'Vertex Concierge provides private aviation, superyacht charters, luxury automotive, financial services, currency exchange, and fine jewellery for ultra-HNW individuals.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    siteName: 'Vertex Concierge',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vertex Concierge',
  description: 'Private luxury concierge services for ultra-HNW individuals',
  url: siteUrl,
  telephone: `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447000000000'}`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: ['https://instagram.com', 'https://linkedin.com'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* GA4 */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', { send_page_view: false });
                gtag('consent', 'default', { analytics_storage: 'denied' });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('consent', 'revoke');
              fbq('init', '${metaPixelId}');
            `}
          </Script>
        )}

        {/* LinkedIn Insight Tag */}
        {linkedInPartnerId && (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${linkedInPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);
            `}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </body>
    </html>
  )
}
