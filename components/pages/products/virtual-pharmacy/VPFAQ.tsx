'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What happens if the 10-minute delivery is delayed?",
    answer: <>If our rider is delayed, we automatically provide <span className="text-slate-900 font-bold">Free Same-Day Home Delivery</span> for the patient. Accuracy and patient satisfaction are our top priorities.</>
  },
  {
    question: "Is this legal and compliant?",
    answer: <>Yes. MediKloud operates its own licensed retail pharmacies. We assume <span className="text-slate-900 font-bold">100% of the legal and regulatory liability.</span> All fulfillment happens through authorized channels.</>
  },
  {
    question: "How much does it cost the clinic to start?",
    answer: <>Establishing a Virtual Pharmacy node costs <span className="text-slate-900 font-bold">₹0.</span> There are no setup fees, inventory investment, or monthly software charges. We only earn when we fulfill prescriptions successfully.</>
  },
  {
    question: "How long does the setup take?",
    answer: <>We can go live in <span className="text-slate-900 font-bold">7 days.</span> This includes mapping your preferred brands, setting up your custom stock in our hub, and a quick training for your staff.</>
  },
  {
    question: "Does this increase my staff’s workload?",
    answer: <>No. Operationally, it is <span className="text-slate-900 font-bold">Zero-Touch.</span> Your staff simply issues the Rx via our HMS—our hub handles the packing, delivery, and payments automatically.</>
  },
  {
    question: "What medicines do you stock in my local hub?",
    answer: <>We stock the <span className="text-slate-900 font-bold">exact brands you prefer.</span> We build a custom formulary mapped to your clinic's prescribing patterns to ensure 100% brand accuracy.</>
  },
  {
    question: "Do I need to hire a pharmacist for the clinic?",
    answer: <>No. MediKloud provides licensed pharmacists within our local fulfillment hubs to verify and fulfill all your clinic's orders. No additional payroll is required.</>
  },
  {
    question: "How are patient payments handled?",
    answer: <>MediKloud collects all payments directly via UPI or cash handled by our riders. <span className="text-slate-900 font-bold">The clinic does not handle cash</span>, eliminating financial overhead and reconciliation.</>
  },
  {
    question: "Is my patient data private and secure?",
    answer: <>Yes. All data is <span className="text-slate-900 font-bold">100% encrypted and private.</span> You own the patient relationship; we simply provide the technology and fulfillment infrastructure.</>
  }
];

export function VPFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white section-py border-t border-slate-100 overflow-hidden">
      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-section text-center md:text-5xl leading-tight tracking-tight mb-6"
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
                          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
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
