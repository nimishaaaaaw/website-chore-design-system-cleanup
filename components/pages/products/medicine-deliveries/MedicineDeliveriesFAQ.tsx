"use client"

import React from 'react'

const faqItems = [
  {
    q: "Do I need to hire my own riders?",
    a: "No. MediKloud provides the riders and handles all logistics for you."
  },
  {
    q: "How do you guarantee the exact brand?",
    a: "We pick from your hospital's pharmacy. This ensures the patient gets exactly what you prescribed."
  },
  {
    q: "How long does it take to set up?",
    a: "Less than 24 hours. Your hospital can be live and delivering to patients almost immediately."
  },
  {
    q: "Who pays for the delivery fee?",
    a: "Total control. You can have the patient pay a small fee or the hospital can cover it."
  },
  {
    q: "What if a patient doesn't have a smartphone?",
    a: "No smartphone needed. Patients can reorder by calling your front desk or our support line."
  },
  {
    q: "Who owns the patient data?",
    a: "You do. All prescription and delivery data remains with your hospital and can be exported at any time."
  },
  {
    q: "Is the billing GST-compliant?",
    a: "Yes. Every transaction is fully GST-compliant and integrated into your billing system."
  },
  {
    q: "What is the support response time?",
    a: "Immediate support. We provide real-time updates for every order and quick resolution for any issues."
  },
  {
    q: "Is patient privacy protected?",
    a: "Fully encrypted. All patient and prescription data is stored securely and never shared with third parties."
  },
  {
    q: "Does it cover specialty medicines?",
    a: "Yes. We deliver directly from your hospital's pharmacy, so any specialty medicine you stock is covered."
  },
  {
    q: "How precise are the refill reminders?",
    a: "Automated timing. We calculate when a patient is likely to run out and send a WhatsApp reminder."
  }
];

export const MedicineDeliveriesFAQ = () => {
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
                <span className="eyebrow-text">Clarity & Logistics</span>
                <span className="eyebrow-line-r" />
              </div>

              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-brand-indigo-600 drop-shadow-sm">Questions</span>
              </h2>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => {
              // Automatically identifies and bolds the punchy opening statement
              const [firstPart, ...rest] = faq.a.split(/(?<=[.!?])\s+/);

              return (
                <div
                  key={index}
                  className="card card--static p-8 rounded-[2rem] border-muted shadow-card-sm transition-all duration-300 hover:shadow-card"
                >
                  <h3 className="text-h3 font-bold text-slate-900 mb-4 tracking-tight">{faq.q}</h3>
                 
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
}