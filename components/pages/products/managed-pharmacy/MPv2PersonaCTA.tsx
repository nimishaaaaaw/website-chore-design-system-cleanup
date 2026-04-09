"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Store,
  Handshake,
  Building2
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

const premiumEase = [0.16, 1, 0.3, 1] as any;

export function MPv2PersonaCTA() {
  const [activePersona, setActivePersona] = useState(0);
  const { openModal } = useContactModal();
  
  const personas = [
    {
      title: "I run my own pharmacy.",
      role: "Independent Setup",
      icon: <Store size={24} strokeWidth={1.5} />,
      problem: "You carry all the capital risk, shoulder the hiring headaches, and bleed margin through dead stock, theft, and manual billing errors.",
      solution: "Let us take 100% of the operational load while you secure chain-level retail profit margins with zero personal risk.",
      buttonText: "VIEW TRANSITION PLAN"
    },
    {
      title: "My pharmacy is vendor-run.",
      role: "Vendor Managed",
      icon: <Handshake size={24} strokeWidth={1.5} />,
      problem: "Your operations are peaceful, but your profit is artificially capped by fixed vendor rents. You are a landlord, not a retail partner.",
      solution: "Let our team run your current traffic data to reveal the massive retail margin you are passively surrendering to a middleman.",
      buttonText: "COMPARE RENT VS. REVENUE"
    },
    {
      title: "I am building a new clinic.",
      role: "New Launch",
      icon: <Building2 size={24} strokeWidth={1.5} />,
      problem: "You are preparing to sink ₹2L–₹10L of your own operating capital into dead inventory, physical shelving, and fragmented software.",
      solution: "We will 100% fund your opening CapEx, install our AI tech stack, and launch your pharmacy flawlessly from Day 1.",
      buttonText: "BOOK ZERO-CAPEX LAUNCH"
    }
  ];

  return (
    <section className="relative bg-white section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container-page relative z-10 w-full">
        {/* Gold Standard Header Section */}
        <div className="header-lock text-center mb-12 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="eyebrow-wrap justify-center mb-6"
          >
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">Profit Potential</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
            className="premium-h2 mb-6"
          >
            Secure <span className="text-indigo-600">chain-level retail margins.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
            className="premium-p intro-lock"
          >
            Select your setup below to unlock your custom roadmap, or <button onClick={openModal} className="text-indigo-600 font-bold hover:underline">talk to our experts</button> to see exactly how we transform your bottom line.
          </motion.p>
        </div>

        {/* Interactive Dashboard with 100% Indigo Branding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Selector Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {personas.map((p, i) => {
                const isActive = activePersona === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActivePersona(i)}
                    className={`relative w-full text-left p-6 rounded-[2rem] border transition-all duration-500 group overflow-hidden flex flex-col justify-center ${
                      isActive 
                        ? 'bg-white border-indigo-100 shadow-card-md scale-[1.02]' 
                        : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-indigo-50'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activePersonaAccent" 
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600 z-20" 
                      />
                    )}
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isActive 
                          ? 'bg-indigo-50 border-indigo-100 text-indigo-600 shadow-sm' 
                          : 'bg-white border-slate-200 text-slate-400 group-hover:text-indigo-400'
                      }`}>
                        {p.icon}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 block transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                          {p.role}
                        </span>
                        <h4 className={`text-base font-bold leading-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {p.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Column */}
            <div className="lg:col-span-7 relative rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden flex flex-col shadow-card-lg min-h-[480px]">
              <div className="h-1.5 w-full bg-indigo-600" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 blur-[100px] opacity-[0.03] pointer-events-none" />

              <div className="p-8 lg:p-12 flex-1 relative z-10 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePersona}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: premiumEase }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                        {personas[activePersona].icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-600/80">
                        {personas[activePersona].role}
                      </span>
                    </div>

                    <h3 className="premium-h2 !text-3xl lg:!text-4xl mb-10">
                      {personas[activePersona].title}
                    </h3>

                    <div className="space-y-6 flex-1">
                      <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100">
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current Challenge</span>
                        </div>
                        <p className="premium-p !text-sm lg:!text-[15px] !text-slate-600">
                          {personas[activePersona].problem}
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-indigo-600 border border-indigo-700 shadow-xl shadow-indigo-200">
                        <div className="flex items-center gap-2.5 mb-3 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">MediKloud Impact</span>
                        </div>
                        <p className="text-white font-bold leading-relaxed text-sm lg:text-[16px]">
                          {personas[activePersona].solution}
                        </p>
                      </div>
                    </div>

                    <motion.button 
                      onClick={openModal}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="mt-10 w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-indigo-200 transition-all text-[15px]"
                    >
                      {personas[activePersona].buttonText} <ArrowRight size={20} strokeWidth={1.5} />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
