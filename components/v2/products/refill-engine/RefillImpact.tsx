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
    icon: <Settings2 className="w-6 h-6 text-blue-600" />,
    title: "You Control the Quality",
    desc: "No brand-swapping. The patient gets the exact medicine you prescribed, directly from your pharmacy."
  },
  {
    id: "02",
    icon: <Smile className="w-6 h-6 text-indigo-600" />,
    title: "Stress-Free for Families",
    desc: "Families don't have to leave the patient's side to hunt for medicines. We deliver it to their door."
  },
  {
    id: "03",
    icon: <BellRing className="w-6 h-6 text-rose-600" />,
    title: "Patients Never Miss a Dose",
    desc: "Our system sends simple reminders for chronic refills, allowing patients to refill with one tap."
  },
  {
    id: "04",
    icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    title: "A Modern Hospital Experience",
    desc: "Doorstep delivery is the new standard of professional care that patients appreciate and remember."
  }
];

export function RefillImpact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="impact" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_0.5px,transparent_0.5px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">The Modern Standard</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Why Delivering from <br/>Your Hospital Matters.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-medium leading-relaxed"
          >
            When your hospital handles the delivery, the quality of care never stops. <br className="hidden md:block" /> 
            It’s better for your patients, easier for their families, and more reliable for your doctors.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {impactBenefits.map((benefit) => (
            <motion.div 
              key={benefit.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="relative mb-8">
                 <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-blue-200">
                   {benefit.icon}
                 </div>
                 <span className="absolute -top-2 -right-2 text-[10px] font-black text-slate-300 group-hover:text-blue-200 transition-colors">{benefit.id}</span>
              </div>
              
              <h3 className="text-lg font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tight">{benefit.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
