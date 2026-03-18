import { createClient, ContentfulClientApi } from 'contentful'

function createSafeClient(options: Parameters<typeof createClient>[0]): ContentfulClientApi<undefined> | null {
  if (!options.space || !options.accessToken) {
    console.warn('[Contentful] Missing env vars — Contentful client not initialized.')
    return null
  }
  try {
    return createClient(options)
  } catch (e) {
    console.error('[Contentful] Failed to create client:', e)
    return null
  }
}

export const contentfulClient = createSafeClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export const contentfulPreviewClient = createSafeClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
})
