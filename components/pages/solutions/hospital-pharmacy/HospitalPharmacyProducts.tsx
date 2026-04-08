"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Store, Activity, RefreshCw, ShieldCheck, Sparkles, Monitor, FileText, Receipt, Users2, Repeat, Package } from 'lucide-react';
import { WhatsAppMockup } from './WhatsAppMockup';

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
          className="max-w-3xl mb-20 space-y-4 mx-auto text-center"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l bg-blue-500/30" />
            <span className="eyebrow-text text-blue-600">The Ecosystem</span>
            <span className="eyebrow-line-r bg-blue-500/30" />
          </div>
          <h2 className="text-h2 font-black tracking-tight text-slate-900 leading-[1.1] md:text-5xl">
            Everything you need to <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">stop the leak, in one place.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-2xl mx-auto mt-4">
            We don't leave you with half a solution. Our platform connects the doctor's desk directly to the patient's home, ensuring you never lose a prescription again.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 lg:space-y-24">
          
          {/* PRODUCT 1: Managed Pharmacy */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Managed Pharmacy Ops</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
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
                <a href="/products/managed-pharmacy" className="inline-flex items-center text-[15px] font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  Explore Managed Pharmacy 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* ADVANCED VISUAL 1: Live Inventory Dashboard */}
            <div className="order-1 lg:order-2 bg-slate-950 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden aspect-[4/3] flex items-center justify-center border border-blue-900/30 shadow-2xl">
              {/* Tech Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              {/* Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[60px] rounded-full"></div>

              {/* Central Glassy Dashboard */}
              <div className="w-full max-w-[340px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl relative z-10 group">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                    <span className="text-white text-[11px] font-black tracking-widest uppercase">Live Inventory Sync</span>
                  </div>
                  <Activity className="w-4 h-4 text-blue-300" />
                </div>

                <div className="space-y-3">
                  {/* Stock Item 1 */}
                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-3.5 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <Package className="w-5 h-5 text-blue-400"/>
                      </div>
                      <div>
                        <div className="text-slate-200 text-sm font-bold tracking-tight">Amoxicillin 500mg</div>
                        <div className="text-blue-300/70 text-[11px] font-medium mt-0.5 flex items-center gap-1">
                          <RefreshCw className="w-3 h-3" /> Auto-replenishing
                        </div>
                      </div>
                    </div>
                    <div className="text-emerald-400 text-sm font-black bg-emerald-400/10 px-2 py-1 rounded-lg">98%</div>
                  </div>
                  
                  {/* Stock Item 2 */}
                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-3.5 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <ShieldCheck className="w-5 h-5 text-indigo-400"/>
                      </div>
                      <div>
                        <div className="text-slate-200 text-sm font-bold tracking-tight">Audit Status</div>
                        <div className="text-slate-400 text-[11px] font-medium mt-0.5">Last checked: Just now</div>
                      </div>
                    </div>
                    <div className="bg-indigo-500/20 p-1.5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300" />
                    </div>
                  </div>
                </div>

                {/* Floating element */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute -right-4 -bottom-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xl shadow-emerald-500/30 border border-emerald-300/50 flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Zero Variance
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* PRODUCT 2: HMS SaaS */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* ADVANCED VISUAL 2: Full HMS Dashboard Mockup */}
            <div className="bg-slate-950 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden aspect-[4/3] flex items-center justify-center border border-cyan-900/30 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/20 blur-[80px] rounded-full"></div>

              <div className="w-full max-w-[380px] relative z-10 flex flex-col gap-4">
                {/* Top Row: OPD & Billing Modules */}
                <div className="flex gap-4">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center"><Users2 className="w-3.5 h-3.5 text-emerald-400" /></div>
                      <span className="text-[11px] font-bold text-slate-200">OPD Desk</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full mb-1.5"></div>
                    <div className="h-1.5 w-2/3 bg-slate-700/50 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center"><Receipt className="w-3.5 h-3.5 text-amber-400" /></div>
                      <span className="text-[11px] font-bold text-slate-200">Billing</span>
                    </div>
                    <div className="text-[14px] font-mono font-bold text-white mb-0.5">₹42,450</div>
                    <div className="text-[9px] font-medium text-amber-400">Daily Revenue</div>
                  </motion.div>
                </div>

                {/* Middle Row: EHR Dashboard */}
                <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full bg-gradient-to-br from-cyan-900/60 to-blue-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/20 rounded-bl-xl rounded-tr-2xl text-[9px] font-black text-cyan-300 uppercase tracking-widest">AI Scribe Active</div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30"><FileText className="w-5 h-5 text-cyan-400" /></div>
                    <div>
                        <div className="text-[14px] font-bold text-white tracking-tight">Digital EHR</div>
                        <div className="text-[11px] font-medium text-cyan-100/60 mt-0.5">Patient ID: #88241</div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 w-full bg-cyan-950/60 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-cyan-950/60 rounded-full"></div>
                  </div>
                  <div className="mt-5 flex justify-between items-center border-t border-cyan-500/20 pt-4">
                    <div className="text-[11px] font-bold text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div> Auto-syncing to Pharmacy
                    </div>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 mb-6">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Free, Enterprise-Grade HMS</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
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
                <a href="/products/hospital-management-system" className="inline-flex items-center text-[15px] font-bold text-cyan-600 hover:text-cyan-800 transition-colors group">
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
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Automated Refill Engine</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                When a diabetic or BP patient finishes their 30-day course, they usually buy their next batch from a local chemist. We track their dosage and automatically offer them home delivery from your clinic right before they run out.
              </p>
              <ul className="space-y-3 pt-2">
                {["Automated WhatsApp delivery reminders", "Zero effort required from your clinic staff", "Turns one-time patients into recurring revenue"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="/products/virtual-pharmacy" className="inline-flex items-center text-[15px] font-bold text-violet-600 hover:text-violet-800 transition-colors group">
                  Explore Refill Engine & Delivery 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            {/* ADVANCED VISUAL 3: Realistic WhatsApp Ordering Flow */}
            <div className="order-1 lg:order-2 bg-slate-950 rounded-[2.5rem] p-6 lg:p-10 relative overflow-hidden flex items-center justify-center border border-violet-900/30 shadow-2xl group min-h-[550px]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[40px] rounded-full pointer-events-none group-hover:bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25)_0%,transparent_70%)] transition-colors duration-700"></div>

              {/* Realistic Phone Chassis + Auto-scrolling Sequence */}
              <WhatsAppMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
