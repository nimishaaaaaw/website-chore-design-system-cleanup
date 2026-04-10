"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserPlus, Pill, CheckCircle2, Activity, Home, PackageCheck, Sparkles, Monitor, Truck, TrendingUp } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const premiumEase = [0.16, 1, 0.3, 1] as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicHowItWorks = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden border-t border-slate-100" id="how-it-works">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <div className="eyebrow-wrap justify-center mb-6">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The Infrastructure Upgrade</span>
            <span className="eyebrow-line-r"></span>
          </div>
          <h2 className="premium-h2">
            A <span className="text-indigo-600">seamless experience</span> for patients, 
            a <span className="text-indigo-600">premium experience</span> for you.
          </h2>
        </motion.div>
l
        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-breathing">
          {/* Feature 1: Digitize */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-6 lg:pr-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/50">
                <Monitor size={24} strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3">
                Digitize in <span className="text-indigo-600">seconds.</span>
              </h3>
              <p className="premium-p">
                Your consultation workflow doesn't change. Our AI-assisted HMS handles registration, billing, and EHR in a single interface that requires zero training.
              </p>
              <ul className="space-y-3">
                {[
                  "One-click OPD registration & queue management",
                  "AI Scribe for effortless digital prescriptions",
                  "Real-time pharmacy stock visibility"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors group">
                  See how HMS works
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-tinted relative overflow-hidden shadow-card p-8 h-[360px] flex items-center justify-center group group-hover:z-20 rounded-[2.5rem] border border-brand-indigo-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-[50px] rounded-full pointer-events-none" />
              <div className="w-full max-w-[280px] bg-white rounded-2xl border-[6px] border-slate-100 shadow-2xl overflow-hidden relative z-10 flex flex-col h-full max-h-[300px] group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <UserPlus size={16} className="text-indigo-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="w-20 h-2 bg-slate-200 rounded-full mb-1.5" />
                    <div className="w-12 h-1.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="p-5 space-y-5 flex-1 flex flex-col justify-between">
                   <div className="space-y-4">
                     <div className="flex gap-3 items-start">
                        <Pill size={18} className="text-indigo-600 shrink-0" strokeWidth={1.5} />
                        <div className="flex-1 space-y-2 mt-1">
                           <div className="h-2.5 bg-slate-900 rounded-full" />
                           <div className="h-2 bg-slate-400 rounded-full" />
                        </div>
                     </div>
                   </div>
                   <div className="w-full py-3 bg-indigo-600 rounded-xl flex items-center justify-center gap-2 shadow-btn">
                     <span className="text-white text-sm font-bold">Route Order</span>
                     <CheckCircle2 size={16} className="text-white" strokeWidth={1.5} />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Deliver */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 bg-gradient-tinted shadow-card p-8 min-h-[360px] flex flex-col justify-center items-center relative overflow-hidden group group-hover:z-20 rounded-[2.5rem] border border-brand-indigo-100">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/50 blur-[60px] rounded-full pointer-events-none" />
                <div className="w-full max-w-[320px] relative h-32 flex items-center">
                   <div className="absolute left-8 right-8 h-1 border-t-2 border-dashed border-indigo-200 z-0" />
                   <div className="absolute left-0 w-16 h-16 bg-white rounded-2xl shadow-card border border-indigo-100 flex flex-col items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500">
                     <Activity size={24} className="text-indigo-600 mb-1" strokeWidth={1.5} />
                     <span className="text-[9px] font-bold text-slate-900 uppercase">Clinic</span>
                   </div>
                   <div className="absolute right-0 w-16 h-16 bg-slate-50 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500 delay-100">
                     <Home size={24} className="text-blue-500 mb-1" strokeWidth={1.5} />
                     <span className="text-[9px] font-bold text-slate-500 uppercase">Patient</span>
                   </div>
                </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
                <Truck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3">
                We deliver. <span className="text-blue-600">Your clinic grows.</span>
              </h3>
              <p className="premium-p">
                As soon as you prescribe, our network takes over. We handle the logistics of authentic clinical delivery, ensuring your patients get exactly what you intended.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated dispatch from secure local dark pharmacies",
                  "Real-time delivery tracking for patients via WhatsApp",
                  "100% authentic medicines with full batch-level tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  See fulfillment network
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Grow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-6 lg:pr-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3">
                Your clinic <span className="text-emerald-600">grows.</span>
              </h3>
              <p className="premium-p">
                Stop losing revenue to massive retail chains. Our refill engine turns one-time visits into lifelong care connections and recurring revenue for your practice.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated refill reminders based on patient dosage",
                  "Lifelong patient connection with zero manual effort",
                  "Transparent revenue sharing on every order"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-emerald-600 hover:text-emerald-800 transition-colors group">
                  Calculate growth potential
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="bg-gradient-tinted shadow-card p-8 min-h-[360px] flex items-center justify-center relative overflow-hidden group group-hover:z-20 rounded-[2.5rem] border border-brand-indigo-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 blur-[50px] rounded-full pointer-events-none" />
                <div className="w-[230px] h-[320px] rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col z-10 group-hover:-translate-y-2 transition-transform duration-500">
                   <DarkAtmosphere withMouseEffect={false} showStars={false} />
                   <div className="w-24 h-5 bg-slate-800/80 backdrop-blur-md mx-auto rounded-b-xl mb-4 relative z-10" />
                   <div className="flex-1 px-4 py-2 space-y-4 flex flex-col justify-end pb-8 relative z-10">
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-bl-sm border border-white/10 shadow-lg">
                         <div className="flex items-center gap-1.5 mb-1.5">
                           <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm"><Sparkles size={10} className="text-white"/></div>
                           <span className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider">MediKloud Auto-Refill</span>
                         </div>
                         <p className="text-white text-[11px] font-medium leading-snug">Your monthly prescription is running low. Tap to refill securely.</p>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 p-3 rounded-2xl rounded-br-sm shadow-btn ml-10 border border-emerald-400 flex items-center gap-2">
                         <CheckCircle2 size={16} className="text-white shrink-0" strokeWidth={1.5} />
                         <p className="text-white text-[11px] font-bold">Refill Confirmed</p>
                      </div>
                   </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
