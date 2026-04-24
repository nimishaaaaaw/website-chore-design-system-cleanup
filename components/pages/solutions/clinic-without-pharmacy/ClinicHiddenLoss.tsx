"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, UserMinus } from 'lucide-react';
import { premiumEase } from '@/lib/animation';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

export const ClinicHiddenLoss = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden border-t border-slate-100">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <div className="eyebrow-wrap justify-center mb-6">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The Treatment Gap</span>
            <span className="eyebrow-line-r"></span>
          </div>
          <h2 className="premium-h2">
            Right now, your patient care <span className="text-indigo-600">stops at the clinic door.</span>
          </h2>
          <p className="premium-p intro-lock">
            A prescription is where your control ends and patient drop-off begins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              className="card group group-hover:z-20 border-slate-200 hover:border-brand-indigo-100 rounded-[2rem] p-10 hover:shadow-card-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-sm text-indigo-600 transition-colors duration-500">
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
