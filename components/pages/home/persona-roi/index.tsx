"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUp, Sparkles, Activity, PieChart, TrendingDown, PackageMinus, Repeat, Wallet, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

import { 
  PersonaKey, 
  WORKING_DAYS, 
  formatMoneyUnit, 
  formatMoney, 
  SETUP_GROUPS, 
  DEFAULTS 
} from './ROIData';

import { SlimSlider, BreakdownRow } from './ROIComponents';

export function PersonaROISection() {
  const [selected, setSelected] = useState<PersonaKey | null>(null);
  const [footfall, setFootfall] = useState(100);
  const [aov, setAov] = useState(900);
  const [rev, setRev] = useState(12);
  const [invPct, setInvPct] = useState(12);
  const { openModal } = useContactModal();

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
        <div className="text-center mb-2">
          <div className="eyebrow-wrap">
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-600" />
              Discover Hidden Revenue
            </span>
            <div className="eyebrow-line-l" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 pb-1 leading-[1.1]">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent drop-shadow-sm pr-2">
              Setup
            </span>
          </h2>
        </div>

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
              const iconActiveCls = isHosp ? 'bg-indigo-600 text-white' : 'bg-blue-600 text-white';
              const iconInactiveCls = isHosp ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600';
              const catCls = isHosp ? 'text-indigo-600' : 'text-blue-600';

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
                    <h3 className={`text-sm font-semibold leading-tight tracking-tight whitespace-nowrap ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>{opt.label}</h3>
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

        <div className="relative max-w-4xl mx-auto grid grid-cols-1 grid-rows-1">
          <AnimatePresence>
            {selected ? (
              <motion.div
                key="calc"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.35, type: 'spring', bounce: 0.1 }}
                className="col-start-1 row-start-1 grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-slate-200 shadow-[var(--shadow-card-lg)] overflow-hidden bg-white z-10"
              >
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

                  <div className={`bg-white rounded-xl border border-slate-200 p-2.5 relative transition-all duration-200 ${!hasPharmacy ? 'opacity-40 grayscale' : ''}`}>
                    {!hasPharmacy && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/70">
                        <span className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400 bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-sm">
                          Requires Pharmacy
                        </span>
                      </div>
                    )}
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2">How often do you track inventory?</p>
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
                          <BreakdownRow icon={PieChart} colorClass="blue" label="Operational Fee (~17.5%)" value={formatMoney(potL * 0.175)} />
                          <BreakdownRow icon={Repeat} colorClass="blue" label="Chronic Refills Gap" value={formatMoney(refill)} />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-dark p-3 px-4 relative overflow-hidden shadow-[var(--shadow-float)]">
                    <div className={`absolute -right-12 -top-12 w-48 h-48 opacity-40 blur-[50px] rounded-full pointer-events-none ${isHospital ? 'bg-indigo-600' : 'bg-blue-600'}`} />
                    <div className="relative z-10 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-u-xs font-bold uppercase tracking-u-widest text-slate-400 mb-1.5 flex items-center gap-1">
                          <Sparkles size={10} className={isHospital ? 'text-indigo-600' : 'text-blue-600'} />
                          Total Annual Upside
                        </p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white tracking-tight tabular-nums">{annualFmt.value}</span>
                          <span className="text-xs font-semibold text-slate-400">{annualFmt.unit}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => openModal({
                    badge: "Partnership",
                    title: "Stop your pharmacy leakage.",
                    description: "Book a free audit to see exactly how much revenue your hospital is losing to external chain pharmacies.",
                    btnText: "Book My Free Audit"
                  })}
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
                <div className="absolute inset-0 p-6 flex flex-col md:flex-row gap-8 opacity-[0.16] pointer-events-none blur-[4px] select-none">
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
                  <div className="w-full md:w-[55%] flex flex-col gap-5">
                    <div className="h-6 w-1/4 bg-slate-300 rounded-full mb-1"></div>
                    <div className="h-24 w-full bg-slate-200 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200"/>
                    <div className="space-y-3 mt-1">
                      <div className="h-12 w-full bg-slate-200 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%] animate-shimmer"/>
                      <div className="h-12 w-full bg-slate-200 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%] animate-shimmer"/>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center max-w-[340px] text-center p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(79,70,229,0.12)] m-4">
                  <div className="absolute top-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-20 flex items-center gap-2 px-4 py-2 bg-slate-50/80 backdrop-blur-sm border border-slate-200/60 rounded-xl text-slate-500 font-medium text-xs shadow-sm w-full justify-center mb-6">
                    <ArrowUp size={14} className="text-indigo-600 animate-bounce" strokeWidth={2.5} />
                    Select your facility type above
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-50 scale-[1.2]" />
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20 relative z-10 border border-white/20"
                    >
                      <Wallet size={26} className="text-white" strokeWidth={2} />
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1.5 relative z-20">
                    <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest bg-indigo-50/80 px-3 py-1 rounded-full border border-indigo-100 backdrop-blur-sm">
                      To check
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 leading-tight max-w-[260px]">
                      How much revenue is walking out your doors?
                    </h3>
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
