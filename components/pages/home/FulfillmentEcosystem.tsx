"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Heart, RefreshCcw, ArrowRight, Phone } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

/* ─── Step Data ─────────────────────────────────────────────────── */
const STEPS = [
  {
    icon: Pill,
    stat: 'Zero gaps',
    title: 'Every prescription, fulfilled.',
    sub: 'Patients walk out with the medicines they need — not a slip of paper to figure out on their own.',
    color: 'from-blue-600 to-indigo-600',
    dotColor: 'bg-blue-400',
  },
  {
    icon: Heart,
    stat: '< 30 min',
    title: 'Medicine reaches the doorstep.',
    sub: 'For patients who can\'t wait or can\'t visit — delivery from your hospital, not an unknown store.',
    color: 'from-indigo-600 to-violet-600',
    dotColor: 'bg-indigo-400',
  },
  {
    icon: RefreshCcw,
    stat: 'Every month',
    title: 'Chronic patients never miss a dose.',
    sub: 'Diabetes, BP, thyroid — automated reminders ensure your patients stay on course, month after month.',
    color: 'from-violet-600 to-purple-600',
    dotColor: 'bg-violet-400',
  },
];

/* ─── Main Section ──────────────────────────────────────────────── */
export function FulfillmentEcosystem() {
  const { openModal } = useContactModal();

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-dark relative">
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="container-page relative z-10 py-14 md:py-20">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300/90">
                Continuous Care
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              Complete the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ color: '#22d3ee' }}>
                care loop.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[15px] md:text-base text-slate-400 max-w-lg mx-auto leading-relaxed"
            >
              A consultation without the right medicine is an incomplete
              treatment. MediKloud closes that gap — for every patient, every time.
            </motion.p>
          </div>

          {/* Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-4xl mx-auto">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative group flex flex-col items-center text-center px-5 md:px-6 py-6 md:py-0
                  ${i < STEPS.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg shadow-indigo-900/30 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={24} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Stat chip */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                    {step.stat}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
                  {step.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 md:mt-14"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-accent text-white font-bold rounded-2xl shadow-2xl shadow-cyan-900/20 hover:scale-105 transition-all duration-300 text-[15px]"
            >
              <Phone size={15} className="opacity-80" />
              Book a Demo
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <p className="text-xs text-slate-500 mt-3 font-medium">
              15-minute walkthrough · See how it works at your facility
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
