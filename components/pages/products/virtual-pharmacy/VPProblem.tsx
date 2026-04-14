'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const premiumEase = [0.16, 1, 0.3, 1] as const;

const VPProblem = () => {
  return (
    <section className="bg-section-alt border-y border-slate-100 section-py relative overflow-hidden" id="challenge">
      
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container-page relative z-10">
        
        {/* STANDARDIZED HEADER LOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-16 md:mb-20"
        >
          <div className="eyebrow-wrap mb-6 inline-flex mx-auto">
            <span className="eyebrow-line-r" />
            <span className="eyebrow-text">The Dilemma</span>
            <span className="eyebrow-line-l" />
          </div>
          
          <h2 className="premium-h2 text-balance lg:max-w-4xl mx-auto mb-6">
            Your clinical expertise. <br className="hidden md:block" /> Someone else’s <span className="text-indigo-600">revenue</span>.
          </h2>
          
          <p className="premium-p intro-lock max-w-2xl mx-auto text-balance">
            You own the diagnosis. But when patients buy medicines elsewhere, you lose visibility into their care and miss out on long-term practice growth.
          </p>
        </motion.div>

        {/* STANDARDIZED GRID LOCK */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT: The Revenue Hemorrhage */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: premiumEase }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 mb-2 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">The Patient Drop-Off</h3>
            </div>

            {/* Leak 1 */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-card-lg hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-28 shrink-0">
                  <div className="stat-number !text-indigo-600 text-3xl lg:text-4xl">100<span className="text-indigo-400/80 text-2xl lg:text-3xl">%</span></div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1 group-hover:text-indigo-500 transition-colors">Care<br/>Compromised</p>
                </div>
                <div className="flex-1">
                  <h3 className="premium-h3 mb-2">Substituted Prescriptions</h3>
                  <p className="premium-p !text-sm leading-relaxed">
                    Patients often get alternative brands from local chemists, bypassing your exact medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Leak 2 */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-card-lg hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-28 shrink-0">
                  <div className="stat-number !text-indigo-600 text-3xl lg:text-4xl">68<span className="text-indigo-400/80 text-2xl lg:text-3xl">%</span></div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1 group-hover:text-indigo-500 transition-colors">Patients<br/>Lost</p>
                </div>
                <div className="flex-1">
                  <h3 className="premium-h3 mb-2">Fractured Loyalty</h3>
                  <p className="premium-p !text-sm leading-relaxed">
                    Without automated refills, chronic patients use external apps and rarely return to your clinic.
                  </p>
                </div>
              </div>
            </div>

            {/* Leak 3 */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-card-lg hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-full sm:w-28 shrink-0">
                   <div className="stat-number !text-indigo-600 text-3xl lg:text-4xl">₹0</div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1 group-hover:text-indigo-500 transition-colors">Lost<br/>Value</p>
                </div>
                <div className="flex-1">
                  <h3 className="premium-h3 mb-2 flex items-center justify-between">
                    Lost Patient Value
                  </h3>
                  <p className="premium-p !text-sm leading-relaxed">
                    Your prescription creates the demand, but external pharmacies capture the lifetime value of the patient.
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>


          {/* STANDARDIZED RIGHT COLUMN (ATMOSPHERIC INJECTION) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: premiumEase, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-2 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">The Operations Trap</h3>
            </div>
            
            <div className="bg-[#0B1120] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex-1 flex flex-col border border-white/10 shadow-card-lg">
              
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="relative z-10 mb-8 mt-2">
                <h3 className="premium-h3 !text-white tracking-tight mb-3">The Physical Reality</h3>
                <p className="premium-p !text-slate-400 !text-sm leading-relaxed">
                  You know patients are buying externally. But building your own pharmacy creates massive constraints.
                </p>
              </div>

              {/* Constraint List */}
              <div className="space-y-8 relative z-10 flex-1 flex flex-col justify-center mt-6">
                
                {/* Constraint 1 */}
                <div className="flex gap-5 items-start pb-6 border-b border-white/[0.06]">
                  <div className="w-20 shrink-0 mt-0.5">
                    <div className="stat-number !text-white text-2xl">100<span className="text-slate-400 text-sm ml-0.5">sq.ft</span></div>
                  </div>
                  <div>
                     <h4 className="text-slate-300 font-bold text-sm mb-1 uppercase tracking-wider">No Clinic Space</h4>
                     <p className="premium-p !text-[13px] !text-slate-400 leading-relaxed">Your clinic needs room for patients, not large storage racks for medicines.</p>
                  </div>
                </div>

                {/* Constraint 2 */}
                <div className="flex gap-5 items-start pb-6 border-b border-white/[0.06]">
                  <div className="w-20 shrink-0">
                    <div className="stat-number !text-white text-2xl">₹3L<span className="text-slate-400 text-xl">+</span></div>
                  </div>
                  <div>
                     <h4 className="text-slate-300 font-bold text-sm mb-1 uppercase tracking-wider">Trapped Cash</h4>
                     <p className="premium-p !text-[13px] !text-slate-400 leading-relaxed">Lakhs of rupees get permanently locked in slow-moving stock.</p>
                  </div>
                </div>

                {/* Constraint 3 */}
                <div className="flex gap-5 items-start">
                  <div className="w-20 shrink-0">
                    <div className="stat-number !text-white text-2xl">6<span className="text-slate-400 text-xl">+</span></div>
                  </div>
                  <div>
                     <h4 className="text-slate-300 font-bold text-sm mb-1 uppercase tracking-wider">Vendor Headaches</h4>
                     <p className="premium-p !text-[13px] !text-slate-400 leading-relaxed">Your staff is forced to manage distributors, licenses, and expiry audits instead of patients.</p>
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

export { VPProblem };
