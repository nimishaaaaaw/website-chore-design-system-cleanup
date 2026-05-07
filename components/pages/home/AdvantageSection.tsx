"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Zap, ShieldCheck, Network, Repeat,
  ArrowUpRight, ArrowDownRight, CheckCircle2, AlertCircle, Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TagItem {
  label: string;
  dir: 'up' | 'down';
  color: string;
}

interface AdvantageItem {
  id: number;
  icon: React.ReactNode;
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  tags: TagItem[];
  metric: string;
  traditional: string;
  medikloud: string;
  themeColor: 'blue' | 'emerald' | 'indigo' | 'purple';
}

const ADVANTAGES: AdvantageItem[] = [
  {
    id: 0,
    icon: <Zap className="w-6 h-6" />,
    tagline: "Operational Excellence",
    title: "End-to-End",
    subtitle: "Operations infrastructure",
    description: "Staff deployed, tech integrated, and inventory live — before you spend a rupee.",
    tags: [
      { label: "Capex risk", dir: "down", color: "text-brand-600 bg-brand-50 ring-1 ring-brand-500/10" },
      { label: "Efficiency", dir: "up", color: "text-brand-600 bg-brand-50 ring-1 ring-brand-500/10" }
    ],
    metric: "100% Fully Managed",
    traditional: "Setting up a compliant pharmacy requires massive capital investment and full management attention.",
    medikloud: "We've already built the playbook. We deploy it into your hospital — you approve, we execute.",
    themeColor: "blue"
  },
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6" />,
    tagline: "Revenue Protection",
    title: "Zero",
    subtitle: "Leakage tolerance",
    description: "Every billing event, dispense, and movement is reconciled daily to stop leakage.",
    tags: [
      { label: "Pilferage", dir: "down", color: "text-success bg-success-light ring-1 ring-success/10" },
      { label: "Billing gaps", dir: "down", color: "text-success bg-success-light ring-1 ring-success/10" }
    ],
    metric: "15-20% avg. revenue recovered",
    traditional: "Losses surface at the month-end review. By the time you see the gap, the money is already gone.",
    medikloud: "Billing, inventory, and dispense are cross-checked automatically. Discrepancies get caught the same day.",
    themeColor: "emerald"
  },
  {
    id: 2,
    icon: <Network className="w-6 h-6" />,
    tagline: "Network Scale",
    title: "Chain",
    subtitle: "Procurement pricing",
    description: "We buy medicines at massive network scale. Your hospital keeps the upgraded margin.",
    tags: [
      { label: "COGS", dir: "down", color: "text-brand-indigo-600 bg-brand-indigo-50 ring-1 ring-brand-indigo-600/10" },
      { label: "Gross margin", dir: "up", color: "text-brand-indigo-600 bg-brand-indigo-50 ring-1 ring-brand-indigo-600/10" }
    ],
    metric: "15% avg. boost in gross margins",
    traditional: "You rely on standard distributor rates — the exact same price every independent hospital pays.",
    medikloud: "MediKloud handles procurement for our entire network. You enjoy chain-level profitability without the purchasing hassle.",
    themeColor: "indigo"
  },
  {
    id: 3,
    icon: <Repeat className="w-6 h-6" />,
    tagline: "Compounding Growth",
    title: "Recurring",
    subtitle: "Revenue that compounds",
    description: "Chronic patients refilling monthly are worth 12x more than standard one-time visits.",
    tags: [
      { label: "Retention", dir: "up", color: "text-violet-600 bg-metric-light ring-1 ring-metric-dark/10" },
      { label: "Refill Revenue", dir: "up", color: "text-violet-600 bg-metric-light ring-1 ring-metric-dark/10" }
    ],
    metric: "3x increase in chronic retention",
    traditional: "Chronic patients drift to the nearest retail chemist after discharge. You get absolutely nothing.",
    medikloud: "Automated WhatsApp and SMS reminders bring them back to your pharmacy — month after month.",
    themeColor: "purple"
  }
];

const THEME_MAP = {
  blue: {
    solid: "bg-brand-600",
    text: "text-brand-600",
    bg: "bg-brand-50",
    border: "border-brand-600/20",
    hex: '#2563eb',
  },
  emerald: {
    solid: "bg-success",
    text: "text-success",
    bg: "bg-success-light",
    border: "border-success/20",
    hex: '#059669',
  },
  indigo: {
    solid: "bg-brand-indigo-600",
    text: "text-brand-indigo-600",
    bg: "bg-brand-indigo-50",
    border: "border-brand-indigo-600/20",
    hex: '#4f46e5',
  },
  purple: {
    solid: "bg-violet-600",
    text: "text-violet-600",
    bg: "bg-metric-light",
    border: "border-violet-600/20",
    hex: '#7c3aed',
  },
} as const;

function AdvantageCard({ item, index }: { item: AdvantageItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = THEME_MAP[item.themeColor];

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [20, 0, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.98, 1, 1, 0.98]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className="relative w-full max-w-2xl will-change-[transform,opacity]"
    >
      <div className={cn(
        "relative rounded-3xl p-8 md:p-10 overflow-hidden",
        "bg-white border-2 shadow-card-lg",
        theme.border
      )}>
        <div className="relative z-10 flex flex-col gap-10">

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4 md:gap-6 flex-1">
              <div className={cn(
                "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-card-lg",
                theme.solid
              )}>
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2 })}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className={cn("text-xs font-bold uppercase tracking-wide", theme.text)}>
                    {item.subtitle}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span className="text-base font-bold uppercase tracking-wide text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-h2 font-bold tracking-tighter leading-tight text-primary">
                  {item.title}
                </h3>
                <p className="premium-p--sm font-medium leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end text-right">
              <div className={cn(
                "px-5 py-2.5 rounded-full border text-sm font-bold tracking-tight flex items-center gap-2 shadow-card whitespace-nowrap",
                theme.bg, theme.border, theme.text
              )}>
                <Zap size={15} className="animate-pulse" />
                {item.metric}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative p-6 rounded-3xl border border-default bg-surface-alt bg-slate-50 shadow-card transition-colors hover:bg-slate-200/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 px-2.5 rounded-md border border-slate-300 bg-surface text-xxs font-bold uppercase tracking-widest shadow-card text-slate-600">
                  Traditional
                </div>
                <AlertCircle className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>
              <p className="text-base font-medium leading-[1.6] italic pr-4 text-body">
                &quot;{item.traditional}&quot;
              </p>
            </div>

            <div className={cn(
              "group relative p-6 rounded-3xl shadow-card-md border border-transparent",
              theme.solid,
              "hover:shadow-card-lg hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            )}>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="p-1 px-2.5 rounded-md bg-white/20 text-xxs font-bold text-white uppercase tracking-widest border border-white/20">
                  MediKloud
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-white animate-pulse" />
              </div>
              <p className="text-base text-white/95 font-medium leading-[1.6] relative z-10 pr-6">
                {item.medikloud}
              </p>
              <div className="absolute top-2 right-2 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Zap className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-muted">
            {item.tags.map((tag, i) => (
              <div key={i} className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm",
                tag.color
              )}>
                {tag.dir === 'up' ? <ArrowUpRight size={12} strokeWidth={3} /> : <ArrowDownRight size={12} strokeWidth={3} />}
                <span className="text-xs font-semibold uppercase tracking-wider">{tag.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

function AdvantageStepIndicator({ activeIndex, total }: { activeIndex: number; total: number }) {
  const themeHexes = ['#2563eb', '#059669', '#4f46e5', '#7c3aed'];

  return (
    <div className="flex flex-col items-center gap-10 relative py-6">
      <div className="absolute top-6 bottom-6 w-[1.5px] bg-slate-200" />

      <motion.div
        className="absolute top-6 w-[1.5px] z-10 origin-top"
        style={{ backgroundColor: themeHexes[activeIndex] }}
        animate={{ height: `${(activeIndex / (total - 1)) * 100}%` }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative z-20 flex items-center justify-center">
          <motion.div
            animate={{
              scale: activeIndex === i ? 1.5 : 1,
              backgroundColor: i <= activeIndex ? themeHexes[i] : "#cbd5e1",
              boxShadow: activeIndex === i
                ? `0 0 0 3px white, 0 0 0 5px ${themeHexes[i]}40`
                : "0 0 0 0px transparent",
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-3 h-3 rounded-full cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

function MobileAdvantageAccordion({ items }: { items: AdvantageItem[] }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const theme = THEME_MAP[item.themeColor];
        return (
          <div
            key={item.id}
            className={cn(
              "border rounded-2xl overflow-hidden bg-white shadow-card transition-all duration-300",
              openId === item.id ? "border-brand-indigo-200 ring-1 ring-brand-indigo-100 shadow-card-md" : "border-slate-200"
            )}
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center text-white",
                  theme.solid
                )}>
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide leading-none block mb-1 text-muted">
                    {item.tagline}
                  </span>
                  <h4 className="text-h4 font-bold leading-tight text-primary">
                    {item.title} {item.subtitle}
                  </h4>
                </div>
              </div>
              <Plus className={cn("w-5 h-5 transition-transform duration-300 text-muted", openId === item.id ? 'rotate-45' : '')} />
            </button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-0 space-y-4 border-t border-muted">
                    <p className="premium-p--sm font-medium leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-4 rounded-2xl border bg-surface-alt border-muted-color">
                        <div className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5 text-slate-500">
                          <AlertCircle size={10} /> Traditional
                        </div>
                        <p className="text-sm font-medium italic leading-relaxed text-subtitle">&quot;{item.traditional}&quot;</p>
                      </div>

                      <div className={cn(
                        "p-4 rounded-2xl text-white shadow-card-md relative overflow-hidden",
                        theme.solid
                      )}>
                        <div className="text-sm font-bold text-white/70 uppercase tracking-widest mb-2 flex items-center gap-1.5 relative z-10">
                          <CheckCircle2 size={10} /> MediKloud
                        </div>
                        <p className="text-sm font-medium text-white/95 leading-relaxed relative z-10">{item.medikloud}</p>
                        <Zap className="absolute top-1 right-1 w-12 h-12 text-white/10" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-muted">
                      <span className="text-xs font-bold uppercase tracking-wide text-muted">Efficiency Impact</span>
                      <span className={cn(
                        "text-sm px-4 py-2 rounded-full border flex items-center gap-1.5",
                        theme.text, theme.bg, theme.border
                      )}>
                        <Zap size={12} className="animate-pulse" />
                        {item.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function AdvantageSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveCardIndex(index);
          });
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative section-py-lg bg-section-alt isolate"
    >
      <div className="blob-layer">
        <div className="blob-blue w-[400px] h-[400px] top-0 -right-[5%] opacity-40" />
        <div className="blob-indigo w-[350px] h-[350px] -bottom-[5%] -left-[5%] opacity-40" />
      </div>

      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          <div className="lg:w-[40%] text-center lg:text-left">
            <div className="lg:sticky lg:top-32 space-y-4 lg:space-y-6 pb-12 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow-wrap justify-start"
              >
                <div className="eyebrow-line-l" />
                <span className="eyebrow-text">The Advantage</span>
                <div className="eyebrow-line-r" />
              </motion.div>

              <h2 className="premium-h2 mb-4">
                <span className="text-brand-indigo-600 drop-shadow-sm">The advantage</span><br />
                corporate chains have.<br />
                <span className="text-brand-indigo-600 drop-shadow-sm pr-2 italic">
                  Available to<br />
                  <span className="whitespace-nowrap not-italic">you.</span>
                </span>
              </h2>
              <p className="text-body-lg max-w-sm mx-auto lg:mx-0 text-center lg:text-left text-slate-500">
                Corporate pharmacy chains win because of scale, not luck. We give independent hospitals the exact same operating infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:w-[60%] w-full">
            <div className="hidden lg:block space-y-20 pb-24 relative">
              <div className="absolute -right-8 xl:-right-16 top-0 bottom-24 pointer-events-none z-50">
                <div className="sticky top-[45vh]">
                  <AdvantageStepIndicator activeIndex={activeCardIndex} total={ADVANTAGES.length} />
                </div>
              </div>

              {ADVANTAGES.map((advantage, index) => (
                <div key={advantage.id} ref={(el) => { cardRefs.current[index] = el; }}>
                  <AdvantageCard item={advantage} index={index} />
                </div>
              ))}
            </div>

            <div className="lg:hidden">
              <MobileAdvantageAccordion items={ADVANTAGES} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}