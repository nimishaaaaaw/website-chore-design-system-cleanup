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
    <section id="insights" className="py-24 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Side: Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full mb-8"
            >
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">Clinical Insight</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight"
            >
              Your Expertise Travels Cities. <br/>
              <span className="text-slate-400">Your Medicine Should Too.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-10"
            >
              Patients will travel hundreds of miles to consult with a doctor they trust. But for their medicine? They choose the nearest, most convenient option—even if it compromises your care plan.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl"
            >
              <h4 className="text-blue-900 font-bold mb-2 text-sm uppercase tracking-widest">Strategic Insight</h4>
              <p className="text-blue-700 font-medium leading-relaxed">
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
              className="bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100 relative"
            >
              <div className="absolute top-0 right-12 translate-y-[-50%] bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                The Anatomy of a Lost Patient
              </div>
              
              <div className="space-y-10 mt-4">
                {anatomyItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center space-x-3 text-slate-900">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-tight">Stop the Revenue Drift</span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-[10px] font-black text-slate-400 uppercase block mb-1 tracking-widest leading-none">Impact per Chronic Patient</span>
                  <span className="text-2xl font-black text-slate-900">₹90,000+ <span className="text-blue-600">LTV</span></span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
