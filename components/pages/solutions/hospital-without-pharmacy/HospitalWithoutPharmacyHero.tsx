"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Building2, 
  Smartphone, 
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useContactModal } from '@/hooks/use-contact-modal';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalWithoutPharmacyHero = ({ 
  onTalkToExpert 
}: { 
  onTalkToExpert?: () => void;
}) => {
  const { openModal } = useContactModal();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-section-hero">
      {/* Abstract Background Blobs */}
      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] -top-24 -left-24 animate-float-slow" />
        <div className="blob-indigo w-[32rem] h-[32rem] top-1/4 -right-24 animate-float-medium" />
        <div className="blob-violet w-[30rem] h-[30rem] bottom-0 left-1/3 animate-float-slower" />
      </div>

      <div className="relative container-page text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerLocal}
          className="space-y-12"
        >
          {/* Eyebrow */}
          <div className="eyebrow-wrap animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">Integrated Pharmacy Engine</span>
            <span className="eyebrow-line-r"></span>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-display-xl font-black leading-[1.05] tracking-tighter max-w-5xl mx-auto animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <span className="text-slate-900 inline-block">You heal the patient.</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block overflow-visible pb-2">
                Why does the revenue leave?
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-body-lg text-slate-600 leading-relaxed font-medium animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              Every day, your hospital creates clinical value — only to hand over a prescription fulfilled elsewhere. MediKloud helps you capture that value instantly.
            </p>
          </div>

          {/* Leakage Grid with Pulse Markers */}
          <motion.div variants={staggerContainerLocal} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 px-4 sm:px-0">
            {[
              { icon: Building2, text: "Patient walks to retail pharmacy", color: "rose" },
              { icon: Smartphone, text: "Orders from online aggregators", color: "rose" },
              { icon: Clock, text: "Delays treatment due to friction", color: "rose" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="card p-6 border-slate-200/60 hover:border-indigo-200 group hover:shadow-card-lg transition-all duration-500 bg-white/70 backdrop-blur-md flex flex-col items-start text-left min-h-[160px] relative overflow-hidden"
              >
                {/* Pulse Marker */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 no-select">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active leakage</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4 shadow-sm border border-rose-100 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug pr-8">{item.text}</p>
                <div className="mt-auto pt-3">
                  <div className="h-1 w-8 rounded-full bg-slate-100 group-hover:bg-rose-500 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Positioning Box with Secondary Action */}
          <motion.div variants={fadeInUp} className="pt-8 px-4 sm:px-0">
            <div className="card-glass p-8 md:p-14 text-left max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center border border-indigo-100/50 shadow-float-brand relative">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest no-select">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Instant infrastructure layer
                </div>
                <h3 className="text-h2 font-black text-slate-900 tracking-tight leading-tight">
                  MediKloud changes <br className="hidden lg:block" /> the hospital economics.
                </h3>
                <p className="text-slate-600 text-body-lg leading-relaxed font-medium">
                  Without setting up a single physical shelf, our integrated engine helps your hospital capture 100% of prescribed value while improving patient compliance.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="badge badge-indigo">Digital fulfillment</div>
                  <div className="badge badge-brand">Revenue share</div>
                  <div className="badge badge-slate">Zero operations</div>
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-4">
                <button onClick={() => openModal({
                    badge: "Hospital Pharmacy",
                    title: "Initiate Hospital Pharmacy Launch",
                    description: "Schedule a demo to see how we can set up your digital pharmacy layer with zero inventory and zero staffing.",
                    btnText: "Launch My Pharmacy",
                    successTitle: "Launch Plan Initiated!",
                    successDescription: "Our team will reach out within 24 hours to start your hospital's transition to the MediKloud network."
                  })} className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full">
                  Partner With Us
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={onTalkToExpert} className="btn-ghost w-full active:scale-[0.97] transition-all">
                  Talk to our hospital experts
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-16 flex flex-col items-center gap-3 no-select"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] ml-[0.3em]">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


