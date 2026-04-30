"use client"

import React from 'react';

const faqData = [
  {
    question: "How fast is the delivery to my clinic?",
    answer: <><span className="text-slate-900 font-bold">10 Minutes.</span> We deliver medicines to your clinic door in just 10 minutes. Our routing system automatically dispatches the rider from the nearest MediKloud Hub the moment you sign the prescription.</>
  },
  {
    question: "Do I have to pay for or store the medicines?",
    answer: <><span className="text-slate-900 font-bold">Zero Inventory.</span> You don't buy or store any medicine in your clinic. MediKloud manages the entire lifecycle of the stock, tracking, and expiries for you.</>
  },
  {
    question: "How do I earn margin through this?",
    answer: <><span className="text-slate-900 font-bold">Transparent Earnings.</span> You earn a professional margin on every prescription fulfilled through the MediKloud network. All earnings are tracked in real-time on your dashboard.</>
  },
  {
    question: "What if my patient needs a refill at home?",
    answer: <><span className="text-slate-900 font-bold">Home Delivery Included.</span> For chronic medicines, our system sends a WhatsApp reminder to the patient and manages home delivery automatically, ensuring they never miss a dose.</>
  },
  {
    question: "Does it work with my existing patient software?",
    answer: <><span className="text-slate-900 font-bold">Full Integration.</span> MediKloud works perfectly alongside your existing setups or as a standalone Clinical OS on desktop, tablet, and mobile devices.</>
  },
  {
    question: "How long does it take to get started?",
    answer: <><span className="text-slate-900 font-bold">Under 24 Hours.</span> We can get your clinic live and routing medicines in less than a day with zero setup fees and zero disruption to your daily practice.</>
  }
];

export const ClinicPharmacyFAQ = () => {
  return (
    <section id="faq" className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      <div className="tech-grid-overlay opacity-5" />

      <div className="container-page relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center">
            <div className="eyebrow-wrap">
              <span className="eyebrow-line-r" />
              <span className="eyebrow-text">Clarity & Confidence</span>
              <span className="eyebrow-line-l" />
            </div>
            <h2 className="premium-h2 mb-4 text-balance">
              Frequently Asked <span className="heading-accent">Questions</span>
            </h2>
            <p className="premium-p intro-lock">
              Everything you need to know about launching your clinic's digital pharmacy infrastructure.
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="card p-8 rounded-3xl"
            >
              <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">{faq.question}</h3>
              <div className="text-base text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};