"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useInView } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Network, 
  Repeat, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Plus
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
    tagline: "Speed to Market",
    title: "Day 1",
    subtitle: "Operations infrastructure",
    description: "Staff deployed, tech integrated, inventory live — before you've spent a single rupee.",
    tags: [
      { label: "Capex risk", dir: "down", color: "text-blue-600 bg-blue-50 ring-1 ring-blue-500/10" }, 
      { label: "Speed", dir: "up", color: "text-emerald-600 bg-emerald-50 ring-1 ring-emerald-500/10" }
    ],
    metric: "Go live in under 7 days",
    traditional: "Setting up a compliant pharmacy takes months, lakhs in capital, and full management attention.",
    medikloud: "We've already built the playbook. We deploy it into your hospital — you approve, we execute.",
    themeColor: "blue"
  },
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6" />,
    tagline: "Revenue Protection",
    title: "Zero",
    subtitle: "Leakage tolerance",
    description: "Every billing event, every dispense, and every inventory movement — reconciled daily.",
    tags: [
      { label: "Pilferage", dir: "down", color: "text-rose-600 bg-rose-50 ring-1 ring-rose-500/10" }, 
      { label: "Billing gaps", dir: "down", color: "text-rose-600 bg-rose-50 ring-1 ring-rose-500/10" }
    ],
    metric: "30-40% avg. revenue recovered",
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
    description: "We buy medicines at the scale of a massive network. Your hospital keeps the upgraded margin.",
    tags: [
      { label: "COGS", dir: "down", color: "text-indigo-600 bg-indigo-50 ring-1 ring-indigo-500/10" }, 
      { label: "Gross margin", dir: "up", color: "text-indigo-600 bg-indigo-50 ring-1 ring-indigo-500/10" }
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
    description: "A chronic patient who refills every month is worth 12x a standard one-time hospital visit.",
    tags: [
      { label: "Retention", dir: "up", color: "text-violet-600 bg-violet-50 ring-1 ring-violet-500/10" }, 
      { label: "Patient LTV", dir: "up", color: "text-violet-600 bg-violet-50 ring-1 ring-violet-500/10" }
    ],
    metric: "3x increase in patient LTV",
    traditional: "Chronic patients drift to the nearest retail chemist after discharge. You get absolutely nothing.",
    medikloud: "Automated WhatsApp and SMS reminders bring them back to your pharmacy — month after month.",
    themeColor: "purple"
  }
];

function UnifiedAdvantageCard({ item, index, onInView }: { item: AdvantageItem; index: number; onInView: (index: number) => void }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    margin: "-40% 0px -40% 0px" // Trigger when card is in the central 20% of the viewport
  });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);
  
  // High-fidelity scroll tracking for each individual card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"]
  });

  // Smooth out the progress with spring physics for buttery-smooth feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth, continuous transforms linked directly to scroll position
  const opacity = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.35, 1, 1, 0.35]);
  const scale = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.97, 1, 1, 0.97]);
  const y = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [60, 0, 0, -60]);
  const glowOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const grayscale = useTransform(smoothProgress, [0, 0.35, 0.65, 1], ["grayscale(0.5)", "grayscale(0)", "grayscale(0)", "grayscale(0.5)"]);

  const themeColors = {
    blue: "from-blue-600 to-indigo-600 text-blue-600 bg-blue-50 border-blue-200 shadow-card-md",
    emerald: "from-emerald-600 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-200 shadow-card-md",
    indigo: "from-indigo-600 to-violet-600 text-indigo-600 bg-indigo-50 border-indigo-200 shadow-card-md",
    purple: "from-violet-600 to-violet-500 text-violet-600 bg-violet-50 border-violet-200 shadow-card-md",
  }[item.themeColor];

  const themeGlow = {
    blue: "bg-blue-500/20",
    emerald: "bg-emerald-500/20",
    indigo: "bg-indigo-500/20",
    purple: "bg-violet-500/20",
  }[item.themeColor];

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity,
        scale,
        y,
        filter: grayscale
      }}
      className="relative w-full max-w-2xl"
    >
      {/* Dynamic Glow Layer — synced with scroll center */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className={cn(
          "absolute -inset-10 blur-[100px] rounded-[4rem] pointer-events-none",
          themeGlow
        )} 
      />

      <div className={cn(
        "relative rounded-[32px] p-8 md:p-10 transition-all duration-700 overflow-hidden",
        "bg-white/80 backdrop-blur-xl border-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]",
        themeColors.split(' ')[4].replace('border-', 'border-').replace('200', '200/40') || "border-slate-200/60"
      )}>
        <div className="relative z-10 flex flex-col gap-10">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4 md:gap-6">
              <div className={cn(
                "w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl transition-transform duration-700",
                "scale-110 shadow-lg",
                `bg-gradient-to-br ${themeColors.split(' ')[0]} ${themeColors.split(' ')[1]}`
              )}>
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2 })}
              </div>
              
              <div className="space-y-1">
                 <div className="flex items-center gap-2">
                   <span className={cn("text-u-xs font-semibold uppercase tracking-u-widest", themeColors.split(' ')[2])}>
                     {item.subtitle}
                   </span>
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                   <span className="text-u-xs font-bold text-slate-300 uppercase tracking-u-widest">
                     0{index + 1}
                   </span>
                 </div>
                 <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                   {item.title}
                 </h3>
                 <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm leading-relaxed pt-1">
                   {item.description}
                 </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end text-right">
                <span className="text-u-xs font-bold text-slate-400 uppercase tracking-u-widest mb-1">Impact Profile</span>
                <div className={cn(
                  "px-4 py-1.5 rounded-xl border text-sm font-semibold tracking-tight flex items-center gap-1.5 shadow-sm",
                  themeColors.split(' ')[3],
                  themeColors.split(' ')[4],
                  themeColors.split(' ')[2]
                )}>
                  <Zap size={14} className="animate-pulse" />
                  {item.metric}
                </div>
            </div>
          </div>

          {/* High-Fidelity Comparison Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Traditional Pane */}
            <div className="group relative p-6 rounded-3xl bg-slate-100/50 border border-slate-200 shadow-sm transition-all hover:bg-slate-200/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 px-2.5 rounded-md bg-slate-50 border border-slate-200 text-u-xs font-bold text-slate-500 uppercase tracking-u-widest shadow-sm">
                  Traditional
                </div>
                <AlertCircle className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-500 transition-colors" />
              </div>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-[1.6] italic pr-4">
                "{item.traditional}"
              </p>
            </div>

            {/* MediKloud Pane */}
            <div className={cn(
              "group relative p-6 rounded-3xl transition-all duration-500 shadow-lg border",
              `bg-gradient-to-br ${themeColors.split(' ')[0]} ${themeColors.split(' ')[1]}`,
              "hover:shadow-xl hover:-translate-y-1"
            )}>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="p-1 px-2.5 rounded-md bg-white/20 backdrop-blur-md text-u-xs font-bold text-white uppercase tracking-u-widest border border-white/20">
                  MediKloud
                </div>
                <CheckCircle2 className="w-3.5 h-3.5 text-white animate-pulse" />
              </div>
              
              <p className="text-sm md:text-base text-white font-bold leading-[1.6] relative z-10 pr-6">
                {item.medikloud}
              </p>

              <div className="absolute top-2 right-2 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                 <Zap className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>

          {/* Footer Metrics - Glass Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
            {item.tags.map((tag, i) => (
               <div key={i} className={cn(
                 "flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm transition-all duration-500",
                 tag.color
               )}>
                  {tag.dir === 'up' ? <ArrowUpRight size={12} strokeWidth={3} /> : <ArrowDownRight size={12} strokeWidth={3} />}
                  <span className="text-[10px] font-semibold uppercase tracking-wider">{tag.label}</span>
               </div>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-4 text-slate-500">
               <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
                  <Plus className="w-3 h-3" /> Day 1 Support
               </div>
               <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" /> Fully Managed
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileAdvantageAccordion({ items }: { items: AdvantageItem[] }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className={cn(
            "border rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300",
            openId === item.id ? "border-indigo-200 ring-1 ring-indigo-100 shadow-md" : "border-slate-200"
          )}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br",
                item.themeColor === 'blue' ? "from-blue-600 to-indigo-600" :
                item.themeColor === 'emerald' ? "from-emerald-600 to-teal-600" :
                item.themeColor === 'indigo' ? "from-indigo-600 to-violet-600" :
                "from-violet-600 to-violet-500"
              )}>
                {item.icon}
              </div>
              <div>
                <span className="text-u-xs font-bold text-slate-400 uppercase tracking-u-widest leading-none block mb-1">
                  {item.tagline}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-tight">
                  {item.title} {item.subtitle}
                </h4>
              </div>
            </div>
            <Plus className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", openId === item.id ? 'rotate-45' : '')} />
          </button>
          
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-5 pb-5 pt-0 space-y-4 border-t border-slate-50">
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-u-xs font-bold text-slate-400 uppercase tracking-u-widest mb-2 flex items-center gap-1.5">
                        <AlertCircle size={10} /> Traditional
                      </div>
                      <p className="text-sm text-slate-500 italic leading-relaxed">"{item.traditional}"</p>
                    </div>
                    <div className={cn(
                      "p-4 rounded-2xl text-white shadow-md relative overflow-hidden",
                      item.themeColor === 'blue' ? "bg-gradient-to-br from-blue-600 to-indigo-600" :
                      item.themeColor === 'emerald' ? "bg-gradient-to-br from-emerald-600 to-teal-600" :
                      item.themeColor === 'indigo' ? "bg-gradient-to-br from-indigo-600 to-violet-600" :
                      "bg-gradient-to-br from-violet-600 to-violet-500"
                    )}>
                      <div className="text-u-xs font-bold text-white/70 uppercase tracking-u-widest mb-2 flex items-center gap-1.5 relative z-10">
                        <CheckCircle2 size={10} /> MediKloud
                      </div>
                      <p className="text-sm font-bold leading-relaxed relative z-10">{item.medikloud}</p>
                      <Zap className="absolute top-1 right-1 w-12 h-12 text-white/10" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <span className="text-u-xs font-bold text-slate-400 uppercase tracking-u-widest">Efficiency Impact</span>
                    <span className={cn(
                      "text-u-xs font-bold px-3 py-1 rounded-lg border flex items-center gap-1.5",
                      item.themeColor === 'blue' ? "text-blue-600 bg-blue-50 border-blue-100" :
                      item.themeColor === 'emerald' ? "text-emerald-600 bg-emerald-50 border-emerald-100" :
                      item.themeColor === 'indigo' ? "text-indigo-600 bg-indigo-50 border-indigo-100" :
                      "text-violet-600 bg-violet-50 border-violet-100"
                    )}>
                      <Zap size={10} className="animate-pulse" />
                      {item.metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function AdvantageStepIndicator({ activeIndex, total }: { activeIndex: number; total: number }) {
  const themeColors = [
    '#2563eb', // blue-600
    '#059669', // emerald-600
    '#4f46e5', // indigo-600
    '#7c3aed', // violet-600
  ];
  
  return (
    <div className="flex flex-col items-center gap-10 relative py-6">
      {/* Background track */}
      <div className="absolute top-6 bottom-6 w-[1.5px] bg-slate-200" />
      
      {/* Active progress track */}
      <motion.div 
        className="absolute top-6 w-[1.5px] z-10" 
        style={{ backgroundColor: themeColors[activeIndex] }}
        animate={{ 
          height: `${(activeIndex / (total - 1)) * 100}%` 
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative z-20 flex items-center justify-center">
          <motion.div
            animate={{
              scale: activeIndex === i ? 1.4 : 1,
              backgroundColor: activeIndex === i ? themeColors[i] : "#cbd5e1",
              border: activeIndex === i ? "2px solid white" : "2px solid transparent"
            }}
            className="w-3 h-3 rounded-full cursor-pointer transition-colors duration-500 shadow-sm"
          />
          
          {/* Label removed based on user feedback */}
        </div>
      ))}
    </div>
  );
}

export function AdvantageSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleInView = useCallback((index: number) => {
    setActiveCardIndex(index);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 md:py-24 bg-slate-50 isolate"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column - Header (Sticky on desktop) */}
          <div className="lg:w-[40%] text-center lg:text-left">
            <div className="lg:sticky lg:top-32 space-y-4 lg:space-y-6 pb-12 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow-wrap justify-center lg:justify-start !mb-0"
              >
                <div className="eyebrow-line-r" />
                <span className="eyebrow-text flex items-center gap-2 bg-indigo-50/50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                  <TrendingUp size={14} className="text-indigo-600" />
                  The Advantage
                </span>
                <div className="eyebrow-line-l" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">
                The advantage <br />
                <span className="text-indigo-600">Apollo</span> has. <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 italic px-1 pb-1" style={{ color: '#4F46E5' }}>
                  Available to you.
                </span>
              </h2>
              
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                Apollo wins because of scale, not luck. We give independent hospitals the exact same operating infrastructure.
              </p>
              

            </div>
          </div>

          {/* Right Column - Scrolling Flow / Accordion */}
          <div className="lg:w-[60%] w-full">
            {/* Desktop View (Sticky Scroll) */}
            <div className="hidden lg:block space-y-20 pb-24 relative">
              {/* Floating Vertical Progress - Anchored to the right of the cards */}
              <div className="absolute -right-8 xl:-right-16 top-0 bottom-24 pointer-events-none z-50">
                <div className="sticky top-[45vh]">
                   <AdvantageStepIndicator activeIndex={activeCardIndex} total={ADVANTAGES.length} />
                </div>
              </div>

              {ADVANTAGES.map((advantage, index) => (
                <UnifiedAdvantageCard 
                  key={advantage.id} 
                  item={advantage} 
                  index={index} 
                  onInView={handleInView}
                />
              ))}
            </div>

            {/* Mobile View (Accordion) */}
            <div className="lg:hidden">
              <MobileAdvantageAccordion items={ADVANTAGES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
