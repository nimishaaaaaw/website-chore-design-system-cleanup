import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ScrollIndicator } from '@/components/layout/scroll-indicator'
import { siteConfig } from '@/lib/seo'

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  manifest: '/manifest.webmanifest',
  keywords: [
    'Hospital Management System',
    'HMS software India',
    'Managed pharmacy operations',
    'Stop pharmacy revenue leakage',
    'Automated medicine delivery',
    'Pharmacy inventory management',
    'AI for hospital procurement',
    'MediKloud healthcare IT'
  ],
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-IN': siteConfig.url,
    },
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.3850;78.4867',
    'ICBM': '17.3850, 78.4867',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192' },
    ],
    shortcut: ['/favicon.png'], // Standard PNG fallback
  },
  openGraph: {
    title: `${siteConfig.name} | Smart Hospital Operations`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Managed Hospital Pharmacy`,
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Smart Hospital Operations`,
    description: 'Zero Capex Managed Pharmacies for Independent Hospitals.',
    images: [siteConfig.ogImage],
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4F46E5',
} satisfies import('next').Viewport

import { GoogleAnalytics } from '@next/third-parties/google'
import { WebVitals } from '@/app/web-vitals'
import { ClientProviders } from '@/components/shared/ClientProviders'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/seo/JsonLd'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <head />
      <body className={`${poppins.className} relative`} suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-blue-600 text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>

        {/* 1. Organization Schema */}
        <JsonLd
          id="ld-org"
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/favicon-512x512.png`,
            sameAs: [
              'https://www.linkedin.com/company/medikloud/',
              'https://x.com/MediKloud'
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              telephone: '+91-7702670993',
              contactType: 'sales',
              areaServed: 'IN',
              availableLanguage: ['English', 'Hindi']
            }]
          }}
        />

        {/* 2. WebSite Schema */}
        <JsonLd
          id="ld-website"
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteConfig.url}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          }}
        />

        {/* 3. LocalBusiness Schema — Dual Identity: HMS SaaS + Managed Ops */}
        <JsonLd
          id="ld-local-biz"
          data={{
            '@context': 'https://schema.org',
            '@type': ['MedicalBusiness', 'Pharmacy'], 
            name: siteConfig.name,
            image: siteConfig.ogImage,
            '@id': siteConfig.url,
            url: siteConfig.url,
            telephone: '+91-7702670993',
            description: 'India\'s first tech-driven managed hospital pharmacy operator. We provide free HMS SaaS and fully managed pharmacy operations.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hyderabad',
              addressRegion: 'Telangana',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 17.3850,
              longitude: 78.4867
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              opens: '09:00',
              closes: '19:00'
            }
          }}
        />

        <ScrollIndicator />
        <ClientProviders>
          {children}
        </ClientProviders>
        <WebVitals />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      </body>
    </html>
  )
}
