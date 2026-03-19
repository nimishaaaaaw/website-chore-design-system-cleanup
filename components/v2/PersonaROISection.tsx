"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Stethoscope, Check, ArrowRight, ChevronRight } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type PersonaKey = 'hw' | 'ho' | 'cw' | 'co';

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
  return { value: `₹${Math.round(val * 100000).toLocaleString('en-IN')}`, unit: '/ yr' };
}

function formatMoney(v: number): string {
  if (v === 0) return '₹0';
  const cr = v / 100;
  if (cr >= 1) return cr >= 10 ? `₹${Math.round(cr)} Cr` : `₹${cr.toFixed(1)} Cr`;
  if (v >= 100) return `₹${Math.round(v)}L`;
  if (v >= 10) return `₹${v.toFixed(1)}L`;
  if (v >= 1) return `₹${v.toFixed(2)}L`;
  return `₹${Math.round(v * 100000).toLocaleString('en-IN')}`;
}

// ─── Persona Config ──────────────────────────────────────────────────────────
const SETUP_GROUPS = [
  {
    category: 'Hospital',
    emoji: '🏥',
    color: 'blue',
    options: [
      {
        k: 'hw' as PersonaKey,
        label: 'Have a Pharmacy',
        description: 'Running but leaking revenue',
        pills: ['Stop prescription leakage', 'Automate inventory', 'Recover chronic refills'],
        cta: 'See full solution',
        href: '/solutions/hospital-with-pharmacy',
        icon: Building2,
      },
      {
        k: 'ho' as PersonaKey,
        label: 'No Pharmacy Yet',
        description: 'Zero capex, live in 7 days',
        pills: ['Zero capex setup', 'Live in 7 days', 'Revenue share from day 1'],
        cta: 'See setup process',
        href: '/solutions/hospital-without-pharmacy',
        icon: Building2,
      },
    ],
  },
  {
    category: 'Clinic',
    emoji: '🩺',
    color: 'teal',
    options: [
      {
        k: 'cw' as PersonaKey,
        label: 'Have a Dispensary',
        description: 'Procure cheaper, bill smarter',
        pills: ['Buy at network prices', 'Auto OPD sync', 'No stock wastage'],
        cta: 'See full solution',
        href: '/solutions/clinic-with-dispensary',
        icon: Stethoscope,
      },
      {
        k: 'co' as PersonaKey,
        label: 'No Dispensary',
        description: 'Commission per prescription',
        pills: ['Earn 10–17% per Rx', 'Zero operations', 'Automated refill engine'],
        cta: 'See virtual pharmacy',
        href: '/solutions/clinic-without-pharmacy',
        icon: Stethoscope,
      },
    ],
  },
] as const;

const DEFAULTS: Record<PersonaKey, { footfall: number; aov: number; rev: number; invPct: number }> = {
  hw: { footfall: 100, aov: 900, rev: 12, invPct: 12 },
  ho: { footfall: 120, aov: 900, rev: 12, invPct: 12 },
  cw: { footfall: 35,  aov: 450, rev: 2,  invPct: 12 },
  co: { footfall: 30,  aov: 400, rev: 12, invPct: 12 },
};

// ─── Animated Count-Up ────────────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: number }) {
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
    <div className="text-center">
      <div className="text-5xl font-black text-blue-600 tabular-nums tracking-tighter leading-none">{fmt.value}</div>
      <div className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mt-2">{fmt.unit}</div>
    </div>
  );
}

// ─── Slider ───────────────────────────────────────────────────────────────────
function Slider({ label, value, displayValue, min, max, step, onChange, disabled }: {
  label: string; value: number; displayValue: string; min: number; max: number; step: number;
  onChange: (v: number) => void; disabled?: boolean;
}) {
  return (
    <div className={disabled ? 'opacity-30 pointer-events-none' : ''}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium text-slate-600 leading-none">{label}</span>
        <span className="text-xs font-bold text-blue-700 tabular-nums">{displayValue}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        disabled={disabled}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-600 bg-slate-200"
      />
    </div>
  );
}

// ─── Metric Row ───────────────────────────────────────────────────────────────
function MetricRow({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span className="text-sm font-bold text-slate-900 tabular-nums">
        {value}{sub && <span className="text-[10px] text-slate-400 ml-1 font-normal">{sub}</span>}
      </span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export function PersonaROISection() {
  const [selected, setSelected] = useState<PersonaKey | null>(null);
  const [footfall, setFootfall] = useState(100);
  const [aov, setAov]           = useState(900);
  const [rev, setRev]           = useState(12);
  const [invPct, setInvPct]     = useState(12);

  const selectPersona = (k: PersonaKey) => {
    if (selected === k) { setSelected(null); return; }
    setSelected(k);
    const d = DEFAULTS[k];
    setFootfall(d.footfall); setAov(d.aov); setRev(d.rev); setInvPct(d.invPct);
  };

  const hasPharmacy = selected === 'hw' || selected === 'cw';
  const isClinic    = selected === 'cw' || selected === 'co';

  const potL    = (footfall * aov * WORKING_DAYS) / 100000;
  const maxRev  = Math.max(0.5, Math.floor(potL * 2) / 2);
  const effRev  = Math.min(rev, maxRev);
  const capPct  = Math.min(Math.round((effRev / potL) * 100), 100);
  const leakage = potL - effRev;
  const invLoss = effRev * (invPct / 100);
  const refill  = (footfall * (isClinic ? 0.28 : 0.30) * aov * (selected === 'co' ? 0.175 : 0.85) * WORKING_DAYS / 100000) * (isClinic ? 0.22 : 0.25);

  let annual = 0;
  if (selected === 'hw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'ho') annual = (potL * 0.82 + refill) * 12;
  if (selected === 'cw') annual = (leakage + invLoss + refill) * 12;
  if (selected === 'co') annual = (potL * 0.175 + refill) * 12;

  const getTileBand = (p: number) => p <= 8 ? 1 : p <= 16 ? 2 : 3;
  const band = getTileBand(invPct);

  // Find selected option info
  let selectedSetup: typeof SETUP_GROUPS[number]['options'][number] | null = null;
  for (const g of SETUP_GROUPS) {
    for (const opt of g.options) {
      if (opt.k === selected) { selectedSetup = opt; break; }
    }
  }

  return (
    <section id="roi-section" className="relative py-12 md:py-16 bg-slate-50/30 border-y border-slate-100/60 overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADER ──────────────────────────────────── */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-3">
            Choose your Setup
          </h2>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100/50">
            <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.25em]">
              Find your revenue potential
            </p>
          </div>
        </div>

        {/* ── SETUP SELECTOR — 4-card grid ─────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          {SETUP_GROUPS.flatMap((group) =>
            group.options.map((opt) => {
              const isActive = selected === opt.k;
              const isHospital = group.category === 'Hospital';
              const Icon = opt.icon;
              
              const activeGradient = isHospital 
                ? 'from-blue-600 via-blue-700 to-indigo-800' 
                : 'from-emerald-600 via-teal-700 to-teal-800';
              
              const inactiveBg = isHospital ? 'bg-blue-50/40' : 'bg-teal-50/40';
              const inactiveBorder = isHospital ? 'border-blue-100' : 'border-teal-100';
              const shadowColor = isHospital ? 'shadow-blue-500/20' : 'shadow-emerald-500/20';

              return (
                <motion.button
                  key={opt.k}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => selectPersona(opt.k)}
                  className={`relative group text-left rounded-2xl transition-all duration-300 focus:outline-none overflow-hidden h-full flex flex-col border-2
                    ${isActive
                      ? `bg-gradient-to-br ${activeGradient} border-transparent shadow-xl ${shadowColor}`
                      : `${inactiveBg} ${inactiveBorder} hover:bg-white hover:border-blue-200 hover:shadow-lg`
                    }`}
                >
                  <div className="p-5 flex flex-col flex-1 relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <motion.div 
                        initial={false}
                        animate={{ scale: isActive ? 1.15 : 1, rotate: isActive ? [0, -10, 10, 0] : 0 }}
                        className={`p-2 rounded-xl transition-all duration-300 ${
                          isActive ? 'bg-white/20 text-white shadow-inner' : isHospital ? 'bg-blue-600 text-white shadow-md' : 'bg-teal-600 text-white shadow-md'
                        }`}
                      >
                        <Icon size={18} strokeWidth={2.5} />
                      </motion.div>
                      
                      <div className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}`}>
                        {isActive ? (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white/30 p-1 rounded-full">
                            <Check size={12} strokeWidth={4} />
                          </motion.div>
                        ) : (
                          <ChevronRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>

                    <div className="mt-1">
                       <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1 leading-none ${
                        isActive ? 'text-blue-100' : isHospital ? 'text-blue-600' : 'text-teal-600'
                      }`}>
                        {group.category}
                      </p>
                      <h3 className={`text-[14px] font-black leading-tight ${
                        isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-900'
                      }`}>
                        {opt.label}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>


        {/* ── BENEFIT PILLS (on selection) ────────────── */}
        <AnimatePresence>
          {selectedSetup && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {selectedSetup.pills.map((pill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-slate-900/10"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MAIN CONTENT AREA (Calculator or Empty) ── */}
        <div className="relative min-h-[100px]">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div 
                key="calculator"
                id="roi-result-card"
                initial={{ opacity: 0, y: 20, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.99 }}
                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                className="bg-white rounded-[2rem] border border-slate-200/60 shadow-2xl shadow-slate-900/5 overflow-hidden"
              >
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-teal-400 origin-left" 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {/* LEFT — Inputs */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="p-6 md:p-8 space-y-5 bg-slate-50/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Settings</h3>
                      <motion.span 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded"
                      >
                        Live Math
                      </motion.span>
                    </div>

                    <div className="space-y-4">
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
                      <div className={`transition-all duration-300 pt-2 ${!hasPharmacy ? 'opacity-20 grayscale pointer-events-none' : ''}`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Inventory Leakage</span>
                          <span className="text-[10px] font-black text-blue-600">{hasPharmacy ? invPct : 0}%</span>
                        </div>
                        <div className="flex gap-1.5 mb-3">
                          {([
                            { b: 1, v: 5,  l: 'Daily' },
                            { b: 2, v: 12, l: 'Often' },
                            { b: 3, v: 22, l: 'Rare' },
                          ] as const).map((tile) => {
                            const active = hasPharmacy && band === tile.b;
                            return (
                              <button
                                key={tile.b}
                                onClick={() => setInvPct(tile.v)}
                                disabled={!hasPharmacy}
                                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all duration-300 ${
                                  active 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
                                    : 'bg-white text-slate-400 border-slate-100 hover:border-blue-200'
                                }`}
                              >
                                {tile.l}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* RIGHT — Results */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="p-6 md:p-8 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Recoverable Revenue</h3>
                      <div className="space-y-0.5 mb-6">
                        <AnimatePresence mode="wait">
                          <motion.div 
                            key={selected}
                            initial={{ opacity: 0, y: 5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -5 }}
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

                      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-center shadow-lg relative overflow-hidden">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400/80 mb-3 relative z-10">
                          Annual Upside
                        </p>
                        <div className="relative z-10">
                          <AnimatedNumber value={annual} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20"
                      >
                        Audit Report →
                      </motion.button>
                      {selectedSetup && (
                        <Link
                          href={selectedSetup.href}
                          className="flex-1 text-center bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors py-3.5 rounded-xl border border-slate-100"
                        >
                          Solution DETAILS
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 px-6 rounded-3xl border-2 border-dashed border-blue-200/60 bg-white/40"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <ArrowRight className="text-blue-400 animate-bounce-x" size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] text-blue-600 font-black uppercase tracking-[0.3em] mb-1">Start Analysis</p>
                    <p className="text-[10px] text-slate-500 font-bold max-w-[200px] mx-auto leading-relaxed uppercase tracking-wider">
                      Select your setup above to unlock real-time revenue potential
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
