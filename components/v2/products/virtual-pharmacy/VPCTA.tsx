'use client';

import React from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const VPCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Glows & Patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Modernize Your Clinic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Today.</span>
          </h2>

          <h3 className="text-xl md:text-3xl font-bold text-slate-300 mb-6">
            See if your neighborhood is ready for a Virtual Pharmacy.
          </h3>

          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
            We only partner with a few clinics in each neighborhood to ensure every patient gets their medicines in under 10 minutes. Partner with us today.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-5 rounded-2xl text-lg md:text-xl font-bold transition-all shadow-xl shadow-blue-900/50 flex items-center justify-center w-full sm:w-auto">
            <Search className="mr-3 w-6 h-6 text-blue-200 group-hover:text-white transition-colors" />
            Check Clinic Eligibility
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-sm font-medium text-slate-500 italic flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" />
            See if a MediKloud hub is near your clinic.
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export { VPCTA };
