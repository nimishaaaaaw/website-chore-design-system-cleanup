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
import { useContactModal } from '@/hooks/use-contact-modal';

export function MPv2Solution() {
  const { openModal } = useContactModal();
  return (
    <section className="relative bg-section-surface section-py border-t border-slate-100">
      <div className="container-page relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
        
        {/* LEFT COLUMN: Sticky Header */}
        <div className="lg:w-5/12 lg:sticky lg:top-[15vh] z-10 pb-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="badge mb-2 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-600 text-[10px] uppercase tracking-widest gap-2"
            >
              <Zap size={14} className="animate-pulse" />
              Chain-Level Pharmacy. In Your Clinic.
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section leading-[1.1] md:text-5xl md:leading-[1.1]"
            >
              Everything <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic px-1">Apollo</span> built over decades — deployed in weeks.
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
              <button 
                onClick={openModal}
                className="btn-primary"
              >
                UPGRADE PHARMACY <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest italic">
                * Complete 30-Day Managed Transition
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
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-blue-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border-2 border-blue-200 rounded-[2rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-[box-shadow,border-color] hover:border-blue-300 group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 flex items-center justify-center">
                      <Box size={28} strokeWidth={2} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">01</span>
                  </div>
                  <div className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm">
                    Ownership: Ours
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">Full Operations Takeover</h3>
                <p className="text-slate-500 font-medium text-base mb-6 leading-relaxed">
                  We bring the entire retail chain backend into your four walls. No hiring. No procurement headaches.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> Licensed pharmacists on our payroll</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> ₹1.5L–5L inventory funded by us</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> Modular shelving + cold-chain</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> Network-level bulk buying power</div>
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
              
              <div className="bg-white border-2 border-blue-200 rounded-[2rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-[box-shadow,border-color] hover:border-blue-300 group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 flex items-center justify-center">
                      <Cpu size={28} strokeWidth={2} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">02</span>
                  </div>
                  <div className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm">
                    Shrinkage: Eliminated
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">Anti-Leakage Architecture</h3>
                <p className="text-slate-500 font-medium text-base mb-6 leading-relaxed">
                  Deploying the same HMS, AI demand forecasting, and anti-theft systems that make large chains leak-proof.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> AI forecasting = zero dead stock</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> Barcode billing = no manual theft</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> Automated 60-day vendor returns</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" /> End-of-day discrepancy alerts</div>
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
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-violet-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border-2 border-violet-200 rounded-[2rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-[box-shadow,border-color] hover:border-violet-300 group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/20 flex items-center justify-center">
                      <Smartphone size={28} strokeWidth={2} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">03</span>
                  </div>
                  <div className="px-4 py-1.5 bg-violet-50 border border-violet-200 text-violet-600 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm">
                    Patient LTV: Yours
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">The Retention Engine</h3>
                <p className="text-slate-500 font-medium text-base mb-6 leading-relaxed">
                  Keep your chronic patients from moving to 1mg. We operate branded home delivery directly from your hub.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-violet-500 mt-0.5 shrink-0" /> ₹30–50 flat home delivery</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-violet-500 mt-0.5 shrink-0" /> Exact day-of-need WhatsApp triggers</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-violet-500 mt-0.5 shrink-0" /> Prescription gap detection</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-violet-500 mt-0.5 shrink-0" /> Refill revenue stays in your clinic</div>
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
              <div className="absolute left-[34px] top-10 w-4 h-4 rounded-full border-4 border-white bg-indigo-500 hidden md:block z-10 shadow-sm" />
              
              <div className="bg-white border-2 border-indigo-200 rounded-[2rem] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-[box-shadow,border-color] hover:border-indigo-300 group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                      <HeartHandshake size={28} strokeWidth={2} />
                    </div>
                    <span className="text-display-md font-bold text-slate-200 group-hover:text-slate-300 transition-colors">04</span>
                  </div>
                  <div className="px-4 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-600 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm">
                    Your Role: Doctor
                  </div>
                </div>
                <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">Doctor-First Revenue Model</h3>
                <p className="text-slate-500 font-medium text-base mb-6 leading-relaxed">
                  No envelopes. No guesswork. A transparent revenue share on every net rupee collected. You focus on medicine.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-indigo-500 mt-0.5 shrink-0" /> Transparent revenue share</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-indigo-500 mt-0.5 shrink-0" /> Zero operational load</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-indigo-500 mt-0.5 shrink-0" /> Central ops daily monitoring</div>
                  <div className="flex items-start gap-2.5"><CheckCircle2 size={18} className="text-indigo-500 mt-0.5 shrink-0" /> Zero staff management</div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile-only CTA */}
            <div className="pt-8 lg:hidden flex flex-col items-center text-center">
              <button 
                onClick={openModal}
                className="btn-primary w-full max-w-sm"
              >
                UPGRADE PHARMACY <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest italic">
                * Complete 30-Day Managed Transition
              </p>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
