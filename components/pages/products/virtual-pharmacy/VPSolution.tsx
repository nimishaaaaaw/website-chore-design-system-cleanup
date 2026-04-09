'use client';

import React from 'react';
import { 
  Layers, 
  Monitor, 
  LayoutDashboard, 
  Server, 
  Stethoscope, 
  Package, 
  Truck, 
  Route, 
  PieChart, 
  IndianRupee 
} from 'lucide-react';
import { motion } from 'framer-motion';

const premiumEase = [0.16, 1, 0.3, 1] as const;

const VPSolution = () => {
  return (
    <section className="bg-slate-950 py-24 md:py-32 relative text-slate-300 border-t border-slate-900" id="infrastructure">
      {/* Forensic Background Textures */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      {/* Background Blobs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: STICKY NARRATIVE ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
            >
              <div className="eyebrow-wrap !justify-start mb-6">
                <span className="eyebrow-line-l"></span>
                <span className="eyebrow-text flex items-center gap-2">
                   <Layers size={14} className="text-blue-400" /> The Paradigm Shift
                </span>
                <span className="eyebrow-line-r"></span>
              </div>
              
              <h2 className="premium-h2 !text-white mb-6">
                Pharmacy,<br />
                <span className="text-indigo-600">delivered as a service.</span>
              </h2>
              
              <p className="premium-p intro-lock !text-slate-400">
                We completely decoupled the pharmacy from the clinic. You keep all the clinical and financial benefits, while we absorb the physical footprint, the inventory risk, and the regulatory burden.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
              className="hidden lg:block pt-8 border-t border-slate-800"
            >
              <div className="flex items-center gap-10">
                <div>
                  <p className="stat-number !text-white text-3xl">0<span className="text-xl text-slate-500 font-bold ml-1">sq.ft</span></p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1.5">Space Required</p>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div>
                  <p className="stat-number !text-white text-3xl">₹0</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1.5">Capital Invested</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: INFRASTRUCTURE MODULES ── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Module 1: The Clinic OS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border border-slate-800 p-8 md:p-10 hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Monitor size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-600/30">
                  <Monitor size={20} className="strokeWidth={1.5}" />
                </div>
                <h3 className="premium-h3 !text-white mb-4">Next-Gen Clinic OS</h3>
                <p className="premium-p mb-8 max-w-md !text-slate-400">
                  We upgrade your practice with world-class clinic management software. Handle patient flow, daily operations, EMRs, and instantly beam prescriptions to our fulfillment network with a single click.
                </p>

                {/* Visual Status UI */}
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl flex items-center justify-between max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <LayoutDashboard className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Smart E-Prescription</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Syncing to Dark Hub...</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 2: The Dark Node */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: premiumEase }}
              className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border border-slate-800 p-8 md:p-10 hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-600/30">
                  <Server size={20} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3 !text-white mb-4">Hyper-Local Dark Hubs</h3>
                <p className="premium-p mb-8 max-w-md !text-slate-400">
                  We build and run a fully licensed, pharmacist-led medicine warehouse strategically located near your clinic.
                </p>

                {/* Visual Status UI */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Licenses</p>
                      <p className="text-xs font-bold text-slate-300">100% Managed</p>
                    </div>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
                    <Package size={14} className="text-blue-600" strokeWidth={1.5} />
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Inventory</p>
                      <p className="text-xs font-bold text-slate-300">Brand Matched</p>
                    </div>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-xl flex items-center gap-3 hidden sm:flex">
                    <Stethoscope size={14} className="text-indigo-400" strokeWidth={1.5} />
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Staffing</p>
                      <p className="text-xs font-bold text-slate-300">Provided</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 3: The Routing Protocol */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
              className="bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border border-slate-800 p-8 md:p-10 hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Route size={120} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center mb-6 border border-indigo-600/30">
                  <Truck size={20} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3 !text-white mb-4">10-Minute Routing Protocol</h3>
                <p className="premium-p mb-8 max-w-md !text-slate-400">
                  Our dedicated fleet intercepts the e-prescription and dispatches immediately, handing the medicine to the patient at your clinic door before they leave.
                </p>

                {/* Visual Tracker UI */}
                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live ETA Tracker</p>
                    <p className="text-indigo-600 text-xs font-bold">08:42</p>
                  </div>
                  <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-slate-500 font-bold uppercase">Dark Hub</span>
                    <span className="text-[9px] text-slate-300 font-bold uppercase">Clinic Door</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 4: The Economic Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
              className="bg-gradient-to-br from-slate-900/80 to-indigo-950/50 backdrop-blur-md rounded-[2.5rem] border border-indigo-500/20 p-8 md:p-10 hover:border-indigo-500/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <PieChart size={120} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-600/30">
                  <PieChart size={20} strokeWidth={1.5} />
                </div>
                <h3 className="premium-h3 !text-white mb-4">Zero-Touch Revenue Engine</h3>
                <p className="premium-p mb-8 max-w-md !text-slate-400">
                  Because your clinic acts as the point-of-care, you earn a substantial service fee on every fulfilled prescription—pure profit without the overhead.
                </p>

                {/* Visual Financial UI */}
                <div className="flex items-center gap-4 bg-slate-950/50 border border-slate-800 p-4 rounded-xl w-max">
                  <div className="w-10 h-10 rounded-full bg-emerald-600/10 flex items-center justify-center border border-emerald-600/20">
                    <IndianRupee className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Partner Margin</p>
                    <p className="stat-number !text-white text-base md:text-lg">15<span className="text-emerald-400">—</span>20%</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { VPSolution };
