"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Activity, 
  AlertOctagon, 
  ArrowRight, 
  FileText, 
  CheckCircle 
} from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="relative w-full h-[calc(100dvh-64px)] lg:h-[calc(100dvh-64px)] bg-[#1A1E26] text-slate-50 overflow-hidden flex flex-col lg:flex-row items-center font-sans selection:bg-rose-500/30">
      
      {/* --- Custom Pipeline Animations & 3D Utilities --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-down {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes leak-right {
          0% { left: -10px; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-pipe-flow { animation: flow-down 2s linear infinite; }
        .animate-leak-1 { animation: leak-right 1.5s linear infinite; }
        .animate-leak-2 { animation: leak-right 1.5s linear infinite 0.5s; }
        .animate-leak-3 { animation: leak-right 1.5s linear infinite 1s; }
        
        /* 3D Perspective Utilities */
        .perspective-container { perspective: 1200px; }
        .transform-3d { transform-style: preserve-3d; }
      `}} />

      {/* Ambient Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Subtle glowing orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- LEFT COLUMN: Typography & Story --- */}
      <div className="w-full lg:w-5/12 h-full flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 z-10 shrink-0 py-8 lg:py-0">
        
        {/* Eyebrow Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/30 w-fit mb-4 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#DB6A6D]" />
          <span className="text-[10px] font-bold tracking-widest text-[#DB6A6D] uppercase">
            The Revenue Funnel
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4"
        >
          You generate<br />
          100%<br />
          of the Rx value.<br />
          <span className="text-[#DB6A6D]">
            But capture &lt; 50%.
          </span>
        </motion.h2>

        {/* Insight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative p-4 rounded-xl bg-[#222834] border border-[#31394A] max-w-sm mt-3 lg:mt-6 shadow-lg"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4F46E5] rounded-l-xl" />
          <p className="text-sm text-slate-300 leading-relaxed">
            Apollo & MedPlus win with standardised ops and tech-controlled inventory.
            <strong className="text-[#60A5FA] font-medium block mt-2 flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-colors w-fit">
              MediKloud closes that gap. <ArrowRight className="w-4 h-4" />
            </strong>
          </p>
        </motion.div>

      </div>

      {/* --- RIGHT COLUMN: 3D Isometric Animated Funnel --- */}
      <div className="w-full lg:w-7/12 h-full flex items-center justify-center perspective-container z-10 p-2 sm:p-8 shrink-0 py-8 lg:py-0">
        
        {/* 3D Rotated Container (Isometric Tilt) - Adjusted for subtleness */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 6, rotateY: -10 }}
          whileInView={{ opacity: 1, rotateX: 4, rotateY: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[500px] transform-3d hover:rotate-x-[2deg] hover:-rotate-y-[4deg] transition-transform duration-1000 ease-out scale-90 sm:scale-100"
        >
          
          {/* Optional 3D Backplate */}
          <div className="absolute inset-[-20px] border border-indigo-500/10 rounded-3xl bg-[#1A1E26]/20 shadow-[0_0_50px_rgba(79,70,229,0.05)] backdrop-blur-sm transform-3d translate-z-[-20px]" />
          
          {/* 1. TOP NODE: 100% Generated */}
          <div className="w-full bg-[#272E3D]/95 border border-[#3A4354] rounded-xl p-3 sm:p-4 flex justify-between items-center relative z-30 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-3d translate-z-[40px] backdrop-blur-md">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400 mb-0.5">Doctor Writes</p>
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">100% Rx Value</p>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-600 flex items-center justify-center bg-[#1A1E26]">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
            </div>
          </div>

          {/* 2. THE PIPELINE SYSTEM */}
          <div className="flex flex-col relative -mt-2 -mb-2 z-10 transform-3d translate-z-[10px]">
             
            {/* ROW 1: Ops Loss */}
            <div className="flex w-full items-stretch">
              {/* Vertical Trunk */}
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0">
                <div className="w-10 sm:w-12 bg-[#384C74]/40 relative shadow-inner border-x border-blue-400/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pipe-flow" />
                  <div className="absolute right-[-14px] sm:right-[-20px] top-1/2 -translate-y-1/2 w-5 sm:w-8 h-[4px] bg-rose-950/50 rounded-full overflow-hidden">
                     <div className="absolute top-0 bottom-0 w-4 bg-[#DB6A6D] shadow-[0_0_10px_rgba(219,106,109,0.8)] rounded-full animate-leak-1" />
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 py-1.5 transform-3d translate-z-[30px]">
                <div className="bg-[#272E3D]/95 border border-[#3A4354] p-2.5 sm:p-3 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all hover:border-[#DB6A6D]/40 hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-full bg-rose-950/30 border border-rose-900/50 flex items-center justify-center shrink-0">
                    <AlertOctagon className="w-4 h-4 text-[#DB6A6D]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[#DB6A6D] font-bold text-lg sm:text-xl leading-none">-10%</span>
                      <span className="text-slate-200 font-bold text-xs sm:text-sm">Ops Loss</span>
                    </div>
                    <div className="text-slate-400 text-[9px] sm:text-[11px] leading-tight">Stockouts, Inventory Loss, Pilferage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Walk-outs */}
            <div className="flex w-full items-stretch">
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0">
                <div className="w-8 sm:w-10 bg-[#3B3C62]/40 relative shadow-inner border-x border-indigo-400/20 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pipe-flow" style={{animationDelay: '0.2s'}} />
                  <div className="absolute right-[-22px] sm:right-[-28px] top-1/2 -translate-y-1/2 w-7 sm:w-10 h-[4px] bg-rose-950/50 rounded-full overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-4 bg-[#DB6A6D] shadow-[0_0_10px_rgba(219,106,109,0.8)] rounded-full animate-leak-2" />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-1.5 transform-3d translate-z-[30px]">
                <div className="bg-[#272E3D]/95 border border-[#3A4354] p-2.5 sm:p-3 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all hover:border-[#DB6A6D]/40 hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-full bg-rose-950/30 border border-rose-900/50 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-4 h-4 text-[#DB6A6D]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[#DB6A6D] font-bold text-lg sm:text-xl leading-none">-30%</span>
                      <span className="text-slate-200 font-bold text-xs sm:text-sm">Walk-outs</span>
                    </div>
                    <div className="text-slate-400 text-[9px] sm:text-[11px] leading-tight">Patients buy at external pharmacies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Chronic Loss */}
            <div className="flex w-full items-stretch">
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0">
                <div className="w-6 sm:w-8 bg-[#4A2D4E]/40 relative shadow-inner border-x border-purple-400/20 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pipe-flow" style={{animationDelay: '0.4s'}} />
                  <div className="absolute right-[-30px] sm:right-[-36px] top-1/2 -translate-y-1/2 w-9 sm:w-12 h-[4px] bg-rose-950/50 rounded-full overflow-hidden">
                     <div className="absolute top-0 bottom-0 w-4 bg-[#DB6A6D] shadow-[0_0_10px_rgba(219,106,109,0.8)] rounded-full animate-leak-3" />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-1.5 transform-3d translate-z-[30px]">
                <div className="bg-[#272E3D]/95 border border-[#3A4354] p-2.5 sm:p-3 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all hover:border-[#DB6A6D]/40 hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-full bg-rose-950/30 border border-rose-900/50 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-[#DB6A6D]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-[#DB6A6D] font-bold text-lg sm:text-xl leading-none">-80%</span>
                      <span className="text-slate-200 font-bold text-xs sm:text-sm">Chronic Loss</span>
                    </div>
                    <div className="text-slate-400 text-[9px] sm:text-[11px] leading-tight">Chronic cases don't return to hospitals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Stub Drop */}
            <div className="flex w-full h-3 sm:h-4">
              <div className="w-16 sm:w-20 flex justify-center shrink-0">
                <div className="w-2 sm:w-3 h-full bg-[#1C202A] shadow-inner border-x border-emerald-900/30 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent animate-pipe-flow" style={{animationDelay: '0.6s'}} />
                </div>
              </div>
              <div className="flex-1" />
            </div>

          </div>

          {/* 3. BOTTOM NODE: < 50% Captured */}
          <div className="w-[95%] ml-auto bg-[#1F2C33]/95 border border-emerald-500/40 rounded-xl p-3 sm:p-4 flex justify-between items-center relative z-30 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.1)] transform-3d translate-z-[40px] backdrop-blur-md">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#34D399] mb-0.5">Hospital Captures</p>
              <p className="text-xl sm:text-2xl font-black text-[#10B981] tracking-tight">&lt; 50% Final Value</p>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-emerald-500/40 flex items-center justify-center bg-emerald-500/10">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
