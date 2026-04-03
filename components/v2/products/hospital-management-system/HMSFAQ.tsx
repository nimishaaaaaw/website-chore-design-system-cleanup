"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqData = [
  {
    q: "How do I migrate my existing patient data?",
    a: "We handle the heavy lifting. Our team will batch-import your records from legacy systems or spreadsheets with zero data loss."
  },
  {
    q: "Is MediKloud ABDM and ABHA compliant?",
    a: "Yes. MediKloud is fully ABDM-compliant. Create ABHA IDs and link health records natively within the platform."
  },
  {
    q: "What happens if the internet goes down?",
    a: <>Our <strong className="font-bold text-slate-900">Offline-Resilient</strong> architecture lets you continue clinical charting; data syncs automatically once you're back online.</>
  },
  {
    q: "Can MediKloud be customized for my specialty?",
    a: "Yes. We offer specialty-specific templates (Cardio, Ortho, Gynec, etc.) and fully customizable SOAP notes to match your workflow."
  },
  {
    q: "Are there any hidden maintenance fees?",
    a: "None. We use a transparent SaaS model with no hidden charges for updates, security, or maintenance."
  },
  {
    q: "How much training does my staff need?",
    a: "Minimal. Most staff are fully proficient after a single 2-hour onboarding session."
  },
  {
    q: "Does it support multi-doctor clinics?",
    a: "Yes. Add multiple doctors and departments with specialized desks and role-based access control."
  },
  {
    q: "What are the hardware requirements?",
    a: "No servers needed. Runs on any standard tablet, laptop, or desktop with a basic internet connection."
  },
  {
    q: "Who owns my clinical data?",
    a: "You do. MediKloud is the custodian, but you own the data and can export your records at any time."
  },
  {
    q: "Does it handle GST and TPA automatically?",
    a: "Yes. Generate GST-compliant invoices and track insurance claims/settlements in one unified dashboard."
  }
];

export const HMSFAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="relative py-section-sm md:py-section bg-slate-50 overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h1 font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Your Clinical Questions. <br />
            <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>Answered.</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`bg-white border rounded-[2rem] overflow-hidden transition-all duration-300 ${
                  activeFaq === idx 
                    ? 'border-brand-indigo-200 shadow-card-lg ring-4 ring-brand-indigo-50/50' 
                    : 'border-slate-200 hover:border-slate-300 shadow-card hover:shadow-card-md'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg font-bold pr-6 transition-colors ${activeFaq === idx ? 'text-brand-indigo-600' : 'text-slate-800 group-hover:text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeFaq === idx 
                      ? 'bg-brand-indigo-600 text-white rotate-180' 
                      : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-body-lg text-slate-600 leading-relaxed font-medium">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-card group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-100">
              <MessageCircle className="w-7 h-7 text-blue-600" />
            </div>
            <h4 className="text-h3 font-bold text-slate-900 mb-3 uppercase tracking-tight">Still have questions?</h4>
            <p className="text-body-lg text-slate-500 mb-8 max-w-sm font-medium">Our product specialists are ready to help you find the right setup for your clinic.</p>
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-widest text-brand-600 bg-brand-50 border border-brand-200 rounded-xl hover:bg-brand-600 hover:text-white transition-all shadow-sm hover:shadow-btn active:scale-95">
              Talk to our Support Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
