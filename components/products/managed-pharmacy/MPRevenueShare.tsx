"use client"

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const SPECIALTIES = [
  { name: 'GP clinic (30–50 patients/day)', range: '₹40,000 – ₹60,000' },
  { name: 'Diabetologist / Cardiologist (chronic-heavy)', range: '₹80,000 – ₹1.2 lakhs' },
  { name: 'Multi-specialty hospital', range: '₹1 – 1.6 lakhs' },
]

export function MPRevenueShare() {
  return (
    <section className="relative bg-slate-50 py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left-aligned header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">How the Revenue Share Works</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
              20% of everything the pharmacy collects.
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-lg font-semibold text-blue-600 mb-8">
              Paid monthly. Visible to the rupee.
            </motion.p>

            {/* Formula card */}
            <motion.div {...fadeUp(0.15)} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-700">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">The Formula</p>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { label: 'Gross collections', value: '₹X', highlight: false },
                  { label: 'Less: patient discount (15%)', value: '−₹Y', highlight: false, subtitle: true },
                  { label: 'Net collections', value: '= ₹Z', highlight: false },
                  { label: 'Your share', value: '₹Z × 20%', highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      row.highlight ? 'bg-blue-50 border-t-2 border-blue-200' : ''
                    }`}
                  >
                    <span className={`text-sm ${row.subtitle ? 'text-slate-400 pl-4' : 'text-slate-700'} ${row.highlight ? 'font-bold text-slate-900' : ''}`}>
                      {row.label}
                    </span>
                    <span className={`text-sm font-bold font-mono ${row.highlight ? 'text-blue-600 text-base' : 'text-slate-600'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upside note */}
            <motion.p {...fadeUp(0.22)} className="mt-4 text-sm text-slate-500 leading-relaxed bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <strong className="font-semibold text-green-700">Collections above ₹6L/mo:</strong> first ₹6L at 20%, balance at 22%. You share in the upside as the pharmacy grows.
            </motion.p>
          </div>

          {/* Specialty earnings */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Typical Monthly Earnings by Specialty</p>

              <div className="space-y-3">
                {SPECIALTIES.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="bg-white rounded-xl border border-slate-200 px-5 py-4 flex items-center justify-between gap-4 shadow-sm"
                  >
                    <span className="text-sm font-medium text-slate-700">{spec.name}</span>
                    <span className="text-sm font-black text-blue-600 whitespace-nowrap">{spec.range}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-4 text-xs text-slate-400 italic">
                All estimates. Your personalised projection generated before signing.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
