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

const premiumEase = [0.16, 1, 0.3, 1] as any;

export function MPv2Solution() {
  const { openModal } = useContactModal();
  
  return (
    <section className="relative bg-slate-50 section-py border-t border-slate-100">
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* LEFT COLUMN: Sticky Header (Synchronized) */}
          <div className="lg:w-5/12 lg:sticky lg:top-[120px] z-10">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: premiumEase }}
                className="eyebrow-wrap !justify-start"
              >
                <span className="eyebrow-line-l"></span>
                <span className="eyebrow-text flex items-center gap-2">
                   <Zap size={14} className="text-indigo-600" /> Managed Operations
                </span>
                <span className="eyebrow-line-r"></span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="premium-h2"
              >
                Enterprise infrastructure <br />
                <span className="text-indigo-600">deployed in weeks.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
                className="premium-p intro-lock"
              >
                We install the hardware, software, and professional staff. You reclaim your margins. <strong className="text-slate-900 font-bold italic">We handle the rest.</strong>
              </motion.p>

              {/* Desktop CTA */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-8 hidden lg:block"
              >
                <button 
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  START MANAGED TRANSITION <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest italic">
                  * Guaranteed 30-Day Operational Handover
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Cards */}
          <div className="lg:w-7/12 relative">
            <div className="space-y-12 md:space-y-20">
              {[
                {
                  id: "01",
                  icon: Box,
                  title: "Operations Takeover",
                  desc: "We bring the entire retail chain backend into your four walls. Eliminate hiring stress and procurement overhead.",
                  tags: "Ownership: MediKloud",
                  points: [
                    "Licensed pharmacists on our payroll",
                    "Complete inventory funding (₹2L–10L+)",
                    "Modular medical-grade shelving",
                    "Bulk procurement price protection"
                  ]
                },
                {
                  id: "02",
                  icon: Cpu,
                  title: "Anti-Leakage Tech",
                  desc: "Deploying the same HMS, AI demand forecasting, and inventory controls that power India's largest chains.",
                  tags: "Shrinkage: Eliminated",
                  points: [
                    "AI forecasting prevents dead stock expiry",
                    "Full barcode billing integration",
                    "Automated 60-day vendor returns",
                    "Daily discrepancy loss reporting"
                  ]
                },
                {
                  id: "03",
                  icon: Smartphone,
                  title: "The Retention Engine",
                  desc: "Stop losing patients to e-pharmacy apps. We operate branded home delivery directly from your clinic hub.",
                  tags: "Patient LTV: Locked",
                  points: [
                    "Same-day home delivery infrastructure",
                    "WhatsApp adherence & refill triggers",
                    "Clinical-grade packaging",
                    "Refill revenue remains in your clinic"
                  ]
                },
                {
                  id: "04",
                  icon: HeartHandshake,
                  title: "Pure Medical Revenue",
                  desc: "Simple, transparent, and doctor-first. A guaranteed revenue share on every single Net Rupee collected.",
                  tags: "Revenue: Automated",
                  points: [
                    "Transparent monthly revenue share",
                    "Zero operational load for doctors",
                    "Central Ops monitoring 24/7",
                    "Scalable across multiple facilities"
                  ]
                }
              ].map((module, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                  className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-card-sm hover:shadow-card-md hover:border-indigo-100 transition-shadow transition-colors duration-500 group group-hover:z-20"
                >
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100/50 text-indigo-600 flex items-center justify-center">
                        <module.icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className="text-4xl font-bold text-slate-100 group-hover:text-indigo-100/50 transition-colors duration-500">{module.id}</span>
                    </div>
                    <div className="px-5 py-2 bg-indigo-50 text-indigo-600 text-[11px] font-bold tracking-widest uppercase rounded-xl border border-indigo-100/30">
                      {module.tags}
                    </div>
                  </div>
                  
                  <h3 className="premium-h3 mb-4">{module.title}</h3>
                  <p className="premium-p mb-8 text-slate-500">
                    {module.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {module.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                        <CheckCircle2 size={18} className="text-indigo-600 mt-0.5 shrink-0" strokeWidth={1.5} />
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-8 lg:hidden flex flex-col items-center text-center">
                <button 
                  onClick={openModal}
                  className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg"
                >
                  START UPGRADE <ArrowRight size={18} className="inline ml-2" strokeWidth={1.5} />
                </button>
                <p className="mt-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest italic">
                  * 30-Day Managed Transition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
