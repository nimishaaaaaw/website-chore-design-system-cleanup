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
      image: "/GuruNikhil_Medikloud.webp",
      objectPosition: "center 20%"
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

      {/* Background Atmosphere — using blob primitives */}
      <div className="blob-layer">
        <div className="blob-indigo w-96 h-96 top-[10%] left-[5%]" />
        <div className="blob-blue w-96 h-96 bottom-[10%] right-[5%]" />
      </div>

      <div className="container-page relative z-10 text-center">

        <div className="mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-wrap"
          >
            <div className="eyebrow-line-l" />
            <span className="eyebrow-text">The Builders</span>
            <div className="eyebrow-line-r" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-h2 mb-6"
          >
            The <span className="heading-accent">Team</span>
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
              className="card group hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-10"
            >
              {/* Profile Image */}
              <div className="relative w-48 h-48 mb-8">
                <div className="relative w-full h-full bg-slate-100 rounded-3xl overflow-hidden shadow-card-lg border border-slate-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized={true}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ objectPosition: member.objectPosition ?? 'top' }}
                      priority={i === 0}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-slate-300 font-bold text-h2 uppercase select-none">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`badge ${member.category === 'Founding Team' ? 'badge-brand' : 'badge-slate'} text-xxs uppercase tracking-wider`}>
                  {member.category}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="text-h6 font-bold text-slate-900 tracking-tight mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">{member.role}</p>

              {/* Bio */}
              <p className="premium-p text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
