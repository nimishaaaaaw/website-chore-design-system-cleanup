"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Stethoscope, Check, ArrowUp, Sparkles, Activity, PieChart, TrendingDown, PackageMinus, Repeat, Wallet, ArrowRight } from 'lucide-react';

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
    category: 'Clinic',
    options: [
      {
        k: 'cw' as PersonaKey,
        label: 'Have a Pharmacy',
        pills: ['Network prices', 'Auto OPD sync', 'No stock wastage'],
        icon: Stethoscope,
      },
      {
        k: 'co' as PersonaKey,
        label: 'No Pharmacy',
        pills: ['Earn 10–17% per Rx', 'Zero operations', 'Refill engine'],
        icon: Stethoscope,
      },
    ],
  },
  {
    category: 'Hospital',
    options: [
      {
        k: 'hw' as PersonaKey,
        label: 'Have a Pharmacy',
        pills: ['Stop leakage', 'Automate inventory', 'Recover refills'],
        icon: Building2,
      },
      {
        k: 'ho' as PersonaKey,
        label: 'No Pharmacy Yet',
        pills: ['Zero capex', 'Live in 7 days', 'Revenue share from day 1'],
        icon: Building2,
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

// ─── Premium Slider (value shown on moving thumb pill) ───────────────────────
function SlimSlider({
  label, value, displayValue, min, max, step, onChange, disabled, isHospital,
  limitMarker, limitDisplayValue,
}: {
  label: string; value: number; displayValue: string; min: number; max: number;
  step: number; onChange: (v: number) => void; disabled?: boolean; isHospital: boolean;
  limitMarker?: number; limitDisplayValue?: string;
}) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;
  const THUMB_W = 52;
  const trackWidth = `calc(${pct}% - ${pct} * ${THUMB_W}px / 100)`;
  const thumbLeft  = `calc(${pct}% - ${pct} * ${THUMB_W}px / 100)`;

  const isOverLimit = limitMarker !== undefined && value > limitMarker + 0.01;
  const trackColor  = isHospital ? 'bg-indigo-600' : 'bg-blue-600';
  const thumbText   = isOverLimit ? 'text-amber-600' : (isHospital ? 'text-indigo-600' : 'text-blue-600');
  const thumbBorder = isOverLimit ? 'border-amber-300' : (isHospital ? 'border-indigo-200' : 'border-blue-400');

  return (
    <div className={`flex flex-col gap-1.5 ${disabled ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-700 leading-none">{label}</span>
        {limitMarker !== undefined && (
          <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${
            isOverLimit ? 'text-amber-500' : 'text-slate-400'
          }`}>
            {isOverLimit ? 'Capped at max' : 'Limit'}: {limitDisplayValue}
          </span>
        )}
      </div>
      <div className="relative flex items-center w-full h-6">
        <div className="absolute w-full h-1.5 bg-slate-200 rounded-full shadow-inner pointer-events-none" />
        <div
          className={`absolute h-1.5 ${trackColor} rounded-full pointer-events-none transition-[width] duration-75 ease-out`}
          style={{ width: trackWidth }}
        />
        {/* Limit tick mark */}
        {limitMarker !== undefined && max > min && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 w-0.5 h-3 rounded-full z-10 pointer-events-none ${
              isOverLimit ? 'bg-amber-400' : 'bg-slate-300'
            }`}
            style={{
              left: `calc(${((limitMarker - min) / (max - min)) * 100}% - ${
                ((limitMarker - min) / (max - min)) * 100
              } * ${THUMB_W}px / 100 + ${THUMB_W / 2}px - 1px)`
            }}
          />
        )}
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[52px] h-[22px] bg-white rounded-full border ${thumbBorder} shadow-[0_2px_6px_rgba(0,0,0,0.14)] pointer-events-none z-10 flex items-center justify-center`}
          style={{ left: thumbLeft }}
        >
          <span className={`text-xs font-bold tabular-nums whitespace-nowrap ${thumbText}`}>
            {displayValue}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Breakdown Row ────────────────────────────────────────────────────────────
function BreakdownRow({ icon: Icon, colorClass, label, value }: { icon: any; colorClass: string; label: string; value: string }) {
  const map: Record<string, string> = {
    rose: 'bg-rose-50 text-rose-600',
    amber: 'bg-amber-50 text-amber-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    blue: 'bg-blue-50 text-blue-600',
  };
  return (
    <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
      <div className="flex items-center gap-2.5">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${map[colorClass] || map.indigo}`}>
          <Icon size={13} strokeWidth={2.5} />
        </div>
        <span className="text-xs font-semibold text-slate-700">{label}</span>
      </div>
      <span className="text-xs font-bold text-slate-900 tabular-nums">{value}<span className="text-u-xs text-slate-400 font-semibold ml-1">/mo</span></span>
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
    if (selected === k) return;
    setSelected(k);
    const d = DEFAULTS[k];
    setFootfall(d.footfall); setAov(d.aov); setRev(d.rev); setInvPct(d.invPct);
  };

  const hasPharmacy = selected === 'hw' || selected === 'cw';
  const isClinic = selected === 'cw' || selected === 'co';
  const isHospital = selected === 'hw' || selected === 'ho';

  const potL = (footfall * aov * WORKING_DAYS) / 100000;
  const maxRev = Math.max(0.5, Math.floor(potL * 2) / 2);
  const effRev = Math.min(rev, maxRev);
  const leakage = potL - effRev;
  const invLoss = effRev * (invPct / 100);
  const refill = (footfall * (isClinic ? 0.28 : 0.30) * aov * (selected === 'co' ? 0.175 : 0.85) * WORKING_DAYS / 100000) * (isClinic ? 0.22 : 0.25);
  const captureRatePct = potL > 0 ? Math.round(Math.min(effRev / potL, 1) * 100) : 0;

  let annual = 0;
  if (selected === 'hw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'ho') annual = (potL * 0.82 + refill) * 12;
  if (selected === 'cw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'co') annual = (potL * 0.175 + refill) * 12;

  const annualFmt = formatMoneyUnit(annual);
  const revSliderMax = Math.max(isHospital ? 150 : 50, Math.ceil(maxRev / 10) * 10);

  const getTileBand = (p: number) => p <= 8 ? 1 : p <= 16 ? 2 : 3;
  const currentBand = getTileBand(invPct);

  // Find selected setup for pills
  let selectedSetup: typeof SETUP_GROUPS[number]['options'][number] | null = null;
  for (const g of SETUP_GROUPS) {
    for (const opt of g.options) {
      if (opt.k === selected) { selectedSetup = opt; break; }
    }
  }

  return (
    <section id="roi-section" className="bg-section-alt py-12 md:py-16 relative overflow-hidden">
      {/* Blobs */}
      <div className="blob-layer">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0 opacity-30" />
        <div className="blob-indigo w-[400px] h-[400px] bottom-0 -left-20 opacity-20" />
      </div>

      <div className="container-page relative z-10">

        {/* ── HEADER ── — shrunken margins */}
        <div className="text-center mb-2">
          <div className="eyebrow-wrap">
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-600" />
              Discover Hidden Revenue
            </span>
            <div className="eyebrow-line-l" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter pb-1 leading-[1.1]">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm">
              Setup
            </span>
          </h2>
        </div>

        {/* ── CAPSULE SELECTOR ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-3 max-w-4xl mx-auto">
          {SETUP_GROUPS.flatMap((group) =>
            group.options.map((opt) => {
              const isActive = selected === opt.k;
              const hasSelection = selected !== null;
              const isHosp = group.category === 'Hospital';
              const Icon = opt.icon;

              const activeCls = isHosp
                ? 'border-indigo-600 bg-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.3)] ring-1 ring-inset ring-indigo-500'
                : 'border-blue-600 bg-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.3)] ring-1 ring-inset ring-blue-400';
              const inactiveCls = isHosp
                ? 'border-indigo-100 bg-indigo-50/60 hover:border-indigo-300 hover:bg-indigo-50'
                : 'border-blue-100 bg-blue-50/60 hover:border-blue-400 hover:bg-blue-50';
              const iconActiveCls = isHosp ? 'bg-indigo-600 text-white' : 'bg-blue-600 text-white'; // indigo-600 = #4F46E5, matches --indigo-600 token
              const iconInactiveCls = isHosp ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600';
              const catCls = isActive
                ? (isHosp ? 'text-indigo-600' : 'text-blue-600')
                : 'text-slate-400';

              return (
                <button
                  key={opt.k}
                  onClick={() => selectPersona(opt.k)}
                  className={`group relative text-left rounded-full border-2 transition-all duration-200 focus:outline-none flex items-center px-3 py-2 gap-2.5 cursor-pointer
                    ${isActive ? activeCls : inactiveCls}
                    ${hasSelection && !isActive ? 'opacity-75 hover:opacity-100' : ''}
                    ${!isActive ? 'hover:-translate-y-0.5' : 'scale-[1.01]'}`}
                >
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? iconActiveCls : iconInactiveCls}`}>
                    <Icon size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${catCls}`}>{group.category}</p>
                    <h3 className={`text-sm font-bold leading-tight tracking-tight whitespace-nowrap ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{opt.label}</h3>
                  </div>
                  <div className="shrink-0">
                    {isActive ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${isHosp ? 'bg-indigo-600' : 'bg-blue-600'}`}>
                        <Check size={11} strokeWidth={3.5} className="text-white" />
                      </motion.div>
                    ) : (
                      <div className="relative w-5 h-5">
                        {!hasSelection && <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${isHosp ? 'bg-indigo-400' : 'bg-blue-400'}`} />}
                        <div className={`w-5 h-5 rounded-full border-2 ${isHosp ? 'border-indigo-300' : 'border-blue-400'}`} />
                      </div>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* ── BENEFIT PILLS ── — super compact mb */}
        <div className="min-h-[36px] mb-1 flex justify-center items-start overflow-hidden text-center">
          <AnimatePresence mode="wait">
            {selectedSetup && (
              <motion.div
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {selectedSetup.pills.map((pill, i) => (
                  <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-card text-slate-600 text-xs font-semibold"
                  >
                    <Check size={12} className={isHospital ? "text-indigo-600" : "text-blue-600"} strokeWidth={3} />
                    {pill}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CALCULATOR / EMPTY STATE ── */}
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 grid-rows-1">
          <AnimatePresence>
            {selected ? (
              <motion.div
                key="calc"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.35, type: 'spring', bounce: 0.1 }}
                className="col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-slate-200 shadow-[var(--shadow-card-lg)] overflow-hidden bg-white z-10"
              >
                {/* LEFT — Inputs */}
                <div className="bg-slate-50 p-4 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
                      <Activity size={13} className="text-slate-400" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Your {isClinic ? 'clinic' : 'hospital'} today
                    </p>
                  </div>

                  <SlimSlider
                    label={isClinic ? 'Daily Consultations' : 'Daily Footfall'}
                    value={footfall} displayValue={String(footfall)}
                    min={isClinic ? 5 : 20} max={isClinic ? 200 : 600} step={isClinic ? 5 : 10}
                    onChange={setFootfall} isHospital={isHospital}
                  />
                  <SlimSlider
                    label="Avg Prescription Value (AOV)"
                    value={aov} displayValue={`₹${aov}`}
                    min={150} max={2000} step={50}
                    onChange={setAov} isHospital={isHospital}
                  />
                  <SlimSlider
                    label="Monthly Pharmacy Revenue"
                    value={hasPharmacy ? rev : 0} displayValue={hasPharmacy ? formatMoney(rev) : '₹0'}
                    min={0} max={revSliderMax} step={0.5}
                    onChange={setRev} disabled={!hasPharmacy} isHospital={isHospital}
                    limitMarker={maxRev} limitDisplayValue={formatMoney(maxRev)}
                  />

                  {/* Inventory block — super compact */}
                  <div className={`bg-white rounded-xl border border-slate-200 p-2.5 relative transition-all duration-200 ${!hasPharmacy ? 'opacity-40 grayscale' : ''}`}>
                    {!hasPharmacy && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-[1px]">
                        <span className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400 bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-sm">
                          Requires Pharmacy
                        </span>
                      </div>
                    )}
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mb-2">How often do you track inventory?</p>
                    <div className="flex bg-slate-100 p-0.5 rounded-lg mb-3 shadow-inner">
                      {([{ b: 1, v: 5, l: 'Daily' }, { b: 2, v: 12, l: 'Often' }, { b: 3, v: 20, l: 'Rarely' }] as const).map((tile) => {
                        const tileActive = currentBand === tile.b && hasPharmacy;
                        return (
                          <button key={tile.b} onClick={() => setInvPct(tile.v)} disabled={!hasPharmacy}
                            className={`flex-1 py-1 text-xs font-bold rounded-md transition-all duration-150 ${tileActive ? 'bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}>
                            {tile.l}
                          </button>
                        );
                      })}
                    </div>
                    <SlimSlider
                      label="Est. inventory loss" value={hasPharmacy ? invPct : 0}
                      displayValue={`${hasPharmacy ? invPct : 0}%`}
                      min={0} max={40} step={1} onChange={setInvPct} disabled={!hasPharmacy} isHospital={isHospital}
                    />
                  </div>
                </div>

                {/* RIGHT — Results */}
                <div className="bg-white p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                      <PieChart size={15} className={isHospital ? 'text-indigo-600' : 'text-blue-600'} />
                      Revenue Analysis
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-u-xs font-bold uppercase tracking-u-widest">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                      </span>
                      Live ROI
                    </div>
                  </div>

                  {/* Capture rate strip — compacted padding */}
                  <div className="flex items-center justify-between bg-slate-50 rounded-xl border border-slate-100 px-4 py-2">
                    <div>
                      <p className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400 mb-0.5">
                        {hasPharmacy ? 'Pharmacy Capture' : 'Fill Rate'}
                      </p>
                      <div className="min-h-[32px]">
                        <p className="text-u-xs text-slate-500 font-medium mt-0.5 max-w-[160px] leading-snug">
                          {hasPharmacy ? 'Rest lost to retail chains.' : '100% lost to external pharmacies.'}
                        </p>
                      </div>
                    </div>
                    {/* Tiny donut */}
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <path className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <motion.path
                          className={isHospital ? 'text-indigo-600' : 'text-blue-600'}
                          strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${hasPharmacy ? captureRatePct : 0}, 100` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-800 tabular-nums">{hasPharmacy ? captureRatePct : 0}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Value breakdown — shrunken container */}
                  <div className="flex flex-col gap-1.5">
                    <p className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400">Value Unlocked by MediKloud</p>
                    <div className="h-[134px] flex flex-col gap-1 overflow-hidden">
                      {selected === 'hw' && (
                        <motion.div key="hw" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5">
                          <BreakdownRow icon={TrendingDown} colorClass="rose" label="Prescription Leakage" value={formatMoney(leakage)} />
                          <BreakdownRow icon={PackageMinus} colorClass="amber" label="Inventory Loss" value={formatMoney(invLoss)} />
                          <BreakdownRow icon={Repeat} colorClass="indigo" label="Chronic Refills Gap" value={formatMoney(refill)} />
                        </motion.div>
                      )}
                      {selected === 'ho' && (
                        <motion.div key="ho" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5">
                          <BreakdownRow icon={Wallet} colorClass="blue" label="Prescription Capture" value={formatMoney(potL * 0.82)} />
                          <BreakdownRow icon={Repeat} colorClass="indigo" label="Chronic Refills Gap" value={formatMoney(refill)} />
                        </motion.div>
                      )}
                      {selected === 'cw' && (
                        <motion.div key="cw" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5">
                          <BreakdownRow icon={TrendingDown} colorClass="rose" label="Prescription Leakage" value={formatMoney(leakage)} />
                          <BreakdownRow icon={PackageMinus} colorClass="amber" label="Inventory Loss" value={formatMoney(invLoss)} />
                          <BreakdownRow icon={Repeat} colorClass="blue" label="Chronic Refills Gap" value={formatMoney(refill)} />
                        </motion.div>
                      )}
                      {selected === 'co' && (
                        <motion.div key="co" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5">
                          <BreakdownRow icon={PieChart} colorClass="blue" label="Commission (~17.5%)" value={formatMoney(potL * 0.175)} />
                          <BreakdownRow icon={Repeat} colorClass="blue" label="Chronic Refills Gap" value={formatMoney(refill)} />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Annual hero box — compacted padding */}
                  <div className="rounded-2xl bg-gradient-dark p-3 px-4 relative overflow-hidden shadow-[var(--shadow-float)]">
                    <div className={`absolute -right-12 -top-12 w-48 h-48 opacity-40 blur-[50px] rounded-full pointer-events-none ${isHospital ? 'bg-indigo-600' : 'bg-blue-600'}`} />
                    <div className="relative z-10 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400 mb-1.5 flex items-center gap-1">
                          <Sparkles size={10} className={isHospital ? 'text-indigo-600' : 'text-blue-600'} />
                          Total Annual Upside
                        </p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white tracking-tighter tabular-nums">{annualFmt.value}</span>
                          <span className="text-xs font-semibold text-slate-400">{annualFmt.unit}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className={`h-9 px-4 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 whitespace-nowrap ${
                          isHospital ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        Get ROI Audit
                        <ArrowRight size={13} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="col-start-1 row-start-1 w-full h-auto md:h-[420px] min-h-[380px] rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-slate-50 relative overflow-hidden flex items-center justify-center z-0"
              >
                {/* 1. Ghost / Skeleton UI Background to build anticipation */}
                <div className="absolute inset-0 p-6 flex flex-col md:flex-row gap-8 opacity-[0.16] pointer-events-none blur-[4px] select-none">
                  {/* Left Ghost Sliders */}
                  <div className="w-full md:w-[45%] flex flex-col gap-6">
                    <div className="h-4 w-1/3 bg-slate-300 rounded-full mb-2 animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-2.5 w-1/2 bg-slate-300 rounded-full"/>
                      <div className="h-6 w-full bg-slate-300 rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%] animate-shimmer"/>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2.5 w-2/3 bg-slate-300 rounded-full"/>
                      <div className="h-6 w-full bg-slate-300 rounded-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%] animate-shimmer"/>
                    </div>
                    <div className="h-28 w-full bg-slate-200 rounded-2xl mt-2"/>
                  </div>
                  {/* Right Ghost Dashboard */}
                  <div className="w-full md:w-[55%] flex flex-col gap-5">
                    <div className="h-6 w-1/4 bg-slate-300 rounded-full mb-1"></div>
                    <div className="h-24 w-full bg-slate-200 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200"/>
                    <div className="space-y-3 mt-1">
                      <div className="h-12 w-full bg-slate-200 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%] animate-shimmer"/>
                      <div className="h-12 w-full bg-slate-200 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%] animate-shimmer"/>
                    </div>
                  </div>
                </div>

                {/* 2. Central Hook / CTA Card */}
                <div className="relative z-10 flex flex-col items-center max-w-[340px] text-center p-8 bg-white/70 backdrop-blur-xl border border-indigo-100 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(79,70,229,0.12)] m-4">
                  {/* Icon Graphic */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-40 scale-[1.3]" />
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [2, -2, 2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20 relative z-10"
                    >
                      <Wallet size={28} className="text-white" strokeWidth={2} />
                    </motion.div>
                  </div>
                  
                  {/* Copy */}
                  <div className="flex flex-col items-center gap-1.5 mb-6">
                    <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                      To check
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight max-w-[260px]">
                      How much revenue is walking out your doors?
                    </h3>
                  </div>

                  {/* Directional Action */}
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-semibold text-xs shadow-sm">
                    <ArrowUp size={14} className="text-indigo-600 animate-bounce" strokeWidth={3} />
                    Select your facility type above
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
