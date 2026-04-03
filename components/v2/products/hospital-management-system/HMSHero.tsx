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
  Users
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HMSHero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-[100px] pb-12 lg:pt-[120px] lg:pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-100/30 rounded-full blur-[80px] animate-float-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-indigo-100/20 rounded-full blur-[90px] animate-float-slower" />
        <div className="absolute top-[45%] right-[30%] w-48 h-48 bg-brand-violet-100/25 rounded-full blur-[60px] animate-float-medium" />
      </div>

      {/* Fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* Main Content */}
      <div className="max-w-container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Column: Copy & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Sub-Headline Badge */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-800 tracking-widest uppercase">
                The Intelligent Control Layer for Modern Healthcare
              </span>
            </motion.div>

            {/* Main Headlines */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl font-black leading-[1.1] tracking-tight mb-6"
            >
              Hospital Management Software, <br />
              <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>Finally Simple.</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h2 font-bold text-slate-700 leading-tight mb-6"
            >
              For Independent Clinics and Hospitals.
            </motion.h2>

            {/* Body Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body-lg text-slate-600 leading-relaxed mb-10 max-w-narrow"
            >
              No setup headaches. No clunky screens. Just smooth OPD and EMR workflows from day one.
            </motion.p>

            {/* Value Pillars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Zero Training</h4>
                  <p className="text-xs text-slate-500 font-medium">Staff are live in under 2 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-100 p-1.5 rounded-lg">
                  <Zap className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">High-Volume OPD</h4>
                  <p className="text-xs text-slate-500 font-medium">Fast, no lag, no crashes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="mt-1 bg-blue-100 p-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">ABDM-Ready</h4>
                  <p className="text-xs text-slate-500 font-medium">Compliant and secure by default.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
            >
              <button 
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-action rounded-xl overflow-hidden shadow-btn hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>Get a Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-green-200" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-blue-200" />
                </div>
                <p className="text-xs font-semibold text-slate-500 max-w-[180px] leading-snug">
                  <span className="font-bold text-slate-900">Join 500+</span> clinical leaders scaling their practice.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Abstract UI Dashboard Visual */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-full blur-3xl opacity-50" />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-lg"
            >
              
              {/* Main Dashboard Window */}
              <div className="relative z-10 bg-white border border-slate-200 rounded-[2rem] shadow-float overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
                {/* Window Header */}
                <div className="bg-slate-50 border-b border-slate-100 px-5 pt-4 pb-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-auto bg-white border border-slate-200 rounded-lg px-4 py-1.5 flex items-center gap-2 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-success" />
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">ABDM Secure Connection</span>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">Today's OPD</span>
                      </div>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">142</span>
                    </div>
                    <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-emerald-600" />
                        <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">Avg Wait</span>
                      </div>
                      <span className="text-2xl font-black text-slate-900 tracking-tight">12<span className="text-xs text-slate-500 font-bold ml-1 uppercase">min</span></span>
                    </div>
                  </div>

                  {/* Patient List Mockup */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Queue</h3>
                      <button className="text-[10px] text-blue-600 font-bold uppercase tracking-widest hover:text-blue-700">View All</button>
                    </div>
                    {[
                      { name: "Aarav Sharma", id: "PT-8472", time: "10:15 AM", status: "Consultation" },
                      { name: "Priya Patel", id: "PT-8473", time: "10:30 AM", status: "Waiting" },
                      { name: "Rahul Verma", id: "PT-8474", time: "10:45 AM", status: "Vitals Done" }
                    ].map((patient, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 border border-slate-200 shadow-sm">
                            {patient.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 leading-none mb-1">{patient.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold tracking-wider">{patient.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] font-black text-slate-900">{patient.time}</p>
                          <p className={`text-[10px] font-bold uppercase tracking-wider ${i === 0 ? 'text-success' : 'text-warning'}`}>
                            {patient.status}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Element 1: EMR Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 z-20 bg-white p-4 rounded-xl shadow-float border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Deployment</p>
                    <p className="text-sm font-black text-slate-900">&lt; 24 Hours</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-success ml-2" />
                </div>
              </motion.div>

              {/* Floating Element 2: Zero Fees */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 -right-8 z-20 bg-slate-900 p-4 rounded-xl shadow-glow border border-slate-800"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <p className="text-xs font-bold text-white uppercase tracking-widest">0 Setup Fees</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
