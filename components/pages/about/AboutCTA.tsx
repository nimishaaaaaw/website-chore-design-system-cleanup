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
      className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-brand-950"
    >
      <DarkAtmosphere />

      {/* Decorative Network Layer (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] border border-brand-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] border border-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-brand-500/50" />
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-brand-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-400">Defining the Standard</span>
          </div>
          <div className="h-px w-8 bg-brand-500/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h2 md:text-display-sm lg:text-display-md text-white mb-8 leading-[1.1] tracking-tight font-bold"
        >
          Building a stronger foundation for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
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
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-brand-600 rounded-2xl shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10 flex items-center gap-3">
              <span>Join the Mission</span>
              <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  )
}
