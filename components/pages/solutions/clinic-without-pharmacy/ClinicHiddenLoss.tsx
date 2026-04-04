"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  UserMinus, 
  Settings, 
  HeartPulse,
  TrendingDown,
  ArrowUpRight
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

export const ClinicHiddenLoss = () => {
  return (
    <section className="section-py bg-section-alt overflow-hidden">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Droplets className="w-3 h-3" />
              The Hidden Loss
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-display-md md:text-display-lg font-bold text-slate-900 leading-tight">
              A Clinic Without a Pharmacy <br />
              <span className="text-rose-500">Is a Leaking System.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Loss Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Acute Patients",
                  desc: "May never buy the medicines at all after leaving.",
                  icon: TrendingDown,
                  tag: "Immediate Leak"
                },
                {
                  title: "Chronic Patients",
                  desc: "They shift to external pharmacies forever.",
                  icon: UserMinus,
                  tag: "LTV Loss"
                },
                {
                  title: "Dispensing Control",
                  desc: "No control over what brand or substitute is actually given.",
                  icon: Settings,
                  tag: "Clinical Risk"
                },
                {
                  title: "Treatment Adherence",
                  desc: "No way to ensure patients actually follow the prescription.",
                  icon: HeartPulse,
                  tag: "Care Gap"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="card group hover:shadow-card-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 text-indigo-600 flex items-center justify-center border border-slate-100 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="badge badge-slate text-[10px]">{item.tag}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact Insight Card */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5 rounded-3xl -m-4 blur-2xl" />
              <div className="relative card-tinted p-10 md:p-12 border-rose-200">
                <blockquote className="space-y-6">
                  <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-[1.3] italic">
                    "It’s not just about missing one sale. It’s about losing the entire patient lifecycle."
                  </p>
                  <footer className="pt-6 border-t border-rose-100 flex items-center gap-4">
                    <div className="h-1 bg-rose-500 w-12 rounded-full" />
                    <p className="text-slate-500 font-medium">
                      Over time, this becomes <span className="text-rose-600 font-bold">invisible</span> — but it compounds into massive revenue and care loss.
                    </p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
