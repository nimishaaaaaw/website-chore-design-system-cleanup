"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Clock, 
  Building2, 
  Smartphone, 
  ShieldCheck
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalWithoutPharmacyHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Blobs - Using existing design system animations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-medium" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slower" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
            <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
            From Zero Pharmacy → Fully Functional Pharmacy Layer
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            You Heal the Patient. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Why Does the Revenue Leave the Hospital?
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            Every day, your hospital diagnoses, treats, and builds patient trust — only to hand over a prescription that gets fulfilled somewhere else.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            {[
              { icon: Building2, text: "The patient walks to a nearby pharmacy" },
              { icon: Smartphone, text: "Orders online from an aggregator" },
              { icon: Clock, text: "Or simply delays buying medicines altogether" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/20 text-left">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="font-medium text-slate-800">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-12">
            <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500">
              <div className="bg-white rounded-[14px] p-8 md:p-10 text-left max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">MediKloud changes that</h3>
                  <p className="text-slate-600">Without setting up a pharmacy, our integrated infrastructure helps your hospital:</p>
                </div>
                <ul className="flex-1 space-y-3">
                  {[
                    "Capture every prescription digitally",
                    "Deliver medicines within minutes",
                    "Earn revenue on every order"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <ShieldCheck className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
