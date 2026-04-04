import React from 'react';
import { motion } from 'framer-motion';

// ─── SlimSlider ──────────────────────────────────────────────────────────────
export function SlimSlider({
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
        <span className="text-xs font-semibold text-slate-700">{label}</span>
        {limitMarker !== undefined && (
          <span className={`text-[10px] font-bold uppercase tracking-widest ${
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
          <span className={`text-[11px] font-medium tabular-nums whitespace-nowrap ${thumbText}`}>
            {displayValue}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Breakdown Row ────────────────────────────────────────────────────────────
export function BreakdownRow({ icon: Icon, colorClass, label, value }: { icon: any; colorClass: string; label: string; value: string }) {
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
