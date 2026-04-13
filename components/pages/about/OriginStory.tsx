"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Utensils, AlertCircle, Quote } from 'lucide-react'

export function OriginStory() {
  return (
    <section className="section-py-lg bg-section-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="eyebrow-wrap justify-start !mb-6">
                <div className="eyebrow-line-r" />
                <span className="eyebrow-text">The Origin Story</span>
                <div className="eyebrow-line-l" />
              </div>

              <h2 className="premium-h2 mb-8">
                A Moment of Frustration that <br className="hidden md:block" /> 
                <span className="heading-accent">Millions Know.</span>
              </h2>
              
              <div className="space-y-6">
                <p className="premium-p text-lg !leading-relaxed">
                  MediKloud was born from our founder’s family’s 6-year struggle: traveling 600km back to the hospital just to find medicines unavailable locally.
                </p>
                
                <div className="relative border-l-2 border-brand-200 pl-6 py-2">
                  <p className="text-slate-600 font-bold italic leading-relaxed">
                    "Food came in 10 minutes, but essential medicine required a 600km journey. That contrast changed everything."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Contrast */}
          <div className="w-full lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm"
            >
              <div className="relative z-10 space-y-12">
                {/* Food Delivery */}
                <div className="flex items-start gap-6 relative group">
                  <div className="absolute left-6 top-14 bottom-[-64px] w-[1px] bg-slate-100" />
                  <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm shadow-brand-200/50">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-900">Consumer Tech</h4>
                      <span className="text-[9px] font-black uppercase tracking-wider bg-brand-600 text-white px-2.5 py-1 rounded-full shadow-sm shadow-brand-100">Solved</span>
                    </div>
                    <p className="text-brand-600 font-bold text-[10px] uppercase tracking-widest mb-2">Food / Retail / Instant</p>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      Massive infrastructure surfacing every consumer need instantly.
                    </p>
                  </div>
                </div>

                {/* Medicine Gap */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-bold text-slate-800">Essential Healthcare</h4>
                      <span className="text-[9px] font-black uppercase tracking-wider bg-slate-200 text-slate-600 px-2.5 py-1 rounded-full">Broken</span>
                    </div>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">Medicine / Diagnostics / Manual</p>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm italic">
                      Disconnected hospitals. No delivery, no tracking, and zero digital visibility.
                    </p>
                  </div>
                </div>

                <motion.div 
                   className="p-8 bg-brand-900 rounded-2xl text-white shadow-card-lg relative overflow-hidden"
                >
                   <p className="relative z-10 font-bold text-lg leading-tight text-white">
                      "We built MediKloud to solve this—giving hospitals the infrastructure to fulfill their own prescriptions, anywhere."
                   </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
