"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Zap, HeartPulse } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const HospitalWithoutPharmacyBenefits = () => {
  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mb-20 space-y-5"
        >
          <div className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The healthcare benefits</span>
          </div>
          <h2 className="text-h2 font-bold tracking-tight leading-[1.1] md:text-5xl">
            Impact that goes <br />
            <span className="display-headline">
              beyond the first sale.
            </span>
          </h2>
          <p className="text-body-lg font-medium leading-relaxed max-w-2xl" style={{ color: 'var(--text-body)' }}>
            We ensure clinical value translates into long-term patient compliance and sustainable hospital revenue.
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
              title: "Instant revenue recovery",
              desc: "Start earning from day one without the capital expenditure of a legacy physical store."
            },
            {
              index: "02",
              icon: ShieldCheck,
              title: "Zero compliance load",
              desc: "License management, drug storage norms, and regulatory compliance are entirely our responsibility."
            },
            {
              index: "03",
              icon: Zap,
              title: "Operational speed",
              desc: "Go live in 48 hours. No complex construction, staffing, or hiring cycles required."
            },
            {
              index: "04",
              icon: HeartPulse,
              title: "Better patient outcomes",
              desc: "Ensure medication adherence with automated refills and managed home delivery."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card p-8 border-slate-100/60 hover:border-brand-indigo-100 hover:shadow-card-lg transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-6 right-8 text-[40px] font-bold text-slate-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity select-none tracking-tighter">
                {item.index}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-brand-indigo-50 text-brand-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-indigo-100 transition-all duration-500 shadow-sm border border-brand-indigo-100/30">
                <item.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-h3 font-bold mb-4 tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="premium-p--sm font-medium leading-relaxed">{item.desc}</p>
              <div className="mt-8 overflow-hidden pointer-events-none">
                <div className="h-0.5 w-12 bg-slate-100 group-hover:w-full group-hover:bg-brand-indigo-600 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};