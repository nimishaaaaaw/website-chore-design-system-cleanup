"use client"

import React from 'react';
import { premiumEase } from '@/lib/animation';


const faqs = [
  {
    question: "Do I have to pay anything upfront?",
    answer: <><span className="text-slate-900 font-bold font-sans">No.</span> MediKloud covers 100% of the opening costs. We fully fund the initial stock, install the shelving, and deploy our smart technology at zero cost to you.</>
  },
  {
    question: "What happens to my current pharmacy staff during transition?",
    answer: <><span className="text-slate-900 font-bold">We are flexible.</span> We can absorb your high-performing pharmacists directly onto our payroll, or we can simply replace them with our own trained professionals. The choice is yours.</>
  },
  {
    question: "Do you dictate which specific medicines are stocked?",
    answer: <><span className="text-slate-900 font-bold">Never.</span> We respect clinical authority. We collaborate directly with your doctors to build a custom formulary perfectly mapped to their exact prescribing habits, ensuring zero disruption to patient care.</>
  },
  {
    question: "What is the catch? How long is the contract?",
    answer: <><span className="text-slate-900 font-bold font-sans">No.</span> We require only an initial 12-month lock-in to justify our setup investment. After year one, the partnership continues strictly based on our ability to grow your clinic's profit.</>
  },
  {
    question: "How do you stop patients from migrating to online apps?",
    answer: <><span className="text-slate-900 font-bold">Through automated timing.</span> Our AI calculates the exact day their prescription runs out and proactively sends a WhatsApp refill link, locking in the home delivery through your hospital hub.</>
  },
  {
    question: "Do you buy out my existing unsold inventory stock?",
    answer: <><span className="text-slate-900 font-bold">Yes.</span> If you currently operate your own pharmacy, we audit your viable stock and can purchase it directly to form the opening inventory, instantly freeing up your sunk cash.</>
  },
  {
    question: "Who handles the medicine inventory and suppliers?",
    answer: <><span className="text-slate-900 font-bold font-sans">We handle everything.</span> MediKloud oversees 100% of network procurement, purchase orders, and supplier payments. You never have to process an invoice or chase down a delayed shipment ever again.</>
  },
  {
    question: "How long does the actual physical pharmacy transition take?",
    answer: <><span className="text-slate-900 font-bold">It happens overnight.</span> While regulatory paperwork takes a few weeks, the actual physical handover—installing shelving, loading inventory, and going live—is executed entirely overnight to ensure zero patient downtime.</>
  }
];

export function MPv2FAQ() {
  return (
    <section className="relative bg-slate-50 section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="header-lock text-center mb-16 space-y-4">
            <h2 className="premium-h2">
              Frequently Asked <span className="text-indigo-600">Questions</span>
            </h2>
            <p className="premium-p mb-10 max-w-2xl mx-auto">
              Common questions about our managed pharmacy partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h3>
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
}
