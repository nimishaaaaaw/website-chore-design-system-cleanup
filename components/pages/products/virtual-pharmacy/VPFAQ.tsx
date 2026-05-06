"use client"

import React from 'react';
import { premiumEase } from '@/lib/animation';

const faqData = [
  {
    question: "What happens if the 10-minute delivery is delayed?",
    answer: "Free Same-Day Home Delivery. If our rider is delayed, we automatically provide complimentary home delivery for the patient. Accuracy and patient satisfaction are our top priorities."
  },
  {
    question: "Is this legal and compliant?",
    answer: "100% compliant. MediKloud operates its own licensed retail pharmacies and assumes all legal and regulatory liability. All fulfillment happens through authorized channels."
  },
  {
    question: "How much does it cost the clinic to start?",
    answer: "Zero setup fees. Establishing a Virtual Pharmacy node costs ₹0. There are no setup fees, inventory investment, or monthly software charges. We only earn when we fulfill prescriptions successfully."
  },
  {
    question: "How long does the setup take?",
    answer: "7 days to live. This includes mapping your preferred brands, setting up your custom stock in our hub, and a quick training for your staff."
  },
  {
    question: "Does this increase my staff's workload?",
    answer: "Zero-Touch operations. Your staff simply issues the Rx via our HMS—our hub handles the packing, delivery, and payments automatically."
  },
  {
    question: "What medicines do you stock in my local hub?",
    answer: "Your preferred brands. We stock the exact brands you prescribe. We build a custom formulary mapped to your clinic's patterns to ensure 100% brand accuracy."
  },
  {
    question: "Do I need to hire a pharmacist for the clinic?",
    answer: "No additional payroll. MediKloud provides licensed pharmacists within our local fulfillment hubs to verify and fulfill all your clinic's orders."
  },
  {
    question: "How are patient payments handled?",
    answer: "Automated collection. MediKloud collects all payments directly via UPI or cash handled by our riders. The clinic does not handle cash, eliminating financial overhead."
  },
  {
    question: "Is my patient data private and secure?",
    answer: "100% encrypted. All data is secure and private. You own the patient relationship; we simply provide the technology and fulfillment infrastructure."
  }
];

export function VPFAQ() {
  return (
    <section className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      {/* Background Decorative Element */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex flex-col items-center">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Clarity & Hubs</span>
                <span className="eyebrow-line-r" />
              </div>

              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-brand-indigo-600 drop-shadow-sm">Questions</span>
              </h2>
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
                  <h3 className="text-h3 font-bold mb-4 text-primary">{faq.question}</h3>
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