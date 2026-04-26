import { getPostBySlug, getAllPosts, calculateReadTime } from '@/lib/api'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BlogPostUI, TocItem } from '@/components/pages/blog/BlogPostUI'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getMetadata } from '@/lib/seo'
import { MarkdownLite } from '@/components/pages/blog/MarkdownLite'
import React from 'react'

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) return {}

    return getMetadata({
        title: post.seo.title || post.title,
        description: post.seo.description,
        keywords: post.seo.keywords,
        path: `/blogs/${slug}`,
        ogImage: post.mainImage ? post.mainImage.url : undefined,
    })
}

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     
        .replace(/[^\w-]+/g, '')   
        .replace(/--+/g, '-')      
        .replace(/^-+/, '')        
        .replace(/-+$/, '')        
}

function extractToc(markdownText: string): TocItem[] {
    const toc: TocItem[] = []
    const headerRegex = /^(#{2,3})\s+(.+)$/gm
    let match

    while ((match = headerRegex.exec(markdownText)) !== null) {
        const level = match[1].length
        const text = match[2].trim()
        const id = slugify(text)
        toc.push({ id, text, level })
    }
    
    return toc
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const readTime = calculateReadTime(post.body)
    const toc = extractToc(post.body)
    const content = <MarkdownLite content={post.body} />

    return (
        <>
            <Header />
            <BlogPostUI post={post} readTime={readTime} toc={toc} mdxContent={content} />
            <Footer />
        </>
    )
}
