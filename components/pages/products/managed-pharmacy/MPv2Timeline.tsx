"use client";

import React, { useRef } from 'react';
import { premiumEase } from '@/lib/animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2,
  RefreshCcw,
  Search,
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
  const processLineColor = "#4f46e5"; // Strict Core Indigo

  const StepCard = ({ step, isEven, index }: any) => (
    <motion.div 
      initial={false}
      whileInView={{ 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" 
      }}
      viewport={{ margin: "-25%", once: false }}
      transition={{ duration: 1 }}
      className={`bg-white border ${step.theme.border} p-8 lg:p-10 rounded-[2.5rem] shadow-sm group text-left transition-shadow duration-700`}
    >
      <div className="flex flex-col items-start mb-6 space-y-2">
        <span className={`text-xxs font-bold tracking-widest uppercase ${step.theme.bg} ${step.theme.base} px-3 py-1.5 rounded-xl border ${step.theme.border} w-fit`}>
          {step.step}
        </span>
        <h3 className="premium-h3 mt-3">{step.title}</h3>
        <span className={`text-sm font-bold italic ${step.theme.base}`}>{step.highlight}</span>
      </div>
      
      <div className="flex flex-col gap-4 items-start">
        {step.points.map((point: string, i: number) => (
          <div key={i} className="flex items-start gap-3 text-slate-700 font-medium">
            <div className={`mt-1 shrink-0 ${step.theme.base}`}>
              <CheckCircle2 size={18} strokeWidth={1.5} />
            </div>
            <p className="premium-p !text-sm lg:!text-base">{point}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const StepNode = ({ step }: any) => (
    <div 
      className={`w-14 h-14 rounded-full p-0.5 shadow-card-sm transition-all duration-500 cursor-pointer z-30 bg-white border-2 border-slate-100 ${step.theme.node}`}
    >
      <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center text-slate-300 transition-colors">
         <div className="w-4 h-4 rounded-full bg-current" />
      </div>
    </div>
  );

  const processSteps = [
    {
      step: "Day 01",
      title: "Clinic Blueprint",
      highlight: "We find the leaks.",
      points: [
        "Check your current stock and billing systems.",
        "Find exactly where you are losing money.",
        "Show you a clear report of your missing profits."
      ],
      icon: <Search size={24} strokeWidth={1.5} />,
      theme: {
        base: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        node: "hover:border-blue-500 hover:text-blue-600"
      }
    },
    {
      step: "Day 05–10",
      title: "Medicine Setup",
      highlight: "The right stock. The right profit.",
      points: [
        "Work with your doctors to pick the exact medicines they prescribe.",
        "Make sure we can fill every single prescription on day one.",
        "Sign a simple, transparent service agreement."
      ],
      icon: <Handshake size={24} strokeWidth={1.5} />,
      theme: {
        base: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        node: "hover:border-emerald-500 hover:text-emerald-600"
      }
    },
    {
      step: "Day 15-28",
      title: "Physical Install",
      highlight: "Zero disruption to your clinic.",
      points: [
        "Set up modern shelves and medical-grade fridges.",
        "Install our smart billing and inventory software.",
        "Swap out all the old stock overnight so you don't miss a single sale."
      ],
      icon: <Rocket size={24} strokeWidth={1.5} />,
      theme: {
        base: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        node: "hover:border-purple-500 hover:text-purple-600"
      }
    },
    {
      step: "Day 30",
      title: "Go-Live",
      highlight: "We take the counter.",
      points: [
        "Our licensed pharmacists take over the daily operations.",
        "Your pharmacy headaches completely disappear.",
        "We automatically message patients to capture their monthly refills."
      ],
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
      theme: {
        base: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        node: "hover:border-amber-500 hover:text-amber-600"
      }
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
             <RefreshCcw size={14} className="text-indigo-600" /> The 30-Day Setup
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
          Zero downtime. Zero disruption. We handle the entire transition in four steps while you focus on patient care.
        </motion.p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="relative w-full" ref={processRef}>
        
        {/* The Central Background Line */}
        <div className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-8 bottom-8 w-1 bg-slate-100 rounded-full" />
        
        {/* The Scroll-Driven Active Line */}
        <motion.div 
          style={{ height: processLineHeight, backgroundColor: processLineColor }}
          className="absolute left-8 -ml-0.5 md:left-1/2 md:-ml-0.5 top-8 w-1 rounded-full origin-top z-0 shadow-sm" 
        />

        {/* The Steps */}
        <div className="space-y-12 md:space-y-16 relative z-10 pt-10 w-full">
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
                    <StepNode step={step} />
                  </div>

                  {/* Right Column (Spacer) */}
                  <div className={`${isEven ? 'order-1' : 'order-3'}`} />
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-start pl-20 relative">
                  <div className="absolute left-8 -ml-7 top-0">
                    <StepNode step={step} />
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
