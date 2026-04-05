"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Heart, 
  Zap, 
  UserPlus
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-section-surface overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Comparison Strategy Card */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto w-full">
            <div className="relative p-6 md:p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-12 items-center">
                {/* Side 1 - The Leak */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-rose-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Inefficient</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Prescription leakage
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Patients leave with paper slips. You lose revenue and care control to third-party pharmacies.
                  </p>
                </div>

                {/* Desktop Divider */}
                <div className="hidden md:flex flex-col items-center py-4">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                  <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center my-4 shadow-xl">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                </div>

                {/* Side 2 - The Capture */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-indigo-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">MediKloud Way</span>
                  </div>
                  <h3 className="text-2xl font-black text-indigo-600 tracking-tight">
                    Prescription capture
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    Closed-loop digital fulfillment. Retain 100% of revenue and ensure patient compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {[
              {
                title: "New revenue stream",
                desc: "Every prescription becomes monetizable from day 1.",
                icon: TrendingUp
              },
              {
                title: "Zero setup cost",
                desc: "No pharmacy infrastructure or capital investment required.",
                icon: Zap
              },
              {
                title: "Better patient experience",
                desc: "Faster, easier access to medicines without leaving your clinic.",
                icon: Heart
              },
              {
                title: "Higher treatment compliance",
                desc: "Patients actually take what you prescribe promptly.",
                icon: ShieldCheck
              },
              {
                title: "Long-term patient retention",
                desc: "Refill tracking and reminders maintain lifelong patient care cycles.",
                icon: UserPlus
              }
            ].map((gain, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="card-tinted group hover:shadow-card-md transition-all duration-300 border-indigo-100"
              >
                <div className="flex gap-1.5 mb-6">
                  <div className={`h-1.5 w-8 rounded-full bg-indigo-500 shadow-sm`} />
                  <div className={`h-1.5 w-1.5 rounded-full bg-indigo-200`} />
                </div>
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-indigo-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <gain.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-h3 font-bold text-slate-900 tracking-tight">{gain.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{gain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

