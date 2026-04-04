"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Users 
} from 'lucide-react';

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeInOut" as const } }
};

export const HospitalWithoutPharmacyBenefits = () => {
  const benefits = [
    { icon: Wallet, title: "New Revenue Stream", desc: "Earn on every prescription — without investment." },
    { icon: ShieldCheck, title: "Zero Operational Burden", desc: "No inventory, no pharmacist, no licensing." },
    { icon: Clock, title: "Better Patient Experience", desc: "Faster access to medicines, no outside dependency." },
    { icon: Activity, title: "Stronger Clinical Outcomes", desc: "Patients actually follow the treatment you prescribe." },
    { icon: Users, title: "Lifetime Patient Retention", desc: "Not just isolated visits — continuous care." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">From Day 1, You Unlock:</h2>
            <p className="text-xl text-slate-600">Transform your hospital's operational efficiency and bottom line simultaneously.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              whileHover="hover"
              className={`p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 bg-white ${i === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
