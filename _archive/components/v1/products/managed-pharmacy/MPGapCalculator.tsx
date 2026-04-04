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

export function MPGapCalculator() {
  const { openModal } = useContactModal()

  return (
    <section id="how-economics-work" className="relative bg-[#0F1724] py-20 md:py-28 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #60A5FA 1px, transparent 1px),
            linear-gradient(to bottom, #60A5FA 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-400 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400">For Vendor-Operated Hospitals</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-400 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
          The gap you haven&apos;t seen
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-slate-400 max-w-2xl mb-14 leading-relaxed">
          You know the pharmacy generates revenue. You&apos;re just not seeing most of it.
          When a vendor runs your pharmacy, they report whatever they choose. No audit. No verification.
          MediKloud runs the numbers using your actual patient footfall — and what comes out is usually a surprise.
        </motion.p>

        {/* Gap example card */}
        <motion.div {...fadeUp(0.15)} className="max-w-3xl">
          {/* Example label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-400 uppercase tracking-widest mb-5">
            Example: 40-patient GP clinic, ₹600 average order value
          </div>

          {/* Calculation breakdown */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {/* Calculation formula */}
            <div className="px-6 py-5 border-b border-white/10">
              <p className="text-sm text-slate-400 font-mono">
                40 patients/day × 26 days × ₹600 AOV × 80% capture
              </p>
            </div>

            {/* Result */}
            <div className="px-6 py-6 bg-blue-600/10 border-b border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Monthly pharmacy collection</p>
              <p className="text-5xl md:text-6xl font-black text-white tracking-tight">₹4,99,200<span className="text-2xl text-slate-400 font-bold">/mo</span></p>
            </div>

            {/* Two-column comparison */}
            <div className="grid md:grid-cols-2">
              <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">Your 20% under MediKloud</p>
                <p className="text-3xl md:text-4xl font-black text-green-400 tracking-tight">₹99,840<span className="text-lg text-green-600 font-bold">/mo</span></p>
              </div>
              <div className="px-6 py-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">What your vendor currently pays you</p>
                <p className="text-3xl md:text-4xl font-black text-red-400 tracking-tight">₹30,000<span className="text-lg text-red-600 font-bold">/mo</span></p>
              </div>
            </div>

            {/* Gap callout */}
            <div className="px-6 py-5 bg-amber-500/10 border-t border-amber-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-0.5">Gap per year</p>
                  <p className="text-2xl font-black text-amber-300">₹8.38 lakhs left on the table</p>
                </div>
                <div className="text-xs text-slate-500 max-w-xs">
                  Numbers vary by specialty and footfall. MediKloud generates your personalised projection before you sign anything.
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0.25)} className="mt-6">
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors duration-200 text-sm"
            >
              See my hospital&apos;s numbers
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
