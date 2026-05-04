"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, HardHat, ShieldCheck, Zap, Layers } from 'lucide-react'

export function VisionMission() {
  const beliefs = [
    {
      icon: HardHat,
      title: "Infrastructure, not Software",
      desc: "Software alone doesn't solve operational problems. We deploy people, processes, and technology together."
    },
    {
      icon: ShieldCheck,
      title: "Revenue Alignment",
      desc: "MediKloud only wins when the hospital wins. Our models ensure permanent incentive alignment."
    },
    {
      icon: Zap,
      title: "Data Compounds",
      desc: "Every prescription and refill makes the system smarter. Our moat deepens with every hospital that joins."
    },
    {
      icon: Layers,
      title: "Equal Opportunity",
      desc: "Independent hospitals deserve chain-level operations. Size should not determine quality of care."
    }
  ]

  return (
    <section className="section-py-lg bg-section-surface relative overflow-hidden">
      <div className="container-page">

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-10 relative overflow-hidden group"
          >
            <div className="absolute -top-4 -right-4 p-8 text-brand-600 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
              <Target size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Target size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Our Vision
                </span>
              </div>
              <h3 className="text-h6 md:text-h6 font-semibold leading-loose text-slate-800">
                To build the operating infrastructure that powers every independent hospital in India.
              </h3>
            </div>
          </motion.div>

          {/* Mission — same style as Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-10 relative overflow-hidden group"
          >
            <div className="absolute -top-4 -right-4 p-8 text-brand-600 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
              <Compass size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Compass size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Our Mission
                </span>
              </div>
              <h3 className="text-h6 md:text-h6 font-semibold leading-loose text-slate-800">
                To give independent hospital pharmacies the infrastructure they were never built with.
              </h3>
            </div>
          </motion.div>

        </div>

        {/* Core Beliefs */}
        <div className="space-y-16">
          <div className="text-center flex flex-col items-center">
            <div className="eyebrow-wrap">
              <div className="eyebrow-line-l" />
              <span className="eyebrow-text">How We Think</span>
              <div className="eyebrow-line-r" />
            </div>
            <h2 className="premium-h3 mb-4">Our Core Beliefs</h2>
            <p className="premium-p max-w-2xl mx-auto">The principles that guide every operational decision at MediKloud.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group hover:-translate-y-1 p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                  <belief.icon size={20} />
                </div>
                <h4 className="text-h4 font-bold text-slate-800 mb-3">{belief.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {belief.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}