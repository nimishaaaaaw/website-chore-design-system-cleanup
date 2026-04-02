"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Phone, CheckCircle2, ShieldCheck, 
  FileText, Users, Package, Lock, TrendingUp, HeartPulse, Server, Zap, Activity, Clock, Smile
} from 'lucide-react'
import { useContactModal } from '@/hooks/use-contact-modal'
import { ParticleNetwork } from '@/components/v2/ParticleNetwork'

const deployItems = [
  { icon: Users, label: 'Expert Pharmacists' },
  { icon: Package, label: 'Fully-Funded Stock' },
  { icon: Activity, label: 'Clinical Tech' },
  { icon: ShieldCheck, label: 'Total Compliance' }
]

const secureItems = [
  { icon: HeartPulse, label: '100% Clinical Focus' },
  { icon: Clock, label: 'Your Time' },
  { icon: CheckCircle2, label: 'Zero Hassle' },
  { icon: TrendingUp, label: 'Maximized Profits' },
  { icon: Smile, label: 'Happy Patients' }
]

export function MPHero() {
  const { openModal } = useContactModal()

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-[70px] pb-2 md:pt-[80px] md:pb-4 lg:pt-[90px] lg:pb-6">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-200/20 rounded-full blur-[80px]" aria-hidden="true" />
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-indigo-200/20 rounded-full blur-[80px]" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <div className="lg:col-span-7 xl:col-span-6 text-left lg:-translate-y-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mb-5"
            >
              <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100/80 px-4 py-1.5 rounded-full border border-indigo-200/60 shadow-sm backdrop-blur-sm">
                Zero Capex · Fully Managed
              </span>
            </motion.div>

            {/* ── H1 ── */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-5 lg:mb-6 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
            >
              <span className="block font-bold leading-[1.1] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-1 drop-shadow-sm">
                 We set up & completely operate
              </span>
              <span
                className="block font-black leading-[1.1] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-1 drop-shadow-sm"
                style={{ color: '#4F46E5', filter: 'drop-shadow(0px 2px 4px rgba(79, 70, 229, 0.1))' }}
              >
                tech-driven pharmacies
              </span>
              <span className="block text-h3 sm:text-h2 font-bold leading-[1.3] tracking-[-0.01em] text-slate-500 mt-2.5 md:mt-3 max-w-xl">
                for independent hospitals &amp; clinics.
              </span>
            </motion.h1>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5"
            >
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-action text-white font-bold rounded-xl shadow-btn hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-[15px] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full sm:w-auto"
              >
                <Phone size={15} className="opacity-80" />
                Partner With Us
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN (ILLUSTRATIVE FLOW UI) ── */}
          <div className="lg:col-span-5 xl:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-full max-w-md"
            >
              {/* Outer Glow & Border */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent blur-xl" />
              
              <div className="relative bg-[#f8fafc]/90 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-5 lg:p-7 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] overflow-hidden">
                
                {/* Dashboard Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-50" />

                <div className="relative z-10 flex flex-col">
                  
                  {/* TOP: Input Generator (We Deploy) */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-blue-100/80 p-1.5 rounded-lg border border-blue-200/50">
                        <ShieldCheck size={16} className="text-blue-600" />
                      </div>
                      <span className="text-sm font-extrabold text-slate-800 tracking-tight">We Bring</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {deployItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1), type: 'spring' }}
                          className="group relative flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i }}
                            className="bg-blue-50 p-1.5 rounded-md text-blue-600 shrink-0"
                          >
                            <item.icon size={14} strokeWidth={2.5} />
                          </motion.div>
                          <span className="text-[12px] font-bold text-slate-700 relative z-10">{item.label}</span>
                          
                          {/* Animated scanline effect inside pill */}
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent skew-x-12"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE: Operations Engine Conduit */}
                  <div className="relative h-16 my-2 flex items-center justify-center">
                     {/* Vertical Flow Line mapping Top to Bottom */}
                     <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-[2px] bg-slate-200/50">
                       <motion.div 
                         animate={{ y: ['-100%', '150%'] }} 
                         transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                         className="h-10 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                       />
                     </div>
                     
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-3 shadow-lg shadow-indigo-500/30 border-2 border-white flex items-center justify-center mt-1 mb-1 before:absolute before:inset-0 before:rounded-xl before:ring-4 before:ring-indigo-100"
                     >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                          <Zap size={22} className="text-white drop-shadow-md" />
                        </motion.div>
                     </motion.div>
                  </div>

                  {/* BOTTOM: Output Success (You Secure) */}
                  <div className="relative mt-2">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-emerald-100/80 p-1.5 rounded-lg border border-emerald-200/50">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-sm font-extrabold text-slate-800 tracking-tight">Clinics &amp; Hospitals Gain</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {secureItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + (i * 0.1), type: 'spring' }}
                          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/50 shadow-sm overflow-hidden"
                        >
                          <div className="text-emerald-600 relative z-10">
                            <item.icon size={14} strokeWidth={2.5} />
                          </div>
                          <span className="text-[12px] font-bold text-slate-800 relative z-10">{item.label}</span>
                          
                          {/* Subdued ping animation on outputs */}
                          <motion.div
                             animate={{ opacity: [0, 0.5, 0] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                             className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-200/40 to-emerald-400/0 pointer-events-none"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
