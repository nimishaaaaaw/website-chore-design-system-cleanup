"use client"

import React from 'react'

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
    a: "Patients can reorder by calling your front desk or our support line. No smartphone needed."
  },
  {
    q: "Who owns the patient data?",
    a: <><span className="text-slate-900 font-bold">You do.</span> All prescription and delivery data remains with your hospital and can be exported at any time.</>
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
    a: <>Yes. All patient and prescription data is <span className="text-slate-900 font-bold">encrypted and stored securely.</span> Your patients' information is never shared with third parties.</>
  },
  {
    q: "Does it cover specialty medicines?",
    a: <>Yes. We deliver directly from <span className="text-slate-900 font-bold">your hospital's pharmacy,</span> so any specialty medicine you stock is automatically covered.</>
  },
  {
    q: "How precise are the refill reminders?",
    a: <>We calculate when each patient is likely to run out and send them a <span className="text-slate-900 font-bold">WhatsApp reminder</span> at the right time.</>
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
            <h2 className="premium-h2">
              Frequently Asked <span className="text-indigo-600">Questions</span>
            </h2>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-sm transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.q}</h3>
                <div className="premium-p !text-slate-600 leading-relaxed font-sans">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

