"use client"

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const COMPARE_ROWS = [
  {
    label: 'Drug license',
    hms: 'Yours to manage',
    vendor: 'Vendor holds it',
    mk: 'MediKloud holds it',
    mkGood: true,
  },
  {
    label: 'Inventory',
    hms: 'Yours to fund',
    vendor: 'Vendor-owned',
    mk: 'MediKloud funds it',
    mkGood: true,
  },
  {
    label: 'Staff',
    hms: 'Yours to hire',
    vendor: "Vendor's payroll",
    mk: "MediKloud's payroll",
    mkGood: true,
  },
  {
    label: 'You earn',
    hms: "Whatever's left",
    vendor: '₹20–40k/mo fixed',
    mk: '20% of net collections',
    mkGood: true,
  },
]

export function MPWhatWeAre() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">What MediKloud Actually Is</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        {/* Section heading */}
        <motion.div {...fadeUp(0.05)} className="mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            This is not software. This is not a vendor.
          </h2>
        </motion.div>
        <motion.p {...fadeUp(0.1)} className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
          We are the operator.
        </motion.p>
        <motion.p {...fadeUp(0.15)} className="text-base md:text-lg text-slate-500 max-w-2xl mb-14 leading-relaxed">
          Most pharmacy &lsquo;solutions&rsquo; give you a tool and leave you to figure out the rest. MediKloud walks into your hospital as the owner and operator — responsible for everything inside it.
        </motion.p>

        {/* Comparison table */}
        <motion.div {...fadeUp(0.2)} className="overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Table header */}
            <div className="grid grid-cols-4 mb-2">
              <div className="px-4 py-3" />
              <div className="px-4 py-3 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">HMS Software</span>
              </div>
              <div className="px-4 py-3 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Local Vendor</span>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-white" />
                  MediKloud
                </div>
              </div>
            </div>

            {/* Table rows */}
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 rounded-xl mb-2 overflow-hidden ${
                  i % 2 === 0 ? 'bg-slate-50' : 'bg-white border border-slate-100'
                }`}
              >
                {/* Row label */}
                <div className="px-5 py-4 flex items-center">
                  <span className="text-sm font-bold text-slate-700">{row.label}</span>
                </div>
                {/* HMS */}
                <div className="px-4 py-4 flex items-center justify-center text-center">
                  <span className="text-sm text-slate-500">{row.hms}</span>
                </div>
                {/* Vendor */}
                <div className="px-4 py-4 flex items-center justify-center text-center">
                  <span className="text-sm text-slate-500">{row.vendor}</span>
                </div>
                {/* MediKloud */}
                <div className="px-4 py-4 flex items-center justify-center text-center bg-blue-50/60 border-l border-blue-100">
                  <span className="text-sm font-semibold text-blue-700">{row.mk}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
