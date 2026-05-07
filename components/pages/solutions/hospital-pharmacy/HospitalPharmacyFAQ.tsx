"use client"

import React from 'react';

const faqData = [
  {
    question: "Do I have to fire my current pharmacy staff?",
    answer: "We integrate them. Your trusted staff remains; we provide professional management, specialized training, and software to make them 2x more efficient without any friction."
  },
  {
    question: "Who pays for the initial medicine stock?",
    answer: "MediKloud handles it. We buy your existing inventory at fair market value and fund 100% of all future medicine stock and recurring expansion."
  },
  {
    question: "Can I keep using my current billing software?",
    answer: "We offer a better way. We provide our premium Enterprise HMS for free, migrating all your clinical and billing data with zero data loss or downtime."
  },
  {
    question: "Who takes the loss for expired medicines?",
    answer: "100% MediKloud responsibility. You will never pay for an expired strip of medicine again. We manage the full lifecycle of the inventory."
  },
  {
    question: "How do you handle home deliveries?",
    answer: "Full logistics support. We provide the riders, the WhatsApp automated tracking, and the complete delivery infrastructure for your hospital patients."
  },
  {
    question: "How do you prevent medicine pilferage?",
    answer: "Total Transparency. Our AI-synced inventory system ensures every single tablet is accounted for, from the loading dock to the patient's hand, with real-time activity logs."
  },
  {
    question: "How long does it take to transition?",
    answer: "Under 7 days. Our clinical onboarding team handles the physical inventory diagnostic and software sync while your hospital remains fully operational."
  },
  {
    question: "How do my pharmacy margins improve?",
    answer: "Group Buying Power. By joining our network, your hospital gets corporate-level pricing on medicines that standalone pharmacies simply cannot access, boosting your profitability."
  }
];

export const HospitalPharmacyFAQ = () => {
  return (
    <section id="faq" className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex flex-col items-center">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Support & Clarity</span>
                <span className="eyebrow-line-r" />
              </div>
              
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-brand-indigo-600 drop-shadow-sm">Questions</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Everything you need to know about professionalizing your hospital pharmacy and HMS operations.
              </p>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => {
              // Automatically identifies and bolds the punchy opening statement
              const [firstPart, ...rest] = faq.answer.split(/(?<=[.!?])\s+/);

              return (
                <div
                  key={index}
                  className="card card--static p-8 rounded-[2rem] border-muted shadow-card-sm transition-all duration-300 hover:shadow-card"
                >
                  <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">{faq.question}</h3>
                
                  <div className="premium-p text-slate-500 leading-relaxed font-sans">
                    
                    <span className="font-bold text-slate-900">{firstPart}</span> {rest.join(' ')}
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};