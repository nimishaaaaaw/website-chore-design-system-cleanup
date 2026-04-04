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
import { useContactModal } from '@/hooks/use-contact-modal';

export function MPProblemGrid() {
  const { openModal } = useContactModal();
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
    <div className="relative bg-section-alt overflow-hidden border-t border-slate-100 section-py">
      {/* Subtle Background Elements */}
      <div className="blob-layer">
        <div className="blob-violet w-[32rem] h-[32rem] top-[10%] left-[20%]" />
        <div className="blob-indigo w-[32rem] h-[32rem] bottom-[10%] right-[20%]" />
      </div>

      <motion.main 
        className="relative z-10 container-page"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Simplified Header */}
        <motion.div variants={itemVariants} className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <h2 className="text-section md:text-5xl text-center mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
            Your pharmacy is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">
              losing cash daily.
            </span>
          </h2>
          <p className="max-w-2xl text-slate-500 text-body-lg font-medium leading-relaxed">
            Running a standalone pharmacy without the scale and tech of a retail chain is bleeding your profits and losing your patients.
          </p>
        </motion.div>

        {/* The Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Wasted Money */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-6 lg:p-7 flex flex-col md:flex-row gap-6 hover:shadow-md transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 blur-3xl opacity-50 pointer-events-none" />
            
            <div className="space-y-4 flex-1 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 flex items-center justify-center bg-rose-100 rounded-xl border border-rose-200 text-rose-600 shrink-0">
                  <Trash2 size={24} strokeWidth={2} />
                 </div>
                 <h3 className="text-h3 font-bold text-slate-900 tracking-tight leading-tight">Wasted Money</h3>
              </div>
              <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Your cash is stuck in <span className="text-slate-800 font-bold underline decoration-rose-300 underline-offset-4">unsold medicine</span> that sits on shelves until it expires.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                {[
                  "Buying at high retail prices",
                  "Medicine theft in messy billing",
                  "Expired stock you can't return"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[14px] font-semibold text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-52 bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col justify-center items-center text-center ring-1 ring-slate-900/5 relative z-10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Profit Loss</span>
              <div className="text-h2 font-bold text-rose-600 mb-1 leading-none tracking-tight">HIGH</div>
              <div className="h-2.5 w-full bg-slate-200 rounded-full mt-3 overflow-hidden">
                 <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Staff Stress */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-6 lg:p-7 flex flex-col justify-between hover:shadow-md transition-all md:col-span-1"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-xl border border-amber-200 text-amber-600">
                  <Clock3 size={24} strokeWidth={2} />
                </div>
                <h3 className="text-h3 font-bold text-slate-900 tracking-tight leading-tight">Staff & Stress</h3>
              </div>
              <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                Tired pharmacists are <span className="text-amber-600 font-bold">quitting</span> because they spend all day doing paperwork instead of helping patients.
              </p>
            </div>
            <div className="bg-slate-50 flex flex-col gap-2 p-4 rounded-xl border border-slate-100 font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider ring-1 ring-slate-900/5 relative z-10">
               <div className="flex justify-between items-center">
                 <span>Inventory Tracking</span>
                 <span className="text-amber-600 bg-amber-100/50 px-2 py-0.5 rounded-md">Too Slow</span>
               </div>
               <div className="flex justify-between items-center">
                 <span>Staff Attrition Risk</span>
                 <span className="text-rose-600 bg-rose-100/50 px-2 py-0.5 rounded-md">SEVERE</span>
               </div>
            </div>
          </motion.div>

          {/* Card 3: Lost Customers */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-6 lg:p-7 flex flex-col lg:col-span-1 md:col-span-2 hover:shadow-md transition-all"
          >
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl border border-blue-200 text-blue-600">
                  <UserMinus size={24} strokeWidth={2} />
                </div>
                <h3 className="text-h3 font-bold text-slate-900 tracking-tight leading-tight">Lost Customers</h3>
              </div>
              <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                Patients buy the first dose from you, then switch to <span className="text-blue-600 font-bold">online apps</span> like 1mg for the rest. You lose them forever.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-blue-50/80 p-4 rounded-xl border border-blue-100 relative z-10">
               <div className="p-2.5 bg-white rounded-lg text-blue-600 shrink-0 shadow-sm border border-blue-100">
                 <PackageX size={18} strokeWidth={2.5} />
               </div>
               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wide leading-tight">
                  No home delivery = <br/>Patients leave
               </p>
            </div>
          </motion.div>

          {/* Card 4: Operating in the Dark */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-indigo-50/50 border border-indigo-100 p-6 lg:p-7 flex flex-col md:flex-row gap-6 lg:gap-8 shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute inset-0 bg-indigo-400/5 blur-2xl -z-10" />
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl border border-indigo-200 text-indigo-600">
                  <EyeOff size={24} strokeWidth={2} />
                </div>
                <h3 className="text-h3 font-bold text-slate-900 tracking-tight leading-tight">Operating in the Dark</h3>
              </div>
              <p className="text-[15px] sm:text-base text-slate-600 font-medium leading-relaxed mb-6 max-w-lg">
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

            <div className="md:w-56 flex flex-col justify-center items-center gap-3 relative z-10 bg-white/60 p-5 rounded-2xl border border-indigo-100/60 shadow-sm">
               <motion.button 
                onClick={openModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-2.5 text-sm"
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
              <p className="text-h2 font-bold text-slate-900 leading-none tracking-tight">₹1 Lakh+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Profit Lost<br/>Every Month</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-slate-900 leading-none tracking-tight">2 Hours</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Wasted Doctors<br/>Time</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-slate-900 leading-none tracking-tight">₹5 Lakh+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Trapped in<br/>Dead Inventory</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-slate-900 leading-none tracking-tight">60%+</p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-2 leading-snug">Chronic Patients<br/>Lost to Retail Chains</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
