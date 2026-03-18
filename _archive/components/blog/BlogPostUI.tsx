"use client"
/* eslint-disable @typescript-eslint/no-explicit-any, react/no-unescaped-entities */

import React, { useState, useEffect, Fragment } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, CheckCircle2, ChevronRight, Hash, Tag, Menu, ChevronUp, Check } from 'lucide-react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { trackEvent } from '@/lib/analytics'

// --- Helper: Generate ID from text ---
const generateId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

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
        body: any
        seo: {
            title: string
            description: string
            keywords: string[]
        }
        theme?: {
            color: 'blue' | 'purple' | 'green' | 'orange' | 'rose'
            font: 'sans' | 'serif'
        }
    }
    readTime: number
}

const THEME_STYLES = {
    blue: {
        gradient: 'from-blue-700 to-purple-700',
        text: 'text-blue-900',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        accent: 'text-blue-700',
        ring: 'ring-blue-500',
        btn: 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20',
        scroll: 'from-blue-600 via-purple-600 to-teal-500'
    },
    purple: {
        gradient: 'from-purple-700 to-pink-700',
        text: 'text-purple-900',
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        accent: 'text-purple-700',
        ring: 'ring-purple-500',
        btn: 'bg-purple-600 hover:bg-purple-500 shadow-purple-600/20',
        scroll: 'from-purple-600 via-pink-600 to-orange-500'
    },
    green: {
        gradient: 'from-green-700 to-teal-700',
        text: 'text-green-900',
        bg: 'bg-green-50',
        border: 'border-green-100',
        accent: 'text-green-700',
        ring: 'ring-green-500',
        btn: 'bg-green-600 hover:bg-green-500 shadow-green-600/20',
        scroll: 'from-green-600 via-teal-600 to-cyan-500'
    },
    orange: {
        gradient: 'from-orange-600 to-red-600',
        text: 'text-orange-900',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        accent: 'text-orange-700',
        ring: 'ring-orange-500',
        btn: 'bg-orange-600 hover:bg-orange-500 shadow-orange-600/20',
        scroll: 'from-orange-600 via-red-600 to-purple-500'
    },
    rose: {
        gradient: 'from-rose-600 to-pink-600',
        text: 'text-rose-900',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        accent: 'text-rose-700',
        ring: 'ring-rose-500',
        btn: 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20',
        scroll: 'from-rose-600 via-pink-600 to-purple-500'
    }
}

const FONT_STYLES = {
    sans: 'font-sans',
    serif: 'font-serif'
}

const JsonLd = ({ data }: { data: any }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
)

export function BlogPostUI({ post, readTime }: BlogPostUIProps) {
    const theme = post.theme || { color: 'blue', font: 'sans' } as const
    const colors = THEME_STYLES[theme.color as keyof typeof THEME_STYLES] || THEME_STYLES.blue
    const fontClass = FONT_STYLES[theme.font as keyof typeof FONT_STYLES] || FONT_STYLES.sans

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


    // Handle Copy Link
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
                // Use legacy shareArticle for better support of title/url on some devices and localhost
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`
                break
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400')
        }
    }



    // Initialize Intersection Observer for TOC and Scroll Top visibility
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

        // Intersection Observer for TOC
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -66%' } // Trigger when element is near top of viewport
        )

        document.querySelectorAll('h2, h3').forEach((elem) => {
            observer.observe(elem)
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    // Generate TOC
    const toc = post.body.content
        .filter((node: any) => node.nodeType === BLOCKS.HEADING_2 || node.nodeType === BLOCKS.HEADING_3)
        .map((node: any) => {
            // Extract text from content array which might contain multiple text nodes or marks
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const extractText = (content: any[]): string => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return content.reduce((acc: string, curr: any) => {
                    if (curr.nodeType === 'text') return acc + curr.value;
                    return acc + (curr.content ? extractText(curr.content) : '');
                }, '');
            };
            const text = extractText(node.content);
            return {
                id: generateId(text),
                text: text,
                level: node.nodeType === BLOCKS.HEADING_2 ? 2 : 3
            }
        })

    // Generate Schema
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.seo.title || post.title,
        "description": post.seo.description,
        "image": post.mainImage?.url,
        "author": { "@type": "Person", "name": post.author },
        "datePublished": post.publishedDate,
        "url": `https://www.medikloud.com/blogs/${post.slug}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.medikloud.com/blogs/${post.slug}`
        },
        "publisher": {
            "@type": "Organization",
            "name": "MediKloud",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.medikloud.com/favicon-512x512.png"
            }
        }
    }

    const richTextOptions = {
        renderMark: {
            [MARKS.BOLD]: (text: any) => <span className="font-bold text-slate-900">{text}</span>,
            [MARKS.CODE]: (text: any) => <code className={`px-1.5 py-0.5 rounded-md ${colors.bg} ${colors.accent} font-mono text-sm border ${colors.border}`}>{text}</code>,
            [MARKS.ITALIC]: (text: any) => <span className="italic text-slate-800 font-serif">{text}</span>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
                <p className={`mb-8 text-[1.125rem] leading-[1.8] text-slate-600 font-normal antialiased ${fontClass}`}>{children}</p>
            ),
            [BLOCKS.HEADING_2]: (node: any, children: any) => {
                const extractText = (nodes: any): string => {
                    if (!nodes) return '';
                    if (Array.isArray(nodes)) return nodes.map(extractText).join('');
                    if (typeof nodes === 'string') return nodes;
                    if (nodes?.props?.children) return extractText(nodes.props.children);
                    return '';
                };
                const text = extractText(children);
                const id = generateId(text);

                return (
                    <h2 id={id} className={`scroll-mt-32 text-3xl font-bold mt-16 mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} tracking-tight leading-tight group items-center gap-2 ${fontClass}`}>
                        {children}
                        <a href={`#${id}`} aria-label="Link to this section" className={`opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:${colors.accent} focus:opacity-100 inline-block ml-2 align-middle`}>
                            <Hash className="w-5 h-5" />
                        </a>
                    </h2>
                )
            },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
                const extractText = (nodes: any): string => {
                    if (!nodes) return '';
                    if (Array.isArray(nodes)) return nodes.map(extractText).join('');
                    if (typeof nodes === 'string') return nodes;
                    if (nodes?.props?.children) return extractText(nodes.props.children);
                    return '';
                };
                const text = extractText(children);
                const id = generateId(text);
                return (
                    <h3 id={id} className={`scroll-mt-32 text-xl font-bold mt-10 mb-4 ${colors.text} tracking-tight ${fontClass}`}>
                        {children}
                    </h3>
                )
            },
            [BLOCKS.QUOTE]: (node: any, children: any) => (
                <figure className={`my-12 pl-6 md:pl-10 border-l-4 ${colors.border.replace('100', '500')} ${colors.bg} py-6 pr-6 rounded-r-xl`}>
                    <blockquote className="text-xl md:text-2xl font-serif italic text-slate-900 leading-normal">
                        "{children}"
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-slate-500 font-medium flex items-center gap-2">
                        <span className="w-4 h-px bg-slate-400"></span>
                        {post.author}
                    </figcaption>
                </figure>
            ),
            [BLOCKS.UL_LIST]: (node: any, children: any) => (
                <ul className="space-y-4 mb-8 my-6">{children}</ul>
            ),
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
                <li className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${colors.accent} mt-1 shrink-0`} />
                    <span className={`text-[1.125rem] leading-[1.8] text-slate-600 ${fontClass}`}>{children}</span>
                </li>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { url, title, width, height } = node.data.target.fields.file
                return (
                    <figure className="my-12 lg:-mx-16 xl:-mx-24 group">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100 ring-1 ring-slate-900/5 transition-transform duration-500 hover:shadow-2xl">
                            <Image
                                src={'https:' + url}
                                alt={title || post.title}
                                width={width || 1200}
                                height={height || 800}
                                className="w-full h-auto object-cover max-h-[600px]"
                            />
                        </div>
                        {title && (
                            <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                                <span className="uppercase tracking-wider text-xs font-bold">Figure</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className="italic">{title}</span>
                            </figcaption>
                        )}
                    </figure>
                )
            }
        }
    }

    if (!isMounted) return <div className="min-h-screen bg-white" />

    // Helper for subtle badge color
    const badgeDotColor = colors.bg.replace('bg-', 'bg-').replace('50', '300')

    return (
        <div className={`min-h-screen bg-white font-sans selection:${colors.bg.replace('50', '100')} selection:${colors.text}`}>
            <JsonLd data={schemaData} />

            {/* Reading Progress Bar */}
            <motion.div
                className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.scroll} origin-left z-50`}
                style={{ scaleX }}
            />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`fixed bottom-8 right-8 z-40 p-3 bg-white text-slate-900 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 hover:${colors.accent} hover:shadow-xl transition-all`}
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Toast Notification */}
            <AnimatePresence>
                {copied && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 z-50 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg flex items-center gap-2"
                    >
                        <Check className="w-4 h-4 text-green-400" />
                        Link copied to clipboard
                    </motion.div>
                )}
            </AnimatePresence>

            <article className="pt-24 pb-20" itemScope itemType="https://schema.org/BlogPosting">
                {/* Header Section */}
                <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16 relative">
                    {/* Back Button */}
                    <Link
                        href="/blogs"
                        className={`absolute top-4 left-4 md:left-0 inline-flex items-center text-sm font-medium text-slate-500 hover:${colors.accent} transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-slate-200`}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-16"
                    >
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.accent} text-xs font-bold tracking-wide uppercase mb-6 border ${colors.border}`}>
                            <span>Blog</span>
                            <span className={`w-1 h-1 rounded-full ${badgeDotColor}`}></span>
                            <span>Healthcare</span>
                        </div>

                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-balance bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent pb-2 ${fontClass}`} itemProp="headline">
                            {post.title}
                        </h1>

                        {post.subtitle && (
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-serif antialiased" itemProp="description">
                                {post.subtitle}
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-y border-slate-100">
                            {post.author && (
                                <div className="flex items-center gap-4 text-left" itemProp="author" itemScope itemType="https://schema.org/Person">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 overflow-hidden ring-2 ring-white shadow-sm">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 ${colors.btn.split(' ')[0]} text-white p-0.5 rounded-full ring-2 ring-white`}>
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900" itemProp="name">{post.author}</div>
                                        <div className="text-sm text-slate-500" itemProp="jobTitle">{post.role || 'MediKloud Team'}</div>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.publishedDate} itemProp="datePublished">
                                        {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </time>
                                </div>
                                <div className="w-px h-4 bg-slate-200"></div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {readTime} min read
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Image - Wide */}
                    {post.mainImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[2/1] md:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-2xl mb-12 md:mb-20 bg-slate-100"
                            itemProp="image"
                        >
                            <Image
                                src={post.mainImage.url}
                                alt={post.mainImage.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                        {/* Sidebar - Table of Contents (Desktop) */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32">
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-slate-200"></span>
                                    On this page
                                </h4>
                                <nav className="space-y-1 relative border-l border-slate-200">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {toc.map((item: any) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block py-2 px-4 text-sm transition-all border-l-2 -ml-[2px] ${activeSection === item.id
                                                ? `border-transparent ${colors.accent} font-semibold ${colors.bg} bg-opacity-50`
                                                : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                                                }`}
                                        >
                                            {item.text}
                                        </a>
                                    ))}
                                </nav>

                                <div className="mt-12 pt-8 border-t border-slate-200">
                                    <p className="text-xs text-slate-400 font-semibold uppercase mb-4">Share this article</p>
                                    <div className="flex gap-2">
                                        {[
                                            { Icon: Twitter, platform: 'twitter', label: 'Share on Twitter' },
                                            { Icon: Facebook, platform: 'facebook', label: 'Share on Facebook' },
                                            { Icon: Linkedin, platform: 'linkedin', label: 'Share on LinkedIn' },
                                            { Icon: Share2, platform: 'copy', label: 'Copy Link' }
                                        ].map(({ Icon, platform, label }, i) => (
                                            <button
                                                key={i}
                                                onClick={() => platform === 'copy' ? handleCopyLink() : shareOnSocial(platform)}
                                                className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:${colors.btn.split(' ')[0]} hover:text-white transition-all border border-slate-100 hover:border-transparent hover:shadow-md`}
                                                aria-label={label}
                                                title={label}
                                            >
                                                <Icon className="w-4 h-4" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Article Body */}
                        <div className="lg:col-span-8 lg:col-start-4">

                            {/* Mobile Table of Contents */}
                            <div className="lg:hidden mb-12">
                                <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        onClick={() => setMobileTocOpen(!mobileTocOpen)}
                                        className="w-full flex items-center justify-between p-4 font-semibold text-slate-900"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Menu className="w-4 h-4" />
                                            Table of Contents
                                        </span>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${mobileTocOpen ? 'rotate-90' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileTocOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="border-t border-slate-200"
                                            >
                                                <nav className="p-4 bg-white/50 space-y-2">
                                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                    {toc.map((item: any) => (
                                                        <a
                                                            key={item.id}
                                                            href={`#${item.id}`}
                                                            onClick={() => setMobileTocOpen(false)}
                                                            className={`block py-2 px-3 text-sm rounded-lg ${activeSection === item.id
                                                                ? `${colors.bg} ${colors.accent} font-medium`
                                                                : 'text-slate-600 hover:bg-slate-50'
                                                                }`}
                                                        >
                                                            {item.text}
                                                        </a>
                                                    ))}
                                                </nav>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none" itemProp="articleBody">
                                {/* Drop cap for first paragraph visual interest */}
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    .first-letter-drop::first-letter {
                                        float: left;
                                        font-size: 3.5rem;
                                        line-height: 0.85;
                                        font-weight: 800;
                                        margin-right: 0.75rem;
                                        margin-top: 0.25rem;
                                        color: #1e293b;
                                    }
                                `}} />
                                <div className="first-letter-drop">
                                    {documentToReactComponents(post.body, richTextOptions)}
                                </div>
                            </div>

                            {/* Keywords / Tags Section */}
                            {post.seo.keywords && post.seo.keywords.length > 0 && (
                                <div className="mt-16 pt-8 border-t border-slate-200">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                            <Tag className="w-4 h-4 text-blue-600" />
                                            Related Topics:
                                        </span>
                                        {post.seo.keywords.map((keyword, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1 bg-slate-100 hover:${colors.bg} text-slate-600 hover:${colors.accent} text-sm rounded-full transition-colors font-medium border border-transparent hover:${colors.border} cursor-default`}
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </article>


        </div>
    )
}
