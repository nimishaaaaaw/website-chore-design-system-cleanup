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
    <section className="section-py bg-section-alt border-y border-muted relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-center mb-20 space-y-5"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The strategic shift</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-slate-900 leading-[1.1]">
            Stop losing patients to retail. <br/>
            <span className="heading-accent">Start an integrated layer.</span>
          </h2>
          <p className="text-body-lg text-subtitle font-medium max-w-2xl mx-auto">
            Move from a fragmented exit experience to a unified clinical fulfillment channel.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-5xl mx-auto w-full px-4 sm:px-0"
        >
          <div className="relative p-8 md:p-14 rounded-3xl bg-section-surface border border-slate-200 shadow-card-md overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-12 lg:gap-20 items-stretch">
              {/* Side 1 - Legacy */}
              <div className="space-y-8 py-4">
                <div className="inline-flex items-center gap-3 text-rose-500">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <span className="text-xs font-bold uppercase tracking-widest">The Legacy Path</span>
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
                      <span className="text-sm font-medium text-muted group-hover/item:text-subtitle leading-relaxed transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Central Divider */}
              <div className="hidden lg:flex flex-col items-center py-4">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center my-10 shadow-float relative z-20 group-hover:scale-110 transition-all duration-700">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
              </div>

              {/* Side 2 - MediKloud */}
              <div className="space-y-8 py-4 px-6 md:px-8 bg-indigo-50 rounded-3xl border border-indigo-100 relative overflow-hidden group/side">
                <motion.div 
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent pointer-events-none z-0"
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center gap-3 text-indigo-600 mb-8">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                    <span className="text-xs font-bold uppercase tracking-widest">The MediKloud Layer</span>
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
                        <span className="text-sm font-bold text-secondary group-hover/item:text-slate-900 leading-relaxed transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-100 backdrop-blur-sm self-start group/status">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-body uppercase tracking-widest">Revenue engine online</span>
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
