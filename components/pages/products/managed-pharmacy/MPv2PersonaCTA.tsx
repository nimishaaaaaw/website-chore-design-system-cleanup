"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Store,
  Handshake,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export function MPv2PersonaCTA() {
  const [activePersona, setActivePersona] = useState(0);
  const { openModal } = useContactModal();
  
  const personas = [
    {
      title: "I run my own pharmacy.",
      role: "Independent Setup",
      icon: <Store size={24} />,
      bgLight: "bg-indigo-50",
      borderLight: "border-indigo-200",
      textGlow: "text-indigo-600",
      accentBg: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
      problem: "You carry all the capital risk, shoulder the hiring headaches, and bleed margin through dead stock, theft, and manual billing errors.",
      solution: "Let us take 100% of the operational load while you secure chain-level retail profit margins.",
      buttonText: "VIEW DIY TRANSITION PLAN"
    },
    {
      title: "My pharmacy is vendor-run.",
      role: "Vendor Managed",
      icon: <Handshake size={24} />,
      bgLight: "bg-blue-50",
      borderLight: "border-blue-200",
      textGlow: "text-blue-600",
      accentBg: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      problem: "Your operations are peaceful, but your profit is artificially capped by fixed vendor rents.",
      solution: "Let our team run your footfall data to reveal the massive retail margin you are passively surrendering to a middleman.",
      buttonText: "COMPARE RENT VS. REVENUE"
    },
    {
      title: "I am building a new clinic.",
      role: "New Launch",
      icon: <Building2 size={24} />,
      bgLight: "bg-emerald-50",
      borderLight: "border-emerald-200",
      textGlow: "text-emerald-600",
      accentBg: "bg-emerald-500",
      gradient: "from-emerald-500 to-emerald-600",
      problem: "You are preparing to sink ₹2L–₹5L of your own operating capital into dead inventory, physical shelving, and fragmented software.",
      solution: "We will 100% fund your opening CapEx, install our AI tech stack, and launch your pharmacy flawlessly from Day 1.",
      buttonText: "BOOK ZERO-CAPEX LAUNCH"
    }
  ];

  return (
    <section className="relative bg-section-surface section-py border-t border-slate-100 overflow-hidden">
      <div className="container-page relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-section leading-tight md:text-5xl tracking-tight mb-6"
        >
          Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{ color: '#4F46E5' }}>chain-level retail margins.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto"
        >
          Select your setup below to unlock your custom plan, or <button onClick={openModal} className="text-indigo-600 font-bold hover:underline">talk to our experts today</button> to see exactly how we transform your bottom line.
        </motion.p>
      </div>

      {/* Interactive Persona Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">

            {/* Left Column: Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {personas.map((p, i) => {
                    const isActive = activePersona === i;
                    return (
                        <button
                          key={i}
                          onClick={() => setActivePersona(i)}
                          className={`relative w-full text-left p-5 rounded-[1.5rem] border transition-all duration-300 group overflow-hidden flex flex-col justify-center ${
                            isActive 
                              ? `bg-white ${p.borderLight} shadow-card-md scale-[1.02]` 
                              : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                          }`}
                        >
                           {isActive && (
                              <motion.div 
                                layoutId="activePersonaBorder" 
                                className={`absolute left-0 top-0 bottom-0 w-1.5 ${p.accentBg}`} 
                              />
                           )}
                           <div className="flex items-center gap-4 md:gap-5">
                               <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                                 isActive 
                                   ? `${p.bgLight} ${p.borderLight} ${p.textGlow} scale-110 shadow-sm` 
                                   : 'bg-white border-slate-200 text-slate-400 group-hover:text-slate-500 group-hover:scale-105'
                               }`}>
                                   {p.icon}
                               </div>
                               <div>
                                   <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-1 block transition-colors duration-300 ${isActive ? p.textGlow : 'text-slate-400'}`}>
                                     {p.role}
                                   </span>
                                   <h3 className={`text-base md:text-lg font-bold leading-snug transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                     {p.title}
                                   </h3>
                               </div>
                           </div>
                        </button>
                    )
                })}
            </div>

            {/* Right Column: Active Content Panel */}
            <div className="lg:col-span-7 relative rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden flex flex-col shadow-card-lg min-h-[360px]">
                {/* Top Colored Bar */}
                <div className={`h-2 w-full ${personas[activePersona].accentBg} transition-colors duration-500`} />

                {/* Ambient Background Glow */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] opacity-[0.03] pointer-events-none transition-colors duration-700 ${personas[activePersona].accentBg}`} />

                <div className="p-6 md:p-10 flex-1 relative z-10 flex flex-col justify-center">
                   <AnimatePresence mode="wait">
                      <motion.div
                         key={activePersona}
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -20 }}
                         transition={{ duration: 0.3, ease: "easeInOut" }}
                         className="flex flex-col h-full"
                      >
                         <div className="mb-6 flex items-center gap-3">
                             <div className={`p-2.5 rounded-xl ${personas[activePersona].bgLight} ${personas[activePersona].borderLight} border ${personas[activePersona].textGlow}`}>
                                {personas[activePersona].icon}
                             </div>
                             <span className={`text-[11px] md:text-xs font-bold uppercase tracking-widest ${personas[activePersona].textGlow}`}>
                                {personas[activePersona].role}
                             </span>
                         </div>

                         <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold text-slate-900 leading-tight tracking-tight mb-8 sm:whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">
                            {personas[activePersona].title}
                         </h3>

                         <div className="grid grid-cols-1 gap-4 mb-10">
                             {/* Current Reality Box */}
                             <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                                 <div className="flex items-center gap-2 mb-3">
                                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                     <span className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-widest">Current Reality</span>
                                 </div>
                                 <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                                     {personas[activePersona].problem}
                                 </p>
                             </div>

                             {/* Impact Box */}
                             <div className={`p-5 rounded-2xl border bg-white ${personas[activePersona].borderLight}`}>
                                 <div className="flex items-center gap-2 mb-3">
                                     <div className={`w-1.5 h-1.5 rounded-full ${personas[activePersona].accentBg} animate-pulse`} />
                                     <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest ${personas[activePersona].textGlow}`}>MediKloud Impact</span>
                                 </div>
                                 <p className="text-slate-900 font-bold leading-relaxed text-sm md:text-base">
                                     {personas[activePersona].solution}
                                 </p>
                             </div>
                         </div>

                         {/* CTA Button */}
                         <button 
                             onClick={openModal}
                             className={`w-full py-4 px-6 rounded-2xl text-white font-bold tracking-tight bg-gradient-action flex items-center justify-center gap-3 shadow-btn group transition-all text-base hover:shadow-lg hover:-translate-y-0.5`}
                         >
                             {personas[activePersona].buttonText} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                         </button>
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
