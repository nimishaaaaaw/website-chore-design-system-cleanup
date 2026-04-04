"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HMSCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative py-section-sm md:py-section bg-slate-900 overflow-hidden text-center text-white border-t border-slate-800">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-full blur-[120px] animae-pulse" />
      </div>
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-h1 font-black text-white leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto"
        >
          Ready to Modernize Your <br className="hidden md:block" />
          <span className="bg-gradient-display bg-clip-text text-transparent">Clinical Operations?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-lg text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
        >
          Join 500+ independent clinics and hospitals that have reclaimed their clinical time and scaled their revenue with MediKloud. Experience the power of the easiest HMS in India today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg sm:max-w-none">
            <button 
              onClick={openModal}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-black uppercase tracking-widest text-white bg-gradient-action rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto active:scale-95"
            >
              <span>Get a Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openModal}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-black uppercase tracking-widest text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-2xl hover:bg-slate-700 hover:text-white transition-all w-full sm:w-auto shadow-card backdrop-blur-sm active:scale-95"
            >
              Talk to an Expert
            </button>
          </div>
          <p className="text-sm text-slate-500 italic font-medium">
            Book your 15-minute walkthrough. No obligation. <span className="text-success-light font-bold">Zero setup cost.</span>
          </p>
        </motion.div>

        {/* The MediKloud Promise Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto"
        >
          <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">The MediKloud Promise</h4>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <li className="flex items-center gap-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 shadow-inner group hover:bg-slate-800/60 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              Deployment &lt; 24h
            </li>
            <li className="flex items-center gap-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 shadow-inner group hover:bg-slate-800/60 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              Training &lt; 2h
            </li>
            <li className="flex items-center gap-3 bg-slate-800/40 px-6 py-3 rounded-full border border-slate-700/50 shadow-inner group hover:bg-slate-800/60 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              Zero Hidden Fees
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
