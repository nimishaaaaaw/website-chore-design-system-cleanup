"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Zap, 
  Globe, 
  RefreshCcw, 
  ArrowDown, 
  ArrowUp,
  AlertCircle,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useCallback, useRef } from 'react';

interface Reason {
  title: string;
  subtitle: string;
  description: string;
  tags: { label: string; dir: 'up' | 'down'; color: string }[];
  icon: LucideIcon;
  comparison: {
    key: string;
    without: string;
    with: string;
  };
}

const reasons: Reason[] = [
  {
    title: "30-40%",
    subtitle: "Revenue recovered",
    description: "From leakage you already have through automated tracking.",
    tags: [
      { label: "Leakage", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Margins", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: TrendingUp,
    comparison: {
      key: "30-40% avg. pharmacy revenue recovered",
      without: "Losses go undetected until the audit. By then, it's gone.",
      with: "Billing, inventory, and dispense are reconciled automatically — every day."
    }
  },
  {
    title: "Real-time",
    subtitle: "Operational control",
    description: "Stop losses before month-end with proactive inventory logic.",
    tags: [
      { label: "Stockouts", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Expiry", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" }
    ],
    icon: Zap,
    comparison: {
      key: "Zero-latency inventory visibility",
      without: "Managers rely on lagging reports, leading to stockouts.",
      with: "Predictive alerts flag low stock and near-expiry items weeks in advance."
    }
  },
  {
    title: "Network",
    subtitle: "Lower medicine costs",
    description: "Prices no single hospital can get on their own.",
    tags: [
      { label: "COGS", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Gross margin", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: Globe,
    comparison: {
      key: "15% average reduction in procurement spend",
      without: "Individual hospitals lack bargaining power for market rates.",
      with: "Access wholesale pricing tiers reserved for massive chains."
    }
  },
  {
    title: "Recurring",
    subtitle: "Chronic refill revenue",
    description: "One prescription → years of predictable returns.",
    tags: [
      { label: "Retention", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
      { label: "LTV", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: RefreshCcw,
    comparison: {
      key: "3x increase in patient lifetime value",
      without: "Chronic patients drift away to local pharmacies for maintenance.",
      with: "Automated refill reminders keep patients returning to your pharmacy."
    }
  }
];

export function WhyItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Scroll tracking logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll (0 to 1) to activeTab (0 to 3)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Divide 1 by the number of reasons (4)
    const index = Math.min(
      Math.floor(v * reasons.length),
      reasons.length - 1
    );
    if (index !== activeTab) {
      setActiveTab(index);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-white border-y border-slate-100">
      <section className="sticky top-0 h-screen flex items-center overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-12 w-full">
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            
            {/* Header - Sleek & Compact */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-center md:text-left max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block font-sans">
                  Why MediKloud?
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black tracking-tight text-slate-900 leading-tight mb-4">
                  Built for hospitals that <span className="text-blue-600">want to stop losing</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-md leading-relaxed font-medium max-w-xl">
                  Every revenue stream you're missing has a specific cause. Here's how we close each one.
                </p>
              </div>
              
              <div className="hidden md:flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-sm transition-all duration-300">
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all duration-300",
                        activeTab === i ? "bg-blue-600 scale-125" : "bg-slate-200"
                      )} 
                    />
                  ))}
                </div>
                Keep scrolling to explore
              </div>
            </div>

            {/* 4-Column Grid - Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {reasons.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    const rect = containerRef.current?.getBoundingClientRect();
                    const top = window.pageYOffset + (rect?.top || 0);
                    const height = containerRef.current?.scrollHeight || 0;
                    const targetScroll = top + (idx / reasons.length) * height + 10;
                    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                  }}
                  className={cn(
                    "relative p-4 md:p-5 rounded-2xl bg-white border transition-all duration-500 cursor-pointer flex flex-col h-full overflow-hidden group",
                    activeTab === idx 
                      ? 'border-blue-500 shadow-[0_8px_16px_-6px_rgba(59,130,246,0.1)]' 
                      : 'border-slate-100 hover:border-blue-200'
                  )}
                >
                  {/* Progress Line on active card */}
                  {activeTab === idx && (
                    <motion.div 
                      layoutId="scrollProgress"
                      className="absolute top-0 left-0 right-0 h-1 bg-blue-500"
                    />
                  )}

                  <div className="flex flex-col space-y-3 flex-1">
                    <div className={cn(
                      "w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-500",
                      activeTab === idx ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50/70 text-blue-600 group-hover:bg-blue-100'
                    )}>
                      <item.icon className="w-4 h-4" />
                    </div>

                    <div>
                      <h2 className={cn(
                        "text-xl md:text-[22px] font-black tracking-tighter leading-none mb-1.5 transition-colors duration-500",
                        activeTab === idx ? 'text-blue-700' : 'text-slate-900'
                      )}>{item.title}</h2>
                      <h3 className="font-bold text-slate-700 text-[13px] leading-tight opacity-80">{item.subtitle}</h3>
                      <p className="hidden lg:block text-slate-500 text-[11px] mt-2.5 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1 mt-auto">
                      {item.tags.map((tag, tIdx) => {
                        const isPositive = tag.label === "Margins" || tag.label === "Gross margin" || tag.label === "Retention" || tag.label === "LTV";
                        return (
                          <span key={tIdx} className={cn(
                            "px-1.5 py-0.5 rounded text-[8px] font-bold border flex items-center gap-1",
                            isPositive 
                              ? "text-emerald-600 bg-emerald-50/50 border-emerald-100" 
                              : "text-blue-600 bg-blue-50/50 border-blue-100"
                          )}>
                            {tag.label} {tag.dir === 'up' ? <ArrowUp size={8} strokeWidth={3} /> : <ArrowDown size={8} strokeWidth={3} />}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Detail Section */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white rounded-[1.5rem] p-6 md:p-8 border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Active Indicator Accent */}
                <motion.div 
                  layoutId="activeAccent"
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Dynamic Impact Title */}
                  <div className="lg:col-span-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Impact Analysis</span>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Impact of {reasons[activeTab].subtitle}
                      </h3>
                      <p className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                        {reasons[activeTab].comparison.key}
                      </p>
                    </div>
                  </div>

                  {/* Right: Comparative Logic */}
                  <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
                    {/* Traditional */}
                    <div className="flex-1 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                      <div className="flex items-center gap-1.5 mb-2 text-slate-400 font-bold text-[9px] uppercase tracking-widest">
                        <AlertCircle size={12} className="opacity-70" />
                        Traditional Setup
                      </div>
                      <p className="text-slate-500 text-[12px] leading-relaxed font-medium italic">
                        {reasons[activeTab].comparison.without}
                      </p>
                    </div>

                    {/* Medikloud */}
                    <div className="flex-1 bg-blue-50/30 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center gap-1.5 mb-2 text-blue-600 font-bold text-[9px] uppercase tracking-widest">
                        <CheckCircle2 size={12} />
                        With Medikloud
                      </div>
                      <p className="text-blue-800 text-[12px] leading-relaxed font-bold">
                        {reasons[activeTab].comparison.with}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>
    </div>
  );
}



