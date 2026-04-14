"use client"

import React from 'react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

export function GetStartedCTA() {
  const { openModal } = useContactModal();

  return (
    <section
      id="get-started-cta"
      className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden"
    >
      <DarkAtmosphere />

      {/* Content — bounded, no overflow or wrapping */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated Eyebrow / Line */}
        <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mb-10 opacity-60"></div>

        <h2 className="premium-h2 text-white mb-6 leading-[1.1] tracking-tight mx-auto max-w-[900px]">
          Ready to transform your <br className="hidden md:block" />
          <span className="text-indigo-400 pr-2">
            in-house pharmacy?
          </span>
        </h2>

        <p className="premium-p text-slate-400 mb-10 max-w-[850px] mx-auto">
          Experience the future of hospital pharmacy management. Get a personalised demo to see how we can scale your operations and protect your margins. You focus on patients—we handle the staff, stock, and stress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
          <button 
            onClick={() => openModal({
                    badge: "Partnership",
                    title: "Stop your pharmacy leakage.",
                    description: "Book a free audit to see exactly how much revenue your hospital is losing to external chain pharmacies.",
                    btnText: "Book My Free Audit"
                  })}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-2xl shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all w-full sm:w-auto active:scale-95 border-1.5 border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-action opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10 flex items-center gap-3">
              <span>Book a Demo</span>
              <svg className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
