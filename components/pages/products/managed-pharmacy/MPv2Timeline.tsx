"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2,
  RefreshCcw,
  Search,
  Handshake,
  Rocket,
  TrendingUp,
} from 'lucide-react';

const premiumEase = [0.16, 1, 0.3, 1] as any;

export function MPv2Timeline() {
  const processRef = useRef(null);
  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });
  
  const processLineHeight = useTransform(processScrollProgress, [0, 1], ["0%", "100%"]);
  const processLineColor = "#4f46e5"; // Strict Core Indigo

  const StepCard = ({ step, isEven, index }: any) => (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{ duration: 0.8, ease: premiumEase }}
      className={`bg-white border border-slate-200 p-8 lg:p-10 rounded-[2.5rem] hover:border-indigo-100 transition-all shadow-card-sm hover:shadow-card-md group text-left group-hover:z-20`}
    >
      <div className={`flex flex-col items-start mb-6 space-y-2`}>
        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 w-fit">{step.step}</span>
        <h3 className="premium-h3 mt-3">{step.title}</h3>
        <span className={`text-sm font-bold italic text-indigo-600`}>{step.highlight}</span>
      </div>
      
      <div className={`flex flex-col gap-4 items-start`}>
        {step.points.map((point: string, i: number) => (
          <div key={i} className={`flex items-start gap-3 text-slate-700 font-medium`}>
            <div className={`mt-1 shrink-0 text-indigo-600`}>
              <CheckCircle2 size={18} strokeWidth={1.5} />
            </div>
            <p className="premium-p !text-sm lg:!text-base">{point}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const StepNode = ({ index }: any) => (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      viewport={{ margin: "-130px", once: false }}
      className={`w-14 h-14 rounded-full p-0.5 shadow-card-sm transition-colors duration-500 cursor-pointer z-30 bg-white border-2 border-slate-100`}
    >
      <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
         <div className="w-4 h-4 rounded-full bg-current" />
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
      icon: <Search size={24} strokeWidth={1.5} />,
    },
    {
      step: "Day 05–10",
      title: "Medicine Choice",
      highlight: "The right stock. The right profit.",
      points: [
        "Consultation with your doctors to optimize stock mix.",
        "Ensure 100% fulfillability from opening day.",
        "Finalize transparent revenue-sharing terms."
      ],
      icon: <Handshake size={24} strokeWidth={1.5} />,
    },
    {
      step: "Day 15-28",
      title: "Rapid Deployment",
      highlight: "Zero downtime infrastructure.",
      points: [
        "Install modular shelving and cold-chain hardware.",
        "Deploy AI-powered demand forecasting HMS.",
        "Execute final stock swap overnight (Zero downtime)."
      ],
      icon: <Rocket size={24} strokeWidth={1.5} />,
    },
    {
      step: "Day 30",
      title: "Go-Live & Growth",
      highlight: "We take the counter.",
      points: [
        "Licensed pharmacists begin barcode dispensing.",
        "Daily operational headaches drop to zero.",
        "Automated WhatsApp refills capture chronic patients."
      ],
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
    }
  ];

  return (
    <section className="relative bg-white section-py border-t border-slate-100 overflow-hidden">
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10 w-full">
      
      {/* Gold Standard Header Section */}
      <div className="header-lock text-center mb-16 lg:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: premiumEase }}
          className="eyebrow-wrap justify-center mb-6"
        >
          <span className="eyebrow-line-l"></span>
          <span className="eyebrow-text flex items-center gap-2">
             <RefreshCcw size={14} className="text-indigo-600" /> Implementation Roadmap
          </span>
          <span className="eyebrow-line-r"></span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
          className="premium-h2 mb-6"
        >
          From manual operations to a <br className="hidden md:block" />
          <span className="text-indigo-600">high-profit hub</span> in 30 days.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
          className="premium-p intro-lock"
        >
          Zero downtime. Zero disruption. We handle the entire transition in four clinical steps while you focus on patient care.
        </motion.p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="relative w-full" ref={processRef}>
        
        {/* The Central Background Line */}
        <div className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-8 bottom-8 w-1 bg-slate-100 rounded-full" />
        
        {/* The Scroll-Driven Active Line */}
        <motion.div 
          style={{ height: processLineHeight, backgroundColor: processLineColor }}
          className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-8 w-1 rounded-full origin-top z-0 shadow-sm" 
        />

        {/* The Steps */}
        <div className="space-y-12 md:space-y-24 relative z-10 pt-10 w-full">
          {processSteps.map((step, index) => {
            const isEven = index % 2 !== 0; // index 1, 3 are even
            
            return (
              <div key={step.step} className="relative z-20">
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-[1fr_120px_1fr] items-center w-full">
                  {/* Left Column */}
                  <div className={`${isEven ? 'order-3 pl-12' : 'order-1 pr-12 text-right'}`}>
                    <StepCard step={step} isEven={isEven} index={index} />
                  </div>

                  {/* Middle Column (Node) */}
                  <div className="order-2 flex justify-center relative z-20">
                    <StepNode index={index} />
                  </div>

                  {/* Right Column (Spacer) */}
                  <div className={`${isEven ? 'order-1' : 'order-3'}`} />
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-start pl-20 relative">
                  <div className="absolute left-8 -ml-7 top-0">
                    <StepNode index={index} />
                  </div>
                  <StepCard step={step} isEven={isEven} index={index} />
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
