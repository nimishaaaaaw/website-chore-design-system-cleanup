"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { Section, Badge, fadeUp, staggerContainer, scaleIn } from './HospitalPharmacyShared';

export const HospitalPharmacyPain = () => {
  return (
    <div className="bg-white border-y border-slate-200/50">
      <Section>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <Badge color="red">The Core Issue</Badge>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
              This isn’t a pharmacy problem.<br/>
              <span className="text-slate-400">It’s a system problem.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 max-w-xl">
              Most hospital pharmacies don’t fail because of effort. They fail because chains like Apollo and MedPlus win—not because they’re better doctors, but because they have systems your hospital was never given.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "One person handles stock, billing, and cash", desc: "Leakage is inevitable." },
              { title: "No real-time tracking", desc: "Losses stay invisible." },
              { title: "No patient follow-up", desc: "Chronic revenue disappears." },
              { title: "No procurement power", desc: "Margins stay thin." },
              { title: "No delivery", desc: "Patients choose convenience over loyalty." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={scaleIn} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg shrink-0 mt-1">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};
