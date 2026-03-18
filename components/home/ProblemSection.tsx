"use client"

import React from 'react';
import { AlertTriangle, TrendingDown, XCircle } from 'lucide-react';

const problems = [
  {
    title: "Internal bleed",
    stat: "15–20%",
    desc: "Lost to missed billing, pilferage, and untracked inventory — before a patient even walks out.",
    icon: AlertTriangle,
  },
  {
    title: "Prescription leakage",
    stat: "20–30%",
    desc: "Patients fill prescriptions at Apollo, MedPlus, 1mg. The hospital captures zero recurring value.",
    icon: TrendingDown,
  },
  {
    title: "No pharmacy at all",
    stat: "25%",
    desc: "Clinics blocked by space, cost, and licensing. Every prescription is gifted directly to competitors.",
    icon: XCircle,
  }
];

export function ProblemSection() {
  return (
    <section className="py-4 md:py-6 bg-white flex flex-col items-center justify-center font-sans border-t border-slate-100 min-h-[100svh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-2 shadow-sm">
            The Problem We Solve
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Your hospital is silently losing{' '}
            <span className="text-blue-600">30–40%</span> of pharmacy revenue
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Demand is created inside your hospital. Revenue is captured outside by retail chains.{' '}
            <span className="font-semibold text-slate-700">This is not a demand problem — it is an operating capability gap.</span>
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-4 lg:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex-1 flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-blue-100/50 text-blue-600 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight pt-0.5">
                      {problem.title}
                    </h3>
                  </div>

                  {/* Stat */}
                  <div className="mb-2 pl-1">
                    <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-1">
                      Estimated Leakage
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-600">
                      {problem.stat}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-3 mt-auto border-t border-slate-200/60">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {problem.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-4 md:mt-5 max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 md:p-4 flex flex-col md:flex-row gap-3 items-start md:items-center">
            <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0 border border-slate-200 flex items-center justify-center">
              <span className="text-xl" role="img" aria-label="insight">💡</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                Why organised chains keep winning
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Apollo and MedPlus have{' '}
                <span className="font-medium text-slate-700">standardised ops, central procurement, massive volumes, and technology-controlled inventory</span>.
                Independent hospitals have none of this — and{' '}
                <span className="font-bold text-blue-600">MediKloud</span> is the operating layer that closes that exact gap.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
