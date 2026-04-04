"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useContactModal } from '@/hooks/use-contact-modal'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

export function MPFinalCTA() {
  const { openModal } = useContactModal()

  return (
    <section className="relative bg-[#0F1724] py-20 md:py-28 overflow-hidden">
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
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          <motion.p {...fadeUp()} className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400 mb-4">
            Ready to Talk?
          </motion.p>

          <motion.h2 {...fadeUp(0.05)} className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            You&apos;ve spent long enough
            {' '}<span className="text-blue-400">on pharmacy problems.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.1)} className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
            MediKloud takes over from Day 1 — staff, stock, license, and technology. Your first month&apos;s earnings projection is free. No commitment required.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-900/50 transition-all duration-200 text-[15px]"
            >
              <Phone size={15} className="opacity-80" />
              Book a Demo
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-4 text-slate-400 hover:text-white font-semibold text-[15px] transition-colors border border-white/10 rounded-2xl hover:border-white/20"
            >
              See my hospital&apos;s numbers
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Trust strip */}
          <motion.div {...fadeUp(0.22)}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                '₹0 non-refundable spending',
                '6-week go-live',
                '20% monthly, to the rupee',
                '12-month agreement',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
