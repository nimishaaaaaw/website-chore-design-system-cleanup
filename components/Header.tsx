"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const MobileMenu = dynamic(() => import('@/components/MobileMenu'), { ssr: false })
const SolutionsMegaMenu = dynamic(() => import('@/components/SolutionsMegaMenu'), { ssr: false })
const ProductsMegaMenu = dynamic(() => import('@/components/ProductsMegaMenu'), { ssr: false })

export function Header() {
  const [showSolutions, setShowSolutions] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-48">
            <Link href="/">
              <Image 
                src="/medikloud-logo-primary.webp" 
                alt="MediKloud Logo" 
                width={160} 
                height={40} 
                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px" 
                priority 
                className="h-auto w-[120px] sm:w-[140px] md:w-[160px]" 
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {/* Solutions Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <Link
                href="/#solutions"
                aria-expanded={showSolutions}
                aria-haspopup="true"
                aria-label="Solutions menu"
                className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300 flex items-center gap-1.5">
                  Solutions
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showSolutions ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>

              {/* Solutions Mega Menu */}
              <AnimatePresence>
                {showSolutions && (
                  <div className="absolute top-full left-0 z-40 hidden md:block pt-2">
                    <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                    <div className="ml-6 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-200 shadow-[-1px_-1px_3px_rgba(0,0,0,0.02)] z-10 translate-y-[7px]" />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden ring-1 ring-slate-900/5"
                    >
                      <SolutionsMegaMenu />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Trigger */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <Link
                href="/#products"
                aria-expanded={showProducts}
                aria-haspopup="true"
                aria-label="Products menu"
                className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300 flex items-center gap-1.5">
                  Products
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${showProducts ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>

              {/* Products Mega Menu */}
              <AnimatePresence>
                {showProducts && (
                  <div className="absolute top-full left-0 z-40 hidden md:block pt-2">
                    <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
                    <div className="ml-6 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-200 shadow-[-1px_-1px_3px_rgba(0,0,0,0.02)] z-10 translate-y-[7px]" />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden ring-1 ring-slate-900/5"
                    >
                      <ProductsMegaMenu />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#compare"
              className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300">
                Compare
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
            <Link
              href="/blogs"
              className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300">
                Blogs
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
            <Link
              href="/#about-us"
              className="group inline-flex items-center px-3 py-2 transition-colors no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              <span className="relative text-slate-700 group-hover:text-indigo-600 font-normal transition-colors duration-300">
                About Us
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center w-48 justify-end">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-btn hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              Book a Demo
            </Link>
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
