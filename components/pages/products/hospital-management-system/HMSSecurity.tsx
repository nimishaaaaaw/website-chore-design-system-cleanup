"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Server, 
  Lock, 
  Key 
} from 'lucide-react';

export const HMSSecurity = () => {
  return (
    <section className="relative py-section-sm md:py-section bg-slate-900 overflow-hidden text-white border-t border-slate-800">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Column: Copy & Features */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-8 shadow-glow-sm backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-300 uppercase tracking-[0.15em]">Enterprise-Grade Security</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-h1 font-bold text-white leading-[1.1] tracking-tight mb-8"
            >
              Data Security. <br className="hidden md:block" />
              <span className="bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>A Clinical Fortress.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg text-slate-400 leading-relaxed mb-12 max-w-narrow"
            >
              Your patient records are your most valuable asset. MediKloud protects them with bank-grade encryption and an architecture designed for total privacy. We handle the complexity of compliance so you can focus on care.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Database className="w-5 h-5 text-teal-400" />,
                  title: "100% Data Sovereignty",
                  desc: "Your data is yours. Private storage with absolute access control."
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
                  title: "ABDM & HIPAA Ready",
                  desc: "Built to meet rigorous Indian and global healthcare standards."
                },
                {
                  icon: <Server className="w-5 h-5 text-purple-400" />,
                  title: "Zero-Loss Continuity",
                  desc: "Automated backups and 99.9% uptime. Your clinic never stops."
                },
                {
                  icon: <Lock className="w-5 h-5 text-amber-400" />,
                  title: "Role-Based Access",
                  desc: "Granular controls ensure only authorized staff view sensitive data."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all group"
                >
                  <div className="bg-slate-900 w-11 h-11 rounded-xl flex items-center justify-center border border-slate-700/50 mb-4 shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-h4 font-bold text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Security Visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[400px] lg:h-[500px]">
            {/* Subtle Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" style={{ maskImage: 'radial-gradient(circle at center, white, transparent)' }} />
            
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              
              {/* Core Shield */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-44 h-44 lg:w-56 lg:h-56 bg-slate-900 border border-slate-700 rounded-[2.5rem] shadow-glow flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-400/20" />
                <ShieldCheck className="w-24 h-24 text-blue-400 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <div className="absolute inset-0 bg-blue-500/10 animate-pulse mix-blend-overlay"></div>
              </motion.div>

              {/* Floating Nodes */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 top-[15%] left-[5%] bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-float"
              >
                <Database className="w-8 h-8 text-teal-400" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-30 bottom-[15%] right-[5%] bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-float"
              >
                <Lock className="w-8 h-8 text-amber-400" />
              </motion.div>

              <motion.div 
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute z-30 top-[10%] right-[15%] bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-float"
              >
                <Server className="w-8 h-8 text-purple-400" />
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-30 bottom-[10%] left-[15%] bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-float"
              >
                <Key className="w-8 h-8 text-blue-400" />
              </motion.div>

            </div>
          </div>

        </div>

        {/* Strategic Outcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 w-full relative z-10"
        >
          <div className="bg-gradient-to-r from-blue-900/50 via-slate-800/80 to-teal-900/50 border border-slate-700/80 rounded-[2rem] p-8 lg:p-12 flex flex-col items-center justify-center text-center shadow-glow backdrop-blur-xl group">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white tracking-tight leading-tight">
                Absolute peace of mind.
              </h3>
              <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black bg-gradient-display bg-clip-text text-transparent">
                Absolute data integrity.
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
