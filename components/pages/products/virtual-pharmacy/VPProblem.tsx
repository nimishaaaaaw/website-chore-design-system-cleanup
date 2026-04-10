'use client';

import React from 'react';
import { 
  IndianRupee, 
  Ruler, 
  Store, 
  Quote, 
  XCircle, 
  TrendingDown, 
  AlertTriangle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const premiumEase = [0.16, 1, 0.3, 1] as const;

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const VPProblem = () => {
  return (
    <section className="bg-section-alt border-y border-slate-100 section-py relative overflow-hidden" id="challenge">
      {/* Forensic Background Textures */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 md:mb-16"
        >
          <div className="eyebrow-wrap mb-4">
            <span className="eyebrow-line-r" />
            <span className="eyebrow-text">The Challenge</span>
            <span className="eyebrow-line-l" />
          </div>
          
          <h2 className="premium-h2 text-balance lg:max-w-header-lock mx-auto mb-6">
            The hidden overhead of an <br className="hidden lg:block"/> <span className="text-indigo-600">in-house pharmacy.</span>
          </h2>
          
          <p className="premium-p intro-lock">
            Physical setups demand high upfront capital, consume valuable clinic space, and require constant regulatory oversight.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          
          {/* Box 1: Financial Risk (Span 7) - Tightened */}
          <div 
            className="md:col-span-7 card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/80 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-50 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center border border-rose-100 shadow-sm">
                  <IndianRupee size={20} className="stroke-[1.5]" />
                </div>
                <h3 className="premium-h3">The Capital Trap</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="stat-number !text-rose-500 text-2xl md:text-3xl lg:text-4xl">₹10L<span className="text-rose-600">+</span></span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Upfront Capital Locked</p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3.5 relative z-10 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" strokeWidth={1.5} />
                <span className="premium-p !text-sm font-medium">Massive upfront investment in dead retail stock</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-rose-400 shrink-0" strokeWidth={1.5} />
                <span className="premium-p !text-sm font-medium">Direct financial losses from expired specialized medicines</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Space Constraints (Span 5) - Tightened */}
          <div 
            className="md:col-span-5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group text-white shadow-card-brand hover:-translate-y-1 transition-all duration-500 flex flex-col border border-white/5"
          >
            <DarkAtmosphere showStars={false} />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-white/10 w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm text-indigo-300 shadow-xl">
                <Ruler size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="premium-h3 !text-white">The Space Tax</h3>
            </div>

            <div className="mb-4 relative z-10">
              <span className="stat-number !text-white text-2xl md:text-3xl">100<span className="text-xl text-indigo-400 ml-1 font-bold">sq.ft</span></span>
              <p className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest mt-1.5">Wasted Storage Space</p>
            </div>

            {/* Visual Blueprint Graphic */}
            <div className="mt-auto relative z-10">
              <div className="flex gap-2 h-16 w-full">
                <div className="flex-1 border-2 border-dashed border-rose-400/30 bg-rose-500/10 rounded-xl flex items-center justify-center p-2 transition-all group-hover:bg-rose-500/20">
                  <span className="text-[9px] font-bold text-rose-300 uppercase tracking-wider text-center">Lost to<br/>Storage</span>
                </div>
                <div className="flex-[2] border border-indigo-400/30 bg-indigo-500/20 rounded-xl flex items-center justify-center p-2">
                  <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider">Patient Care Area</span>
                </div>
              </div>
              <p className="premium-p !text-sm !text-slate-400 mt-5 font-medium">ROI becomes completely negative for clinics seeing under 30 patients daily.</p>
            </div>
          </div>

          {/* Box 3: Regulatory Drag (Span 5) - Tightened */}
          <div 
            className="md:col-span-5 card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group flex flex-col"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
             
             <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="bg-amber-50 text-amber-600 w-11 h-11 rounded-xl flex items-center justify-center border border-amber-100 shadow-sm">
                <Store size={20} className="stroke-[1.5]" />
              </div>
              <h3 className="premium-h3">The Retail Drag</h3>
            </div>

            <p className="premium-p !text-slate-600 font-medium mb-6 relative z-10">
              Forces you to become a shopkeeper instead of focusing entirely on patient care.
            </p>

            {/* Tag Cloud instead of Paragraph */}
            <div className="mt-auto relative z-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <AlertTriangle size={14} className="text-amber-500" strokeWidth={1.5} /> Administrative Headaches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Drug Licenses', 'GST Filings', 'Inspector Visits', 'Stock Audits', 'Expiry Tracking'].map((tag, i) => (
                  <span key={i} className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm hover:border-slate-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Box 4: The Paradigm Shift (Span 7) - Tightened */}
          <div 
            className="md:col-span-7 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white group shadow-glow transition-all duration-500 flex flex-col justify-center"
          >
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none">
               <Quote size={200} />
            </div>
            
            <div className="relative z-10 max-w-lg">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight mb-6 text-white text-balance">
                "Doctors understand the value of a pharmacy—they just can't justify the physical costs."
              </p>
              
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                <p className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-blue-50">
                  MediKloud removes the cost
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { VPProblem };
