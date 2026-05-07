"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useContactModal } from '@/hooks/use-contact-modal'
import { premiumEase } from '@/lib/animation'

export const MedicineDeliveriesCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section id="cta" className="relative section-py bg-section-dark overflow-hidden text-center text-white">
      <div className="tech-grid-overlay !opacity-[0.05]" />
      <div className="noise-texture !opacity-[0.03]" />

      {/* Ambient glow — raw radial-gradient kept: no token exists for radial patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0,transparent_70%)] pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock mx-auto"
        >
          <div className="eyebrow-wrap mb-8 justify-center">
            <span className="eyebrow-line-l opacity-30" />
            <span className="eyebrow-text text-indigo-400 capitalize">Get Started</span>
            <span className="eyebrow-line-r opacity-30" />
          </div>

          <h2 className="premium-h2 text-white text-h1 md:text-display-sm lg:text-display-md mb-8 text-balance tracking-tight font-bold">
            Ready to Deliver Medicines <br className="hidden md:block" />
            <span className="text-indigo-400">Directly From Your Hospital?</span>
          </h2>

          <p className="premium-p text-indigo-100/60 max-w-2xl mx-auto mb-14 text-base md:text-body-lg font-medium leading-relaxed">
            Set up hospital-to-home medicine deliveries in days. No upfront cost. No new staff required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={() => openModal({
                badge: "Medicine Deliveries",
                title: "Enable Direct Patient Delivery.",
                description: "Let us handle the logistics so your patients always get the right medicine, on time.",
                btnText: "Schedule Your Demo",
                successTitle: "Deployment Plan Initiated!",
                successDescription: "Our team will be in touch within 24 hours to map your infrastructure."
              })}
              className="group btn-cta-hero"
            >
              <span>Enable Medicine Deliveries</span>
              <ArrowRight 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                strokeWidth={1.5} 
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}