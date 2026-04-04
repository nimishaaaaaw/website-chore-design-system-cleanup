"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContactModal } from '@/hooks/use-contact-modal'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

export function MPScenarios() {
  const [active, setActive] = useState<'A' | 'B'>('A')
  const { openModal } = useContactModal()

  return (
    <section className="relative bg-slate-50 py-20 md:py-28">
      {/* Subtle tinted bg line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">Which Situation Describes You?</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Two starting points. Same outcome.
        </motion.h2>

        {/* Toggle */}
        <motion.div {...fadeUp(0.12)} className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-10 shadow-sm">
          {(['A', 'B'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-250 ${
                active === s
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Scenario {s}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {active === 'A' ? (
            <motion.div
              key="A"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Current state */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-red-50 border-b border-red-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">Scenario A — Current State</p>
                  <h3 className="text-lg font-bold text-slate-900">You currently run the pharmacy yourself</h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {[
                    'One pharmacist on your payroll.',
                    '2–3 hours of clinical time lost daily.',
                    'Stockouts you find out about too late.',
                    'Revenue you can\'t verify.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After MediKloud */}
              <div className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-md">
                <div className="px-6 py-4 bg-blue-600 border-b border-blue-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">What Changes on Day 1</p>
                  <h3 className="text-lg font-bold text-white">MediKloud takes over</h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {[
                    'MediKloud absorbs or replaces your pharmacist.',
                    'Purchases your existing inventory at purchase price.',
                    'Your personal license formally detached from pharmacy operations.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.5 1.5 3.5-3" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <button
                    onClick={openModal}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Book a Demo →
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="B"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Current state */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-amber-50 border-b border-amber-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Scenario B — Current State</p>
                  <h3 className="text-lg font-bold text-slate-900">A vendor currently runs your pharmacy</h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {[
                    'You receive ₹20,000–40,000/month.',
                    'Zero visibility into what the pharmacy actually collects.',
                    'You know you\'re leaving money on the table.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M4 2v3M4 6.5v.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After MediKloud */}
              <div className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-md">
                <div className="px-6 py-4 bg-blue-600 border-b border-blue-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">What Changes on Day 1</p>
                  <h3 className="text-lg font-bold text-white">Zero-gap switchover</h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {[
                    'MediKloud shows you the real number first.',
                    'Guarantees your income for 3 months.',
                    'Vendor exits. MediKloud arrives same morning. Zero downtime.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.5 1.5 3.5-3" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <button
                    onClick={openModal}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Book a Demo →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
