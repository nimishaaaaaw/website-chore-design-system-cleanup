"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Package, 
  Activity, 
  HeartPulse, 
  Clock, 
  TrendingUp, 
  Smile, 
  Zap 
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

const deployItems = [
  { icon: Users, label: 'Expert Pharmacists' },
  { icon: Package, label: 'Fully-Funded Stock' },
  { icon: Activity, label: 'Clinical Tech' },
  { icon: ShieldCheck, label: 'Total Compliance' }
];

const secureItems = [
  { icon: HeartPulse, label: '100% Clinical Focus' },
  { icon: Clock, label: 'Your Time' },
  { icon: CheckCircle2, label: 'Zero Hassle' }
];

export const MPHero = () => {
  const { openModal } = useContactModal();

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
              <span className="eyebrow-text">Zero Capex · Fully Managed</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            
            {/* Content Group - Tighter Spacing for Better Conversion Flow */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6 md:space-y-8">
                {/* STANDARDIZED 3-LINE HEADLINE (Uneven Spacing) */}
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center lg:text-left text-balance">
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                      Stop Managing Inventory.
                    </span>
                    <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                      Let Us Run the Pharmacy.
                    </span>
                  </div>
                  <div className="mt-8 md:mt-10">
                    <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                      With Zero Daily Stress.
                    </span>
                  </div>
                </motion.h1>
                
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
                  Delegate your entire pharmacy operation to experts. From stock sourcing and staffing to daily billing and inventory, we manage everything while you focus on patient care.
                </motion.p>
              </div>

              {/* STANDARDIZED CTA & BADGE SPACING (Leveraging Space) */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex flex-col gap-10 pt-2 lg:pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                  <button onClick={openModal} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
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

          {/* STANDARDIZED RIGHT COLUMN (PREMIUM GLASS WRAPPER + INTERACTIVE CONDUIT) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-card-lg rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60 no-select">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                     <ShieldCheck className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">Operational Managed</h4>
                      <p className="text-[10px] font-semibold text-[#8696a0] uppercase tracking-widest">End-to-End Service</p>
                   </div>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm">
                   <Zap className="w-3 h-3 fill-emerald-500" />
                   <span className="text-[10px] font-semibold tracking-widest uppercase">Proprietary Tech</span>
                 </div>
              </div>

              {/* Operations Visual (We Bring / Gain Stack) */}
              <div className="relative z-10 flex flex-col">
                  {/* TOP: Input Generator (We Deploy) */}
                  <div className="relative no-select">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-blue-100/80 p-1.5 rounded-lg border border-blue-200/50">
                        <ShieldCheck size={16} className="text-blue-600" />
                      </div>
                      <span className="text-[12px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">We Bring</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {deployItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1), type: 'spring' }}
                          className="group relative flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
                        >
                          <div className="bg-blue-50 p-1.5 rounded-md text-blue-600 shrink-0">
                            <item.icon size={14} strokeWidth={2.5} />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-700 relative z-10">{item.label}</span>
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent skew-x-12"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE: Operations Engine Conduit */}
                  <div className="relative h-16 my-2 flex items-center justify-center no-select">
                     <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-[2px] bg-slate-200/50">
                       <motion.div 
                         animate={{ y: ['-100%', '150%'] }} 
                         transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                         className="h-10 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                       />
                     </div>
                     
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-3 shadow-lg shadow-indigo-500/30 border-2 border-white flex items-center justify-center mt-1 mb-1 ring-4 ring-indigo-50"
                     >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                          <Zap size={22} className="text-white drop-shadow-md" />
                        </motion.div>
                     </motion.div>
                  </div>

                  {/* BOTTOM: Output Success (You Secure) */}
                  <div className="relative mt-2 no-select">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-indigo-100/80 p-1.5 rounded-lg border border-indigo-200/50">
                        <CheckCircle2 size={16} className="text-indigo-600" />
                      </div>
                      <span className="text-[12px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">Your Gains</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {secureItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + (i * 0.1), type: 'spring' }}
                          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-200/50 shadow-sm overflow-hidden"
                        >
                          <div className="text-indigo-600 relative z-10">
                            <item.icon size={14} strokeWidth={2.5} />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-800 relative z-10">{item.label}</span>
                          <motion.div
                             animate={{ opacity: [0, 0.5, 0] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                             className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-200/40 to-indigo-400/0"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
