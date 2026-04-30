"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, HeartPulse, Sparkles } from 'lucide-react';

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

export const ClinicWithPharmacyBenefits = () => {
  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-3xl mb-20 space-y-6"
        >
          <div className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The clinic benefits</span>
          </div>
          <h2 className="premium-h2">
            Impact that goes <br/>
            <span className="text-indigo-600">
              beyond the consultation.
            </span>
          </h2>
          <p className="text-body-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
            We ensure every prescription translates into long-term patient loyalty and sustainable revenue growth for your clinic.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainerLocal} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              index: "01",
              icon: TrendingUp,
              title: "Instant revenue lift",
              desc: "Stop prescription leakage immediately and capture 100% of the value you generate."
            },
            {
              index: "02",
              icon: ShieldCheck,
              title: "Zero management load",
              desc: "License management, drug storage, and staffing are entirely our responsibility."
            },
            {
              index: "03",
              icon: Zap,
              title: "Operational speed",
              desc: "Go live in 48 hours. No complex construction, hiring, or staff training cycles required."
            },
            {
              index: "04",
              icon: HeartPulse,
              title: "Better patient outcomes",
              desc: "Improve medication adherence with automated refills and managed delivery."
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="card p-8 lg:p-10 border-slate-100/60 hover:border-indigo-200 hover:shadow-card-lg transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              {/* Glass Flare Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full" />

              {/* Background Decoration */}
              <div className="absolute top-6 right-8 text-[40px] font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none tracking-tighter">
                {item.index}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 text-indigo-600 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm border border-indigo-100/30 relative">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <item.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-12 flex-grow">{item.desc}</p>
              
              <div className="mt-auto pointer-events-none">
                <div className="flex items-center gap-2 text-xxs font-black uppercase tracking-widest text-slate-300 group-hover:text-indigo-600 transition-colors">
                  <Sparkles className="w-3 h-3" />
                  Standard Verified
                </div>
                <div className="h-0.5 w-12 bg-slate-100 group-hover:w-full group-hover:bg-indigo-600 transition-all duration-700 mt-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
