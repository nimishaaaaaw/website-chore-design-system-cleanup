import type { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.medikloud.com'
  const now = new Date().toISOString()

  // Fetch all blog posts
  const posts = await getAllPosts()

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.publishedDate || now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0
    },

    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/return-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2
    },

    // Main content sections
    {
      url: `${baseUrl}/#features`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#who-we-serve`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/#stats`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6
    },

    // Dynamic Blog Posts
    ...blogUrls,
  ]
}




