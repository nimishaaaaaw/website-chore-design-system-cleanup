"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, AlertCircle } from 'lucide-react';

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
          className="max-w-[825px] space-y-4 mx-auto text-center"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Diagnostic: The Operations Trap</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.3]">
            Running a clinic is your job.<br/>
            <span className="text-indigo-600">Running a retail store shouldn't be.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-[800px] mx-auto mt-4">
            Most clinic pharmacies don't fail loudly. They leak money silently through a hundred small cracks that you simply don't have the time to monitor.
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
              <span className="text-[12px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg border border-rose-100/50 inline-block w-fit">
                The Walk-Out
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">"I'll just buy it near my house."</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Patients leave because you don't offer home delivery, or your counter queue is simply too long. You did the clinical work, but a local retail chemist gets the revenue.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-rose-500/10 group-hover:border-rose-100 transition-all duration-500">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-6">Daily Prescription Flow</div>
                 <div className="space-y-5 relative z-10">
                    <div>
                      <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                        <span>Written by Doctor</span> <span>100%</span>
                      </div>
                      <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                         <div className="h-full bg-slate-400 w-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-bold text-rose-500 mb-2">
                        <span>Filled at your counter</span> <span>42%</span>
                      </div>
                      <div className="h-3 w-full bg-rose-100 rounded-full overflow-hidden">
                         <div className="h-full bg-rose-500 w-[42%] rounded-full relative">
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-pulse"></div>
                         </div>
                      </div>
                    </div>
                 </div>
                 <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-bold text-slate-500">Uncaptured Value (Leakage)</span>
                    <span className="text-sm font-bold text-rose-500 flex items-center gap-1.5 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100"><TrendingUp className="w-4 h-4 rotate-180" /> 58%</span>
                 </div>
                 {/* Decorative background glow */}
                 <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose-100/50 rounded-full blur-[40px] -mr-10 -mb-10 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Dead Stock (Reversed) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100/50 inline-block w-fit">
                Dead Stock
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Money dying on the shelves.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Medicines expire because no one is accurately tracking what moves and what doesn't. Your working capital is trapped in boxes sitting in the back room.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/10 group-hover:border-amber-100 transition-all duration-500">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-6">Inventory Health Alert</div>
                 
                 <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm relative z-10 space-y-4">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100 shrink-0">
                          <Package className="w-6 h-6 text-amber-500" />
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[13px] font-bold text-slate-800">Slow Moving Stock</span>
                            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">Warning</span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium">124 units expiring in &lt; 60 days</p>
                       </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex justify-between items-center">
                       <span className="text-[11px] font-bold text-slate-500">Trapped Capital:</span>
                       <span className="text-[13px] font-bold text-slate-800 font-mono">₹48,250</span>
                    </div>
                 </div>

                 {/* Decorative background glow */}
                 <div className="absolute top-0 left-0 w-48 h-48 bg-amber-100/50 rounded-full blur-[40px] -ml-10 -mt-10 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Item 3: Staff Headaches */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/50 inline-block w-fit">
                Staff Headaches
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Managing the counter.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Pharmacists quitting without notice, manual billing mistakes, or worse—untracked inventory walking out the door undocumented. 
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-slate-900/20 border border-slate-800 transition-all duration-500">
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-6">Daily Reconciliation</div>
                 
                 <div className="space-y-3 relative z-10">
                    <div className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-xl">
                       <span className="text-xs text-slate-400">System Expected</span>
                       <span className="text-sm font-mono text-slate-200">₹24,500</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-xl">
                       <span className="text-xs text-slate-400">Drawer Actual</span>
                       <span className="text-sm font-mono text-slate-200">₹22,100</span>
                    </div>
                    <div className="flex justify-between items-center bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl mt-4">
                       <div className="flex items-center gap-2">
                         <AlertCircle className="w-4 h-4 text-rose-400" />
                         <span className="text-xs font-bold text-rose-400">Unexplained Variance</span>
                       </div>
                       <span className="text-sm font-mono font-bold text-rose-400">- ₹2,400</span>
                    </div>
                 </div>

                 {/* Decorative background glow */}
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-800/80 rounded-full blur-[50px] -ml-10 -mb-10 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Item 4: Chronic Loss (Reversed) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 items-center group"
          >
            <div className="flex-1 space-y-5">
              <span className="text-[12px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg border border-rose-100/50 inline-block w-fit">
                Chronic Loss
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">The one-time buyer.</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Your diabetic and BP patients never come back for their month-two refills. They go to MedPlus or 1mg. You are losing out on years of compounding recurring revenue.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-rose-500/10 group-hover:border-rose-100 transition-all duration-500">
                 <div className="flex justify-between items-center mb-8 relative z-10">
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Patient Retention Curve</div>
                     <div className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-md border border-rose-100 animate-pulse">Critical Drop</div>
                 </div>
                 
                 <div className="flex items-end gap-4 h-[140px] relative z-10 px-2">
                    {/* Target Line */}
                    <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-slate-300 z-0"></div>
                    <div className="absolute top-[-20px] right-0 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-1">Ideal Retention</div>

                    {/* Month 1 */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="w-full bg-slate-800 rounded-t-xl relative group-hover:bg-slate-900 transition-colors shadow-lg">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[13px] font-bold text-slate-800">100%</span>
                      </motion.div>
                    </div>
                    {/* Month 2 */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '30%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="w-full bg-gradient-to-t from-rose-600 to-rose-500 rounded-t-xl relative group-hover:from-rose-700 group-hover:to-rose-600 transition-colors shadow-[0_0_20px_rgba(244,63,94,0.4)]">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[13px] font-bold text-rose-600">30%</span>
                      </motion.div>
                    </div>
                    {/* Month 3 */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end relative z-10">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: '10%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="w-full bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-xl relative group-hover:from-rose-600 group-hover:to-rose-500 transition-colors shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[13px] font-bold text-rose-500">10%</span>
                      </motion.div>
                    </div>
                 </div>

                 {/* Labels */}
                 <div className="flex gap-4 px-2 mt-3 relative z-10 border-t-2 border-slate-200/80 pt-3">
                    <div className="flex-1 text-center"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Month 1</span></div>
                    <div className="flex-1 text-center"><span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">Month 2</span></div>
                    <div className="flex-1 text-center"><span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Month 3</span></div>
                 </div>

                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-100/40 rounded-full blur-[40px] pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
