"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export const HospitalWithoutPharmacyEmotionalClose = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-teal-900/40" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <HeartPulse className="w-16 h-16 text-teal-400 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Hospital Shouldn’t Stop at Diagnosis
          </h2>
          <div className="space-y-6 text-xl text-slate-300">
            <p>Right now, the patient journey breaks the moment they leave your consultation room.</p>
            <p className="text-2xl font-medium text-white">
              With MediKloud, that journey stays within your ecosystem — <br/>
              <span className="text-teal-400">from prescription to fulfillment to refill.</span>
            </p>
          </div>

          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Because great care isn’t just about what you prescribe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                It’s about whether the patient actually receives it.
              </span>"
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
