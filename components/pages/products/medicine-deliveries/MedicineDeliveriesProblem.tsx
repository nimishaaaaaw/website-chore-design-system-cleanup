"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  HeartHandshake, 
  ShieldCheck, 
  FileText, 
  Coins 
} from 'lucide-react'

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';

const anatomyItems = [
  {
    icon: <TrendingDown className="w-6 h-6" strokeWidth={1.5} />,
    title: "Lost After the Consultation",
    desc: "When a patient leaves to find a pharmacy, they often don't come back to your hospital for refills."
  },
  {
    icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
    title: "Your Patient's Recovery Gets Complicated",
    desc: "Recovering families are forced to chase down pharmacies instead of focusing on rest and recovery."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: "Chemists Change What You Prescribed",
    desc: "External chemists regularly swap your prescribed brands for cheaper alternatives to maximise their margin."
  },
  {
    icon: <FileText className="w-6 h-6" strokeWidth={1.5} />,
    title: "No Visibility on Refills",
    desc: "You have no way of knowing if your chronic patients are actually taking the medicines you prescribed."
  }
];

export const MedicineDeliveriesProblem = () => {
  return (
    <section id="insights" className="bg-section-alt border-y border-slate-100 section-py relative overflow-hidden">
      {/* Gold Atmospheric Primitives */}
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Context */}
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="eyebrow-wrap mb-8 lg:justify-start"
            >
              <span className="eyebrow-line-r" />
              <span className="eyebrow-text uppercase text-indigo-600">Clinical Insight</span>
              <span className="eyebrow-line-l" />
            </motion.div>
            
            <div className="max-w-[900px]">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="premium-h2 text-balance mb-10"
              >
                Your Expertise Travels Cities. <br className="hidden md:block"/>
                <span className="text-indigo-600">Your Medicine Should Too.</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
              className="premium-p text-slate-500 font-medium max-w-[800px] leading-relaxed mb-12"
            >
              Patients will travel across the city to consult with a doctor they trust. But for medicines, they choose the most convenient option—and their loyalty quietly shifts to third-party chemists and delivery apps.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.2 }}
              className="bg-slate-50 border-l-4 border-indigo-600 rounded-r-[2rem] p-8 lg:p-10 text-slate-800 shadow-sm relative overflow-hidden group ring-1 ring-slate-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 relative z-10">Strategic Insight</h4>
              <p className="text-[17px] font-semibold leading-relaxed relative z-10 text-slate-700">
                Your care shouldn't stop at the hospital door. Patients need a seamless path from your prescription to their home.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Anatomy List */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 shadow-card-lg relative group ring-1 ring-black/[0.03] overflow-hidden flex flex-col h-full"
            >
              <div className="mb-6 pb-5 border-b border-slate-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-[0.15em]">Operational Leakage Points</h3>
              </div>
              
              <div className="space-y-7 pb-8 relative z-10">
                {anatomyItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: premiumEase, delay: index * 0.1 }}
                    className="flex gap-5 group/item"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border bg-slate-50 border-slate-100 text-indigo-600 group-hover/item:bg-indigo-50 group-hover/item:border-indigo-100 group-hover/item:shadow-sm group-hover/item:scale-105 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover/item:text-indigo-600 transition-colors tracking-tight">{item.title}</h3>
                      <p className="text-sm font-medium text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: premiumEase, delay: 0.5 }}
                className="mt-auto pt-10 rounded-none rounded-b-[2.5rem] p-8 lg:p-12 -mx-8 lg:-mx-12 -mb-8 lg:-mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 overflow-hidden border-t border-slate-200/20 shadow-inner"
              >
                <DarkAtmosphere withMouseEffect={false} />

                <div className="flex items-center space-x-4 text-white relative z-10">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 text-emerald-400 backdrop-blur-md">
                    <TrendingUp className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-0.5">Strategy</span>
                    <span className="text-sm font-bold text-white uppercase tracking-tight">The Cost of Leakage</span>
                  </div>
                </div>
                <div className="text-center sm:text-right relative z-10">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1 tracking-[0.2em] leading-none">Impact per Patient</span>
                  <span className="stat-number text-4xl text-white">₹90,000<span className="text-indigo-500 ml-1">+</span></span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
