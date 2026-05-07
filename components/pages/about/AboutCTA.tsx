"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useContactModal } from '@/hooks/use-contact-modal'
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere'
import { ArrowRight, Activity } from 'lucide-react'

export function AboutCTA() {
  const { openModal } = useContactModal()

  return (
    <section
      id="about-cta"
      className="relative w-full section-py-lg flex items-center justify-center overflow-hidden bg-section-dark"
    >
      <DarkAtmosphere />

      {/* Decorative Network Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-300px h-300px border border-brand-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-[20%] right-[10%] w-380px h-380px border border-indigo-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-wrap"
        >
          <span className="eyebrow-line-l" />
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-indigo-400" />
            <span className="eyebrow-text text-indigo-400">Defining the Standard</span>
          </div>
          <span className="eyebrow-line-r" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h2 md:text-display-sm lg:text-display-md text-white mb-8 leading-[1.1] tracking-tight font-bold"
        >
          Building a stronger foundation for <br className="hidden md:block" />
          <span className="text-display-sm sm:text-display-md md:text-h1 text-indigo-400">
            every independent hospital.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We aren't just building a pharmacy—we're building the operating foundation that allows independent hospitals to thrive in a digital India. Built by operators, for operators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => openModal({
              badge: "Team",
              title: "Join the MediKloud Mission",
              description: "Interested in revolutionizing healthcare with us? Send us your details for a exploratory chat.",
              btnText: "Submit Interest",
              successTitle: "Message Received!",
              successDescription: "Thank you for your interest! Our team will reach out to you shortly."
            })}
            className="group btn-cta-hero"
          >
            <span>Join the Mission</span>
            <ArrowRight 
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
              strokeWidth={2.5} 
            />
          </button>
        </motion.div>

      </div>
    </section>
  )
}