"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, Check } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

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

export const HMSComparison = () => {
  return (
    <section className="relative section-py-premium bg-white overflow-hidden border-t border-muted">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="noise-texture !opacity-[0.02]" />

      <div className="container-page relative z-10">

        {/* Header */}
        <header className="header-lock text-center mb-16 md:mb-24 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Modern Standard</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="premium-h2 mb-6 text-balance">
            The Modern <span className="heading-accent">Clinical Standard.</span>
          </h2>
          <p className="premium-p intro-lock !max-w-3xl mx-auto">
            Traditional Hospital Management Systems were built for accounting. <strong>MediKloud HMS</strong> is built for care, speed, and clinical precision.
          </p>
        </header>

        {/* Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200 shadow-float-brand bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-8 bg-section-alt font-bold text-xs uppercase tracking-widest w-1/3 border-b border-muted text-primary">
                    Feature
                  </th>
                  <th className="p-8 bg-section-alt font-bold text-xs uppercase tracking-widest w-1/3 border-b border-muted text-center text-primary">
                    Legacy HMS Systems
                  </th>
                  <th className="p-8 font-bold text-xs uppercase tracking-widest w-1/3 border-b border-brand-700 text-center relative overflow-hidden text-white">
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 text-white" />
                      MediKloud HMS
                    </div>
                    <div className="absolute inset-0 bg-gradient-action" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {comparisonData.map((row, idx) => (row && (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6 font-bold text-sm text-primary">{row.feature}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <X strokeWidth={1.5} className="w-4 h-4 text-danger hidden sm:block" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted">{row.legacy}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-brand-50 border-x border-brand-100/50">
                      <div className="flex items-center justify-center gap-3">
                        <Check strokeWidth={2} className="w-5 h-5 text-success hidden sm:block" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-indigo-600">{row.modern}</span>
                      </div>
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Strategic Outcome Banner */}
        <div className="mt-16 md:mt-24 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-card-lg relative overflow-hidden border border-white/5">
          <DarkAtmosphere showStars={false} />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 rounded-full mb-12 opacity-60 bg-brand-600" />
            <h3 className="text-display-sm sm:text-display-md md:text-display-lg font-bold text-white max-w-4xl mx-auto leading-[1.1] tracking-tight text-balance mb-8">
              Engineered for clinical speed. <br className="hidden md:block" />
              <span className="text-indigo-400">Not just hospital accounting.</span>
            </h3>

            <div className="mt-4 flex items-center gap-6">
              <div className="trust-chip">
                <span className="trust-chip-dot" />
                <span className="trust-chip-text">Clinical Excellence</span>
              </div>
              <div className="w-px h-3 bg-slate-700" />
              <div className="trust-chip">
                <span className="trust-chip-dot" />
                <span className="trust-chip-text">Modern Architecture</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};