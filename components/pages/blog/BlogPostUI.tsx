"use client"
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, CheckCircle2, ChevronRight, Menu, ChevronUp, Check, Hash, Link as LinkIcon } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { useContactModal } from '@/hooks/use-contact-modal'
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
  const { openModal } = useContactModal()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isMounted, setIsMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
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
    <div className="min-h-screen bg-section-surface">
      <JsonLd data={articleSchema} id="article-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-display origin-left z-[60]"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {isMounted && showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white text-slate-900 rounded-full shadow-float border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-all group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>

      <article className="relative">
        <header className="relative pt-20 pb-6 md:pt-24 md:pb-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-wrap items-center gap-3 text-xxs md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 transition-colors"
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

              <h1 className="text-h2 md:text-h1 font-bold tracking-tight text-slate-900 mb-3 leading-tight">
                {post.title}
              </h1>

              {post.subtitle && (
                <p className="text-body-lg text-slate-600 leading-relaxed mb-4 font-medium">
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
              className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-card-lg bg-slate-50 ring-4 ring-white mb-8"
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
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Sticky Share Sidebar */}
                <div className="hidden xl:block absolute -left-32 top-0 h-full w-24 z-[50]">
                  <div className="sticky top-32 flex flex-col items-center gap-5">
                    <span className="text-xxs font-bold text-slate-400 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 mb-4">Share Story</span>
                    <button 
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`, '_blank')}
                      className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-all shadow-sm"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`, '_blank')}
                      className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-700 hover:border-brand-300 hover:bg-brand-50 transition-all shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleCopyLink}
                      className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm relative group"
                    >
                      {copied ? <Check className="w-4 h-4 text-success" /> : <LinkIcon className="w-4 h-4" />}
                      <span className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xxs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[60]">
                        {copied ? 'Copied!' : 'Copy Link'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  {mdxContent}
                </div>
              </div>

              {/* Author Bio Section */}
              <div className="mt-16 bg-section-alt rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-slate-200 shadow-card">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-card">
                    <Image
                      src="/founder.webp" 
                      alt={post.author || "Author"}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="text-h3 font-bold text-slate-900">Written by {post.author}</h3>
                    <span className="hidden md:block text-slate-300">|</span>
                    <span className="text-brand-600 font-bold text-sm uppercase tracking-wider">{post.role}</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    Yeswanth is on a mission to bridge the infrastructure gap in India's healthcare system. Through MediKloud, he is helping independent hospitals modernize their pharmacy operations, reduce revenue bleed, and provide seamless medicine access to patients.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Link 
                      href="https://www.linkedin.com/in/yeswanthasapu/" 
                      target="_blank"
                      className="text-slate-400 hover:text-brand-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tags / Keywords */}
              {post.seo.keywords && post.seo.keywords.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Topics:</span>
                    {Array.isArray(post.seo.keywords) && post.seo.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-50 text-slate-600 text-13px font-bold rounded-full border border-slate-100 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 transition-all cursor-default"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

             {/* CTA Section */}
                <div className="mt-12 p-8 md:p-12 rounded-3xl bg-section-dark text-white relative overflow-hidden group">
                <div className="blob-layer">
                    <div className="blob-glow-blue w-64 h-64 -top-32 -right-32 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h3 className="text-h3 md:text-h2 font-bold mb-4 text-white">
                    Ready to transform your hospital operations?
                    </h3>
                    <p className="text-slate-300 mb-8 text-body-lg leading-relaxed">
                    Join forward-thinking healthcare leaders using MediKloud to optimize clinical workflows and improve patient care.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => openModal({
                        badge: "Blog CTA",
                        title: "Transform your hospital pharmacy.",
                        description: "Schedule a walkthrough to see how MediKloud can manage your pharmacy operations and stop revenue leakage.",
                        btnText: "Schedule My Demo"
                        })}
                        className="btn-lg bg-white text-slate-900 rounded-2xl hover:bg-brand-50 shadow-btn transition-all duration-200 active:scale-95"
                    >
                        Book a Demo
                    </button>
                    <Link
                        href="/#products"
                        className="btn-lg btn-dark-glass rounded-2xl flex items-center justify-center"
                    >
                        View Our Solutions
                    </Link>
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