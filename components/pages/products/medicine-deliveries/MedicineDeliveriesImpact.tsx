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

export const MedicineDeliveriesImpact = () => {
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
    <section id="impact" className="bg-white border-y border-slate-100 section-py relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] z-0" aria-hidden="true" />
      
      <div className="container-page relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="eyebrow-wrap mb-8"
          >
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-blue-500 rounded-full opacity-60" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The Modern Standard</span>
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-blue-500 rounded-full opacity-60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section md:text-5xl lg:text-6xl text-balance mb-8"
          >
            Why Delivering from <br className="hidden md:block"/>
            <span className="text-blue-600 font-black">Your Hospital Matters.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg md:text-xl text-slate-500 font-medium max-w-5xl mx-auto leading-relaxed text-balance"
          >
            When your hospital handles the delivery, the quality of care never stops. 
            It’s better for your patients, easier for their families, and more reliable for your doctors.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {impactBenefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white p-7 lg:p-9 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-md hover:border-blue-100 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative mb-10 flex justify-between items-center">
                 <div className={`w-12 h-12 ${
                   index === 0 ? 'bg-blue-50 text-blue-600 border-blue-100' :
                   index === 1 ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                   index === 2 ? 'bg-rose-50 text-rose-600 border-rose-100' :
                   'bg-amber-50 text-amber-600 border-amber-100'
                 } rounded-xl flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                   {benefit.icon}
                 </div>
                 <div className="text-[10px] font-black text-slate-200 group-hover:text-blue-100 bg-slate-50 px-2 py-1 rounded-lg transition-colors border border-slate-100">
                    {benefit.id}
                 </div>
              </div>
              
              <h3 className="text-h3 font-bold text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors leading-tight">
                {benefit.title}
              </h3>
              <p className="text-body text-slate-600 font-medium leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
