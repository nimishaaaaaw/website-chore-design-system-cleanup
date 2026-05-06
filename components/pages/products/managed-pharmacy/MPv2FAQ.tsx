"use client"

import React from 'react';
import { premiumEase } from '@/lib/animation';

// Cleaned up data - No more hardcoded <span> or JSX tags here
const faqs = [
  {
    question: "Do I have to pay anything upfront?",
    answer: "No. MediKloud covers 100% of the opening costs. We fully fund the initial stock, install the shelving, and deploy our smart technology at zero cost to you."
  },
  {
    question: "What happens to my current pharmacy staff during transition?",
    answer: "We are flexible. We can absorb your high-performing pharmacists directly onto our payroll, or we can simply replace them with our own trained professionals. The choice is yours."
  },
  {
    question: "Do you dictate which specific medicines are stocked?",
    answer: "Never. We respect clinical authority. We collaborate directly with your doctors to build a custom formulary perfectly mapped to their exact prescribing habits, ensuring zero disruption to patient care."
  },
  {
    question: "What is the catch? How long is the contract?",
    answer: "12-month lock-in. We require only an initial 12-month lock-in to justify our setup investment. After year one, the partnership continues strictly based on our ability to grow your clinic's profit."
  },
  {
    question: "How do you stop patients from migrating to online apps?",
    answer: "Through automated timing. Our AI calculates the exact day their prescription runs out and proactively sends a WhatsApp refill link, locking in the home delivery through your hospital hub."
  },
  {
    question: "Do you buy out my existing unsold inventory stock?",
    answer: "Yes. If you currently operate your own pharmacy, we audit your viable stock and can purchase it directly to form the opening inventory, instantly freeing up your sunk cash."
  },
  {
    question: "Who handles the medicine inventory and suppliers?",
    answer: "We handle everything. MediKloud oversees 100% of network procurement, purchase orders, and supplier payments. You never have to process an invoice or chase down a delayed shipment ever again."
  },
  {
    question: "How long does the actual physical pharmacy transition take?",
    answer: "It happens overnight. While regulatory paperwork takes a few weeks, the actual physical handover—installing shelving, loading inventory, and going live—is executed entirely overnight to ensure zero patient downtime."
  }
];

export function MPv2FAQ() {
  return (
    <section className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      {/* Background Decorative Element */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex flex-col items-center">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Clarity & Operations</span>
                <span className="eyebrow-line-r" />
              </div>

              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-brand-indigo-600 drop-shadow-sm">Questions</span>
              </h2>
              <p className="premium-p intro-lock">
                Common questions about our managed pharmacy partnership.
              </p>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => {
              // Automatically identifies and bolds the first punchy statement
              const [firstPart, ...rest] = faq.answer.split(/(?<=[.!?])\s+/);

              return (
                <div
                  key={index}
                  className="card card--static p-8 rounded-[2rem] border-muted shadow-card-sm transition-all duration-300 hover:shadow-card"
                >
                  <h3 className="text-h3 font-bold mb-4 text-primary">
                    {faq.question}
                  </h3>
                  <div className="premium-p text-subtitle leading-relaxed font-sans">
                    <span className="font-bold text-primary">{firstPart}</span> {rest.join(' ')}
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