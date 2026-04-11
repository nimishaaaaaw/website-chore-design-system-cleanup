"use client"

import React from 'react'
import { motion } from 'framer-motion'

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
  return (
    <section id="faq" className="relative bg-slate-50 section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="premium-h2"
            >
              Frequently Asked <span className="text-indigo-600">Questions</span>
            </motion.h2>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: premiumEase, delay: index * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{faq.q}</h4>
                <div className="premium-p !text-slate-600 leading-relaxed font-sans">
                  {faq.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

