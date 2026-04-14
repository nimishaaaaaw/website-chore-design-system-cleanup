"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

export const HospitalPharmacyCTA = () => {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal({
      badge: "Partnership",
      title: "Protect your clinic's revenue.",
      description: "Book an audit with our experts to see how much margin you can recover.",
      btnText: "Book My Free Audit"
    });
  };
  return (
    <section className="section-py bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-900/30 rounded-full blur-[80px] -ml-24 -mb-24" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-[850px] mx-auto text-center space-y-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold text-white leading-[1.3] tracking-tight">
            Ready for a truly integrated patient journey?
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-body-lg md:text-xl text-indigo-100 max-w-[850px] mx-auto font-medium leading-relaxed">
            Schedule a free 30-minute diagnostic with our team. We'll show you how integrating your pharmacy and clinic operations can eliminate revenue leakage and secure long-term patient loyalty.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center pt-6">
            <button onClick={handleBookDemo} className="btn-lg bg-white text-indigo-600 hover:bg-indigo-50 shadow-2xl shadow-indigo-900/20 active:scale-[0.98] transition-all font-bold text-[16px] px-10 py-4">
              Schedule your free diagnostic
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
