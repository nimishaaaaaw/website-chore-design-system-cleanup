"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Building2, Stethoscope, Pill, PackageX, ExternalLink } from 'lucide-react'

type UserType = 'hospital' | 'clinic'
type PharmacyType = 'with' | 'without'

interface ContentPanel {
  label: string
  headline: string
  description: string
  cards: {
    title: string
    desc: string
    link: string
  }[]
}

const megaMenuData: Record<UserType, Record<PharmacyType, ContentPanel>> = {
  hospital: {
    with: {
      label: 'HOSPITAL · WITH PHARMACY',
      headline: "Stop revenue leaks in your pharmacy.",
      description: "Fixing 30–40% revenue leakage caused by pilferage and billing mismatches. MediKloud takes over full operations—staff, procurement, and tech.",
      cards: [
        { title: "Full pharmacy takeover", desc: "Our team and tech inside your setup.", link: "/solutions/hospital/with-pharmacy" },
        { title: "Stop internal leakage", desc: "Real-time billing control eliminates pilferage.", link: "/solutions/hospital/with-pharmacy#leakage" },
        { title: "Capture prescriptions", desc: "Refill automation keeps patients with you.", link: "/solutions/hospital/with-pharmacy#retention" },
        { title: "ROI Calculator", desc: "See your leakage stats right now.", link: "/roi-calculator" }
      ]
    },
    without: {
      label: 'HOSPITAL · WITHOUT PHARMACY',
      headline: "Zero-capex pharmacy setup.",
      description: "Patients walking out is lost revenue. We setup and run a zero-cost pharmacy in your facility, providing a better patient journey.",
      cards: [
        { title: "Zero-Capex Setup", desc: "We build, stock, and staff the pharmacy.", link: "/solutions/hospital/without-pharmacy" },
        { title: "Revenue from Day 1", desc: "Profit sharing on every prescription.", link: "/solutions/hospital/without-pharmacy#model" },
        { title: "Patient Flow", desc: "One-stop-shop for clinical care and meds.", link: "/solutions/hospital/without-pharmacy#benefits" },
        { title: "Clinical Integration", desc: "Syncs directly with your existing HIS.", link: "/solutions/hospital/without-pharmacy#tech" }
      ]
    }
  },
  clinic: {
    with: {
      label: 'CLINIC · WITH PHARMACY',
      headline: "Supercharge your clinic pharmacy.",
      description: "Automate inventory and billing so you can focus on patients. We handle the high-effort distractions for you.",
      cards: [
        { title: "Inventory Automation", desc: "AI-driven ordering prevents stockouts.", link: "/solutions/clinic/with-pharmacy" },
        { title: "Staff Audit Loops", desc: "Stop billing errors and inventory loss.", link: "/solutions/clinic/with-pharmacy#audit" },
        { title: "Refill Management", desc: "Proactive reminders for chronic patients.", link: "/solutions/clinic/with-pharmacy#refills" },
        { title: "Precision Tuning", desc: "Detailed margin reports for every drug.", link: "/solutions/clinic/with-pharmacy#reports" }
      ]
    },
    without: {
      label: 'CLINIC · WITHOUT PHARMACY',
      headline: "Grow your clinic's bottom line.",
      description: "Increase clinic EBITDA by 15-20% by adding a pharmacy. Zero setup cost for our compact, high-efficiency pharmacy pods.",
      cards: [
        { title: "Pharmacy Pods", desc: "Compact setups for specialized clinics.", link: "/solutions/clinic/without-pharmacy" },
        { title: "Turnkey Operations", desc: "Licensing, staffing, and stocking handled.", link: "/solutions/clinic/without-pharmacy#turnkey" },
        { title: "Profit Uplift", desc: "Grow revenue without adding patients.", link: "/solutions/clinic/without-pharmacy#roi" },
        { title: "Digital Flow", desc: "E-prescriptions sent directly to dispensing.", link: "/solutions/clinic/without-pharmacy#flow" }
      ]
    }
  }
}

export default function SolutionsMegaMenu() {
  const [activeUser, setActiveUser] = useState<UserType>('hospital')
  const [activePharma, setActivePharma] = useState<PharmacyType>('with')

  const content = megaMenuData[activeUser][activePharma]

  return (
    <div className="flex w-[880px] h-[520px] bg-white rounded-2xl overflow-hidden">
      {/* Column 1: FACILITY TYPE */}
      <div className="w-[220px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">You are a...</h3>
        
        <div className="space-y-2">
          <button
            onMouseEnter={() => setActiveUser('hospital')}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeUser === 'hospital' 
              ? 'bg-white shadow-sm ring-1 ring-slate-200' 
              : 'hover:bg-white/60 opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`p-2 rounded-lg transition-all ${activeUser === 'hospital' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
              <Building2 size={18} />
            </div>
            <div>
              <p className={`font-bold text-sm ${activeUser === 'hospital' ? 'text-slate-900' : 'text-slate-600'}`}>Hospital</p>
              <p className="text-[10px] text-slate-400 font-medium">Inpatient + OPD</p>
            </div>
            {activeUser === 'hospital' && (
              <motion.div layoutId="activeTagComp" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
            )}
          </button>

          <button
            onMouseEnter={() => setActiveUser('clinic')}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left group relative ${
              activeUser === 'clinic' 
              ? 'bg-white shadow-sm ring-1 ring-slate-200' 
              : 'hover:bg-white/60 opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`p-2 rounded-lg transition-all ${activeUser === 'clinic' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
              <Stethoscope size={18} />
            </div>
            <div>
              <p className={`font-bold text-sm ${activeUser === 'clinic' ? 'text-slate-900' : 'text-slate-600'}`}>Clinic</p>
              <p className="text-[10px] text-slate-400 font-medium">OPD / Consult</p>
            </div>
            {activeUser === 'clinic' && (
              <motion.div layoutId="activeTagComp" className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
            )}
          </button>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 px-1">
            <p className="text-[10px] text-slate-400 leading-tight italic">
                Scalable solutions from single clinics to multi-specialty hospitals.
            </p>
        </div>
      </div>

      {/* Column 2: SETUP STATUS */}
      <div className="w-[240px] border-r border-slate-100 p-5 flex flex-col bg-white">
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">
          {activeUser} Setup
        </h3>

        <div className="space-y-3">
          <button
            onMouseEnter={() => setActivePharma('with')}
            className={`group w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
              activePharma === 'with' ? 'bg-blue-50/50 ring-1 ring-blue-100/50' : 'hover:bg-slate-50'
            }`}
          >
            <div className={`p-1.5 rounded-md transition-all ${activePharma === 'with' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400 group-hover:bg-green-50 group-hover:text-green-600'}`}>
              <Pill size={16} />
            </div>
            <div>
              <p className={`text-sm font-bold ${activePharma === 'with' ? 'text-blue-900' : 'text-slate-700'}`}>With Pharmacy</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Needs fixing or full operational takeover.</p>
            </div>
          </button>

          <button
            onMouseEnter={() => setActivePharma('without')}
            className={`group w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
              activePharma === 'without' ? 'bg-blue-50/50 ring-1 ring-blue-100/50' : 'hover:bg-slate-50'
            }`}
          >
            <div className={`p-1.5 rounded-md transition-all ${activePharma === 'without' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-400 group-hover:bg-red-50 group-hover:text-red-600'}`}>
              <PackageX size={16} />
            </div>
            <div>
              <p className={`text-sm font-bold ${activePharma === 'without' ? 'text-blue-900' : 'text-slate-700'}`}>Without Pharmacy</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Zero-capex implementation by MediKloud.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Column 3: CONTENT */}
      <div className="flex-1 p-8 bg-slate-50/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeUser}-${activePharma}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-6">
              <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md mb-3">
                {content.label}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
                {content.headline}
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {content.cards.map((card, i) => (
                <Link
                  key={i}
                  href={card.link}
                  className="group p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="text-[12px] font-bold text-slate-900 group-hover:text-blue-600">{card.title}</h4>
                    <ArrowRight size={10} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">{card.desc}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto">
                <Link 
                    href="/#contact"
                    className="flex items-center justify-between p-3.5 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    <div className="flex items-center gap-3">
                        <Check size={14} className="text-blue-400" />
                        <div>
                            <p className="font-bold text-xs">Connect with an expert</p>
                            <p className="text-[10px] text-slate-400 group-hover:text-blue-50">Book a 20-min strategy session.</p>
                        </div>
                    </div>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
