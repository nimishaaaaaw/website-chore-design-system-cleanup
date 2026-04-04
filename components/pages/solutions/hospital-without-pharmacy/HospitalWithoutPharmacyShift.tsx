"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const HospitalWithoutPharmacyShift = () => {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          What If Your Hospital Could Act Like It Has a Pharmacy… <br/>
          <span className="text-teal-400 italic font-light">Without Actually Running One?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto"
        >
          No setup. No compliance burden. No staffing headaches. Just a seamless system that works in the background.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Prescriptions created digitally",
            "Medicines fulfilled instantly",
            "Delivered before they leave",
            "Hospital earns from every transaction"
          ].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <CheckCircle className="w-8 h-8 text-teal-400 mb-4 mx-auto" />
              <p className="font-medium text-slate-200">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
