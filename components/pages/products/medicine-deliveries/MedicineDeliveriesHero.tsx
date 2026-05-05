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
import { AvatarSVG } from '@/components/shared/HeroIcons';

interface MedicineDeliveriesHeroProps {
  children?: React.ReactNode
}

export const MedicineDeliveriesHero = ({ children }: MedicineDeliveriesHeroProps) => {
  const { openModal } = useContactModal();

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

      let targetX = 0, targetY = 0;
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

      const newDispatch = { id, name, gender: isFemale ? 'female' : 'male', x: targetX, y: targetY, status: 'transit' };
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
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Blobs */}
      <div className="blob-layer" aria-hidden="true">
        <div className="blob-blue w-60 h-60 top-[10%] left-[15%] opacity-25" />
        <div className="blob-indigo w-64 h-64 bottom-[20%] right-[10%] opacity-20" />
      </div>

      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left column */}
          <div className="lg:col-span-7 text-center lg:text-left">

            <div className="eyebrow-wrap lg:justify-start mb-10 md:mb-14 pt-6 animate-fade-in opacity-0 [animation-delay:60ms] [animation-fill-mode:forwards]">
              <span className="eyebrow-line-l" />
              <span className="eyebrow-text">Continuous Care · Patient Retention</span>
              <span className="eyebrow-line-r" />
            </div>

            <div className="space-y-8 md:space-y-10">
              <div className="animate-fade-in-up opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards]">
                {children}
              </div>

              <div className="flex flex-col gap-10 pt-2 lg:pt-4 animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                  <button
                      onClick={() => openModal({
                        badge: "Medicine Deliveries",
                        title: "Enable Direct Patient Delivery.",
                        description: "Let us handle the logistics so you can recover lost prescription revenue.",
                        btnText: "Schedule Your Demo",
                        successTitle: "Delivery Plan Booked!",
                        successDescription: "Our team will be in touch within 24 hours to map your infrastructure."
                      })}
                      className="group btn-second-cta"
                    >
                      <span>Enable Medicine Deliveries</span>
                      <ChevronRight 
                        size={20} 
                        className="group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 w-full lg:w-[700px]">
                  {HERO_TRUST_BADGES.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="trust-chip">
                        <Icon size={16} className="text-brand-500" />
                        <span className="trust-chip-text">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Live Dispatch Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center"
          >
            {/* Decorative blur ring — raw gradient kept, no token for rotated blob rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />

            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-card-lg rounded-3xl p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden flex flex-col">

              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60 no-select">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center border border-brand-200">
                    <Activity size={16} className="text-brand-600 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">Live Dispatch Map</h4>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Real-time Routing</p>
                  </div>
                </div>
                <div className="badge badge-success flex items-center gap-2 px-3 py-1.5">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest uppercase">Routing</span>
                </div>
              </div>

              {/* Dispatch map */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-slate-50/50 shadow-inner mb-6 no-select">
                {/* Grid bg — raw linear-gradient kept, no token for this pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40 pointer-events-none" />

                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <AnimatePresence>
                    {dispatches.map(d => (
                      <motion.line
                        key={`line-${d.id}`}
                        x1="15%" y1="50%"
                        x2={`${d.x}%`} y2={`${d.y}%`}
                        stroke={d.status === 'delivered' ? 'rgba(5,150,105,0.5)' : 'rgba(59,130,246,0.3)'}
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

                {/* Hospital source node */}
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[120px] z-20">
                  <div className="relative bg-white/95 backdrop-blur-md border border-brand-200 p-3 rounded-2xl flex flex-col items-center gap-2 w-full shadow-card-md">
                    <div className="relative bg-brand-600 p-2 rounded-xl shadow-card">
                      <Building2 size={20} className="text-white" />
                    </div>
                    <div className="text-center w-full">
                      <div className="text-slate-900 font-bold text-xs uppercase tracking-wider">Hospital</div>
                      <div className="text-brand-600 text-[8px] uppercase tracking-widest mt-0.5 font-semibold">Pharmacy</div>
                    </div>
                  </div>
                </div>

                {/* Dynamic dispatch nodes */}
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
                          <div className="bg-white border border-brand-200 p-1.5 rounded-full shadow-card">
                            <Truck size={12} className="text-brand-600" />
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
                        <div className={`bg-white/90 backdrop-blur-md border ${d.status === 'delivered' ? 'border-success/30 shadow-card-md' : 'border-slate-100'} p-1.5 rounded-xl flex items-center gap-2 min-w-[110px] transition-all duration-300 shadow-card ring-1 ring-black/5`}>
                          <div className="relative shrink-0 w-7 h-7 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                            <AvatarSVG gender={d.gender} seed={d.name} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-slate-900 text-[9px] font-semibold truncate">{d.name}</div>
                            <div className="text-[7px] uppercase tracking-widest mt-0.5 truncate flex items-center gap-1 font-semibold">
                              {d.status === 'delivered' ? (
                                <><CheckCircle2 size={8} className="text-success" /><span className="text-success">Reached</span></>
                              ) : (
                                <><Clock size={8} className="text-brand-500 animate-pulse" /><span className="text-slate-400">En Route</span></>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </div>

              {/* Metrics footer */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success-light flex items-center justify-center text-success border border-success/20">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">Status</p>
                    <p className="text-xs font-bold text-slate-900 leading-none">100% Retained</p>
                  </div>
                </div>
                <div className="p-3 bg-brand-50 rounded-xl border border-brand-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 border border-brand-200">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] text-brand-400 font-semibold uppercase tracking-widest mb-0.5">Revenue</p>
                    <p className="text-xs font-bold text-slate-900 leading-none">Secured</p>
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