"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Banknote, 
  PieChart, 
  PiggyBank, 
  Handshake, 
  TrendingUp, 
  Coins 
} from 'lucide-react'

const economicModel = [
  {
    icon: <Banknote className="w-6 h-6" />,
    color: 'text-green-600',
    title: "₹0 Initial Setup Cost",
    desc: "There is no upfront fee to activate. We set up the technology and connect your pharmacy at no cost to you."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    color: 'text-blue-600',
    title: "Flexible Delivery Fees",
    desc: "You have total control. Decide who pays the delivery fee based on your specific patient base."
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    color: 'text-amber-600',
    title: "No Fixed Staffing Costs",
    desc: "Stop paying for dedicated riders. We provide the logistics for a transparent, per-order fee."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    color: 'text-indigo-600',
    title: "The Retention Bonus",
    desc: "The real profit is retention. Every chronic patient you keep is worth ₹90,000+ in lifetime value."
  }
];

export const MedicineDeliveriesEconomics = () => {
  return (
    <section id="economics" className="bg-section-alt py-section-sm md:py-section relative overflow-hidden border-t border-slate-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] z-0" aria-hidden="true" />
      
      <div className="container-page relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Header Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow-wrap-left mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Financial Trust</span>
              <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-blue-500 rounded-full opacity-60 ml-4" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section md:text-5xl text-balance mb-8"
            >
              Transparent Pricing. <br className="hidden md:block"/>
              <span className="text-blue-600">Zero Setup Risk.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-slate-500 font-medium leading-relaxed mb-12 text-balance"
            >
              We provide the technology and the logistics at a model that is fair and clear. We only win when your hospital’s delivery network is capturing thousands of rupees in retained revenue.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 bg-slate-950 rounded-[2rem] relative overflow-hidden group shadow-2xl ring-1 ring-white/10"
            >
              {/* Blueprint Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-3 leading-none">Strategic Outcome</p>
                <p className="text-xl md:text-2xl text-white font-bold leading-tight tracking-tight text-balance">
                  No hidden fees. No heavy capital investment. Just a smarter way to scale.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Coins className="w-20 h-20 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Model Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
              {economicModel.map((model, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-card-md hover:border-blue-100 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border shadow-sm group-hover:scale-110 transition-all duration-500 bg-slate-50 ${model.color} group-hover:bg-blue-600 group-hover:text-white`}>
                    {model.icon}
                  </div>
                  <h3 className="text-h3 font-bold text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{model.title}</h3>
                  <p className="text-body text-slate-600 font-medium leading-relaxed">{model.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-950 p-8 md:p-10 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden ring-1 ring-white/10"
            >
               {/* Blueprint Grid Overlay */}
               <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

               <div className="flex items-center space-x-5 relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-emerald-400">
                     <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                     <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1.5">Impact Strategy</p>
                     <p className="text-xl md:text-2xl font-bold tracking-tight">Retain High-Value Patients</p>
                  </div>
               </div>
               <div className="text-center md:text-right relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 w-full md:w-auto">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1.5 leading-none">Lifetime Value (LTV)</p>
                  <p className="text-4xl font-bold tracking-tighter text-white">₹90,000<span className="text-blue-500 ml-1">+</span></p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
