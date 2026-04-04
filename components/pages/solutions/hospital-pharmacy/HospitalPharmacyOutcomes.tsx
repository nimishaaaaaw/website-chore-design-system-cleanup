"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Section, fadeUp, staggerContainer, scaleIn } from './HospitalPharmacyShared';

export const HospitalPharmacyOutcomes = () => {
  return (
    <Section className="bg-white">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp} 
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
          You don’t need more effort.<br/>
          <span className="text-blue-600">You need infrastructure.</span>
        </h2>
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer} 
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {/* Before */}
        <motion.div variants={scaleIn} className="bg-red-50/50 border border-red-100 p-8 md:p-12 rounded-3xl">
          <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✕</span>
            Before MediKloud
          </h3>
          <ul className="space-y-6">
            {[
              "Pharmacy feels like a headache",
              "Revenue is unpredictable",
              "Staff dependency is high",
              "Patients drift away silently"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-400" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div variants={scaleIn} className="bg-teal-50 border border-teal-100 p-8 md:p-12 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/50 blur-3xl rounded-full" />
          <h3 className="text-2xl font-bold text-teal-900 mb-8 flex items-center gap-3 relative z-10">
            <span className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-bold">✓</span>
            After MediKloud
          </h3>
          <ul className="space-y-6 relative z-10">
            {[
              "Pharmacy runs on autopilot",
              "Revenue becomes predictable and growing",
              "Doctors focus only on care",
              "Patients stay within your ecosystem"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
};
