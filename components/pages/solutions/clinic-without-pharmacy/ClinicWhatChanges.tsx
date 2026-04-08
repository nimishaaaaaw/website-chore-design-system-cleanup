"use client"

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-section-alt border-y border-[#E2E8F0]">
      <div className="container-page">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6"
          >
            All the capabilities of a pharmacy,<br className="hidden md:block" />
            <span className="bg-gradient-display bg-clip-text text-transparent pb-2" style={{ color: '#4F46E5' }}>
              none of the heavy lifting.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Zero Inventory", desc: "No tracking expiry dates, no wasted medicines." },
            { title: "Zero Real Estate", desc: "Don't sacrifice a single square foot of your clinic." },
            { title: "Zero Capital Risk", desc: "Operate as a digital dispensing node from day one." },
            { title: "Zero Hassle", desc: "We handle logistics, packaging, and support." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.5 } }
              }}
              className="card p-8 flex flex-col sm:flex-row items-start gap-6 hover:border-[#C7D2FE] group transition-all shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] flex items-center justify-center text-[#94A3B8] flex-shrink-0 border border-[#E2E8F0] group-hover:bg-[#EEF2FF] group-hover:text-[#4F46E5] group-hover:border-[#C7D2FE] transition-colors">
                <span className="font-black text-2xl line-through decoration-2">0</span>
              </div>
              <div>
                <h4 className="text-h3 text-[#0F172A] mb-3">{item.title}</h4>
                <p className="text-base font-medium text-[#64748B]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
