"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useContactModal } from '@/hooks/use-contact-modal'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

export function MPGuarantee() {
  const { openModal } = useContactModal()

  return (
    <section className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Guarantee text */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-green-500 opacity-70" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-green-600">For Vendor-Operated Hospitals</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              We guarantee your income<br />
              <span className="text-green-600">for the first 3 months.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.1)} className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
              Your vendor income is predictable. Asking you to replace that with something new is a financial risk. So we remove the risk entirely.
            </motion.p>

            {/* Floor guarantee badge */}
            <motion.div {...fadeUp(0.15)} className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-5 py-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 8H18L13.5 11.5L15 17.5L10 14L5 17.5L6.5 11.5L2 8H7.5L10 2Z" fill="#059669"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-700">Months 1–3</p>
                <p className="text-sm font-semibold text-slate-700">Income floor guaranteed. Standard 20% from month 4.</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-green-600/20"
              >
                See my hospital&apos;s numbers
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right: Formula card */}
          <motion.div {...fadeUp(0.1)}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-5 py-4 bg-slate-900 border-b border-slate-700">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Guarantee Formula</p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  { step: '1', text: 'Validated daily footfall (first 30 days of HMS data)' },
                  { step: '×', text: '26 days' },
                  { step: '×', text: 'Specialty AOV' },
                  { step: '×', text: '60% capture rate' },
                  { step: '×', text: '20%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-sm ${
                      item.step === '=' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.step}
                    </div>
                    <span className="text-sm text-slate-600">{item.text}</span>
                  </div>
                ))}
                <div className="border-t border-slate-100 pt-3 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 font-black text-sm text-green-700">=</div>
                  <span className="text-sm font-bold text-green-700">Guaranteed monthly floor</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-green-50 border-t border-green-100">
                <p className="text-xs text-green-700 leading-relaxed">
                  <strong>Capped at 120% of current vendor income.</strong> 60% capture rate used for the guarantee — below our operational target of 80%. The floor is always achievable.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
