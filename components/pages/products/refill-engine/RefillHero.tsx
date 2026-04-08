"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Activity, 
  Building2, 
  Truck, 
  CheckCircle2, 
  Clock, 
  TrendingUp 
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';
import { AvatarSVG } from '@/components/shared/HeroIcons';

export const RefillHero = () => {
  const { openModal } = useContactModal();

  // Dynamic Dispatch State
  const [dispatches, setDispatches] = useState<any[]>([]);
  const activeDispatchesRef = useRef<any[]>([]);

  useEffect(() => {
    const generateDispatch = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const isFemale = Math.random() > 0.5;
      
      const namesF = ["Priya S.", "Ananya M.", "Kavya R.", "Neha K.", "Aditi V.", "Sneha T.", "Riya D.", "Pooja N."];
      const namesM = ["Rahul D.", "Aditya C.", "Vikram S.", "Rohan K.", "Arjun M.", "Karan L.", "Siddharth P.", "Amit J."];
      const name = isFemale 
        ? namesF[Math.floor(Math.random() * namesF.length)] 
        : namesM[Math.floor(Math.random() * namesM.length)];

      let targetX: number = 0, targetY: number = 0;
      let overlap = true;
      let attempts = 0;
      const currentActive = activeDispatchesRef.current;

      while (overlap && attempts < 20) {
        targetX = 45 + Math.random() * 40; 
        targetY = 15 + Math.random() * 70; 
        
        overlap = currentActive.some(d => {
          const dx = Math.abs(d.x - targetX);
          const dy = Math.abs(d.y - targetY);
          return dx < 25 && dy < 25; 
        });
        attempts++;
      }

      const newDispatch = {
        id,
        name,
        gender: isFemale ? 'female' : 'male',
        x: targetX,
        y: targetY,
        status: 'transit'
      };

      activeDispatchesRef.current = [...currentActive.slice(-2), newDispatch];
      setDispatches(prev => [...prev.slice(-2), newDispatch]);

      setTimeout(() => {
        setDispatches(prev => prev.map(d => d.id === id ? { ...d, status: 'delivered' } : d));
      }, 2000);

      setTimeout(() => {
        setDispatches(prev => prev.filter(d => d.id !== id));
        activeDispatchesRef.current = activeDispatchesRef.current.filter(d => d.id !== id);
      }, 4000);
    };

    generateDispatch();
    const interval = setInterval(generateDispatch, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      <ParticleNetwork showParticles={false} />
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        {/* STANDARDIZED 12-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* STANDARDIZED LEFT COLUMN */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="eyebrow-wrap lg:justify-start">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">Digital Health Extension · Patient Retention</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            
            <div className="space-y-6">
              {/* STANDARDIZED 3-LINE HEADLINE */}
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 md:mb-8 text-center lg:text-left text-balance">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-slate-900 pb-1">
                  Medicine Deliveries From
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight bg-gradient-display bg-clip-text text-transparent pb-3 mb-1" style={{ color: '#4F46E5' }}>
                  Hospital Pharmacies
                </span>
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-[1.2] tracking-tight text-slate-700/90">
                  Directly to the patient's Doorstep.
                </span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-subtitle max-w-xl mx-auto lg:mx-0">
                We provide the technology and resources for patients to order directly from you and deliver them as well. Ensure 100% patient retention with automated chronic refills.
              </motion.p>
            </div>

            {/* STANDARDIZED CTA & BADGE SPACING */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex flex-col gap-10 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                <button onClick={openModal} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto">
                  Partner With Us <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                {HERO_TRUST_BADGES.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">{badge.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* STANDARDIZED RIGHT COLUMN (PREMIUM GLASS WRAPPER + LIVE DISPATCH) */}
          <motion.div initial={{ opacity: 0, scale: 0.95, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center">
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />
            
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-card-lg rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60 no-select">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                     <Activity size={16} className="text-blue-600 animate-pulse" />
                   </div>
                   <div>
                     <h4 className="text-sm font-black text-slate-900 tracking-tight leading-none mb-1">Live Dispatch Map</h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Routing</p>
                   </div>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-bold tracking-widest uppercase">Routing</span>
                 </div>
              </div>

              {/* Dynamic Dispatch Stage */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-slate-50/50 shadow-inner mb-6 no-select">
                 
                 {/* Tech Grid Background */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.4] pointer-events-none" />

                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                   <AnimatePresence>
                     {dispatches.map(d => (
                       <motion.line
                         key={`line-${d.id}`}
                         x1="15%" y1="50%" 
                         x2={`${d.x}%`} y2={`${d.y}%`}
                         stroke={d.status === 'delivered' ? 'rgba(16,185,129,0.5)' : 'rgba(59,130,246,0.3)'}
                         strokeWidth="2.5"
                         strokeDasharray="4 4"
                         initial={{ pathLength: 0, opacity: 0 }}
                         animate={{ pathLength: 1, opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                       />
                     ))}
                   </AnimatePresence>
                 </svg>

                 {/* SOURCE: Hospital Pharmacy */}
                 <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[120px] z-20">
                    <div className="relative bg-white/95 backdrop-blur-md border border-blue-100 p-3 rounded-2xl flex flex-col items-center gap-2 w-full shadow-lg">
                       <div className="relative bg-blue-600 p-2 rounded-xl shadow-md">
                          <Building2 size={20} className="text-white" />
                       </div>
                       <div className="text-center w-full">
                          <div className="text-slate-900 font-black text-[10px] uppercase tracking-wider">Hospital</div>
                          <div className="text-blue-600 text-[8px] uppercase tracking-widest mt-0.5 font-bold">Pharmacy</div>
                       </div>
                    </div>
                 </div>

                 {/* DYNAMIC PATIENTS & TRUCKS */}
                 <AnimatePresence>
                   {dispatches.map(d => (
                     <React.Fragment key={d.id}>
                       {d.status === 'transit' && (
                         <motion.div
                           initial={{ left: "15%", top: "50%", opacity: 0, scale: 0.5 }}
                           animate={{ left: `${d.x}%`, top: `${d.y}%`, opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.5 }}
                           transition={{ duration: 2, ease: "linear" }}
                           className="absolute -ml-3 -mt-3 z-30"
                         >
                            <div className="bg-white border border-blue-200 p-1.5 rounded-full shadow-lg">
                               <Truck size={12} className="text-blue-600" />
                            </div>
                         </motion.div>
                       )}

                       <motion.div
                         initial={{ opacity: 0, scale: 0.5, y: 10 }}
                         animate={{ opacity: 1, scale: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.8 }}
                         transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                         style={{ left: `${d.x}%`, top: `${d.y}%` }}
                         className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                       >
                          <div className={`bg-white/90 backdrop-blur-md border ${d.status === 'delivered' ? 'border-emerald-200 shadow-md' : 'border-slate-100'} p-1.5 rounded-xl flex items-center gap-2 min-w-[110px] transition-all duration-300 shadow-sm ring-1 ring-black/5`}>
                              <div className="relative shrink-0 w-7 h-7 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                                <AvatarSVG gender={d.gender} seed={d.name} />
                              </div>
                              <div className="min-w-0 flex-1">
                                 <div className="text-slate-900 text-[9px] font-bold truncate">{d.name}</div>
                                 <div className="text-[7px] uppercase tracking-widest mt-0.5 truncate flex items-center gap-1 font-bold">
                                   {d.status === 'delivered' ? (
                                      <><CheckCircle2 size={8} className="text-emerald-500"/> <span className="text-emerald-600">Reached</span></>
                                   ) : (
                                      <><Clock size={8} className="text-blue-500 animate-pulse"/> <span className="text-slate-400">En Route</span></>
                                   )}
                                 </div>
                              </div>
                          </div>
                       </motion.div>
                     </React.Fragment>
                   ))}
                 </AnimatePresence>
              </div>

              {/* Metrics Footer */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                 <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                       <CheckCircle2 size={16} />
                    </div>
                    <div>
                       <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Status</p>
                       <p className="text-[10px] font-black text-slate-900 leading-none">100% Retained</p>
                    </div>
                 </div>
                 <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200">
                      <TrendingUp size={16} />
                   </div>
                   <div>
                       <p className="text-[8px] text-blue-400 font-bold uppercase tracking-widest mb-0.5">Revenue</p>
                       <p className="text-[10px] font-black text-slate-900 leading-none">Secured</p>
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
