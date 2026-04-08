"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserPlus, Pill, CheckCircle2, Activity, Home, PackageCheck, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const ClinicHowItWorks = () => {
  return (
    <section className="section-py bg-section-surface overflow-hidden border-t border-slate-100" id="how-it-works">
      <div className="container-page">
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="eyebrow-wrap"
          >
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The Infrastructure Upgrade</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6"
          >
            A seamless experience for you.<br className="hidden md:block" />
            <span className="bg-gradient-display bg-clip-text text-transparent pb-2" style={{ color: '#4F46E5' }}>
              A premium experience for your patients.
            </span>
          </motion.h2>
        </div>

        <div className="space-y-28 md:space-y-40">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1 space-y-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F46E5] font-bold text-xl border border-[#C7D2FE] shadow-sm">1</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                Digitize in <br className="hidden sm:block" /> seconds.
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                Ditch the paper pads. Our Free HMS stores patient history and instantly routes digital prescriptions to our fulfillment network. Fast, safe, and professional.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-lg text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-2">
                Explore Free HMS features <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="card-tinted relative overflow-hidden shadow-card-lg p-8 h-[360px] flex items-center justify-center group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-[50px] rounded-full pointer-events-none" />
                
                {/* Tablet App Mockup */}
                <div className="w-full max-w-[280px] bg-white rounded-2xl border-[6px] border-[#E2E8F0] shadow-2xl overflow-hidden relative z-10 flex flex-col h-full max-h-[300px] group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E8F0] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E0E7FF] flex items-center justify-center">
                      <UserPlus className="w-4 h-4 text-[#4F46E5]"/>
                    </div>
                    <div>
                      <div className="w-20 h-2 bg-[#CBD5E1] rounded-full mb-1.5" />
                      <div className="w-12 h-1.5 bg-[#E2E8F0] rounded-full" />
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-5 flex-1 flex flex-col justify-between">
                     <div className="space-y-4">
                       <div className="flex gap-3 items-start">
                          <Pill className="w-5 h-5 text-[#3B82F6] shrink-0" />
                          <div className="flex-1 space-y-2 mt-1">
                             <div className="h-2.5 bg-[#0F172A] rounded-full animate-type-1" />
                             <div className="h-2 bg-[#94A3B8] rounded-full animate-type-2" />
                          </div>
                       </div>
                       <div className="flex gap-3 items-start opacity-40">
                          <Pill className="w-5 h-5 text-[#3B82F6] shrink-0" />
                          <div className="flex-1 space-y-2 mt-1">
                             <div className="h-2.5 bg-[#0F172A] rounded-full w-full" />
                             <div className="h-2 bg-[#94A3B8] rounded-full w-1/2" />
                          </div>
                       </div>
                     </div>
                     
                     <div className="w-full py-3 rounded-xl flex items-center justify-center gap-2 animate-send shadow-md">
                       <span className="text-white text-sm font-bold">Route Order</span>
                       <CheckCircle2 className="w-4 h-4 text-white" />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-1"
            >
               <div className="card-tinted shadow-card-lg p-8 min-h-[360px] flex flex-col justify-center items-center relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/50 blur-[60px] rounded-full pointer-events-none" />
                  
                  <div className="w-full max-w-[320px] relative h-32 flex items-center">
                     {/* Map/Route Line */}
                     <div className="absolute left-8 right-8 h-1 border-t-2 border-dashed border-[#BFDBFE] z-0" />
                     
                     {/* Clinic Node */}
                     <div className="absolute left-0 w-16 h-16 bg-white rounded-2xl shadow-card border border-[#C7D2FE] flex flex-col items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500">
                       <Activity className="w-6 h-6 text-[#4F46E5] mb-1" />
                       <span className="text-[9px] font-bold text-[#0F172A] uppercase">Clinic</span>
                     </div>
                     
                     {/* Patient Node */}
                     <div className="absolute right-0 w-16 h-16 bg-[#F8FAFC] rounded-2xl shadow-card border border-[#E2E8F0] flex flex-col items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500 delay-100">
                       <Home className="w-6 h-6 text-[#3B82F6] mb-1" />
                       <span className="text-[9px] font-bold text-[#64748B] uppercase">Patient</span>
                     </div>

                     {/* Moving Package */}
                     <div className="animate-delivery z-20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#4F46E5] rounded-xl shadow-btn flex items-center justify-center">
                           <PackageCheck className="w-6 h-6 text-white" />
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F46E5] font-bold text-xl border border-[#C7D2FE] shadow-sm">2</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                We deliver. <br className="hidden sm:block" /> <span className="text-blue-600">Your clinic grows.</span>
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                Our dark pharmacies fulfill orders instantly. Patients get their medicines at home within hours. Your clinic transforms into a full-service care hub without the heavy lifting.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-lg text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-2">
                See how Virtual Pharmacy works <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1 space-y-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F46E5] font-bold text-xl border border-[#C7D2FE] shadow-sm">3</div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                Automate patient <br className="hidden sm:block" /> retention.
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                We auto-remind chronic patients when medicines run low. 1-tap reorders ensure adherence, securing lifelong patient relationships for your practice effortlessly.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-lg text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-2">
                Discover the Refill Engine <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="card-tinted shadow-card-lg p-8 min-h-[360px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 blur-[50px] rounded-full pointer-events-none" />
                
                {/* Smartphone Chat Mockup */}
                <div className="w-[230px] h-[320px] bg-[#0F172A] rounded-[2.5rem] border-[6px] border-[#1E293B] shadow-2xl relative overflow-hidden flex flex-col z-10 group-hover:-translate-y-2 transition-transform duration-500">
                   {/* Phone notch */}
                   <div className="w-24 h-5 bg-[#1E293B] mx-auto rounded-b-xl mb-4" />
                   
                   <div className="flex-1 px-4 py-2 space-y-4 flex flex-col justify-end pb-8">
                      {/* Automated Alert */}
                      <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-bl-sm border border-white/10 animate-chat-1 shadow-lg">
                         <div className="flex items-center gap-1.5 mb-1.5">
                           <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center shadow-sm"><Sparkles className="w-2.5 h-2.5 text-white"/></div>
                           <span className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider">MediKloud Auto-Refill</span>
                         </div>
                         <p className="text-white text-[11px] font-medium leading-snug">Your monthly prescription is running low. Tap to refill securely.</p>
                      </div>
                      
                      {/* Pop-in Confirmation */}
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 p-3 rounded-2xl rounded-br-sm shadow-btn animate-chat-2 ml-10 border border-emerald-400 flex items-center gap-2">
                         <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                         <p className="text-white text-[11px] font-bold">Refill Confirmed</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
