"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HMSCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden text-center text-white border-t border-slate-800/60">
      {/* Dynamic Background Atmosphere: GOLD STANDARD DARK STACK */}
      <div className="tech-grid-overlay !opacity-[0.05]" />
      <div className="noise-texture !opacity-[0.03]" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,transparent_70%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-indigo-600/10 blur-[100px] rounded-full" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mb-10 opacity-60"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-12">
            <span className="inline-block md:whitespace-nowrap">Ready to Modernize Your</span> <br className="hidden md:block" />
            <span className="!text-indigo-400">Hospital?</span>
          </h2>
          
          <p className="premium-p !text-slate-400 max-w-2xl mx-auto mb-12">
            Join the clinical-first revolution. Get a forensic walkthrough of the platform and reclaim your staff&apos;s time and your facility&apos;s margins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={openModal}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-2xl shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95 border-1.5 border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-action opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 flex items-center gap-3">
                <span>Book a Demo</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
