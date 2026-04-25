"use client"
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, CheckCircle2, ChevronRight, Menu, ChevronUp, Check, Hash } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { getArticleSchema, getBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

export interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface BlogPostUIProps {
    post: {
        title: string
        subtitle?: string
        slug: string
        publishedDate: string
        author?: string
        role?: string
        mainImage?: {
            url: string
            alt: string
        } | null
        seo: {
            title: string
            description: string
            keywords?: string[]
        }
    }
    readTime: number
    toc: TocItem[]
    mdxContent: React.ReactNode
}



export function BlogPostUI({ post, readTime, toc, mdxContent }: BlogPostUIProps) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [isMounted, setIsMounted] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [mobileTocOpen, setMobileTocOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleCopyLink = () => {
        const url = window.location.href
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
        }
    }

    const shareOnSocial = (platform: string) => {
        trackEvent('share', 'engagement', platform)
        const url = encodeURIComponent(window.location.href)
        const text = encodeURIComponent(post.title)
        let shareUrl = ''

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
                break
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
                break
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
                break
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400')
        }
    }

    useEffect(() => {
        setIsMounted(true)

        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -66%' }
        )

        document.querySelectorAll('h2, h3').forEach((elem) => {
            observer.observe(elem)
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    // SEO Structured Data
    const articleSchema = getArticleSchema({
        title: post.seo.title || post.title,
        description: post.seo.description,
        url: `${siteConfig.url}/blogs/${post.slug}`,
        datePublished: post.publishedDate,
        image: post.mainImage?.url,
        keywords: post.seo.keywords
    })

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'Blog', item: '/blogs' },
        { name: post.title, item: `/blogs/${post.slug}` }
    ])

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-600">
            <JsonLd data={articleSchema} id="article-schema" />
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 origin-left z-[60]"
                style={{ scaleX }}
            />

            <AnimatePresence>
                {isMounted && showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 p-4 bg-white text-slate-900 rounded-full shadow-float border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                    </motion.button>
                )}
            </AnimatePresence>

            <article className="relative">
                {/* --- ULTRA-COMPACT HEADER --- */}
                <header className="relative pt-20 pb-6 md:pt-24 md:pb-8 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Breadcrumb + Meta in one line */}
                            <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    <ArrowLeft className="w-3 h-3" />
                                    Insights
                                </Link>
                                <span className="w-1 h-1 rounded-full bg-slate-200" />
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" />
                                    <span>{readTime} min read</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-slate-200" />
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                            </div>

                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                                {post.title}
                            </h1>

                            {post.subtitle && (
                                <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-6 font-medium">
                                    {post.subtitle}
                                </p>
                            )}

                        </motion.div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    {post.mainImage?.url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative aspect-[21/9] w-full rounded-[32px] overflow-hidden shadow-card-lg bg-slate-100 ring-4 ring-white mb-8"
                        >
                            <Image
                                src={post.mainImage.url}
                                alt={post.mainImage.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        </motion.div>
                    )}

                    <div className="pt-4 pb-12">
                        {/* --- MAIN CONTENT (Expanded Width) --- */}
                        <div className="max-w-6xl mx-auto">
                            <div className="prose prose-xl prose-slate max-w-none 
                                prose-headings:tracking-tight prose-headings:font-bold prose-headings:text-slate-900
                                prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                                prose-p:text-slate-600 prose-p:leading-[1.65] prose-p:mb-5
                                prose-li:text-slate-600 prose-li:my-1.5
                                prose-strong:text-slate-900 prose-strong:font-bold
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-slate-700
                            ">
                                {mdxContent}
                            </div>

                            {/* Tags / Keywords */}
                            {post.seo.keywords && post.seo.keywords.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-slate-100">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Topics:</span>
                                        {Array.isArray(post.seo.keywords) && post.seo.keywords.map((keyword, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-slate-50 text-slate-600 text-[13px] font-bold rounded-full border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA Section */}
                            <div className="mt-12 p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
                                <div className="relative z-10 text-center max-w-2xl mx-auto">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your hospital operations?</h3>
                                    <p className="text-indigo-200/80 mb-8 text-lg leading-relaxed">
                                        Join forward-thinking healthcare leaders using MediKloud to optimize clinical workflows and improve patient care.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/20">
                                            Book a Demo
                                        </button>
                                        <button className="px-8 py-4 bg-indigo-800/30 text-white font-bold rounded-2xl border border-indigo-500/30 hover:bg-indigo-800/50 transition-all">
                                            Explore Products
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
