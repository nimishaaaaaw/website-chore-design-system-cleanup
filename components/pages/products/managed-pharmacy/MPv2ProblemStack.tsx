"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Activity,
  ArrowRight,
  Clock3,
  Users,
  Trash2,
  UserMinus,
  EyeOff
} from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export function MPv2ProblemStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative z-10 max-w-7xl mx-auto">
      {/* SECTION 1: MAIN WRAPPER FOR STICKY HEADER AND CARDS */}
      <div className="relative w-full">
        
        {/* STICKY HEADER */}
        <motion.div variants={itemVariants} className="sticky top-[8vh] z-0 flex flex-col items-center text-center pointer-events-none">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-[10px] font-mono tracking-[0.2em] mb-6 md:mb-8 pointer-events-auto">
            <Activity size={14} className="text-rose-500 animate-pulse" />
            PHARMACY HEALTH CHECK: SYSTEM ERRORS FOUND
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-4 md:mb-6 leading-[1.1] pointer-events-auto">
            YOUR PHARMACY IS <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-400 to-rose-500">
              LOSING CASH DAILY.
            </span>
          </h1>
          <p className="max-w-xl text-slate-400 text-base md:text-xl font-light leading-relaxed px-4 pointer-events-auto">
            Running a hospital pharmacy by hand isn't just slow—it's expensive. 
            Here is exactly where your profit is disappearing.
          </p>
        </motion.div>

        {/* SECTION 1: THE PROBLEM STACK (Scroll-Based Stacking) */}
        <div className="relative max-w-5xl mx-auto mt-[8vh] z-10">
          
          {/* Card 1: Wasted Money */}
          <div className="sticky top-[32vh] mb-[20vh] z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                      <Trash2 className="text-rose-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight italic">Wasted Money</h3>
                </div>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                    Your cash is stuck in <span className="text-white font-medium underline decoration-rose-500/40">unsold medicine</span> that sits on shelves until it expires.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                    <span className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> High Retail Buying</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Messy Billing Theft</span>
                </div>
              </div>
              
              <div className="w-full md:w-64 bg-[#080a10] rounded-3xl p-8 border border-slate-800/50 flex flex-col justify-center items-center text-center shrink-0">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-2">Profit Loss Risk</span>
                <div className="text-4xl font-black text-rose-500 mb-1 leading-none animate-pulse">CRITICAL</div>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Staff Stress */}
          <div className="sticky top-[35vh] mb-[20vh] z-20">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                      <Clock3 className="text-orange-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight italic">Staff & Stress</h3>
                </div>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                    Tired pharmacists are <span className="text-white font-medium italic">quitting</span> because they spend all day doing paperwork instead of serving patients.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                    <span className="flex items-center gap-2 text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Manual Counting</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> High Churn Rate</span>
                </div>
              </div>

              <div className="w-full md:w-64 bg-[#080a10] rounded-3xl p-6 border border-slate-800/50 flex flex-col justify-center shrink-0 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">
                  <span>Admin Load</span>
                  <span className="text-orange-500">MAX</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">
                  <span>Morale</span>
                  <span className="text-orange-500">LOW</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Lost Customers */}
          <div className="sticky top-[38vh] mb-[20vh] z-30">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                      <UserMinus className="text-cyan-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight italic">Lost Customers</h3>
                </div>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                    Patients buy the first dose from you, then switch to <span className="text-cyan-400 font-medium">online apps</span> for refills. You lose them forever.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                    <span className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Zero Follow-ups</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> No Delivery Infra</span>
                </div>
              </div>

              <div className="w-full md:w-64 bg-[#080a10] rounded-3xl p-6 border border-slate-800/50 flex flex-col justify-center shrink-0">
                <div className="flex -space-x-3 justify-center mb-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                        <Users size={16} className="text-slate-500" />
                      </div>
                    ))}
                </div>
                <p className="text-[10px] text-center font-mono text-cyan-500 uppercase tracking-widest">
                    68% Chronic Patients Lost
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Operating in the Dark */}
          <div className="sticky top-[41vh] mb-[25vh] z-40">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-10 items-center justify-between"
            >
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                      <EyeOff className="text-indigo-400" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight italic">Operating in the Dark</h3>
                </div>
                <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg">
                    You're buying medicine based on pure guesses. You only find out you lost money <span className="text-indigo-300 font-medium italic">30 days later.</span>
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                    <span className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Disconnected Software</span>
                    <span className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Zero Analytics</span>
                </div>
              </div>

              <div className="w-full md:w-64 flex flex-col justify-center shrink-0 gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black font-black tracking-tighter rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-slate-100 transition-all"
                >
                  FIX THIS NOW <ArrowRight size={18} />
                </motion.button>
                <p className="text-[9px] text-center font-mono text-slate-400 uppercase tracking-widest">
                  Stop the leaks today
                </p>
              </div>
            </motion.div>
          </div>

        </div>
        {/* END SECTION 1 WRAPPER */}
      </div>

      {/* SECTION 1 RESTORED STATS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto my-16 py-10 border-y border-slate-900 flex flex-col md:flex-row items-center justify-between gap-10 opacity-70 hover:opacity-100 transition-opacity"
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-12">
          <div>
            <p className="text-3xl font-black text-white">₹1 Lakh+</p>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Lost Every Month</p>
          </div>
          <div className="w-px h-10 bg-slate-800 hidden md:block" />
          <div>
            <p className="text-3xl font-black text-white">2 Hours</p>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">Wasted Daily per Staff</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-rose-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
          <AlertTriangle size={16} />
          Immediate Action Required
        </div>
      </motion.div>
    </motion.div>
  );
}
