"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const premiumEase = [0.16, 1, 0.3, 1] as any;

const faqs = [
  {
    question: "Who holds the Drug License and legal liability?",
    answer: <><span className="text-slate-900 font-bold">MediKloud.</span> We operate strictly under our own Drug License, meaning 100% of the legal and regulatory liability shifts from your hospital directly to us.</>
  },
  {
    question: "Do I pay for the software, shelving, or inventory?",
    answer: <><span className="text-slate-900 font-bold">No.</span> MediKloud covers 100% of the opening CapEx. We fully fund the initial inventory, install the rapid shelving, and deploy the AI software at zero cost to you.</>
  },
  {
    question: "What happens to my current pharmacy staff?",
    answer: <><span className="text-slate-900 font-bold">We are flexible.</span> We can absorb your high-performing pharmacists directly onto our payroll, or we can replace them with our own trained professionals. The choice is yours.</>
  },
  {
    question: "Do you dictate which medicines are stocked?",
    answer: <><span className="text-slate-900 font-bold">Never.</span> We respect clinical authority. We collaborate directly with your doctors to build a custom formulary perfectly mapped to their exact prescribing habits.</>
  },
  {
    question: "How is my profit calculated?",
    answer: <><span className="text-slate-900 font-bold">By revenue share.</span> You earn a transparent, mutually agreed percentage of the Net Collected Revenue. You can track your sales in real-time on our dashboard and get paid monthly.</>
  },
  {
    question: "Is there a massive, multi-year contract lock-in?",
    answer: <><span className="text-slate-900 font-bold">No.</span> We require only an initial 12-month lock-in to justify our CapEx investment. After year one, the partnership continues strictly based on our ability to grow your profit.</>
  },
  {
    question: "How do you stop patients from migrating to online apps?",
    answer: <><span className="text-slate-900 font-bold">Through automated timing.</span> Our AI calculates the exact day their prescription runs out and proactively sends a WhatsApp refill link, locking in the home delivery through your hospital hub.</>
  },
  {
    question: "Do you buy out my existing inventory?",
    answer: <><span className="text-slate-900 font-bold">Yes.</span> If you currently operate your own pharmacy, we audit your viable stock and can purchase it directly to form the opening inventory, instantly freeing up your sunk cash.</>
  },
  {
    question: "Who manages distributor relationships and payments?",
    answer: <><span className="text-slate-900 font-bold">We handle everything.</span> MediKloud oversees 100% of network procurement, purchase orders, and supplier payouts. You never have to process a distributor invoice again.</>
  },
  {
    question: "How long does the actual physical transition take?",
    answer: <><span className="text-slate-900 font-bold">It happens overnight.</span> While regulatory paperwork takes a few weeks, the actual physical handover—installing shelving, loading inventory, and going live—is executed entirely overnight to ensure zero patient downtime.</>
  }
];

export function MPv2FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="header-lock text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
              className="premium-h2"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* FAQ List - Standardized Components */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`border rounded-3xl overflow-hidden transition-all duration-500 group ${isActive
                      ? 'bg-white border-indigo-100 shadow-card-md'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-100 hover:bg-white'
                    }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-base md:text-lg font-bold pr-8 transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 shadow-sm border border-slate-100'}`}>
                      {isActive ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: premiumEase }}
                      >
                        <div className="px-6 md:px-8 pb-8 md:pb-10 pt-0">
                          <div className="h-px w-full bg-slate-100 mb-8" />
                          <p className="premium-p !text-sm lg:!text-base">
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
}
