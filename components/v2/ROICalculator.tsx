"use client";

import React, { useState, useEffect } from 'react';

const WORKING_DAYS = 26;
type Persona = 'hw' | 'ho' | 'cw' | 'co';

const formatMoney = (val: number) => {
  if (val === 0) return '₹0';
  const cr = val / 100;
  if (cr >= 1) {
    // Show in Crores
    if (cr >= 10) return `₹${Math.round(cr)} Cr`;
    return `₹${cr.toFixed(1)} Cr`;
  }
  // Show in Lakhs
  if (val >= 100) return `₹${Math.round(val)}L`;
  if (val >= 10) return `₹${val.toFixed(1)}L`;
  if (val >= 1) return `₹${val.toFixed(2)}L`;
  const inRupees = Math.round(val * 100000);
  return `₹${inRupees.toLocaleString('en-IN')}`;
};

const formatMoneyUnit = (val: number): { value: string; unit: string } => {
  const cr = val / 100;
  if (cr >= 1) {
    const v = cr >= 10 ? `${Math.round(cr)}` : cr.toFixed(1);
    return { value: `₹${v}`, unit: 'Cr / yr' };
  }
  if (val >= 100) return { value: `₹${Math.round(val)}`, unit: 'L / yr' };
  if (val >= 10) return { value: `₹${val.toFixed(1)}`, unit: 'L / yr' };
  if (val >= 1) return { value: `₹${val.toFixed(2)}`, unit: 'L / yr' };
  const inRupees = Math.round(val * 100000);
  return { value: `₹${inRupees.toLocaleString('en-IN')}`, unit: '/ yr' };
};

export function ROICalculator() {
  const [persona, setPersona] = useState<Persona>('hw');

  const [footfall, setFootfall] = useState(100);
  const [aov, setAov] = useState(900);
  const [monthlyRevenue, setMonthlyRevenue] = useState(12);
  const [invPct, setInvPct] = useState(12);

  const handlePersonaChange = (newPersona: Persona) => {
    setPersona(newPersona);
    if (newPersona === 'hw') { setFootfall(100); setAov(900); setMonthlyRevenue(12); setInvPct(12); }
    else if (newPersona === 'ho') { setFootfall(120); setAov(900); }
    else if (newPersona === 'cw') { setFootfall(35); setAov(450); setMonthlyRevenue(2); setInvPct(12); }
    else if (newPersona === 'co') { setFootfall(30); setAov(400); }
  };

  const potentialRevenueL = (footfall * aov * WORKING_DAYS) / 100000;
  const maxRevenue = Math.max(0.5, Math.floor(potentialRevenueL * 2) / 2);
  const effectiveMonthlyRevenue = Math.min(monthlyRevenue, maxRevenue);

  const captureRate = Math.min(effectiveMonthlyRevenue / potentialRevenueL, 1.0);
  const captureRatePct = Math.round(captureRate * 100);
  const leakageRate = 1 - captureRate;
  const leakageMoL = potentialRevenueL * leakageRate;
  const invLossMoL = effectiveMonthlyRevenue * (invPct / 100);

  const refillMoHwL = (footfall * 0.30 * aov * 0.85 * WORKING_DAYS / 100000) * 0.25;
  const refillMoCwL = (footfall * 0.28 * aov * 0.85 * WORKING_DAYS / 100000) * 0.22;
  const refillMoHoL = (footfall * 0.30 * aov * 0.85 * WORKING_DAYS / 100000) * 0.25;
  const refillMoCoL = (footfall * 0.28 * aov * 0.175 * WORKING_DAYS / 100000) * 0.22;

  let annualTotal = 0;
  if (persona === 'hw') annualTotal = (leakageMoL + invLossMoL + refillMoHwL) * 12;
  if (persona === 'ho') annualTotal = (potentialRevenueL * 0.82 + refillMoHoL) * 12;
  if (persona === 'cw') annualTotal = (leakageMoL + invLossMoL + refillMoCwL) * 12;
  if (persona === 'co') annualTotal = (potentialRevenueL * 0.175 + refillMoCoL) * 12;

  const hasPharmacy = ['hw', 'cw'].includes(persona);
  const isClinic = ['cw', 'co'].includes(persona);

  const getTileBand = (pct: number) => pct <= 8 ? 1 : pct <= 16 ? 2 : 3;
  const currentBand = getTileBand(invPct);
  const annualFmt = formatMoneyUnit(annualTotal);

  return (
    <section className="bg-white flex flex-col items-center justify-center font-sans tracking-tight border-b border-slate-100 min-h-[100svh] py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">

        {/* HEADER */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 leading-tight">
            Calculate Your Recoverable Revenue
          </h2>
          <p className="text-slate-500 text-xs font-medium">See exactly how much revenue MediKloud can unlock or recover for you.</p>
        </div>

        {/* PERSONA SELECTOR */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4 max-w-3xl mx-auto">
          {([
            { k: 'hw', l: '🏥 Hospital with pharmacy' },
            { k: 'ho', l: '🏥 Hospital without pharmacy' },
            { k: 'cw', l: '🩺 Clinic with dispensary' },
            { k: 'co', l: '🩺 Clinic without pharmacy' },
          ] as const).map((p) => {
            const isActive = persona === p.k;
            return (
              <button
                key={p.k}
                onClick={() => handlePersonaChange(p.k)}
                className={`rounded-full px-3.5 py-1.5 text-[11px] md:text-xs transition-all focus:outline-none whitespace-nowrap border font-semibold ${
                  isActive
                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-[0_0_0_1px_rgba(59,130,246,0.3)]'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                }`}
              >
                {p.l}
              </button>
            );
          })}
        </div>

        {/* UNIFIED CARD — single border, two zones divided by a subtle line */}
        <div className="flex flex-col md:flex-row rounded-2xl border border-slate-200 shadow-xl overflow-hidden">

          {/* LEFT — INPUTS (40%) */}
          <div className="w-full md:w-[40%] bg-slate-50 p-5 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col min-h-[440px]">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              Your {isClinic ? 'clinic' : 'hospital'} today
            </p>

            <div className="flex flex-col gap-4 flex-1">

              {/* Revenue — fixed height wrapper to prevent shift while allowing instant removal */}
              <div className="min-h-[44px]">
                {hasPharmacy && (
                  <>
                    <div className="flex justify-between mb-1">
                      <label className="text-[12px] font-semibold text-slate-700">Monthly pharmacy revenue</label>
                      <span className="text-[12px] font-bold text-blue-600">{formatMoney(effectiveMonthlyRevenue)}</span>
                    </div>
                    <input type="range" min={0.5} max={maxRevenue} step={0.5} value={effectiveMonthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(parseFloat(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                    />
                  </>
                )}
              </div>

              {/* Footfall */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-[12px] font-semibold text-slate-700">
                    {isClinic ? 'Average Daily Consultations' : 'Average Daily Footfall'}
                  </label>
                  <span className="text-[12px] font-bold text-blue-600">{footfall}</span>
                </div>
                <input type="range" min={isClinic ? 5 : 20} max={isClinic ? 200 : 600} step={isClinic ? 5 : 10}
                  value={footfall} onChange={(e) => setFootfall(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* AOV */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-[12px] font-semibold text-slate-700">Avg prescription value (AOV)</label>
                  <span className="text-[12px] font-bold text-blue-600">₹{aov}</span>
                </div>
                <input type="range" min={150} max={2000} step={50} value={aov}
                  onChange={(e) => setAov(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Inventory section — fixed height wrapper to prevent shift while allowing instant removal */}
              <div className="min-h-[120px]">
                {hasPharmacy && (
                  <>
                    <div className="flex items-baseline justify-between mb-2">
                      <label className="text-[12px] font-semibold text-slate-700">How often do you track inventory?</label>
                    </div>

                    {/* Compact pills with clear situation options */}
                    <div className="flex gap-1.5 flex-wrap mb-3 transition-opacity duration-0">
                      {([
                        { b: 1, v: 5, l: 'Daily / Frequently' },
                        { b: 2, v: 12, l: 'Often / Periodically' },
                        { b: 3, v: 20, l: 'Minimal / Very Rare' },
                      ] as const).map((tile) => {
                        const isActive = currentBand === tile.b;
                        return (
                          <button
                            key={tile.b}
                            onClick={() => setInvPct(tile.v)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap ${
                              isActive
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                            }`}
                          >
                            {tile.l}
                          </button>
                        );
                      })}
                    </div>

                    {/* Slider row — labelled clearly */}
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">Est. stock loss</span>
                      <input type="range" min={2} max={40} step={1} value={invPct}
                        onChange={(e) => setInvPct(parseInt(e.target.value))}
                        className="flex-1 h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 outline-none"
                      />
                      <span className="text-[11px] font-bold text-blue-600 w-7 text-right">{invPct}%</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — OUTPUTS (60%) */}
          <div className="w-full md:w-[60%] bg-white p-5 lg:p-8 flex flex-col justify-between min-h-[440px]">

            {/* Big stat — compact, left-aligned professional style */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-100 bg-white mb-4 gap-4">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">
                  {hasPharmacy ? 'Pharmacy revenue captured' : persona === 'ho' ? 'Monthly prescription demand' : 'Monthly prescription value'}
                </p>
                <p className="text-xs text-slate-500 leading-tight">
                  {hasPharmacy
                    ? 'Remaining goes to Apollo, MedPlus & retail'
                    : persona === 'ho'
                    ? 'Currently captured by retail chains, not you'
                    : 'Earn 15–20% commission via MediKloud virtual pharmacy'}
                </p>
              </div>
              <div className="text-right shrink-0">
                {hasPharmacy ? (
                  <div className="text-4xl font-bold text-blue-600 leading-tight tabular-nums pb-1">{captureRatePct}%</div>
                ) : (
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-teal-500 leading-tight tabular-nums pb-1 overflow-visible">{formatMoney(potentialRevenueL)}</div>
                )}
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-2.5 mb-5 flex-1 px-1">
              {persona === 'hw' && (<>
                <OutputLine dot="blue" label="Prescription Leakage" value={formatMoney(leakageMoL)} />
                <OutputLine dot="teal" label="Inventory Loss" value={formatMoney(invLossMoL)} />
                <OutputLine dot="indigo" label="~ Chronic Refills" value={formatMoney(refillMoHwL)} />
              </>)}
              {persona === 'ho' && (<>
                <OutputLine dot="blue" label="Prescription Capture" value={formatMoney(potentialRevenueL * 0.82)} />
                <OutputLine dot="teal" label="~ Chronic Refills" value={formatMoney(refillMoHoL)} />
              </>)}
              {persona === 'cw' && (<>
                <OutputLine dot="blue" label="Prescription Leakage" value={formatMoney(leakageMoL)} />
                <OutputLine dot="teal" label="Inventory Loss" value={formatMoney(invLossMoL)} />
                <OutputLine dot="indigo" label="~ Chronic Refills" value={formatMoney(refillMoCwL)} />
              </>)}
              {persona === 'co' && (<>
                <OutputLine dot="blue" label="Commission (~17.5%)" value={formatMoney(potentialRevenueL * 0.175)} />
                <OutputLine dot="teal" label="~ Chronic Refills" value={formatMoney(refillMoCoL)} />
              </>)}
            </div>

            {/* Annual upside — blue accent, in sync with page theme */}
            <div className="rounded-xl bg-blue-600 px-5 py-3.5 flex justify-between items-center mb-3">
              <div>
                <p className="text-[9px] uppercase tracking-widest font-bold text-blue-200">
                  {hasPharmacy || persona === 'ho' ? 'Annual Revenue Recovery' : 'Annual Earning Potential'}
                </p>
                <p className="text-[10px] text-blue-300 mt-0.5">with MediKloud</p>
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl lg:text-4xl font-bold text-white leading-tight tabular-nums pb-0.5">
                  {annualFmt.value}
                </span>
                <span className="text-[11px] font-semibold text-blue-200 ml-1.5">{annualFmt.unit}</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md shadow-blue-600/20"
            >
              Get my exact ROI audit →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutputLine({ dot, label, value }: { dot: 'blue' | 'teal' | 'indigo'; label: string; value: string }) {
  const dotColor = dot === 'blue' ? 'bg-blue-500 shadow-blue-500/40' : dot === 'teal' ? 'bg-teal-500 shadow-teal-500/40' : 'bg-indigo-500 shadow-indigo-500/40';
  return (
    <div className="flex justify-between items-center text-[12px] md:text-[13px]">
      <span className={`flex items-center text-slate-700 font-semibold`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shadow-sm mr-2.5 shrink-0`}></span>
        {label}
      </span>
      <span className="font-bold text-slate-900 tabular-nums">{value} <span className="text-[10px] font-medium text-slate-400">/ mo</span></span>
    </div>
  );
}
