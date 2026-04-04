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
  const colorRange = ["#f43f5e", "#f59e0b", "#3b82f6", "#4f46e5"]; // Rose, Amber, Blue, Indigo
  const processLineColor = useTransform(
    processScrollProgress,
    [0, 0.33, 0.66, 1],
    colorRange
  );

  const StepCard = ({ step, isEven, index, colorRange }: any) => (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-15% 0px", once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className={`bg-white border border-slate-200 p-8 rounded-3xl hover:border-slate-300 transition-all shadow-card hover:shadow-card-md group text-left`}
    >
      <div className={`flex flex-col items-start mb-6 space-y-2`}>
        <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase bg-slate-50 px-3 py-1 rounded-full border border-slate-200 w-fit">{step.step}</span>
        <h3 className="text-h3 font-bold text-slate-900 mt-3">{step.title}</h3>
        <span className={`text-sm font-medium italic opacity-80`} style={{ color: colorRange[index] }}>{step.highlight}</span>
      </div>
      
      <div className={`flex flex-col gap-3 items-start`}>
        {step.points.map((point: string, i: number) => (
          <div key={i} className={`flex items-start gap-3`}>
            <div className={`mt-1 shrink-0 opacity-70`} style={{ color: colorRange[index] }}>
              <CheckCircle2 size={16} />
            </div>
            <p className="text-slate-600 font-medium text-base text-left">{point}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const StepNode = ({ step, index, colorRange }: any) => (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
      viewport={{ margin: "-20% 0px", once: false }}
      className={`w-14 h-14 rounded-full p-0.5 shadow-card transition-colors duration-500 cursor-pointer z-30`}
      style={{ 
        background: `linear-gradient(135deg, ${colorRange[index]}, ${colorRange[index]}dd)`
      }}
    >
      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
         <div style={{ color: colorRange[index] }}>
           {step.icon}
         </div>
      </div>
    </motion.div>
  );

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
    },
    {
      step: "Day 05–10",
      title: "Medicine Choice & Partnership",
      highlight: "The right stock. The right profit.",
      points: [
        "We talk to your doctors to choose the right medicines for your patients.",
        "We make sure your pharmacy is 100% stocked from day one.",
        "We agree on a fair way to share the new profits with you."
      ],
      icon: <Handshake size={20} />,
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
    }
  ];

  return (
    <section className="relative bg-section-alt section-py border-t border-slate-100 overflow-hidden">
      <div className="container-page relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="badge badge-brand mb-8 px-4 py-2 text-[10px] uppercase tracking-widest gap-2"
        >
          <RefreshCcw size={14} />
          How It Works
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-section leading-[1.1] md:text-5xl md:leading-[1.1] tracking-tight mb-6"
        >
          From messy operations to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 px-1">high-profit pharmacy</span> in 30 days.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Zero downtime. Zero disruption. We handle the entire transition in 4 simple steps while you focus on your patients.
        </motion.p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="relative w-full" ref={processRef}>
        
        {/* The Central Background Line */}
        <div className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-4 bottom-4 w-1 bg-slate-200 rounded-full" />
        
        {/* The Scroll-Driven Active Line */}
        <motion.div 
          style={{ height: processLineHeight, backgroundColor: processLineColor }}
          className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-4 w-1 rounded-full origin-top z-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]" 
        />

        {/* The Steps */}
        <div className="space-y-12 md:space-y-16 relative z-10 pt-10 w-full">
          {processSteps.map((step, index) => {
            const isEven = index % 2 !== 0; // 0-indexed, so index 1 is Step 2
            
            return (
              <div key={step.step} className="relative z-20">
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-[1fr_120px_1fr] items-center w-full">
                  {/* Left Column */}
                  <div className={`${isEven ? 'order-3 pl-12' : 'order-1 pr-12 text-right'}`}>
                    <StepCard step={step} isEven={isEven} index={index} colorRange={colorRange} />
                  </div>

                  {/* Middle Column (Node) */}
                  <div className="order-2 flex justify-center relative z-20">
                    <StepNode step={step} index={index} colorRange={colorRange} />
                  </div>

                  {/* Right Column (Spacer) */}
                  <div className={`${isEven ? 'order-1' : 'order-3'}`} />
                </div>

                {/* Mobile Layout (Existing) */}
                <div className="md:hidden flex flex-col items-start pl-20 relative">
                  <div className="absolute left-8 -ml-7 top-0">
                    <StepNode step={step} index={index} colorRange={colorRange} />
                  </div>
                  <StepCard step={step} isEven={isEven} index={index} colorRange={colorRange} />
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
      </div>
      </div>
    </section>
  );
}
