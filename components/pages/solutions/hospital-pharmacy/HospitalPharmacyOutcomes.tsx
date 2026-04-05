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

export const HospitalPharmacyOutcomes = () => {
  return (
    <section className="section-py bg-white border-t border-slate-100">
      <div className="container-page">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-center mb-16 space-y-4"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-indigo-600">The transformation</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-h2 font-black tracking-tight text-slate-900 leading-tight">
            You don't need more effort. <br/>
            <span className="text-indigo-600">You need infrastructure.</span>
          </h2>
        </motion.div>

        {/* Comparison Strategy Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-4xl mx-auto w-full"
        >
          <div className="relative p-6 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-14 items-center">
              {/* Side 1 - Before */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-rose-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-sans">Before MediKloud</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Pharmacy feels like a perpetual headache",
                    "Revenue is unpredictable and unmonitored",
                    "High dependency on individual staff",
                    "Patients drift to retail stores after visits"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <XCircle className="w-4 h-4 text-rose-300 group-hover/item:text-rose-500 shrink-0 mt-0.5 transition-colors" />
                      <span className="text-sm font-medium text-slate-400 group-hover/item:text-slate-500 leading-snug transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Divider */}
              <div className="hidden md:flex flex-col items-center h-full py-4">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center my-6 shadow-2xl relative z-20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(30,41,59,0.3)] transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
              </div>

              {/* Side 2 - After */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-indigo-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-sans">The MediKloud Result</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Pharmacy operations run on autopilot",
                    "Revenue becomes predictable and high-margin",
                    "Doctors focus exclusively on patient care",
                    "Patients stay integrated in your ecosystem"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 group-hover/item:text-indigo-600 shrink-0 mt-0.5 group-hover/item:drop-shadow-[0_0_5px_rgba(79,70,229,0.5)] transition-all" />
                      <span className="text-sm font-bold text-slate-700 group-hover/item:text-slate-900 leading-snug transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

