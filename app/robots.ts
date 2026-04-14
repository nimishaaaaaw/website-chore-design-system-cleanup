import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const commonDisallow = ['/api/', '/_next/', '/cdn-cgi/']
  const renderingAllow = ['/', '/_next/static/']

  return {
    rules: [
      {
        userAgent: '*',
        allow: renderingAllow,
        disallow: commonDisallow,
      },
      // 1. AI Search & Answer Engines (Explicitly allowed for better visibility in AI results)
      {
        userAgent: [
          'OAI-SearchBot', 
          'PerplexityBot', 
          'Claude-SearchBot',
          'Bravebot',
          'iaskbot',
          'YouBot', 
          'AndiBot', 
          'PhindBot', 
          'GoogleOther'
        ],
        allow: renderingAllow,
        disallow: commonDisallow,
      },
      // 2. AI Training & Utility Bots (Allowed for brand footprint in LLMs)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'claude-web',
          'anthropic-ai',
          'Google-Extended',
          'CCBot',
          'Amazonbot',
          'Applebot',
          'Applebot-Extended',
          'FacebookBot',
          'meta-externalagent',
          'cohere-ai'
        ],
        allow: renderingAllow,
        disallow: commonDisallow,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}




