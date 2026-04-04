"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  TrendingDown, 
  Users, 
  HeartPulse 
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

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeInOut" as const } }
};

export const HospitalWithoutPharmacyReality = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            A Hospital Without a Pharmacy Isn’t Neutral. <span className="text-red-500">It’s Losing Money.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600">
            Not having a pharmacy doesn’t mean “no operations” — it means uncontrolled leakage. You’re doing the hardest part (the consultation) but capturing none of its value.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Lost Sales", desc: "Every OPD prescription becomes someone else’s sale.", icon: TrendingDown },
            { title: "Lost Patients", desc: "Chronic patients never return for their required refills.", icon: Users },
            { title: "Zero Visibility", desc: "No visibility into whether medicines were even purchased.", icon: Activity },
            { title: "Poor Outcomes", desc: "No way to ensure patients follow the prescribed treatment.", icon: HeartPulse },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              whileHover="hover"
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/50 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-slate-400 group-hover:text-red-500 transition-colors mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
