"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HMSCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden text-center text-white border-t border-slate-800/60">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            Ready to Modernize Your <br className="hidden md:block" />
            <span className="bg-gradient-display bg-clip-text text-transparent">Hospital?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Get a personalized walkthrough and see how MediKloud HMS can revolutionize your clinical and operations workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button 
              onClick={openModal}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-black uppercase tracking-widest text-white bg-blue-600 rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)] hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
