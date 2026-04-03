'use client';

import React from 'react';
import { Activity, Building, MapPin, Stethoscope, Package, ClipboardList, Truck, LineChart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const VPImplementation = () => {
  const implementationPhases = [
    {
      title: "Phase 1: Setup & Onboarding",
      subtitle: "Days 1–6",
      icon: Building,
      color: "blue",
      steps: [
        {
          icon: MapPin,
          title: "Hub Establishment",
          desc: "We establish a fully-licensed Dark Pharmacy hub strategically located to serve a 2–3 km radius of clinics."
        },
        {
          icon: Stethoscope,
          title: "Clinic Integration",
          desc: "We partner with your clinic, deploy our free Clinic Management System (HMS), and finalize your custom formulary."
        },
        {
          icon: Package,
          title: "Procurement",
          desc: "We procure the exact medicines you prescribe and ensure 100% of your formulary is stocked at the local hub."
        }
      ]
    },
    {
      title: "Phase 2: The 10-Minute Loop",
      subtitle: "Day 7 Onwards",
      icon: Activity,
      color: "emerald",
      steps: [
        {
          icon: ClipboardList,
          title: "Seamless Prescribing",
          desc: "You consult patients and generate digital prescriptions effortlessly through the MediKloud HMS in your normal workflow."
        },
        {
          icon: Truck,
          title: "Insta-Pack & Deliver",
          desc: "The prescription routes to our hub, is packed in 60 seconds, and delivered to the patient at your clinic door in under 10 mins."
        },
        {
          icon: LineChart,
          title: "Real-Time Tracking",
          desc: "Your clinic dashboard tracks the active delivery status, patient fulfillment rates, and your service fee earnings in real-time."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <Activity size={14} className="text-blue-600" />
            <span className="text-slate-700 font-bold uppercase tracking-widest text-[10px]">Implementation Flow</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
            How the partnership works.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            From day zero setup to your daily 10-minute workflow. We seamlessly integrate into your practice without disruption.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden max-w-6xl mx-auto"
        >
          {implementationPhases.map((phase, phaseIndex) => {
            const isBlue = phase.color === 'blue';
            
            return (
              <div 
                key={phaseIndex} 
                className={`p-10 md:p-16 relative ${phaseIndex === 0 ? 'bg-slate-50/50 border-b border-slate-100' : 'bg-white'}`}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 relative z-20">
                  <div>
                    <span className={`font-bold uppercase tracking-widest text-[11px] mb-2 block ${isBlue ? 'text-blue-600' : 'text-emerald-600'}`}>
                      {phase.subtitle}
                    </span>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{phase.title}</h3>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-slate-400 font-medium text-sm flex items-center bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                      <Clock size={16} className="mr-2"/> {phaseIndex === 0 ? "One-time setup process" : "Daily operational loop"}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="hidden lg:block absolute top-[28px] left-[16.66%] right-[16.66%] h-[2px] bg-slate-200 z-0" />
                  <div className="lg:hidden absolute left-[27px] top-10 bottom-10 w-[2px] bg-slate-200 z-0" />

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                    {phase.steps.map((step, stepIndex) => {
                      const Icon = step.icon;
                      const globalStepNum = (phaseIndex * 3) + stepIndex + 1;
                      
                      return (
                        <div key={stepIndex} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group relative cursor-default">
                          <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center border-[4px] relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm ${phaseIndex === 0 ? 'border-slate-50' : 'border-white'} ${isBlue ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            <Icon size={24} />
                            <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm border-2 ${phaseIndex === 0 ? 'border-slate-50' : 'border-white'} ${isBlue ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                              {globalStepNum}
                            </div>
                          </div>

                          <div className="ml-6 lg:ml-0 lg:mt-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { VPImplementation };
