import { siteConfig } from '@/lib/seo'

export async function GET() {
  const baseUrl = siteConfig.url
  const lastMod = new Date().toUTCString()

  // Define the feed items (matching sitemap)
  const items = [
    { title: 'Home', url: '', description: siteConfig.description },
    { title: 'About Us', url: '/about', description: 'Learn about MediKloud - Indias first tech-driven managed hospital pharmacy operator.' },
    { title: 'Hospital Management System', url: '/products/hospital-management-system', description: 'Free cloud-based HMS for independent hospitals.' },
    { title: 'Managed Pharmacy', url: '/products/managed-pharmacy', description: 'End-to-end managed pharmacy operations.' },
    { title: 'Medicine Deliveries', url: '/products/medicine-deliveries', description: 'AI-driven rapid medicine fulfillment.' },
    { title: 'Virtual Pharmacy', url: '/products/virtual-pharmacy', description: 'Remote and digital pharmacy solutions.' },
    { title: 'Solutions with Pharmacy', url: '/solutions/with-pharmacy', description: 'Optimized operations for hospitals with existing pharmacies.' },
    { title: 'Solutions without Pharmacy', url: '/solutions/without-pharmacy', description: 'Setting up new pharmacies for independent clinics.' },
  ]

  const rssItemsXml = items
    .map(
      (item) => `
    <item>
      <title>${item.title} | ${siteConfig.name}</title>
      <link>${baseUrl}${item.url}</link>
      <guid>${baseUrl}${item.url}</guid>
      <description>${item.description}</description>
      <pubDate>${lastMod}</pubDate>
    </item>`
    )
    .join('')

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${baseUrl}</link>
    <description>${siteConfig.description}</description>
    <language>en-IN</language>
    <lastBuildDate>${lastMod}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${rssItemsXml}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
