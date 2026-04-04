"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Heart, 
  Zap, 
  UserPlus
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

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-section-surface overflow-hidden">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Comparison Header */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center md:text-right flex-1 px-8 py-6 rounded-2xl bg-rose-50 border border-rose-100 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1 block">The Old Way</span>
                <h3 className="text-2xl md:text-3xl font-black text-rose-600">Prescription Leakage</h3>
              </div>
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shadow-lg transform rotate-90 md:rotate-0"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>

            <div className="text-center md:text-left flex-1 px-8 py-6 rounded-2xl bg-teal-50 border border-teal-100 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1 block">The MediKloud Way</span>
                <h3 className="text-2xl md:text-3xl font-black text-teal-600">Prescription Capture</h3>
              </div>
            </div>
          </div>

          {/* Gains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {[
              {
                title: "New Revenue Stream",
                desc: "Every prescription becomes monetizable from Day 1.",
                icon: TrendingUp,
                accent: "blue"
              },
              {
                title: "Zero Setup Cost",
                desc: "No pharmacy infrastructure or capital investment required.",
                icon: Zap,
                accent: "indigo"
              },
              {
                title: "Better Patient Experience",
                desc: "Faster, easier access to medicines without leaving your clinic.",
                icon: Heart,
                accent: "rose"
              },
              {
                title: "Higher Treatment Compliance",
                desc: "Patients actually take what you prescribe promptly.",
                icon: ShieldCheck,
                accent: "teal"
              },
              {
                title: "Long-Term Patient Retention",
                desc: "Refill tracking and reminders maintain lifelong patient care cycles.",
                icon: UserPlus,
                accent: "violet"
              }
            ].map((gain, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="card-tinted group hover:shadow-card-md transition-all duration-300 border-indigo-100"
              >
                <div className="flex gap-1.5 mb-6">
                  <div className={`h-1.5 w-8 rounded-full bg-indigo-500`} />
                  <div className={`h-1.5 w-1.5 rounded-full bg-indigo-200`} />
                </div>
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-indigo-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <gain.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{gain.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{gain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
