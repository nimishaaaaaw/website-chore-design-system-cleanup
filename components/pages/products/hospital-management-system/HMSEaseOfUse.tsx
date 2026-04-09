"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  MousePointerClick, 
  Layout, 
  Rocket,
  Activity,
  Calendar,
  HeartPulse
} from 'lucide-react';

export const HMSEaseOfUse = () => {
  return (
    <section className="relative overflow-hidden bg-white section-py-premium">
      {/* Gold Standard Atmosphere */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="noise-texture !opacity-[0.02]" />

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Mobile UI Visual Mockup (Forensic Fidelity) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-card-lg border-[6px] border-slate-800"
            >
              {/* Phone Screen */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative shadow-inner">
                {/* Status Bar Mock */}
                <div className="h-6 w-full bg-brand-600 flex justify-center items-center">
                  <div className="w-24 h-4 bg-slate-900 rounded-b-xl absolute top-0"></div>
                </div>
                
                {/* App Header */}
                <div className="bg-brand-600 px-5 pt-4 pb-6 text-white rounded-b-3xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/10">
                        <span className="font-bold text-[10px] uppercase">Dr</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-100/90 uppercase tracking-widest font-bold">Good Morning</p>
                        <p className="text-xs font-bold text-white">Dr. Sharma</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Activity strokeWidth={1.5} className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* Quick Stats */}
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20 flex justify-between">
                    <div>
                      <p className="text-[10px] text-blue-100/90 uppercase tracking-widest font-bold">Patients</p>
                      <p className="text-lg font-bold text-white">24</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-blue-100/90 uppercase tracking-widest font-bold">Wait Time</p>
                      <p className="text-lg font-bold text-white">8m</p>
                    </div>
                  </div>
                </div>

                {/* App Body - One Tap Actions */}
                <div className="p-5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Next Patient</h4>
                  
                  {/* Active Patient Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 mb-6 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-success"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Aarav Patel</h5>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 tracking-wide">M • 34 yrs • Fever</p>
                      </div>
                      <span className="badge-success !text-[9px] !px-2 !py-0.5">Waiting</span>
                    </div>
                    {/* One Tap Button */}
                    <button className="w-full bg-indigo-50 text-brand-indigo-600 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-brand-indigo-100 hover:bg-indigo-100 transition-colors">
                      <MousePointerClick strokeWidth={1.5} className="w-4 h-4" />
                      Start Consultation
                    </button>
                  </div>

                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 group-hover:scale-110 transition-transform duration-300">
                        <Calendar strokeWidth={1.5} className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Schedule</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                        <HeartPulse strokeWidth={1.5} className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Prescribe</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>

          {/* Right Column: Copy & Bullet Points */}
          <div className="lg:col-span-7">
            <header className="header-lock text-center lg:text-left mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <span className="eyebrow-line-l" />
                  <span className="eyebrow-text">Clinician First</span>
                  <span className="eyebrow-line-r" />
                </div>
                <h2 className="premium-h2 mb-8">
                  Built for People, <br className="hidden md:block" />
                  <span className="text-brand-indigo-600">Not for Manuals.</span>
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="premium-p intro-lock"
              >
                If you can use a smartphone, you can use MediKloud HMS. We've eliminated the steep learning curve of traditional healthcare software with a clean, clinical interface that requires <strong className="text-slate-900 font-bold uppercase tracking-tight">Zero Training.</strong>
              </motion.p>
            </header>

            <div className="space-y-10 mb-12">
              {[
                {
                  icon: <Smartphone strokeWidth={1.5} className="w-6 h-6 text-brand-600" />,
                  title: "Smartphone-Simple",
                  desc: "A native mobile experience designed for doctors who move fast."
                },
                {
                  icon: <MousePointerClick strokeWidth={1.5} className="w-6 h-6 text-emerald-600" />,
                  title: "One-Tap Workflows",
                  desc: "From patient check-in to digital prescriptions, every task is a single tap away."
                },
                {
                  icon: <Layout strokeWidth={1.5} className="w-6 h-6 text-amber-600" />,
                  title: "No Clunky Screens",
                  desc: "Clean, modern design that prioritizes patient data over interface noise."
                },
                {
                  icon: <Rocket strokeWidth={1.5} className="w-6 h-6 text-purple-600" />,
                  title: "Fast Onboarding",
                  desc: "Get your entire reception and clinical staff live in under 2 hours."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-6 group"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-card group-hover:border-indigo-200 group-hover:shadow-card-md transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Outcome Banner: GOLD STANDARD DARK REFIT */}
        <div 
          className="mt-16 md:mt-24 bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-card-xl relative overflow-hidden group border border-white/5"
        >
          {/* Atmospheric Primitives (Dark) */}
          <div className="tech-grid-overlay !opacity-[0.05]" />
          <div className="noise-texture !opacity-[0.03]" />
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-500/10 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute -bottom-1/2 left-0 w-72 h-72 bg-brand-indigo-600/10 blur-[100px] rounded-full" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-600 rounded-full mb-10 opacity-60"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-header-lock mx-auto leading-[1.2] tracking-tight text-balance">
              Spend your time on the patient, 
              <br className="hidden md:block" />
              <span className="text-indigo-400">not the platform.</span>
            </h3>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-600" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Clinical Efficiency</span>
              </div>
              <div className="w-px h-3 bg-slate-700" />
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-600" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Zero Cognitive Load</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
