import { Entry, Asset, EntryFieldTypes, EntrySkeletonType } from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { contentfulClient, contentfulPreviewClient } from './contentful'

export interface BlogPost {
    title: string
    slug: string
    author: string
    publishedDate: string
    body: Document
    subtitle: string
    role: string
    mainImage: {
        url: string
        alt: string
    } | null
    seo: {
        title: string
        description: string
        keywords: string[]
    }
    theme: {
        color: string
        font: string
    }
}

interface BlogPostFields {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    author: EntryFieldTypes.Text
    publishedDate: EntryFieldTypes.Date
    body: EntryFieldTypes.RichText
    subtitle: EntryFieldTypes.Text
    role: EntryFieldTypes.Text
    mainImage?: EntryFieldTypes.AssetLink
    seoTitle: EntryFieldTypes.Text
    seoDescription: EntryFieldTypes.Text
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    themeColor?: EntryFieldTypes.Text
    fontStyle?: EntryFieldTypes.Text
}

interface BlogPostSkeleton extends EntrySkeletonType {
    contentTypeId: 'blogPost'
    fields: BlogPostFields
}

function parseContentfulPost(item: Entry<BlogPostSkeleton, undefined, string>): BlogPost {
    return {
        title: item.fields.title as string,
        slug: item.fields.slug as string,
        author: item.fields.author as string,
        publishedDate: item.fields.publishedDate as string,
        body: item.fields.body as Document,
        subtitle: item.fields.subtitle as string,
        role: item.fields.role as string,
        mainImage: (item.fields.mainImage && (item.fields.mainImage as Asset).fields.file) ? {
            url: 'https:' + ((item.fields.mainImage as Asset).fields.file!.url as string),
            alt: ((item.fields.mainImage as Asset).fields.title as string) || ''
        } : null,
        seo: {
            title: item.fields.seoTitle as string,
            description: item.fields.seoDescription as string,
            keywords: item.fields.keywords as string[]
        },
        theme: {
            color: item.fields.themeColor || 'blue',
            font: item.fields.fontStyle || 'sans'
        }
    }
}

export async function getAllPosts(isDraftMode = false): Promise<BlogPost[]> {
    const client = isDraftMode ? contentfulPreviewClient : contentfulClient
    if (!client) return []
    try {
        const entries = await client.getEntries<BlogPostSkeleton>({
            content_type: 'blogPost',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            order: ['-fields.publishedDate'] as any,
        })
        return entries.items.map(parseContentfulPost)
    } catch (error) {
        console.error('[Contentful] Error fetching posts:', error)
        return []
    }
}

export async function getPostBySlug(slug: string, isDraftMode = false): Promise<BlogPost | null> {
    const client = isDraftMode ? contentfulPreviewClient : contentfulClient
    if (!client) return null
    try {
        const entries = await client.getEntries<BlogPostSkeleton>({
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
