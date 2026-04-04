"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Activity,
  Calendar,
  Users,
  Phone,
  BarChart3,
  Stethoscope
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

export const HMSHero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-[70px] pb-12 md:pt-[90px] md:pb-20">
      {/* Base gradient and atmosphere */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs using standard classes */}
      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] top-[5%] left-[5%]" />
        <div className="blob-indigo w-[32rem] h-[32rem] bottom-[10%] right-[10%]" />
      </div>

      {/* Bottom fade matched to product pages */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left lg:-translate-y-12"
          >
            {/* Eyebrow pattern aligned with product pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-text text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60">
                100% Secure · Zero Training · High-Volume OPD
              </span>
            </motion.div>

            <div className="space-y-6">
              {/* Gold standard H1 structure */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                {/* Line 1: Intro */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-2">
                  Hospital Management,
                </span>

                {/* Line 2: Brand/Product Gradient */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-4 mb-2">
                  Finally Simple
                </span>

                {/* Line 3: Target Audience */}
                <span className="block text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700/90">
                  for independent hospitals & clinics
                </span>
              </motion.h1>

              {/* Body Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                No setup headaches. No clunky screens. Just smooth OPD and EMR workflows from day one.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 pt-2"
            >
              <button
                onClick={openModal}
                className="btn-primary w-full sm:w-auto shadow-btn"
              >
                <Phone size={15} className="opacity-80" />
                Book a Free Demo
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-4"
            >
              {[
                { icon: ShieldCheck, text: "100% Secure" },
                { icon: Zap, text: "Zero Setup Cost" },
                { icon: Clock, text: "Live in 24 Hours" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 text-slate-600">
                    <Icon className="text-blue-500 w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN (POLISHED DASHBOARD VISUAL) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0"
          >
            {/* Premium Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />

            {/* Main Glass Panel Dashboard */}
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_30px_80px_-20px_rgba(30,58,138,0.15)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden">
              
              {/* Dashboard Layout Simulation */}
              <div className="relative">
                {/* Header Mockup */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                       <BarChart3 size={20} />
                     </div>
                     <div>
                       <h4 className="text-sm font-black text-slate-900 tracking-tight leading-none mb-1">Clinic Central</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Control</p>
                     </div>
                   </div>
                   <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     <span className="text-[10px] font-bold tracking-widest uppercase">System Live</span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Today's OPD</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">142</span>
                        <span className="text-[10px] font-bold text-emerald-500 mb-1">+12%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Avg Wait</p>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">12</span>
                        <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">min</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions / Queue */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                      Recent Activity <span>View All</span>
                    </p>
                    {[
                      { name: "Aarav S.", id: "PT-8472", status: "Consultation", color: "text-blue-500", bg: "bg-blue-50" },
                      { name: "Priya P.", id: "PT-8473", status: "Completed", color: "text-emerald-500", bg: "bg-emerald-50" },
                      { name: "Rahul V.", id: "PT-8474", status: "Billing", color: "text-amber-500", bg: "bg-amber-50" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-slate-100/80">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-none mb-1">{item.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 tracking-wider font-mono">{item.id}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-md ${item.bg} ${item.color} text-[9px] font-bold uppercase tracking-widest`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Badge 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 md:-right-16 top-10 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl shadow-blue-900/10 border border-white z-20 flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                <Stethoscope size={18} />
              </div>
              <div className="pr-2">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">EMR Status</p>
                <p className="text-xs font-black text-slate-800">100% Automated</p>
              </div>
            </motion.div>

            {/* Floating Decorative Badge 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 md:-left-16 bottom-12 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-800 z-20 flex items-center gap-3"
            >
               <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                <ShieldCheck size={18} />
              </div>
              <div className="pr-4">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Trust</p>
                <p className="text-xs font-bold text-white uppercase tracking-widest leading-none">100% Secure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

