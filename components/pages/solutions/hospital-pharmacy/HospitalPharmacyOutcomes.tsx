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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-[825px] mb-12 lg:mb-20 space-y-4 mx-auto text-center">
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-indigo-400">The Comprehensive Impact</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.3]">
            Better care for your patients. <br className="hidden md:block" />
            <span className="text-indigo-400">Zero headaches for you.</span>
          </h2>
          <p className="text-body-lg text-slate-400 font-medium max-w-[800px] mx-auto leading-relaxed">
            When patients buy medicines from random external chemists, you can't guarantee the quality, and you don't know if they are actually taking what you prescribed. A MediKloud-managed pharmacy closes the loop on patient care.
          </p>
        </motion.div>

        {/* Balanced 2x2 Bento Box Layout */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainerLocal} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Item 1: Ops Stress */}
          <motion.div variants={fadeInUp} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:bg-white/[0.05] hover:border-slate-500/30 transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-6 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Zero Operational Stress</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              Pharmacist hiring, shift scheduling, absent staff, and daily counter management? Completely handled by our expert team. You are free to just practice medicine.
            </p>
          </motion.div>

          {/* Item 2: Patient Satisfaction */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/20 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-500 flex flex-col shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 relative z-10">Unbroken Patient Care</h3>
            <p className="text-indigo-100/70 text-base leading-relaxed relative z-10">
              From guaranteed stock availability to automated WhatsApp home delivery for chronic patients. Your patients get exactly what you prescribed, exactly when they need it.
            </p>
          </motion.div>

          {/* Item 3: Inventory Risk */}
          <motion.div variants={fadeInUp} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:bg-white/[0.05] hover:border-rose-500/30 transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Ban className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Eliminated Inventory Risk</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              You will never pay for expired medicines again. We buy out your current stock, fund 100% of the ongoing inventory, and take complete responsibility for expiry losses.
            </p>
          </motion.div>

          {/* Item 4: Margins */}
          <motion.div variants={fadeInUp} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-500 flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Upgraded Margins & Revenue</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              By joining our network of 50+ hospitals, you instantly unlock corporate-level procurement rates. Your pharmacy's profitability naturally increases, with full transparency on every rupee.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
