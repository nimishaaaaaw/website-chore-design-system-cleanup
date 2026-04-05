"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Laptop, Clock, Truck, Sparkles } from 'lucide-react';

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

export const HospitalPharmacyProducts = () => {
  return (
    <section className="section-py bg-slate-950 relative overflow-hidden">
      {/* Dark Atmosphere Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-indigo-600/[0.07] rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/[0.08] rounded-full blur-[120px] -mr-32 -mt-32 animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-cyan-600/[0.08] rounded-full blur-[140px] -ml-40 -mb-40 animate-float-medium" />
      </div>

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="mb-16 space-y-4"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l bg-white/20" />
            <span className="eyebrow-text text-cyan-400">Integrated ecosystem</span>
            <span className="eyebrow-line-r bg-white/20" />
          </div>
          <h2 className="text-h2 font-black tracking-tight text-white leading-[1.1]">
            A complete system. <br/>
            <span className="text-slate-500">Not disconnected tools.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainerLocal} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Store,
              title: "Managed pharmacy",
              desc: "We run your pharmacy like a national chain — inside your hospital walls.",
              result: "Predictable revenue share without operational burden."
            },
            {
              icon: Laptop,
              title: "Free HMS integration",
              desc: "Digital prescriptions, instant pharmacy sync, and real-time data flows.",
              result: "Every prescription captured. Zero data silos."
            },
            {
              icon: Clock,
              title: "Refill engine",
              desc: "Predicts medicine exhaust cycles and triggers automated patient reorders.",
              result: "System-driven retention that scales automatically."
            },
            {
              icon: Truck,
              title: "Home delivery layer",
              desc: "Same-day medicine delivery with no dependency on third-party aggregators.",
              result: "Convenience that builds lifelong patient loyalty."
            }
          ].map((product, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 group flex flex-col h-full backdrop-blur-md relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-4 h-4 text-cyan-500/30" />
              </div>
              
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-500/10 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-300">
                <product.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{product.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow font-medium">{product.desc}</p>
              <div className="text-[11px] font-black uppercase tracking-widest text-cyan-400 border-t border-white/10 pt-6 mt-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {product.result}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

