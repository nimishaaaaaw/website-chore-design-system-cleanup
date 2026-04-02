"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const FAQS = [
  {
    q: 'Do I need to do anything operationally?',
    a: 'No. Your only involvement is a 20-minute formulary session during onboarding. MediKloud handles everything else from that point forward.',
  },
  {
    q: 'What happens to my existing pharmacist?',
    a: 'MediKloud evaluates them during the pre-live period. Good pharmacists move to MediKloud\'s payroll and continue in the same role. You never have to have the termination conversation.',
  },
  {
    q: 'What if my drug license has lapsed?',
    a: 'Common in vendor-operated hospitals. MediKloud identifies this at the first meeting and initiates renewal in parallel with our own application. No delays.',
  },
  {
    q: 'What if the pharmacy revenue is lower than projected?',
    a: 'Scenario B hospitals have a 3-month guaranteed income floor — see the guarantee section above. For Scenario A, MediKloud doesn\'t sign hospitals where the numbers don\'t work for both sides. We share the projection with you before signing. If the math doesn\'t justify it for your hospital, we\'ll tell you honestly.',
  },
  {
    q: 'What happens to the setup if I exit after 12 months?',
    a: 'All MediKloud\'s infrastructure is removed. Security deposit returned in full. Your patients, records, and personal license remain entirely yours.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-slate-900 pr-4">{q}</span>
        <div className={`w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${open ? 'bg-blue-600 border-blue-600' : 'bg-white'}`}>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          >
            <path d="M2 4l4 4 4-4" stroke={open ? 'white' : '#94A3B8'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 border-t border-slate-100 bg-white">
              <p className="text-sm text-slate-600 leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function MPFAQ() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Questions We Get Asked Before Signing</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-10">
          Common questions.
        </motion.h2>

        {/* Footer location strip */}
        <motion.div {...fadeUp(0.08)} className="flex items-center gap-2 mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
          <p className="text-sm text-blue-700 font-medium">
            Currently live in <strong>Visakhapatnam</strong>.&nbsp;
            Expanding to <span className="text-blue-500">Hyderabad · Bengaluru · Chennai</span>
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
