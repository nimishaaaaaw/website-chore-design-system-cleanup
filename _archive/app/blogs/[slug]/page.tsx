/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPostBySlug } from '@/lib/api'
import { draftMode } from 'next/headers'

export const revalidate = 3600 // Revalidate every hour

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BlogPostUI } from '@/components/blog/BlogPostUI'
import { Header } from '@/components/Header'
import { Footer } from '@/components/home/Footer'

// Move data fetching to a separate server component or method if needed, 
// but for this file structure we keep the server logic at the top level 
// and pass data to a client component for animations if we strictly separate.
// However, since this is a server component by default in App Router, 
// we can keep it as is and use client-side motion components properly.
// Note: We cannot use "use client" on the whole file because of generateMetadata and async component.
// So we will split the UI into a client component or use generic HTML with CSS animations where possible,
// OR (simpler) we use standard Tailwind for most things to keep it robust server-side.

// Actually, to get the nice interactions, let's keep it simple with standard CSS/Tailwind 
// matching the "Hero" style (gradients, blurs) without forcing client-side hydration for everything.

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const { isEnabled } = await draftMode()
    const post = await getPostBySlug(slug, isEnabled)

    if (!post) return {}

    return {
        title: post.seo.title || post.title,
        description: post.seo.description,
        keywords: post.seo.keywords,
        openGraph: {
            images: post.mainImage ? [post.mainImage.url] : [],
        }
    }
}

function calculateReadTime(document: any): number {
    // Very rough estimate: count words in text nodes and divide by 200 wpm
    let text = ''
    const extractText = (node: any) => {
        if (node.nodeType === 'text') {
            text += node.value + ' '
        } else if (node.content) {
            node.content.forEach(extractText)
        }
    }
    if (document) {
        document.content.forEach(extractText)
    }
    const words = text.trim().split(/\s+/).length
    return Math.max(1, Math.ceil(words / 200))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { isEnabled } = await draftMode()
    const post = await getPostBySlug(slug, isEnabled)

    if (!post) {
        notFound()
    }

    const readTime = calculateReadTime(post?.body)

    return (
        <>
            <Header />
            <BlogPostUI post={post} readTime={readTime} />
            <Footer />
        </>
    )
}
