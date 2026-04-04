"use client"

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const HMSTrustBanner = () => {
  return (
    <div className="relative z-10 border-y border-slate-100 bg-white shadow-sm overflow-hidden whitespace-nowrap">
      <div className="max-w-container mx-auto px-6 py-5">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
            Cloud-based deployment in &lt; 24 hours
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
            No hidden fees
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
            Zero training required
          </li>
        </ul>
      </div>
    </div>
  );
};
