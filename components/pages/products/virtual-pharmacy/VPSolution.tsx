'use client';

import React from 'react';
import { Zap, Building, ClipboardList, Package, Truck, RefreshCcw, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const VPSolution = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Dark Mode Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Narrative Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
            <Zap size={14} className="text-blue-400" />
            <span className="text-blue-300 font-bold uppercase tracking-widest text-[10px]">The Paradigm Shift</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            We provide the Pharmacy—<br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">without using any of your space.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            MediKloud uses a local fulfillment hub to bring medicines to your clinic.
          </p>
        </motion.div>

        {/* 3-Column Radial Hub Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-24 relative">
          
          {/* Visual Connecting Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2 -z-10" />

          {/* Left Column: Cards pointing right */}
          <div className="space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[2rem] hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 text-center lg:text-right flex flex-col items-center lg:items-end group"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Local Hubs (Dark Pharmacies)</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-sm">
                We build and run a medicine warehouse near your clinic. We handle all the licenses, pay the pharmacists, and take 100% of the legal responsibility.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[2rem] hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 text-center lg:text-right flex flex-col items-center lg:items-end group"
            >
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClipboardList size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">100% Brand Accuracy</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-sm">
                We stock the exact brands you prefer to prescribe. We guarantee 100% availability of your "must-have" medicines before we go live. Zero cost or risk to you.
              </p>
            </motion.div>

          </div>

          {/* Center Column: The MediKloud Hub Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center my-12 lg:my-0"
          >
            <div className="relative group">
              {/* Glowing Aura Rings */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
              <div className="absolute inset-[-30px] rounded-full border border-blue-400/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-60px] rounded-full border border-indigo-400/10 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Main Core Node */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-slate-800 to-slate-950 rounded-full border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative z-10 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full pointer-events-none" />
                 <Package size={48} className="text-blue-400 mb-3" />
                 <span className="text-white font-black tracking-widest text-lg sm:text-xl z-10">MEDIKLOUD</span>
                 <span className="text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full z-10">
                   Dark Hub
                 </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards pointing left */}
          <div className="space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[2rem] hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-300 text-center lg:text-left flex flex-col items-center lg:items-start group"
            >
              <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">10-Minute Delivery</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-sm">
                Our riders are ready the moment you click "Prescribe." Your patients receive their medicines at your clinic door in 10 minutes—before they even leave.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[2rem] hover:bg-slate-800/80 hover:border-purple-500/50 transition-all duration-300 text-center lg:text-left flex flex-col items-center lg:items-start group"
            >
              <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCcw size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Automatic Refills</h4>
              <p className="text-slate-400 font-medium leading-relaxed text-sm">
                For patients with long-term needs, our system sends a reminder the day before they run out and delivers a refill directly to their home.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Full-Width Financial Hook Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.95 }}
          className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500"
        >
          <div className="flex items-center space-x-6 md:w-2/3">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/50 hidden sm:flex">
              <Wallet size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Partner Service Fees</h3>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                Your clinic acts as the physical pickup point. In return, your business earns a <span className="text-white font-bold bg-blue-500/30 px-2 py-0.5 rounded border border-blue-400/30">15–20% service fee</span> on every order we fulfill.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:justify-end w-full">
            <button className="w-full md:w-auto bg-white hover:bg-blue-50 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center space-x-2">
              <span>View Unit Economics</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export { VPSolution };
