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
										<Link href="/solutions/with-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>I have an In-House Pharmacy</Link>
										<Link href="/solutions/without-pharmacy" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>No Pharmacy Yet</Link>
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
									<Link href="/products/medicine-deliveries" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Medicine Deliveries</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div>





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
