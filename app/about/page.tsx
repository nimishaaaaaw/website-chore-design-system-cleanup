"use client"

import React from 'react'
import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Info, Target, Users, Globe, Building2, ShieldCheck, HeartPulse, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const storySections = [
    {
        icon: Building2,
        title: "The Problem",
        content: "Hospital and clinic pharmacies in India have long been fragmented, manual, and prone to significant leakages. Most facility owners were losing 30-40% of their potential income due to inefficient operations and pilferage.",
        color: "text-rose-600 bg-rose-50"
    },
    {
        icon: Target,
        title: "Our Mission",
        content: "We set out to create a 'plug-and-play' operational layer that removes the friction of managing a pharmacy. Our mission is to transform these sub-optimal units into high-margin assets for healthcare providers.",
        color: "text-blue-600 bg-blue-50"
    },
    {
        icon: ShieldCheck,
        title: "The MediKloud Layer",
        content: "By combining proprietary AI-HMS software with turnkey staffing and inventory management, we take full responsibility for the bottom line. No more searching for staff, no more stockouts, and absolute zero tolerance for leakage.",
        color: "text-emerald-600 bg-emerald-50"
    }
]

export default function AboutPage() {
  return (
    <LandingPageTemplate
      category="Company"
      title="Building the backbone of"
      subtitle="Indian Healthcare."
      description="MediKloud is the operational infrastructure layer for modern clinics and hospitals. We've built the system that handles everything—from inventory to staffing—so you can focus on patient care."
      accentColor="blue"
      benefits={[
        { title: "Our Mission", desc: "Empowering healthcare providers with modern retail infrastructure.", icon: Target },
        { title: "The Team", desc: "Built by experts in healthcare, logistics, and supply chain.", icon: Users },
        { title: "Vizag Rooted", desc: "Proudly started in Visakhapatnam, scaling across India.", icon: Globe },
        { title: "Transparency", desc: "No hidden costs, no legacy tech—just pure performance.", icon: Info }
      ]}
    >
        {/* Custom Story Section */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
                            A story built on <br />
                            <span className="text-blue-600 italic">Operational Integrity.</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                            Founded in 2021, MediKloud was born out of a simple observation: retail pharmacies within hospitals are significantly harder to manage than they appear. 
                        </p>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            We didn't just want to build 'another software'. We wanted to build an engine that takes away the headache of operations, recruitment, and procurement entirely.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {storySections.map((section, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group"
                            >
                                <div className="flex gap-6">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110",
                                        section.color
                                    )}>
                                        <section.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-white text-3xl font-black mb-16 tracking-tight flex items-center justify-center gap-3">
                    <HeartPulse className="text-rose-500" /> Our impact by the numbers.
                </h2>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { label: "Facilities Transformed", val: "500+", context: "Clinics & Hospitals" },
                        { label: "Revenue Leakage Fix", val: "0.0%", context: "Strict AI-Audit Control" },
                        { label: "Procurement Savings", val: "15%+", context: "Chain-Scale Advantage" },
                        { label: "Operational Speed", val: "7 Days", context: "Go-Live Efficiency" }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-4xl font-black text-white mb-2 leading-none">{stat.val}</div>
                            <div className="text-u-xs font-bold text-blue-400 uppercase tracking-u-widest mb-4">{stat.label}</div>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{stat.context}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </LandingPageTemplate>
  )
}
