import { getPostBySlug, getAllPosts, calculateReadTime } from '@/lib/api'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BlogPostUI, TocItem } from '@/components/pages/blog/BlogPostUI'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import { Hash, Check } from 'lucide-react'
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

/**
 * Premium zero-dependency Markdown renderer.
 * Produces a polished, high-end reading experience.
 */
function MarkdownLite({ content }: { content: string }) {
    const blocks = content.split(/\n\s*\n/)
    
    return (
        <div className="space-y-10">
            {blocks.map((block, index) => {
                const trimmed = block.trim()
                if (!trimmed) return null

                // H2
                if (trimmed.startsWith('## ')) {
                    const text = trimmed.replace(/^##\s+/, '')
                    const id = slugify(text)
                    return (
                        <h2 key={index} id={id} className="scroll-mt-32 text-3xl md:text-4xl font-bold pt-12 pb-4 text-slate-900 flex items-center group">
                            <span className="flex-1">{text}</span>
                            <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-4 text-blue-500">
                                <Hash className="w-6 h-6" />
                            </a>
                        </h2>
                    )
                }

                // H3
                if (trimmed.startsWith('### ')) {
                    const text = trimmed.replace(/^###\s+/, '')
                    const id = slugify(text)
                    return (
                        <h3 key={index} id={id} className="scroll-mt-32 text-2xl font-bold pt-8 pb-2 text-slate-800">
                            {text}
                        </h3>
                    )
                }

                // Blockquote
                if (trimmed.startsWith('>')) {
                    const text = trimmed.replace(/^>\s*/gm, '').trim()
                    return (
                        <blockquote key={index} className="relative my-12 p-8 md:p-12 rounded-[32px] bg-indigo-50/50 border border-indigo-100 overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                            <p className="text-xl md:text-2xl font-medium text-indigo-900 leading-relaxed italic antialiased">
                                "{parseInlineStyles(text)}"
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-blue-200" />
                                <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Thought Leadership</span>
                            </div>
                        </blockquote>
                    )
                }

                // Unordered List
                if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                    const items = trimmed.split('\n').filter(l => l.trim()).map(item => item.replace(/^(\*|-)\s+/, ''))
                    return (
                        <ul key={index} className="space-y-5 my-8">
                            {items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                                        <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg leading-relaxed text-slate-600">
                                        {parseInlineStyles(item)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )
                }

                // Ordered List
                if (/^\d+\.\s/.test(trimmed)) {
                    const items = trimmed.split('\n').filter(l => l.trim()).map(item => item.replace(/^\d+\.\s+/, ''))
                    return (
                        <ol key={index} className="space-y-5 my-8 list-none">
                            {items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="text-lg leading-relaxed text-slate-600">
                                        {parseInlineStyles(item)}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    )
                }

                // Image: ![alt](url)
                const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/)
                if (imgMatch) {
                    const alt = imgMatch[1]
                    const src = imgMatch[2]
                    return (
                        <figure key={index} className="my-16">
                            <div className="relative rounded-3xl overflow-hidden shadow-card-lg border border-slate-100">
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                            {alt && (
                                <figcaption className="mt-4 text-center text-sm font-medium text-slate-400 italic">
                                    {alt}
                                </figcaption>
                            )}
                        </figure>
                    )
                }

                // Regular paragraph
                return (
                    <p key={index}>
                        {parseInlineStyles(trimmed)}
                    </p>
                )
            })}
        </div>
    )
}

function parseInlineStyles(text: string) {
    const linkParts = text.split(/(\[.*?\]\(.*?\))/g)
    
    return linkParts.map((part, i) => {
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/)
        if (linkMatch) {
            const label = linkMatch[1]
            const href = linkMatch[2]
            const isInternal = href.startsWith('/') || href.startsWith('#')
            
            return (
                <Link 
                    key={i} 
                    href={href} 
                    className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-4 decoration-blue-200 hover:decoration-blue-500 transition-all"
                    target={isInternal ? undefined : "_blank"}
                >
                    {label}
                </Link>
            )
        }
        
        const codeParts = part.split(/(`.*?`)/g)
        return codeParts.map((subPart, j) => {
            const codeMatch = subPart.match(/^`(.*?)`$/)
            if (codeMatch) {
                return (
                    <code key={`${i}-${j}`} className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-900 font-mono text-[0.9em] border border-slate-200">
                        {codeMatch[1]}
                    </code>
                )
            }
            
            const boldParts = subPart.split(/(\*\*.*?\*\*)/g)
            return boldParts.map((bPart, k) => {
                const boldMatch = bPart.match(/^\*\*(.*?)\*\*$/)
                if (boldMatch) {
                    return <strong key={`${i}-${j}-${k}`} className="font-bold text-slate-900">{boldMatch[1]}</strong>
                }
                return bPart
            })
        })
    })
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
