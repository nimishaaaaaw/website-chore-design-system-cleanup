"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, MousePointer2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface ClinicWithPharmacyHeroProps {
  onBookDemo?: () => void;
  onTalkToExpert?: () => void;
}

export const ClinicWithPharmacyHero = ({ onBookDemo, onTalkToExpert }: ClinicWithPharmacyHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">
      {/* Dynamic Background Blobs */}
      <div className="blob-layer pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px] animate-float-slow opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[100px] animate-pulse opacity-50"></div>
      </div>

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainerLocal}
          className="max-w-6xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="eyebrow-wrap justify-start mb-8 animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Built for high-volume clinics</span>
          </div>

          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-start">
            <div className="space-y-10">
              <h1 className="text-display-xl font-bold text-slate-900 leading-[1.05] tracking-tight animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                You already have a pharmacy.<br />
                <span className="text-indigo-600">
                  Why are patients buying outside?
                </span>
              </h1>

              <p className="text-body-lg text-slate-600 max-w-2xl font-medium leading-relaxed animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                Every consultation ends with a prescription. But your revenue, your patient, and your clinical control leave the moment they walk out the door.
              </p>

              <motion.div variants={fadeInUp} className="space-y-5">
                <p className="font-bold text-slate-900 text-lg">MediKloud stops the leakage instantly:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Managed Pharmacy (End-to-end ops)",
                    "Unified HMS (Prescription sync)",
                    "Refill Engine (Automated delivery)",
                    "100% Availability Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button 
                  onClick={onBookDemo}
                  className="btn-primary min-w-[240px]"
                >
                  Book a free demo
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={onTalkToExpert}
                  className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-bold transition-all group px-4 py-2"
                >
                  <MessageCircle className="w-5 h-5 transition-colors group-hover:text-indigo-600" />
                  Talk to our clinic experts
                </button>
              </motion.div>
            </div>

            {/* Visual Side - Leakage Grid */}
            <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0">
              <div className="relative aspect-square max-w-[440px] mx-auto lg:ml-auto">
                {/* Floating "Risk" Cards with Pulse */}
                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute top-0 right-0 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-30 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-base leading-relaxed font-medium">"I'll just buy these medicines on my way home..."</p>
                  <div className="mt-4 flex items-center gap-2 text-xxs font-black uppercase tracking-widest text-rose-500">
                    <MousePointer2 className="w-3 h-3 group-hover:animate-bounce" />
                    Prescription Leakage active
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, 20, 0] }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute top-40 left-0 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-20 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-base leading-relaxed font-medium">"My regular online pharmacy delivers for cheaper."</p>
                  <div className="mt-4 flex items-center gap-2 text-xxs font-black uppercase tracking-widest text-rose-500">
                    <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    Revenue at risk
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute bottom-4 right-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-10 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-base leading-relaxed font-medium">"I'll have to check another store for stock."</p>
                  <div className="mt-4 flex items-center gap-2 text-xxs font-black uppercase tracking-widest text-slate-400">
                    Stock unavailability
                  </div>
                </motion.div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator hook */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 no-select"
      >
        <span className="text-xxs font-black uppercase tracking-[0.2em]">Scroll to explore leakage patterns</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};