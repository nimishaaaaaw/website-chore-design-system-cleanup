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
import Link from 'next/link';

/* ═══════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════ */

type PharmacyStatus = 'own' | 'vendor' | 'none';
type PainPoint = 'waste' | 'walkouts' | 'chronic' | 'staffing';
type SpaceAnswer = 'yes' | 'no' | 'unsure';
type Recommendation = 'managed' | 'virtual' | 'combo' | 'consultation';

interface WizardState {
  step: number;
  pharmacyStatus: PharmacyStatus | null;
  painPoints: PainPoint[];
  spaceAnswer: SpaceAnswer | null;
}

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const PHARMACY_OPTIONS: {
  id: PharmacyStatus;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'own',
    icon: Stethoscope,
    title: 'Yes, I run it myself',
    sub: 'In-house pharmacy with own staff',
  },
  {
    id: 'vendor',
    icon: Handshake,
    title: 'Yes, a vendor manages it',
    sub: 'Third-party operated pharmacy',
  },
  {
    id: 'none',
    icon: PackageX,
    title: 'No pharmacy yet',
    sub: 'Looking to add one',
  },
];

const PAIN_OPTIONS: {
  id: PainPoint;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'waste',
    icon: TrendingDown,
    title: 'Stock expires, medicines go waste',
    sub: 'Inventory management problem',
  },
  {
    id: 'walkouts',
    icon: Users,
    title: 'Patients buy medicines outside',
    sub: 'Prescription capture leaking',
  },
  {
    id: 'chronic',
    icon: RefreshCcw,
    title: "Chronic patients don't return for refills",
    sub: 'Long-term adherence gap',
  },
  {
    id: 'staffing',
    icon: Building2,
    title: 'Staff is hard to find & retain',
    sub: 'Pharmacist hiring headache',
  },
];

const SPACE_OPTIONS: {
  id: SpaceAnswer;
  icon: React.ElementType;
  title: string;
  sub: string;
}[] = [
  {
    id: 'yes',
    icon: MapPin,
    title: 'Yes, I have space',
    sub: 'Room for a pharmacy counter',
  },
  {
    id: 'no',
    icon: PackageX,
    title: 'No / very limited space',
    sub: 'Can\'t fit a physical pharmacy',
  },
  {
    id: 'unsure',
    icon: HelpCircle,
    title: "I'm not sure — help me decide",
    sub: "Let's figure it out together",
  },
];

/* Recommendation copy keyed by pain point */
const PAIN_COPY: Record<PainPoint, string> = {
  waste: 'AI-powered inventory tracks every SKU — expiry, slow-movers, and reorder points. Zero waste.',
  walkouts: 'Prescriptions are digitised at the point of care. Patients fill before they leave.',
  chronic: 'Automated WhatsApp refill reminders bring chronic patients back every month.',
  staffing: 'Our trained pharmacists walk in on day one. Your hiring headache, solved.',
};

/* ═══════════════════════════════════════════════════════════════════
   RECOMMENDATION ENGINE
   ═══════════════════════════════════════════════════════════════════ */

function getRecommendation(state: WizardState): Recommendation {
  // No-pharmacy branch
  if (state.pharmacyStatus === 'none') {
    if (state.spaceAnswer === 'yes') return 'managed';
    if (state.spaceAnswer === 'no') return 'virtual';
    return 'consultation';
  }
  // Has-pharmacy branch
  const hasChronic = state.painPoints.includes('chronic');
  const hasOthers = state.painPoints.some((p) => p !== 'chronic');
  if (hasChronic && hasOthers) return 'combo';
  if (hasChronic && !hasOthers) return 'combo';
  return 'managed';
}

/* ═══════════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════════ */

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

/* ═══════════════════════════════════════════════════════════════════
   OPTION CARD (single-select)
   ═══════════════════════════════════════════════════════════════════ */

function OptionCard({
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
      variants={cardItem}
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 group flex items-center gap-4 ${
        selected
          ? 'border-indigo-500 bg-indigo-50/50 shadow-card-md'
          : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-card-md'
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
          selected
            ? 'bg-gradient-action text-white shadow-sm'
            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
        }`}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={`text-[15px] font-bold leading-snug tracking-tight transition-colors ${selected ? 'text-indigo-700' : 'text-slate-800'}`}>
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">{sub}</p>
      </div>
      {selected && (
        <CheckCircle2 size={20} className="text-indigo-600 shrink-0" strokeWidth={2.5} />
      )}
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TOGGLE CARD (multi-select)
   ═══════════════════════════════════════════════════════════════════ */

function ToggleCard({
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
      variants={cardItem}
      onClick={onClick}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 group flex items-center gap-4 ${
        selected
          ? 'border-indigo-500 bg-indigo-50/50 shadow-card-md'
          : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-card-md'
      }`}
    >
      {/* Checkbox area */}
      <div
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
          selected
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 group-hover:border-indigo-300'
        }`}
      >
        {selected && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
      </div>
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
          selected
            ? 'bg-gradient-action text-white shadow-sm'
            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
        }`}
      >
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className={`text-[15px] font-bold leading-snug tracking-tight transition-colors ${selected ? 'text-indigo-700' : 'text-slate-800'}`}>
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">{sub}</p>
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   RECOMMENDATION CARD
   ═══════════════════════════════════════════════════════════════════ */

function RecommendationView({
  rec,
  painPoints,
  onRestart,
}: {
  rec: Recommendation;
  painPoints: PainPoint[];
  onRestart: () => void;
}) {
  const { openModal } = useContactModal();

  const data: Record<
    Recommendation,
    {
      title: string;
      headline: string;
      description: string;
      badges: string[];
      link?: { href: string; label: string };
    }
  > = {
    managed: {
      title: 'Managed In-House Pharmacy',
      headline: 'Your facility is ready for a fully managed pharmacy.',
      description:
        'We set up and operate a full-service pharmacy inside your facility — trained pharmacists, complete inventory, billing software, and delivery. All managed by us.',
      badges: ['Zero setup cost', 'Live in < 7 days', 'Staff provided'],
      link: { href: '/products/managed-pharmacy', label: 'Learn More about Managed Pharmacy' },
    },
    virtual: {
      title: 'Virtual Pharmacy',
      headline: 'A Virtual Pharmacy is the perfect fit.',
      description:
        'No space needed. We digitise your prescriptions and deliver medicines to patients within 30 minutes — from our fulfillment hub, under your clinic\'s name.',
      badges: ['Zero space required', 'Zero inventory', 'Doorstep delivery'],
      link: { href: '/products/virtual-pharmacy', label: 'Learn More about Virtual Pharmacy' },
    },
    combo: {
      title: 'In-House + Home Delivery',
      headline: 'We recommend a combined approach.',
      description:
        'Your on-site pharmacy handles walk-in dispensing. Our virtual fulfillment network handles home delivery for chronic patients. Complete coverage — no patient left behind.',
      badges: ['On-site dispensing', 'Home delivery for refills', '3× patient retention'],
    },
    consultation: {
      title: 'Custom Assessment',
      headline: "Let's figure it out together.",
      description:
        'Our solutions team will assess your facility layout, patient volume, and workflows to recommend the ideal setup — no pressure, no commitment.',
      badges: ['Free assessment', 'Custom plan', 'No obligation'],
    },
  };

  const d = data[rec];
  const relevantPains = painPoints.filter((p) => p in PAIN_COPY);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      {/* Result eyebrow */}
      <div className="flex items-center gap-2 justify-center">
        <Sparkles size={14} className="text-indigo-600" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Your Recommendation
        </span>
      </div>

      {/* Recommendation card */}
      <div className="card-tinted !rounded-3xl p-6 sm:p-8 space-y-5 border border-indigo-200">
        <div className="badge badge-indigo w-fit">{d.title}</div>

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
          {d.headline}
        </h3>

        <p className="text-[15px] text-slate-600 leading-relaxed">
          {d.description}
        </p>

        {/* Dynamic pain-point resolutions */}
        {relevantPains.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-indigo-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">
              How we address your challenges
            </span>
            {relevantPains.map((p) => (
              <div key={p} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed">{PAIN_COPY[p]}</p>
              </div>
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {d.badges.map((b) => (
            <span key={b} className="badge badge-brand">
              <CheckCircle2 size={10} strokeWidth={3} />
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button onClick={openModal} className="btn-primary group flex-1 sm:flex-none">
            <Phone size={15} className="opacity-80" />
            Book a Demo
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {d.link && (
            <Link href={d.link.href} className="btn-secondary group flex-1 sm:flex-none text-center">
              {d.link.label}
              <ChevronRight size={15} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="mx-auto flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-600 transition-colors"
      >
        <RotateCcw size={12} />
        Start Over
      </button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN WIZARD
   ═══════════════════════════════════════════════════════════════════ */

export function SetupWizard() {
  const [state, setState] = useState<WizardState>({
    step: 1,
    pharmacyStatus: null,
    painPoints: [],
    spaceAnswer: null,
  });
  const [direction, setDirection] = useState(1);

  const totalSteps = state.pharmacyStatus === 'none' ? 2 : 2;
  const isLastInputStep = state.step === 2;

  const goForward = useCallback(() => {
    setDirection(1);
    setState((s) => ({ ...s, step: s.step + 1 }));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setState((s) => {
      if (s.step === 2) {
        return { ...s, step: 1, painPoints: [], spaceAnswer: null };
      }
      return { ...s, step: s.step - 1 };
    });
  }, []);

  const restart = useCallback(() => {
    setDirection(-1);
    setState({ step: 1, pharmacyStatus: null, painPoints: [], spaceAnswer: null });
  }, []);

  const handlePharmacySelect = useCallback(
    (id: PharmacyStatus) => {
      setState((s) => ({ ...s, pharmacyStatus: id }));
      // Auto-advance after a brief pause
      setTimeout(() => {
        setDirection(1);
        setState((s) => ({ ...s, step: 2 }));
      }, 250);
    },
    [],
  );

  const handlePainToggle = useCallback((id: PainPoint) => {
    setState((s) => {
      const has = s.painPoints.includes(id);
      return {
        ...s,
        painPoints: has ? s.painPoints.filter((p) => p !== id) : [...s.painPoints, id],
      };
    });
  }, []);

  const handleSpaceSelect = useCallback(
    (id: SpaceAnswer) => {
      setState((s) => ({ ...s, spaceAnswer: id }));
      setTimeout(() => {
        setDirection(1);
        setState((s) => ({ ...s, step: 3 }));
      }, 250);
    },
    [],
  );

  const showResult = state.step === 3;
  const rec = showResult ? getRecommendation(state) : null;

  return (
    <section className="bg-section-surface section-py relative overflow-hidden">
      {/* Blobs */}
      <div className="blob-layer">
        <div className="blob-indigo w-[350px] h-[350px] -top-16 right-[10%] opacity-20" />
        <div className="blob-blue w-[300px] h-[300px] bottom-0 -left-10 opacity-15" />
      </div>

      <div className="container-page relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-wrap"
          >
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text flex items-center gap-1.5">
              <Sparkles size={12} className="text-indigo-600" />
              Find Your Setup
            </span>
            <div className="eyebrow-line-l" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-3"
          >
            Which setup is{' '}
            <span
              className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent pr-1"
              style={{ color: '#4F46E5' }}
            >
              right for you?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-base text-slate-500 max-w-md mx-auto leading-relaxed font-medium"
          >
            Answer two quick questions. We&apos;ll recommend the best fit for your facility.
          </motion.p>
        </div>

        {/* Wizard container */}
        <div className="max-w-xl mx-auto">
          {/* Progress dots */}
          {!showResult && (
            <div className="flex items-center justify-center gap-2 mb-6">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i + 1 <= state.step
                      ? 'w-8 bg-gradient-action'
                      : 'w-4 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Step content */}
          <AnimatePresence mode="wait" custom={direction}>
            {/* Step 1 — Pharmacy status */}
            {state.step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Does your facility have a pharmacy today?
                  </h3>
                </div>

                <motion.div
                  variants={cardStagger}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {PHARMACY_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.pharmacyStatus === opt.id}
                      onClick={() => handlePharmacySelect(opt.id)}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Step 2A — Pain points (multi-select) */}
            {state.step === 2 && state.pharmacyStatus !== 'none' && (
              <motion.div
                key="step2a"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-1">
                    What would you most like to fix?
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Select all that apply
                  </p>
                </div>

                <motion.div
                  variants={cardStagger}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {PAIN_OPTIONS.map((opt) => (
                    <ToggleCard
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.painPoints.includes(opt.id)}
                      onClick={() => handlePainToggle(opt.id)}
                    />
                  ))}
                </motion.div>

                {/* Continue + Back buttons */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>

                  <button
                    onClick={goForward}
                    disabled={state.painPoints.length === 0}
                    className={`btn-primary group text-sm !px-6 !py-2.5 ${
                      state.painPoints.length === 0
                        ? 'opacity-40 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    See Recommendation
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2B — Space check (single-select, for no-pharmacy) */}
            {state.step === 2 && state.pharmacyStatus === 'none' && (
              <motion.div
                key="step2b"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center mb-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Do you have space for a pharmacy counter?
                  </h3>
                </div>

                <motion.div
                  variants={cardStagger}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {SPACE_OPTIONS.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      icon={opt.icon}
                      title={opt.title}
                      sub={opt.sub}
                      selected={state.spaceAnswer === opt.id}
                      onClick={() => handleSpaceSelect(opt.id)}
                    />
                  ))}
                </motion.div>

                {/* Back button */}
                <div className="mt-6">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 — Recommendation */}
            {showResult && rec && (
              <motion.div
                key="result"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <RecommendationView
                  rec={rec}
                  painPoints={state.painPoints}
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
