"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Cpu,
  Smartphone,
  Zap,
  Box,
  HeartHandshake
} from 'lucide-react';

export function MPv2Solution() {
  return (
    <div className="relative pt-24 mt-20 border-t border-slate-200 z-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
        
        {/* LEFT COLUMN: Sticky Header */}
        <div className="lg:w-5/12 lg:sticky lg:top-[15vh] z-10 pb-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono tracking-[0.3em] uppercase"
            >
              <Zap size={14} className="animate-pulse" />
              Chain-Level Pharmacy. In Your Clinic.
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-h2 md:text-h1 font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Everything <span className="text-emerald-500 italic">Apollo</span> built over decades — deployed in weeks.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-slate-500 font-medium leading-relaxed"
            >
              We install the infra, tech, and staff. You get the profits. <strong className="text-slate-700 font-bold">We handle everything else.</strong>
            </motion.p>

            {/* Final CTA in Sticky Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 hidden lg:block"
            >
              <button className="px-8 py-3.5 bg-gradient-action text-white font-bold rounded-2xl flex items-center gap-2 shadow-btn hover:shadow-lg hover:-translate-y-0.5 transition-all text-base">
                UPGRADE PHARMACY <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest italic">
                * 14-21 Business Days Installation
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Modules */}
        <div className="lg:w-7/12 relative pb-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {/* Module 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-0 md:pl-24"
            >
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-emerald-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:border-slate-300 shadow-card hover:shadow-card-md transition-all group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 text-emerald-600">
                      <Box size={24} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">01</span>
                  </div>
                  <div className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-mono tracking-widest uppercase rounded-lg">
                    Ownership: Ours
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4">Full Operations Takeover</h3>
                <p className="text-slate-600 font-medium text-base mb-6">
                  We bring the entire retail chain backend into your four walls. No hiring. No procurement headaches.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> Licensed pharmacists on our payroll</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> ₹1.5L–5L inventory funded by us</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> Modular shelving + cold-chain</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> Network-level bulk buying power</div>
                </div>
              </div>
            </motion.div>

            {/* Module 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-0 md:pl-24"
            >
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-blue-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:border-slate-300 shadow-card hover:shadow-card-md transition-all group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600">
                      <Cpu size={24} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">02</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-[10px] font-mono tracking-widest uppercase rounded-lg">
                    Shrinkage: Eliminated
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4">Anti-Leakage Architecture</h3>
                <p className="text-slate-600 font-medium text-base mb-6">
                  Deploying the same HMS, AI demand forecasting, and anti-theft systems that make large chains leak-proof.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> AI forecasting = zero dead stock</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> Barcode billing = no manual theft</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> Automated 60-day vendor returns</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" /> End-of-day discrepancy alerts</div>
                </div>
              </div>
            </motion.div>

            {/* Module 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-0 md:pl-24"
            >
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-cyan-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:border-slate-300 shadow-card hover:shadow-card-md transition-all group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-100 text-cyan-600">
                      <Smartphone size={24} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">03</span>
                  </div>
                  <div className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-600 text-[10px] font-mono tracking-widest uppercase rounded-lg">
                    Patient LTV: Yours
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4">The Retention Engine</h3>
                <p className="text-slate-600 font-medium text-base mb-6">
                  Keep your chronic patients from moving to 1mg. We operate branded home delivery directly from your hub.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" /> ₹30–50 flat home delivery</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" /> Exact day-of-need WhatsApp triggers</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" /> Prescription gap detection</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" /> Refill revenue stays in your clinic</div>
                </div>
              </div>
            </motion.div>

            {/* Module 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-0 md:pl-24"
            >
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-brand-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-gradient-tinted border border-indigo-200 rounded-[2rem] p-8 md:p-10 hover:shadow-card-lg transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 blur-3xl blend-multiply" />
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center border border-indigo-200 text-brand-indigo-600">
                      <HeartHandshake size={24} />
                    </div>
                    <span className="text-display-md font-bold text-indigo-200 group-hover:text-indigo-300 transition-colors">04</span>
                  </div>
                  <div className="px-3 py-1 bg-indigo-100 border border-indigo-200 text-brand-indigo-600 text-[10px] font-mono tracking-widest uppercase rounded-lg">
                    Your Role: Doctor
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4 relative z-10">Doctor-First Revenue Model</h3>
                <p className="text-slate-600 font-medium text-base mb-6 relative z-10">
                  No envelopes. No guesswork. A transparent revenue share on every net rupee collected. You focus on medicine.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 font-medium relative z-10">
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-indigo-600 mt-0.5 shrink-0" /> Transparent revenue share</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-indigo-600 mt-0.5 shrink-0" /> Zero operational load</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-indigo-600 mt-0.5 shrink-0" /> Central ops daily monitoring</div>
                  <div className="flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-indigo-600 mt-0.5 shrink-0" /> Zero staff management</div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile-only CTA */}
            <div className="pt-8 lg:hidden flex flex-col items-center text-center">
              <button className="w-full max-w-sm py-4 bg-gradient-action text-white font-bold tracking-tight rounded-2xl flex justify-center items-center gap-2 shadow-btn active:scale-95 transition-all">
                UPGRADE PHARMACY <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest italic">
                * 14-21 Business Days Installation
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
