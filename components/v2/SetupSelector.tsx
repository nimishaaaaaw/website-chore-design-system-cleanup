"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Building2, Stethoscope } from 'lucide-react';

const setups = {
  'hospital-with': {
    id: 'hospital-with',
    icon: Building2,
    tabLabel: 'Hospital · With Pharmacy',
    title: "Your pharmacy exists. It's leaking 30–40% of its revenue.",
    description: "Pilferage, billing mismatches, prescription leakage — MediKloud takes over operations completely and fixes it from the inside.",
    features: [
      "Dedicated MediKloud pharmacist deployed on-site",
      "Real-time inventory — zero stockout guarantee",
      "Technology-driven billing — every dispense logged",
      "Home delivery enabled for all your patients",
      "10–15% revenue share — we earn when you earn more"
    ],
    ctaText: "Get a Hospital Demo",
    stats: [
      { label: "REVENUE RECOVERED", value: "+32%", desc: "Avg. pharmacy revenue increase in MediKloud-managed hospitals" },
      { label: "TIME TO GO LIVE", value: "7 days", desc: "From sign-off to fully operational pharmacy" },
      { label: "YOUR COST", value: "₹0", desc: "Complete operational takeover at no upfront cost to you" }
    ]
  },
  'hospital-without': {
    id: 'hospital-without',
    icon: Building2,
    tabLabel: 'Hospital · Without Pharmacy',
    title: "Every prescription you write goes straight to your competitor.",
    description: "No pharmacy means 100% of prescription value goes to retail chains. MediKloud sets up a fully compliant in-house pharmacy — zero capex on you.",
    features: [
      "Full pharmacy setup — licensing support, staff, tech",
      "Zero capex — no infrastructure investment needed",
      "Live in 14 days from sign-off",
      "Home delivery and chronic refill automation included",
      "Revenue share — we earn only after we deliver results"
    ],
    ctaText: "Set Up My Pharmacy",
    stats: [
      { label: "LOST TODAY", value: "100%", desc: "Of prescription revenue going to retail chains right now" },
      { label: "GO LIVE IN", value: "14 days", desc: "From approval to a fully staffed, running pharmacy" },
      { label: "YOUR INVESTMENT", value: "₹0", desc: "Complete setup at MediKloud's cost. Revenue share only." }
    ]
  },
  'clinic-with': {
    id: 'clinic-with',
    icon: Stethoscope,
    tabLabel: 'Clinic · With Pharmacy',
    title: "Your dispensary is small. The losses are not.",
    description: "A small medicine counter has leakage problems without the scale. MediKloud brings tech-controlled inventory to even the smallest counter.",
    features: [
      "Real-time stock control and expiry alerts",
      "Smart procurement — stock only what moves",
      "Home delivery for medicines your counter can't stock",
      "Free HMS + e-prescription included",
      "Automated chronic refill reminders for patients"
    ],
    ctaText: "Upgrade My Dispensary",
    stats: [
      { label: "AVG. EXPIRY LOSS", value: "18%", desc: "Typical quarterly expiry loss in unmanaged clinic counters" },
      { label: "ELIMINATED BY", value: "Week 1", desc: "Smart procurement eliminates expiry waste from day one" },
      { label: "YOUR COST", value: "₹0", desc: "HMS free. Setup free. We earn on fulfilled orders only." }
    ]
  },
  'clinic-without': {
    id: 'clinic-without',
    icon: Stethoscope,
    tabLabel: 'Clinic · Without Pharmacy',
    title: "You prescribe. Retail chains earn. That ends now.",
    description: "Every prescription you write goes to competitors. MediKloud gives you a virtual pharmacy — free HMS, fast delivery, and real revenue share.",
    features: [
      "Free HMS + e-prescription — live in 3 days",
      "~10 min medicine delivery from nearest MediKloud hub",
      "15–20% commission per fulfilled order paid to you",
      "Zero licensing, zero space, zero complexity",
      "Automated refill reminders retain chronic patients"
    ],
    ctaText: "Get My Virtual Pharmacy",
    stats: [
      { label: "LOST TO RETAIL TODAY", value: "100%", desc: "Of every prescription value going to retail chains" },
      { label: "YOUR NEW EARN", value: "15–20%", desc: "Commission on every order fulfilled through MediKloud" },
      { label: "COST TO START", value: "Zero", desc: "HMS free. Setup free. Go live in 3 days." }
    ]
  }
};

export type SetupId = keyof typeof setups;

export function SetupSelector() {
  const [activeTab, setActiveTab] = useState<SetupId | null>(null);

  const toggleTab = (id: SetupId) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  const activeData = activeTab ? setups[activeTab] : null;

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-slate-50 flex items-center justify-center font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Select Your Setup
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
            see exactly how MediKloud works for you
          </p>
        </div>

        {/* Tab Navigation (Single Row) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          {Object.values(setups).map((setup) => {
            const isActive = activeTab === setup.id;
            const Icon = setup.icon;
            return (
              <button
                key={setup.id}
                onClick={() => toggleTab(setup.id as SetupId)}
                className={`
                  flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ease-in-out
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-50' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-200'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-100' : 'text-slate-400'}`} />
                {setup.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Dynamic Expanding Content Card */}
        <AnimatePresence>
          {activeData && (
            <motion.div 
              key="expanding-container"
              initial={{ height: 0, opacity: 0, scale: 0.98 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mx-auto mt-2">
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left Column: Story & Features */}
                  <div className="lg:w-3/5 p-6 md:p-8">
                    <div key={`left-${activeData.id}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2 md:mb-3">
                        {activeData.title}
                      </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-5">
                      {activeData.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4 md:mb-6">
                      {activeData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-sm md:text-base text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <button className="group inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30">
                        {activeData.ctaText}
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    </div>
                  </div>

                  {/* Right Column: Key Stats */}
                  <div className="lg:w-2/5 bg-slate-900 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
                    
                    <div key={`right-${activeData.id}`} className="relative space-y-5 animate-in fade-in slide-in-from-right-8 duration-500 delay-100 fill-mode-both">
                      {activeData.stats.map((stat, idx) => (
                        <div key={idx} className="border-l-2 border-blue-500/30 pl-4 md:pl-5">
                          <div className="text-blue-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
                            {stat.label}
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight pb-1 mb-1">
                            {stat.value}
                          </div>
                          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-[250px]">
                            {stat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
