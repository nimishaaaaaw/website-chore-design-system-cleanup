"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HospitalPharmacyCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="section-py bg-[var(--indigo-600)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-blue-900/30 rounded-full blur-[80px] -ml-24 -mb-24" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-[850px] mx-auto text-center space-y-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-h2 text-white leading-[1.3]">
            Ready for a truly integrated patient journey?
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-body-lg md:text-xl text-[var(--indigo-100)] max-w-[850px] mx-auto font-medium leading-relaxed">
            Schedule a free 30-minute diagnostic with our team. We'll show you how integrating your pharmacy and clinic operations can eliminate revenue leakage and secure long-term patient loyalty.
          </motion.p>

          <button 
            onClick={() => openModal({
                  badge: "Hospital Recovery",
                  title: "Build Your Recovery Plan",
                  description: "Schedule a demo to see how our expert-led management can help you recover 100% of your pharmacy margins.",
                  btnText: "Schedule Your Demo",
                  successTitle: "Recovery Plan Initiated!",
                  successDescription: "Our team will reach out within 24 hours to start your hospital's revenue recovery plan."
                })}
            className="btn-lg bg-white text-[var(--indigo-600)] hover:bg-[var(--indigo-50)] shadow-float active:scale-[0.98] transition-all font-bold text-h4 px-10 py-4 group"
          >
            Partner With Us
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};