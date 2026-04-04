"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  PackageCheck,
  Truck,
  Zap
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

export const ClinicInsightShift = () => {
  return (
    <section className="section-py bg-section-surface relative overflow-hidden">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 fill-indigo-500/20" />
            The Insight Shift
          </motion.div>

          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
          >
            What If Every Prescription You Write… <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Was Automatically Fulfilled?
            </span>
          </motion.h2>

          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {[
              "No extra effort from you",
              "No operational setup"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="font-bold text-slate-800">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Simple Process Flow */}
          <motion.div variants={fadeInUp} className="pt-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 hidden md:block -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { label: "Prescription Created", icon: Zap },
                { label: "Medicines Prepared Instantly", icon: PackageCheck },
                { label: "Delivered Right There or at Home", icon: Truck }
              ].map((step, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center transition-all group-hover:border-indigo-500 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm max-w-[140px] mx-auto px-2">
                    {step.label}
                  </p>
                  {idx < 2 && (
                    <div className="md:hidden w-[1px] h-8 bg-slate-200 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-lg md:text-xl font-medium text-slate-600">
              Your clinic becomes the <span className="text-indigo-600 font-bold">default fulfillment point</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
