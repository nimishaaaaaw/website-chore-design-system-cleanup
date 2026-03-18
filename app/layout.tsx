import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ScrollIndicator } from '@/components/scroll-indicator'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medikloud.com'),
  title: 'MediKloud — AI-Powered Hospital Operations',
  description: 'AI agents for HMS, pharmacy, delivery, and kiosks. Reduce cost, prevent stockouts, and improve patient experience with real-time visibility and automation.',
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
    title: 'MediKloud — AI-Powered Hospital Operations',
    description: 'AI agents for HMS, pharmacy, delivery, and kiosks.',
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
    title: 'MediKloud — AI-Powered Hospital Operations',
    description: 'AI agents for HMS, pharmacy, delivery, and kiosks.',
    images: ['/healthcare-hero-illustration.png'],
  },
  alternates: {
    canonical: 'https://www.medikloud.com',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-blue-600 text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        {/* Schema.org structured data for Organization */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MediKloud',
            url: 'https://www.medikloud.com',
            logo: 'https://www.medikloud.com/favicon-512x512.png',
            sameAs: [
              // Add your real profile URLs if available
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              telephone: '+91-7702670993',
              contactType: 'sales',
              areaServed: 'IN',
              availableLanguage: ['English', 'Hindi']
            }]
          })}
        </Script>
        {/* Schema.org structured data for WebSite with potentialAction */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'MediKloud',
            url: 'https://www.medikloud.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.google.com/search?q={search_term_string}+site:medikloud.com',
              'query-input': 'required name=search_term_string'
            }
          })}
        </Script>

        <ScrollIndicator />
        {children}
        <WebVitals />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''} />
      </body>
    </html>
  )
}
