"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { premiumEase } from '@/lib/animation';

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-section-alt relative overflow-hidden border-t border-muted">
      <div className="tech-grid-overlay opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <h2 className="premium-h2">
            A pharmacy service that <span className="heading-accent">runs itself.</span>
          </h2>
          <p className="premium-p text-slate-600 mt-6 max-w-3xl mx-auto">
            Offer every medicine your patients need without managing stock, spending on equipment, or handling deliveries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-20">
          {[
            { title: "Zero Inventory", desc: "We handle the stock, tracking, and expiries. You focus on your patients care." },
            { title: "No Space Needed", desc: "You don't need to store a single bottle of medicine in your clinic." },
            { title: "Zero Financial Risk", desc: "Start your pharmacy today without spending on any equipment or stock." },
            { title: "Zero Daily Hassle", desc: "We handle all the delivery logistics, packaging, and support calls for you." }
          ].map((item, i) => (
            <div
              key={i}
              className="card p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 group transition-colors duration-300 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 flex-shrink-0 border border-slate-200 group-hover:bg-brand-50 group-hover:text-indigo-600 group-hover:border-brand-indigo-100 transition-colors duration-500">
                <span className="font-bold text-2xl line-through decoration-2">0</span>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl md:text-h2 font-bold tracking-tight text-slate-900 mb-2">{item.title}</h4>
                <p className="text-base text-slate-500 leading-relaxed italic sm:not-italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};