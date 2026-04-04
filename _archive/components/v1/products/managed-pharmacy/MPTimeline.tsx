"use client"

import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const WEEKS = [
  {
    label: 'Week 1',
    title: 'Kickoff',
    items: [
      'Drug license application filed Day 1.',
      'Space assessed. HMS installed.',
      'Prescription data migrated.',
      'Formulary built doctor by doctor.',
    ],
    color: 'blue',
  },
  {
    label: 'Weeks 2–5',
    title: 'Parallel preparation',
    items: [
      'Pharmacist assigned and briefed on your hospital\'s patient profile.',
      'Distributor relationships and credit terms established.',
      'Opening inventory staged.',
      'Pre-live operations begin under your existing license — you see improvement before MediKloud is even official.',
    ],
    color: 'indigo',
  },
  {
    label: 'Week 6',
    title: 'License approved → 5-day activation',
    items: [
      'Day 1: stock arrives, scanned and shelved.',
      'Day 3: full system test, dashboard live.',
      'Day 4: soft launch.',
      'Day 5: full operations. First WhatsApp summary by 9pm. 20% revenue share active.',
    ],
    color: 'violet',
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
}
const borderColorMap: Record<string, string> = {
  blue: 'border-blue-200 bg-blue-50',
  indigo: 'border-indigo-200 bg-indigo-50',
  violet: 'border-violet-200 bg-violet-50',
}
const dotColorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
}
const textColorMap: Record<string, string> = {
  blue: 'text-blue-600',
  indigo: 'text-indigo-600',
  violet: 'text-violet-600',
}

export function MPTimeline() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">From Signed Agreement to Full Operations</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          Live in 6 weeks. Everything in parallel.
        </motion.h2>
        <motion.div {...fadeUp(0.1)} className="mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-green-700">6-week go-live guaranteed</span>
          </span>
        </motion.div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(33.3%+16px)] right-[calc(33.3%+16px)] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200" aria-hidden="true" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {WEEKS.map((week, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className={`w-8 h-8 rounded-full ${colorMap[week.color]} flex items-center justify-center text-white text-xs font-black mb-5 shadow-md`}>
                  {i + 1}
                </div>

                {/* Card */}
                <div className={`rounded-2xl border ${borderColorMap[week.color]} p-6 h-full`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${textColorMap[week.color]}`}>{week.label}</p>
                  <h3 className="text-lg font-black text-slate-900 mb-4">{week.title}</h3>
                  <ul className="space-y-2.5">
                    {week.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${dotColorMap[week.color]} flex-shrink-0 mt-1.5`} />
                        <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scenario B switchover note */}
        <motion.div {...fadeUp(0.3)} className="mt-10 p-6 bg-slate-900 rounded-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Scenario B: The Zero-Gap Switchover</p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            The vendor exits. MediKloud&apos;s team arrives the same morning. Modular setup deployed in under 4 hours. Opening inventory delivered same day. <strong className="text-white font-semibold">You never experience a single day of pharmacy downtime.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
