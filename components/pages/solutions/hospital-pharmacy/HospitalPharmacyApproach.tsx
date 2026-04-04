"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShieldCheck, Users, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Section, Badge, fadeUp, staggerContainer, scaleIn } from './HospitalPharmacyShared';

export const HospitalPharmacyApproach = () => {
  return (
    <Section>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp} 
        className="text-center mb-16"
      >
        <Badge color="blue">The Solution</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
          We don’t improve your pharmacy.<br/>
          <span className="text-blue-600">We rebuild how it operates.</span>
        </h2>
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer} 
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Card 1 */}
        <motion.div variants={scaleIn} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
          <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Store className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">1. We take over operations completely</h3>
          <ul className="space-y-3 mb-6 text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Licensed pharmacists deployed by us</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Inventory funded and managed by us</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Procurement handled centrally</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Billing tightly controlled</li>
          </ul>
          <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl mt-auto">
            No more vendor calls. No more staff dependency. No more blind spots.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={scaleIn} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
          <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Every medicine tracked. Every rupee accounted.</h3>
          <ul className="space-y-3 mb-6 text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Real-time billing vs dispensing reconciliation</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Zero manual loopholes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Structural anti-theft system</li>
          </ul>
          <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl mt-auto">
            Leakage doesn’t reduce. It stops.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={scaleIn} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
          <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Patients stop going outside</h3>
          <ul className="space-y-3 mb-6 text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> Exact prescribed medicines always available</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> If not → same-day home delivery</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-500" /> No “buy from outside” moments</li>
          </ul>
          <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl mt-auto">
            Every prescription has a fulfillment path.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div variants={scaleIn} className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden flex flex-col">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/20 blur-3xl rounded-full" />
          <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RefreshCw className="w-8 h-8 text-teal-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">4. Chronic patients never disappear again</h3>
          <ul className="space-y-3 mb-6 text-slate-300 relative z-10">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Automated refill reminders</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400" /> 1-tap reorder experience</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-teal-400" /> Home delivery built-in</li>
          </ul>
          <p className="font-medium text-white bg-white/10 p-4 rounded-xl relative z-10 mt-auto">
            You don’t just capture the first sale. You capture lifetime value.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};
