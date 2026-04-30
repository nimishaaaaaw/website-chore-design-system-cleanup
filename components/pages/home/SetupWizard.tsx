"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Stethoscope,
  Handshake,
  PackageX,
  Package,
  TrendingUp,
  TrendingDown,
  Users,
  RefreshCcw,
  MapPin,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Building2,
  HelpCircle,
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

/* ═══════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════ */

type PharmacyStatus = 'own' | 'vendor' | 'none';
type OperationalGoal = 'waste' | 'walkouts' | 'chronic' | 'staffing' | 'other';
type FacilityCapacity = 'yes' | 'no' | 'unsure';
type RecommendedModel = 'managed' | 'virtual' | 'combo' | 'consultation';

interface DiagnosticState {
  step: number;
  infrastructure: PharmacyStatus | null;
  priorities: OperationalGoal[];
  capacity: FacilityCapacity | null;
}

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const INFRA_OPTIONS: {
  id: PharmacyStatus;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'own',
    icon: Stethoscope,
    title: 'Self-Managed Pharmacy',
    sub: 'In-house operations with dedicated staff',
  },
  {
    id: 'vendor',
    icon: Handshake,
    title: 'Third-Party Managed',
    sub: 'External vendor handles operations',
  },
  {
    id: 'none',
    icon: PackageX,
    title: 'No Active Pharmacy',
    sub: 'Prescriptions are currently filled outside',
  },
];

const PRIORITY_OPTIONS: {
  id: OperationalGoal;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'waste',
    icon: TrendingDown,
    title: 'Inventory Precision',
    sub: 'Reduce wastage and eliminate near-expiry stock',
  },
  {
    id: 'walkouts',
    icon: Users,
    title: 'Prescription Capture',
    sub: 'Retain patients who currently buy elsewhere',
  },
  {
    id: 'chronic',
    icon: RefreshCcw,
    title: 'Patient Retention',
    sub: 'Automated refills for long-term chronic care',
  },
  {
    id: 'staffing',
    icon: Building2,
    title: 'Operational Continuity',
    sub: 'Simplify pharmacist hiring and management',
  },
  {
    id: 'other',
    icon: HelpCircle,
    title: 'Other Priorities',
    sub: 'Explore custom operational goals',
  },
];

const SPACE_OPTIONS: {
  id: FacilityCapacity;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'yes',
    icon: MapPin,
    title: 'Available On-Site Space',
    sub: 'Dedicated area for pharmacy operations',
  },
  {
    id: 'no',
    icon: PackageX,
    title: 'Constraint-Led (Virtual)',
    sub: 'No physical space available for layout',
  },
  {
    id: 'unsure',
    icon: HelpCircle,
    title: 'Flexible / Undecided',
    sub: 'Open to both physical and virtual models',
  },
];

/* ═══════════════════════════════════════════════════════════════════
   DIAGNOSTIC ENGINE
   ═══════════════════════════════════════════════════════════════════ */

function getRecommendation(state: DiagnosticState): RecommendedModel {
  if (state.infrastructure === 'none') {
    if (state.capacity === 'yes') return 'managed';
    if (state.capacity === 'no') return 'virtual';
    return 'consultation';
  }
  const hasChronic = state.priorities.includes('chronic');
  const hasOthers = state.priorities.some((p) => p !== 'chronic');
  if (hasChronic && hasOthers) return 'combo';
  if (hasChronic && !hasOthers) return 'combo';
  return 'managed';
}

/* ═══════════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════════ */

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
    filter: 'blur(8px)',
  }),
  center: { 
    x: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    filter: 'blur(8px)',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

/* ═══════════════════════════════════════════════════════════════════
   PATH CARD (Step 1 — Wide Horizontal)
   ═══════════════════════════════════════════════════════════════════ */

function PathCard({
  icon: Icon,
  title,
  sub,
  selected,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={staggerItem}
      onClick={onClick}
      className={`relative w-full text-left p-5 rounded-[1.5rem] border-1.5 transition-all duration-500 group flex flex-col justify-between h-full min-h-[120px] md:min-h-[145px] ${
        selected
          ? 'border-indigo-500 bg-white shadow-card-lg'
          : 'border-slate-200 bg-white/50 hover:border-indigo-200 hover:shadow-card'
      }`}
    >
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
            selected
              ? 'bg-indigo-600 text-white shadow-indigo-200 shadow-lg'
              : 'bg-slate-100/80 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
          }`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>
        
        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
          selected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200/50 group-hover:border-indigo-200'
        }`}>
          {selected && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h4 className={`text-sm sm:text-base font-bold leading-tight tracking-tight transition-colors ${selected ? 'text-slate-900' : 'text-slate-700'}`}>
          {title}
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 leading-snug">
          {sub}
        </p>
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   DIAGNOSTIC TILE (Step 2 — Bento Grid)
   ═══════════════════════════════════════════════════════════════════ */

function DiagnosticTile({
  icon: Icon,
  title,
  sub,
  selected,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={staggerItem}
      onClick={onClick}
      className={`relative overflow-hidden text-left p-5 rounded-[1.5rem] border-1.5 transition-all duration-500 group flex flex-col justify-between h-full min-h-[120px] md:min-h-[145px] ${
        selected
          ? 'border-indigo-500 bg-white shadow-card-lg'
          : 'border-slate-200 bg-white/50 hover:border-indigo-200 hover:shadow-card'
      }`}
    >
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
            selected
              ? 'bg-indigo-600 text-white shadow-indigo-200 shadow-lg'
              : 'bg-slate-100/80 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
          }`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>
        
        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-500 ${
          selected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200/50 group-hover:border-indigo-200'
        }`}>
          {selected && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h4 className={`text-sm sm:text-base font-bold leading-tight tracking-tight transition-colors ${selected ? 'text-slate-900' : 'text-slate-700'}`}>
          {title}
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 leading-snug">
          {sub}
        </p>
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   STRATEGIC BLUEPRINT VIEW
   ═══════════════════════════════════════════════════════════════════ */

interface ModularDetail {
  icon: React.ElementType;
  title: string;
  features: string;
}

function BlueprintView({
  rec,
  infrastructure,
  onRestart,
}: {
  rec: RecommendedModel;
  infrastructure: PharmacyStatus | null;
  onRestart: () => void;
}) {
  const { openModal } = useContactModal();

  const infraLabel = INFRA_OPTIONS.find((o) => o.id === infrastructure)?.title || 'Existing Operations';

  const data: Record<
    RecommendedModel,
    {
      title: string;
      headline: string;
      description: string;
      modules: ModularDetail[];
    }
  > = {
    managed: {
      title: 'Integrated Physical Hub',
      headline: 'A fully managed in-house pharmacy is your ideal path.',
      description: 'Zero setup cost, full clinical integration, and end-to-end management by MediKloud.',
      modules: [
        { icon: Users, title: 'Clinical Staffing', features: 'Pharmacists • Licensing • Training • HR' },
        { icon: TrendingUp, title: 'AI Inventory', features: 'Zero Waste • Expiry Alerts • Predictive Order' },
        { icon: Building2, title: 'Infrastructure', features: 'Modular Counters • Cold Chain • ERP Setup' },
        { icon: Sparkles, title: 'Patient Hub', features: 'Digital Bills • Fast TAT • WhatsApp Alerts' },
      ],
    },
    virtual: {
      title: 'Virtual Fulfillment SDK',
      headline: 'The Virtual Pharmacy model fits your constraints.',
      description: 'Digitise prescriptions and deliver medicines under your brand with zero footprint.',
      modules: [
        { icon: RefreshCcw, title: 'Digital Integration', features: 'EMR Connector • API Driven • Cloud SDK' },
        { icon: Handshake, title: 'Logistics Network', features: 'Hub & Spoke • Quality Control • Partners' },
        { icon: MapPin, title: 'Delivery Stack', features: '30-Min TAT • Live Tracking • Proof of Del.' },
        { icon: Stethoscope, title: 'Patient Support', features: 'Refill Automation • Med Counseling' },
      ],
    },
    combo: {
      title: 'Hybrid Care Ecosystem',
      headline: 'A combined physical and home-care strategy is recommended.',
      description: 'Physical presence for acute needs + virtual fulfillment for chronic long-term care.',
      modules: [
        { icon: Building2, title: 'On-Site Express', features: 'Acute Dispensing • Physical Trust • Branding' },
        { icon: RefreshCcw, title: 'Chronic Hub', features: 'Recurring Refills • Subscription • Retention' },
        { icon: TrendingUp, title: 'Smart Sync', features: 'Unified Stocks • Predictive Balancing' },
        { icon: Stethoscope, title: 'Care Continuity', features: 'Consults • Vital Syncing • Adherence' },
      ],
    },
    consultation: {
      title: 'Bespoke Strategy Design',
      headline: "Let's co-design your operational blueprint.",
      description: 'Your setup needs a tailored assessment to map fulfillment and technology roadmap.',
      modules: [
        { icon: Users, title: 'Operational Blueprint', features: 'Workflow Mapping • Leakage Discovery' },
        { icon: Building2, title: 'Setup Design', features: 'Modular Layouts • ROI Projection • Tech' },
        { icon: Sparkles, title: 'Go-to-Market', features: 'Patient Launch • Staff Kits • Manuals' },
        { icon: Handshake, title: 'Tech Strategy', features: 'EMR Migration • Scaling Roadmap' },
      ],
    },
  };

  const d = data[rec];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 md:space-y-8"
    >
      <div className="text-center space-y-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100"
        >
          <Sparkles size={12} className="text-indigo-600" />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-600">
            Strategic Discovery Blueprint
          </span>
        </motion.div>

        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Here Are Your <span className="text-indigo-600">Recommendations</span>
        </h2>
        <p className="text-xs md:text-sm text-slate-500 font-medium">
          Optimized for {infraLabel} baseline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {d.modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="bg-white rounded-xl p-4 md:p-5 border-1.5 border-slate-100 shadow-card hover:border-indigo-200 hover:shadow-card-md transition-all duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-indigo-50">
              <mod.icon size={24} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>
            
            <h4 className="text-base font-bold text-slate-900 mb-1.5 tracking-tight">
              {mod.title}
            </h4>
            
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              {mod.features}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-xl mx-auto space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => openModal({
                    badge: "Clinic OS",
                    title: "Finalize Your Setup",
                    description: "You've configured your facility blueprint. Schedule a final walkthrough to go live in 24 hours.",
                    btnText: "Go Live Now",
                    successTitle: "Setup Synchronized!",
                    successDescription: "Our implementation team will reach out within 24 hours to finalize your facility's launch."
                  })} className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4E46E5] text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-sm">
            <Phone size={16} />
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-xl border-1.5 border-slate-200 text-xs font-bold text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all uppercase tracking-widest"
          >
            <RotateCcw size={14} />
            Reset Discovery
          </button>
        </div>

        <p className="text-center text-[10px] text-slate-400 font-medium italic">
          *Initial diagnostic. Facility walkthrough recommended before deployment.
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN WIZARD COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export function SetupWizard() {
  const [state, setState] = useState<DiagnosticState>({
    step: 1,
    infrastructure: null,
    priorities: [],
    capacity: null,
  });
  const [direction, setDirection] = useState(1);

  const showResult = state.step === 3;

  const goForward = useCallback(() => {
    setDirection(1);
    setState((s) => ({ ...s, step: s.step + 1 }));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setState((s) => {
      if (s.step === 2) {
        return { ...s, step: 1, priorities: [], capacity: null };
      }
      return { ...s, step: Math.max(1, s.step - 1) };
    });
  }, []);

  const restart = useCallback(() => {
    setDirection(-1);
    setState({ step: 1, infrastructure: null, priorities: [], capacity: null });
  }, []);

  const handleInfraSelect = useCallback(
    (id: PharmacyStatus) => {
      setState((s) => ({ ...s, infrastructure: id }));
      setTimeout(() => {
        setDirection(1);
        setState((s) => ({ ...s, step: 2 }));
      }, 300);
    },
    [],
  );

  const handlePriorityToggle = useCallback((id: OperationalGoal) => {
    setState((s) => {
      const isOther = id === 'other';
      if (isOther) {
        return { ...s, priorities: ['other'] };
      }
      const has = s.priorities.includes(id);
      const filtered = s.priorities.filter((p) => p !== id && p !== 'other');
      return {
        ...s,
        priorities: has ? filtered : [...filtered, id],
      };
    });
  }, []);

  const handleCapacitySelect = useCallback(
    (id: FacilityCapacity) => {
      setState((s) => ({ ...s, capacity: id }));
      setTimeout(() => {
        setDirection(1);
        setState((s) => ({ ...s, step: 3 }));
      }, 300);
    },
    [],
  );

  const rec = showResult ? getRecommendation(state) : null;

  return (
    <section className="bg-slate-50 h-[calc(100vh-64px)] flex flex-col section-py-premium relative overflow-hidden">
      {/* Subtle atmosphere blobs */}
      <div className="blob-layer">
        <div className="blob-indigo w-[400px] h-[400px] -top-20 -right-20 opacity-20 animate-float-slow" />
        <div className="blob-blue w-[350px] h-[350px] -bottom-10 -left-10 opacity-15 animate-float-slower" />
      </div>

      <div className="container-page relative z-10 w-full h-full flex flex-col px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-wrap scale-90"
          >
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text">Operational Diagnostic</span>
            <div className="eyebrow-line-l" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-2"
          >
            Discover the ideal workflow for your{' '}
            <span className="text-indigo-600">facility scale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto"
          >
            Select your baseline to generate a strategic operational blueprint.
          </motion.p>
        </div>

        {/* Diagnostic container */}
        <div className={`flex flex-col justify-center flex-1 w-full mx-auto ${showResult ? "max-w-6xl" : "max-w-3xl"}`}>
          {/* Progress Stepper */}
          {!showResult && (
            <div className="flex items-center justify-center gap-3 mb-6 scale-90">
              {[1, 2].map((i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      state.step >= i ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'
                    }`}>
                      {state.step > i ? <CheckCircle2 size={16} /> : i}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${
                      state.step >= i ? 'text-slate-900' : 'text-slate-400'
                    }`}>
                      {i === 1 ? 'Baseline' : 'Focus'}
                    </span>
                  </div>
                  {i < 2 && <div className="w-8 h-0.5 bg-slate-200" />}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Stepper Content */}
          <AnimatePresence mode="wait" custom={direction}>
            {/* Step 1 — Infrastructure Baseline */}
            {state.step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4 md:space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    How is your pharmacy infrastructure currently structured?
                  </h3>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto"
                >
                  {INFRA_OPTIONS.map((opt) => (
                    <PathCard
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.infrastructure === opt.id}
                      onClick={() => handleInfraSelect(opt.id)}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Step 2A — Operational Priorities */}
            {state.step === 2 && state.infrastructure !== 'none' && (
              <motion.div
                key="step2a"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4 md:space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    What specific areas would you like to optimize?
                  </h3>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                >
                  {PRIORITY_OPTIONS.map((opt) => (
                    <DiagnosticTile
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.priorities.includes(opt.id)}
                      onClick={() => handlePriorityToggle(opt.id)}
                    />
                  ))}
                </motion.div>

                <div className="flex flex-col items-center gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={goForward}
                    disabled={state.priorities.length === 0}
                    className="group inline-flex items-center justify-center gap-2 px-12 py-3.5 bg-[#4E46E5] text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-sm w-full sm:w-auto"
                  >
                    View Recommendations
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest"
                  >
                    <ArrowLeft size={14} />
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2B — Facility Capacity */}
            {state.step === 2 && state.infrastructure === 'none' && (
              <motion.div
                key="step2b"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4 md:space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    Tell us about your facility's physical layout.
                  </h3>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto"
                >
                  {SPACE_OPTIONS.map((opt) => (
                    <PathCard
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.capacity === opt.id}
                      onClick={() => handleCapacitySelect(opt.id)}
                    />
                  ))}
                </motion.div>

                <div className="pt-2">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 — Result Blueprint */}
            {showResult && rec && (
              <motion.div
                key="result"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <BlueprintView
                  rec={rec}
                  infrastructure={state.infrastructure}
                  onRestart={restart}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}