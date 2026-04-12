"use client"

import React from 'react';

const faqData = [
  {
    question: "Do I have to fire my current pharmacy staff?",
    answer: <><span className="text-slate-900 font-bold font-sans">We integrate them.</span> Your trusted staff remains; we provide professional management, specialized training, and software to make them 2x more efficient without any friction.</>
  },
  {
    question: "Who pays for the initial medicine stock?",
    answer: <><span className="text-slate-900 font-bold font-sans">MediKloud handles it.</span> We buy your existing inventory at fair market value and fund 100% of all future medicine stock and recurring expansion.</>
  },
  {
    question: "Can I keep using my current billing software?",
    answer: <><span className="text-slate-900 font-bold font-sans">We offer a better way.</span> We provide our premium Enterprise HMS for free, migrating all your clinical and billing data with zero data loss or downtime.</>
  },
  {
    question: "Who takes the loss for expired medicines?",
    answer: <><span className="text-slate-900 font-bold font-sans">100% MediKloud responsibility.</span> You will never pay for an expired strip of medicine again. We manage the full lifecycle of the inventory.</>
  },
  {
    question: "How do you handle home deliveries?",
    answer: <><span className="text-slate-900 font-bold font-sans">Full logistics support.</span> We provide the riders, the WhatsApp automated tracking, and the complete delivery infrastructure for your hospital patients.</>
  },
  {
    question: "How do you prevent medicine pilferage?",
    answer: <><span className="text-slate-900 font-bold font-sans">Total Transparency.</span> Our AI-synced inventory system ensures every single tablet is accounted for, from the loading dock to the patient's hand, with real-time audit logs.</>
  },
  {
    question: "How long does it take to transition?",
    answer: <><span className="text-slate-900 font-bold font-sans">Under 7 days.</span> Our clinical onboarding team handles the physical inventory audit and software sync while your hospital remains fully operational and serving patients.</>
  },
  {
    question: "How do my pharmacy margins improve?",
    answer: <><span className="text-slate-900 font-bold font-sans">Group Buying Power.</span> By joining our network, your hospital gets corporate-level pricing on medicines that standalone pharmacies simply cannot access, boosting your profitability.</>
  }
];

export const HospitalPharmacyFAQ = () => {
  return (
    <section id="faq" className="relative bg-slate-50 section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Support & Clarity</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Everything you need to know about professionalizing your hospital pharmacy and HMS operations.
              </p>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h4>
                <div className="premium-p !text-slate-600 leading-relaxed font-sans">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
