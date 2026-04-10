"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronRight } from 'lucide-react'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'

import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

export function MainHero() {
  const { openModal } = useContactModal()
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-section-lg pb-section-sm">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs — staggered animations for premium feel */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand-100/30 rounded-full blur-[80px] animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-indigo-100/20 rounded-full blur-[90px] animate-float-slower" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-[1000px] mx-auto">

          {/* Eyebrow — above the h1, not inside it */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="eyebrow-wrap justify-center"
          >
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Zero Capex · AI-Driven · End-to-End</span>
            <span className="eyebrow-line-r" />
          </motion.div>

          {/* ── H1 ── */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 md:mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
          >
            <span
              className="block font-bold leading-[1.1] tracking-tighter bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
              style={{ color: '#4F46E5' }}
            >
              Building Fully Managed In-House Pharmacies
            </span>
            <span className="block text-h2 sm:text-h1 font-bold leading-[1.1] tracking-tight text-slate-700">
              for Independent Hospitals &amp; Clinics
            </span>
          </motion.h1>

          {/* ── SUBTITLE ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hero-subtitle max-w-[800px] mx-auto mb-8 md:mb-10"
          >
            We set up, staff, and run your hospital pharmacy with zero capital investment. You focus on patients — we turn lost prescriptions into steady revenue.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-10 md:mb-12"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-action text-white font-bold rounded-xl shadow-btn hover:opacity-90 active:scale-[.98] transition-all duration-200 text-[16px] md:text-[17px]"
            >
              Book A Free Demo
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Proof Signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-3 mb-12"
          >

            <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4">
              {HERO_TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-brand-500" />
                    <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* SEO hidden content */}
          <p className="sr-only">
            MediKloud offers fully managed in-house pharmacies for independent hospitals and clinics in India. We provide the staff, inventory, and technology to run your hospital pharmacy with zero capex risk. Stop pharmacy leakage, automate procurement, and capture your full Rx value. Free hospital management software (HMS) included.
          </p>
        </div>
      </div>
    </section>
  )
}
