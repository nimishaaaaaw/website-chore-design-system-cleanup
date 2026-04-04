"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction as keyof typeof directions] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ClinicWP_EmotionalCTAProps {
  onBookDemo?: () => void;
  onLiveDemo?: () => void;
}

export const ClinicWP_EmotionalCTA = ({ onBookDemo, onLiveDemo }: ClinicWP_EmotionalCTAProps) => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8">
            You built trust with every patient who walks in.
          </h2>
          <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
            Why let that trust convert somewhere else? <br className="hidden md:block"/>
            This isn’t about adding a pharmacy. It’s about making your existing one actually matter.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 mix-blend-overlay"></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              See how much your clinic is actually losing.
            </h3>
            <p className="text-slate-300 mb-10 text-lg relative z-10">
              Once you see the gaps, you can’t unsee them.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookDemo}
                className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                Book a Walkthrough <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLiveDemo}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full flex items-center justify-center gap-2 backdrop-blur-sm transition-colors border border-white/10"
              >
                Get a Live Demo
              </motion.button>
            </div>
            <p className="mt-8 text-sm text-slate-400 relative z-10">
              Or schedule a visit to a MediKloud partner clinic.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
