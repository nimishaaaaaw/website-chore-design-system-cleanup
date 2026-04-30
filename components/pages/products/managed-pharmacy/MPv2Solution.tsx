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
import { premiumEase } from '@/lib/animation';


export function MPv2Solution() {
  const { openModal } = useContactModal();
  
  return (
    <section className="relative bg-slate-50 section-py border-t border-slate-100">
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* LEFT COLUMN: Sticky Header (Synchronized) */}
          <div className="lg:w-5/12 lg:sticky lg:top-[max(25vh,160px)] z-10">
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
                   <Zap size={14} className="text-indigo-600" /> Zero Ops Deployment
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
                Your entire pharmacy, <br />
                <span className="text-indigo-600">running on autopilot.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
                className="premium-p intro-lock"
              >
                We deploy the hardware, technology, and clinical staff directly into your facility. You retain full ownership of the revenue flow. <strong className="text-slate-900 font-bold italic">We handle the rest.</strong>
              </motion.p>
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
                    "Licensed pharmacists deployed to your facility",
                    "Complete inventory funding (₹2L–10L+)",
                    "Zero Inventory Loss guaranteed",
                    "Bulk procurement price protection"
                  ],
                  theme: {
                    base: "text-blue-600",
                    bg: "bg-blue-50",
                    border: "border-blue-100",
                    borderA: "border-blue-100/50",
                    hoverBorder: "hover:border-blue-200",
                    hoverText: "group-hover:text-blue-100/50"
                  }
                },
                {
                  id: "02",
                  icon: Cpu,
                  title: "Anti-Leakage Tech",
                  desc: "Deploying advanced HMS, AI demand forecasting, and strict inventory controls natively inside your clinic.",
                  tags: "Shrinkage: Eliminated",
                  points: [
                    "AI forecasting prevents dead stock expiry",
                    "Full barcode billing integration",
                    "Automated 60-day vendor returns",
                    "Daily discrepancy loss reporting"
                  ],
                  theme: {
                    base: "text-emerald-600",
                    bg: "bg-emerald-50",
                    border: "border-emerald-100",
                    borderA: "border-emerald-100/50",
                    hoverBorder: "hover:border-emerald-200",
                    hoverText: "group-hover:text-emerald-100/50"
                  }
                },
                {
                  id: "03",
                  icon: Smartphone,
                  title: "Direct Home Deliveries",
                  desc: "Stop losing patients to e-pharmacy apps. We operate branded home delivery directly from your clinic hub.",
                  tags: "Patient: Retained",
                  points: [
                    "Same-day home delivery infrastructure",
                    "WhatsApp adherence & refill triggers",
                    "Clinical-grade packaging",
                    "Refill revenue remains in your clinic"
                  ],
                  theme: {
                    base: "text-purple-600",
                    bg: "bg-purple-50",
                    border: "border-purple-100",
                    borderA: "border-purple-100/50",
                    hoverBorder: "hover:border-purple-200",
                    hoverText: "group-hover:text-purple-100/50"
                  }
                },
                {
                  id: "04",
                  icon: HeartHandshake,
                  title: "Automated Revenue",
                  desc: "Convert your operational leaks into a highly profitable, self-sustaining pharmacy engine with zero upfront capital.",
                  tags: "Revenue: Captured",
                  points: [
                    "100% transparent billing",
                    "Zero operational load for doctors",
                    "Central Ops monitoring 24/7",
                    "Scalable across multiple facilities"
                  ],
                  theme: {
                    base: "text-amber-600",
                    bg: "bg-amber-50",
                    border: "border-amber-100",
                    borderA: "border-amber-100/50",
                    hoverBorder: "hover:border-amber-200",
                    hoverText: "group-hover:text-amber-100/50"
                  }
                }
              ].map((module, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                  className={`bg-white border ${module.theme.border} rounded-[2.5rem] p-8 md:p-12 shadow-card-sm hover:shadow-card-md ${module.theme.hoverBorder} transition-colors duration-500 group group-hover:z-20`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-5">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${module.theme.bg} ${module.theme.borderA} ${module.theme.base}`}>
                        <module.icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className={`text-4xl font-bold text-slate-100 transition-colors duration-500 ${module.theme.hoverText}`}>{module.id}</span>
                    </div>
                    <div className={`px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-xl border ${module.theme.bg} ${module.theme.base} border-opacity-30 border-current`}>
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
                        <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${module.theme.base}`} strokeWidth={1.5} />
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
