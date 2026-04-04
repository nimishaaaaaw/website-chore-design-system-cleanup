"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Store, Laptop, Clock, Truck } from 'lucide-react';
import { fadeUp, staggerContainer } from './HospitalPharmacyShared';

export const HospitalPharmacyProducts = () => {
  return (
    <div className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp} 
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A complete system.<br/>
            <span className="text-slate-400">Not disconnected tools.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Store className="w-6 h-6" />,
              title: "Managed Pharmacy",
              desc: "We run your pharmacy like a national chain — inside your hospital.",
              result: "You earn a clear revenue share. Without operational burden."
            },
            {
              icon: <Laptop className="w-6 h-6" />,
              title: "Free HMS",
              desc: "Digital prescriptions, instant pharmacy integration, and real-time data flow.",
              result: "Every prescription is captured. Nothing gets lost."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Refill Engine",
              desc: "Predicts when medicines run out and automatically triggers reorders.",
              result: "Revenue doesn’t depend on memory. It runs on systems."
            },
            {
              icon: <Truck className="w-6 h-6" />,
              title: "Home Delivery",
              desc: "Same-day medicine delivery with no dependency on external apps.",
              result: "Convenience without losing the patient."
            }
          ].map((product, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-teal-400">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{product.desc}</p>
              <div className="text-sm font-medium text-teal-300 border-t border-white/10 pt-4 mt-auto">
                {product.result}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
