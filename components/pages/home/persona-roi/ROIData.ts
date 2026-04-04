import { Building2, Stethoscope } from 'lucide-react';

export type PersonaKey = 'hw' | 'ho' | 'cw' | 'co';

export const WORKING_DAYS = 26;

export function formatMoneyUnit(val: number): { value: string; unit: string } {
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

export function formatMoney(v: number): string {
  if (v === 0) return '₹0';
  const cr = v / 100;
  if (cr >= 1) return cr >= 10 ? `₹${Math.round(cr)} Cr` : `₹${cr.toFixed(2)} Cr`;
  if (v >= 100) return `₹${Math.round(v)}L`;
  if (v >= 10) return `₹${v.toFixed(1)}L`;
  if (v >= 1) return `₹${v.toFixed(2)}L`;
  return `₹${Math.round(v * 100000).toLocaleString('en-IN')}`;
}

export const SETUP_GROUPS = [
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

export const DEFAULTS: Record<PersonaKey, { footfall: number; aov: number; rev: number; invPct: number }> = {
  hw: { footfall: 100, aov: 900, rev: 12, invPct: 12 },
  ho: { footfall: 120, aov: 900, rev: 12, invPct: 12 },
  cw: { footfall: 35, aov: 450, rev: 2, invPct: 12 },
  co: { footfall: 30, aov: 400, rev: 12, invPct: 12 },
};
