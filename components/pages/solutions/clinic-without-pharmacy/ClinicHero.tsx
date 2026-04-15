"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Building2, 
  Package, 
  FileText, 
  CheckCircle2, 
  Route, 
  Clock 
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';


interface ClinicHeroProps {
  children?: React.ReactNode
}

// --- REFINED RIDER SVG (Inline for precision) ---
const DeliveryScooterSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="15.5" cy="17.5" r="2.5"/>
    <circle cx="5.5" cy="17.5" r="2.5"/>
    <path d="M15.5 17.5H5.5"/>
    <path d="M12 4.5l-4 8"/>
    <path d="M5.5 17.5V12c0-1.5 1-3 3-3h6l2.5 3h3"/>
    <path d="M8.5 9.5H12"/>
  </svg>
);

export const ClinicHero = ({ children }: ClinicHeroProps) => {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal({
      badge: "Launch Your Clinic",
      title: "Start your clinic transformation.",
      description: "Talk to our experts to see how MediKloud can help you deliver medications instantly and grow your revenue.",
      btnText: "Book My Free Demo"
    });
  };
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      

      {/* Soft Ambient Blobs */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        {/* STANDARDIZED 12-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* STANDARDIZED LEFT COLUMN */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="eyebrow-wrap lg:justify-start mb-10 md:mb-14 pt-6 animate-fade-in opacity-0 [animation-delay:60ms] [animation-fill-mode:forwards]">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">Zero Setup · No Inventory · 10-Min Delivery</span>
              <span className="eyebrow-line-r"></span>
            </div>
            
            {/* Content Group */}
            <div className="space-y-8 md:space-y-10">
              {/* ── Main Content Block (Passed from Server) ── */}
              <div className="animate-fade-in-up opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards]">
                {children}
              </div>

              {/* CTA & BADGES */}
              <div className="flex flex-col gap-10 pt-2 lg:pt-4 animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                  <button onClick={() => openModal({
                    badge: "Clinic Transformation",
                    title: "Start Your Clinic Transformation",
                    description: "Schedule a demo to see how MediKloud can help you fulfill every prescription instantly and recover hidden revenue.",
                    btnText: "Schedule Your Demo",
                    successTitle: "Consultation Scheduled!",
                    successDescription: "Our specialists will reach out within 24 hours to schedule your clinic's transformation consult."
                  })} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
                    Join The Network <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 w-full lg:w-[700px]">
                  {HERO_TRUST_BADGES.filter(badge => badge.label !== "Zero Revenue Leakage").map((badge, idx) => {
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

          {/* STANDARDIZED RIGHT COLUMN (GLASS WRAPPER + ANIMATION) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center w-full max-w-md mx-auto lg:max-w-full">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100/80">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                     <Route className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">Instant Fulfillment</h4>
                      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">MediKloud Hubs</p>
                   </div>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                   </span>
                   <span className="text-[10px] font-semibold tracking-widest uppercase">Live 10-Min</span>
                 </div>
              </div>

              {/* Animation Stage - Linear Tracks */}
              <div className="relative h-[250px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner mb-6">
                 
                 {/* Soft Tech Grid */}
                 <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

                 {/* Top Track (Digital Request) */}
                 <div className="absolute top-[35%] left-[20%] right-[20%] border-t-2 border-dashed border-blue-300 opacity-60 z-10" />
                 
                 {/* Bottom Track (Physical Delivery) */}
                 <div className="absolute top-[75%] left-[20%] right-[20%] border-t-2 border-indigo-200 opacity-80 z-10" />

                 {/* Node 1: Your Clinic (Left) */}
               <div className="absolute left-[20%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center justify-center mb-2 z-10 relative overflow-hidden">
                     <div className="absolute top-0 w-full h-1 bg-blue-500" />
                     <Building2 className="w-6 h-6 text-blue-600 mb-1" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-white/90 px-2.5 py-1 rounded shadow-sm backdrop-blur-sm border border-slate-100 whitespace-nowrap">Your Clinic</span>
               </div>

               {/* Node 2: MediKloud Hub (Right) */}
               <div className="absolute left-[80%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)] border-2 border-white flex flex-col items-center justify-center mb-2 ring-4 ring-indigo-50 z-10">
                     <Package className="w-6 h-6 text-white" />
                     <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-indigo-400 rounded-full blur-md -z-10" />
                  </div>
                  <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded shadow-sm border border-indigo-100 whitespace-nowrap">MediKloud Hub</span>
               </div>

               {/* Animation 1: E-Rx Token (Moves Left -> Right on Top Track) */}
               <motion.div
                 initial={{ left: '20%', top: '35%', opacity: 0, scale: 0.5 }}
                 animate={{
                   left: ['20%', '20%', '75%', '75%', '75%'],
                   opacity: [0, 1, 1, 0, 0],
                   scale: [0.5, 1, 1, 0.5, 0.5]
                 }}
                 transition={{ duration: 8, repeat: Infinity, ease: 'linear', times: [0, 0.05, 0.35, 0.4, 1] }}
                 className="absolute z-30 flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full shadow-[0_4px_12px_rgba(59,130,246,0.3)] border border-blue-200 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap min-w-max"
               >
                 <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"><FileText className="w-2.5 h-2.5 text-blue-600" /></div>
                 <span className="text-[9px] font-bold text-blue-700 uppercase tracking-wider">E-Rx</span>
               </motion.div>

               {/* Animation 2: Delivery Boy (Moves Right -> Left on Bottom Track) */}
               <motion.div
                 initial={{ left: '80%', top: '75%', opacity: 0, scale: 0.8 }}
                 animate={{
                   left: ['80%', '80%', '80%', '20%', '20%', '20%'],
                   opacity: [0, 0, 1, 1, 0, 0],
                   scale: [0.8, 0.8, 1, 1, 0.8, 0.8]
                 }}
                 transition={{ duration: 8, repeat: Infinity, ease: 'linear', times: [0, 0.45, 0.5, 0.75, 0.8, 1] }}
                 className="absolute z-30 flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5] rounded-full shadow-[0_4px_15px_rgba(79,70,229,0.4)] border border-indigo-400 -translate-x-1/2 -translate-y-1/2 text-white whitespace-nowrap min-w-max flex-nowrap"
               >
                 <div className="-scale-x-100 flex items-center justify-center flex-shrink-0">
                   <DeliveryScooterSVG className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-[9px] font-bold uppercase tracking-wider flex-shrink-0">10-Min</span>
               </motion.div>

               {/* Success Toast (Triggers when Delivery Boy arrives at Clinic) */}
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [10, 10, 10, 0, 0, -10] }}
                 transition={{ duration: 8, repeat: Infinity, ease: 'linear', times: [0, 0.74, 0.75, 0.8, 0.92, 1] }}
                 className="absolute left-[20%] top-[22%] -translate-x-1/2 -translate-y-1/2 z-40 bg-white text-emerald-600 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap border border-emerald-100"
               >
                 <CheckCircle2 className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Handed to Patient</span>
               </motion.div>

               {/* Margin Earned Particle */}
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0, 0, 1, 0, 0], y: [0, 0, 0, -30, -50, -50], scale: [0.5, 0.5, 0.5, 1.2, 1, 0.5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear', times: [0, 0.79, 0.80, 0.88, 0.95, 1] }}
                  className="absolute left-[20%] top-[55%] -translate-x-1/2 z-50 text-emerald-500 font-bold text-[14px] drop-shadow-sm whitespace-nowrap"
                >
                  +₹210
                </motion.div>

            </div>

            {/* Live Metric Footer Personalized */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-4 border border-blue-100 flex items-center justify-between">
                 <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                       <Clock className="w-3 h-3 text-blue-500" />
                       MediKloud SLA
                    </p>
                    <div className="flex items-baseline gap-2">
                       <h4 className="text-xl font-bold text-slate-900 leading-none tracking-tight">10-Min Guarantee</h4>
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 ring-4 ring-blue-50 shadow-sm border border-blue-100">
                    <CheckCircle2 className="w-5 h-5" />
                 </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
