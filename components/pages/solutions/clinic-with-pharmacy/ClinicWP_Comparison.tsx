"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, TrendingUp } from 'lucide-react';

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

export const ClinicWP_Comparison = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            What Changes for You
          </h2>
          <p className="text-xl text-slate-400">
            Your clinic doesn’t need more patients. <br className="hidden md:block"/>
            <span className="text-white font-medium">It needs to capture the ones it already has.</span>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <FadeIn delay={0.1} direction="right">
            <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-300">Before MediKloud</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Pharmacy feels inconsistent",
                  "You’re dependent on staff reliability",
                  "Patients don’t always buy from you",
                  "Repeat revenue is unpredictable"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400 text-lg">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-600 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* After */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-gradient-to-b from-teal-900/40 to-blue-900/20 p-8 md:p-12 rounded-3xl border border-teal-500/30 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">After MediKloud</h3>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Pharmacy runs like an autonomous system", 
                  "Revenue becomes stable and growing", 
                  "Patients buy from you — and return", 
                  "You stop thinking about operations completely"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-teal-50 text-lg font-medium">
                    <TrendingUp className="mt-1 w-5 h-5 text-teal-400 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
