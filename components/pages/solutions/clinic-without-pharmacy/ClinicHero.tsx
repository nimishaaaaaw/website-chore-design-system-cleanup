"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  MapPin, 
  Smartphone, 
  Clock,
  ShieldCheck,
  ChevronRight
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

export const ClinicHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-section-hero">
      {/* Abstract Background Blobs */}
      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] -top-24 -left-24 animate-float-slow" />
        <div className="blob-indigo w-[32rem] h-[32rem] top-1/4 -right-24 animate-float-medium" />
        <div className="blob-violet w-[30rem] h-[30rem] bottom-0 left-1/3 animate-float-slower" />
      </div>

      <div className="relative container-page text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">For independent clinic owners</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1 
              variants={fadeInUp} 
              className="text-display-xl font-black leading-[1.1] tracking-tighter max-w-4xl mx-auto"
            >
              <span style={{ color: '#0F172A' }} className="inline-block">You write the prescription.</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block overflow-visible" style={{ color: '#1D4ED8' }}>
                Someone else makes the money.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-body-lg text-slate-600 leading-relaxed font-medium">
              Every patient you treat walks out with a prescription — and walks straight into a pharmacy you don’t control.
            </motion.p>
          </div>

          {/* Loss Cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
            {[
              { 
                icon: MapPin, 
                text: "Nearby retail stores capture the sale", 
                color: "rose" 
              },
              { 
                icon: Smartphone, 
                text: "Online apps deliver it faster than you can offer", 
                color: "rose" 
              },
              { 
                icon: Clock, 
                text: "Patients forget, delay, or skip medicines entirely", 
                color: "rose" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="card border-slate-200 hover:border-indigo-100 group hover:shadow-card-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-indigo-600 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-sm border border-slate-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="font-semibold text-slate-800 text-left leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Value Box */}
          <motion.div variants={fadeInUp} className="pt-8 px-4 sm:px-0">
            <div className="card-glass p-8 md:p-12 text-left max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center border border-indigo-100/50">
              <div className="flex-1 space-y-5">
                <h3 className="text-h2 font-bold text-slate-900 tracking-tight">
                  MediKloud changes that.
                </h3>
                <p className="text-slate-600 text-body-lg leading-relaxed font-medium">
                  We turn your clinic into a pharmacy — <span className="text-indigo-600 font-bold">without setting one up.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "No inventory", icon: AlertCircle },
                    { label: "No pharmacist", icon: AlertCircle },
                    { label: "No license", icon: AlertCircle },
                    { label: "No headaches", icon: AlertCircle }
                  ].map((badge, idx) => (
                    <span key={idx} className="badge badge-brand shadow-sm">
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <button className="btn-primary w-full md:w-auto group shadow-btn">
                  Start earning from day 1
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

