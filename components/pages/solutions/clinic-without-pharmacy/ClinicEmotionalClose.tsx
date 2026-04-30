
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import { premiumEase } from '@/lib/animation';

export const ClinicEmotionalClose = () => {
  return (
    <section className="section-py bg-section-surface relative overflow-hidden">
      <div className="tech-grid-overlay opacity-[0.02]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="w-20 h-20 mx-auto bg-brand-50 rounded-3xl flex items-center justify-center mb-10 border border-brand-indigo-100 shadow-card"
        >
          <HeartPulse size={40} className="text-indigo-600" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock mx-auto"
        >
          <h2 className="premium-h2 mb-8">
            A <span className="heading-accent">better experience</span> for your patients. <br className="hidden md:block" />
            A better clinic for you.
          </h2>

          <p className="premium-p intro-lock mx-auto">
            10 min delivery allows your patients to start treatment immediately. Home delivery ensures your patients never run out of medicine. We handle the logistics so you can focus on the care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};