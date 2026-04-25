"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Settings2, 
  Smile, 
  BellRing 
} from 'lucide-react'


const impactBenefits = [
  {
    id: "01",
    icon: <Settings2 className="w-6 h-6" strokeWidth={1.5} />,
    title: "Exact Brand Delivery",
    desc: "The patient gets exactly what you wrote on the prescription. No swaps. No shortcuts."
  },
  {
    id: "02",
    icon: <Smile className="w-6 h-6" strokeWidth={1.5} />,
    title: "Patients Go Home Without the Hassle",
    desc: "Families focus entirely on patient recovery rather than hunting for medicines across the city."
  },
  {
    id: "03",
    icon: <BellRing className="w-6 h-6" strokeWidth={1.5} />,
    title: "Chronic Patients Never Fall Off",
    desc: "A simple WhatsApp reminder brings them back to you every month, automatically."
  },
  {
    id: "04",
    icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} />,
    title: "They Come Back to You",
    desc: "A seamless delivery experience keeps patients loyal to your hospital for every future consultation and refill."
  }
];

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { premiumEase } from '@/lib/animation';

export const MedicineDeliveriesImpact = () => {
  return (
    <section id="impact" className="section-py relative overflow-hidden">
      <DarkAtmosphere />
      
      <div className="container-page relative z-10">
        <div className="header-lock text-center mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="eyebrow-wrap justify-center mb-8"
          >
            <span className="eyebrow-line-l !bg-indigo-500/30" />
            <span className="eyebrow-text !text-indigo-400">Why It Matters</span>
            <span className="eyebrow-line-r !bg-indigo-500/30" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="premium-h2 !text-white text-balance mb-8"
          >
            Deliver better care. <br className="hidden md:block"/>
            <span className="text-indigo-400">Keep your patients.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
            className="premium-p intro-lock !text-slate-400"
          >
            When you control the delivery, you control the full treatment—from the prescription pad to the patient’s door.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {impactBenefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 lg:p-9 rounded-[2.5rem] hover:bg-white/10 hover:border-indigo-500/50 shadow-sm transition-all duration-500 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative mb-10 flex justify-between items-center">
                 <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                   {benefit.icon}
                 </div>
                 <div className="text-[10px] font-bold text-slate-500 group-hover:text-indigo-300 bg-white/5 px-2.5 py-1 rounded-lg transition-colors border border-white/5">
                    {benefit.id}
                 </div>
              </div>
              
              <h3 className="premium-h3 !text-white !text-2xl mb-3 tracking-tight group-hover:text-indigo-400 transition-colors leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
