"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShoppingCart, Users2, FileText, Ban, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const ClinicWithPharmacyReality = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l bg-rose-500/30" />
            <span className="eyebrow-text text-rose-500">The hidden reality</span>
          </div>
          <h2 className="text-h2 font-black tracking-tight text-slate-900 leading-tight">
            Most clinic pharmacies don’t fail loudly.<br/>
            <span className="text-slate-400">They leak silently.</span>
          </h2>
          <p className="text-body-lg text-slate-500 font-medium max-w-2xl">
            You don’t see it in reports. You feel it in inconsistency. Your clinic generates massive demand, but your pharmacy operations fail to capture it.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainerLocal} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100 rounded-[2.5rem] overflow-hidden bg-slate-50/30 backdrop-blur-sm shadow-sm"
        >
          {[
            {
              icon: ShoppingCart,
              title: "Volume drift",
              desc: "Patients say they'll buy but drift to online apps or retail chains before home.",
              risk: "25% Conversion Loss"
            },
            {
              icon: Users2,
              title: "Staff variance",
              desc: "Manual errors, unauthorized discounts, or billing misses by overworked staff.",
              risk: "Operational Leak"
            },
            {
              icon: FileText,
              title: "Prescription gap",
              desc: "Handwritten notes get lost between the doctor's desk and the pharmacy counter.",
              risk: "Revenue Capture"
            },
            {
              icon: Ban,
              title: "Stock mismatch",
              desc: "Inventory sits on shelves, expires, or runs out during peak consultation hours.",
              risk: "Inventory Sink"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="group p-8 lg:p-10 border-r border-b border-slate-100 last:border-r-0 hover:bg-white transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Risk Badge */}
              <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                  {item.risk}
                </span>
              </div>

              {/* Two-tone Icon */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm border border-indigo-100/50">
                <item.icon className="w-7 h-7 stroke-[1.5]" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-medium mb-8 flex-grow">{item.desc}</p>
              
              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-rose-500 transition-colors">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Structural Leak
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>

              {/* Rhythmic Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-rose-500/10 w-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="h-full w-full bg-rose-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Context - Financial Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-slate-900 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/10"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-400 tracking-[0.2em] uppercase mb-1 group-hover:text-slate-500 transition-colors">compounding loss</p>
              <p className="text-body-lg text-slate-700 font-bold group-hover:text-white transition-colors leading-tight">
                Losing just 5–10 prescriptions a day creates a hollow <br className="hidden lg:block"/> 
                revenue structure that collapses your year-end EBITDA.
              </p>
            </div>
          </div>
          
          <div className="px-6 py-3 rounded-xl border border-slate-200 group-hover:border-slate-800 group-hover:bg-slate-800 transition-all text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Impact estimation</span>
            <span className="text-xl font-black text-rose-500 tracking-tighter italic">Significant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
