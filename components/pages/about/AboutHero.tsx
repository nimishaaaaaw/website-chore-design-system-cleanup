"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface AboutHeroProps {
  children?: React.ReactNode
}

export function AboutHero({ children }: AboutHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-section-sm pb-section-lg">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />


      {/* Ambient glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand-100/30 rounded-full blur-[80px] animate-float-slow" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-indigo-100/20 rounded-full blur-[90px] animate-float-slower" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="eyebrow-wrap justify-center mb-8"
          >
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Our Story · Our Mission</span>
            <span className="eyebrow-line-r" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-8"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
