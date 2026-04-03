'use client';

import React from 'react';
import { AlertCircle, IndianRupee, Ruler, Store, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const VPProblem = () => {
  const problems = [
    {
      icon: IndianRupee,
      title: "Financial Risk & Dead Stock",
      desc: "Locks up ₹10 Lakhs+ in working capital upfront, while specialized medicines inevitably expire on the shelves—turning your investment into direct financial loss.",
      color: "rose"
    },
    {
      icon: Ruler,
      title: "Space & Volume Constraints",
      desc: "Wastes 100+ sq ft of valuable patient space on storage counters. If you see under 20 patients a day, hiring a full-time pharmacist is completely ROI-negative.",
      color: "amber"
    },
    {
      icon: Store,
      title: "The Retail & Regulatory Drag",
      desc: "Forces you to become a shopkeeper. You have to manage complex drug licenses, GST filings, routine inspector visits, and fragmented inventory across multiple clinics.",
      color: "indigo"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <AlertCircle size={14} className="text-blue-600" />
            <span className="text-slate-700 font-bold uppercase tracking-widest text-[10px]">The Structural Barrier</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Why 90% of clinics lack an in-house pharmacy.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            Most doctors understand the value of having a pharmacy, but the physical and financial overhead of traditional retail models is simply too high.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="h-full"
              >
                <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                  <div className={`w-14 h-14 bg-${item.color}-50 rounded-2xl flex items-center justify-center text-${item.color}-600 mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <div className="inline-block relative">
            <Quote className="absolute -top-4 -left-6 text-blue-200 w-12 h-12 opacity-50 -z-10" />
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
              "Most doctors understand the value of a pharmacy—they just can't justify the physical costs. <br className="hidden md:block"/>
              <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg ml-1 mt-2 inline-block">MediKloud removes the cost while keeping the value.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { VPProblem };
