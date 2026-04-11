"use client"

import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section className="relative bg-slate-50 section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Support & Clarity</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Everything you need to know about India&apos;s most comprehensive Hospital Management System.
              </p>
            </motion.div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h4>
                <div className="premium-p !text-slate-600 leading-relaxed font-sans">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

