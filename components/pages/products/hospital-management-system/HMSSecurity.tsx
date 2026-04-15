"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Server, 
  Lock, 
  Key 
} from 'lucide-react';

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const HMSSecurity = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-0 text-white border-t border-slate-800">
      <DarkAtmosphere />

      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Copy & Features */}
            <div className="w-full lg:w-1/2 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
              <div className="flex items-center gap-3 mb-8">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text !text-brand-400">Bank-Grade Security</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <p className="text-lg font-medium text-slate-400 leading-relaxed max-w-xl animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
                Patient records are your facility&apos;s most valuable asset. MediKloud protects them with advanced encryption and an architecture designed for total privacy. We handle the security overhead so you can focus entirely on care.
              </p>
            </div>

          {/* Right Column: Features Grid (New Streamlined Layout) */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              { [
                {
                  icon: <Database className="w-5 h-5 text-brand-400" />,
                  title: "100% Data Ownership",
                  desc: "Your data is yours. Private storage with absolute access control."
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
                  title: "ABDM & HIPAA Compliant",
                  desc: "Built to meet rigorous Indian and global healthcare standards."
                },
                {
                  icon: <Server className="w-5 h-5 text-purple-400" />,
                  title: "Zero-Loss Continuity",
                  desc: "Automated backups and 99.9% uptime. Your clinic never stops."
                },
                {
                  icon: <Lock className="w-5 h-5 text-amber-400" />,
                  title: "Staff Access Controls",
                  desc: "Granular controls ensure only authorized staff view sensitive data."
                }
              ].map((item, idx) => (
                <div 
                   key={idx} 
                   className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-all group"
                >
                  <div className="bg-white/5 w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 mb-4 shadow-inner">
                    {React.cloneElement(item.icon as React.ReactElement, { strokeWidth: 1.5 } as any)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Outcome Banner: GOLD STANDARD DARK REFIT */}
        <div 
          className="mt-16 md:mt-24 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-card-xl relative overflow-hidden group border border-white/5"
        >
          <DarkAtmosphere showStars={false} />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-600 rounded-full mb-12 opacity-60"></div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-[1.1] tracking-tight text-balance mb-8">
              Absolute peace of mind. <br className="hidden md:block" />
              <span className="text-indigo-400">Absolute data integrity.</span>
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck strokeWidth={1.5} className="w-5 h-5 text-brand-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">ABDM Compliant</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <div className="flex items-center gap-2">
                <Lock strokeWidth={1.5} className="w-5 h-5 text-brand-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">AES-256 Encrypted</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
