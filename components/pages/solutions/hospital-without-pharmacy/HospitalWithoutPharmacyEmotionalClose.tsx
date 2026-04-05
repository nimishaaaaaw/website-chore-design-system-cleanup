"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const HospitalWithoutPharmacyEmotionalClose = () => {
  return (
    <section className="section-py bg-slate-50 border-t border-slate-100">
      <div className="container-page">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-slate-900 overflow-hidden group shadow-2xl">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -ml-24 -mb-24" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-white/20" />
                <span className="text-indigo-400 font-semibold tracking-widest uppercase text-xs">The vision</span>
                <span className="h-px w-12 bg-white/20" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight px-4">
                Your hospital is a hub of healing.<br/>
                <span className="text-slate-400">Our job is to make the fulfillment silent.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                MediKloud removes the friction of "where do I buy this?" so your team can focus exclusively on "how do I treat this?".
              </p>
              
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/90 text-sm font-bold backdrop-blur-md shadow-2xl tracking-wide group-hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Building the integrated future of hospital operations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
