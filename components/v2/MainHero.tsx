"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { HERO_TRUST_BADGES } from './v2-data'

import { ParticleNetwork } from './ParticleNetwork'

export function MainHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[90px] pb-4 md:pt-[110px] md:pb-8">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-100/30 rounded-full blur-[80px] animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-indigo-100/20 rounded-full blur-[90px] animate-float-slower" aria-hidden="true" />
      <div className="absolute top-[45%] right-[30%] w-48 h-48 bg-violet-100/25 rounded-full blur-[60px] animate-float-medium" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">

          {/* ── H1 ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 md:mb-8"
          >
            {/* Kicker with fading lines */}
            <span className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <span className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-blue-500 rounded-full opacity-70" />
              <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.15em] text-blue-600">
                India&apos;s First · Zero Capex · Fully Managed
              </span>
              <span className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-blue-500 rounded-full opacity-70" />
            </span>
            <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-black leading-[1.1] tracking-tighter md:tracking-[-0.03em] bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4 md:mb-6">
              Building Inhouse Pharmacies
            </span>
            <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700">
              for Independent Hospitals &amp; Clinics
            </span>
          </motion.h1>

          {/* ── SUBTITLE ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[15px] md:text-base text-slate-500 max-w-xl mx-auto leading-[1.7] mb-8 md:mb-10"
          >
            Complete <strong className="text-slate-600 font-medium">hospital pharmacy management</strong> — <strong className="text-slate-600 font-medium">operations</strong>, stock control, <strong className="text-slate-600 font-medium">clinical pharmacy</strong>, and <strong className="text-slate-600 font-medium">virtual pharmacy</strong> fulfillment.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-10 md:mb-12"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300 text-[15px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Phone size={15} className="opacity-80" />
              Book a Demo
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/#features"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-600 font-semibold rounded-2xl border border-slate-300 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all duration-300 text-[15px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              See How It Works
              <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* ── TRUST BADGES ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-3"
          >
            {HERO_TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <badge.icon size={14} className="text-emerald-500" />
                <span className="text-[11px] md:text-[12px] font-semibold text-slate-400 tracking-[0.1em] uppercase">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* SEO hidden content */}
          <p className="sr-only">
            MediKloud is India&apos;s first tech-driven hospital pharmacy management company offering fully managed 
            hospital pharmacy operations, hospital pharmacy management, and zero capex pharmacy setup for 
            independent hospitals and clinics. Our AI-powered platform covers pharmacy inventory management, 
            procurement automation, pharmacy billing and revenue leakage control, medicine home delivery, 
            and automated prescription refills. Free hospital management software (HMS) included with 
            AI scribe, EHR, and clinical billing tools. Serving hospitals and clinics across India 
            with virtual pharmacy fulfillment, pharmacy staffing, and complete pharmacy operations management.
          </p>
        </div>
      </div>
    </section>
  )
}
