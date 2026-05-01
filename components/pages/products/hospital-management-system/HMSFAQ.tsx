"use client"

import React from 'react';

const faqData = [
  {
    question: "How do I migrate my existing patient data?",
    answer: <><span className="font-bold font-sans text-primary">We handle everything.</span> Our clinical onboarding team will batch-import your records from your legacy systems or Excel sheets with zero data loss.</>
  },
  {
    question: "Is MediKloud HMS ABDM compliant?",
    answer: <><span className="font-bold font-sans text-primary">100% Compliant.</span> MediKloud is Tier-1 ABDM-compliant. Create ABHA IDs and link health records natively right from the dashboard.</>
  },
  {
    question: "What happens if the internet goes down?",
    answer: <><span className="font-bold font-sans text-primary">You stay operational.</span> Our offline-resilient architecture lets you continue charting without interruption. Data syncs automatically the second you are back online.</>
  },
  {
    question: "Can it be customized for my specialty?",
    answer: <><span className="font-bold font-sans text-primary">Absolutely.</span> We provide pre-built templates for 15+ specialties (Cardio, Ortho, etc.) and customizable SOAP notes to match your exact workflow.</>
  },
  {
    question: "Are there any hidden maintenance AMC fees?",
    answer: <><span className="font-bold font-sans text-primary">Zero.</span> We use a transparent subscription model. All over-the-air updates, security protocols, and system maintenance are included for free.</>
  },
  {
    question: "How much training does my staff need?",
    answer: <><span className="font-bold font-sans text-primary">Under 2 hours.</span> The interface is as intuitive as a smartphone app. Most reception staff are fully proficient after a single onboarding session.</>
  },
  {
    question: "Does it support multi-doctor clinics?",
    answer: <><span className="font-bold font-sans text-primary">Yes.</span> You can instantly add new doctors, set up specialized department desks, and configure strict role-based access for your entire staff.</>
  },
  {
    question: "What are the hardware requirements?",
    answer: <><span className="font-bold font-sans text-primary">Anything with a browser.</span> Because we are a cloud-native OS, there are no bulky local servers required. It runs flawlessly on your existing laptops or tablets.</>
  },
  {
    question: "Who owns my clinical data?",
    answer: <><span className="font-bold font-sans text-primary">You retain 100% ownership.</span> MediKloud acts strictly as a secure custodian. You own your data and can export your complete records at any time.</>
  },
  {
    question: "Does it handle GST and TPA automatically?",
    answer: <><span className="font-bold font-sans text-primary">Yes.</span> Generate real-time GST-compliant invoices and track TPA insurance claims and pending settlements in one unified financial dashboard.</>
  }
];

export const HMSFAQ = () => {
  return (
    <section className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      <div className="tech-grid-overlay opacity-5" />

      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 md:mb-20">
            <div className="flex flex-col items-center">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line-l" />
                <span className="eyebrow-text">Support & Clarity</span>
                <span className="eyebrow-line-r" />
              </div>
              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="heading-accent">Questions</span>
              </h2>
              <p className="premium-p intro-lock !max-w-2xl">
                Everything you need to know about India&apos;s most comprehensive Hospital Management System.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="card card--static rounded-[2rem]">
                <h3 className="text-h3 font-bold mb-4">{faq.question}</h3>
                <div className="premium-p leading-relaxed font-sans">
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