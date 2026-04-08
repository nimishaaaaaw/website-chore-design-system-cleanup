"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HospitalPharmacyEmotionalClose = () => {
  return (
    <section className="section-py bg-slate-50 relative overflow-hidden">
      <div className="blob-layer pointer-events-none">
        <motion.div animate={{ x: [-20, 20, -20], y: [-30, 30, -30], scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-indigo-100/40 rounded-full blur-[140px] opacity-60" />
      </div>

      <div className="container-page relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-indigo-600 border border-indigo-50">
              <HeartPulse className="w-8 h-8 stroke-[1.5]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Your patients trust you. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600">Keep them with you.</span>
          </h2>
          <p className="text-body-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            When patients buy medicines from random external chemists, you can't guarantee the quality, and you don't know if they are actually taking what you prescribed. A MediKloud-managed pharmacy closes the loop on patient care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
