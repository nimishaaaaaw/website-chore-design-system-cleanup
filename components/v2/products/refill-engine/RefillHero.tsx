"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Activity, LayoutDashboard, Route, ArrowRight } from 'lucide-react'

export function RefillHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[800px] -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 right-[-5%] w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Digital Health Extension</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-[900] text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Enabling Medicine Deliveries from <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Hospital Pharmacies.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-medium">
              We provide the <span className="text-slate-900 font-bold">technology and resources</span> for patients to order directly from you. Bridge the gap between consultation and doorstep care.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mb-16">
              <button className="group flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                Launch Delivery Unit
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold text-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                See How it Works
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <LayoutDashboard className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-3">Strategic Outcome</h3>
                  <p className="text-xl lg:text-2xl text-white font-bold leading-tight max-w-sm">
                    No more lost patients. Just reliable care delivered home.
                  </p>
                </div>
                <div className="h-px md:h-12 w-full md:w-px bg-slate-700" />
                <div className="flex items-center space-x-3 text-slate-400">
                  <span className="text-xs font-bold leading-snug">Empowering <br/> 500+ Clinics</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interaction Illustration */}
          <motion.div 
            className="hidden lg:block lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] p-4 border border-slate-100">
              <div className="bg-slate-50 rounded-[2.8rem] overflow-hidden border border-slate-100">
                <div className="px-8 py-6 flex justify-between items-center bg-white border-b border-slate-50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-100" />
                    <div className="w-3 h-3 rounded-full bg-slate-100" />
                  </div>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">Active Dispatch</span>
                </div>
                <div className="p-8 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-50">
                        <Route className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Smart Routing</p>
                        <p className="text-sm font-bold text-slate-900 italic">Hospital → Patient</p>
                      </div>
                    </div>
                    <div className="relative h-40 bg-white rounded-[2rem] border border-slate-100 flex items-center justify-center overflow-hidden">
                       <div className="absolute inset-0 bg-blue-50/30" />
                       <div className="relative z-10 flex items-center space-x-4">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-xs font-bold shadow-lg">1</div>
                          </div>
                          <div className="w-8 h-px bg-blue-200 border-dashed border-t" />
                          <div className="text-center">
                            <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-xs font-bold shadow-lg">2</div>
                          </div>
                          <div className="w-8 h-px bg-blue-200 border-dashed border-t" />
                          <div className="text-center">
                            <motion.div 
                              className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 text-xs font-bold"
                              animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              3
                            </motion.div>
                          </div>
                       </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
                       <p className="text-2xl font-black text-slate-900">0%</p>
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-tight">Brand Swap</p>
                    </div>
                    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm text-center transform hover:scale-105 transition-transform duration-300">
                       <p className="text-2xl font-black text-blue-600">100%</p>
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-tight">Direct Rev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Accents */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-slate-800"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-blue-400 leading-none mb-1">Patient Status</p>
                  <p className="text-sm font-bold">Refill Successful</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
