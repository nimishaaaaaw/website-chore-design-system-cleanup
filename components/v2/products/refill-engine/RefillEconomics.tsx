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
    icon: <Banknote className="w-6 h-6 text-green-600" />,
    title: "₹0 Initial Setup Cost",
    desc: "There is no upfront fee to activate. We set up the technology and connect your pharmacy at no cost to you."
  },
  {
    icon: <PieChart className="w-6 h-6 text-blue-600" />,
    title: "Flexible Delivery Fees",
    desc: "You have total control. Decide who pays the delivery fee based on your specific patient base."
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-amber-600" />,
    title: "No Fixed Staffing Costs",
    desc: "Stop paying for dedicated riders. We provide the logistics for a transparent, per-order fee."
  },
  {
    icon: <Handshake className="w-6 h-6 text-indigo-600" />,
    title: "The Retention Bonus",
    desc: "The real profit is retention. Every chronic patient you keep is worth ₹90,000+ in lifetime value."
  }
];

export function RefillEconomics() {
  return (
    <section id="economics" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Header Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full mb-8"
            >
              <Handshake className="w-4 h-4 text-green-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-700">Financial Trust</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight"
            >
              Transparent Pricing. <br/>
              <span className="text-blue-600 font-black">Zero Setup Risk.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-12"
            >
              We provide the technology and the logistics at a model that is fair and clear. We only win when your hospital’s delivery network is capturing thousands of rupees in retained revenue.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-slate-900 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10">
                <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-2 leading-none">Strategic Outcome</p>
                <p className="text-xl md:text-2xl text-white font-bold leading-tight uppercase tracking-tight">
                  No hidden fees. No heavy capital investment. Just a smarter way to scale.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Coins className="w-20 h-20 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Model Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {economicModel.map((model, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {model.icon}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight uppercase">{model.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{model.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
            >
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               
               <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                     <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                     <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Revenue Impact</p>
                     <p className="text-xl font-bold tracking-tight uppercase">Retain High-Value Patients</p>
                  </div>
               </div>
               <div className="text-center md:text-right relative z-10">
                  <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-1 leading-none">Lifetime Value (LTV)</p>
                  <p className="text-3xl font-black tracking-tighter">₹90,000<span className="text-blue-300 text-lg uppercase">+</span></p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
