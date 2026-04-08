"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicEmotionalClose = () => {
  return (
    <section className="section-py bg-section-surface">
      <div className="container-page text-center max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-20 h-20 mx-auto bg-[#EEF2FF] rounded-3xl flex items-center justify-center mb-10 border border-[#C7D2FE]"
        >
          <HeartPulse className="w-10 h-10 text-[#4F46E5]" />
        </motion.div>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-8"
        >
          A more capable clinic.<br className="hidden md:block" />
          <span className="bg-gradient-display bg-clip-text text-transparent pb-2" style={{ color: '#4F46E5' }}>Better recovery for your patients.</span>
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-xl text-[#64748B] leading-relaxed font-medium"
        >
          Doorstep delivery ensures treatment starts immediately. Automated refills drive better outcomes for chronic conditions. We help you close the care loop.
        </motion.p>
      </div>
    </section>
  );
};
