"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Clock,
  Sparkles
} from 'lucide-react';

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

export const HospitalPharmacyHero = ({ onBookDemo, onViewDemo }: { onBookDemo?: () => void, onViewDemo?: () => void }) => {
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
          variants={staggerContainerLocal}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">For multi-specialty hospitals</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1 
              variants={fadeInUp} 
              className="text-display-xl font-black leading-[1.1] tracking-tighter max-w-5xl mx-auto"
            >
              <span style={{ color: '#0F172A' }} className="inline-block">Your hospital already has a pharmacy.</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block overflow-visible" style={{ color: '#1D4ED8' }}>
                But is it actually working for you?
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-body-lg text-slate-600 leading-relaxed font-medium">
              Every day, your doctors create value — diagnosing patients, writing prescriptions, building trust. And then… that value leaks through your own pharmacy.
            </motion.p>
          </div>

          {/* Value Leakage Grid */}
          <motion.div variants={staggerContainerLocal} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto pt-4">
            {[
              { icon: Zap, text: "Medicines go unbilled" },
              { icon: MapPin, text: "Patients walk out to retail stores" },
              { icon: Clock, text: "Chronic patients never return" },
              { icon: ShieldCheck, text: "Staff errors eat into margins" },
              { icon: TrendingDown, text: "Hours lost in manual management" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="card p-5 border-slate-200/60 hover:border-indigo-200 group hover:shadow-card-lg transition-all duration-500 bg-white/70 backdrop-blur-md flex flex-col items-start text-left min-h-[140px]"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-indigo-600 flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-[13px] font-bold text-slate-900 leading-snug">{item.text}</p>
                <div className="mt-auto pt-3">
                  <div className="h-1 w-8 rounded-full bg-slate-100 group-hover:bg-indigo-500 group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Positioning Box */}
          <motion.div variants={fadeInUp} className="pt-8 px-4 sm:px-0">
            <div className="card-glass p-8 md:p-12 text-left max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center border border-indigo-100/50">
              <div className="flex-1 space-y-5">
                <h3 className="text-h2 font-bold text-slate-900 tracking-tight">
                  The pharmacy exists. The system doesn't.
                </h3>
                <p className="text-slate-600 text-body-lg leading-relaxed font-medium">
                  MediKloud turns your existing pharmacy into a revenue engine without adding more work. <span className="text-indigo-600 font-bold">We handle the complexity completely.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="badge badge-brand shadow-sm">Revenue recovery</span>
                  <span className="badge badge-indigo shadow-sm">Zero leakage</span>
                  <span className="badge badge-slate shadow-sm">Automated operations</span>
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <button onClick={onBookDemo} className="btn-primary w-full md:w-auto group shadow-btn">
                  See how it works
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

