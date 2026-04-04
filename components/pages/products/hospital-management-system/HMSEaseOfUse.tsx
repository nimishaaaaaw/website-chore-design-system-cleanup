"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  MousePointerClick, 
  Layout, 
  Rocket,
  Activity,
  Calendar,
  HeartPulse
} from 'lucide-react';

export const HMSEaseOfUse = () => {
  return (
    <section className="relative py-section-sm md:py-section bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Mobile UI Visual Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-float border-[6px] border-slate-800"
            >
              {/* Phone Screen */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative shadow-inner">
                {/* Status Bar Mock */}
                <div className="h-6 w-full bg-blue-600 flex justify-center">
                  <div className="w-24 h-4 bg-slate-900 rounded-b-xl absolute top-0"></div>
                </div>
                
                {/* App Header */}
                <div className="bg-blue-600 px-5 pt-4 pb-6 text-white rounded-b-3xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="font-black text-[10px] uppercase">Dr</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-100 opacity-80 uppercase tracking-widest font-bold">Good Morning</p>
                        <p className="text-xs font-bold">Dr. Sharma</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* Quick Stats */}
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20 flex justify-between">
                    <div>
                      <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Patients</p>
                      <p className="text-lg font-black">24</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Wait Time</p>
                      <p className="text-lg font-black">8m</p>
                    </div>
                  </div>
                </div>

                {/* App Body - One Tap Actions */}
                <div className="p-5">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-3">Next Patient</h4>
                  
                  {/* Active Patient Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-success"></div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm">Aarav Patel</h5>
                        <p className="text-[10px] font-bold text-slate-500 mt-1 tracking-wide">M • 34 yrs • Fever</p>
                      </div>
                      <span className="bg-emerald-50 text-success text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider border border-emerald-100">Waiting</span>
                    </div>
                    {/* One Tap Button */}
                    <button className="w-full bg-blue-50 text-blue-600 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-blue-100 hover:bg-blue-100 transition-colors">
                      <MousePointerClick className="w-4 h-4" />
                      Start Consultation
                    </button>
                  </div>

                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Schedule</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-card border border-slate-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 group-hover:scale-110 transition-transform">
                        <HeartPulse className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Prescribe</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 -left-10 bg-white px-5 py-3 rounded-xl shadow-float border border-slate-100 flex items-center gap-3"
              >
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">1-Tap Flow</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Bullet Points */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-h1 font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Built for People, <br className="hidden lg:block" />
              <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>Not for Manuals.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-body-lg text-slate-600 leading-relaxed mb-10 max-w-narrow"
            >
              If you can use a smartphone, you can use MediKloud. We've eliminated the steep learning curve of traditional healthcare software with a clean, clinical interface that requires <strong className="text-slate-900 font-bold uppercase tracking-tight">Zero Training.</strong>
            </motion.p>

            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <Smartphone className="w-6 h-6 text-blue-600" />,
                  title: "Smartphone-Simple",
                  desc: "A native mobile experience designed for doctors who move fast."
                },
                {
                  icon: <MousePointerClick className="w-6 h-6 text-emerald-600" />,
                  title: "One-Tap Workflows",
                  desc: "From patient check-in to digital prescriptions, every task is a single tap away."
                },
                {
                  icon: <Layout className="w-6 h-6 text-amber-600" />,
                  title: "No Clunky Screens",
                  desc: "Clean, modern design that prioritizes patient data over interface noise."
                },
                {
                  icon: <Rocket className="w-6 h-6 text-purple-600" />,
                  title: "Fast Onboarding",
                  desc: "Get your entire reception and clinical staff live in under 2 hours."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-card group-hover:border-blue-200 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-h3 font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-body text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Strategic Outcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-center shadow-float relative overflow-hidden group"
        >
          {/* Background decorative glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-1.5 bg-gradient-action rounded-full mb-8"></div>
            <h3 className="text-h2 md:text-h1 font-bold text-white max-w-3xl mx-auto leading-tight">
              <span className="font-black bg-gradient-display bg-clip-text text-transparent">Spend your time on the patient,</span><br className="hidden md:block" />
              not the platform.
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
