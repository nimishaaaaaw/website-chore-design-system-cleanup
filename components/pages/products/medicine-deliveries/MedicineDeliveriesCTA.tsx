"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/hooks/use-contact-modal'

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const MedicineDeliveriesCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section id="cta" className="relative section-py bg-section-dark overflow-hidden text-center text-white">
      {/* Gold Atmospheric Primitives: CALIBRATED */}
      <div className="tech-grid-overlay !opacity-[0.05]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0,transparent:70%)] pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock mx-auto"
        >
          <div className="eyebrow-wrap mb-8 justify-center">
            <span className="eyebrow-line-r !bg-indigo-500/30" />
            <span className="eyebrow-text !text-indigo-400 capitalize">Next Steps</span>
            <span className="eyebrow-line-l !bg-indigo-500/30" />
          </div>

          <h2 className="premium-h2 !text-white !text-4xl md:!text-5xl lg:!text-6xl mb-8 text-balance tracking-tight font-bold">
            Ready to enable <br className="hidden md:block" />
            <span className="text-indigo-400">Medicine Deliveries?</span>
          </h2>
          
          <p className="premium-p !text-indigo-100/60 max-w-2xl mx-auto mb-14 text-base md:text-lg font-medium leading-relaxed">
            Experience India's easiest medicine delivery network. Reclaim your hospital's revenue and modernize patient care today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={openModal}
              className="group relative inline-flex items-center justify-center gap-4 px-10 h-16 text-lg font-bold text-white bg-indigo-600 rounded-2xl overflow-hidden shadow-glow hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto active:scale-95 ring-1 ring-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>Book a Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
