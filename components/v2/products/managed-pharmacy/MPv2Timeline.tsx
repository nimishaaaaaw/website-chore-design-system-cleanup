"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2,
  RefreshCcw,
  Search,
  FileText,
  Handshake,
  Rocket,
  TrendingUp,
} from 'lucide-react';

export function MPv2Timeline() {
  const processRef = useRef(null);
  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });
  const processLineHeight = useTransform(processScrollProgress, [0, 1], ["0%", "100%"]);

  const processSteps = [
    {
      step: "Day 01",
      title: "Clinical & Ops Audit",
      highlight: "We find the leaks.",
      points: [
        "Audit physical inventory and existing software.",
        "Analyze manual billing gaps and vendor terms.",
        "Present a transparent cash-loss report."
      ],
      icon: <Search size={20} />,
      color: "from-slate-600 to-slate-800",
      iconColor: "text-slate-400"
    },
    {
      step: "Day 05",
      title: "Formulary Consultation",
      highlight: "You define the medicine; we stock it.",
      points: [
        "Collaborate directly with your doctors.",
        "Map opening inventory to exact prescribing habits.",
        "Ensure a flawless, target 100% fill rate on Day 1."
      ],
      icon: <FileText size={20} />,
      color: "from-blue-500 to-indigo-600",
      iconColor: "text-blue-400"
    },
    {
      step: "Day 10",
      title: "Partnership & Terms",
      highlight: "We lock in your financials.",
      points: [
        "Replace fixed vendor rents, or operational losses, with scalable upside.",
        "Agree on a transparent retail revenue share.",
        "Sign a risk-free commercial partnership."
      ],
      icon: <Handshake size={20} />,
      color: "from-emerald-400 to-teal-600",
      iconColor: "text-emerald-400"
    },
    {
      step: "Day 15-28",
      title: "Rapid Deployment",
      highlight: "We install chain-level infrastructure.",
      points: [
        "Install custom modular shelving and cold-chain infrastructure.",
        "Deploy AI-powered HMS and fund 100% of opening inventory.",
        "Execute final physical swap overnight (Zero downtime)."
      ],
      icon: <Rocket size={20} />,
      color: "from-orange-400 to-rose-500",
      iconColor: "text-orange-400"
    },
    {
      step: "Day 30",
      title: "Go-Live & Growth",
      highlight: "We take the counter.",
      points: [
        "Licensed pharmacists begin barcode dispensing.",
        "Daily operational headaches instantly drop to zero.",
        "Automated WhatsApp refills capture chronic patients."
      ],
      icon: <TrendingUp size={20} />,
      color: "from-rose-500 to-purple-600",
      iconColor: "text-rose-400"
    }
  ];

  return (
    <div className="relative pt-32 mt-20 border-t border-slate-200 pb-32 z-10 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-[0.3em] uppercase mb-8"
        >
          <RefreshCcw size={14} />
          How It Works
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-h2 md:text-h1 font-bold text-slate-900 leading-tight tracking-tight mb-6"
        >
          From operational chaos to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">fully managed engine</span> in 30 days.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          We do not disrupt your clinic. We execute a rigorous, 5-step operational takeover that respects your clinical authority and locks in your new profit structure without a single day of downtime.
        </motion.p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8" ref={processRef}>
        
        {/* The Central Background Line */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />
        
        {/* The Scroll-Driven Active Line */}
        <motion.div 
          style={{ height: processLineHeight }}
          className="absolute left-8 md:left-1/2 top-4 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-rose-500 -translate-x-1/2 rounded-full origin-top z-0" 
        />

        {/* The Steps */}
        <div className="space-y-16 md:space-y-24 relative z-10 pt-10">
          {processSteps.map((step, index) => {
            const isEven = index % 2 !== 0; // 0-indexed, so index 1 is Step 2
            
            return (
              <div key={step.step} className="flex flex-col md:flex-row items-center justify-between w-full relative">
                
                {/* Left Side Content (Empty for Even steps on Desktop) */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:order-3 md:pl-16' : 'md:order-1 md:pr-16 md:text-right'} pl-20 md:pl-0 order-2 mt-4 md:mt-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-15% 0px", once: true }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className={`bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 transition-all shadow-card hover:shadow-card-md group`}
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} mb-6 space-y-2`}>
                      <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase bg-slate-50 px-3 py-1 rounded-full border border-slate-200 w-fit">{step.step}</span>
                      <h3 className="text-h3 font-bold text-slate-900 mt-3">{step.title}</h3>
                      <span className={`text-sm font-medium ${step.iconColor.replace('400', '600')} italic`}>{step.highlight}</span>
                    </div>
                    
                    <div className={`flex flex-col gap-3 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                      {step.points.map((point, i) => (
                        <div key={i} className={`flex items-start gap-3 ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                          <div className={`mt-1 shrink-0 ${step.iconColor.replace('400', '500')}`}>
                            <CheckCircle2 size={16} />
                          </div>
                          <p className="text-slate-600 font-medium text-base">{point}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Central Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-20% 0px", once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} p-0.5 shadow-card`}
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                       <div className={`${step.iconColor.replace('400', '500')}`}>
                         {step.icon}
                       </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side Content (Empty for Odd steps on Desktop) */}
                <div className={`w-full md:w-5/12 hidden md:block ${isEven ? 'order-1' : 'order-3'}`} />
                
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
