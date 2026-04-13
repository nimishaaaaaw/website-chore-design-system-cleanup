"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-section-lg pb-section-sm">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand-100/30 rounded-full blur-[80px] animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-indigo-100/20 rounded-full blur-[90px] animate-float-slower" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="eyebrow-wrap justify-center"
          >
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Our Story · Our Mission</span>
            <span className="eyebrow-line-r" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
          >
            <span
              className="block font-bold leading-[1.1] tracking-tighter bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
              style={{ color: '#4F46E5' }}
            >
              Elevating hospitals & clinics in India with tech & Ops infrastructure
            </span>
            <span className="block text-h2 sm:text-h1 font-bold leading-[1.1] tracking-tight text-slate-700">
              so patients become the true beneficiaries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hero-subtitle max-w-[800px] mx-auto"
          >
            We provide the managed operations and tech that allow independent providers to bypass the supply chain struggle and focus entirely on healing their patients.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
