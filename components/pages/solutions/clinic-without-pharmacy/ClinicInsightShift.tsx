"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardCheck, PackageCheck, HeartPulse } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicInsightShift = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0F172A] border-y border-[#1E1B4B]">
      {/* Abstract Glows for Dark Section */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#4F46E5] opacity-25 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#2563EB] opacity-25 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300 text-sm font-bold mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" /> The MediKloud Virtual Pharmacy
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6"
          >
            Turn your clinic into a <br className="hidden md:block" /> full-service care hub.<br className="hidden md:block" />
            <span className="bg-gradient-display bg-clip-text text-transparent pb-2" style={{ color: '#60A5FA' }}>
              Without stocking a single pill.
            </span>
          </motion.h2>
        </div>
        
        {/* Visual Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent -translate-y-1/2 opacity-50 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Step 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } }
              }}
              className="bg-[#1E293B]/60 backdrop-blur-md border border-[#334155] rounded-3xl p-8 hover:bg-[#1E293B] hover:border-[#4F46E5]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-[#334155] flex items-center justify-center mb-6 shadow-inner">
                <ClipboardCheck className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">1. You Prescribe</h3>
              <p className="text-[#94A3B8] font-medium leading-relaxed">
                Write prescriptions normally. Our software seamlessly routes the digital order to our secure fulfillment network.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }
              }}
              className="bg-[#1E293B]/60 backdrop-blur-md border border-[#334155] rounded-3xl p-8 hover:bg-[#1E293B] hover:border-[#4F46E5]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-[#334155] flex items-center justify-center mb-6 shadow-inner">
                <PackageCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Invisible Logistics</h3>
              <p className="text-[#94A3B8] font-medium leading-relaxed">
                We act as your backend. Our dark pharmacies pick, pack, and dispatch authentic medicines on your behalf.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }
              }}
              className="bg-[#1E293B]/60 backdrop-blur-md border border-[#334155] rounded-3xl p-8 hover:bg-[#1E293B] hover:border-[#4F46E5]/50 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A] border border-[#334155] flex items-center justify-center mb-6 shadow-inner">
                <HeartPulse className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Care Loop Closed</h3>
              <p className="text-[#94A3B8] font-medium leading-relaxed">
                Patients receive treatment at their doorstep. Adherence goes up, and your clinic monetizes its digital workflow.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
