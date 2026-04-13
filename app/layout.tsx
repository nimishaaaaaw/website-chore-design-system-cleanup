import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ScrollIndicator } from '@/components/layout/scroll-indicator'

const poppins = Poppins({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medikloud.com'),
  title: {
    template: '%s | MediKloud',
    default: 'HMS, Pharmacy Management & Medicine Delivery | MediKloud',
  },
  description: 'Stop revenue leakage. MediKloud equips your hospital with a free HMS, fully managed pharmacy operations, and automated home medicine delivery.',
  manifest: '/manifest.webmanifest',
  keywords: [
    'Hospital Management System',
    'HMS software',
    'Pharmacy management',
    'AI for hospitals',
    'Healthcare automation',
    'Patient self-service kiosk',
    'Medicine delivery',
    'Healthcare IT India',
    'MediKloud'
  ],
  applicationName: 'MediKloud',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192' },
    ],
    shortcut: ['/favicon.png'],
  },
  openGraph: {
    title: 'HMS, Pharmacy Management & Medicine Delivery | MediKloud',
    description: 'Stop revenue leakage. MediKloud equips your hospital with a free HMS, fully managed pharmacy operations, and automated home medicine delivery.',
    url: 'https://www.medikloud.com',
    siteName: 'MediKloud',
    images: [
      {
        url: '/healthcare-hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'AI-powered hospital operations by MediKloud',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HMS, Pharmacy Management & Medicine Delivery | MediKloud',
    description: 'Stop revenue leakage. MediKloud equips your hospital with a free HMS, fully managed pharmacy operations, and automated home medicine delivery.',
    images: ['/healthcare-hero-illustration.png'],
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
} satisfies import('next').Viewport

import { GoogleAnalytics } from '@next/third-parties/google'
import { WebVitals } from '@/app/web-vitals'
import { ClientProviders } from '@/components/shared/ClientProviders'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className} suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-blue-600 text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        {/* Schema.org structured data for Organization */}
        <Script 
          id="ld-org" 
          type="application/ld+json" 

          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MediKloud',
              url: 'https://www.medikloud.com',
              logo: 'https://www.medikloud.com/favicon-512x512.png',
              sameAs: [],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+91-7702670993',
                contactType: 'sales',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi']
              }]
            })
          }} 
        />
        {/* Schema.org structured data for WebSite with potentialAction */}
        <Script 
          id="ld-website" 
          type="application/ld+json" 

          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'MediKloud',
              url: 'https://www.medikloud.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q={search_term_string}+site:medikloud.com',
                'query-input': 'required name=search_term_string'
              }
            })
          }} 
        />

        <ScrollIndicator />
        <ClientProviders>
          {children}
        </ClientProviders>
        <WebVitals />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      </body>
    </html>
  )
}
