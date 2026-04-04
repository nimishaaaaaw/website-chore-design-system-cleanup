"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface HospitalWithoutPharmacyCTAProps {
  onBookDemo?: () => void;
  onSeeHowItWorks?: () => void;
}

export const HospitalWithoutPharmacyCTA = ({ 
  onBookDemo, 
  onSeeHowItWorks 
}: HospitalWithoutPharmacyCTAProps) => {
  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-teal-50/50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Turn Every Prescription Into Revenue
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-12">
            Without building a pharmacy. Without the headache.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookDemo}
              className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center justify-center gap-2"
            >
              Get Started with MediKloud
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onSeeHowItWorks}
              className="px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              See How Virtual Pharmacy Works
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
