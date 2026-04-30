import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  const lastMod = new Date().toISOString() // Standard ISO format for 2026 consistency

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/products/hospital-management-system', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/products/managed-pharmacy', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/products/medicine-deliveries', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/products/virtual-pharmacy', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/solutions/with-pharmacy', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/solutions/without-pharmacy', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'monthly' },
    { url: '/return-policy', priority: 0.2, changeFrequency: 'monthly' },
  ] as const

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}




