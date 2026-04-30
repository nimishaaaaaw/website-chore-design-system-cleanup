"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactModal } from '@/hooks/use-contact-modal'
import SolutionsMegaMenu from '@/components/layout/SolutionsMegaMenu'
import ProductsMegaMenu from '@/components/layout/ProductsMegaMenu'

const MobileMenu = dynamic(() => import('@/components/layout/MobileMenu'), { ssr: false })

export function Header() {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const { openModal } = useContactModal()

  const timeoutRefSolutions = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timeoutRefProducts = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSolutionsEnter = () => {
    if (timeoutRefSolutions.current) clearTimeout(timeoutRefSolutions.current)
    if (timeoutRefProducts.current) clearTimeout(timeoutRefProducts.current)
    setShowProducts(false)
    setShowSolutions(true)
  }

  const handleSolutionsLeave = () => {
    timeoutRefSolutions.current = setTimeout(() => setShowSolutions(false), 150)
  }

  const handleProductsEnter = () => {
    if (timeoutRefProducts.current) clearTimeout(timeoutRefProducts.current)
    if (timeoutRefSolutions.current) clearTimeout(timeoutRefSolutions.current)
    setShowSolutions(false)
    setShowProducts(true)
  }

  const handleProductsLeave = () => {
    timeoutRefProducts.current = setTimeout(() => setShowProducts(false), 150)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-muted shadow-sm transition-all duration-300">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 w-48">
            <Link href="/">
              <Image
                src="/Logos/medikloud-logo-primary.webp"
                alt="MediKloud Logo"
                className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                priority
                fetchPriority="high"
                width={1536}
                height={1024}
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">

            {/* Products Trigger */}
            <div
              className="relative flex items-center cursor-pointer"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <button
                type="button"
                aria-expanded={showProducts}
                aria-haspopup="true"
                aria-label="Products menu"
                className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg bg-transparent border-none cursor-pointer"
              >
                <span className={`relative font-normal transition-colors duration-300 flex items-center gap-1.5 ${showProducts ? 'text-indigo-600' : 'text-slate-700 group-hover:text-indigo-600'}`}>
                  Products
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showProducts ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 transition-transform duration-300 origin-left ${showProducts ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </button>

              {showProducts && (
                <div className="absolute top-full left-0 right-0 h-3 bg-transparent z-40" />
              )}

              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24, opacity: { duration: 0.15 } }}
                    style={{ originY: 0 }}
                    className="absolute top-full left-0 z-40 hidden md:block pt-3"
                  >
                    <div className="relative bg-white shadow-float rounded-2xl ring-1 ring-slate-900/5">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-200 z-10" />
                      <div className="relative rounded-2xl overflow-hidden">
                        <ProductsMegaMenu />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Trigger */}
            <div
              className="relative flex items-center cursor-pointer"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                type="button"
                aria-expanded={showSolutions}
                aria-haspopup="true"
                aria-label="Solutions menu"
                className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg bg-transparent border-none cursor-pointer"
              >
                <span className={`relative font-normal transition-colors duration-300 flex items-center gap-1.5 ${showSolutions ? 'text-indigo-600' : 'text-slate-700 group-hover:text-indigo-600'}`}>
                  Solutions
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showSolutions ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 transition-transform duration-300 origin-left ${showSolutions ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </span>
              </button>

              {showSolutions && (
                <div className="absolute top-full left-0 right-0 h-3 bg-transparent z-40" />
              )}

              <AnimatePresence>
                {showSolutions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24, opacity: { duration: 0.15 } }}
                    style={{ originY: 0 }}
                    className="absolute top-full left-0 z-40 hidden md:block pt-3"
                  >
                    <div className="relative bg-white shadow-float rounded-2xl ring-1 ring-slate-900/5">
                      <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-200 z-10" />
                      <div className="relative rounded-2xl overflow-hidden">
                        <SolutionsMegaMenu />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg bg-transparent border-none cursor-pointer"
            >
              <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300 flex items-center gap-1.5">
                About
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </Link>

            {/* Blogs Link */}
            <Link
              href="/blogs"
              className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg bg-transparent border-none cursor-pointer"
            >
              <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300 flex items-center gap-1.5">
                Blogs
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center w-48 justify-end">
            <button
              onClick={() => openModal({
                badge: "Partnership",
                title: "Schedule Your Demo",
                description: "Learn how MediKloud can help you recover margins and automate your patient journey.",
                btnText: "Book My Free Demo",
                successTitle: "Demo Scheduled!",
                successDescription: "Our team will reach out within 24 hours to schedule your platform walkthrough."
              })}
              className="btn-nav"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}