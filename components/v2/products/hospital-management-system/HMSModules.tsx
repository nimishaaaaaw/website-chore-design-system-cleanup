"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Pill, 
  Microscope, 
  Calculator, 
  Network,
  ChevronRight,
  CheckCircle2,
  Plus
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
    title: "Pharmacy Integration",
    icon: <Pill className="w-5 h-5" />,
    features: [
      { name: "Inventory Control", desc: "Real-time stock tracking, batch management, and auto-reorder points." },
      { name: "GST Billing", desc: "E-invoicing, credit notes, and GSTR-ready financial reports." },
      { name: "Expiry Alerts", desc: "Proactive notifications 90/60/30 days before stock expires." },
      { name: "Prescription Sync", desc: "Instant transfer of doctor’s orders to the pharmacy counter." }
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
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="relative py-section-sm md:py-section bg-slate-50 overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h1 font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Comprehensive Modules. <br />
            <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>Built for Total Control.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Tab Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {modulesData.map((module, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModule(idx)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-300 transform ${
                  activeModule === idx 
                    ? 'bg-gradient-action text-white shadow-card-lg scale-[1.02]' 
                    : 'bg-white text-slate-500 hover:bg-slate-100/50 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border ${activeModule === idx ? 'bg-white/20 border-white/20' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                    {module.icon}
                  </div>
                  <span className="font-bold text-lg">{module.title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${activeModule === idx ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content (Feature Grid) */}
          <div className="w-full lg:w-2/3 min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {modulesData[activeModule].features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-3xl shadow-card border border-slate-200/60 hover:shadow-card-md hover:border-brand-indigo-100 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-blue-100 transition-colors" />
                    
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-gradient-action transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-h3 font-bold text-slate-900 mb-2">{feature.name}</h4>
                      <p className="text-body text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Additional Operational Power Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-20 pt-10 border-t border-slate-200"
        >
          <h4 className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            Additional Operational Power
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['IPD & Ward Management', 'OT Scheduling', 'Inventory & HR', 'AI Voice Scribe'].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-card hover:border-brand-indigo-200 hover:shadow-card-md transition-all cursor-default group"
              >
                <div className="bg-blue-50 p-1 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Plus className="w-3.5 h-3.5 text-blue-500 group-hover:text-white" />
                </div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
