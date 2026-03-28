"use client"

import React from 'react';
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
    <section className="relative w-full min-h-[calc(100dvh-64px)] lg:h-[calc(100dvh-64px)] bg-section-surface text-slate-900 overflow-hidden flex flex-col lg:flex-row items-center font-sans tracking-tight">
      
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Subtle glowing orbs — reduced blur for performance */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-100/30 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-rose-100/30 rounded-full blur-[60px] pointer-events-none" />

      {/* --- LEFT COLUMN: Typography & Story --- */}
      <div className="w-full lg:w-5/12 h-full flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 z-10 shrink-0 py-12 lg:py-0">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 w-fit mb-4 sm:mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span className="text-[10px] font-bold tracking-widest text-indigo-700 uppercase">
            The Revenue Funnel
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
          You generate<br />
          100%<br />
          of the Rx value.<br />
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm pr-2">
            But capture <span className="whitespace-nowrap">&lt; 50%.</span>
          </span>
        </h2>

        {/* Insight Card */}
        <div className="relative card max-w-sm mt-3 lg:mt-6 overflow-hidden !rounded-xl">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-l-xl" />
          <p className="text-sm text-slate-600 leading-relaxed pl-2">
            Apollo & MedPlus win with standardised ops and tech-controlled inventory.
            <strong className="text-indigo-600 font-bold block mt-2 flex items-center gap-2 cursor-pointer hover:text-indigo-700 transition-colors w-fit">
              MediKloud closes that gap. <ArrowRight className="w-4 h-4" />
            </strong>
          </p>
        </div>

      </div>

      {/* --- RIGHT COLUMN: 3D Isometric Animated Funnel --- */}
      <div className="w-full lg:w-7/12 h-full flex items-center justify-center perspective-container z-10 p-2 sm:p-8 shrink-0 py-8 lg:py-0">
        
        {/* 3D Rotated Container (Isometric Tilt) - Adjusted for subtleness */}
        <div className="relative w-full max-w-[500px] scale-90 sm:scale-100">
          
          {/* Optional 3D Backplate */}
          <div className="absolute inset-[-20px] border border-indigo-200/50 rounded-3xl bg-white/60 shadow-sm" />
          
          {/* 1. TOP NODE: 100% Generated */}
          <div className="w-full bg-white border border-slate-200 rounded-xl py-2 px-3 sm:py-3 sm:px-4 flex justify-between items-center relative z-30 shadow-card-lg">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 mb-0.5">Doctor Writes</p>
              <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">100% Rx Value</p>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-indigo-100 flex items-center justify-center bg-indigo-50 shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </div>
          </div>

          {/* 2. THE PIPELINE SYSTEM */}
          <div className="flex flex-col gap-0.5 sm:gap-1.5 relative z-20 my-1.5">
             
            {/* ROW 1: Ops Loss */}
            <div className="flex w-full items-stretch">
              {/* Vertical Trunk */}
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0 z-10">
                <div className="w-10 sm:w-12 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300 relative shadow-inner border-x border-indigo-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pipe-flow" />
                </div>
                {/* Horizontal Output Connection */}
                <div className="absolute right-[-24px] sm:right-[-32px] top-1/2 -translate-y-1/2 w-12 sm:w-16 h-[4px] bg-indigo-300 rounded-full overflow-hidden border-y border-indigo-400 z-0 shadow-sm">
                  <div className="absolute top-0 bottom-0 w-4 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] rounded-full animate-leak-1" />
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 relative z-20">
                <div className="bg-white border border-slate-200 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.1)] transition-all hover:border-indigo-300 group">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <AlertOctagon className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-slate-800 font-bold text-lg sm:text-xl leading-none">-10%</span>
                      <span className="text-indigo-600 font-bold text-[10px] sm:text-xs">Ops Loss</span>
                    </div>
                    <div className="text-slate-500 text-[9px] sm:text-[10px] leading-tight max-w-[140px] sm:max-w-none">Stockouts, Inventory Loss, Pilferage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Walk-outs */}
            <div className="flex w-full items-stretch">
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0 z-10">
                <div className="w-8 sm:w-10 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300 relative shadow-inner border-x border-indigo-400 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pipe-flow" style={{animationDelay: '0.2s'}} />
                </div>
                <div className="absolute right-[-24px] sm:right-[-32px] top-1/2 -translate-y-1/2 w-12 sm:w-16 h-[4px] bg-indigo-300 rounded-full overflow-hidden border-y border-indigo-400 z-0 shadow-sm">
                  <div className="absolute top-0 bottom-0 w-4 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] rounded-full animate-leak-2" />
                </div>
              </div>
              <div className="flex-1 relative z-20">
                <div className="bg-white border border-slate-200 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.1)] transition-all hover:border-indigo-300 group">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-slate-800 font-bold text-lg sm:text-xl leading-none">-30%</span>
                      <span className="text-indigo-600 font-bold text-[10px] sm:text-xs">Walk-outs</span>
                    </div>
                    <div className="text-slate-500 text-[9px] sm:text-[10px] leading-tight max-w-[140px] sm:max-w-none">Patients buy at external pharmacies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Chronic Loss */}
            <div className="flex w-full items-stretch">
              <div className="w-16 sm:w-20 flex justify-center relative shrink-0 z-10">
                <div className="w-6 sm:w-8 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300 relative shadow-inner border-x border-indigo-400 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pipe-flow" style={{animationDelay: '0.4s'}} />
                </div>
                <div className="absolute right-[-24px] sm:right-[-32px] top-1/2 -translate-y-1/2 w-12 sm:w-16 h-[4px] bg-indigo-300 rounded-full overflow-hidden border-y border-indigo-400 z-0 shadow-sm">
                   <div className="absolute top-0 bottom-0 w-4 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)] rounded-full animate-leak-3" />
                </div>
              </div>
              <div className="flex-1 relative z-20">
                <div className="bg-white border border-slate-200 py-1.5 sm:py-2 px-3 sm:px-4 rounded-xl flex items-center gap-3 sm:gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.1)] transition-all hover:border-indigo-300 group">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Activity className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-slate-800 font-bold text-lg sm:text-xl leading-none">-80%</span>
                      <span className="text-indigo-600 font-bold text-[10px] sm:text-xs">Chronic Loss</span>
                    </div>
                    <div className="text-slate-500 text-[9px] sm:text-[10px] leading-tight max-w-[140px] sm:max-w-none">Chronic cases don't return to hospitals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Stub Drop */}
            <div className="flex w-full h-3 sm:h-5">
              <div className="w-16 sm:w-20 flex justify-center shrink-0">
                <div className="w-2 sm:w-3 h-full bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300 relative shadow-inner border-x border-indigo-400 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/60 to-transparent animate-pipe-flow" style={{animationDelay: '0.6s'}} />
                </div>
              </div>
              <div className="flex-1" />
            </div>

          </div>

          {/* 3. BOTTOM NODE: < 50% Captured */}
          <div className="w-[95%] ml-auto bg-gradient-to-br from-indigo-600 to-violet-600 border border-indigo-800 rounded-xl py-2 px-3 sm:py-3 sm:px-4 flex justify-between items-center relative z-30 shadow-[0_15px_30px_rgba(79,70,229,0.3)]">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-100/90 mb-0.5">Hospital Captures</p>
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">&lt; 50% Final Value</p>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-indigo-400 flex items-center justify-center bg-white shadow-sm shrink-0">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

