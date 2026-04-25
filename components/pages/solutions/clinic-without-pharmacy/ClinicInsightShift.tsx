"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardCheck, PackageCheck, HeartPulse } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { premiumEase } from '@/lib/animation';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicInsightShift = () => {
  return (
    <section className="section-py relative overflow-hidden" id="insight-shift">
      <DarkAtmosphere />
      
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
            Medicines you prescribe, <span className="text-indigo-400">delivered before your patient leaves.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: ClipboardCheck, 
              title: "1. Seamless Prescription", 
              desc: "You consult and prescribe as you normally do. Our system instantly handles the digital routing, ensuring the exact brand you chose is secured."
            },
            { 
              icon: PackageCheck, 
              title: "2. 10 min delivery", 
              desc: "MediKloud Hubs act as your invisible backend. Authentic medicines are dispatched from local hubs to reach your clinic waiting room in just 10 minutes."
            },
            { 
              icon: HeartPulse, 
              title: "3. Recovery Begins at Consultation", 
              desc: "Your patients receive their medicines instantly at your clinic. This ensures they start their treatment immediately, improving recovery rates and clinical outcomes."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-500 group group-hover:z-20"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 shadow-inner group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-500">
                <item.icon className="w-7 h-7 text-indigo-400" strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3 !text-white mb-3">{item.title}</h3>
              <p className="premium-p !text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
