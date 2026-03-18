/* eslint-disable @typescript-eslint/no-explicit-any */
import { contentfulClient, contentfulPreviewClient } from './contentful'

function parseContentfulPost(item: any) {
    return {
        title: item.fields.title,
        slug: item.fields.slug,
        author: item.fields.author,
        publishedDate: item.fields.publishedDate,
        body: item.fields.body,
        subtitle: item.fields.subtitle,
        role: item.fields.role,
        mainImage: item.fields.mainImage ? {
            url: 'https:' + item.fields.mainImage.fields.file.url,
            alt: item.fields.mainImage.fields.title || ''
        } : null,
        seo: {
            title: item.fields.seoTitle,
            description: item.fields.seoDescription,
            keywords: item.fields.keywords
        },
        theme: {
            color: item.fields.themeColor || 'blue',
            font: item.fields.fontStyle || 'sans'
        }
    }
}

export async function getAllPosts(isDraftMode = false) {
    const client = isDraftMode ? contentfulPreviewClient : contentfulClient
    if (!client) return []
    try {
        const entries = await client.getEntries({
            content_type: 'blogPost',
            order: ['-fields.publishedDate'] as any,
        })
        return entries.items.map(parseContentfulPost)
    } catch (error) {
        console.error('[Contentful] Error fetching posts:', error)
        return []
    }
}

export async function getPostBySlug(slug: string, isDraftMode = false) {
    const client = isDraftMode ? contentfulPreviewClient : contentfulClient
    if (!client) return null
    try {
        const entries = await client.getEntries({
            content_type: 'blogPost',
            'fields.slug': slug,
            limit: 1,
        })
        if (entries.items.length > 0) {
            return parseContentfulPost(entries.items[0])
        }
        return null
    } catch (error) {
        console.error('[Contentful] Error fetching post by slug:', error)
        return null
    }
}
