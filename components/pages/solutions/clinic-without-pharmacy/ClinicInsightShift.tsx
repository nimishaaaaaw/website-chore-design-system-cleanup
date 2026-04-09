"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardCheck, PackageCheck, HeartPulse } from 'lucide-react';

const premiumEase = [0.16, 1, 0.3, 1] as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicInsightShift = () => {
  return (
    <section className="section-py bg-slate-900 relative overflow-hidden" id="insight-shift">
      {/* Forensic Background Textures */}
      <div className="tech-grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Brand Blobs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-600/10 rounded-full blur-[80px] translate-y-1/2 pointer-events-none animate-float-slower" />
      
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <div className="eyebrow-wrap justify-center mb-6">
            <span className="eyebrow-line-l !bg-indigo-500/30"></span>
            <span className="eyebrow-text !text-indigo-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> The MediKloud Virtual Pharmacy
            </span>
            <span className="eyebrow-line-r !bg-indigo-500/30"></span>
          </div>
          
          <h2 className="premium-h2 !text-white">
            Turn your clinic into a <span className="text-indigo-400">full-service care hub.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: ClipboardCheck, 
              title: "1. You Prescribe", 
              desc: "Write prescriptions normally. Our software seamlessly routes the digital order to our secure fulfillment network."
            },
            { 
              icon: PackageCheck, 
              title: "2. Invisible Logistics", 
              desc: "We act as your backend. Our dark pharmacies pick, pack, and dispatch authentic medicines on your behalf."
            },
            { 
              icon: HeartPulse, 
              title: "3. Care Loop Closed", 
              desc: "Patients receive treatment at their doorstep. Adherence goes up, and your clinic monetizes its digital workflow."
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: premiumEase }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 group group-hover:z-20"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-indigo-500/30 transition-colors">
                <item.icon className="w-7 h-7 text-indigo-400" strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3 !text-white mb-3">{item.title}</h3>
              <p className="premium-p !text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
