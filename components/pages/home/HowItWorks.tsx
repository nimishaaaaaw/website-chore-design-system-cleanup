"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MonitorSmartphone, PackageOpen, CheckCircle, Truck, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: MonitorSmartphone,
    title: "Technology Deployment",
    description: "The moment you write a prescription in the clinic, it flows directly to the billing counter. No paper slips, and no patients wandering out the door."
  },
  {
    icon: PackageOpen,
    title: "End-to-End Operations",
    description: "We fund the inventory and place trained pharmacists inside your facility. You get a professionally managed pharmacy with zero hassle and without spending a single rupee."
  },
  {
    icon: CheckCircle,
    title: "100% Fulfillment",
    description: "Our system predicts what your doctors will prescribe based on patient flow. Medicines are always in stock so patients get exactly what they need on the spot."
  },
  {
    icon: Truck,
    title: "Continuous Care",
    description: "We track monthly refills for your chronic patients. Through automated WhatsApp reminders and doorstep medicine delivery, we ensure they never switch to a retail chemist."
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 bg-section-surface relative overflow-hidden" id="how-it-works">

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={containerRef}>

        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-wrap justify-center !mb-6"
          >
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text">The Operational Model</span>
            <div className="eyebrow-line-l" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-h2"
          >
            How our <span className="text-brand-indigo-600 drop-shadow-sm pr-2">hospital pharmacy management</span> works.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Track */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 pointer-events-none" />

          {/* Animated active line */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500 -translate-x-1/2 rounded-full pointer-events-none z-10"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-32">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex items-start w-full group">

                  {/* Center Node */}
                  <div className="absolute left-[8px] md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-20 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-indigo-100">
                    <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Icon className="w-3 h-3 md:w-5 md:h-5 text-indigo-600" />
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-start w-full z-10 pt-2">
                    <div className="w-[45%] pr-12 text-right">
                      {isEven ? (
                        <>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                          <p className="premium-p !text-lg !leading-relaxed">{step.description}</p>
                        </>
                      ) : (
                        <div className="text-sm font-bold text-slate-300 tracking-widest uppercase mt-2">Step 0{index + 1}</div>
                      )}
                    </div>

                    <div className="w-[10%] shrink-0" />

                    <div className="w-[45%] pl-12 text-left">
                      {!isEven ? (
                        <>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                          <p className="premium-p !text-lg !leading-relaxed">{step.description}</p>
                        </>
                      ) : (
                        <div className="text-sm font-bold text-slate-300 tracking-widest uppercase mt-2">Step 0{index + 1}</div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-col pl-20 pb-4 w-full z-10">
                    <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Step 0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="premium-p !leading-relaxed">{step.description}</p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
