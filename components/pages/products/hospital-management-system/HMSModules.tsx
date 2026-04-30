"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, Pill, Microscope, Calculator, Network,
  ChevronRight, CheckCircle2
} from 'lucide-react';

const modulesData = [
  {
    title: "OPD & Clinical EHR",
    icon: <Stethoscope className="w-5 h-5" />,
    features: [
      { name: "Integrated EMR/EHR", desc: "Unified patient 360° view including vitals, medications, and clinical notes." },
      { name: "Smart Scheduling", desc: "Online booking, token generation, and automated WhatsApp reminders." },
      { name: "Queue Control", desc: "Real-time patient tracking and streamlined consultation workflows." },
      { name: "Digital Prescriptions", desc: "Branded, legible prescriptions sent directly to patient WhatsApp." }
    ]
  },
  {
    title: "Integrated Pharmacy",
    icon: <Pill className="w-5 h-5" />,
    features: [
      { name: "Inventory Control", desc: "Real-time stock tracking, batch management, and auto-reorder points." },
      { name: "GST Billing", desc: "E-invoicing, credit notes, and GSTR-ready financial reports." },
      { name: "Expiry Alerts", desc: "Proactive notifications 90/60/30 days before stock expires." },
      { name: "Prescription Sync", desc: "Instant transfer of doctor's orders to the pharmacy counter." }
    ]
  },
  {
    title: "Laboratory & Radiology",
    icon: <Microscope className="w-5 h-5" />,
    features: [
      { name: "Sample Tracking", desc: "Barcode integration from collection to reporting for zero errors." },
      { name: "Machine Interface", desc: "Direct integration with analyzers for automated result capture." },
      { name: "Smart Reports", desc: "Auto-calculated results with normal range highlighting in beautiful PDFs." },
      { name: "PACS Integration", desc: "Unified storage and viewing for radiology imaging." }
    ]
  },
  {
    title: "Billing & Revenue",
    icon: <Calculator className="w-5 h-5" />,
    features: [
      { name: "Financial Control", desc: "Track payments, insurance claims, and TPA integrations in real-time." },
      { name: "Automated Invoicing", desc: "Generate GST-compliant receipts and send payment reminders." },
      { name: "Revenue Analytics", desc: "Detailed insights on department performance and financial KPIs." },
      { name: "NABH Compliance", desc: "Automated audit trails and documentation for accreditation." }
    ]
  },
  {
    title: "Next-Gen Connectivity",
    icon: <Network className="w-5 h-5" />,
    features: [
      { name: "Integrated Telemedicine", desc: "Secure video consultations with direct EMR syncing." },
      { name: "Patient Portal & App", desc: "Branded access for patients to view reports and book slots." },
      { name: "Tally Integration", desc: "Instant financial sync with your existing accounting software." },
      { name: "ABHA Lifecycle", desc: "Native tools to create and manage ABHA IDs for full ABDM compliance." }
    ]
  }
];

export const HMSModules = () => {
  const [activeModule, setActiveModule] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-section-alt section-py-premium">
      <div className="tech-grid-overlay !opacity-[0.02]" />
      <div className="noise-texture !opacity-[0.02]" />

      <div className="container-page relative z-10">

        {/* Header */}
        <header className="header-lock text-center mb-16 md:mb-24 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">The Clinic OS</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="premium-h2 mb-6">
            Every Department Consolidated. <br className="hidden md:block" />
            <span className="heading-accent">Built for Absolute Control.</span>
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto items-start">

          {/* Left Column — Tab Navigation */}
          <div className="w-full lg:w-380px flex flex-col gap-4">
            {modulesData.map((module, idx) => (
              <div key={idx} className="flex flex-col">
                <button
                  onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-5 rounded-[1.5rem] text-left transition-colors duration-300 group border ${
                    activeModule === idx
                      ? 'bg-gradient-action text-white shadow-card-lg lg:scale-[1.02] border-transparent'
                      : 'bg-white text-slate-500 hover:bg-white hover:text-brand-600 border-slate-200 shadow-card hover:shadow-card-md hover:border-brand-indigo-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                      activeModule === idx
                        ? 'bg-white/20 border-white/20 text-white'
                        : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:bg-brand-50 group-hover:border-brand-100 group-hover:text-brand-600'
                    }`}>
                      {React.cloneElement(module.icon as React.ReactElement, { strokeWidth: 1.5 } as any)}
                    </div>
                    <span className={`font-bold text-base tracking-tight transition-colors ${activeModule === idx ? 'text-white' : 'text-slate-900'}`}>
                      {module.title}
                    </span>
                  </div>
                  <ChevronRight
                    strokeWidth={1.5}
                    className={`shrink-0 w-5 h-5 transition-transform duration-300 ${
                      activeModule === idx
                        ? 'text-white rotate-90 lg:rotate-0 lg:translate-x-1'
                        : 'text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1'
                    }`}
                  />
                </button>

                {/* Mobile Accordion */}
                <div className={`lg:hidden grid transition-all duration-300 ease-in-out ${
                  activeModule === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-6 pb-6 pt-5 px-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:pt-5 sm:px-2">
                      {module.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-[10px] bg-brand-50 border border-brand-100/60 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                            <CheckCircle2 strokeWidth={2} className="w-5 h-5 text-brand-600" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1.5 leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>
                              {feature.name}
                            </h4>
                            <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-subtitle)' }}>
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column — Desktop Feature Grid */}
          <div className="hidden lg:block flex-1 min-h-[460px]">
            <AnimatePresence mode="wait">
              {activeModule !== null && (
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {modulesData[activeModule].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-7 rounded-[2rem] shadow-card border border-slate-200/60 hover:shadow-card-lg hover:border-brand-indigo-100 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50/40 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-100/50 transition-colors duration-500" />

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300">
                          <CheckCircle2 strokeWidth={1.5} className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="text-h3 font-bold mb-2 leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>
                          {feature.name}
                        </h4>
                        <p className="premium-p--sm font-medium leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};