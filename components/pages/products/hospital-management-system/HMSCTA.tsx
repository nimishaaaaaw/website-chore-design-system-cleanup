"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const HMSCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-center text-white border-t border-slate-800/60">
      <DarkAtmosphere />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-1 bg-brand-600 rounded-full mx-auto mb-10 opacity-60"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-12">
            <span className="inline-block md:whitespace-nowrap">Ready to deploy the</span> <br className="hidden md:block" />
            <span className="!text-indigo-400">Clinic OS?</span>
          </h2>
          
          <p className="premium-p !text-slate-400 max-w-2xl mx-auto mb-12">
            Stop managing software and get back to patient care. Get a live walkthrough of the platform, and see how you can migrate your entire clinic in under 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => openModal({
                badge: "Clinic OS",
                title: "Experience The Hospital OS",
                description: "Schedule a demo to see how our AI-driven Clinic OS can modernize every touchpoint of your patient journey.",
                btnText: "Schedule Your Demo",
                successTitle: "HMS Demo Scheduled!",
                successDescription: "Our team will reach out within 24 hours to schedule your Hospital OS demo."
              })}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-[#4E46E5] rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95 border-1.5 border-white/10"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span>Experience HMS</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
