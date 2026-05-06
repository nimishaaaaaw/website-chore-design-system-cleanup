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

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { STATS_PARTICLE_POSITIONS } from '@/components/pages/home/HomeData';

export const HMSEaseOfUse = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-0">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="noise-texture !opacity-[0.02]" />

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-card-lg border-[6px] border-slate-800"
            >
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative shadow-inner">

                <div className="h-6 w-full bg-brand-600 flex justify-center items-center">
                  <div className="w-24 h-4 bg-slate-900 rounded-b-xl absolute top-0" />
                </div>

                <div className="bg-brand-600 px-5 pt-4 pb-6 text-white rounded-b-3xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/10">
                        <span className="font-bold text-xxs uppercase">Dr</span>
                      </div>
                      <div>
                        <p className="text-xxs text-blue-100/90 uppercase tracking-widest font-bold">Good Morning</p>
                        <p className="text-xs font-bold text-white">Dr. Sharma</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Activity strokeWidth={1.5} className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20 flex justify-between">
                    <div>
                      <p className="text-xxs text-blue-100/90 uppercase tracking-widest font-bold">Patients</p>
                      <p className="text-body-lg font-bold text-white">24</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xxs text-blue-100/90 uppercase tracking-widest font-bold">Wait Time</p>
                      <p className="text-body-lg font-bold text-white">8m</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Next Patient</h4>

                  <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-success" />
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">Aarav Patel</h5>
                        <p className="text-xxs font-bold text-slate-500 mt-1 tracking-wide">M • 34 yrs • Fever</p>
                      </div>
                      <span className="text-xxxs badge badge-success bg-success-light/50">Waiting</span>
                    </div>
                    <button className="w-full bg-indigo-50 text-indigo-600 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-brand-indigo-100 hover:bg-indigo-100 transition-colors">
                      <MousePointerClick strokeWidth={1.5} className="w-4 h-4" />
                      Start Consultation
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 group-hover:scale-110 transition-transform duration-300">
                        <Calendar strokeWidth={1.5} className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Schedule</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-success-light/50 p-3 rounded-xl border border-success-light group-hover:scale-110 transition-transform duration-300">
                        <HeartPulse strokeWidth={1.5} className="w-5 h-5 text-success" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Prescribe</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <header className="header-lock text-center lg:text-left mb-12">
              <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
                <div className="eyebrow-wrap justify-center lg:justify-start">
                  <span className="eyebrow-line-l" />
                  <span className="eyebrow-text">Clinician First</span>
                  <span className="eyebrow-line-r" />
                </div>
                <h2 className="premium-h2 mb-8">
                  Built for Modern Clinics, <br className="hidden md:block" />
                  <span className="text-indigo-600">Not for IT Teams.</span>
                </h2>
              </div>

              <p className="premium-p intro-lock animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
                If you can use a smartphone, you can use MediKloud HMS. We've eliminated the steep learning curve of traditional healthcare software with a clean, clinical interface that requires{' '}
                <strong className="text-slate-900 font-bold uppercase tracking-tight">Zero Training.</strong>
              </p>
            </header>

            <div className="space-y-10 mb-12">
              {[
                {
                  icon: <Smartphone strokeWidth={1.5} className="w-6 h-6 text-brand-600" />,
                  title: "Smartphone-Simple",
                  desc: "A mobile-first experience designed for clinics that move fast."
                },
                {
                  icon: <MousePointerClick strokeWidth={1.5} className="w-6 h-6 text-success" />,
                  title: "One-Tap Workflows",
                  desc: "From reception check-in to digital prescriptions and final billing, every task is a single tap away."
                },
                {
                  icon: <Layout strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
                  title: "No Clunky Screens",
                  desc: "Clean, modern design that prioritizes patient data over interface noise."
                },
                {
                  icon: <Rocket strokeWidth={1.5} className="w-6 h-6 text-violet-500" />,
                  title: "2-Hour Setup",
                  desc: "Get your entire reception and clinical staff live in under 2 hours."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-6 group"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-card group-hover:border-brand-indigo-200 group-hover:shadow-card-md transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-h3 font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 rounded-3xl p-12 lg:p-20 text-center shadow-card-lg relative overflow-hidden border border-white/5">
          <DarkAtmosphere />

          <div className="absolute inset-0 pointer-events-none">
            {typeof STATS_PARTICLE_POSITIONS !== 'undefined' && STATS_PARTICLE_POSITIONS.slice(0, 20).map((pos, index) => (
              <div
                key={index}
                className="absolute w-0.5 h-0.5 rounded-full bg-white opacity-20"
                style={{
                  left: pos.left,
                  top: pos.top,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 bg-brand-600 rounded-full mb-10 opacity-60" />
            <h3 className="text-2xl sm:text-h1 md:text-display-lg font-bold text-white max-w-[1000px] mx-auto leading-[1.1] tracking-tight text-balance">
              Spend your time on the patient,{' '}
              <br className="hidden md:block" />
              <span className="text-indigo-400">not the platform.</span>
            </h3>

            <div className="mt-10 flex items-center gap-6">
              <div className="trust-chip">
                <span className="trust-chip-dot" />
                <span className="trust-chip-text text-slate-400">Clinical Efficiency</span>
              </div>
              <div className="w-px h-3 bg-slate-500" />
              <div className="trust-chip">
                <span className="trust-chip-dot" />
                <span className="trust-chip-text text-slate-400">Zero Cognitive Load</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};