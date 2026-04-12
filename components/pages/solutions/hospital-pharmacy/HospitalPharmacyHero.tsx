"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Building2, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  LayoutGrid,
  ArrowUpRight,
  Target,
  ClipboardList,
  Package,
  FileText,
  Wallet
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

interface HospitalPharmacyHeroProps {
  onBookDemo: () => void;
  onViewDemo?: () => void;
}

export const HospitalPharmacyHero = ({ onBookDemo }: HospitalPharmacyHeroProps) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      <ParticleNetwork showParticles={false} />
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        {/* STANDARDIZED 12-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* STANDARDIZED LEFT COLUMN (Refined High-Fidelity Spacing) */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-7 text-center lg:text-left">
            
            {/* Eyebrow - Keep Airy */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="eyebrow-wrap lg:justify-start mb-10 md:mb-14 pt-6">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">Stop Leakage · AI Inventory · Fully Managed</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            
            {/* Content Group - Tighter Spacing for Better Conversion Flow */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6 md:space-y-8">
                {/* STANDARDIZED 3-LINE HEADLINE (Uneven Spacing) */}
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center lg:text-left text-balance">
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                      Tech-Driven Hospital Ops.
                    </span>
                    <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                      Capture Every Prescription.
                    </span>
                  </div>
                  <div className="mt-8 md:mt-10">
                    <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                      Retain Every Patient.
                    </span>
                  </div>
                </motion.h1>
                
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
                  Every consultation ends with a prescription. But your revenue and care continuity leave the moment they walk out. MediKloud helps you capture that value right inside your hospital.
                </motion.p>
              </div>

              {/* STANDARDIZED CTA & BADGE SPACING (Leveraging Space) */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex flex-col gap-10 pt-2 lg:pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                  <button onClick={onBookDemo} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
                    Partner With Us <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 w-full lg:w-[700px]">
                  {HERO_TRUST_BADGES.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Icon size={16} className="text-blue-500" />
                        <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* STANDARDIZED RIGHT COLUMN (PREMIUM GLASS WRAPPER + HIGH-FIDELITY REVENUE CAPTURE ENGINE) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_-8px_rgba(79,70,229,0.20)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100/60 no-select">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                     <ShieldCheck className="w-5 h-5 animate-pulse" />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">MediKloud Routing</h4>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Workflow Engine</div>
                   </div>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                   </span>
                   <span className="text-[10px] font-semibold tracking-widest uppercase">Securing</span>
                 </div>
              </div>

              {/* Animation Stage */}
              <div className="relative h-[240px] bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden shadow-inner mb-6 no-select">
                 
                 {/* Soft Tech Grid */}
                 <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

                 {/* SVG Connecting Lines */}
                 <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {/* Path 1: Lost to Online Apps (Dotted, Red) */}
                    <path d="M 15 50 L 45 50 C 45 25, 55 20, 80 20" fill="none" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 2" className="opacity-70" />
                    {/* Path 2: Captured In-House (Solid, Indigo) */}
                    <path d="M 15 50 L 45 50 C 45 75, 55 80, 80 80" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                    {/* Highlight glowing path */}
                    <path d="M 45 50 C 45 75, 55 80, 80 80" fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" className="opacity-20 blur-sm" />
                 </svg>

                 {/* Node 1: Consultation Room (Start) */}
                 <div className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-md border border-slate-200 flex flex-col items-center justify-center z-20">
                    <ClipboardList className="w-5 h-5 text-slate-600" />
                    <span className="text-[7px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider">OPD</span>
                 </div>

                 {/* Node 2: The MediKloud Engine (Center Router) */}
                 <div className="absolute left-[45%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    <div className="relative w-12 h-12 bg-white rounded-full border-2 border-indigo-100 flex items-center justify-center shadow-[0_4px_20px_rgba(79,70,229,0.15)] mb-1">
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-indigo-500 border-dashed rounded-full" />
                       <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                          <Zap className="w-4 h-4 text-indigo-600" />
                       </div>
                    </div>
                    <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest whitespace-nowrap shadow-sm">MediKloud Shield</span>
                 </div>

                 {/* Node 3: Leakage - Online Apps (Top Right) */}
                 <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-20 p-2 bg-white/90 backdrop-blur-sm rounded-xl border border-red-100 border-dashed flex flex-col items-center justify-center z-10 opacity-80 shadow-sm">
                    <Smartphone className="w-4 h-4 text-slate-400 mb-1" />
                    <span className="text-[7px] font-bold text-slate-400 uppercase text-center leading-tight">External<br/>Apps</span>
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-50 rounded-full border border-red-100 flex items-center justify-center text-[8px] font-bold text-red-500">X</div>
                 </div>

                 {/* Node 4: Captured - In-House Pharmacy (Bottom Right) */}
                 <div className="absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-24 p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-lg shadow-indigo-600/20 flex flex-col items-center justify-center z-20 ring-4 ring-indigo-50">
                    <Package className="w-5 h-5 text-white mb-1" />
                    <span className="text-[8px] font-bold text-indigo-50 uppercase text-center leading-tight tracking-widest">In-House<br/>Pharmacy</span>
                 </div>

                 {/* Animated Prescriptions (Rx) Flowing */}
                 {[0, 1.5, 3].map((delay, i) => (
                   <motion.div
                     key={`rx-${i}`}
                     initial={{ left: '15%', top: '50%', opacity: 0, scale: 0.5 }}
                     animate={{
                       left: ['15%', '45%', '80%', '80%'],
                       top:  ['50%', '50%', '80%', '80%'],
                       opacity: [0, 1, 1, 0],
                       scale: [0.8, 1, 1.1, 0.5]
                     }}
                     transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay, times: [0, 0.33, 0.66, 1] }}
                     className="absolute z-30 w-8 h-10 bg-white rounded-md shadow-[0_2px_8px_rgba(79,70,229,0.2)] border border-indigo-200 flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
                   >
                     <FileText className="w-4 h-4 text-indigo-600" />
                     <div className="w-4 h-0.5 bg-indigo-200 mt-1 rounded-full"></div>
                     <div className="w-3 h-0.5 bg-indigo-200 mt-0.5 rounded-full"></div>
                   </motion.div>
                 ))}

                 {/* Floating Revenue Capture Particles */}
                 {[0, 1.5, 3].map((delay, i) => (
                   <motion.div
                     key={`money-${i}`}
                     initial={{ left: '80%', top: '80%', opacity: 0 }}
                     animate={{
                       top: ['80%', '80%', '55%', '55%'], 
                       opacity: [0, 0, 1, 0],
                       scale: [0.5, 0.5, 1.2, 1]
                     }}
                     transition={{ duration: 4.5, repeat: Infinity, ease: 'easeOut', delay, times: [0, 0.66, 0.8, 1] }} 
                     className="absolute z-40 -translate-x-1/2 text-emerald-500 font-bold text-sm drop-shadow-sm"
                   >
                     +₹850
                   </motion.div>
                 ))}

              </div>

              {/* Live Metric Footer Personalized */}
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-xl p-4 border border-indigo-100 flex items-center justify-between no-select">
                 <div>
                    <p className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                       <TrendingUp className="w-3 h-3" />
                       MediKloud Impact
                    </p>
                    <div className="flex items-baseline gap-2">
                       <h4 className="text-2xl font-bold text-slate-900 leading-none tracking-tight">₹42,500</h4>
                       <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-100/80 px-1.5 py-0.5 rounded-md border border-emerald-200">Today</span>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 ring-4 ring-indigo-50 shadow-sm border border-indigo-100">
                    <Wallet className="w-5 h-5" />
                 </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
