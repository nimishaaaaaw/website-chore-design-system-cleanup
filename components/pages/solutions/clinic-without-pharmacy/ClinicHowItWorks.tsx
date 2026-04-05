"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Warehouse, 
  Banknote, 
  RotateCcw,
  Plus
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

export const ClinicHowItWorks = () => {
  return (
    <section id="how-it-works" className="section-py bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div variants={fadeInUp} className="eyebrow-wrap">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">The MediKloud engine</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-h2 font-bold text-slate-900 leading-tight tracking-tight">
              How it works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-body-lg font-medium leading-relaxed">
              Four simple steps to transform your clinic's economics.
            </motion.p>
          </div>

          {/* Process Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Digitize your prescriptions",
                desc: "Write digital prescriptions in seconds. Store patient history automatically with our free HMS.",
                icon: ClipboardCheck
              },
              {
                step: "02",
                title: "Instant fulfillment",
                desc: "Orders route to a nearby MediKloud dark pharmacy. Packed in minutes and delivered directly.",
                icon: Warehouse
              },
              {
                step: "03",
                title: "Capture revenue",
                desc: "No stock handling, staff, or compliance. You simply earn a structured partner fee on every order.",
                icon: Banknote
              },
              {
                step: "04",
                title: "Turn patients into recurring revenue",
                desc: "Automated refills and reminders. 1-tap reorders ensure long-term medication adherence.",
                icon: RotateCcw
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative group h-full"
              >
                <div className="card h-full flex flex-col p-8 md:p-10 transition-all duration-300 border-slate-200 group-hover:border-indigo-200 group-hover:shadow-card-md group-hover:-translate-y-1">
                  <div className="absolute top-6 right-8 text-slate-50 font-black text-6xl group-hover:text-slate-100 transition-colors pointer-events-none select-none">
                    {item.step}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 transition-transform group-hover:scale-110">
                      <item.icon className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-h3 font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting arrow/line logic */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <Plus className="w-6 h-6 text-slate-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

