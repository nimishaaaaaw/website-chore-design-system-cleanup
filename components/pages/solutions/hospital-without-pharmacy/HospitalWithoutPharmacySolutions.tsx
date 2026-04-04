"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Stethoscope, 
  RefreshCw, 
  CheckCircle 
} from 'lucide-react';

export const HospitalWithoutPharmacySolutions = () => {
  const steps = [
    {
      num: "1",
      title: "Capture the Prescription at the Source",
      desc: "Our Free HMS becomes your hospital’s operating layer.",
      points: [
        "Digital prescriptions (with exact brands)",
        "Integrated billing & patient records",
        "Zero learning curve for staff"
      ],
      closing: "Every prescription is now trackable, actionable, and monetizable.",
      icon: Stethoscope
    },
    {
      num: "2",
      title: "Fulfill Medicines Instantly with Virtual Pharmacy",
      desc: "No in-house pharmacy? No problem.",
      points: [
        "Orders routed to MediKloud’s dark pharmacy network",
        "Medicines packed in under 60 seconds",
        "Delivered to patient within minutes — even before leaving"
      ],
      closing: "From the patient’s perspective, your hospital just became a pharmacy.",
      icon: Truck
    },
    {
      num: "3",
      title: "Never Lose a Patient After They Leave",
      desc: "Most revenue isn’t in the first visit — it’s in refills.",
      points: [
        "Tracks when medicines will run out",
        "Sends automated reminders",
        "Enables 1-tap reorders with home delivery"
      ],
      closing: "No follow-ups needed from your team. No patients silently drifting away.",
      icon: RefreshCw
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How MediKloud Solves It</h2>
          <p className="text-xl text-slate-600">A seamless 3-step engine working for your hospital.</p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Graphic Side */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-12 h-12 text-teal-600" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 rounded-full blur-xl mix-blend-multiply" />
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-100 rounded-full blur-xl mix-blend-multiply" />
                  <div className="absolute top-1/2 right-10 text-9xl font-black text-slate-900/5 -translate-y-1/2">{step.num}</div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-700 font-bold text-xl mb-2">
                  {step.num}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-xl text-slate-600 font-medium">{step.desc}</p>
                
                <ul className="space-y-4 pt-4">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-teal-100 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-lg text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-200">
                  <p className="text-lg font-semibold text-slate-900 italic">"{step.closing}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
