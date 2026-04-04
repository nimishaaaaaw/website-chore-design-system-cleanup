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
  Stethoscope 
} from 'lucide-react';
import { motion } from 'framer-motion';

const VPHero = () => {
  const [timer, setTimer] = useState("03:42");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        const [m, s] = prev.split(':').map(Number);
        if (s === 0 && m === 0) return "00:00";
        if (s === 0) return `${String(m - 1).padStart(2, '0')}:59`;
        return `${String(m).padStart(2, '0')}:${String(s - 1).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-[0%] left-[5%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-indigo-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start lg:items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-10 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Virtual Pharmacy Infrastructure</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-extrabold text-slate-900 tracking-tight leading-[1.05]">
                <span className="text-5xl md:text-6xl lg:text-7xl block">
                  The <span className="text-blue-600">10-Minute</span> <br className="hidden md:block" /> Digital Pharmacy
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl text-slate-400 font-bold block mt-4 lg:mt-2">
                  for Independent Clinics.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium pt-2">
                MediKloud provides the tech, inventory, and logistics to fulfill your prescriptions at the clinic doorstep in 10 minutes. We turn digital prescriptions into physical deliveries—no in-house pharmacy required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
              <button className="group w-full sm:w-auto bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-slate-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center shadow-sm">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-4 opacity-70">
              {[
                { icon: ShieldCheck, text: "HIPAA Compliant" },
                { icon: Clock, text: "10 Min Fulfill" },
                { icon: Activity, text: "Real-time Tracking" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon className="text-blue-600 w-5 h-5" />
                    <span className="text-sm font-bold text-slate-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-12px_rgba(15,23,42,0.15)] border border-slate-100 overflow-hidden">
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[9px] font-black text-slate-500 tracking-[0.2em] uppercase">MediKloud HMS Interface</span>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardList className="text-blue-600 w-4 h-4" />
                        <h4 className="text-sm font-bold text-slate-800 tracking-tight">E-Prescription #842</h4>
                      </div>
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">Optimistic Dispatch</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <Package size={14} className="text-blue-600" />
                        </div>
                        <div className="h-2 w-24 bg-slate-200 rounded animate-pulse" />
                      </div>
                      <div className="h-2 w-8 bg-blue-200 rounded" />
                    </div>
                  </div>

                  <div className="p-5 rounded-[2rem] bg-blue-600 text-white relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl">
                          <Truck className="text-white w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-blue-100 uppercase opacity-80">Rider In Transit</p>
                          <p className="text-xs font-bold">Dark Hub → Clinic</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black tabular-nums">{timer}</p>
                        <p className="text-[9px] font-bold text-blue-100 uppercase tracking-tighter">to doorstep</p>
                      </div>
                    </div>
                    <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute left-0 top-0 h-full bg-white rounded-full" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <Zap className="text-amber-500 w-4 h-4 mb-2" />
                      <p className="text-lg font-black text-slate-900">9.4 min</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Avg Response</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <Activity className="text-blue-500 w-4 h-4 mb-2" />
                      <p className="text-lg font-black text-slate-900">17.5%</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Clinic Fee</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-1.5 rounded-lg">
                    <CheckCircle2 className="text-green-600 w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 pr-2">Drug Inspector Compliance</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow delay-700 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-100 p-1.5 rounded-lg">
                    <Stethoscope className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 pr-2">Pharmacist Verified</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-20 opacity-30 pointer-events-none bg-radial-gradient from-blue-200/50 to-transparent blur-[120px]" />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle, var(--tw-gradient-from) 0%, transparent 70%);
        }
      `}} />
    </main>
  );
};

export { VPHero };
