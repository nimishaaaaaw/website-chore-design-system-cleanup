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

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const economicModel = [
  {
    icon: <Banknote className="w-6 h-6" strokeWidth={1.5} />,
    title: "₹0 Initial Setup Cost",
    desc: "There is no upfront fee to activate. We set up the technology and connect your pharmacy at no cost to you."
  },
  {
    icon: <PieChart className="w-6 h-6" strokeWidth={1.5} />,
    title: "You Decide Who Pays for Delivery",
    desc: "Choose whether the patient pays the delivery fee or you absorb it. It's your call, every time."
  },
  {
    icon: <PiggyBank className="w-6 h-6" strokeWidth={1.5} />,
    title: "No Fixed Staffing Costs",
    desc: "Stop paying for dedicated riders. We provide the logistics for a transparent, per-order fee."
  },
  {
    icon: <Handshake className="w-6 h-6" strokeWidth={1.5} />,
    title: "Every Patient You Keep Is Worth More",
    desc: "Every chronic patient you keep delivering to is worth ₹90,000+ in lifetime prescription value."
  }
];

export const MedicineDeliveriesEconomics = () => {
  return (
    <section id="economics" className="bg-section-alt section-py relative overflow-hidden border-t border-slate-100">
      {/* Gold Atmospheric Primitives */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Header Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="eyebrow-wrap mb-8 lg:justify-start"
            >
              <span className="eyebrow-line-r" />
              <span className="eyebrow-text">How It Works</span>
              <span className="eyebrow-line-l" />
            </motion.div>
            
            <div className="max-w-[900px]">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="premium-h2 text-balance mb-8"
              >
                Transparent Pricing. <br className="hidden md:block"/>
                <span className="text-indigo-600">Zero Setup Risk.</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
              className="premium-p intro-lock mb-12"
            >
              We provide the technology and the logistics. You pay only per successful delivery—nothing upfront, no risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.2 }}
              className="p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group shadow-card-lg ring-1 ring-white/10"
            >
              <DarkAtmosphere withMouseEffect={false} />
              
              <div className="relative z-10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-3 leading-none">Our Promise</p>
                <p className="text-xl md:text-2xl text-white font-bold leading-tight tracking-tight text-balance">
                  No hidden fees. No upfront investment. You only pay when a delivery is made.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-all z-10">
                <Coins className="w-20 h-20 text-white" strokeWidth={1.5} />
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
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: premiumEase, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-white shadow-sm hover:shadow-card-lg hover:border-indigo-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border shadow-sm group-hover:scale-110 transition-all duration-500 bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
                    {model.icon}
                  </div>
                  <h3 className="premium-h3 !text-2xl mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">{model.title}</h3>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">{model.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
