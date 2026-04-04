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
        <div className="blob-blue w-[500px] h-[500px] -top-24 -left-24 animate-float-slow" />
        <div className="blob-indigo w-[400px] h-[400px] top-1/4 -right-24 animate-float-medium" />
        <div className="blob-violet w-[300px] h-[300px] bottom-0 left-1/3 animate-float-slower" />
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
            <span className="eyebrow-text">For Independent Clinic Owners</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1 
              variants={fadeInUp} 
              className="display-headline text-5xl md:text-7xl max-w-4xl mx-auto"
              style={{ color: '#4F46E5' }} // Fallback
            >
              You Write the Prescription. <br className="hidden md:block" />
              Someone Else Makes the Money.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
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
                className="card border-rose-100 hover:border-rose-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="font-semibold text-slate-800 text-left leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Value Box */}
          <motion.div variants={fadeInUp} className="pt-8">
            <div className="inline-block p-[1px] rounded-[24px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-xl shadow-indigo-500/10">
              <div className="bg-white rounded-[23px] p-8 md:p-10 text-left max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    MediKloud changes that.
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We turn your clinic into a pharmacy — <span className="font-bold text-indigo-600">without setting one up.</span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["No Inventory", "No Pharmacist", "No License", "No Headaches"].map((badge, idx) => (
                      <span key={idx} className="badge badge-brand">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-auto flex-shrink-0">
                  <button className="btn-primary w-full md:w-auto group">
                    Start Earning from Day 1
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
