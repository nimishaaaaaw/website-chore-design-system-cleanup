"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, RefreshCw, Truck } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction as keyof typeof directions] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ClinicWP_UnifiedEcosystem = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Everything works together
          </h2>
          <p className="text-xl text-slate-500">Not in silos. A unified ecosystem for your clinic.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Activity, title: "Managed Pharmacy", desc: "We operate completely—people, inventory, and processes.", color: "blue", colorClass: "text-blue-600", bgClass: "from-blue-50" },
            { icon: Database, title: "Free HMS", desc: "Digital prescriptions and instant pharmacy integration. Where it starts and stays.", color: "teal", colorClass: "text-teal-600", bgClass: "from-teal-50" },
            { icon: RefreshCw, title: "Refill Engine", desc: "Predicts refill timing and triggers repeat orders. Ensures patients don't drift.", color: "emerald", colorClass: "text-emerald-600", bgClass: "from-emerald-50" },
            { icon: Truck, title: "Home Delivery", desc: "Same-day delivery. Convenience without losing control to external apps.", color: "indigo", colorClass: "text-indigo-600", bgClass: "from-indigo-50" }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 relative z-10 ${item.colorClass}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-600 relative z-10">{item.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
