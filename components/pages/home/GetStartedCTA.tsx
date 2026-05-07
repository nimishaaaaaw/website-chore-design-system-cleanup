"use client"

import React from 'react';
import { useContactModal } from '@/hooks/use-contact-modal';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { ArrowRight } from 'lucide-react';

export function GetStartedCTA() {
  const { openModal } = useContactModal();

  return (
    <section
      id="get-started-cta"
      className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden"
    >
      <DarkAtmosphere />

      <div className="container-page relative z-10 text-center">

        {/* Eyebrow line */}
        <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mb-10 opacity-60" />

        <h2 className="premium-h2 text-white mb-6 leading-[1.1] tracking-tight mx-auto max-w-[900px]">
          Ready to transform your <br className="hidden md:block" />
          <span className="text-indigo-400 pr-2">
            in-house pharmacy?
          </span>
        </h2>

        <p className="premium-p text-slate-400 mb-10 max-w-[850px] mx-auto">
          Experience the future of hospital pharmacy management. Get a personalised demo to see how we can scale your operations and protect your margins. You focus on patients — we handle the staff, stock, and stress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
          <button
            onClick={() => openModal({
              badge: "Partnership",
              title: "Stop your pharmacy leakage.",
              description: "Schedule a diagnostic walkthrough to see exactly how much revenue your hospital is losing to external chain pharmacies.",
              btnText: "Start Diagnostic"
            })}
            className="btn-cta-hero"
          >
            <span>Book a Demo</span>
            <ArrowRight 
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
              strokeWidth={2.5} 
            />
          </button>
        </div>

      </div>
    </section>
  );
}