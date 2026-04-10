"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Do I have to pay setup costs for the pharmacy?",
    answer: "No. MediKloud deploys the pharmacy infrastructure, inventory, and software with zero capital expenditure (Zero Capex) from the hospital."
  },
  {
    question: "Who manages the pharmacists and staff?",
    answer: "We do. Our fully managed solution provides trained, licensed pharmacists who run the daily dispensing operations, eliminating your hiring and retention headaches."
  },
  {
    question: "How do you guarantee zero stockouts?",
    answer: "Our system uses dynamic mapping to track your fast-moving prescriptions in real-time. We automate batch procurement to ensure the exact medicines your doctors prescribe are always on the shelf."
  },
  {
    question: "Can patients get home deliveries for refills?",
    answer: "Yes. For chronic cases (e.g., Diabetes, BP) or teleconsults, our logistics network provides rapid doorstep delivery, ensuring patients stay within your care loop without visiting local chemists."
  },
  {
    question: "How quickly can you deploy in my hospital?",
    answer: "Our standard deployment takes less than 14 days from contract signing to full operational readiness, without disrupting your current clinical flows."
  }
];

export const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-section-sm md:py-section border-t border-slate-100 overflow-hidden">
      {/* Atmospheric Primitives */}
      <div className="tech-grid-overlay opacity-[0.03]" />
      <div className="noise-texture opacity-[0.02]" />
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Clarity & Operations</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-indigo-600">Questions.</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Get the operational details on how MediKloud seamlessly scales your hospital pharmacy.
              </p>
            </motion.div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={idx}
                  className={`border rounded-[1.5rem] overflow-hidden transition-all duration-500 group ${
                    isActive 
                      ? 'bg-white border-indigo-200 shadow-card-md' 
                      : 'bg-white/40 border-slate-200 hover:border-indigo-100/50 hover:bg-white'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-base md:text-xl font-bold pr-8 transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-900 group-hover:text-brand-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-brand-600'}`}>
                      {isActive ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 md:px-8 pb-6 md:pb-8 pt-0">
                          <div className="h-px w-full bg-slate-100 mb-6" />
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
