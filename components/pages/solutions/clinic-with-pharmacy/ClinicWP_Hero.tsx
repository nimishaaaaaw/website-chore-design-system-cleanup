"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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

export const ClinicWP_Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      {/* Background grids & glows */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Built for high-flow clinics
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
            You already have a pharmacy.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Why are patients buying outside?
            </span>
          </h1>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Every consultation ends with a prescription. But your revenue, your patient, and your control leave the clinic the moment they walk out the door.
            </p>
            
            <div className="space-y-4">
              <p className="font-semibold text-slate-900">MediKloud turns your clinic pharmacy into a system that patients don’t walk away from:</p>
              <ul className="space-y-3">
                {[
                  "Managed Pharmacy (End-to-end operations)",
                  "Free HMS (Instant prescription capture)",
                  "Refill Engine & Delivery (Automated retention)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Floating "Excuses" Cards */}
          <div className="relative h-[300px] lg:h-[400px]">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px]"
            >
              <p className="text-slate-600 italic">"I’ll just buy it on the way home..."</p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-32 right-0 lg:-right-10 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px]"
            >
              <p className="text-slate-600 italic">"I usually order my meds online."</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -12, 0] }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 left-10 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-[280px]"
            >
              <p className="text-slate-600 italic">"I'll check another pharmacy."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
