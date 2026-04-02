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

export function MPv2PersonaCTA() {
  const [activePersona, setActivePersona] = useState(0);
  
  const personas = [
    {
      title: "I operate my own pharmacy.",
      role: "Independent Setup",
      icon: <Store size={24} />,
      bgLight: "bg-rose-50",
      borderLight: "border-rose-200",
      textGlow: "text-rose-600",
      accentBg: "bg-rose-500",
      gradient: "from-rose-500 to-rose-600",
      problem: "You carry all the capital risk, shoulder the hiring headaches, and bleed margin through dead stock, theft, and manual billing errors.",
      solution: "Let us take 100% of the operational load while you secure chain-level retail profit margins.",
      buttonText: "VIEW DIY TRANSITION PLAN"
    },
    {
      title: "My pharmacy is run by a vendor.",
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
      title: "I am launching a new clinic.",
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
    <div className="relative pt-32 mt-10 border-t border-slate-200 pb-32 z-10 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-[10px] font-mono tracking-[0.3em] uppercase mb-8 shadow-sm"
        >
          <ArrowUpRight size={14} className="animate-pulse" />
          Your Next Moves
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h2 md:text-h1 font-bold text-slate-900 leading-tight tracking-tight mb-6"
        >
          Ready to secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">chain-level retail margins?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Select your current operational setup below to unlock your custom transition plan and see exactly how MediKloud transforms your bottom line.
        </motion.p>
      </div>

      {/* Interactive Persona Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

            {/* Left Column: Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {personas.map((p, i) => {
                    const isActive = activePersona === i;
                    return (
                        <button
                          key={i}
                          onClick={() => setActivePersona(i)}
                          className={`relative w-full text-left p-5 md:p-6 rounded-[2rem] border transition-all duration-300 group overflow-hidden ${
                            isActive 
                              ? `bg-white ${p.borderLight} shadow-card-md` 
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
                                   <span className={`text-[10px] font-mono uppercase tracking-widest mb-1 block transition-colors duration-300 ${isActive ? p.textGlow : 'text-slate-500'}`}>
                                     {p.role}
                                   </span>
                                   <h3 className={`text-h4 md:text-h3 font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                     "{p.title}"
                                   </h3>
                               </div>
                           </div>
                        </button>
                    )
                })}
            </div>

            {/* Right Column: Active Content Panel */}
            <div className="lg:col-span-7 relative rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden flex flex-col shadow-card-lg min-h-[420px]">
                {/* Top Colored Bar */}
                <div className={`h-2 w-full ${personas[activePersona].accentBg} transition-colors duration-500`} />

                {/* Ambient Background Glow */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] blur-[120px] opacity-[0.03] pointer-events-none transition-colors duration-700 ${personas[activePersona].accentBg}`} />

                <div className="p-8 md:p-12 flex-1 relative z-10 flex flex-col justify-center">
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
                             <div className={`p-2 rounded-xl ${personas[activePersona].bgLight} ${personas[activePersona].borderLight} border ${personas[activePersona].textGlow}`}>
                                {personas[activePersona].icon}
                             </div>
                             <span className={`text-xs font-mono uppercase tracking-widest ${personas[activePersona].textGlow}`}>
                                {personas[activePersona].role}
                             </span>
                         </div>

                         <h3 className="text-h2 md:text-h1 font-bold text-slate-900 leading-tight mb-8">
                            {personas[activePersona].title}
                         </h3>

                         <div className="grid grid-cols-1 gap-4 mb-10">
                             {/* Current Reality Box */}
                             <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                                 <div className="flex items-center gap-2 mb-3">
                                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                     <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Current Reality</span>
                                 </div>
                                 <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                                     {personas[activePersona].problem}
                                 </p>
                             </div>

                             {/* Impact Box */}
                             <div className={`p-5 rounded-2xl border bg-white ${personas[activePersona].borderLight}`}>
                                 <div className="flex items-center gap-2 mb-3">
                                     <div className={`w-1.5 h-1.5 rounded-full ${personas[activePersona].accentBg} animate-pulse`} />
                                     <span className={`text-[10px] font-mono uppercase tracking-widest ${personas[activePersona].textGlow}`}>MediKloud Impact</span>
                                 </div>
                                 <p className="text-slate-900 font-bold leading-relaxed text-sm md:text-base">
                                     {personas[activePersona].solution}
                                 </p>
                             </div>
                         </div>

                         {/* CTA Button */}
                         <button className={`w-full py-4 px-6 rounded-2xl text-white font-bold tracking-tight bg-gradient-to-r ${personas[activePersona].gradient} flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-btn group`}>
                             {personas[activePersona].buttonText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                      </motion.div>
                   </AnimatePresence>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
}
