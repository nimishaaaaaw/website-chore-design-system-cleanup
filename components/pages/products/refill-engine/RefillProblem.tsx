"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  HeartHandshake, 
  ShieldCheck, 
  FileText, 
  Coins 
} from 'lucide-react'

const anatomyItems = [
  {
    icon: <TrendingDown className="w-6 h-6 text-red-500" />,
    title: "The 'Go Outside' Leak",
    desc: "Every time staff says 'Get it from outside,' you're handing over a voucher for your competitors."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-indigo-500" />,
    title: "The Caregiver’s Burden",
    desc: "Recovering families shouldn't hunt for pharmacies. Don't force them to trust an aggregator."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Total Brand Integrity",
    desc: "Online apps swap your prescriptions for inventory. We deliver the exact trusted brand."
  },
  {
    icon: <FileText className="w-6 h-6 text-slate-500" />,
    title: "Fragmented Clinical Records",
    desc: "Refill loops break when patients buy elsewhere. You lose data on treatment adherence."
  },
  {
    icon: <Coins className="w-6 h-6 text-green-600" />,
    title: "Invisible Revenue Drift",
    desc: "A single chronic patient lost to convenience is a ₹90,000+ drain on your hospital’s value."
  }
];

export function RefillProblem() {
  return (
    <section id="insights" className="bg-section-alt border-y border-slate-100 section-py relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] z-0" aria-hidden="true" />
      
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow-wrap mb-8 lg:justify-start"
            >
              <span className="eyebrow-text uppercase text-indigo-600">Clinical Insight</span>
              <span className="eyebrow-line-l bg-indigo-200/60" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section md:text-5xl text-balance mb-10"
            >
              Your Expertise Travels Cities. <br className="hidden md:block"/>
              <span className="text-blue-600">Your Medicine Should Too.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Patients will travel hundreds of miles to consult with a doctor they trust. But for their medicine? They choose the nearest, most convenient option—even if it compromises your care plan.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-blue-600 rounded-[1.5rem] lg:rounded-[2rem] p-8 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-3 relative z-10">Strategic Insight</h4>
              <p className="text-lg font-bold leading-relaxed relative z-10 text-blue-50">
                Close the service gap. Ensure the care you provide makes it all the way to the patient’s hands.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Anatomy List */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-sm relative group ring-1 ring-black/[0.03]"
            >
              <div className="absolute top-0 right-12 translate-y-[-50%] bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl z-10">
                The Anatomy of a Lost Patient
              </div>
              
              <div className="space-y-10 mt-4 relative z-10">
                {anatomyItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group/item"
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm group-hover/item:scale-110 group-hover/item:shadow-md transition-all duration-500 ${
                      index === 0 ? 'bg-rose-50 text-rose-600 border-rose-100' : 
                      index === 1 ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                      index === 2 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                      index === 3 ? 'bg-slate-50 text-slate-600 border-slate-100' :
                      'bg-blue-50 text-blue-600 border-blue-100'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-h3 font-bold text-slate-800 mb-1.5 group-hover/item:text-blue-600 transition-colors tracking-tight">{item.title}</h3>
                      <p className="text-body text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-slate-950 rounded-[1.5rem] p-7 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 overflow-hidden"
              >
                {/* Blueprint Background */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                <div className="flex items-center space-x-4 text-white relative z-10">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-emerald-400 backdrop-blur-md">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-0.5">Strategy</span>
                    <span className="text-sm font-bold text-white">Stop the Revenue Drift</span>
                  </div>
                </div>
                <div className="text-center sm:text-right relative z-10">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1 tracking-[0.2em] leading-none">Impact per Patient</span>
                  <span className="text-4xl font-bold text-white tracking-tighter">₹90,000<span className="text-blue-500 ml-1">+</span></span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
