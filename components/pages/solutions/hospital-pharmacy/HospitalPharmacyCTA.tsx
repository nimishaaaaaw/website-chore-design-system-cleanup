"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, HeartPulse, TrendingDown } from 'lucide-react';
import { Badge, fadeUp, staggerContainer } from './HospitalPharmacyShared';

export const HospitalPharmacyCTA = ({ onBookDemo, onContactSales }: { onBookDemo?: () => void, onContactSales?: () => void }) => {
  return (
    <div className="bg-slate-50 border-t border-slate-200 py-24 md:py-32 px-6">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 text-center border border-slate-100"
      >
        <Badge color="green">Your Legacy</Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
          You built the hospital.<br/>
          You earned the patient’s trust.
        </h2>
        <p className="text-xl text-slate-500 mb-12">
          Why should someone else earn from it?
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16 text-left">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <Activity className="w-6 h-6 text-blue-600 mb-4" />
            <p className="font-bold text-slate-900">Your prescriptions <br/><span className="text-blue-600">stay with you.</span></p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <HeartPulse className="w-6 h-6 text-teal-600 mb-4" />
            <p className="font-bold text-slate-900">Your patients <br/><span className="text-teal-600">stay with you.</span></p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <TrendingDown className="w-6 h-6 text-indigo-600 mb-4 rotate-180" />
            <p className="font-bold text-slate-900">Your revenue <br/><span className="text-indigo-600">stays with you.</span></p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">
            This isn’t a software upgrade.<br/>
            <span className="text-slate-500">It’s taking back control of your own value.</span>
          </h3>

          <p className="text-lg font-medium text-slate-900 mb-8">
            See how your pharmacy should actually run. Once you see it working, you won’t go back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBookDemo}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              Book a walkthrough <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onContactSales}
              className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              Talk to our team
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500 font-medium">Or ask to visit a live partner hospital.</p>
        </div>
      </motion.div>
    </div>
  );
};
