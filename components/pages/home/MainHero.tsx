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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[90px] pb-4 md:pt-[110px] md:pb-8">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs — simplified for performance */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

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
            <span className="eyebrow-text">India's First · AI-Driven · Fully Managed</span>
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
              className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.2] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
              style={{ color: '#4F46E5' }}
            >
              Building In-House Pharmacies
            </span>
            <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700">
              for Independent Hospitals & Clinics
            </span>
          </motion.h1>

          {/* ── SUBTITLE ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hero-subtitle max-w-[800px] mx-auto mb-8 md:mb-10"
          >
            Complete <strong className="text-slate-600 font-medium">hospital pharmacy management</strong> — from digital tools and end-to-end operations to tech-led inventory control, trained staff, and doorstep delivery.
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
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px]"
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
                    <Icon size={16} className="text-blue-500" />
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
