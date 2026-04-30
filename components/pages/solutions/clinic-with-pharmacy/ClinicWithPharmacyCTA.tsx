"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, HeartPulse, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

interface ClinicWithPharmacyCTAProps {
  onBookDemo?: () => void;
  onTalkToExpert?: () => void;
}

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const ClinicWithPharmacyCTA = ({ onBookDemo, onTalkToExpert }: ClinicWithPharmacyCTAProps) => {
  return (
    <section className="section-py relative overflow-hidden">
      <DarkAtmosphere />

      <div className="container-page relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-100/90 text-xs font-bold backdrop-blur-md shadow-2xl tracking-wide no-select"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            Zero management load. 100% revenue capture.
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-display font-bold text-white leading-[1.05] tracking-tight px-4"
            >
              Start capturing the <br className="hidden md:block" />
              <span className="text-indigo-400">
                clinical value you're creating.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-body-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Transform your daily consultation flow into an automated revenue engine. Focus on your patients while we manage the pharmacy operations.
            </motion.p>
          </div>

          {/* Proof Grid with Hover Polish */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 px-4 sm:px-0">
            {[
              { icon: Activity, title: "Revenue recovery", subtitle: "from day one", color: "text-indigo-400", glow: "group-hover:shadow-glow" },
              { icon: HeartPulse, title: "Seamless patient", subtitle: "compliance", color: "text-blue-400", glow: "group-hover:shadow-glow" },
              { icon: ShieldCheck, title: "Hands-off", subtitle: "operations", color: "text-indigo-400", glow: "group-hover:shadow-glow" }
            ].map((item, i) => (
              <div key={i} className={`bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-md group hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 text-left relative overflow-hidden shadow-2xl ${item.glow}`}>
                <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-12 group-hover:rotate-0">
                  <Sparkles className="w-12 h-12 text-white/[0.03]" />
                </div>
                <item.icon className={`w-8 h-8 ${item.color} mb-6 group-hover:scale-110 transition-transform duration-500`} />
                <p className="font-bold text-white text-lg leading-tight">
                  {item.title} <br/>
                  <span className="text-slate-500 group-hover:text-slate-400 transition-colors uppercase text-xxs tracking-widest block mt-1">{item.subtitle}</span>
                </p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
          >
            <button 
              onClick={onBookDemo}
              className="btn-cta-dark min-w-[280px] group shadow-btn active:scale-[0.98] transition-all"
            >
              Launch your clinic engine
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={onTalkToExpert}
              className="px-8 py-3.5 text-white/70 hover:text-white font-bold text-base transition-all rounded-xl border border-white/10 hover:bg-white/5 active:scale-[0.98] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to our clinic experts
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};