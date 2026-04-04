"use client"

import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction as keyof typeof directions] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ClinicWP_SystemChange = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            We don’t “support” your pharmacy.<br />
            <span className="text-teal-600">We make it work like a system.</span>
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "We take over pharmacy operations",
              desc: "Licensed pharmacist deployed by us. Inventory optimized. Procurement handled centrally.",
              highlight: "You don’t manage the pharmacy anymore."
            },
            {
              num: "02",
              title: "Every prescription captured instantly",
              desc: "Digital prescription through HMS flows directly to the pharmacy. No missed orders.",
              highlight: "What you prescribe is what gets sold."
            },
            {
              num: "03",
              title: "Patients stop going outside",
              desc: "Exact medicines always available. If not, we guarantee same-day delivery.",
              highlight: "No more “buy from outside” moments."
            },
            {
              num: "04",
              title: "Refills happen automatically",
              desc: "System tracks medication cycles. Patients get reminders & 1-tap reorders before running out.",
              highlight: "Your repeat revenue runs on autopilot."
            },
            {
              num: "05",
              title: "Leakage is structurally eliminated",
              desc: "Billing tied strictly to dispensing. No manual loopholes. No hidden losses.",
              highlight: "What gets dispensed always gets billed."
            }
          ].map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -4, scale: 1.005 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group"
              >
                <div className="text-4xl font-black text-slate-100 group-hover:text-teal-100 transition-colors">
                  {feature.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
                <div className="md:w-1/3 bg-teal-50/50 p-4 rounded-xl border border-teal-100/50">
                  <p className="text-sm font-semibold text-teal-800">{feature.highlight}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
