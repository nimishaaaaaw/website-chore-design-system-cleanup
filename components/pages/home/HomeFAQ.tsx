"use client"

import React from 'react';
import { faqData } from '@/lib/constants';

export const HomeFAQ = () => {
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
                <span className="eyebrow-text">Clarity & Operations</span>
                <span className="eyebrow-line-r" />
              </div>

              <h2 className="premium-h2 mb-4 text-balance">
                Frequently Asked <span className="text-brand-indigo-600 drop-shadow-sm">Questions</span>
              </h2>
              <p className="premium-p intro-lock">
                Get the operational details on how MediKloud seamlessly scales your hospital pharmacy.
              </p>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => {
              // Automatically identifies and bolds the punchy first answer (e.g., "No.", "Never.")
              const [firstPart, ...rest] = faq.answer.split(/(?<=[.!?])\s+/);

              return (
                <div
                  key={index}
                  className="card card--static p-8 rounded-[2rem] border-muted shadow-card-sm transition-all duration-300 hover:shadow-card"
                >
                  <h3 className="text-h3 font-bold mb-4 text-primary">
                    {faq.question}
                  </h3>
                  <p className="premium-p text-subtitle leading-relaxed">
                    <span className="font-bold text-primary">{firstPart}</span> {rest.join(' ')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};