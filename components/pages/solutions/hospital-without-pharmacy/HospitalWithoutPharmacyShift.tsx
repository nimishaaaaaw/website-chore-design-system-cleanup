"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

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

export const HospitalWithoutPharmacyShift = () => {
  return (
    <section className="section-py bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/[0.02] pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-center mb-20 space-y-5"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l bg-indigo-600/30" />
            <span className="eyebrow-text text-indigo-600">The strategic shift</span>
            <span className="eyebrow-line-r bg-indigo-600/30" />
          </div>
          <h2 className="text-h2 font-black tracking-tight text-slate-900 leading-[1.1] md:text-5xl">
            Stop losing patients to retail. <br/>
            <span className="text-indigo-600">Start an integrated layer.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Move from a fragmented exit experience to a unified clinical fulfillment channel.
          </p>
        </motion.div>

        {/* Comparison Strategy Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-5xl mx-auto w-full px-4 sm:px-0"
        >
          <div className="relative p-8 md:p-14 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-card-md overflow-hidden group">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/[0.02] transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-12 lg:gap-20 items-stretch">
              {/* Side 1 - Legacy */}
              <div className="space-y-8 py-4">
                <div className="inline-flex items-center gap-3 text-rose-500">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="text-xs font-black uppercase tracking-[0.2em]">The Legacy Path</span>
                </div>
                <ul className="space-y-6">
                  {[
                    "Handing over a manual paper prescription",
                    "Patient spends time searching outside stores",
                    "Revenue leaks to local retail aggregators",
                    "Follow-up dependence on patient memory"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                      <XCircle className="w-5 h-5 text-rose-300 group-hover/item:text-rose-500 shrink-0 mt-0.5 transition-colors" />
                      <span className="text-sm md:text-[15px] font-medium text-slate-400 group-hover/item:text-slate-500 leading-relaxed transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Central Divider */}
              <div className="hidden lg:flex flex-col items-center py-4">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                <div className="w-14 h-14 rounded-full bg-slate-950 flex items-center justify-center my-10 shadow-2xl relative z-20 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(30,41,59,0.4)] transition-all duration-700 bg-[radial-gradient(circle_at_30%_30%,#334155,0%,#0f172a_100%)]">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
              </div>

              {/* Side 2 - MediKloud */}
              <div className="space-y-8 py-4 px-6 md:px-8 bg-indigo-50/30 rounded-3xl border border-indigo-100/50 relative overflow-hidden group/side">
                {/* Visual "Scan line" Animation */}
                <motion.div 
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent pointer-events-none z-0"
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center gap-3 text-indigo-600 mb-8">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">The MediKloud Layer</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Immediate digital prescription sync & verify",
                      "Instant fulfillment from our verified network",
                      "Your hospital captures a high revenue share",
                      "Integrated refill engine for chronic followers"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item transition-all duration-300 hover:translate-x-1">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 group-hover/item:text-indigo-600 shrink-0 mt-0.5 group-hover/item:drop-shadow-[0_0_8px_rgba(79,70,229,0.4)] transition-all" />
                        <span className="text-sm md:text-[15px] font-bold text-slate-700 group-hover/item:text-slate-900 leading-relaxed transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Status Indicator */}
                  <div className="mt-auto pt-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/60 border border-indigo-100 backdrop-blur-sm self-start group/status">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Revenue engine online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

