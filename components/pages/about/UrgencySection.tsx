"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Smartphone, Users } from 'lucide-react'

export function UrgencySection() {
  const points = [
    {
      icon: TrendingUp,
      title: "Organized Expansion",
      desc: "Large retail chains are aggressively moving into Tier 2 cities, bringing corporate-scale operations directly to your neighborhood."
    },
    {
      icon: Smartphone,
      title: "Digital Acceleration",
      desc: "E-pharmacy giants are making it easier for your patients to skip the hospital pharmacy entirely for the convenience of an app."
    },
    {
      icon: Users,
      title: "Talent Migration",
      desc: "Qualified pharmacists are structurally migrating to organized chains for stability, leaving small hospitals with declining service quality."
    }
  ]

  return (
    <section className="section-py-lg bg-section-dark relative overflow-hidden">

      {/* Background Decor — kept as-is per instruction */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo-600/20 rounded-full blur-[100px]" />

      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="eyebrow-wrap">
              <div className="eyebrow-line-r" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
                The Compounding Crisis
              </span>
              <div className="eyebrow-line-l" />
            </div>

            <h2 className="premium-h2 text-white mb-6">
              Why Inaction is a <br />
              <span className="text-indigo-400 font-bold italic">Compounding Loss.</span>
            </h2>
            <p className="premium-p text-slate-300 font-medium max-w-2xl text-center">
              The problem isn't static. Three structural forces are accelerating every quarter, making it harder for independent hospitals to survive.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {points.map((point) => (
            <div
              key={point.title}
              className="card-dark--flush group hover:border-indigo-500/50 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight mb-4">{point.title}</h3>
              <p className="premium-p text-slate-400">{point.desc}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 card-dark--flush rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-indigo-500/50 rounded-full" />
          <p className="text-white text-xl font-bold italic leading-relaxed max-w-4xl mx-auto">
            "A hospital that loses 30 chronic patients this year will find it harder to retain the next 30 next year — because the competitors you are losing to are only getting stronger."
          </p>
        </motion.div>
      </div>
    </section>
  )
}