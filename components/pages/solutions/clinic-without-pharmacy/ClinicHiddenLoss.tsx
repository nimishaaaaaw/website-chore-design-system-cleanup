"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, UserMinus } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicHiddenLoss = () => {
  return (
    <section className="section-py bg-section-alt border-b border-[#E2E8F0]">
      <div className="container-page">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} 
            className="eyebrow-wrap"
          >
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The Broken Loop</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6"
          >
            Right now, your patient care <br />
            <span className="bg-gradient-display bg-clip-text text-transparent pb-2" style={{ color: '#4F46E5' }}>
              stops at the clinic door.
            </span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            A paper prescription is where your control ends and patient drop-off begins.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "The Drop-off Risk",
              desc: "Patients delay or skip trips to the pharmacy. Treatment stalls, and recovery suffers."
            },
            {
              icon: ArrowUpRight,
              title: "The Substitution Risk",
              desc: "Local chemists push high-margin substitutes. You lose control over the exact treatment plan."
            },
            {
              icon: UserMinus,
              title: "The Lost Connection",
              desc: "Chronic patients turn to retail chains for refills. You lose a lifelong care connection."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }
              }}
              className="card group border-[#E2E8F0] hover:border-[#C7D2FE]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm border border-[#F1F5F9] text-[#4F46E5] group-hover:bg-[#EEF2FF]">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-base font-medium text-[#64748B] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
