"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { trackEvent } from '@/lib/analytics'

import { usePathname } from 'next/navigation'

export default function MobileMenu() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()
	const isHomePage = pathname === '/'

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button className="p-2" aria-label="Toggle menu" aria-expanded={open}>
					<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</SheetTrigger>
			<SheetContent side="right" className="w-[90vw] max-w-80 bg-white" autoFocusSelector="[data-autofocus]">
				<SheetHeader className="sr-only">
					<SheetTitle>Mobile Menu</SheetTitle>
				</SheetHeader>
				<nav className="mt-8 space-y-4">
					{!isHomePage && (
						<Link
							href="/"
							className="group relative block font-semibold text-blue-700 hover:text-blue-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:rounded-md focus-visible:ring-offset-white"
							onClick={() => setOpen(false)}
						>
							<span className="relative">
								Home
								<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</Link>
					)}

					{isHomePage && (
						<>
							<a
								data-autofocus
								href="#features"
								className="group relative block font-semibold text-blue-700 hover:text-blue-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:rounded-md focus-visible:ring-offset-white"
								onClick={() => setOpen(false)}
							>
								<span className="relative">
									Products
									<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
								</span>
							</a>
							<a
								href="#who-we-serve"
								className="group relative block font-semibold text-blue-700 hover:text-blue-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:rounded-md focus-visible:ring-offset-white"
								onClick={() => setOpen(false)}
							>
								<span className="relative">
									Solutions
									<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
								</span>
							</a>
						</>
					)}
					<Link
						href="/blogs"
						className="group relative block font-semibold text-blue-700 hover:text-blue-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:rounded-md focus-visible:ring-offset-white"
						onClick={() => setOpen(false)}
					>
						<span className="relative">
							Blogs
							<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</Link>
					<a
						href="/#contact"
						className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/90 to-blue-700/90 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-white"
						onClick={() => {
							trackEvent('click', 'conversion', 'talk_to_us_mobile')
							setOpen(false)
						}}
					>
						Talk to us
					</a>
				</nav>
			</SheetContent>
		</Sheet>
	)
}


