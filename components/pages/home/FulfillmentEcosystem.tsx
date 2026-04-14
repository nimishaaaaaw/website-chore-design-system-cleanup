"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Clock, Truck } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

/* ─── Step Data ─────────────────────────────────────────────────── */
const STEPS = [
  {
    icon: Clock,
    stat: 'Save 2-3 hours/day',
    title: 'Zero operational headaches.',
    sub: 'We absorb the daily pharmacy chaos, giving you hours back to focus on what matters: serving more patients and elevating care.',
    color: 'from-brand-indigo-500 to-brand-600',
    dotColor: 'bg-brand-500',
  },
  {
    icon: Pill,
    stat: '100% Fulfillment',
    title: 'Every prescription, fulfilled.',
    sub: 'Patients walk out with the medicines they need. Zero stockouts means zero revenue walks out the door to local chemists.',
    color: 'from-brand-600 to-brand-indigo-600',
    dotColor: 'bg-brand-400',
  },
  {
    icon: Truck,
    stat: 'Continuous Care',
    title: 'Medicine deliveries.',
    sub: 'From rapid home deliveries out of your hospital pharmacy, to automated monthly or second refills for regular and chronic diabetes or BP.',
    color: 'from-brand-indigo-600 to-brand-700',
    dotColor: 'bg-brand-500',
  },
];

/* ─── Main Section ──────────────────────────────────────────────── */
export function FulfillmentEcosystem() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-64px)] lg:h-[calc(100dvh-64px)] flex items-center justify-center overflow-hidden py-16">
      <DarkAtmosphere />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 shadow-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-400" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-indigo-100/90">
              Continuous Care
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="premium-h2 text-white mb-4"
          >
            Complete the{' '}
            <span className="text-brand-indigo-600" style={{ color: '#4F46E5' }}>
              care loop.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-medium"
          >
            A consultation without the right medicine is an incomplete
            treatment. MediKloud closes that gap — for every patient, every time.
          </motion.p>
        </div>

        {/* Three Steps (Original Linear Format) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative group flex flex-col items-center text-center px-4 md:px-8 py-4 md:py-0
                ${i < STEPS.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-brand-900/30 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={24} className="text-white" strokeWidth={1.8} />
              </div>

              {/* Stat chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {step.stat}
                </span>
              </div>

              {/* Title */}
              <h3 className="premium-h3 text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">
                {step.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
