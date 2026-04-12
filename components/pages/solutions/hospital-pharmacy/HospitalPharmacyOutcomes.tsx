"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Ban, TrendingUp } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainerLocal: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const HospitalPharmacyOutcomes = () => {
  return (
    <section id="business-case" className="section-py relative overflow-hidden">
      <DarkAtmosphere />

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[850px] mb-12 lg:mb-20 space-y-4 mx-auto text-center">
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-indigo-400">What You Gain</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.3]">
            Better care for your patients. <br className="hidden md:block" />
            <span className="text-indigo-400">Zero headaches for you.</span>
          </h2>
          <p className="text-body-lg text-slate-400 font-medium max-w-[850px] mx-auto leading-relaxed">
            When patients buy medicines elsewhere, your care stops at the hospital door. We bring the pharmacy inside so you can ensure every patient gets exactly what you prescribed.
          </p>
        </motion.div>
 
        {/* Balanced 2x2 Bento Box Layout */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainerLocal} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Item 1: Ops Stress (Halo Top-Left) */}
          <motion.div variants={fadeInUp} className="bg-blue-500/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Vivid Background Halo */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600/15 rounded-full blur-[60px] opacity-80"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 relative z-10 shadow-lg shadow-blue-500/10">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 relative z-10">Zero Operational Stress</h3>
            <p className="text-slate-100/90 text-base leading-relaxed relative z-10 font-medium">
              Pharmacist hiring, shift scheduling, and daily management? Completely handled by our expert team. You are free to just practice medicine.
            </p>
          </motion.div>
 
          {/* Item 2: Medication Gap (Halo Top-Right) */}
          <motion.div variants={fadeInUp} className="bg-indigo-600/10 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden flex flex-col shadow-2xl shadow-indigo-900/20">
            {/* Vivid Background Halo */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-[60px] opacity-80"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-6 relative z-10 shadow-lg shadow-indigo-500/10">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 relative z-10">Ending the Medication Gap</h3>
            <p className="text-indigo-50/90 text-base leading-relaxed relative z-10 font-medium">
              From guaranteed stock availability to automated WhatsApp home delivery for chronic patients. Your patients get exactly what you prescribed.
            </p>
          </motion.div>
 
          {/* Item 3: Inventory Risk (Halo Bottom-Left) */}
          <motion.div variants={fadeInUp} className="bg-rose-500/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Vivid Background Halo */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose-600/15 rounded-full blur-[60px] opacity-80"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 relative z-10 shadow-lg shadow-rose-500/10">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 relative z-10">Eliminated Inventory Risk</h3>
            <p className="text-slate-100/90 text-base leading-relaxed relative z-10 font-medium">
              You will never pay for expired medicines again. We buy your current stock, fund all ongoing inventory, and take 100% responsibility for losses.
            </p>
          </motion.div>
 
          {/* Item 4: Margins (Halo Bottom-Right) */}
          <motion.div variants={fadeInUp} className="bg-emerald-500/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden flex flex-col shadow-2xl">
            {/* Vivid Background Halo */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-600/15 rounded-full blur-[60px] opacity-80"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 relative z-10 shadow-lg shadow-emerald-500/10">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 relative z-10">Higher Profits, Lower Costs</h3>
            <p className="text-slate-100/90 text-base leading-relaxed relative z-10 font-medium">
              Unlock corporate-level medicine rates by joining our hospital network. Your pharmacy's profitability increases naturally with full transparency.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
