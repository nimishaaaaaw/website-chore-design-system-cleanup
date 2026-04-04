"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from './HospitalPharmacyShared';

export const HospitalPharmacyHero = ({ onBookDemo, onViewDemo }: { onBookDemo?: () => void, onViewDemo?: () => void }) => {
  return (
    <main className="pt-32 lg:pt-48 pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
          Your hospital already has a pharmacy.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            But is it actually working for you?
          </span>
        </motion.h1>
        
        <motion.div variants={fadeUp} className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto space-y-4">
          <p>Every day, your doctors create value — diagnosing patients, writing prescriptions, building trust.</p>
          <p className="font-semibold text-slate-900">And then… That value leaks.</p>
        </motion.div>

        {/* Value Leakage Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
          {[
            "Medicines go unbilled",
            "Patients walk out to nearby pharmacies",
            "Chronic patients never return",
            "Staff errors quietly eat into margins",
            "You spend hours managing it"
          ].map((text, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative text-left sm:text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-teal-500/20 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
            The pharmacy exists. The system doesn’t.
          </h2>
          <p className="text-slate-300 text-lg mb-8 relative z-10">
            MediKloud turns your existing pharmacy into a revenue engine. Not by adding more work. But by taking over the complexity completely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button 
              onClick={onBookDemo}
              className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              See How It Works <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};
