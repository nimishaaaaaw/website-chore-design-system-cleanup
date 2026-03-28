"use client"

import React, { useState } from 'react'
import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import {
  Scale,
  Check,
  X,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Info
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactModal } from '@/hooks/use-contact-modal'

const comparisonData = {
  clinic: [
    {
      feature: "Pharmacy Setup",
      traditional: "Months of search & capital",
      others: "Software only (you set up)",
      medikloud: "Turnkey pod (Day 7)"
    },
    {
      feature: "Inventory Control",
      traditional: "Manual, high pilferage",
      others: "Barcode scanning",
      medikloud: "AI-driven reconciliation"
    },
    {
      feature: "Staffing",
      traditional: "High attrition, low skill",
      others: "Your staff, trained",
      medikloud: "Turnkey trained staffing"
    },
    {
      feature: "Revenue Upside",
      traditional: "Leakage & stockouts",
      others: "5-10% improvement",
      medikloud: "30-40% revenue recovery"
    }
  ],
  hospital: [
    {
      feature: "OPD/IPD Integration",
      traditional: "Fragmented systems",
      others: "Cloud HMS integration",
      medikloud: "Seamless AI-Ops layer"
    },
    {
      feature: "Procurement",
      traditional: "Standard distributor rates",
      others: "PO tracking software",
      medikloud: "15%+ network chain pricing"
    },
    {
      feature: "Leakage Fix",
      traditional: "Billing gaps (Invisible)",
      others: "Audit reports",
      medikloud: "Zero-tolerance AI tracking"
    },
    {
      feature: "Patient Refills",
      traditional: "Lost to retail chemists",
      others: "Manual SMS reminders",
      medikloud: "Automated refill engine (3x LTV)"
    }
  ]
}

export default function ComparePage() {
  const [activeSetup, setActiveSetup] = useState<'clinic' | 'hospital'>('clinic')
  const { openModal } = useContactModal()

  return (
    <div className="bg-slate-50 min-h-screen">
      <LandingPageTemplate
        category="Comparison"
        title="MediKloud vs. The"
        subtitle="Traditional Model."
        description="See why 500+ facilities are switching from fragmented systems to $0-capex managed infrastructure."
        accentColor={activeSetup === 'clinic' ? 'indigo' : 'blue'}
        benefits={[]} // Hide standard benefits section for cleaner comparison view
      >
        <div className="max-w-6xl mx-auto px-6 pb-24 -mt-10 lg:-mt-20 relative z-10">
          {/* Setup Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xl inline-flex gap-2">
              <button
                onClick={() => setActiveSetup('clinic')}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold transition-all text-sm",
                  activeSetup === 'clinic' 
                    ? "bg-indigo-600 text-white shadow-lg" 
                    : "text-slate-500 hover:bg-slate-50"
                )}
              >
                Clinic Comparison
              </button>
              <button
                onClick={() => setActiveSetup('hospital')}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold transition-all text-sm",
                  activeSetup === 'hospital' 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-500 hover:bg-slate-50"
                )}
              >
                Hospital Comparison
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div
            key={activeSetup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-slate-900 border-b border-slate-800">
              <div className="p-6 text-u-xs font-bold text-slate-500 uppercase tracking-widest content-center">Compare Features</div>
              <div className="p-6 text-center group border-l border-slate-800/50">
                <div className="text-u-xs font-bold text-rose-500 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                  <AlertCircle size={10} /> Traditional
                </div>
                <div className="text-sm font-bold text-white">Self-Managed</div>
              </div>
              <div className="p-6 text-center border-l border-slate-800/50">
                <div className="text-u-xs font-bold text-amber-500 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                  <Info size={10} /> Software Only
                </div>
                <div className="text-sm font-bold text-white">Cloud HMS</div>
              </div>
              <div className={cn(
                "p-6 text-center border-l border-white/10 relative overflow-hidden",
                activeSetup === 'clinic' ? "bg-indigo-600" : "bg-blue-600"
              )}>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap className="w-16 h-16 text-white" />
                </div>
                <div className="text-u-xs font-bold text-white/70 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5 relative z-10">
                  <CheckCircle2 size={10} /> MediKloud
                </div>
                <div className="text-sm font-black text-white relative z-10 tracking-tight uppercase">Fully Managed</div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {comparisonData[activeSetup].map((row, i) => (
                <div key={i} className="grid grid-cols-4 group hover:bg-slate-50 transition-colors">
                  <div className="p-6">
                    <p className="text-sm font-bold text-slate-900">{row.feature}</p>
                  </div>
                  <div className="p-6 border-l border-slate-50">
                    <p className="text-sm text-slate-500 font-medium">{row.traditional}</p>
                  </div>
                  <div className="p-6 border-l border-slate-50 bg-slate-50/30">
                    <p className="text-sm text-slate-600 font-semibold">{row.others}</p>
                  </div>
                  <div className={cn(
                    "p-6 border-l",
                    activeSetup === 'clinic' ? "bg-indigo-50/30 border-indigo-100" : "bg-blue-50/30 border-blue-100"
                  )}>
                    <div className="flex items-start gap-2">
                        <Check size={16} className={cn("mt-0.5", activeSetup === 'clinic' ? "text-indigo-600" : "text-blue-600")} />
                        <p className={cn("text-sm font-bold", activeSetup === 'clinic' ? "text-indigo-900" : "text-blue-900")}>
                        {row.medikloud}
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Bottom CTA Banner */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className={cn(
                        "hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-white shadow-lg",
                        activeSetup === 'clinic' ? "bg-indigo-600" : "bg-blue-600"
                    )}>
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 tracking-tight leading-tight">Stop managing infrastructure, start growing patient care.</p>
                        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest pt-0.5">Custom setup plan specifically for your {activeSetup} facility.</p>
                    </div>
                </div>
                <button 
                    onClick={openModal}
                    className={cn(
                    "w-full md:w-auto px-8 py-3 rounded-xl font-bold text-white shadow-xl transform hover:-translate-y-0.5 transition-all text-sm active:scale-[0.98]",
                    activeSetup === 'clinic' ? "bg-indigo-600" : "bg-blue-600"
                )}>
                    I want this setup →
                </button>
            </div>
          </motion.div>

          <p className="text-center text-slate-400 text-u-xs font-bold uppercase tracking-u-widest mt-12 mb-4">Trusted by 500+ Healthcare partners.</p>
        </div>
      </LandingPageTemplate>
    </div>
  )
}
