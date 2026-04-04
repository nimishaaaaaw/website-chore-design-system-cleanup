"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, Check } from 'lucide-react';

const comparisonData = [
  { feature: "Setup & Deployment", legacy: "15–30 Days (On-Premise)", modern: "< 24 Hours (Cloud Native)" },
  { feature: "Staff Training", legacy: "2–4 Weeks of Manuals", modern: "< 2 Hours (Smartphone-Simple)" },
  { feature: "Financial Investment", legacy: "Heavy Upfront Licensing", modern: "Low-Entry SaaS Subscription" },
  { feature: "Device Access", legacy: "Fixed Desktop Terminals", modern: "Any Device (Mobile, Tablet, web)" },
  { feature: "Laboratory Sync", legacy: "Manual Result Entry", modern: "Direct Machine Integration" },
  { feature: "Patient Alerts", legacy: "Manual Phone Calls", modern: "Automated WhatsApp Reminders" },
  { feature: "Multi-Doctor Support", legacy: "Single-License Silos", modern: "Real-Time Collaborative Flow" },
  { feature: "ABDM/ABHA Compliance", legacy: "Manual Configuration", modern: "Automated & Built-In" },
  { feature: "Operational Analytics", legacy: "Static Month-End Reports", modern: "Live Dashboard & Insights" },
  { feature: "System Maintenance", legacy: "Costly On-Site Support", modern: "Live Instant Updates" }
];

export const HMSComparison = () => {
  return (
    <section className="relative py-section-sm md:py-section bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h1 font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            The Modern <br />
            <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>Clinical Standard.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-slate-600 leading-relaxed"
          >
            Traditional Hospital Management Systems were built for the desktop era—slow, complex, and high-maintenance. MediKloud was built for the mobile era—fast, intuitive, and always connected.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-float bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-8 bg-slate-50 text-slate-400 font-black text-xs uppercase tracking-[0.2em] w-1/3 border-b border-slate-200">Feature</th>
                  <th className="p-8 bg-slate-50 text-slate-400 font-black text-xs uppercase tracking-[0.2em] w-1/3 border-b border-slate-200 text-center">Legacy HMS Systems</th>
                  <th className="p-8 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] w-1/3 border-b border-blue-700 text-center relative overflow-hidden">
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-300" />
                      MediKloud HMS
                    </div>
                    <div className="absolute inset-0 bg-gradient-action opacity-90 pointer-events-none"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6 font-bold text-slate-800 text-sm group-hover:pl-8 transition-all">{row.feature}</td>
                    <td className="p-6 text-slate-500 text-center transition-colors">
                      <div className="flex items-center justify-center gap-3">
                        <X className="w-4 h-4 text-rose-300 hidden sm:block" />
                        <span className="text-xs font-bold uppercase tracking-wider">{row.legacy}</span>
                      </div>
                    </td>
                    <td className="p-6 font-black text-blue-900 text-center bg-blue-50/30 border-x border-blue-100/50 transition-colors">
                      <div className="flex items-center justify-center gap-3">
                        <Check className="w-5 h-5 text-success hidden sm:block" />
                        <span className="text-xs uppercase tracking-[0.05em]">{row.modern}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Strategic Outcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-tinted rounded-[2rem] border border-blue-100/50 p-8 lg:p-12 text-center shadow-card group"
        >
          <h3 className="text-h2 font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Eliminate the overhead of legacy software.
          </h3>
          <p className="text-h1 font-black bg-gradient-display bg-clip-text text-transparent transform group-hover:scale-[1.02] transition-transform">
            Move to the modern clinical standard.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
