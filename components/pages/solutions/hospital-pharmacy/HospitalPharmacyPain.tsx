"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, AlertCircle } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HospitalPharmacyPain = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden border-y border-slate-200">
      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="max-w-[850px] space-y-4 mx-auto text-center"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-indigo-600">The Reality of Pharmacy Management</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.3]">
            Running a hospital is your job.<br/>
            <span className="text-indigo-600">Running a pharmacy shouldn't be.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-[850px] mx-auto mt-4">
            Most hospital pharmacies don't fail loudly. They leak money silently through a hundred small cracks that you simply don't have the time to monitor.
          </p>
        </motion.div>

        {/* Staggered Alternating Flow */}
        <div className="max-w-5xl mx-auto mt-12 lg:mt-20 space-y-20 lg:space-y-24">
          
          {/* Item 1: The Walk-Out */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200 inline-block w-fit">
                Lost Prescriptions
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">"I'll just buy it near my house."</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Patients leave because you don't offer home delivery, or your counter queue is simply too long. You did the clinical work, but a local retail chemist gets the revenue.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 relative overflow-hidden shadow-card hover:shadow-card-md hover:border-rose-200 transition-all duration-300">
                 <div className="flex items-center justify-between mb-8">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Daily Prescription Flow</div>
                    <div className="h-1.5 w-8 bg-rose-500 rounded-full opacity-20" />
                 </div>
                 <div className="space-y-6 relative z-10">
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-3">
                        <span>Written by Doctor</span> <span>100%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-slate-300 w-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] font-bold text-rose-600 uppercase tracking-wide mb-3">
                        <span>Filled at your counter</span> <span>42%</span>
                      </div>
                      <div className="h-2 w-full bg-rose-50 rounded-full overflow-hidden">
                         <div className="h-full bg-rose-600 w-[42%] rounded-full relative">
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 animate-pulse"></div>
                         </div>
                      </div>
                    </div>
                 </div>
                 <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Revenue Leakage</span>
                    <span className="text-sm font-bold text-rose-600 flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                      <TrendingUp className="w-4 h-4 rotate-180" /> 58%
                    </span>
                 </div>
                 {/* Decorative background glow */}
                 <div className="absolute top-0 right-0 w-48 h-48 bg-rose-50/40 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Dead Stock (Reversed) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 inline-block w-fit">
                Expired & Unsold Stock
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Your money is stuck on the shelves.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Medicines expire because no one is accurately tracking what moves and what doesn't. Your working capital is trapped in boxes sitting in the back room.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 relative overflow-hidden shadow-card hover:shadow-card-md hover:border-amber-200 transition-all duration-300">
                 <div className="flex items-center justify-between mb-8">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inventory Health Alert</div>
                    <div className="h-1.5 w-8 bg-amber-500 rounded-full opacity-20" />
                 </div>
                 
                 <div className="relative z-10 space-y-3">
                    {/* Medicine Row 1 */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between group/row hover:border-amber-100 transition-colors duration-200">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover/row:bg-amber-50 group-hover/row:border-amber-100 transition-colors">
                             <Package className="w-5 h-5 text-slate-400 group-hover/row:text-amber-500 transition-colors" />
                          </div>
                          <div>
                             <div className="text-sm font-bold text-slate-800">Cefixime 200mg</div>
                             <div className="text-[11px] text-slate-400 font-medium font-mono uppercase tracking-tight">Batch: B8839 • 240 Strips</div>
                          </div>
                       </div>
                       <div className="text-right shrink-0">
                          <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100 uppercase tracking-wider">Exp &lt; 30 Days</span>
                       </div>
                    </div>
 
                    {/* Totalizer */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 flex justify-between items-center mt-5">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                             <AlertCircle className="w-4 h-4 text-amber-600" />
                          </div>
                          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">Wasted Working Capital</span>
                       </div>
                       <span className="text-xl font-bold text-amber-600 font-mono tracking-tight">₹48,250</span>
                    </div>
                 </div>
 
                 {/* Decorative background glow */}
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-50/60 rounded-full blur-[60px] -ml-16 -mb-16 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
 
          {/* Item 3: Staff Headaches */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200 inline-block w-fit">
                Staff Headaches
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Managing the counter.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Pharmacists quitting without notice, manual billing mistakes, or worse—untracked inventory walking out the door undocumented. 
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-[#0B1222]/80 backdrop-blur-xl rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500 border border-white/10">
                 <DarkAtmosphere withMouseEffect={false} />
                 
                 {/* Intense Indigo Halo */}
                 <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                 
                 <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider mb-6 relative z-10 flex items-center justify-between">
                    <span>Daily Reconciliation</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[9px] text-white">End of Day</span>
                 </div>
                 
                 <div className="space-y-3 relative z-10">
                    <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                       <span className="text-xs text-indigo-100/70 font-bold uppercase tracking-wider">System Expected</span>
                       <span className="text-[15px] font-bold text-white font-mono tracking-tight">₹24,500</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                       <span className="text-xs text-indigo-100/70 font-bold uppercase tracking-wider">Drawer Actual</span>
                       <span className="text-[15px] font-bold text-white font-mono tracking-tight">₹22,100</span>
                    </div>
                    <div className="flex justify-between items-center bg-red-500/10 border border-red-500/30 p-4 rounded-xl mt-5 relative overflow-hidden backdrop-blur-sm">
                       <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
                       <div className="flex items-center gap-2 relative z-10">
                         <AlertCircle className="w-4 h-4 text-red-400" />
                         <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Missing Revenue</span>
                       </div>
                       <span className="text-sm font-mono font-bold text-red-400 relative z-10">- ₹2,400</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
 
          {/* Item 4: Retention (Reversed) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200 inline-block w-fit">
                Losing Recurring Patients
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">When patients don't come back.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Your diabetic and BP patients never come back for their month-two refills. They go to online apps or corporate chains. You are losing out on years of compounding recurring revenue.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-[#0B1222]/80 backdrop-blur-xl rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-red-500/10 transition-all duration-500 min-h-[380px] flex flex-col border border-white/10">
                 <DarkAtmosphere withMouseEffect={false} />
                 
                 {/* Intense Rose Halo */}
                 <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                 
                 <div className="text-[10px] font-bold text-indigo-200/80 uppercase tracking-wider mb-6 relative z-10 flex items-center justify-between">
                    <span>Patient Lifetime Value</span>
                    <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold animate-pulse border border-red-500/30">Lost Earnings</span>
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-center relative z-10 gap-6">
                    {/* Patient Profile Mock */}
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold text-lg border border-indigo-500/30">
                          AK
                       </div>
                       <div>
                          <div className="text-base font-bold text-white">Ananya K.</div>
                          <div className="text-xs text-indigo-100/60 font-medium">Type 2 Diabetes &bull; Monthly Refill</div>
                       </div>
                    </div>
 
                    <div className="space-y-4">
                       {/* Value 1: Secured */}
                       <div className="relative pl-6 border-l-2 border-emerald-500/50">
                          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-indigo-950"></div>
                          <div className="flex justify-between items-end">
                             <div>
                                <div className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest mb-1">Consultation</div>
                                <div className="text-sm font-bold text-emerald-400">Captured at Clinic</div>
                             </div>
                             <div className="text-lg font-mono font-bold text-white">₹1,000</div>
                          </div>
                       </div>
 
                       {/* The Leak Point */}
                       <div className="h-4 border-l-2 border-dashed border-red-500/50 ml-[11px]"></div>
 
                       {/* Value 2: Lost */}
                       <div className="relative pl-6 border-l-2 border-red-500/50">
                          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-red-500 ring-4 ring-indigo-950 animate-pulse"></div>
                          <div className="flex justify-between items-end">
                             <div>
                                <div className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest mb-1">12-Month Medicine Refills</div>
                                <div className="text-sm font-bold text-red-400">Lost to Third-Party App</div>
                             </div>
                             <div className="text-xl font-mono font-bold text-red-400 line-through decoration-red-500/50 opacity-80">₹36,000</div>
                          </div>
                          <p className="mt-3 text-[11px] text-red-200/90 bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20 leading-relaxed backdrop-blur-sm font-medium">
                             Patient is highly likely to switch doctors entirely if the app offers their own teleconsultation.
                          </p>
                       </div>
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
