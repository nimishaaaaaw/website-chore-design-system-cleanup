
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, UserMinus } from 'lucide-react';
import { premiumEase } from '@/lib/animation';

export const ClinicHiddenLoss = () => {
  return (
    <section className="section-py bg-section-surface relative overflow-hidden border-t border-muted">
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
          <div className="eyebrow-wrap justify-center">
            <span className="eyebrow-line-r" />
            <span className="eyebrow-text">The Treatment Gap</span>
            <span className="eyebrow-line-l" />
          </div>
          <h2 className="premium-h2">
            Right now, your patient care <span className="heading-accent">stops at the clinic door.</span>
          </h2>
          <p className="premium-p intro-lock">
            A prescription is where your control ends and patient drop-off begins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Treatment Delays",
              desc: "When patients delay or skip their trip to the pharmacy, their recovery stalls. Treatment should begin as soon as they leave your consultation."
            },
            {
              icon: ArrowUpRight,
              title: "Brand Substitution",
              desc: "External chemists often push high-margin substitutes. Ensuring your patients get the exact brand you prescribe protects your treatment integrity."
            },
            {
              icon: UserMinus,
              title: "Broken Patient Continuity",
              desc: "Chronic patients often migrate to large retail chains for refills, breaking the lifelong connection they have with your clinic."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="card group hover:border-brand-indigo-100 rounded-3xl p-10 hover:shadow-card-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-indigo-100 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 shadow-card text-indigo-600">
                <item.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3 mb-3">{item.title}</h3>
              <p className="premium-p text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};