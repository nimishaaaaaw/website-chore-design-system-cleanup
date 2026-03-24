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
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

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

          {/* Eyebrow — above the h1, not inside it */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-r rounded-full opacity-70" />
            <span className="text-u-xs sm:text-xs font-bold uppercase tracking-u-widest text-indigo-600/90 bg-indigo-50/50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              India&apos;s First · Zero Capex · Fully Managed
            </span>
            <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-l rounded-full opacity-70" />
          </motion.div>

          {/* ── H1 ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 md:mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
          >
            <span
              className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.2] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
              style={{ color: '#4F46E5' }}
            >
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
            className="text-base md:text-[17px] text-slate-500 max-w-xl mx-auto leading-[1.75] mb-8 md:mb-10"
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
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-action text-white font-bold rounded-2xl shadow-btn hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-[15px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Phone size={15} className="opacity-80" />
              Book a Demo
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Social Proof Signal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-3 mb-12"
          >
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
              <div className="flex items-center gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-700">Rated 4.9/5 by 50+ hospital partners</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-3">
              {HERO_TRUST_BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-action" />
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
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
