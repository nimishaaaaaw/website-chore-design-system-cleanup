"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useContactModal } from '@/hooks/use-contact-modal'

interface Benefit {
  title: string
  desc: string
  icon?: React.ElementType
}

interface LandingPageProps {
  category: string
  title: string
  subtitle: string
  description: string
  benefits: Benefit[]
  accentColor?: string
  children?: React.ReactNode
}

export default function LandingPageTemplate({
  category,
  title,
  subtitle,
  description,
  benefits,
  accentColor = "blue",
  children
}: LandingPageProps) {
  const { openModal } = useContactModal()

  const accentClass = accentColor === "blue" ? "text-blue-600 bg-blue-50 border-blue-100" : "text-indigo-600 bg-indigo-50 border-indigo-100"
  const buttonClass = accentColor === "blue" ? "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20" : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20"

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10 opacity-30">
            <div className={`absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[60px] ${accentColor === "blue" ? "bg-blue-400" : "bg-indigo-400"}`} />
            <div className="absolute top-40 right-1/4 w-80 h-80 bg-violet-400 rounded-full blur-[60px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest mb-8"
                >
                  <ArrowLeft size={14} /> Back to Home
                </Link>

                <div className={`inline-block px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-6 ${accentClass}`}>
                  {category}
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                  {title} <span className={`italic border-b-4 ${accentColor === "blue" ? "border-blue-600/20" : "border-indigo-600/20"}`}>{subtitle}</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openModal({
                    badge: "Partnership",
                    title: "Protect your clinic's revenue.",
                    description: "Book an audit with our experts to see how much margin you can recover.",
                    btnText: "Book My Free Audit"
                  })}
                    className={`px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 ${buttonClass}`}
                  >
                    Get Started Now <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-green-500" /> Free Implementation Plan
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Everything you need to <span className="text-blue-600">scale.</span></h2>
              <p className="text-slate-500 font-medium">Built for modern healthcare operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${accentColor === "blue" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"}`}>
                    {benefit.icon ? <benefit.icon size={24} /> : <CheckCircle2 size={24} />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {children}

        {/* QUICK CTA */}
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div className={`p-12 rounded-[40px] bg-slate-900 relative overflow-hidden text-center`}>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">Ready to see it in action?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join 500+ clinics and hospitals already supercharging their clinical operations with MediKloud.
                        </p>
                        <button
                            onClick={() => openModal({
                    badge: "Partnership",
                    title: "Protect your clinic's revenue.",
                    description: "Book an audit with our experts to see how much margin you can recover.",
                    btnText: "Book My Free Audit"
                  })}
                            className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-[0.95]"
                        >
                            Book My Consultation →
                        </button>
                    </div>
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[60px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[60px]" />
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
