"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Database, RefreshCw, Zap, Sparkles, Activity } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const ClinicWithPharmacySolutions = () => {
  return (
    <section className="section-py relative overflow-hidden">
      <DarkAtmosphere />

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-3xl mb-20 space-y-6"
        >
          <div className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The clinic ecosystem</span>
          </div>
          <h2 className="premium-h2 !text-white">
            Everything works together. <br className="hidden md:block" />
            <span className="text-slate-500">Not in silos.</span>
          </h2>
          <p className="text-body-lg text-slate-400 font-medium max-w-2xl">
            We don't just "support" your pharmacy. We integrate it into your clinical workflow, ensuring zero leakage and automated growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[150px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent z-0" />

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainerLocal} 
            className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10"
          >
            {[
              {
                step: "Phase 01",
                icon: Database,
                title: "Unified HMS foundation",
                desc: "Integrated prescription flow ensures every clinical order is instantly synced to the pharmacy queue.",
                result: "100% Prescription Capture"
              },
              {
                step: "Phase 02",
                icon: Smartphone,
                title: "Managed ops engine",
                desc: "We take over pharmacy operations—staffing, inventory, and procurement are handled by MediKloud experts.",
                result: "Zero Operational Load"
              },
              {
                step: "Phase 03",
                icon: RefreshCw,
                title: "Automated refill engine",
                desc: "The system predicts patient medication cycles and triggers home delivery orders automatically.",
                result: "Endless Revenue Cycles"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="bg-white/[0.03] border border-white/10 p-8 lg:p-10 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-indigo-500/40 transition-all duration-500 group flex flex-col h-full backdrop-blur-xl relative shadow-2xl hover:shadow-glow"
              >
                {/* Floating Sparkles cluster */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0">
                  <Sparkles className="w-5 h-5 text-indigo-500/40 animate-pulse" />
                </div>
                
                <div className="text-xxs font-black uppercase tracking-[0.2em] text-slate-500 mb-8 group-hover:text-indigo-400 transition-colors">
                  {item.step}
                </div>

                <div className="bg-gradient-action w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white shadow-btn group-hover:scale-110 group-hover:shadow-float group-hover:rotate-3 transition-all duration-700 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-7 h-7 relative z-10" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed flex-grow font-medium">{item.desc}</p>
                
                <div className="text-xs font-black uppercase tracking-widest text-indigo-400 border-t border-white/10 pt-8 mt-auto flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </div>
                  {item.result}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};