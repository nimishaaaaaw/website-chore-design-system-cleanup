"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay }
})

const INVESTMENTS = [
  {
    icon: '📋',
    title: 'Drug license',
    desc: 'Separate retail license per location, at your address. Your personal license fully insulated. Zero compliance risk on you.',
  },
  {
    icon: '💊',
    title: 'Opening inventory',
    desc: '₹1.5–5 lakhs of medicines funded by MediKloud. Formulary built around each doctor\'s actual prescription patterns.',
  },
  {
    icon: '🏗️',
    title: 'Physical setup',
    desc: 'Modular racks, cold chain, billing counter, Schedule H cabinet. ₹2 lakhs invested by MediKloud. Portable — redeployable if you exit.',
  },
  {
    icon: '👨‍⚕️',
    title: 'Pharmacist + helper',
    desc: 'Dedicated licensed pharmacist and one billing helper, both on MediKloud\'s payroll. Shared bench covers absences. Pharmacy never closes.',
  },
  {
    icon: '🤖',
    title: 'HMS + AI layer',
    desc: 'Digital prescriptions, real-time billing reconciliation, AI inventory forecasting, refill engine. All integrated. Live on Day 1.',
  },
  {
    icon: '📊',
    title: 'Revenue dashboard',
    desc: 'Your 20% earnings update in real time, every transaction, every day. No guesswork. No phone calls asking for numbers.',
  },
]

export function MPWhatWeInvest() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-blue-500 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">What MediKloud Invests in Your Hospital</span>
          <span className="h-[2px] w-12 rounded-full bg-gradient-to-l from-transparent to-blue-500 opacity-70" />
        </motion.div>

        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          We show up with everything.
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-xl font-semibold text-blue-600 mb-10 tracking-tight">
          You contribute the space.
        </motion.p>

        {/* Deposit callout */}
        <motion.div {...fadeUp(0.15)} className="flex items-start gap-3 px-5 py-4 bg-blue-50 border border-blue-100 rounded-xl mb-12 max-w-2xl">
          <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            <strong className="font-bold">The only financial commitment from you:</strong> A refundable security deposit of ₹1–2 lakhs, returned in full when you exit. No non-refundable capital. No ongoing setup cost. Everything below is funded by MediKloud.
          </p>
        </motion.div>

        {/* Investment cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INVESTMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/8 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* HMS connection note */}
        <motion.div {...fadeUp(0.3)} className="mt-10 p-6 bg-slate-900 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Powered by MediKloud HMS</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every number you see — collections, earnings, stock levels, patient refills — flows from MediKloud&apos;s HMS. The accuracy of the 20% statement is verifiable to every individual transaction.
            </p>
          </div>
          <a
            href="/products/hospital-management-system"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors"
          >
            See HMS →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
