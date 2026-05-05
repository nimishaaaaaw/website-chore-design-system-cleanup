"use client"

import React from 'react';
import { premiumEase } from '@/lib/animation';


const faqData = [
  {
    question: "What happens if the 10-minute delivery is delayed?",
    answer: <>If our rider is delayed, we automatically provide <span className="text-slate-900 font-bold">Free Same-Day Home Delivery</span> for the patient. Accuracy and patient satisfaction are our top priorities.</>
  },
  {
    question: "Is this legal and compliant?",
    answer: <>Yes. MediKloud operates its own licensed retail pharmacies. We assume <span className="text-slate-900 font-bold">100% of the legal and regulatory liability.</span> All fulfillment happens through authorized channels.</>
  },
  {
    question: "How much does it cost the clinic to start?",
    answer: <>Establishing a Virtual Pharmacy node costs <span className="text-slate-900 font-bold">₹0.</span> There are no setup fees, inventory investment, or monthly software charges. We only earn when we fulfill prescriptions successfully.</>
  },
  {
    question: "How long does the setup take?",
    answer: <>We can go live in <span className="text-slate-900 font-bold">7 days.</span> This includes mapping your preferred brands, setting up your custom stock in our hub, and a quick training for your staff.</>
  },
  {
    question: "Does this increase my staff's workload?",
    answer: <>No. Operationally, it is <span className="text-slate-900 font-bold">Zero-Touch.</span> Your staff simply issues the Rx via our HMS—our hub handles the packing, delivery, and payments automatically.</>
  },
  {
    question: "What medicines do you stock in my local hub?",
    answer: <>We stock the <span className="text-slate-900 font-bold">exact brands you prefer.</span> We build a custom formulary mapped to your clinic's prescribing patterns to ensure 100% brand accuracy.</>
  },
  {
    question: "Do I need to hire a pharmacist for the clinic?",
    answer: <>No. MediKloud provides licensed pharmacists within our local fulfillment hubs to verify and fulfill all your clinic's orders. No additional payroll is required.</>
  },
  {
    question: "How are patient payments handled?",
    answer: <>MediKloud collects all payments directly via UPI or cash handled by our riders. <span className="text-slate-900 font-bold">The clinic does not handle cash</span>, eliminating financial overhead and reconciliation.</>
  },
  {
    question: "Is my patient data private and secure?",
    answer: <>Yes. All data is <span className="text-slate-900 font-bold">100% encrypted and private.</span> You own the patient relationship; we simply provide the technology and fulfillment infrastructure.</>
  }
];

export function VPFAQ() {
  return (
    <section className="relative bg-section-alt section-py border-t border-slate-100 overflow-hidden">
      {/* Forensic Atmospheric Finish */}
      <div className="tech-grid-overlay opacity-5" />
      
      <div className="container-page relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="premium-h2">
              Frequently Asked <span className="heading-accent">Questions</span>
            </h2>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h3>
                <div className="premium-p text-slate-600 leading-relaxed font-sans">
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