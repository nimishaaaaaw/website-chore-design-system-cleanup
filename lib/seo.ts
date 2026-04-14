import { Metadata } from 'next'

export const siteConfig = {
  name: 'MediKloud',
  description: 'India\'s first tech-driven managed hospital pharmacy operator. Stop revenue leakage with free HMS, managed staff, and automated delivery.',
  url: 'https://www.medikloud.com',
  ogImage: 'https://www.medikloud.com/healthcare-hero-illustration.png',
  twitterHandle: '@MediKloud',
  locale: 'en_IN',
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
}

export type SeoProps = {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  keywords?: string | Array<string>
  noIndex?: boolean
}

export function getMetadata({
  title,
  description,
  path = '',
  ogImage,
  keywords,
  noIndex = false,
}: SeoProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const fullDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`
  const image = ogImage || siteConfig.ogImage

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generates BreadcrumbList structured data
 */
export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${siteConfig.url}${item.item}`,
    })),
  }
}
