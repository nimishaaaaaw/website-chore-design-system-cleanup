"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useContactModal } from '@/hooks/use-contact-modal'

export default function MobileMenu() {
	const [open, setOpen] = useState(false)
	const [showSolutions, setShowSolutions] = useState(false)
	const [showProducts, setShowProducts] = useState(false)
	const { openModal } = useContactModal()

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
					{/* Solutions Nested Menu */}
					<div className="space-y-2">
						<button
							onClick={() => setShowSolutions(!showSolutions)}
							aria-expanded={showSolutions}
							aria-label="Toggle Solutions submenu"
							className="flex items-center justify-between w-full text-left text-blue-600 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
						>
							<span>Solutions</span>
							<svg className={`w-4 h-4 transition-transform ${showSolutions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						
						<AnimatePresence>
							{showSolutions && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									className="pl-4 space-y-4 overflow-hidden"
								>
									<div className="space-y-2">
										<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hospital</p>
										<div className="pl-2 space-y-2">
											<Link href="/solutions/hospital-with-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>With in-house pharmacy</Link>
											<Link href="/solutions/hospital-without-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Without in-house pharmacy</Link>
										</div>
									</div>
									<div className="space-y-2">
										<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clinic</p>
										<div className="pl-2 space-y-2">
											<Link href="/solutions/clinic-with-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>With in-house pharmacy</Link>
											<Link href="/solutions/clinic-without-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Without in-house pharmacy</Link>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* Products Nested Menu */}
					<div className="space-y-2">
						<button
							onClick={() => setShowProducts(!showProducts)}
							aria-expanded={showProducts}
							aria-label="Toggle Products submenu"
							className="flex items-center justify-between w-full text-left text-blue-600 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
						>
							<span>Products</span>
							<svg className={`w-4 h-4 transition-transform ${showProducts ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						
						<AnimatePresence>
							{showProducts && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									className="pl-4 space-y-3 overflow-hidden"
								>
									<Link href="/products/managed-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Managed Pharmacy</Link>
									<Link href="/products/virtual-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Virtual Pharmacy</Link>
									<Link href="/products/hospital-management-system" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Hospital Management System</Link>
									<Link href="/products/refill-engine" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Refill Engine</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div>



					<Link
						href="/blogs"
						className="group relative block text-blue-600 hover:text-blue-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
						onClick={() => setOpen(false)}
					>
						<span className="relative">
							Blogs
							<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</Link>
					
					<Link
						href="/about"
						className="group relative block text-blue-600 hover:text-blue-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
						onClick={() => setOpen(false)}
					>
						<span className="relative">
							About Us
							<span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</Link>

					<button
						onClick={() => {
							setOpen(false)
							openModal()
						}}
						className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
					>
						Talk to us
					</button>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
