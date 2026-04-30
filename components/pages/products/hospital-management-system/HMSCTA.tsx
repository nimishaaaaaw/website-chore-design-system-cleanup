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
          <div className="w-16 h-1 rounded-full mx-auto mb-10 opacity-60" style={{ background: 'var(--brand-600)' }} />

          <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white leading-[1.1] tracking-tight mb-12">
            <span className="inline-block md:whitespace-nowrap">Ready to deploy the</span>
            <br className="hidden md:block" />
            <span className="text-indigo-400"> Clinic OS?</span>
          </h2>

          <p className="premium-p mb-12 max-w-2xl mx-auto text-muted">
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
                className="group btn-cta-dark px-10 py-5 text-lg w-full sm:w-auto"
              >
                <span>Enable Medicine Deliveries</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" strokeWidth={1.5} />
              </button>
              </div>

        </motion.div>
      </div>
    </section>
  );
};