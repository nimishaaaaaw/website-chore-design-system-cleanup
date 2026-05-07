"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export const HospitalPharmacyCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="section-py relative overflow-hidden bg-slate-950">
      {/* 1. Dark Atmosphere for consistent grid and noise overlays */}
      <DarkAtmosphere />

      {/* 2. Ambient glow for the CTA focal point */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-brand-indigo-600/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-[850px] mx-auto text-center space-y-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Standardized Header Pattern */}
            <h2 className="premium-h2 text-white mb-6 leading-[1.1] tracking-tight mx-auto max-w-[900px]">
              Ready for a truly <br className="hidden md:block" />
              <span className="text-brand-indigo-400 pr-2">
                integrated patient journey?
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg md:text-xl text-slate-400 max-w-[750px] mx-auto font-medium leading-relaxed"
          >
            Schedule a free 30-minute diagnostic with our team. We'll show you how integrating your pharmacy and clinic operations can eliminate revenue leakage and secure long-term patient loyalty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => openModal({
                badge: "Hospital Recovery",
                title: "Build Your Recovery Plan",
                description: "Schedule a demo to see how our expert-led management can help you recover 100% of your pharmacy margins.",
                btnText: "Schedule Your Demo",
                successTitle: "Recovery Plan Initiated!",
                successDescription: "Our team will reach out within 24 hours to start your hospital's revenue recovery plan."
              })}
              className="group btn-cta-hero !bg-brand-indigo-600 !text-white hover:!bg-brand-indigo-500 shadow-brand-indigo-500/20"
            >
              <span>Partner With Us</span>
              <ArrowRight 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};