"use client"

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const COMPARISONS = [
  {
    topic: 'Wait time',
    before: '10–20 minutes. Pharmacist searching shelves. Manual billing. Cash only.',
    after: 'Under 3 minutes. Medicines picked before the patient reaches the counter.',
  },
  {
    topic: 'Stockout',
    before: '"Get it from outside." Patient goes to Apollo. Revenue and trust lost permanently.',
    after: 'Equivalent approved via one HMS tap. Or same-day home delivery. Patient never hears "go outside."',
  },
  {
    topic: 'Chronic patients',
    before: 'No refill reminder. Quietly shifts to MedPlus after 2–3 cycles. Gone forever.',
    after: 'WhatsApp reminder on Day 13 of a 30-day prescription — not a timer, their actual gap. One tap to reorder. Delivered same day.',
  },
]

export function MPPatientExperience() {
  return (
    <section className="relative bg-slate-50 py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">The Patient Experience</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          The only reason your patients are going to Apollo<br className="hidden md:block" />
          <span className="text-blue-600"> is because your pharmacy is slower.</span>
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-slate-500 mb-14 max-w-2xl leading-relaxed">
          MediKloud changes that in Week 1.
        </motion.p>

        {/* Before / After table */}
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_2fr_2fr] gap-px mb-2">
              <div />
              <div className="px-5 py-3 bg-red-50 rounded-tl-xl text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Before MediKloud</span>
              </div>
              <div className="px-5 py-3 bg-green-50 rounded-tr-xl text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">After MediKloud</span>
              </div>
            </div>

            {/* Rows */}
            {COMPARISONS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="grid grid-cols-[1fr_2fr_2fr] gap-px mb-2"
              >
                <div className="flex items-center px-4 py-4 bg-slate-100 rounded-l-xl">
                  <span className="text-sm font-bold text-slate-700">{row.topic}</span>
                </div>
                <div className="px-5 py-4 bg-red-50/60 border border-red-100 flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                      <path d="M1 1l4 4M5 1L1 5" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{row.before}</p>
                </div>
                <div className="px-5 py-4 bg-green-50/60 border border-green-100 rounded-r-xl flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                      <path d="M1 3l1.5 1.5 3-3" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{row.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LTV callout */}
        <motion.div {...fadeUp(0.3)} className="mt-10 bg-gradient-to-br from-violet-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-300 mb-1">Chronic Patient Lifetime Value</p>
              <p className="text-5xl md:text-6xl font-black text-white tracking-tight">₹90,000+</p>
              <p className="text-sm text-violet-300 mt-1">per retained patient at ₹1,500/mo over 5 years</p>
            </div>
            <div className="w-px h-16 bg-white/20 hidden md:block" />
            <div className="flex-1">
              <p className="text-base text-violet-100 leading-relaxed">
                50 chronic patients leaving per year = <strong className="text-white font-bold">₹45 lakhs in lifetime revenue gone.</strong>{' '}
                MediKloud&apos;s refill engine doesn&apos;t just retain patients — it retains multi-crore lifetime revenue streams.
                This is why the refill system is built into every managed pharmacy from Day 1, not sold as an add-on.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
