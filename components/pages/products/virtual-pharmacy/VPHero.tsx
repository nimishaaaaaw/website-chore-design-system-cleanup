"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  FileText, 
  ShieldCheck, 
  Truck, 
  CheckCircle2 
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';


interface VPHeroProps {
  children?: React.ReactNode
}

export const VPHero = ({ children }: VPHeroProps) => {
  const { openModal } = useContactModal();
  const [activeStage, setActiveStage] = useState(0);
  const [orderId, setOrderId] = useState(8429);

  // Timer for the Automation Engine progression
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev: number) => {
        const next = (prev + 1) % 4;
        if (next === 0) setOrderId((id) => id + 1); 
        return next;
      });
    }, 4000); 
    return () => clearInterval(stageInterval);
  }, []);

  const stages = [
    {
      id: 0,
      title: "Prescribed via MediKloud HMS",
      desc: "E-prescription instantly reaches our nearby MediKloud Hub",
      icon: FileText,
      iconBg: "bg-blue-100/80",
      iconColor: "text-blue-600",
      barColor: "bg-blue-500",
      metrics: "Transfer Time: < 1s",
    },
    {
      id: 1,
      title: "Packed & Verified",
      desc: "AI & Pharmacist safety check in under 2 mins",
      icon: ShieldCheck,
      iconBg: "bg-indigo-100/80",
      iconColor: "text-indigo-600",
      barColor: "bg-indigo-500",
      metrics: "Processing Time: 1m 45s",
    },
    {
      id: 2,
      title: "Rider Dispatched",
      desc: "Medicines packed and en route to your clinic",
      icon: Truck,
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600",
      barColor: "bg-purple-500",
      metrics: "Status: On the way",
    },
    {
      id: 3,
      title: "Delivered at Clinic Door",
      desc: "Handed directly to the patient before they leave",
      icon: CheckCircle2,
      iconBg: "bg-amber-100/80",
      iconColor: "text-amber-600",
      barColor: "bg-amber-500",
      metrics: "Total Time: 9m 12s",
    }
  ];

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
              <span className="eyebrow-text">Zero Space Needed · 10-Min Fulfillment · Zero Upfront Capital</span>
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
                    badge: "Virtual Pharmacy",
                    title: "Start Your Virtual Pharmacy Launch",
                    description: "Schedule a demo to see how we can fulfill your exact prescriptions with zero space required.",
                    btnText: "Schedule Your Demo",
                    successTitle: "Launch Initiated!",
                    successDescription: "Our team will be in touch within 24 hours to map your local fulfillment grid."
                  })} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
                    Launch My Pharmacy <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

          {/* STANDARDIZED RIGHT COLUMN (PREMIUM GLASS WRAPPER + LIVE PIPELINE) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-card-lg rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60 no-select">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    Live Order #{orderId}
                  </h3>
                  <p className="text-[10px] font-semibold text-[#8696a0] uppercase tracking-widest mt-1">Virtual Pharmacy Engine</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase">Processing</span>
                </div>
              </div>

              {/* The Pipeline */}
              <div className="relative no-select">
                {/* Connecting Line Background */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] bg-slate-200 rounded-full" />
                
                {/* Active Progress Line */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] overflow-hidden rounded-full flex flex-col justify-start">
                  <motion.div 
                    className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
                    animate={{ height: `${((activeStage + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {/* Pipeline Nodes */}
                <div className="space-y-4">
                  {stages.map((stage, idx) => {
                    const isActive = activeStage === idx;
                    const isPast = activeStage > idx;

                    return (
                      <div key={stage.id} className="relative pl-12">
                        {/* Node Indicator */}
                        <div 
                          className={`absolute left-[1.05rem] top-5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 transition-colors duration-500 
                          ${isActive ? 'bg-blue-500 ring-4 ring-blue-500/20' : isPast ? 'bg-slate-800' : 'bg-slate-300'}`} 
                        />

                        {/* Stage Card */}
                        <motion.div
                          layout
                          className={`p-4 rounded-2xl transition-all duration-500 ${
                            isActive 
                              ? 'bg-white shadow-card-brand border border-indigo-100 scale-[1.02]' 
                              : isPast
                                ? 'bg-white/40 border border-transparent opacity-80'
                                : 'bg-transparent border border-transparent opacity-40 grayscale-[50%]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-xl transition-colors ${isActive || isPast ? stage.iconBg : 'bg-slate-100'}`}>
                              <stage.icon className={`w-4 h-4 ${isActive || isPast ? stage.iconColor : 'text-slate-400'}`} />
                            </div>
                            <div>
                              <h4 className={`text-sm font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {stage.title}
                              </h4>
                              <p className="text-[10px] font-bold text-slate-500 mt-0.5 tracking-tight">{stage.desc}</p>
                            </div>
                          </div>

                          {/* Expanded Content for Active Stage */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                    {stage.metrics}
                                  </span>
                                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: "0%" }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 4, ease: "linear" }}
                                      className={`h-full ${stage.barColor} shadow-glow`}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
