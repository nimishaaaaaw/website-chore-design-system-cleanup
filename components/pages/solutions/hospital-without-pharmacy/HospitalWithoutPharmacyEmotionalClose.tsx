"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const HospitalWithoutPharmacyEmotionalClose = () => {
  return (
    <section className="section-py bg-section-alt border-t border-muted">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-16 rounded-3xl overflow-hidden group shadow-float bg-section-dark">

            <div className="blob-layer">
              <div className="blob-indigo absolute top-0 right-0 w-80 h-80 -mr-32 -mt-32" />
              <div className="blob-blue absolute bottom-0 left-0 w-64 h-64 -ml-24 -mb-24" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-white/20" />
                <span className="eyebrow-text text-white/70">The vision</span>
                <span className="h-px w-12 bg-white/20" />
              </div>

              <h2 className="text-display-sm md:text-display-md font-bold text-white tracking-tight leading-tight px-4">
                Your hospital is a hub of healing.<br />
                <span className="text-muted">Our job is to make the fulfillment silent.</span>
              </h2>

              <p className="text-body-lg text-slate-300 max-w-2xl mx-auto font-medium">
                MediKloud removes the friction of "where do I buy this?" so your team can focus exclusively on "how do I treat this?".
              </p>

              <div className="pt-4">
                <div className="card-dark inline-flex items-center gap-3 px-6 py-3 text-white/90 text-sm font-bold backdrop-blur-md shadow-float tracking-wide group-hover:bg-white/10 transition-all duration-300">
                  <Sparkles className="w-4 h-4 text-brand-500" />
                  Building the integrated future of hospital operations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};