"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserMinus, 
  EyeOff, 
  ArrowRight,
  Clock3,
  Trash2,
  PackageX
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

const premiumEase = [0.16, 1, 0.3, 1] as any;

export function MPProblemGrid() {
  const { openModal } = useContactModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: premiumEase } 
    }
  };

  return (
    <section className="relative bg-white overflow-hidden border-t border-slate-100 section-py">
      {/* Forensic Background textures */}
      <div className="tech-grid-overlay opacity-[0.03]" />
      
      <motion.div 
        className="relative z-10 container-page"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Gold Standard Header Section */}
        <motion.div variants={itemVariants} className="header-lock text-center mb-12 lg:mb-20 space-y-4">
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">Operational Leakage</span>
            <span className="eyebrow-line-r"></span>
          </div>
          <h2 className="premium-h2">
            Your pharmacy is <span className="text-indigo-600">losing cash daily.</span>
          </h2>
          <p className="premium-p intro-lock">
            Running a standalone pharmacy without the scale and tech of a retail chain is bleeding your profits and losing your patients.
          </p>
        </motion.div>

        {/* The Problem Grid - Standardized Locks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Wasted Money (Double span) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group group-hover:z-20 relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 flex flex-col md:flex-row gap-8 hover:shadow-card-md transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/50 blur-3xl opacity-50 pointer-events-none" />
            
            <div className="space-y-6 flex-1 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 flex items-center justify-center bg-rose-50 rounded-2xl border border-rose-100/50 text-rose-600 shrink-0">
                  <Trash2 size={28} strokeWidth={1.5} />
                 </div>
                 <h3 className="premium-h3">Wasted Money</h3>
              </div>
              <p className="premium-p max-w-lg">
                Your cash is stuck in <span className="text-slate-900 font-bold underline decoration-rose-300 underline-offset-4">unsold medicine</span> that sits on shelves until it expires.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Buying at high retail prices",
                  "Inconsistent inventory tracking",
                  "Expired stock with zero return value"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    {text}
                  </li>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-56 bg-slate-50/50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center items-center text-center relative z-10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Profit Loss</span>
              <div className="text-4xl font-bold text-rose-600 mb-1 leading-none tracking-tight">HIGH</div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full mt-4 overflow-hidden shadow-inner">
                 <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: premiumEase }}
                  className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Staff Stress */}
          <motion.div 
            variants={itemVariants}
            className="group group-hover:z-20 relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 flex flex-col justify-between hover:shadow-card-md transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-amber-50 rounded-2xl border border-amber-100/50 text-amber-600">
                  <Clock3 size={28} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3">Staff Stress</h3>
              </div>
              <p className="premium-p mb-8">
                Skilled pharmacists are <span className="text-amber-600 font-bold">overwhelmed</span> by manual documentation and fragmented billing processes.
              </p>
            </div>
            <div className="bg-slate-50/80 flex flex-col gap-2.5 p-5 rounded-2xl border border-slate-100 font-bold text-[10px] text-slate-500 uppercase tracking-widest relative z-10">
               <div className="flex justify-between items-center">
                 <span>Operational Friction</span>
                 <span className="text-amber-600 font-black">Severe</span>
               </div>
               <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                 <div className="w-4/5 h-full bg-amber-500 rounded-full" />
               </div>
            </div>
          </motion.div>

          {/* Card 3: Lost Customers */}
          <motion.div 
            variants={itemVariants}
            className="group group-hover:z-20 relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 flex flex-col lg:col-span-1 md:col-span-2 hover:shadow-card-md transition-all duration-500"
          >
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-indigo-50 rounded-2xl border border-indigo-100/50 text-indigo-600">
                  <UserMinus size={28} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3">Churn Loop</h3>
              </div>
              <p className="premium-p mb-8">
                Patients visit your clinic, but they take their <span className="text-indigo-600 font-bold italic">lifelong medication business</span> to massive retail chains.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50 relative z-10">
               <div className="p-3 bg-white rounded-xl text-indigo-600 shrink-0 shadow-sm border border-indigo-100/50">
                 <PackageX size={20} strokeWidth={1.5} />
               </div>
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                  No Home Delivery = <br/><span className="text-indigo-600">Patients Leave Forever</span>
               </p>
            </div>
          </motion.div>

          {/* Card 4: Operating in the Dark (Double span) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group group-hover:z-20 relative overflow-hidden rounded-3xl bg-slate-900 p-8 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 shadow-sm hover:shadow-card-md transition-all duration-500"
          >
            <div className="tech-grid-overlay opacity-20" />
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 text-white shadow-inner">
                  <EyeOff size={28} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3 !text-white">Operating in the Dark</h3>
              </div>
              <p className="premium-p !text-slate-400 mb-8 max-w-lg">
                Standalone pharmacy owners usually manage by <span className="text-white font-bold italic">pure gut feeling.</span> You only find out you lost money at the end of the month.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {['Zero Real-time Data', 'Fragmented CRM', 'Delayed Reporting'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-64 flex flex-col justify-center items-center gap-4 relative z-10 bg-white shadow-2xl p-6 rounded-2xl border border-slate-100">
               <motion.button 
                onClick={openModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
               >
                SOLVE THIS <ArrowRight size={18} strokeWidth={1.5} />
               </motion.button>
               <p className="text-[10px] text-center font-bold text-slate-500 uppercase tracking-widest">
                Stop the revenue leaks
               </p>
            </div>
          </motion.div>

        </div>

        {/* Standardized Footer Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 lg:mt-20 pt-10 border-t border-slate-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "Lost Profits", value: "₹1 Lakh+", sub: "Per Month" },
              { label: "Wasted Clinical Time", value: "2 Hours", sub: "Daily Admin" },
              { label: "Dead Inventory", value: "₹5 Lakh+", sub: "Trapped Cash" },
              { label: "Chronic Churn", value: "60%+", sub: "Lost to Retail" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <p className="stat-number text-3xl md:text-4xl">{stat.value}</p>
                <p className="stat-label flex flex-col items-center font-bold uppercase tracking-widest leading-relaxed">
                  <span className="text-indigo-600 mb-0.5">{stat.label}</span>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
