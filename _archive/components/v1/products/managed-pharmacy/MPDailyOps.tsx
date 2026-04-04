"use client"

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const OPS = [
  { time: 'Morning check', desc: 'AI spots low stock overnight. Alerts before OPD starts.' },
  { time: 'Prescription flow', desc: 'Digital Rx at pharmacy counter before patient leaves your room.' },
  { time: 'Billing', desc: 'Auto-generated at pick completion. No manual entry. No pricing errors.' },
  { time: 'Cash reconciliation', desc: 'Every payment verified. ₹50 discrepancy triggers an alert.' },
  { time: 'Inventory reorder', desc: 'AI-driven. Pharmacist never approves spend. Separation of duties.' },
  { time: 'Schedule H logging', desc: 'Pre-filled by HMS. Pharmacist verifies and signs. Compliance embedded.' },
  { time: 'End-of-day report', desc: 'Your WhatsApp summary by 9pm. No login needed.' },
  { time: 'Central ops review', desc: 'MediKloud reviews every location every evening. Issues never left overnight.' },
  { time: 'Expiry management', desc: '60-day advance flag. Stock returned to distributor for credit. Zero write-off target.' },
]

export function MPDailyOps() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">What MediKloud Handles Daily</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          So you don&apos;t have to.
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-lg text-slate-500 mb-12 max-w-xl leading-relaxed">
          Every day. Every shift. Every transaction.
        </motion.p>

        {/* Ops grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OPS.map((op, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 border border-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 mb-1">{op.time}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{op.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
