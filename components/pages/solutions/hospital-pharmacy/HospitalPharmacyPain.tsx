"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

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

export const HospitalPharmacyPain = () => {
  return (
    <section className="section-py bg-white border-y border-slate-100">
      <div className="container-page">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainerLocal} 
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-indigo-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">The core issue</span>
            </div>

            <motion.h2 variants={fadeInUp} className="text-h2 font-black leading-tight tracking-tight">
              <span className="text-slate-900 inline-block">This isn't a pharmacy problem.</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block">
                It's a system problem.
              </span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-body-lg text-slate-600 max-w-xl font-medium leading-relaxed">
              Most hospital pharmacies don't fail because of effort. They fail because retail chains win — not because they're better, but because they have systems your hospital was never given.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Single-point vulnerability", desc: "One person handles stock, billing, and cash. Leakage is inevitable." },
              { title: "Invisible inventory", desc: "No real-time tracking means stock losses stay hidden until auditing." },
              { title: "Chronic revenue drain", desc: "No patient follow-up means repeat prescriptions walk out the door." },
              { title: "Fragmented procurement", desc: "Low buying power keeps your margins razor-thin." },
              { title: "Convenience gap", desc: "No home delivery forces patients to choose retail over your hospital." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-indigo-100 hover:shadow-card-md transition-all duration-300">
                <div className="bg-white text-indigo-600 p-2.5 rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-h3 font-bold text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

