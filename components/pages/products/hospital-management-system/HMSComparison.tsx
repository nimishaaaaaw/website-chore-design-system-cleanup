"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, Check } from 'lucide-react';

const comparisonData = [
  { feature: "Setup & Deployment", legacy: "15–30 Days (On-Premise)", modern: "< 24 Hours (Cloud Native)" },
  { feature: "Staff Training", legacy: "2–4 Weeks of Manuals", modern: "< 2 Hours (Smartphone-Simple)" },
  { feature: "Financial Investment", legacy: "Heavy Upfront Licensing", modern: "Zero CapEx. Pay-as-you-go." },
  { feature: "Device Access", legacy: "Fixed Desktop Terminals", modern: "Any Device (Mobile, Tablet, web)" },
  { feature: "Laboratory Sync", legacy: "Manual Result Entry", modern: "Direct Machine Integration" },
  { feature: "Patient Alerts", legacy: "Manual Phone Calls", modern: "Automated WhatsApp Reminders" },
  { feature: "Multi-Doctor Support", legacy: "Single-License Silos", modern: "Real-Time Collaborative Flow" },
  { feature: "ABDM/ABHA Compliance", legacy: "Manual Configuration", modern: "Automated & Built-In" },
  { feature: "Operational Analytics", legacy: "Static Month-End Reports", modern: "Live Dashboard & Insights" },
  { feature: "System Maintenance", legacy: "Costly AMCs & Downtime", modern: "Zero AMC. Over-the-air Updates." }
];

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const HMSComparison = () => {
  return (
    <section className="relative section-py-premium bg-white overflow-hidden border-t border-slate-100">
      {/* Gold Standard Atmosphere */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="noise-texture !opacity-[0.02]" />

      <div className="container-page relative z-10">
        <header className="header-lock text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow-wrap">
              <span className="eyebrow-line-l" />
              <span className="eyebrow-text">Modern Standard</span>
              <span className="eyebrow-line-r" />
            </div>
            <h2 className="premium-h2 mb-6 text-balance">
              The Modern <span className="text-brand-indigo-600">Clinical Standard.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="premium-p intro-lock"
          >
            Traditional Hospital Management Systems were built for accounting. <strong>MediKloud HMS</strong> is built for care, speed, and clinical precision.
          </motion.p>
        </header>

        {/* Comparison Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200 shadow-float-brand bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-8 bg-slate-50 text-slate-900 font-bold text-[11px] uppercase tracking-widest w-1/3 border-b border-slate-100">Feature</th>
                  <th className="p-8 bg-slate-50 text-slate-900 font-bold text-[11px] uppercase tracking-widest w-1/3 border-b border-slate-100 text-center">Legacy HMS Systems</th>
                  <th className="p-8 bg-brand-600 text-white font-bold text-[11px] uppercase tracking-widest w-1/3 border-b border-brand-700 text-center relative overflow-hidden">
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 text-white" />
                      MediKloud HMS
                    </div>
                    <div className="absolute inset-0 bg-gradient-action"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {comparisonData.map((row, idx) => (row && (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6 font-bold text-slate-900 text-sm">{row.feature}</td>
                    <td className="p-6 text-slate-500 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <X strokeWidth={1.5} className="w-4 h-4 text-rose-400 hidden sm:block" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{row.legacy}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-brand-50/30 border-x border-brand-100/50">
                      <div className="flex items-center justify-center gap-3">
                        <Check strokeWidth={2} className="w-5 h-5 text-success hidden sm:block" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-brand-indigo-600">{row.modern}</span>
                      </div>
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Strategic Outcome Banner: GOLD STANDARD REFIT */}
        <div 
          className="mt-16 md:mt-24 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-card-xl relative overflow-hidden group border border-white/5"
        >
          <DarkAtmosphere showStars={false} />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-600 rounded-full mb-12 opacity-60"></div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-[1.1] tracking-tight text-balance mb-8">
              Engineered for clinical speed. <br className="hidden md:block" />
              <span className="text-indigo-400">Not just hospital accounting.</span>
            </h3>
            
            <div className="mt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-600" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Clinical Excellence</span>
              </div>
              <div className="w-px h-3 bg-slate-700" />
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-600" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Modern Architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
