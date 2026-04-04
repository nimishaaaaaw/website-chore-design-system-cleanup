"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Zap, ShieldAlert, ShieldCheck } from 'lucide-react'

export function RefillCTA() {
  return (
    <section id="cta" className="py-24 lg:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group"
        >
          {/* Decorative backgrounds */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] -z-0" />
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700" />
          
          <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-8"
              >
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Ready to Scale?</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-7xl font-[900] text-white leading-[1.05] mb-8 tracking-tight uppercase">
                Ready to Stop the <br/>
                <span className="text-blue-400">Invisible Patient Bleed?</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-xl">
                Join the clinical leaders who have reclaimed their revenue and modernized their patient care with MediKloud. Experience India's easiest medicine delivery network.
              </p>
              
              <div className="flex flex-col space-y-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto bg-blue-600 text-white px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/50 flex flex-col items-center"
                >
                  <span className="uppercase tracking-tight">Experience the Future — Get a Free Demo</span>
                  <span className="text-[10px] font-bold text-blue-200 mt-1 uppercase tracking-widest leading-none">Book your 15-minute walkthrough. No obligation. Zero setup cost.</span>
                </motion.button>
                <button className="w-full sm:w-auto bg-transparent border border-slate-700 text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-white/5 transition-all uppercase tracking-tight">
                  Talk to a Clinical Fulfillment Expert
                </button>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, rotate: 2 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3.5rem] space-y-10 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Zap className="w-32 h-32 text-white" />
                 </div>
                 
                 <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs opacity-50 mb-4">The MediKloud Promise</h3>
                 
                 <div className="space-y-8 relative z-10">
                    <div className="flex items-center space-x-6 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30 group-hover/item:scale-110 transition-transform">
                        <Zap className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-tight uppercase">Live in &lt; 24 Hours</span>
                    </div>
                    <div className="flex items-center space-x-6 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 group-hover/item:scale-110 transition-transform">
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-tight uppercase">₹0 Setup Fee. Zero Risk.</span>
                    </div>
                    <div className="flex items-center space-x-6 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30 group-hover/item:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-tight uppercase">100% Exact-Brand Delivery Guarantee.</span>
                    </div>
                 </div>
                 
                 <div className="pt-6 border-t border-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] italic">
                   *Trusted by India's Premier Hospital Networks
                 </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
