"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserMinus, 
  EyeOff, 
  ArrowRight,
  Clock3,
  Trash2,
  PackageX,
  TrendingDown,
  Activity,
  ShieldAlert
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const premiumEase = [0.16, 1, 0.3, 1] as any;

export function MPProblemGrid() {
  const { openModal } = useContactModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: premiumEase } 
    }
  };

  return (
    <section className="relative bg-white overflow-hidden section-py border-t border-slate-100">
      {/* Subtle Background Pattern */}
      <div className="tech-grid-overlay opacity-[0.03]" />
      
      <div className="relative z-10 container-page">
        
        {/* Standardized Gold Header Section */}
        <div className="header-lock text-center mb-12 space-y-4 max-w-[850px] mx-auto">
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text flex items-center gap-2">
               <ShieldAlert size={14} className="text-indigo-600" />
               Operational Leakage
            </span>
            <span className="eyebrow-line-r"></span>
          </div>
          <h2 className="premium-h2">
            Your pharmacy is{" "}
            <span className="text-indigo-600">
              losing cash daily.
            </span>
          </h2>
          <p className="premium-p intro-lock !max-w-2xl">
            Operating a pharmacy without the scale and technology of a modern retail chain leads to operational losses and patient churn.
          </p>
        </div>

        {/* Unified Bento Grid - Perfect Symmetry - Compact Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          
          {/* Card 1: Wasted Money */}
          <div className="group flex flex-col h-full bg-white rounded-[1.5rem] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-indigo-50 to-transparent rounded-full blur-3xl opacity-50 -z-10 transition-opacity group-hover:opacity-100" />
            
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform duration-500 shrink-0">
              <Trash2 size={20} strokeWidth={2} />
            </div>
            <h3 className="premium-h3 mb-2 shrink-0">Wasted Money</h3>
            <p className="text-sm lg:text-[15px] text-slate-500 leading-relaxed mb-4 shrink-0">
              Capital gets completely trapped in aging medicine sitting on shelves until expiry, aggressively starving your clinic of essential growth capital.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5 shrink-0">
              {['Retail Markups', 'Dead Stock', 'Expired Meds'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-indigo-50 border border-indigo-100/50 rounded-md text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Abstract UI Element */}
            <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Profit Loss</span>
                <span className="text-[11px] font-bold text-indigo-600 flex items-center gap-1"><TrendingDown size={14}/> HIGH</span>
              </div>
              <div className="flex items-end gap-1.5 h-10 w-full">
                {[40, 65, 80, 50, 30, 15].map((height, i) => (
                  <div key={i} className="flex-1 bg-slate-200 rounded-t-sm relative group-hover:bg-indigo-100 transition-colors" style={{ height: '100%' }}>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: premiumEase }}
                      className="absolute bottom-0 left-0 right-0 bg-indigo-400 rounded-t-sm origin-bottom" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Staff Stress */}
          <div className="group flex flex-col h-full bg-white rounded-[1.5rem] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-indigo-50 to-transparent rounded-full blur-3xl opacity-50 -z-10 transition-opacity group-hover:opacity-100" />
            
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform duration-500 shrink-0">
              <Clock3 size={20} strokeWidth={2} />
            </div>
            <h3 className="premium-h3 mb-2 shrink-0">Staff Stress</h3>
            <p className="text-sm lg:text-[15px] text-slate-500 leading-relaxed mb-4 shrink-0">
              Pharmacists are overwhelmed by manual workloads, driving high attrition. Fragmented systems expose your clinic to fatal underbilling and theft.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5 shrink-0">
              {['Staff Attrition', 'Underbilling', 'Inventory Theft'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-indigo-50 border border-indigo-100/50 rounded-md text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

             {/* Abstract UI Element */}
            <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Operational Friction</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded-md uppercase">Severe</span>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: premiumEase }}
                    className="h-full bg-indigo-400 rounded-full" 
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-medium tracking-wide">
                  <span>Manual Tasks: 85%</span>
                  <span>Clinical Care: 15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Operating in the Dark (Dark Theme) */}
          <div className="group flex flex-col h-full bg-slate-900 rounded-[1.5rem] p-6 lg:p-8 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
            <DarkAtmosphere withMouseEffect={false} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/0 to-slate-900/0 -z-10" />
            
            <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 text-white border border-white/10 group-hover:scale-110 transition-transform duration-500 shrink-0">
              <EyeOff size={20} strokeWidth={2} />
            </div>
            <h3 className="relative z-10 premium-h3 !text-white mb-2 shrink-0">Operating in the Dark</h3>
            <p className="relative z-10 text-slate-400 leading-relaxed mb-4 shrink-0 text-sm lg:text-[15px]">
              Inventory is managed purely by estimation. Devastating operational losses are only discovered during delayed end-of-month reconciliations.
            </p>

            <div className="relative z-10 flex flex-wrap gap-1.5 mb-5 shrink-0">
              {['Zero Real-time Data', 'Fragmented CRM', 'Delayed Reports'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-slate-300 uppercase tracking-widest backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Abstract UI Element */}
            <div className="relative z-10 mt-auto bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-[2px] bg-slate-900/20 z-10 flex items-center justify-center">
                 <div className="flex items-center gap-1.5 text-indigo-300 text-[10px] font-bold bg-slate-900/80 px-2.5 py-1 rounded-full border border-indigo-500/30">
                    <Activity size={12} /> Sync Failed
                 </div>
              </div>
              <div className="space-y-2 opacity-50 blur-[1px]">
                <div className="h-3 bg-white/10 rounded w-3/4"></div>
                <div className="h-3 bg-white/10 rounded w-1/2"></div>
                <div className="h-3 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Churn Loop */}
          <div className="group flex flex-col h-full bg-white rounded-[1.5rem] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-indigo-50 to-transparent rounded-full blur-3xl opacity-50 -z-10 transition-opacity group-hover:opacity-100" />
            
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform duration-500 shrink-0">
              <UserMinus size={20} strokeWidth={2} />
            </div>
            <h3 className="premium-h3 mb-2 shrink-0">Churn Loop</h3>
            <p className="text-sm lg:text-[15px] text-slate-500 leading-relaxed mb-4 shrink-0">
              Patients visit your clinic for immediate care, but divert their highly profitable chronic refill prescriptions straight to massive external retail chains.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5 shrink-0">
              {['No Delivery', 'External Refills', 'Lost Retention'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-indigo-50 border border-indigo-100/50 rounded-md text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            {/* Abstract UI Element */}
            <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-between">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                  <PackageX size={14} />
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Clinic</span>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative px-2">
                <div className="w-full h-px border-t border-dashed border-slate-300"></div>
                <div className="absolute top-1/2 -translate-y-1/2 bg-white px-2 text-[9px] font-bold text-indigo-600 tracking-wider text-center leading-tight">
                  NO HOME DELIVERY = <br/> PATIENTS LEAVE
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-sm">
                  <ArrowRight size={14} />
                </div>
                <span className="text-[9px] font-bold text-indigo-600 uppercase">Retailer</span>
              </div>
            </div>
          </div>

        </div>

        {/* High-Impact Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {[
            { label: "Lost Profits", value: "₹1 Lakh+", sub: "Per Month" },
            { label: "Wasted Clinical Time", value: "2 Hours", sub: "Daily Admin" },
            { label: "Dead Inventory", value: "₹5 Lakh+", sub: "Trapped Cash" },
            { label: "Chronic Churn", value: "60%+", sub: "Lost to Retail" }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 lg:p-6 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-card-sm transition-shadow">
              <div className="stat-number font-bold text-3xl md:text-4xl mb-2 text-indigo-600 tracking-tight">{stat.value}</div>
              <div className="text-xs font-bold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-[1.5rem] p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group">
            <DarkAtmosphere withMouseEffect={true} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">Ready to stop the leakage?</h3>
              <p className="text-slate-400 text-sm lg:text-base">Stop the revenue gaps and upgrade to retail-grade infrastructure today.</p>
            </div>
            
            <button 
              onClick={() => openModal({
                    badge: "Managed Operations",
                    title: "Launch Your Recovery Plan",
                    description: "Stop the leakage today with our fully managed operational layer.",
                    btnText: "Start Recovery Plan",
                    successTitle: "Recovery Plan Initiated!",
                    successDescription: "Our team will reach out within 24 hours to begin your revenue recovery plan."
                  })}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-[#4E46E5] rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all active:scale-95 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <span>Optimize My Pharmacy</span>
                <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-2" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
