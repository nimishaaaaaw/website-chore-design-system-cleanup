"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Users, 
  Wallet,
  Package,
  HeartPulse,
  UserPlus,
  LayoutGrid,
  Clock,
  TrendingDown,
  CheckCircle
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';
import { AvatarSVG } from '@/components/shared/HeroIcons';

interface HMSHeroProps {
  children?: React.ReactNode
}

export const HMSHero = ({ children }: HMSHeroProps) => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      

      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        {/* STANDARDIZED 12-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* STANDARDIZED LEFT COLUMN (Refined High-Fidelity Spacing) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Eyebrow - Keep Airy */}
            <div className="eyebrow-wrap lg:justify-start mb-10 md:mb-14 pt-6 animate-fade-in opacity-0 [animation-delay:60ms] [animation-fill-mode:forwards]">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">100% Secure · Zero Training · High-Volume OPD</span>
              <span className="eyebrow-line-r"></span>
            </div>
            
            {/* Content Group - Tighter Spacing for Better Conversion Flow */}
            <div className="space-y-8 md:space-y-10">
              {/* ── Main Content Block (Passed from Server) ── */}
              <div className="animate-fade-in-up opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards]">
                {children}
              </div>

              {/* STANDARDIZED CTA & BADGE SPACING (Leveraging Space) */}
              <div className="flex flex-col gap-10 pt-2 lg:pt-4 animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                  <button onClick={() => openModal({
                    badge: "Clinic OS",
                    title: "Experience The Hospital OS",
                    description: "Schedule a demo to see how our AI-driven Clinic OS can modernize every touchpoint of your patient journey.",
                    btnText: "Schedule Your Demo",
                    successTitle: "HMS Demo Scheduled!",
                    successDescription: "Our team will reach out within 24 hours to schedule your Hospital OS demo."
                  })} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
                    Experience HMS <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
              </div>
            </div>
          </div>

          {/* STANDARDIZED RIGHT COLUMN (PREMIUM GLASS WRAPPER + HIGH-FIDELITY PATIENT JOURNEY) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_-8px_rgba(79,70,229,0.20)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100/60">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100">
                     <LayoutGrid className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">MediKloud OS</h4>
                     <p className="text-[10px] font-semibold text-[#8696a0] uppercase tracking-widest px-0.5">Live Patient Journey</p>
                   </div>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                   </span>
                   <span className="text-[10px] font-semibold tracking-widest uppercase">End-to-End</span>
                 </div>
              </div>

              {/* Animation Stage - S-Curve Patient Flow */}
              <div className="relative h-[280px] bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden shadow-inner mb-6 no-select">
                 
                 {/* Soft Tech Grid */}
                 <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

                 {/* S-Curve Path */}
                 <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 p-4">
                    <path d="M 20 25 L 50 25 C 75 25, 85 35, 85 50 C 85 65, 75 75, 50 75 L 20 75" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Active Gradient Path Overlay */}
                    <path 
                      d="M 20 25 L 50 25 C 75 25, 85 35, 85 50 C 85 65, 75 75, 50 75 L 20 75" 
                      fill="none" 
                      stroke="url(#flowGradient)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                 </svg>

                 {/* Journey Nodes */}
                 {[
                   { name: "Reception", icon: UserPlus, x: "20%", y: "25%", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
                   { name: "Queue", icon: Users, x: "50%", y: "25%", color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
                   { name: "Consult", icon: HeartPulse, x: "85%", y: "50%", color: "text-white", bg: "bg-indigo-600", border: "border-indigo-400 ring-4 ring-indigo-50", scale: "scale-110 shadow-[0_0_15px_rgba(79,70,229,0.3)]" },
                   { name: "Billing", icon: Wallet, x: "50%", y: "75%", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
                   { name: "Pharmacy", icon: Package, x: "20%", y: "75%", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" }
                 ].map((node, i) => {
                   const Icon = node.icon;
                   return (
                     <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20" style={{ left: node.x, top: node.y }}>
                       <div className={`w-10 h-10 ${node.bg} rounded-xl shadow-sm border ${node.border} flex items-center justify-center mb-1.5 ${node.scale || ''}`}>
                         <Icon className={`w-4 h-4 ${node.color}`} />
                       </div>
                       <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest bg-white/90 px-1.5 py-0.5 rounded backdrop-blur-sm border border-slate-100 shadow-sm">
                         {node.name}
                       </span>
                     </div>
                   );
                 })}

                 {/* Moving Patient Token */}
                 <motion.div
                   animate={{
                     left: ['20%', '20%', '50%', '50%', '85%', '85%', '50%', '50%', '20%', '20%'],
                     top:  ['25%', '25%', '25%', '25%', '50%', '50%', '75%', '75%', '75%', '75%'],
                     opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                     scale: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 0.5]
                   }}
                   transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', times: [0, 0.05, 0.15, 0.25, 0.35, 0.5, 0.6, 0.75, 0.85, 0.95] }}
                   className="absolute z-30 w-7 h-7 bg-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-slate-200 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                 >
                   <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 tracking-normal"><AvatarSVG gender="male" seed="patient-journey" /></div>
                 </motion.div>

                 {/* Dynamic Step Tooltips */}
                 {[
                   { text: "Walk-in Booked", time: [0, 0.05, 0.1, 0.15, 1], x: "20%", y: "10%" },
                   { text: "Wait: 4 mins", time: [0, 0.25, 0.3, 0.35, 1], x: "50%", y: "10%" },
                   { text: "E-Rx Synced", time: [0, 0.5, 0.55, 0.6, 1], x: "65%", y: "50%" },
                   { text: "Auto-Billed", time: [0, 0.75, 0.8, 0.85, 1], x: "50%", y: "90%" },
                   { text: "Meds Dispensed", time: [0, 0.95, 0.96, 0.98, 1], x: "20%", y: "90%" }
                 ].map((tooltip, i) => (
                   <motion.div
                     key={i}
                     animate={{ opacity: [0, 0, 1, 0, 0], scale: [0.8, 0.8, 1, 0.8, 0.8] }}
                     transition={{ duration: 12, repeat: Infinity, ease: 'easeOut', times: tooltip.time }}
                     className="absolute z-40 bg-slate-900/95 backdrop-blur-md text-white px-2.5 py-1 rounded-full shadow-lg text-[9px] font-semibold tracking-wider whitespace-nowrap -translate-x-1/2 -translate-y-1/2 border border-slate-700 flex items-center gap-1.5"
                     style={{ left: tooltip.x, top: tooltip.y }}
                   >
                     <CheckCircle size={10} className="text-emerald-400" /> {tooltip.text}
                   </motion.div>
                 ))}
              </div>

              {/* Live Metric Footer Personalized */}
              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-xl p-4 border border-purple-100 flex items-center justify-between no-select">
                 <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                       <Clock className="w-3 h-3 text-purple-500" />
                       Patient Wait Time
                    </p>
                    <div className="flex items-baseline gap-2">
                       <h4 className="text-xl font-bold text-slate-900 leading-none tracking-tight">Reduced by <span className="text-indigo-600">65%</span></h4>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 ring-4 ring-purple-50 shadow-sm border border-purple-100">
                    <TrendingDown className="w-5 h-5" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
