"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How do I migrate my existing patient data?",
    answer: "We handle the heavy lifting. Our team will batch-import your records from legacy systems or spreadsheets with zero data loss."
  },
  {
    question: "Is MediKloud HMS ABDM and ABHA compliant?",
    answer: "Yes. MediKloud is fully ABDM-compliant. Create ABHA IDs and link health records natively within the platform."
  },
  {
    question: "What happens if the internet goes down?",
    answer: <>Our <strong className="font-bold text-slate-900">Offline-Resilient</strong> architecture lets you continue clinical charting; data syncs automatically once you're back online.</>
  },
  {
    question: "Can MediKloud be customized for my specialty?",
    answer: "Yes. We offer specialty-specific templates (Cardio, Ortho, Gynec, etc.) and fully customizable SOAP notes to match your workflow."
  },
  {
    question: "Are there any hidden maintenance fees?",
    answer: "None. We use a transparent SaaS model with no hidden charges for updates, security, or maintenance."
  },
  {
    question: "How much training does my staff need?",
    answer: "Minimal. Most staff are fully proficient after a single 2-hour onboarding session."
  },
  {
    question: "Does it support multi-doctor clinics?",
    answer: "Yes. Add multiple doctors and departments with specialized desks and role-based access control."
  },
  {
    question: "What are the hardware requirements?",
    answer: "No servers needed. Runs on any standard tablet, laptop, or desktop with a basic internet connection."
  },
  {
    question: "Who owns my clinical data?",
    answer: "You do. MediKloud is the custodian, but you own the data and can export your records at any time."
  },
  {
    question: "Does it handle GST and TPA automatically?",
    answer: "Yes. Generate GST-compliant invoices and track insurance claims/settlements in one unified dashboard."
  }
];

export const HMSFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-section-sm md:py-section border-t border-slate-100 overflow-hidden">
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-h1 text-center md:text-5xl font-bold leading-tight tracking-tight text-slate-900"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isActive = activeIndex === idx;
              
              return (
                <div 
                  key={idx}
                  className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white border-indigo-200 shadow-card-md' 
                      : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-base md:text-h4 font-bold pr-8 transition-colors ${isActive ? 'text-brand-indigo-600' : 'text-slate-900 group-hover:text-brand-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-indigo-100 text-brand-indigo-600' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-brand-600'}`}>
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
