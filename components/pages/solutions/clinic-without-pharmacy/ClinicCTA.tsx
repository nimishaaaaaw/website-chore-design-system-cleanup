"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface ClinicCTAProps {
  onBookDemo?: () => void;
  onSeeHowItWorks?: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicCTA = ({ onBookDemo }: ClinicCTAProps) => {
  return (
    <section className="section-py-lg relative overflow-hidden bg-[#020617]">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-page relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Ready to close the <br className="hidden md:block" />
            <span className="text-indigo-400">care loop?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the forward-thinking clinics scaling their patient outcomes and revenue with MediKloud&apos;s digital pharmacy infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBookDemo}
              className="btn btn-dark-cta min-w-[200px]"
            >
              Book a Free Demo
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn px-8 py-3.5 text-white font-semibold border border-white/10 hover:bg-white/5 transition-colors rounded-xl min-w-[200px]"
            >
              See how it works
            </button>
          </div>
        </motion.div>

        {/* Support Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } }
          }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">AI-Driven Logistics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instant Setup</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Zero Inventory Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
