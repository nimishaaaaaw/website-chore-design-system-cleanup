"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShieldCheck, Users, RefreshCw, CheckCircle2 } from 'lucide-react';

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

export const HospitalPharmacyApproach = () => {
  return (
    <section className="section-py bg-slate-50 border-t border-slate-100">
      <div className="container-page">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-center mb-16 space-y-4"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text text-indigo-600">The solution</span>
            <span className="eyebrow-line-r" />
          </div>
          <h2 className="text-h2 font-black tracking-tight text-slate-900 leading-tight">
            We don't just improve your pharmacy. <br/>
            <span className="text-indigo-600">We rebuild how it operates.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainerLocal} 
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="card p-8 md:p-10 hover:shadow-card-lg transition-all duration-300 group flex flex-col border-indigo-50">
            <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Store className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-h3 font-bold mb-4 text-slate-900 tracking-tight">1. We take over operations completely</h3>
            <ul className="space-y-4 mb-8 text-slate-600 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Licensed pharmacists deployed and managed by us</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Full inventory funded and optimized by our network</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Centralized procurement for maximum margin recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Digital-first billing and reconciliation systems</span>
              </li>
            </ul>
            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <p className="text-sm font-bold text-indigo-900">
                No more vendor calls. No more staff dependency. No more blind spots.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="card p-8 md:p-10 hover:shadow-card-lg transition-all duration-300 group flex flex-col border-indigo-50">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-h3 font-bold mb-4 text-slate-900 tracking-tight">2. Every medicine tracked. Every rupee accounted.</h3>
            <ul className="space-y-4 mb-8 text-slate-600 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Real-time billing vs dispensing reconciliation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Structural anti-theft protocols and zero manual loopholes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Daily automated reports with item-level accuracy</span>
              </li>
            </ul>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm font-bold text-blue-900">
                Leakage doesn't reduce. It stops.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeInUp} className="card p-8 md:p-10 hover:shadow-card-lg transition-all duration-300 group flex flex-col border-indigo-50">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-h3 font-bold mb-4 text-slate-900 tracking-tight">3. Patients stop going outside</h3>
            <ul className="space-y-4 mb-8 text-slate-600 flex-grow">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">100% availability of exactly prescribed medicines</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Integrated sameday home delivery for chronic care</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">No "buy from outside" moments for your patients</span>
              </li>
            </ul>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <p className="text-sm font-bold text-slate-900">
                Every prescription has a fulfillment path within your walls.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Dark Highlight */}
          <motion.div variants={fadeInUp} className="bg-slate-950 p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col border border-white/10">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-md">
              <RefreshCw className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-h3 font-bold mb-4 text-white tracking-tight relative z-10">4. Chronic patients stay for life</h3>
            <ul className="space-y-4 mb-8 text-slate-400 flex-grow relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Automated refill reminders synced with doctor visit cycles</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">1-tap reorder experience via mobile or WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Loyalty programs that keep patients inside your ecosystem</span>
              </li>
            </ul>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative z-10">
              <p className="text-sm font-bold text-white">
                Capture lifetime value, not just the first sale.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

