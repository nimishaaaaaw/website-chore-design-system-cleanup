"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'

// Lazy load ParticleNetwork as it is a heavy canvas component
const ParticleNetwork = dynamic(
  () => import('@/components/shared/ParticleNetwork').then((mod) => mod.ParticleNetwork),
  { ssr: false }
)

interface MainHeroProps {
  children?: React.ReactNode
}

export function MainHero({ children }: MainHeroProps) {
  const { openModal } = useContactModal()
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-section-lg pb-section-sm">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas - Client-side Only */}
      <ParticleNetwork showParticles={true} />

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

          {/* ── Main Content Block (Passed from Server) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-8"
          >
            {children}
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-10 md:mb-12"
          >
            <button
              onClick={() => openModal({
                    badge: "Partnership",
                    title: "Schedule Your Demo",
                    description: "Learn how MediKloud can help you recover margins and automate your patient journey.",
                    btnText: "Book My Free Demo",
                    successTitle: "Demo Scheduled!",
                    successDescription: "Our team will reach out within 24 hours to schedule your platform walkthrough."
                  })}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto"
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
        </div>
      </div>
    </section>
  )
}
