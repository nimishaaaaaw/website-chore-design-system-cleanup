"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Network, 
  Repeat, 
  ArrowUpRight, 
  ArrowDownRight,
  Mouse,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

interface TagItem {
  label: string;
  dir: 'up' | 'down';
  color: string;
}

interface ContentItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: TagItem[];
  metric: string;
  traditional: string;
  medikloud: string;
}

const CONTENT: ContentItem[] = [
  {
    id: 0,
    icon: <Zap className="w-5 h-5" />,
    title: "Day 1",
    subtitle: "Operations infrastructure",
    description: "Staff deployed, tech integrated, inventory live — before you've spent a single rupee.",
    tags: [
      { label: "Capex risk", dir: "down", color: "text-blue-600 bg-blue-50 ring-1 ring-blue-500/10" }, 
      { label: "Speed", dir: "up", color: "text-emerald-600 bg-emerald-50 ring-1 ring-emerald-500/10" }
    ],
    metric: "Go live in under 7 days",
    traditional: "Setting up a compliant pharmacy takes months, lakhs in capital, and full management attention.",
    medikloud: "We've already built the playbook. We deploy it into your hospital — you approve, we execute."
  },
  {
    id: 1,
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Zero",
    subtitle: "Leakage tolerance",
    description: "Every billing event, every dispense, and every inventory movement — reconciled daily.",
    tags: [
      { label: "Pilferage", dir: "down", color: "text-emerald-600 bg-emerald-50 ring-1 ring-emerald-500/10" }, 
      { label: "Billing gaps", dir: "down", color: "text-emerald-600 bg-emerald-50 ring-1 ring-emerald-500/10" }
    ],
    metric: "30-40% avg. revenue recovered",
    traditional: "Losses surface at the month-end review. By the time you see the gap, the money is already gone.",
    medikloud: "Billing, inventory, and dispense are cross-checked automatically. Discrepancies get caught the same day."
  },
  {
    id: 2,
    icon: <Network className="w-5 h-5" />,
    title: "Chain",
    subtitle: "Procurement pricing",
    description: "We buy medicines at the scale of a massive network. Your hospital keeps the upgraded margin.",
    tags: [
      { label: "COGS", dir: "down", color: "text-blue-600 bg-blue-50 ring-1 ring-blue-500/10" }, 
      { label: "Gross margin", dir: "up", color: "text-blue-600 bg-blue-50 ring-1 ring-blue-500/10" }
    ],
    metric: "15% avg. boost in gross margins",
    traditional: "You rely on standard distributor rates — the exact same price every independent hospital pays.",
    medikloud: "MediKloud handles procurement for our entire network. You enjoy chain-level profitability without the purchasing hassle."
  },
  {
    id: 3,
    icon: <Repeat className="w-5 h-5" />,
    title: "Recurring",
    subtitle: "Revenue that compounds",
    description: "A chronic patient who refills every month is worth 12x a standard one-time hospital visit.",
    tags: [
      { label: "Retention", dir: "up", color: "text-purple-600 bg-purple-50 ring-1 ring-purple-500/10" }, 
      { label: "Patient LTV", dir: "up", color: "text-purple-600 bg-purple-50 ring-1 ring-purple-500/10" }
    ],
    metric: "3x increase in patient LTV",
    traditional: "Chronic patients drift to the nearest retail chemist after discharge. You get absolutely nothing.",
    medikloud: "Automated WhatsApp and SMS reminders bring them back to your pharmacy — month after month."
  }
];

// Refined spring physics
const springTransition = { type: "spring", stiffness: 350, damping: 35 } as const;
const contentSpring = { type: "spring", stiffness: 450, damping: 40 } as const;

const CardProgress = ({ progress, index, total }: { progress: any, index: number, total: number }) => {
  const scaleX = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1],
    { clamp: true }
  );
  
  return (
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100/30 overflow-hidden">
      <motion.div 
        className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 z-10 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

export function WhyItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80px", "end end"]
  });

  // Industry standard: Use a spring-smoothed value for general visual transitions (optional)
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 80, 
    damping: 30,
    restDelta: 0.001 
  });

  // Synchronize index switching with raw scroll position to eliminate activation delay
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    // Precise scroll mapping to prevent edge flickering
    const index = Math.min(Math.floor(latest * CONTENT.length), CONTENT.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeData = CONTENT[activeIndex];

  // Function to smoothly scroll to the exact area that triggers a specific card
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    // Calculate the total scrollable distance of the container
    const scrollableDistance = container.clientHeight - window.innerHeight;
    
    // Calculate the progress threshold for the requested card. 
    // We target the midpoint (0.5) of the index's range to ensure stable activation.
    const targetProgress = (index + 0.5) / CONTENT.length;
    
    // Calculate the final Y pixel position on the page
    const targetY = container.offsetTop + (scrollableDistance * targetProgress);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-[#FAFAFC] pt-12 pb-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Sticky Frame: High-Fidelity Balanced Offset (top-16) to clear site header (64px) */}
      <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-center overflow-hidden px-6 sm:px-12 md:px-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 md:gap-10 relative z-10">
          
          {/* Header Section: Center-aligned stacking with no wrapping */}
          <div className="flex flex-col items-center text-center gap-2 md:gap-3 relative z-20">
            <div className="space-y-1.5 flex flex-col items-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-[1.1] whitespace-nowrap">
                The advantage Apollo has. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ml-2">
                  Now available to you.
                </span>
              </h2>
              <p className="text-slate-500 text-[10px] md:text-xs font-semibold leading-relaxed whitespace-nowrap">
                Apollo wins because of scale, not luck. We give independent hospitals the exact same operating infrastructure.
              </p>
            </div>

          </div>

          {/* Top Interactive Group (Cards + Dashboard) with specialized narrow gap to visually link them */}
          <div className="flex flex-col gap-1 md:gap-1.5 relative z-10">
            {/* Premium Card Track */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 relative z-10">
            {CONTENT.map((item, idx) => {
              const isActive = activeIndex === idx;
              if (isMobile && !isActive) return null;

              return (
                <motion.div 
                  key={item.id}
                  onClick={() => scrollToCard(idx)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.97,
                      y: isActive ? 0 : 4,
                      backgroundColor: isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
                      borderColor: isActive ? "rgba(37, 99, 235, 0.3)" : "rgba(226, 232, 240, 0.5)",
                      boxShadow: isActive ? "0 20px 40px -12px rgba(37, 99, 235, 0.15)" : "0 0px 0px 0px rgba(0, 0, 0, 0)",
                    }}
                    transition={springTransition}
                    className={`
                      relative p-6 md:p-7 rounded-3xl border h-full min-h-[220px] flex flex-col overflow-hidden backdrop-blur-md group-hover:bg-white/60
                    `}
                  >
                    {/* Active Background Glow */}
                    {isActive && (
                      <>
                        <motion.div 
                          layoutId="cardGlow"
                          className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" 
                          transition={springTransition}
                        />
                        <CardProgress progress={scrollYProgress} index={idx} total={CONTENT.length} />
                      </>
                    )}

                    <div className="flex flex-col h-full relative z-10 gap-5">
                      {/* Unified Header: Icon + Titles aligned horizontally */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 relative w-10 h-10 flex items-center justify-center">
                        {isActive && (
                          <motion.div 
                            layoutId="iconHighlight"
                            className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"
                            transition={springTransition}
                          />
                        )}
                        <div className={`relative z-10 transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                          {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                        </div>
                      </div>

                      <div className="flex flex-col pt-0.5">
                        <h3 className={`text-base font-black tracking-tight leading-none transition-colors duration-500 mb-1.5 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className={`text-[11px] md:text-xs leading-relaxed transition-colors duration-500 font-medium ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-slate-100/60">
                        {item.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-1 transition-all duration-500 ${tag.color} ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}
                          >
                            {tag.dir === 'up' ? <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" /> : <ArrowDownRight className="w-2.5 h-2.5 stroke-[3]" />}
                            {tag.label}
                          </span>
                        ))}
                    </div>
                  </div>
                  </motion.div>

                  {/* Connector Arrow (Tab extension of the card) */}
                  {isActive && !isMobile && (
                    <motion.div
                      layoutId="activeArrow"
                      className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b z-20 shadow-[4px_4px_12px_rgba(37,99,235,0.12)]"
                      style={{ 
                        borderColor: 'rgba(37, 99, 235, 0.3)',
                        rotate: 45
                      }}
                      initial={{ opacity: 0, y: -4, scale: 0.5, rotate: 45 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotate: 45 }}
                      transition={springTransition}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Premium Unified Dashboard */}
          <div className="relative mt-1 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
            {/* Pulsing Grid Background for the Right Side */}
            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb10_0%,transparent_100%)] animate-pulse" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#80808010_1px,transparent_1px),linear-gradient(0deg,#80808010_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="grid">
              {/* Invisible Sizers: Dynamically calculates the height of the tallest content item to ensure stable dashboard height */}
              {CONTENT.map((item) => (
                <div key={`sizer-${item.id}`} className="col-start-1 row-start-1 invisible p-1.5 md:p-2 lg:p-3 text-sm">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start min-h-[110px]">
                    <div className="lg:w-[30%] space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Impact Profile</span>
                      </div>
                      <h4 className="text-lg md:text-xl font-black text-white tracking-tighter leading-[1.1]">
                        {item.metric}
                      </h4>
                    </div>
                    <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm">
                      <div className="p-2 md:p-3 border-b md:border-b-0 md:border-r border-slate-800 group">
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <div className="p-1 px-2 rounded bg-slate-700/50 text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Traditional</div>
                        </div>
                        <p className="text-[11px] md:text-xs text-slate-400 font-medium leading-relaxed italic opacity-80">
                          "{item.traditional}"
                        </p>
                      </div>
                      <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600/5 to-transparent relative group">
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <div className="p-1 px-2 rounded bg-blue-600 text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">MediKloud</div>
                        </div>
                        <p className="text-[11px] md:text-xs text-blue-50 font-semibold leading-relaxed relative z-10">
                          {item.medikloud}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Visible Interface */}
              <div className="col-start-1 row-start-1 relative z-10 flex flex-col justify-center border border-transparent">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={contentSpring}
                    className="p-1.5 md:p-2 lg:p-3"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
                      
                      {/* Metric Section */}
                      <div className="lg:w-[30%] space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Impact Profile</span>
                        </div>
                        <h4 className="text-base md:text-lg font-black text-white tracking-tighter leading-[1.1]">
                          {activeData.metric}
                        </h4>
                      </div>

                      {/* Split View Comparison */}
                      <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm">
                        
                        {/* Traditional Pane */}
                        <div className="p-2 md:p-3 border-b md:border-b-0 md:border-r border-slate-800 group">
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <div className="p-1 px-2 rounded bg-slate-700/50 text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest">Traditional</div>
                          </div>
                          <p className="text-[11px] md:text-xs text-slate-400 font-medium leading-relaxed italic opacity-80">
                            "{activeData.traditional}"
                          </p>
                        </div>

                        {/* High-Growth Pane */}
                        <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600/5 to-transparent relative group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                          </div>
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <div className="p-1 px-2 rounded bg-blue-600 text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20 animate-pulse">MediKloud</div>
                          </div>
                          <p className="text-[11px] md:text-xs text-blue-50 font-semibold leading-relaxed relative z-10">
                            {activeData.medikloud}
                          </p>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
