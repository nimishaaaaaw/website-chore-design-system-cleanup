"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Zap
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { premiumEase } from '@/lib/animation';


export function MPv2PersonaCTA() {
  const { openModal } = useContactModal();
  
  return (
    <section className="relative section-py overflow-hidden min-h-[60vh] flex items-center">
      <DarkAtmosphere />
      
      <div className="container-page relative z-10 w-full text-center">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="eyebrow-wrap justify-center mb-6"
          >
            <span className="eyebrow-line-l !bg-indigo-500/30"></span>
            <span className="eyebrow-text !text-indigo-400">Next Steps</span>
            <span className="eyebrow-line-r !bg-indigo-500/30"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Ready to upgrade your <br className="hidden md:block" />
            <span className="text-indigo-400">hospital pharmacy?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Experience autonomous pharmacy operations with zero upfront cost. We handle the staff, medicine, and stress while you own 100% of the retail profit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: premiumEase }}
            className="pt-8"
          >
            <button 
              onClick={() => openModal({
                    badge: "Managed Pharmacy",
                    title: "Plan Your Managed Pharmacy Upgrade",
                    description: "Schedule a demo to see how MediKloud takes the complexity out of inventory, staffing, and compliance.",
                    btnText: "Schedule Your Demo",
                    successTitle: "Optimization Plan Initiated!",
                    successDescription: "Our team will reach out within 24 hours to start your pharmacy optimization plan."
                  })}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-brand-1 rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all active:scale-95 border border-white/10"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span>Optimize My Pharmacy</span>
                <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-2" strokeWidth={2.5} />
              </div>
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-indigo-500" /> Zero Upfront Cost
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-indigo-500" /> 30-Day Transition
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
