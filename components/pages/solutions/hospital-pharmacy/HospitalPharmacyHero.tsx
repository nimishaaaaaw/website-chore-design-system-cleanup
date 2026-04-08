"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainerLocal: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalPharmacyHero = ({ onBookDemo, onViewDemo }: { onBookDemo: () => void, onViewDemo?: () => void }) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden bg-white">
      <div className="blob-layer pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px] animate-float-slow opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[100px] animate-pulse opacity-50"></div>
      </div>

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainerLocal}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start justify-start gap-3 mb-8">
            <span className="eyebrow-text text-blue-600">For Clinics & Hospitals with a Pharmacy</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <motion.h1 
                variants={fadeInUp}
                className="mb-5 md:mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
              >
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.2] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-3 mb-2 md:mb-4">
                  Why are patients buying outside
                </span>
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.02em] text-indigo-600">
                  when you have a pharmacy in-house?
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-body-lg text-slate-600 max-w-xl font-medium leading-relaxed"
              >
                Every day, patients take your prescriptions to local chemists or online delivery apps. You lose the revenue, and you lose control of their care. Let's secure their continuous care—and your clinic's growth.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button 
                  onClick={onBookDemo}
                  className="btn-primary min-w-[240px] group shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  Book a Free Audit
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-all group px-4 py-2"
                >
                  See how it works
                </button>
              </motion.div>
            </div>

            {/* Visual Side - Clean, Professional Audit Card */}
            <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0">
              <div className="relative max-w-[420px] mx-auto lg:ml-auto">
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-indigo-600/10 border border-slate-100 relative z-20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Activity className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Typical Clinic</p>
                        <p className="text-sm font-bold text-slate-900">Pharmacy Performance</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Prescriptions Written</span>
                        <span className="text-slate-900">100%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Filled In-House</span>
                        <span className="text-rose-500 font-bold">~ 40%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className="w-[40%] h-full bg-rose-400 rounded-full"></div>
                        <motion.div 
                          initial={{ x: "-100%" }} animate={{ x: "250%" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 left-0 w-1/4 h-full bg-white/30 skew-x-12"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Chronic Patient Retention</span>
                        <span className="text-rose-500 font-bold">Low</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className="w-[25%] h-full bg-rose-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium text-center">
                      We help clinics completely close the gap between <span className="font-bold text-indigo-600">consultation and fulfillment</span>.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-full mix-blend-overlay z-30"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-50 rounded-full blur-[40px] z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
