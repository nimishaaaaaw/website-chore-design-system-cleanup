"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Smartphone, ArrowRight, Zap, Database, Activity, Sparkles } from 'lucide-react';

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

export const ClinicWithPharmacyShift = () => {
  return (
    <section className="section-py bg-section-alt relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="blob-layer pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-blue-100/30 rounded-full blur-[140px] animate-pulse"></div>
      </div>

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-4xl mx-auto text-center mb-20 space-y-6"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The system shift</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="premium-h2">
            It's not a demand problem.<br/>
            <span className="text-indigo-600">It's an infrastructure gap.</span>
          </h2>
          <p className="text-body-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Traditional clinic pharmacies are manual silos. MediKloud transforms them into high-frequency fulfillment terminals.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Comparison Path Decoration with Data Particles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0 hidden lg:block overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            />
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
              className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            />
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainerLocal} 
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative z-10"
          >
            {/* The Manual Way */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-white border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all">
                <XCircle className="w-24 h-24 text-slate-400 -rotate-12" />
              </div>
              
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold border border-slate-200 group-hover:bg-slate-200 transition-colors">
                  01
                </div>
                <span className="text-xxs font-black uppercase tracking-[0.2em] text-slate-400">The manual plateau</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">One-person dependency.</h3>
              <ul className="space-y-6">
                {[
                  "No real inventory intelligence",
                  "No automated patient follow-up",
                  "Disconnected from consultations",
                  "Limited convenience vs apps",
                  "Fragmented revenue visibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 font-medium text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="text-xs font-black uppercase tracking-widest text-slate-400">Legacy operations</div>
              </div>
            </motion.div>

            {/* The MediKloud Way - Platform Card */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-white border border-indigo-200 p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:border-indigo-400 transition-all duration-500"
            >
              {/* Scan Line Animation */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent pointer-events-none z-10"
              />

              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-all rotate-6 hover:rotate-0">
                <Sparkles className="w-24 h-24 text-indigo-400" />
              </div>

              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-btn group-hover:rotate-12 transition-all">
                  02
                </div>
                <span className="text-xxs font-black uppercase tracking-[0.2em] text-indigo-600">The MediKloud terminal</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Systematic operations.</h3>
              <ul className="space-y-6">
                {[
                  "AI-driven inventory optimization",
                  "Automated refill engine triggers",
                  "Seamless HMS prescription sync",
                  "Same-day delivery convenience",
                  "Real-time revenue transparency"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-base">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-indigo-50 flex items-center justify-between">
                <div className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-pulse" />
                  Revenue engine online
                </div>
                <ArrowRight className="w-5 h-5 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
              </div>
            </motion.div>
          </motion.div>

          {/* Central Connecting Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-indigo-100 rounded-full shadow-2xl z-20 hidden lg:flex items-center justify-center group">
            <div className="absolute inset-x-0 h-px bg-indigo-500/20 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/5 animate-ping opacity-20" />
            <div className="relative w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-btn group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-5 h-5 text-white fill-white shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};