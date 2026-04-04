"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Quote } from 'lucide-react';

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

export const ClinicEmotionalClose = () => {
  return (
    <section className="section-py bg-section-alt relative overflow-hidden">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-10"
        >
          {/* Section Indicator */}
          <motion.div variants={fadeInUp} className="flex justify-center flex-col items-center">
             <div className="w-16 h-[2px] bg-indigo-500/30 rounded-full mb-8" />
             <HeartPulse className="w-10 h-10 text-rose-500" />
          </motion.div>

          <motion.h3 
            variants={fadeInUp} 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight px-4"
          >
            Your Job Isn’t Just to Prescribe. <br />
            <span className="text-indigo-600">
               It’s to Ensure the Patient Gets Better.
            </span>
          </motion.h3>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-6 max-w-2xl mx-auto border-l-4 border-indigo-500 pl-8 text-left"
          >
            <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
              But that only happens if the patient actually gets the medicine — on time, without friction, and exactly as prescribed.
            </p>
            <p className="text-lg text-slate-500">
              Right now, that part is out of your control.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="pt-12 space-y-6"
          >
             <p className="text-2xl font-bold text-slate-900">
               MediKloud brings it back — <span className="underline decoration-indigo-500 underline-offset-8">seamlessly</span>.
             </p>
             <p className="text-lg text-slate-600 max-w-xl mx-auto">
               So every prescription you write doesn’t just end on paper — it completes the loop.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
