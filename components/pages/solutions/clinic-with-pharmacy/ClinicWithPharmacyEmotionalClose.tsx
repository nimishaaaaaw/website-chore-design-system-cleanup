"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicWithPharmacyEmotionalClose = () => {
  return (
    <section className="section-py bg-section-alt relative overflow-hidden">
      {/* Atmosphere blobs - Multi-layer Parallax Vision */}
      <div className="blob-layer pointer-events-none">
        <motion.div 
          animate={{ 
            x: [-20, 20, -20],
            y: [-30, 30, -30],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-indigo-100/40 rounded-full blur-[140px] opacity-60" 
        />
        <motion.div 
          animate={{ 
            x: [30, -30, 30],
            y: [50, -50, 50],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-blue-100/30 rounded-full blur-[120px] opacity-40" 
        />
      </div>

      <div className="container-page relative z-10 text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-indigo-600 border border-indigo-50">
              <Quote className="w-8 h-8 fill-indigo-600/10" />
            </div>
          </div>

          <h2 className="premium-h2 lg:text-display-lg">
            Stop letting your clinical value <br className="hidden md:block" />
            <span className="text-indigo-600">
              walk out the front door.
            </span>
          </h2>
          
          <p className="text-body-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            MediKloud isn't just software. It's an operational layer that ensures your patients get the care you prescribed, while your clinic captures the revenue it deserves.
          </p>

          <div className="flex items-center justify-center gap-4 text-indigo-600/40">
            <div className="h-px w-12 bg-indigo-100" />
            <Sparkles className="w-5 h-5 animate-pulse" />
            <div className="h-px w-12 bg-indigo-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
