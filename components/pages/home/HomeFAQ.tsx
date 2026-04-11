"use client"

import React from 'react';
import { motion } from 'framer-motion';

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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Clarity & Operations</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Get the operational details on how MediKloud seamlessly scales your hospital pharmacy.
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
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h4>
                <p className="premium-p !text-slate-600 leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
