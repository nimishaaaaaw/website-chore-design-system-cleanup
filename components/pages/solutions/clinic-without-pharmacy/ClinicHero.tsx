"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Warehouse, 
  ShieldCheck, 
  UserPlus, 
  Pill, 
  Droplets, 
  Sparkles, 
  Truck
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface ClinicHeroProps {
  onBookDemo?: () => void;
}

export const ClinicHero = ({ onBookDemo }: ClinicHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-section-hero border-b border-[#E2E8F0]">
      {/* Abstract Background Blobs */}
      <div className="blob-layer z-0">
        <div className="blob-blue w-[28rem] h-[28rem] -top-24 -left-24 animate-float-slow" />
        <div className="blob-indigo w-[32rem] h-[32rem] top-1/4 -right-24 animate-float-medium" />
        <div className="blob-violet w-[30rem] h-[30rem] bottom-0 left-1/3 animate-float-slower" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer} 
            className="space-y-8 max-w-xl"
          >
            <motion.div variants={fadeInUp} className="eyebrow-wrap justify-start">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">For Independent Clinics</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                variants={fadeInUp} 
                className="text-display-md sm:text-display-lg lg:text-display-xl font-bold tracking-tight leading-[1.1] md:tracking-[-0.03em]"
              >
                <span className="block bg-gradient-display bg-clip-text text-transparent pb-4" style={{ color: '#4F46E5' }}>
                  You prescribe. <br className="hidden sm:block" />
                  We deliver.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-[#475569] font-medium leading-relaxed max-w-lg">
                Turn your clinic into a full-service care hub. Offer instant doorstep delivery with zero inventory and zero upfront cost.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="pt-2">
              <button 
                onClick={onBookDemo}
                className="btn btn-primary btn-lg group text-lg px-8 py-4 shadow-btn"
              >
                Book a Free Demo
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual (Dynamic SaaS Widget) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} 
            className="relative hidden lg:block mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Floating Explainer Badge 1 - Top Right */}
              <div className="absolute -right-6 top-6 z-30 animate-float-badge">
                <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#E2E8F0] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Warehouse className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-[#0F172A] font-bold text-xs uppercase tracking-wider">Zero Inventory</div>
                    <div className="text-[#64748B] text-[11px] font-medium">Packed at our hub</div>
                  </div>
                </div>
              </div>

              {/* Floating Explainer Badge 2 - Bottom Left */}
              <div className="absolute -left-10 bottom-16 z-30 animate-float-badge" style={{ animationDelay: '1s' }}>
                <div className="bg-[#0F172A] rounded-2xl p-4 shadow-2xl border border-slate-700/50 flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">100% Adherence</div>
                    <div className="text-white font-black text-lg">Patient Retained</div>
                  </div>
                </div>
              </div>

              {/* Main Interactive Card */}
              <div className="w-[440px] card-glass relative z-20 shadow-card-lg border-[#C7D2FE] p-0 overflow-visible animate-float-slower">
                <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl rounded-[20px] z-0 pointer-events-none border border-white/60" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-[#E2E8F0]/80 bg-white/50 rounded-t-[20px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] border border-[#C7D2FE] shadow-sm">
                        <UserPlus className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0F172A] leading-tight">Rahul Sharma, 42</h4>
                        <p className="text-xs text-[#64748B] font-medium mt-0.5">Consultation complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Rx Ready</span>
                    </div>
                  </div>
                  
                  {/* Prescription Items */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#C7D2FE] transition-colors group/item">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-[#F1F5F9] group-hover/item:bg-[#EEF2FF] group-hover/item:text-[#4F46E5] transition-colors">
                          <Pill className="w-5 h-5 text-[#64748B] group-hover/item:text-[#4F46E5]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#0F172A]">Telmisartan 40mg</div>
                          <div className="text-xs font-medium text-[#64748B] mt-0.5">1 Tablet · After Breakfast</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0F172A]">₹145</div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">In Stock</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#C7D2FE] transition-colors group/item">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-[#F1F5F9] group-hover/item:bg-[#EEF2FF] group-hover/item:text-[#4F46E5] transition-colors">
                          <Droplets className="w-5 h-5 text-[#64748B] group-hover/item:text-[#4F46E5]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#0F172A]">Metformin 500mg</div>
                          <div className="text-xs font-medium text-[#64748B] mt-0.5">1 Tablet · After Dinner</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0F172A]">₹65</div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">In Stock</div>
                      </div>
                    </div>
                  </div>

                  {/* Shimmering Infrastructure Box */}
                  <div className="px-6 pb-2">
                     <div className="relative overflow-hidden p-4 bg-[#EEF2FF] rounded-xl border border-[#C7D2FE] flex justify-between items-center shadow-inner">
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                        
                        <div className="relative z-10 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                          <span className="text-sm font-bold text-[#1D4ED8]">Clinic Facilitation Fee</span>
                        </div>
                        <span className="relative z-10 text-xl font-black text-[#4F46E5]">+₹210.00</span>
                     </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-4">
                    <button className="w-full btn btn-primary py-4 text-[15px] shadow-btn flex items-center justify-center gap-2 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <Truck className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" /> 
                      <span className="relative z-10 font-bold">Deliver to Patient's Home</span>
                    </button>
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

