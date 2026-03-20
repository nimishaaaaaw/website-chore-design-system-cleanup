"use client"

import React from 'react';

import { PROBLEM_STATS as STATS } from './v2-data';

export function ProblemSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-10 md:py-14 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — one line */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
            Your hospital is losing{' '}
            <span className="text-blue-600">30–40%</span>{' '}
            of pharmacy revenue — silently.
          </h2>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden mb-6">
          {STATS.map(({ label, stat, note }) => (
            <div key={label} className="bg-white px-5 py-6 flex flex-col items-center text-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
              <span className="text-3xl md:text-4xl font-black text-blue-600 tabular-nums leading-none">{stat}</span>
              <span className="text-[11px] text-slate-400">{note}</span>
            </div>
          ))}
        </div>

        {/* One-liner insight */}
        <p className="text-center text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
          Apollo & MedPlus win with standardised ops and tech-controlled inventory.
          {' '}<span className="text-blue-600 font-semibold">MediKloud closes that gap for independent hospitals.</span>
        </p>

      </div>
    </section>
  );
}
