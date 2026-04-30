"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Store, Activity, RefreshCw, ShieldCheck, Sparkles, Monitor, FileText, Receipt, Users2, Repeat, Package, Truck } from 'lucide-react';
import { WhatsAppMockup } from './WhatsAppMockup';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HospitalPharmacyProducts = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="max-w-[825px] mb-12 lg:mb-20 space-y-4 mx-auto text-center"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The Ecosystem</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="premium-h2">
            Everything you need to <br className="hidden sm:block"/>
            <span className="text-indigo-600">stop the leak, in one place.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-full lg:max-w-intro-lock mx-auto mt-4">
            We don't leave you with half a solution. Our ecosystem handles everything from the physical pharmacist at the counter to the AI that predicts your inventory needs.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 lg:space-y-24">
          
          {/* PRODUCT 1: Managed Pharmacy */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100/50 text-indigo-600 text-sm font-bold tracking-tight flex items-center gap-2 w-fit">
                <Sparkles className="w-3 h-3" /> Zero Capital Required
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Managed Pharmacy Ops</h3>
              <p className="text-base text-slate-500 leading-relaxed">
                We take over the physical counter. Our licensed pharmacists handle the dispensing, we fund 100% of the inventory, and our software tracks every single pill. You get a modern, retail-grade pharmacy running inside your clinic without lifting a finger.
              </p>
              <ul className="space-y-3 pt-2">
                {["Zero capital investment required", "Barcode billing stops all pilferage", "Dead stock is cleared and replaced"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="/products/managed-pharmacy" className="inline-flex items-center text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  Explore Managed Pharmacy 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* ADVANCED VISUAL 1: Live Inventory Dashboard (Premium Dark Theme) */}
            <div className="order-1 lg:order-2 p-4 lg:p-8 relative flex items-center justify-center">
              {/* Central Premium Dark Dashboard */}
              <div className="w-full max-w-[360px] bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative z-10 group overflow-hidden">
                <DarkAtmosphere withMouseEffect={false} />
                
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                    <span className="text-white text-sm font-bold tracking-tight uppercase">Live Pharmacy Inventory</span>
                  </div>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>

                <div className="space-y-3 relative z-10">
                  {/* Stock Item 1 */}
                  <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-4 flex items-center justify-between border border-white/5 hover:border-blue-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <Package className="w-5 h-5 text-blue-400"/>
                      </div>
                      <div>
                        <div className="text-white text-sm font-bold tracking-tight">Amoxicillin 500mg</div>
                        <div className="text-blue-300/70 text-xs font-medium mt-0.5 flex items-center gap-1">
                          <RefreshCw className="w-3 h-3 text-emerald-400" /> Auto-replenishing
                        </div>
                      </div>
                    </div>
                    <div className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">98%</div>
                  </div>
                  
                  {/* Stock Item 2 */}
                  <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-4 flex items-center justify-between border border-white/5 hover:border-indigo-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <ShieldCheck className="w-5 h-5 text-indigo-400"/>
                      </div>
                      <div>
                        <div className="text-white text-sm font-bold tracking-tight">Diagnostic Status</div>
                        <div className="text-slate-400 text-xs font-medium mt-0.5">Verified 2m ago</div>
                      </div>
                    </div>
                    <div className="bg-indigo-500/20 p-1.5 rounded-lg border border-indigo-500/30">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background anchor glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
            </div>
          </motion.div>

          {/* PRODUCT 2: HMS SaaS */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* ADVANCED VISUAL 2: HMS Enterprise Command Center (Unified Layout) */}
            <div className="p-4 lg:p-12 flex items-center justify-center relative">
              <div className="w-full max-w-[440px] bg-white border border-slate-200 rounded-[2.5rem] p-6 lg:p-8 shadow-card-lg relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center border border-cyan-100 shadow-sm">
                      <Monitor className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 tracking-tight">Enterprise Command</div>
                      <div className="text-xxs text-slate-400 font-bold uppercase tracking-widest">Global Status: Active</div>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                        <div className={`w-full h-full ${i === 1 ? 'bg-cyan-500' : i === 2 ? 'bg-indigo-500' : 'bg-emerald-500'} opacity-40`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Integrated Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* OPD Status */}
                  <div className="col-span-1 bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between min-h-[120px]">
                    <div className="flex items-center gap-2 text-xxs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <Users2 className="w-3.5 h-3.5" /> OPD Queue
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900 font-mono tracking-tighter">14 <span className="text-xs text-slate-400 font-sans">Active</span></div>
                      <div className="flex gap-1 mt-2">
                        <div className="h-1.5 flex-1 bg-cyan-500 rounded-full"></div>
                        <div className="h-1.5 flex-1 bg-cyan-500/30 rounded-full"></div>
                        <div className="h-1.5 flex-1 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* EHR / AI Scribe status */}
                  <div className="col-span-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-md flex flex-col justify-between min-h-[120px]">
                    <div className="flex items-center gap-2 text-xxs font-bold text-white/70 uppercase tracking-wider">
                      <Activity className="w-3.5 h-3.5" /> AI Scribe
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                         <span className="text-[13px] font-bold text-white tracking-tight">Syncing EHR...</span>
                      </div>
                      <div className="mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="h-full w-1/2 bg-white/60" />
                      </div>
                    </div>
                  </div>

                  {/* Revenue / Billing */}
                  <div className="col-span-2 bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-xxs font-bold text-slate-400 uppercase tracking-wider">Smart Billing (Daily)</div>
                      <div className="text-2xl font-bold text-slate-900 font-mono tracking-tight">₹1,24,450</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xxs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">+12% vs avg</div>
                    </div>
                  </div>
                </div>

                {/* Integrated Pharmacy Link */}
                <div className="mt-6 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-center justify-between border-dashed">
                    <div className="flex items-center gap-3">
                       <Store className="w-4 h-4 text-indigo-500" />
                       <span className="text-sm font-bold text-indigo-700">Unified Pharmacy Bridge</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                </div>
              </div>
              
              {/* Animated background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-100/30 rounded-full blur-[80px] -z-10 animate-float-slow"></div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 mb-6">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Free, Enterprise-Grade HMS</h3>
              <p className="text-base text-slate-500 leading-relaxed">
                We replace your fragmented clinic tools with a unified Hospital Management System—completely free of charge. From the moment a patient registers at the OPD desk, to clinical billing, AI-assisted EHR, and final pharmacy dispensing, everything runs flawlessly on one seamless platform.
              </p>
              <ul className="space-y-3 pt-2">
                {["Comprehensive OPD, queue management, and smart billing", "AI Scribe and digital EHR for effortless doctor consultations", "Flawless pharmacy sync—no more lost paper prescriptions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="/products/hospital-management-system" className="inline-flex items-center text-base font-bold text-cyan-600 hover:text-cyan-800 transition-colors group">
                  Explore Full HMS Features 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* PRODUCT 3: Refill Engine */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Medicine Deliveries to Patient's Doorsteps</h3>
              <p className="text-base text-slate-500 leading-relaxed">
                When a diabetic or BP patient finishes their 30-day course, they usually buy their next batch from a local chemist. We track their dosage and automatically offer them home delivery from your hospital right before they run out.
              </p>
              <ul className="space-y-3 pt-2">
                {["Automated WhatsApp delivery reminders", "Zero effort required from your staff", "Turns one-time patients into recurring revenue"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="/products/virtual-pharmacy" className="inline-flex items-center text-base font-bold text-violet-600 hover:text-violet-800 transition-colors group">
                  Explore Medicine Delivery 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* ADVANCED VISUAL 3: Realistic WhatsApp Ordering Flow */}
            <div className="order-1 lg:order-2 p-4 lg:p-8 relative flex items-center justify-center min-h-[550px]">
              <WhatsAppMockup />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-100/40 rounded-full blur-[70px] -z-10 animate-float-medium"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};