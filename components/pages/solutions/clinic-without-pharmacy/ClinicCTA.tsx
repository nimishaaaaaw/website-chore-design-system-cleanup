"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

interface ClinicCTAProps {
  onBookDemo?: () => void;
  onSeeHowItWorks?: () => void;
}

const premiumEase = [0.16, 1, 0.3, 1] as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicCTA = ({ onBookDemo }: ClinicCTAProps) => {
  return (
    <section className="section-py-lg relative overflow-hidden">
      <DarkAtmosphere />
      
      <div className="container-page relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: premiumEase }}
           className="header-lock mx-auto"
        >
          <h2 className="premium-h2 !text-white mb-8">
            Ready to <span className="text-indigo-400">close the care loop?</span>
          </h2>
          <p className="premium-p !text-slate-400 !text-xl intro-lock mx-auto">
            Join the forward-thinking clinics scaling their patient outcomes and revenue with MediKloud&apos;s digital pharmacy infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              onClick={onBookDemo}
              className="btn px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-glow transition-all active:scale-[0.98] min-w-[200px]"
            >
              Book a Free Demo
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn px-10 py-5 text-white font-bold border border-white/20 hover:bg-white/5 transition-all rounded-2xl min-w-[200px] active:scale-[0.98]"
            >
              See how it works
            </button>
          </div>
        </motion.div>

        {/* Support Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-10 gap-y-6"
        >
          {[
            { label: "AI-Driven Logistics", color: "bg-indigo-500" },
            { label: "Instant Setup", color: "bg-brand-500" },
            { label: "Zero Inventory Required", color: "bg-emerald-500" }
          ].map((chip, i) => (
            <div key={i} className="trust-chip bg-white/5 border-white/10">
              <div className={`w-1.5 h-1.5 rounded-full ${chip.color} shadow-[0_0_8px_rgba(59,130,246,0.3)]`} />
              <span className="trust-chip-text !text-slate-300">{chip.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
