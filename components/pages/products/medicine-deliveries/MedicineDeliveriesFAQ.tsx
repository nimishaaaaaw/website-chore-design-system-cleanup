"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const faqItems = [
  {
    q: "Do I need to hire my own riders?",
    a: <>No. <span className="text-slate-900 font-bold">MediKloud provides the riders</span> and handles all logistics for you.</>
  },
  {
    q: "How do you guarantee the exact brand?",
    a: <>We pick from your hospital’s pharmacy, ensuring the patient gets <span className="text-slate-900 font-bold">exactly what you prescribed.</span></>
  },
  {
    q: "How long does it take to set up?",
    a: <>Your hospital can be live and delivering to patients in <span className="text-slate-900 font-bold">less than 24 hours.</span></>
  },
  {
    q: "Who pays for the delivery fee?",
    a: <>You have <span className="text-slate-900 font-bold">total control.</span> You can have the patient pay a small fee or the hospital can cover it.</>
  },
  {
    q: "What if a patient doesn't have a smartphone?",
    a: "We provide a dedicated telephone line for easy reorders via a clinical coordinator."
  },
  {
    q: "Who owns the patient data?",
    a: <><span className="text-slate-900 font-bold">You do.</span> You retain full ownership of all clinical records and can export them any time.</>
  },
  {
    q: "Is the billing GST-compliant?",
    a: <>Yes. Every transaction is <span className="text-slate-900 font-bold">fully GST-compliant</span> and integrated into your billing system.</>
  },
  {
    q: "What is the support response time?",
    a: "We provide real-time updates for every order and immediate support for any delivery issues."
  },
  {
    q: "Is patient privacy protected?",
    a: <>Absolute. MediKloud adheres to the <span className="text-slate-900 font-bold">highest clinical data privacy</span> and security standards.</>
  },
  {
    q: "Does it cover specialty medicines?",
    a: <>Yes. We stock the <span className="text-slate-900 font-bold">exact brands</span> your doctors prescribe for Cardio, Ortho, Gynec, and more.</>
  },
  {
    q: "How precise are the refill reminders?",
    a: <>Our system calculates the <span className="text-slate-900 font-bold">exact day a patient runs out</span> to ensure a timely reorder.</>
  }
];

export const MedicineDeliveriesFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="relative section-py bg-white border-t border-slate-100 overflow-hidden">
      {/* Gold Atmospheric Primitives */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="header-lock text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="premium-h2 text-balance lg:max-w-header-lock mx-auto"
          >
            Frequently Asked <span className="text-indigo-600">Questions.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((faq, idx) => {
            const isActive = openFaq === idx;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: premiumEase, delay: idx * 0.05 }}
                className={`border rounded-[2rem] overflow-hidden transition-all duration-300 group ${
                  isActive 
                    ? 'bg-white border-indigo-200 shadow-card-md' 
                    : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group gap-6"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors leading-tight tracking-tight ${isActive ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                    {isActive ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: premiumEase }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <div className="premium-p !text-[15px] font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
