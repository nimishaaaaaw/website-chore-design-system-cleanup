"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Truck, Sparkles, Activity } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const HospitalWithoutPharmacySolutions = () => {
  return (
    <section className="section-py relative overflow-hidden">
      <DarkAtmosphere />

      <div className="container-page relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mb-20 space-y-5"
        >
          <div className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-brand-400">The fulfillment engine</span>
          </div>
          <h2 className="text-h2 font-bold tracking-tight text-white leading-[1.1] md:text-5xl">
            A 3-step system to <br className="hidden md:block" />
            <span className="text-muted">capture every prescription.</span>
          </h2>
          <p className="text-body-lg font-medium max-w-2xl text-muted">
            We bridge the gap between your consultation room and the patient's home, ensuring clinical value translates into hospital revenue.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[150px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerLocal}
            className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10"
          >
            {[
              {
                step: "Step 01",
                icon: Smartphone,
                title: "Digital prescription sync",
                desc: "As soon as your doctor saves the prescription, it's instantly synced to our fulfillment layer.",
                result: "Zero patient effort to find medicines."
              },
              {
                step: "Step 02",
                icon: Truck,
                title: "Rapid fulfillment network",
                desc: "Our cloud pharmacy network prioritizes your hospital's orders for same-day delivery.",
                result: "Medicines reach before the patient gets home."
              },
              {
                step: "Step 03",
                icon: Activity,
                title: "Integrated revenue flow",
                desc: "Every order triggers an automated billing cycle where your hospital captures its revenue share.",
                result: "Continuous revenue without inventory risk."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="card-dark p-8 lg:p-10 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-brand-400/40 transition-all duration-500 group flex flex-col h-full backdrop-blur-xl relative shadow-float"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0">
                  <Sparkles className="w-5 h-5 text-brand-400/40 animate-pulse" />
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8 group-hover:text-brand-400 transition-colors">
                  {item.step}
                </div>

                <div className="bg-gradient-action w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white shadow-btn group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-7 h-7 relative z-10" />
                </div>

                <h3 className="text-h3 font-bold text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-sm md:text-base mb-10 leading-relaxed flex-grow font-medium text-muted">{item.desc}</p>

                <div className="text-xs font-bold uppercase tracking-widest text-brand-400 border-t border-white/10 pt-8 mt-auto flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                  </div>
                  {item.result}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};