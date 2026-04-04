"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Smartphone, ArrowRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction as keyof typeof directions] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ClinicWP_InfrastructureGap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            It’s not a demand problem.<br />
            <span className="text-blue-600">It’s an infrastructure gap.</span>
          </h2>
          <p className="text-xl text-slate-600">
            A traditional clinic pharmacy isn’t built to compete with modern convenience.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 h-full">
              <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <XCircle className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">You're operating with:</h3>
              <ul className="space-y-4">
                {[
                  "One pharmacist doing everything",
                  "No real inventory intelligence",
                  "No patient follow-up system",
                  "No delivery convenience",
                  "No control over leakages"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 relative z-10">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Meanwhile, the competition:</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Online apps are one tap away",
                  "Retail chains offer seamless convenience",
                  "Patients prioritize ease over initial intent"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
