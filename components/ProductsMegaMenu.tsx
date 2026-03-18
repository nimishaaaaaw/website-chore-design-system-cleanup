"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Settings, 
  Truck, 
  Cpu, 
  RotateCw, 
  Activity,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react'

type ProductType = 'managed' | 'virtual' | 'hms' | 'refill'

interface ProductContent {
  icon: React.ElementType
  title: string
  tagline: string
  headline: string
  description: string
  links: {
    title: string
    desc: string
    href: string
  }[]
}

const productsData: Record<ProductType, ProductContent> = {
  managed: {
    icon: Settings,
    title: 'Managed Pharmacy',
    tagline: 'Full ops takeover for hospitals',
    headline: 'Total pharmacy management. Zero headache.',
    description: "We take over your pharmacy operations end-to-end—from staffing and procurement to billing and inventory. We transform your pharmacy into a high-margin, leak-proof asset.",
    links: [
      { title: 'Operations Takeover', desc: 'How we manage staff & procurement.', href: '/products/managed-pharmacy#ops' },
      { title: 'Leakage Control', desc: 'Real-time audits and pilferage guards.', href: '/products/managed-pharmacy#leakage' },
      { title: 'Revenue Share', desc: 'Our transparent performance-based model.', href: '/products/managed-pharmacy#pricing' },
      { title: 'Transition Plan', desc: 'Go-live timeline in under 30 days.', href: '/products/managed-pharmacy#timeline' }
    ]
  },
  virtual: {
    icon: Truck,
    title: 'Virtual Pharmacy',
    tagline: 'Hub fulfillment · ~10 min delivery',
    headline: 'A complete pharmacy for clinics — without building one.',
    description: "MediKloud's hub-and-spoke network fulfills prescriptions from the nearest hub to the patient in ~10 minutes. No license, no inventory, no space required. The clinic just prescribes — we do the rest.",
    links: [
      { title: 'How Hub Fulfillment Works', desc: 'Digital prescription to door-step delivery.', href: '/products/virtual-pharmacy' },
      { title: 'Coverage & Hub Network', desc: 'Live in Vijayawada. Expanding in 2026.', href: '/products/virtual-pharmacy#coverage' },
      { title: 'Revenue Share · 15–20%', desc: 'Earn commission on every fulfilled order.', href: '/products/virtual-pharmacy#revenue' },
      { title: 'Patient Experience', desc: 'WhatsApp tracking and easy reordering.', href: '/products/virtual-pharmacy#patient' }
    ]
  },
  hms: {
    icon: Cpu,
    title: 'Free HMS',
    tagline: 'AI-powered · free for all partners',
    headline: 'The control layer for modern healthcare.',
    description: "A comprehensive, AI-integrated Hospital Management System that's free for all our pharmacy partners. Streamline your entire clinical workflow with zero software costs.",
    links: [
      { title: 'AI-Scribe Integration', desc: 'Auto-generate notes from consultations.', href: '/products/hms#ai' },
      { title: 'Electronic Records', desc: 'Unified patient history and diagnostics.', href: '/products/hms#emr' },
      { title: 'Billing & Insurance', desc: 'Automated TPA and claim management.', href: '/products/hms#billing' },
      { title: 'Partner Program', desc: 'Why we provide our HMS for free.', href: '/products/hms#partner' }
    ]
  },
  refill: {
    icon: RotateCw,
    title: 'Refill Engine',
    tagline: 'Chronic revenue · automated reminders',
    headline: 'Never lose a chronic patient again.',
    description: "Automated refills for long-term prescriptions. Our engine predicts when a patient's medicine is running low and triggers proactive reminders and delivery prompts.",
    links: [
      { title: 'Prediction Logic', desc: 'How we forecast medication cycles.', href: '/products/refill-engine#logic' },
      { title: 'WhatsApp Integration', desc: 'Low-friction patient engagement.', href: '/products/refill-engine#engagement' },
      { title: 'Retention Stats', desc: 'Improve 6-month retention by 40%.', href: '/products/refill-engine#stats' },
      { title: 'Pharmacy Growth', desc: 'Compounding impact on monthly revenue.', href: '/products/refill-engine#growth' }
    ]
  }
}

export default function ProductsMegaMenu() {
  const [activeTab, setActiveTab] = useState<ProductType>('virtual')
  const content = productsData[activeTab]

  return (
    <div className="flex w-[820px] h-[520px] bg-white rounded-2xl overflow-hidden">
      {/* Left Column: Product List */}
      <div className="w-[300px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">What we've built</h3>
        
        <div className="space-y-1">
          {(Object.keys(productsData) as ProductType[]).map((key) => {
            const product = productsData[key]
            const Icon = product.icon
            const isActive = activeTab === key
            
            return (
              <button
                key={key}
                onMouseEnter={() => setActiveTab(key)}
                className={`w-full flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 text-left group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive 
                  ? 'bg-white shadow-sm ring-1 ring-slate-200' 
                  : 'hover:bg-white/60 opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`p-2 rounded-lg transition-all ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className={`font-bold text-sm truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                    {product.title}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium truncate">
                    {product.tagline}
                  </p>
                </div>
                {isActive && (
                  <motion.div layoutId="activeProductTag" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
                )}
              </button>
            )
          })}
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 px-1">
          <Link href="/products" className="group flex items-center justify-between text-[11px] font-bold text-blue-600 hover:text-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
            View all products
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 p-8 bg-white overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <content.icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {activeTab.replace('-', ' ')}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight mb-3">
                {content.headline}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[440px]">
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {content.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group p-4 rounded-xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      {link.title}
                    </h4>
                    <ArrowRight size={12} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-8 flex items-center gap-6">
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Activity size={12} />
                  Live Performance
               </div>
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  Enterprise Security
               </div>
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Zap size={12} />
                  Fast Integration
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
