"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function TeamSection() {
  const team = [
    {
      name: "Yeswanth Asapu",
      role: "Founder & CEO",
      category: "Founding Team",
      bio: "10+ years into building brands, processes, automations & Tech. Ex Skima.ai, Fraazo. Ex-Founder - Green Leaf Stores, Rawder.",
      image: "/founder.webp"
    },
    {
      name: "Guru Nikhil Mangaraju",
      role: "Tech Mastermind",
      category: "Engineering Unit",
      bio: "Building the core technical infrastructure that powers the MediKloud fulfillment network and HMS ecosystem.",
      image: null
    },
    {
      name: "Anuha Kancharana",
      role: "Talent Guru",
      category: "People & Culture",
      bio: "Sourcing and retaining the high-velocity technical talent necessary to maintain MediKloud's automation-first culture.",
      image: "/Anuha_Medikloud.webp"
    },
    {
      name: "Haseeth Vardhan",
      role: "Code Ninja",
      category: "Engineering Unit",
      bio: "Focusing on rapid iteration and technical execution for the MediKloud product suite.",
      image: "/Haseeth_Medikloud.webp"
    },
    {
      name: "Aditya Pratap Singh",
      role: "Automation Hacker",
      category: "Engineering Unit",
      bio: "Designing the automation layers and logic engines that drive efficiency in hospital pharmacy operations.",
      image: "/AdityaSingh_Medikloud.webp"
    }
  ]

  return (
    <section className="section-py-lg bg-slate-50 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-wrap !mb-6"
          >
            <div className="eyebrow-line-r" />
            <span className="eyebrow-text">The Builders</span>
            <div className="eyebrow-line-l" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-h2 mb-6 text-slate-900"
          >
            The <span className="text-brand-indigo-600">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-p max-w-2xl mx-auto"
          >
            Our team combines deep expertise in multi-location retail operations with high-velocity engineering to redefine hospital pharmacy.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="card group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-10 bg-white border border-slate-200"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-48 h-48 mb-8 pb-2">
                {/* The Visible Image Box */}
                <div className="relative w-full h-full bg-slate-100 rounded-[40px] overflow-hidden shadow-card-lg border border-slate-200">
                  {member.image ? (
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized={true}
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      priority={i === 0}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-slate-300 font-bold text-4xl uppercase select-none">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tag / Category */}
              <div className="mb-4">
                 <span className={`badge ${member.category === 'Founding Team' ? 'badge-brand' : 'badge-slate'} text-[10px] uppercase tracking-wider`}>
                    {member.category}
                 </span>
              </div>

              {/* Title & Role */}
              <h3 className="premium-h3 !text-2xl mb-1">{member.name}</h3>
              <p className="text-brand-indigo-600 font-bold text-[11px] uppercase tracking-[0.2em] mb-6">{member.role}</p>
              
              {/* Bio */}
              <p className="premium-p !text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
