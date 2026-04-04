'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Activity,
  ClipboardList,
  Package,
  Truck,
  Zap,
  CheckCircle2, 
  Stethoscope,
  Phone,
  FileText,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

const VPHero = () => {
  const [timer, setTimer] = useState("03:42");
  const { openModal } = useContactModal();

  // New State for the Live Automation Engine
  const [activeStage, setActiveStage] = useState(0);
  const [orderId, setOrderId] = useState(8429);

  // Timer for the 10-minute countdown (existing)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev: string) => {
        const [m, s] = prev.split(':').map(Number);
        if (s === 0 && m === 0) return "00:00";
        if (s === 0) return `${String(m - 1).padStart(2, '0')}:59`;
        return `${String(m).padStart(2, '0')}:${String(s - 1).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer for the Automation Engine progression
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev: number) => {
        const next = (prev + 1) % 4;
        if (next === 0) setOrderId((id) => id + 1); // Increment order ID on cycle restart
        return next;
      });
    }, 4000); // 4 seconds per stage
    return () => clearInterval(stageInterval);
  }, []);

  const stages = [
    {
      id: 0,
      title: "Prescribed via MediKloud HMS",
      desc: "Doctor's Rx is auto-received by our Dark Store",
      icon: FileText,
      iconBg: "bg-blue-100/80",
      iconColor: "text-blue-600",
      barColor: "bg-blue-500",
      metrics: "Transfer Time: < 1s",
    },
    {
      id: 1,
      title: "Packed & Verified",
      desc: "AI & Pharmacist safety check in under 2 mins",
      icon: ShieldCheck,
      iconBg: "bg-indigo-100/80",
      iconColor: "text-indigo-600",
      barColor: "bg-indigo-500",
      metrics: "Processing Time: 1m 45s",
    },
    {
      id: 2,
      title: "Rider Dispatched",
      desc: "Medicines picked up and en route to clinic",
      icon: Truck,
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600",
      barColor: "bg-purple-500",
      metrics: "Status: On the way",
    },
    {
      id: 3,
      title: "Delivered at Clinic Door",
      desc: "Handed directly to patient within 10 minutes",
      icon: CheckCircle2,
      iconBg: "bg-amber-100/80",
      iconColor: "text-amber-600",
      barColor: "bg-amber-500",
      metrics: "Total Time: 9m 12s",
    }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-[70px] pb-12 md:pt-[90px] md:pb-20">
      {/* Base gradient and atmosphere bits matched to MPHero */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] top-[5%] left-[5%]" />
        <div className="blob-indigo w-[32rem] h-[32rem] bottom-[10%] right-[5%]" />
      </div>

      {/* Bottom fade matched to MPHero */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left lg:-translate-y-12"
          >
            {/* Eyebrow pattern aligned with MPHero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-text text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60">
                Zero Setup Cost · Seamless Integration
              </span>
            </motion.div>

            <div className="space-y-6">
              {/* Layer 1 & 2: Condensed into H1 for Homepage Parity */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                {/* Line 1: Intro */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-2">
                  The 10-Minute
                </span>

                {/* Line 2: Brand/Product */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-4 mb-2">
                  Digital Pharmacy
                </span>

                {/* Line 3: Target Audience - Subtitle style */}
                <span className="block text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700/90">
                  for independent clinics
                </span>
              </motion.h1>

              {/* Layer 3: Body / Description - Shortened */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-body-lg text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Deliver medicines in 10 minutes. We handle the tech, inventory, and logistics—you focus on care. Zero setup, zero overhead.
              </motion.p>
            </div>

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
                Partner With Us
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-4"
            >
              {[
                { icon: ShieldCheck, text: "100% Secure" },
                { icon: Clock, text: "Happy Patients" },
                { icon: Activity, text: "Real-time Tracking" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 text-slate-600">
                    <Icon className="text-blue-500 w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN (LIVE AUTOMATION ENGINE) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4"
          >
            {/* Background Glow for Panel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />

            {/* Main Glass Panel */}
            <div className="relative z-10 bg-white/70 backdrop-blur-2xl border border-white shadow-[0_30px_80px_-20px_rgba(30,58,138,0.15)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    Live Order #{orderId}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Virtual Pharmacy Engine</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Processing</span>
                </div>
              </div>

              {/* The Pipeline */}
              <div className="relative">
                {/* Connecting Line Background */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] bg-slate-200 rounded-full" />
                
                {/* Active Progress Line */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] overflow-hidden rounded-full flex flex-col justify-start">
                  <motion.div 
                    className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
                    animate={{ height: `${((activeStage + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {/* Pipeline Nodes */}
                <div className="space-y-4">
                  {stages.map((stage, idx) => {
                    const isActive = activeStage === idx;
                    const isPast = activeStage > idx;

                    return (
                      <div key={stage.id} className="relative pl-12">
                        {/* Node Indicator */}
                        <div 
                          className={`absolute left-[1.05rem] top-5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 transition-colors duration-500 
                          ${isActive ? 'bg-blue-500 ring-4 ring-blue-500/20' : isPast ? 'bg-slate-800' : 'bg-slate-300'}`} 
                        />

                        {/* Stage Card */}
                        <motion.div
                          layout
                          className={`p-4 rounded-2xl transition-all duration-500 ${
                            isActive 
                              ? 'bg-white shadow-xl shadow-blue-900/5 border border-blue-100 ring-1 ring-black/5 scale-[1.02]' 
                              : isPast
                                ? 'bg-white/40 border border-transparent opacity-80'
                                : 'bg-transparent border border-transparent opacity-40 grayscale-[50%]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl transition-colors ${isActive || isPast ? stage.iconBg : 'bg-slate-100'}`}>
                              <stage.icon className={`w-5 h-5 ${isActive || isPast ? stage.iconColor : 'text-slate-400'}`} />
                            </div>
                            <div>
                              <h4 className={`font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {stage.title}
                              </h4>
                              <p className="text-xs font-medium text-slate-500 mt-0.5">{stage.desc}</p>
                            </div>
                          </div>

                          {/* Expanded Content for Active Stage */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {stage.metrics}
                                  </span>
                                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: "0%" }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 4, ease: "linear" }}
                                      className={`h-full ${stage.barColor}`}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating Decorative Badge 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-12 md:-right-24 -top-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl shadow-blue-900/10 border border-white z-20 flex items-center gap-3 animate-bounce-slow"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-blue-400 opacity-30"></span>
                <MapPin className="relative h-5 w-5 text-blue-600" />
              </div>
              <div className="pr-2">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Live Routing</p>
                <p className="text-sm font-black text-slate-800">1.2 km away</p>
              </div>
            </motion.div>

            {/* Floating Decorative Badge 2 */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-12 md:-left-24 -bottom-10 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-800 z-20 flex items-center gap-3 animate-bounce-slow delay-700"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <div className="pr-4">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Network Status</p>
                <p className="text-sm font-bold text-white">Optimal (99.9%)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle, #bfdbfe 0%, transparent 60%);
        }
      `}} />
    </section>
  );
};

export { VPHero };
