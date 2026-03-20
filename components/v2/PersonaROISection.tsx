"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Stethoscope, Check, ChevronRight, PieChart, ArrowUp, Sparkles, Activity } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type PersonaKey = 'hw' | 'ho' | 'cw' | 'co';

const WORKING_DAYS = 26;

function formatMoneyUnit(val: number): { value: string; unit: string } {
  const cr = val / 100;
  if (cr >= 1) {
    const v = cr >= 10 ? `${Math.round(cr)}` : cr.toFixed(2);
    return { value: `₹${v}`, unit: 'Cr / yr' };
  }
  if (val >= 100) return { value: `₹${Math.round(val)}`, unit: 'L / yr' };
  if (val >= 10) return { value: `₹${val.toFixed(1)}`, unit: 'L / yr' };
  if (val >= 1) return { value: `₹${val.toFixed(2)}`, unit: 'L / yr' };
  return { value: `₹${Math.round(val * 100000).toLocaleString('en-IN')}`, unit: '/ yr' };
}

function formatMoney(v: number): string {
  if (v === 0) return '₹0';
  const cr = v / 100;
  if (cr >= 1) return cr >= 10 ? `₹${Math.round(cr)} Cr` : `₹${cr.toFixed(2)} Cr`;
  if (v >= 100) return `₹${Math.round(v)}L`;
  if (v >= 10) return `₹${v.toFixed(1)}L`;
  if (v >= 1) return `₹${v.toFixed(2)}L`;
  return `₹${Math.round(v * 100000).toLocaleString('en-IN')}`;
}

// ─── Persona Config ──────────────────────────────────────────────────────────
const SETUP_GROUPS = [
  {
    category: 'Hospital',
    options: [
      {
        k: 'hw' as PersonaKey,
        label: 'Have a Pharmacy',
        description: 'Running but leaking revenue',
        pills: ['Stop prescription leakage', 'Automate inventory', 'Recover chronic refills'],
        cta: 'See full solution',
        href: '#hospital-with-pharmacy',
        icon: Building2,
      },
      {
        k: 'ho' as PersonaKey,
        label: 'No Pharmacy Yet',
        description: 'Zero capex, live in 7 days',
        pills: ['Zero capex setup', 'Live in 7 days', 'Revenue share from day 1'],
        cta: 'See setup process',
        href: '#hospital-without-pharmacy',
        icon: Building2,
      },
    ],
  },
  {
    category: 'Clinic',
    options: [
      {
        k: 'cw' as PersonaKey,
        label: 'Have a Dispensary',
        description: 'Procure cheaper, bill smarter',
        pills: ['Buy at network prices', 'Auto OPD sync', 'No stock wastage'],
        cta: 'See full solution',
        href: '#clinic-with-dispensary',
        icon: Stethoscope,
      },
      {
        k: 'co' as PersonaKey,
        label: 'No Dispensary',
        description: 'Commission per prescription',
        pills: ['Earn 10–17% per Rx', 'Zero operations', 'Automated refill engine'],
        cta: 'See virtual pharmacy',
        href: '#clinic-without-pharmacy',
        icon: Stethoscope,
      },
    ],
  },
] as const;

const DEFAULTS: Record<PersonaKey, { footfall: number; aov: number; rev: number; invPct: number }> = {
  hw: { footfall: 100, aov: 900, rev: 12, invPct: 12 },
  ho: { footfall: 120, aov: 900, rev: 12, invPct: 12 },
  cw: { footfall: 35, aov: 450, rev: 2, invPct: 12 },
  co: { footfall: 30, aov: 400, rev: 12, invPct: 12 },
};

// ─── Animated Count-Up ────────────────────────────────────────────────────────
function AnimatedNumber({ value, textClass = "text-white", subClass = "text-slate-400" }: { value: number, textClass?: string, subClass?: string }) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number | null>(null);
  const fromRef = useRef(value);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const from = fromRef.current;
    if (Math.abs(from - value) < 0.01) return;
    startRef.current = null;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / 600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (value - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else { setDisplay(value); fromRef.current = value; }
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value]);

  const fmt = formatMoneyUnit(display);
  return (
    <div className="text-center flex flex-col items-center justify-center py-0 relative z-10">
      <div className={`text-3xl md:text-4xl font-extrabold tabular-nums tracking-tight leading-none drop-shadow-sm flex items-baseline gap-1 ${textClass}`}>
        {fmt.value}
      </div>
      <div className={`text-xs font-bold uppercase tracking-[0.2em] mt-3 ${subClass}`}>
        {fmt.unit}
      </div>
    </div>
  );
}

// ─── Slider ───────────────────────────────────────────────────────────────────
function Slider({ label, value, displayValue, min, max, step, onChange, disabled }: {
  label: string; value: number; displayValue: string; min: number; max: number; step: number;
  onChange: (v: number) => void; disabled?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 ${disabled ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
      <div className="flex justify-between items-center h-5">
        <span className="text-[13px] font-medium text-slate-500 leading-none">{label}</span>
        <span className="text-[13px] font-bold text-slate-900 tabular-nums drop-shadow-sm">{displayValue}</span>
      </div>
      <div className="relative w-full h-1.5 rounded-full bg-slate-200 mt-0.5">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-75"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-slate-200 pointer-events-none transition-all duration-75"
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ─── Metric Row ───────────────────────────────────────────────────────────────
function MetricRow({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="group flex justify-between items-end py-1 px-3 -mx-3 rounded-lg hover:bg-slate-50/80 transition-all duration-300 border-b border-slate-200/50 border-dashed last:border-transparent relative overflow-hidden">
      <span className="text-[13px] font-medium text-slate-500 group-hover:text-slate-800 transition-colors relative z-10">{label}</span>
      <div className="flex items-baseline gap-1.5 relative z-10">
        <span className="text-sm font-bold text-slate-900 tabular-nums">{value}</span>
        {sub && <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{sub}</span>}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function PersonaROISection() {
  const [selected, setSelected] = useState<PersonaKey | null>(null);
  const [footfall, setFootfall] = useState(100);
  const [aov, setAov] = useState(900);
  const [rev, setRev] = useState(12);
  const [invPct, setInvPct] = useState(12);

  const selectPersona = (k: PersonaKey) => {
    if (selected === k) return; // Keep user in flow
    setSelected(k);
    const d = DEFAULTS[k];
    setFootfall(d.footfall); setAov(d.aov); setRev(d.rev); setInvPct(d.invPct);
  };

  const hasPharmacy = selected === 'hw' || selected === 'cw';
  const isClinic = selected === 'cw' || selected === 'co';

  const potL = (footfall * aov * WORKING_DAYS) / 100000;
  const maxRev = Math.max(0.5, Math.floor(potL * 2) / 2);
  const effRev = Math.min(rev, maxRev);
  const leakage = potL - effRev;
  const invLoss = effRev * (invPct / 100);
  const refill = (footfall * (isClinic ? 0.28 : 0.30) * aov * (selected === 'co' ? 0.175 : 0.85) * WORKING_DAYS / 100000) * (isClinic ? 0.22 : 0.25);

  let annual = 0;
  if (selected === 'hw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'ho') annual = (potL * 0.82 + refill) * 12;
  if (selected === 'cw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'co') annual = (potL * 0.175 + refill) * 12;

  const getTileBand = (p: number) => p <= 8 ? 1 : p <= 16 ? 2 : 3;
  const band = getTileBand(invPct);

  // Find selected option info
  let selectedSetup: typeof SETUP_GROUPS[number]['options'][number] | null = null;
  const isHospital = selected === 'hw' || selected === 'ho';

  for (const g of SETUP_GROUPS) {
    for (const opt of g.options) {
      if (opt.k === selected) { selectedSetup = opt; break; }
    }
  }

  return (
    <section id="roi-section" className="relative pt-6 pb-8 md:pt-8 md:pb-10 bg-[#fafafa] border-y border-slate-200 overflow-hidden">
      {/* Sophisticated background gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#fafafa] to-[#fafafa] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── HEADER ──────────────────────────────────── */}
        <div className="text-center mb-6">
          <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
            uncover hidden revenue streams and operational savings.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Choose Your Setup
          </h2>
        </div>

        {/* ── SETUP SELECTOR — 4-card grid ─────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-2 max-w-4xl mx-auto">
          {SETUP_GROUPS.flatMap((group) =>
            group.options.map((opt) => {
              const isActive = selected === opt.k;
              const hasSelection = selected !== null;
              const isHospital = group.category === 'Hospital';
              const Icon = opt.icon;

              // Tailwind-safe dynamic classes
              const activeRingClass = isHospital ? 'ring-blue-600' : 'ring-emerald-500';
              const activeBgClass = isHospital ? 'bg-blue-50' : 'bg-emerald-50';
              const activeTextClass = isHospital ? 'text-blue-600' : 'text-emerald-600';
              const activeHighlightClass = isHospital ? 'bg-blue-600' : 'bg-emerald-500';

              return (
                <button
                  key={opt.k}
                  onClick={() => selectPersona(opt.k)}
                  className={`group relative text-left rounded-2xl transition-all duration-300 focus:outline-none flex flex-col z-10
                    ${isActive
                      ? `bg-white ring-2 ${activeRingClass} shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[1.02] border-transparent`
                      : hasSelection
                        ? `bg-slate-50/50 border border-slate-200 opacity-60 hover:opacity-100 hover:bg-white hover:scale-[1.01]`
                        : `bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md hover:scale-[1.01]`
                    }`}
                >
                  {/* Active highlight top bar */}
                  {isActive && (
                    <motion.div layoutId="activeHighlight" className={`absolute top-0 left-4 right-4 h-1 ${activeHighlightClass} rounded-b-md`} />
                  )}

                  <div className="p-3 flex items-center gap-3 relative mt-1">
                    <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive
                          ? `${activeBgClass} ${activeTextClass} shadow-sm ring-1 ring-black/5`
                          : 'bg-slate-100 text-slate-500 group-hover:text-slate-700 group-hover:bg-slate-200/50'
                        }`}>
                        <Icon size={16} strokeWidth={2.5} />
                      </div>

                      <div className="flex-1">
                        <p className={`text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5 ${isActive ? activeTextClass : 'text-slate-400'
                          }`}>
                          {group.category}
                        </p>
                        <h3 className={`text-xs font-bold leading-snug ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                          }`}>
                          {opt.label}
                        </h3>
                      </div>

                      <div className={`transition-all duration-300 ${isActive ? activeTextClass : 'text-slate-300 group-hover:text-slate-400'}`}>
                        {isActive ? (
                          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`${activeBgClass} rounded-full p-0.5`}>
                            <Check size={16} strokeWidth={3.5} />
                          </motion.div>
                        ) : (
                          <div className="bg-slate-100 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        )}
                      </div>
                    </div>

                </button>
              );
            })
          )}
        </div>

        {/* ── BENEFIT PILLS (on selection) ────────────── */}
        <div className="min-h-[32px] mb-2 flex justify-center items-start w-full">
          <AnimatePresence>
            {selectedSetup && (
              <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {selectedSetup.pills.map((pill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-[0_2px_8px_rgb(0,0,0,0.02)] text-slate-700 text-xs font-semibold"
                  >
                    <Check size={14} className="text-emerald-500" strokeWidth={3} />
                    {pill}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── MAIN CONTENT AREA (Calculator or Empty) ── */}
        <div className="relative max-w-4xl mx-auto w-full grid grid-cols-1 grid-rows-1 min-h-[400px] md:min-h-[360px]">
          <AnimatePresence>
            {selected ? (
              <motion.div
                key="calculator"
                id="roi-result-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="col-start-1 row-start-1 w-full bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgb(0,0,0,0.05)] overflow-hidden z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                  {/* LEFT — Inputs */}
                  <div className="p-4 md:p-5 space-y-3 bg-[#fcfcfc]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900">Variables</h3>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100/50 flex items-center gap-1.5 uppercase tracking-widest">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                        </span>
                        Live Math
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <Slider
                        label="Monthly pharmacy revenue"
                        displayValue={hasPharmacy ? formatMoney(effRev) : "₹0 (N/A)"}
                        value={hasPharmacy ? effRev : 0}
                        min={0} max={maxRev} step={0.5}
                        onChange={setRev}
                        disabled={!hasPharmacy}
                      />
                      <Slider
                        label={isClinic ? "Daily consultations" : "Daily patient footfall"}
                        displayValue={String(footfall)}
                        value={footfall}
                        min={isClinic ? 5 : 20} max={isClinic ? 200 : 600} step={5}
                        onChange={setFootfall}
                      />
                      <Slider
                        label="Avg prescription value"
                        displayValue={`₹${aov}`}
                        value={aov} min={150} max={2500} step={50}
                        onChange={setAov}
                      />

                      {/* Inventory Leakage Slider + Toggles */}
                      <div className={`transition-all duration-300 pt-2 ${!hasPharmacy ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                        <Slider
                          label="Inventory Leakage"
                          displayValue={`${hasPharmacy ? invPct : 0}%`}
                          value={hasPharmacy ? invPct : 0}
                          min={0} max={30} step={1}
                          onChange={setInvPct}
                          disabled={!hasPharmacy}
                        />
                        <div className="flex gap-2 mt-2">
                          {([
                            { b: 1, v: 5, l: '5% (Strict)' },
                            { b: 2, v: 12, l: '12% (Avg)' },
                            { b: 3, v: 22, l: '22% (Loose)' },
                          ] as const).map((tile) => {
                            const active = hasPharmacy && invPct === tile.v;
                            return (
                              <button
                                key={tile.b}
                                onClick={() => setInvPct(tile.v)}
                                disabled={!hasPharmacy}
                                className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold border transition-all duration-200 ${active
                                    ? 'bg-slate-800 text-white border-slate-800 shadow-md ring-2 ring-slate-800 ring-offset-1'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50'
                                  }`}
                              >
                                {tile.l}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT — Results */}
                  <div className="p-4 md:p-5 flex flex-col justify-between bg-white relative overflow-hidden">
                    {/* Subtle top-right decorative blur inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="flex items-center gap-2.5 mb-0 px-1">
                        <div className={`p-1.5 rounded-lg ${isHospital ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                          <PieChart size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">Value Breakdown</h3>
                      </div>

                      <div className="space-y-0.5 mb-2 flex-1">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selected}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {selected === 'hw' && (<>
                              <MetricRow label="Prescription leakage" value={formatMoney(leakage)} sub="/ mo" />
                              <MetricRow label="Inventory loss" value={formatMoney(invLoss)} sub="/ mo" />
                              <MetricRow label="Chronic refill gap" value={formatMoney(refill)} sub="/ mo" />
                            </>)}
                            {selected === 'ho' && (<>
                              <MetricRow label="Monthly Rx demand" value={formatMoney(potL)} sub="/ mo" />
                              <MetricRow label="Estimated capture" value={formatMoney(potL * 0.82)} sub="/ mo" />
                              <MetricRow label="Chronic refill gap" value={formatMoney(refill)} sub="/ mo" />
                            </>)}
                            {selected === 'cw' && (<>
                              <MetricRow label="Prescription leakage" value={formatMoney(leakage)} sub="/ mo" />
                              <MetricRow label="Inventory loss" value={formatMoney(invLoss)} sub="/ mo" />
                              <MetricRow label="Chronic refill gap" value={formatMoney(refill)} sub="/ mo" />
                            </>)}
                            {selected === 'co' && (<>
                              <MetricRow label="Monthly Rx demand" value={formatMoney(potL)} sub="/ mo" />
                              <MetricRow label="Commission potential" value={formatMoney(potL * 0.175)} sub="/ mo" />
                              <MetricRow label="Chronic refill gap" value={formatMoney(refill)} sub="/ mo" />
                            </>)}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className={`relative rounded-2xl py-3 px-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden border ${isHospital ? 'bg-blue-50/40 border-blue-100/60' : 'bg-emerald-50/40 border-emerald-100/60'}`}>
                        {/* Premium light gradient background layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isHospital ? 'bg-blue-400' : 'bg-emerald-400'}`}></span>
                              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isHospital ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
                            </span>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">
                              Total Annual Upside
                            </p>
                          </div>
                          <AnimatedNumber
                            value={annual}
                            textClass={isHospital ? 'text-blue-950' : 'text-emerald-950'}
                            subClass={isHospital ? 'text-blue-600/70' : 'text-emerald-600/70'}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-2 relative z-10">
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                      >
                        Request Report
                      </button>
                      {selectedSetup && (
                        <a
                          href={selectedSetup.href}
                          className="flex-1 flex items-center justify-center text-center bg-white text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all py-3 px-4 rounded-xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 focus:ring-2 focus:ring-slate-200 focus:outline-none"
                        >
                          View Setup
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="col-start-1 row-start-1 w-full h-full text-center p-4 rounded-3xl border-2 border-dashed border-slate-200 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center z-0"
              >
                <div className="flex flex-col items-center gap-4 max-w-sm">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="p-4 bg-blue-50/80 border border-blue-100 rounded-2xl text-blue-500 shadow-sm relative"
                  >
                    <ArrowUp size={24} strokeWidth={2.5} />
                    {/* Decorative pings */}
                    <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Awaiting configuration</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Select your facility type from the cards above to instantly generate your custom revenue projection.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

