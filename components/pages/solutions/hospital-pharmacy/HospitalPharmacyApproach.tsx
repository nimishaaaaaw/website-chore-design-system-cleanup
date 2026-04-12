"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Package, Users2, ShieldCheck, Truck } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainerLocal: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalPharmacyApproach = () => {
  return (
    <section id="how-it-works" className="section-py bg-slate-100 relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
          className="max-w-[850px] mx-auto text-center mb-12 lg:mb-20 space-y-6"
        >
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-l bg-indigo-500/30" />
            <span className="eyebrow-text text-indigo-600">The Partnership</span>
            <span className="eyebrow-line-r bg-indigo-500/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.3]">
            We run the pharmacy.<br/>
            <span className="text-indigo-600">You focus on the patient.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-[850px] mx-auto mt-4">
            We don't believe in generic partnerships. Whether you need us to run your daily counter or just automate your home deliveries, we have a model that fits your clinical workflow.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Inventory (High-Contrast Dark Card) */}
          <div className="md:col-span-2 bg-[#0B1222] rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden group shadow-2xl">
            <DarkAtmosphere withMouseEffect={false} />
            
            {/* Vivid Background Halo */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-500/5">
                  <Package className="w-7 h-7 text-blue-400" />
                </div>
                <div className="px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-400/20 text-blue-300 text-[12px] font-bold tracking-tight flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-blue-400" /> Zero Capital Required
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">100% Funded Inventory</h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-lg opacity-90">
                  We buy the stock. We carry the risk. We clear out your expired or slow-moving stock and replenish the fast-movers based directly on your prescriptions. Your capital remains free.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Staffing (Light Card) */}
          <div className="md:col-span-1 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm group hover:shadow-card-lg transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-8 text-indigo-600 transition-all">
              <Users2 className="w-7 h-7" />
            </div>
            <div className="mt-auto">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">Expert Staffing</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                We hire, train, and manage the licensed pharmacists. You never worry about scheduling, attrition, or counter management again.
              </p>
            </div>
          </div>

          {/* Card 3: Pilferage (Light Card) */}
          <div className="md:col-span-1 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm group hover:shadow-card-lg transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 text-emerald-600 transition-all">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="mt-auto">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">Leak-Proof Ops</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Barcode billing and daily automated audits mean zero untracked inventory walking out the door. Every pill is accounted for.
              </p>
            </div>
          </div>

          {/* Card 4: Retention (Gradient Card) */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden group shadow-xl shadow-indigo-600/20 flex flex-col justify-end">
            <div className="absolute right-[-40px] bottom-[-20px] md:right-8 md:top-1/2 md:-translate-y-1/2 w-[280px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-2xl transform rotate-3 transition-all duration-500 hidden sm:block">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-inner">
                     <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-white text-[12px] font-bold block tracking-tight">Delivery Assistant</span>
                    <span className="text-indigo-200 text-xs">Just now</span>
                  </div>
               </div>
               <div className="bg-white text-slate-800 text-[14px] p-4 rounded-2xl rounded-tl-sm leading-relaxed shadow-sm font-medium">
                  "Hi! Your monthly BP medicine is ready from <span className="text-indigo-600 font-bold">Your Clinic</span>. Reply 'YES' to confirm home delivery."
               </div>
            </div>

            <div className="relative z-10 flex flex-col h-full max-w-[50%]">
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center mb-8 backdrop-blur-sm">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Medicine Deliveries to Doorsteps</h3>
                <p className="text-indigo-100 text-base leading-relaxed">
                  We send automatic WhatsApp reminders and handle the home delivery for you under your hospital's brand. Chronic patients stay yours, forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
