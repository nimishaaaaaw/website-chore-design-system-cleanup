"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────
type Persona = 'hw' | 'ho' | 'cw' | 'co';

const WORKING_DAYS = 26;

function formatMoneyUnit(val: number): { value: string; unit: string } {
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
}

function formatMoney(val: number): string {
  if (val === 0) return '₹0';
  const cr = val / 100;
  if (cr >= 1) return cr >= 10 ? `₹${Math.round(cr)} Cr` : `₹${cr.toFixed(1)} Cr`;
  if (val >= 100) return `₹${Math.round(val)}L`;
  if (val >= 10) return `₹${val.toFixed(1)}L`;
  if (val >= 1) return `₹${val.toFixed(2)}L`;
  return `₹${Math.round(val * 100000).toLocaleString('en-IN')}`;
}

// ─── Persona Tabs ─────────────────────────────────────────────────────────────
const PERSONAS = [
  { k: 'hw' as Persona, label: 'Hospital · With Pharmacy',    icon: '🏥' },
  { k: 'ho' as Persona, label: 'Hospital · Without Pharmacy', icon: '🏥' },
  { k: 'cw' as Persona, label: 'Clinic · With Pharmacy',      icon: '🩺' },
  { k: 'co' as Persona, label: 'Clinic · Without Pharmacy',   icon: '🩺' },
];

type GlimpseData = { headline: string; subline: string; items: { icon: string; text: string }[]; cta: string; href: string };

const GLIMPSE: Record<Persona, GlimpseData> = {
  hw: {
    headline: 'We plug the leaks and run your pharmacy end-to-end.',
    subline: 'MediKloud takes over staffing, billing, procurement, and compliance — so you stop managing the pharmacy and start profiting from it.',
    items: [
      { icon: '📊', text: 'Real-time prescription tracking — zero billing escape' },
      { icon: '🔄', text: 'Chronic refill follow-ups routed back through your pharmacy' },
      { icon: '📦', text: 'Centralized inventory with AI-driven near-expiry alerts' },
    ],
    cta: 'See the full solution →',
    href: '/v1/v1/v1/v1/solutions/hospital-with-pharmacy',
  },
  ho: {
    headline: 'We set up and operate your pharmacy. Zero capex from you.',
    subline: 'From licensing to staffing to tech — MediKloud deploys a fully branded pharmacy inside your hospital, live in 7 days.',
    items: [
      { icon: '🏗️', text: 'Full pharmacy setup — design, licensing, and staffing handled' },
      { icon: '💊', text: 'Institutional pricing via our central procurement network' },
      { icon: '📈', text: 'Revenue share model — you earn from day one, no investment' },
    ],
    cta: 'See how we set it up →',
    href: '/v1/v1/v1/v1/solutions/hospital-without-pharmacy',
  },
  cw: {
    headline: 'We automate your dispensary and cut your procurement costs.',
    subline: 'MediKloud brings institutional-grade procurement, smart billing, and expiry tracking to your existing clinic setup.',
    items: [
      { icon: '💰', text: 'Buy at hospital prices, not retail — 8–12% margin improvement' },
      { icon: '🧾', text: 'Auto-billing synced to your OPD prescriptions' },
      { icon: '⏱️', text: 'Expiry and near-expiry alerts — stop losing stock silently' },
    ],
    cta: 'See the full solution →',
    href: '/v1/v1/v1/v1/solutions/clinic-with-dispensary',
  },
  co: {
    headline: 'Turn every prescription into a recurring revenue stream.',
    subline: 'No space, no license, no hassle. MediKloud delivers medicines to your patients virtually — and you earn a commission on every order.',
    items: [
      { icon: '📲', text: 'Patients order via your branded link — medicines delivered to their doorstep' },
      { icon: '💸', text: 'Earn 10–17% on every fulfillment with zero operational work' },
      { icon: '🔁', text: 'Automated chronic refill reminders boost your repeat revenue' },
    ],
    cta: 'See how it works →',
    href: '/v1/v1/v1/v1/solutions/clinic-without-pharmacy',
  },
};

const DEFAULTS: Record<Persona, { footfall: number; aov: number; monthlyRevenue: number; invPct: number }> = {
  hw: { footfall: 100, aov: 900,  monthlyRevenue: 12, invPct: 12 },
  ho: { footfall: 120, aov: 900,  monthlyRevenue: 12, invPct: 12 },
  cw: { footfall: 35,  aov: 450,  monthlyRevenue: 2,  invPct: 12 },
  co: { footfall: 30,  aov: 400,  monthlyRevenue: 12, invPct: 12 },
};

// ─── Animated Count-Up ────────────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(value);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (Math.abs(from - to) < 0.01) return;
    startTimeRef.current = null;
    const step = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const p = Math.min((ts - startTimeRef.current) / 500, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (to - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else { setDisplay(to); fromRef.current = to; }
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const fmt = formatMoneyUnit(display);
  return (
    <>
      <span className="text-3xl lg:text-4xl font-black text-white leading-none tabular-nums">{fmt.value}</span>
      <span className="text-[11px] font-semibold text-blue-200 ml-1.5">{fmt.unit}</span>
    </>
  );
}

// ─── Slider ───────────────────────────────────────────────────────────────────
function SliderRow({ label, displayValue, value, min, max, step, onChange }: {
  label: string; displayValue: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-[12px] font-semibold text-slate-700">{label}</label>
        <span className="text-[12px] font-bold text-blue-600 tabular-nums">{displayValue}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
}

// ─── Output Line ─────────────────────────────────────────────────────────────
function OutputLine({ dot, label, value }: { dot: 'blue' | 'teal' | 'indigo'; label: string; value: string }) {
  const dotColor = dot === 'blue' ? 'bg-blue-500' : dot === 'teal' ? 'bg-teal-500' : 'bg-indigo-500';
  return (
    <div className="flex justify-between items-center text-[12px] md:text-[13px]">
      <span className="flex items-center text-slate-700 font-semibold">
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mr-2.5 shrink-0`} />
        {label}
      </span>
      <span className="font-bold text-slate-900 tabular-nums">
        {value} <span className="text-[10px] font-medium text-slate-400">/ mo</span>
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function PersonaROISection() {
  const [persona, setPersona]               = useState<Persona>('hw');
  const [footfall, setFootfall]             = useState(DEFAULTS.hw.footfall);
  const [aov, setAov]                       = useState(DEFAULTS.hw.aov);
  const [monthlyRevenue, setMonthlyRevenue] = useState(DEFAULTS.hw.monthlyRevenue);
  const [invPct, setInvPct]                 = useState(DEFAULTS.hw.invPct);

  const handlePersonaChange = (p: Persona) => {
    setPersona(p);
    const d = DEFAULTS[p];
    setFootfall(d.footfall); setAov(d.aov);
    setMonthlyRevenue(d.monthlyRevenue); setInvPct(d.invPct);
  };

  const hasPharmacy   = persona === 'hw' || persona === 'cw';
  const isClinic      = persona === 'cw' || persona === 'co';

  const potentialRevenueL = (footfall * aov * WORKING_DAYS) / 100000;
  const maxRevenue        = Math.max(0.5, Math.floor(potentialRevenueL * 2) / 2);
  const effectiveRevenue  = Math.min(monthlyRevenue, maxRevenue);
  const captureRate       = Math.min(effectiveRevenue / potentialRevenueL, 1.0);
  const captureRatePct    = Math.round(captureRate * 100);
  const leakageMoL        = potentialRevenueL * (1 - captureRate);
  const invLossMoL        = effectiveRevenue * (invPct / 100);
  const refillMoL         = (footfall * (isClinic ? 0.28 : 0.30) * aov * (persona === 'co' ? 0.175 : 0.85) * WORKING_DAYS / 100000) * (isClinic ? 0.22 : 0.25);

  let annualTotal = 0;
  if (persona === 'hw') annualTotal = (leakageMoL + invLossMoL + refillMoL) * 12;
  if (persona === 'ho') annualTotal = (potentialRevenueL * 0.82 + refillMoL) * 12;
  if (persona === 'cw') annualTotal = (leakageMoL + invLossMoL + refillMoL) * 12;
  if (persona === 'co') annualTotal = (potentialRevenueL * 0.175 + refillMoL) * 12;

  const getTileBand = (pct: number) => pct <= 8 ? 1 : pct <= 16 ? 2 : 3;
  const currentBand = getTileBand(invPct);
  const glimpse = GLIMPSE[persona];

  return (
    <section id="persona-roi" className="bg-white border-b border-slate-100 py-8 md:py-12 font-sans tracking-tight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 leading-tight">
            See exactly how MediKloud works for you
          </h2>
          <p className="text-slate-500 text-xs font-medium">Select your setup — we'll show you what changes and what you recover.</p>
        </div>

        {/* PILL TAB SWITCHER */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-3xl mx-auto">
          {PERSONAS.map((p) => {
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
                <span className="mr-1">{p.icon}</span>{p.label}
              </button>
            );
          })}
        </div>

        {/* TWO-COLUMN CARD */}
        <div className="flex flex-col lg:flex-row rounded-2xl border border-slate-200 shadow-xl overflow-hidden">

          {/* ── LEFT — SOLUTION GLIMPSE ─────────────────────────────────── */}
          <div className="w-full lg:w-[38%] bg-slate-50 p-5 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col gap-4" style={{ minHeight: 440 }}>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">What changes for you</p>
            <div>
              <h3 className="text-[15px] font-bold text-slate-800 leading-snug mb-2">{glimpse.headline}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{glimpse.subline}</p>
              <ul className="space-y-2.5">
                {glimpse.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[12px] text-slate-600 leading-relaxed">
                    <span className="flex-shrink-0">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={glimpse.href}
              className="mt-auto self-start text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            >
              {glimpse.cta}
            </Link>
          </div>

          {/* ── RIGHT — INPUTS + OUTPUTS ────────────────────────────────── */}
          <div className="w-full lg:w-[62%] flex flex-col md:flex-row">

            {/* INPUTS */}
            <div className="flex-1 bg-slate-50 p-5 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col gap-3.5" style={{ minHeight: 440 }}>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Your {isClinic ? 'clinic' : 'hospital'} today
              </p>

              {/* Fixed-height wrapper prevents layout shift when pharmacy slider appears/disappears */}
              <div style={{ minHeight: 44 }}>
                {hasPharmacy && (
                  <SliderRow
                    label="Monthly pharmacy revenue"
                    displayValue={formatMoney(effectiveRevenue)}
                    value={effectiveRevenue} min={0.5} max={maxRevenue} step={0.5}
                    onChange={setMonthlyRevenue}
                  />
                )}
              </div>

              <SliderRow
                label={isClinic ? 'Avg. daily consultations' : 'Avg. daily footfall'}
                displayValue={String(footfall)}
                value={footfall}
                min={isClinic ? 5 : 20} max={isClinic ? 200 : 600} step={isClinic ? 5 : 10}
                onChange={setFootfall}
              />

              <SliderRow
                label="Avg prescription value (₹)"
                displayValue={`₹${aov}`}
                value={aov} min={150} max={2000} step={50}
                onChange={setAov}
              />

              {/* Fixed-height wrapper prevents layout shift when inventory section appears/disappears */}
              <div style={{ minHeight: 120 }}>
                {hasPharmacy && (
                  <div>
                    <label className="text-[12px] font-semibold text-slate-700 block mb-2">How often do you track inventory?</label>
                    <div className="flex gap-1.5 mb-2">
                      {([
                        { b: 1, v: 5,  l: 'Daily / Frequently' },
                        { b: 2, v: 12, l: 'Often / Periodically' },
                        { b: 3, v: 20, l: 'Minimal / Very Rare' },
                      ] as const).map((tile) => {
                        const active = currentBand === tile.b;
                        return (
                          <button
                            key={tile.b}
                            onClick={() => setInvPct(tile.v)}
                            className={`flex-1 px-2 py-1 rounded-full text-[10px] font-bold transition-all border whitespace-nowrap ${
                              active
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                            }`}
                          >
                            {tile.l}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">Est. stock loss</span>
                      <input
                        type="range" min={2} max={40} step={1} value={invPct}
                        onChange={(e) => setInvPct(parseInt(e.target.value))}
                        className="flex-1 h-1 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                      />
                      <span className="text-[11px] font-black text-blue-600 w-7 text-right tabular-nums">{invPct}%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* OUTPUTS */}
            <div className="flex-1 bg-white p-5 flex flex-col justify-between gap-3" style={{ minHeight: 440 }}>
              {/* Capture stat */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-100 bg-white gap-3">
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
                  {hasPharmacy
                    ? <div className="text-4xl font-black text-blue-600 leading-none tabular-nums">{captureRatePct}%</div>
                    : <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-teal-500 leading-none tabular-nums">{formatMoney(potentialRevenueL)}</div>
                  }
                </div>
              </div>

              {/* Line items - fixed height so 2-line tabs don't collapse */}
              <div className="px-1 flex-1" style={{ minHeight: 80 }}>
                <div className="space-y-2.5">
                  {persona === 'hw' && (<>
                    <OutputLine dot="blue"   label="Prescription Leakage" value={formatMoney(leakageMoL)} />
                    <OutputLine dot="teal"   label="Inventory Loss"       value={formatMoney(invLossMoL)} />
                    <OutputLine dot="indigo" label="~ Chronic Refills"    value={formatMoney(refillMoL)}  />
                  </>)}
                  {persona === 'ho' && (<>
                    <OutputLine dot="blue" label="Prescription Capture" value={formatMoney(potentialRevenueL * 0.82)} />
                    <OutputLine dot="teal" label="~ Chronic Refills"    value={formatMoney(refillMoL)} />
                  </>)}
                  {persona === 'cw' && (<>
                    <OutputLine dot="blue"   label="Prescription Leakage" value={formatMoney(leakageMoL)} />
                    <OutputLine dot="teal"   label="Inventory Loss"       value={formatMoney(invLossMoL)} />
                    <OutputLine dot="indigo" label="~ Chronic Refills"    value={formatMoney(refillMoL)}  />
                  </>)}
                  {persona === 'co' && (<>
                    <OutputLine dot="blue" label="Commission (~17.5%)" value={formatMoney(potentialRevenueL * 0.175)} />
                    <OutputLine dot="teal" label="~ Chronic Refills"   value={formatMoney(refillMoL)} />
                  </>)}
                </div>
              </div>

              {/* Annual total */}
              <div className="rounded-xl bg-blue-600 px-5 py-3.5 flex justify-between items-center">
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-blue-200">
                    {hasPharmacy || persona === 'ho' ? 'Annual Revenue Recovery' : 'Annual Earning Potential'}
                  </p>
                  <p className="text-[10px] text-blue-300 mt-0.5">with MediKloud</p>
                </div>
                <div className="flex items-baseline">
                  <AnimatedNumber value={annualTotal} />
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

      </div>
    </section>
  );
}
