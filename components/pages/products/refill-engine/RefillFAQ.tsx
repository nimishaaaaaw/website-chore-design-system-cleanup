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

export function RefillFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Support Center</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Your Medicine Delivery <br/>Questions. Answered.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${openFaq === index ? 'border-blue-600 shadow-xl shadow-blue-50' : 'border-slate-100 hover:border-slate-300'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold tracking-tight pr-4 transition-colors uppercase ${openFaq === index ? 'text-blue-600' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openFaq === index ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                  {openFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-slate-500 font-medium leading-relaxed text-lg border-t border-slate-50 pt-6">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FAQ Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
        >
           <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Have a different question?</p>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Talk to our team in real-time</p>
              </div>
           </div>
           <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-lg active:scale-95 whitespace-nowrap uppercase tracking-widest">
              Contact Support
           </button>
        </motion.div>
      </div>
    </section>
  )
}
