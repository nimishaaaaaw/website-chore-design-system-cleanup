import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // OpenAI (ChatGPT)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
      },
      // Anthropic (Claude)
      {
        userAgent: ['ClaudeBot', 'claude-web', 'anthropic-ai'],
        allow: '/',
      },
      // Google AI (Gemini)
      {
        userAgent: ['Google-Extended', 'GoogleOther'],
        allow: '/',
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Meta AI
      {
        userAgent: ['FacebookBot', 'meta-externalagent'],
        allow: '/',
      },
      // Other AI Crawlers
      {
        userAgent: [
          'CCBot',
          'Amazonbot',
          'Applebot',
          'Applebot-Extended',
          'YouBot',
          'PhindBot',
          'AndiBot',
          'cohere-ai'
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.medikloud.com/sitemap.xml',
  }
}




