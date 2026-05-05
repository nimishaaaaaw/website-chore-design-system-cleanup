"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-1 rounded-full mb-12 opacity-60 bg-brand-600" />
            <h3 className="text-display-md sm:text-display-lg md:text-display-xl font-bold text-white max-w-5xl mx-auto leading-[1.05] tracking-tight text-balance mb-8">
              Ready to deploy the <br className="hidden md:block" />
              <span className="text-indigo-400">Clinic OS?</span>
            </h3>

            <p className="premium-p mb-12 max-w-2xl mx-auto text-slate-400">
              Stop managing software and get back to patient care. Get a live walkthrough of the platform, and see how you can migrate your entire clinic in under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button
                onClick={() => openModal({
                  badge: "Medicine Deliveries",
                  title: "Enable Direct Patient Delivery.",
                  description: "Let us handle the logistics so your patients always get the right medicine, on time.",
                  btnText: "Schedule Your Demo",
                  successTitle: "Deployment Plan Initiated!",
                  successDescription: "Our team will be in touch within 24 hours to map your infrastructure."
                })}
                className="group btn-cta-hero"
              >
                <span>Experience HMS</span>
                <ArrowRight 
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
                  strokeWidth={2} 
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};