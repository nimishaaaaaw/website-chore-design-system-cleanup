"use client"

import React from 'react';
import { faqData } from '@/lib/constants';

export const HomeFAQ = () => {
  return (
    <section className="relative bg-section-alt section-py border-t border-muted overflow-hidden">
      <div className="tech-grid-overlay opacity-5" />

      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex flex-col items-center">
            <div className="eyebrow-wrap">
              <span className="eyebrow-line-l" />
              <span className="eyebrow-text">Clarity & Operations</span>
              <span className="eyebrow-line-r" />
            </div>

            <h2 className="premium-h2 mb-4 text-balance">
              Frequently Asked <span className="heading-accent">Questions</span>
            </h2>
            <p className="premium-p intro-lock">
              Get the operational details on how MediKloud seamlessly scales your hospital pharmacy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="card card--static p-8 rounded-3xl"
            >
              <h3 className="text-h3 font-bold mb-4">{faq.question}</h3>
              <p className="premium-p leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};