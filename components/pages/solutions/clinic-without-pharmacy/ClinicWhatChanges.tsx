"use client"

import React from 'react';
import { motion } from 'framer-motion';

const premiumEase = [0.16, 1, 0.3, 1] as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <h2 className="premium-h2">
            All the <span className="text-indigo-600">capabilities of a pharmacy,</span>
            none of the heavy lifting.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 lg:mt-20">
          {[
            { title: "Zero Inventory", desc: "No tracking expiry dates, no wasted medicines." },
            { title: "Zero Real Estate", desc: "Don't sacrifice a single square foot of your clinic." },
            { title: "Zero Capital Risk", desc: "Operate as a digital dispensing node from day one." },
            { title: "Zero Hassle", desc: "We handle logistics, packaging, and support." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: premiumEase }}
              className="card p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 border-slate-200 hover:border-brand-indigo-100 group group-hover:z-20 transition-all rounded-[2rem]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 flex-shrink-0 border border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors duration-500">
                <span className="font-bold text-2xl line-through decoration-2">0</span>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="premium-h3 mb-3">{item.title}</h4>
                <p className="premium-p text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
