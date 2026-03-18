"use client"

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { trackEvent } from '@/lib/analytics'
import { usePathname } from 'next/navigation'

const MobileMenu = dynamic(() => import('@/components/MobileMenu'), { ssr: false })

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/MK_Logo_WOB.webp" alt="MediKloud Logo" width={160} height={40} sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px" priority className="h-auto w-[120px] sm:w-[140px] md:w-[160px]" />
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {!isHomePage && (
              <Link
                href="/"
                className="group inline-flex items-center font-medium px-2 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white no-underline"
              >
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                  Home
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            )}

            {isHomePage && (
              <>
                <Link
                  href="/#features"
                  className="group inline-flex items-center font-medium px-2 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white no-underline"
                >
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                    Products
                    <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </Link>
                <Link
                  href="/#who-we-serve"
                  className="group inline-flex items-center font-medium px-2 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white no-underline"
                >
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                    Solutions
                    <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </Link>
              </>
            )}

            <Link
              href="/blogs"
              className="group inline-flex items-center font-medium px-2 py-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white no-underline"
            >
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                Blogs
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
            <Link
              href="/#contact"
              onClick={() => trackEvent('click', 'conversion', 'talk_to_us_header')}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/90 to-teal-600/90 text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white no-underline"
            >
              Talk to us
            </Link>
          </nav>
          {/* Mobile menu (lazy-loaded) */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
