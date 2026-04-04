"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  UserMinus, 
  EyeOff, 
  AlertTriangle, 
  Activity,
  ArrowRight,
  Clock3,
  Users,
  Trash2,
  PackageX,
  CreditCard
} from 'lucide-react';

export function MPProblemGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative py-10 lg:py-16 bg-slate-50/50 overflow-hidden border-t border-slate-100">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px]" />
      </div>

      <motion.main 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Simplified Header */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-[11px] font-bold tracking-widest uppercase mb-8 shadow-sm">
            <Activity size={15} className="text-rose-600 animate-pulse" />
            PHARMACY HEALTH CHECK: SYSTEM ERRORS FOUND
          </div>
          
          <h2 className="text-display-sm md:text-display-md font-bold tracking-tight md:tracking-[-0.02em] text-slate-900 mb-6 leading-[1.1] drop-shadow-sm">
            YOUR PHARMACY IS <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500 pb-1">
              LOSING CASH DAILY.
            </span>
          </h2>
          <p className="max-w-2xl text-slate-500 text-body-lg md:text-xl font-medium leading-relaxed">
            Running a standalone pharmacy without the scale and tech of a retail chain is bleeding your profits and losing your patients.
          </p>
        </motion.div>

        {/* The Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1: Wasted Money */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 p-6 md:p-8 ring-1 ring-slate-200/50 transition-shadow hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 blur-3xl opacity-50 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start h-full relative">
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 flex items-center justify-center bg-rose-100 rounded-[16px] border border-rose-200 shadow-sm text-rose-600 shrink-0">
                    <Trash2 size={28} strokeWidth={2.5} />
                   </div>
                   <h3 className="text-h2 md:text-h1 font-bold text-slate-900 tracking-tight leading-tight">Wasted Money</h3>
                </div>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  Your cash is stuck in <span className="text-slate-800 font-bold underline decoration-rose-300 underline-offset-4">unsold medicine</span> that sits on shelves until it expires and gets thrown away.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    "Buying at high retail prices",
                    "Medicine theft in messy billing",
                    "Expired stock you can't return"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-56 bg-slate-50 rounded-[2rem] p-6 border border-slate-100 flex flex-col justify-center items-center text-center shadow-inner ring-1 ring-slate-900/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Profit Loss</span>
                <div className="text-display-sm font-bold text-rose-600 mb-1 leading-none tracking-tight">HIGH</div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full mt-4 overflow-hidden shadow-inner">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Staff Stress */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 p-6 md:p-8 flex flex-col justify-between ring-1 ring-slate-200/50 transition-shadow hover:shadow-2xl"
          >
            <div>
              <div className="w-14 h-14 flex items-center justify-center bg-amber-100 rounded-[16px] border border-amber-200 text-amber-600 mb-6 shadow-sm">
                <Clock3 size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-h2 md:text-h1 font-bold text-slate-900 tracking-tight leading-tight mb-4">Staff & Stress</h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">
                Tired pharmacists are <span className="text-amber-600 font-bold">quitting</span> because they spend all day doing paperwork instead of helping patients.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 font-mono text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-wider shadow-inner ring-1 ring-slate-900/5">
               <div className="flex justify-between items-center mb-2">
                 <span>Inventory Tracking</span>
                 <span className="text-amber-600 bg-amber-100/50 px-2 py-0.5 rounded-md text-[9px] md:text-[10px]">Too Slow</span>
               </div>
               <div className="flex justify-between items-center">
                 <span>Staff Attrition Risk</span>
                 <span className="text-rose-600 bg-rose-100/50 px-2 py-0.5 rounded-md text-[9px] md:text-[10px]">SEVERE</span>
               </div>
            </div>
          </motion.div>

          {/* Card 3: Lost Customers */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/40 p-6 md:p-8 flex flex-col md:flex-row lg:flex-col gap-6 lg:col-span-1 md:col-span-2 ring-1 ring-slate-200/50 transition-shadow hover:shadow-2xl"
          >
            <div className="flex-1">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-[16px] border border-blue-200 text-blue-600 mb-6 shadow-sm">
                <UserMinus size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-h2 md:text-h1 font-bold text-slate-900 tracking-tight leading-tight mb-4">Lost Customers</h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Patients buy the first dose from you, then switch to <span className="text-blue-600 font-bold">online apps</span> like 1mg or branded retail chains like Apollo for the rest. You lose them forever.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 shadow-sm">
               <div className="p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                 <PackageX size={18} strokeWidth={2.5} />
               </div>
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                  No home delivery = Patients leave
               </p>
            </div>
          </motion.div>

          {/* Card 4: Operating in the Dark */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-indigo-50/50 border border-indigo-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-xl shadow-indigo-100/40 ring-1 ring-indigo-200/50 transition-shadow hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-indigo-400/5 blur-3xl -z-10" />
            
            <div className="flex-1">
              <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 rounded-[16px] border border-indigo-200 text-indigo-600 mb-6 shadow-sm">
                <EyeOff size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-h2 md:text-h1 font-bold text-slate-900 tracking-tight leading-tight mb-4">Operating in the Dark</h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">
                You're buying medicine based on <span className="text-indigo-600 font-bold">pure guesses.</span> You only find out you lost money 30 days later.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['No real-time data', 'Old software', 'Late reports'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col justify-center lg:justify-end gap-3 relative">
               <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-gradient-action text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-btn hover:shadow-lg transition-all text-[15px]"
               >
                FIX THIS NOW <ArrowRight size={16} strokeWidth={2.5} />
               </motion.button>
               <p className="text-[10px] text-center font-bold text-slate-500 uppercase tracking-widest">
                Stop the leaks today
               </p>
            </div>
          </motion.div>

        </div>

        {/* Simplified Footer Stats */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 md:mt-10 pt-6 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
            <div>
              <p className="text-h1 font-bold text-rose-600 leading-none tracking-tight">₹1 Lakh+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Profit Lost<br/>Every Month</p>
            </div>
            <div>
              <p className="text-h1 font-bold text-amber-500 leading-none tracking-tight">2 Hours</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Wasted Doctors<br/>Time</p>
            </div>
            <div>
              <p className="text-h1 font-bold text-indigo-600 leading-none tracking-tight">₹5 Lakh+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Trapped in<br/>Dead Inventory</p>
            </div>
            <div>
              <p className="text-h1 font-bold text-blue-600 leading-none tracking-tight">60%+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Chronic Patients<br/>Lost to Retail Chains</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
