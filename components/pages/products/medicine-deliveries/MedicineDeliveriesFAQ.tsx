"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle, Phone } from 'lucide-react'

const faqItems = [
  {
    q: "Do I need to hire my own riders?",
    a: "No. MediKloud provides the riders and handles all logistics for you."
  },
  {
    q: "How do you guarantee the exact brand?",
    a: "We pick from your hospital’s pharmacy, ensuring the patient gets exactly what you prescribed."
  },
  {
    q: "How long does it take to set up?",
    a: "Your hospital can be live and delivering to patients in less than 24 hours."
  },
  {
    q: "Who pays for the delivery fee?",
    a: "You choose. You can have the patient pay a small fee or the hospital can cover it."
  },
  {
    q: "What if a patient doesn't have a smartphone?",
    a: "We provide a dedicated telephone line for easy reorders via a clinical coordinator."
  },
  {
    q: "Who owns the patient data?",
    a: "You do. You retain full ownership of all clinical records and can export them any time."
  },
  {
    q: "Is the billing GST-compliant?",
    a: "Yes. Every transaction is fully GST-compliant and integrated into your billing system."
  },
  {
    q: "What is the support response time?",
    a: "We provide real-time updates for every order and immediate support for any delivery issues."
  },
  {
    q: "Is patient privacy protected?",
    a: "Absolute. MediKloud adheres to the highest clinical data privacy and security standards."
  },
  {
    q: "Does it cover specialty medicines?",
    a: "Yes. We stock the exact brands your doctors prescribe for Cardio, Ortho, Gynec, and more."
  },
  {
    q: "How precise are the refill reminders?",
    a: "Our system calculates the exact day a patient runs out to ensure a timely reorder."
  }
];

export const MedicineDeliveriesFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-section-sm md:py-section bg-white border-t border-slate-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] z-0" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h1 md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => {
            const isActive = openFaq === idx;
            
            return (
              <div 
                key={idx}
                className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 group ${
                  isActive 
                    ? 'bg-white border-blue-200 shadow-card-md' 
                    : 'bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group gap-6"
                >
                  <span className={`text-base md:text-h4 font-bold transition-colors ${isActive ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                    {isActive ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                          {faq.a}
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
    </section>
  )
}
