'use client';

import React from 'react';
import { MapPin, Smartphone, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const VPInfrastructure = () => {
  const items = [
    { 
      icon: MapPin, 
      title: "Dark Pharmacy Hubs", 
      desc: "100% owned network strategically placed to serve clinic clusters instantly." 
    },
    { 
      icon: Smartphone, 
      title: "Optimistic Dispatch", 
      desc: "Rider departs the moment order is prepared—maximizing your patients' time." 
    },
    { 
      icon: Activity, 
      title: "Zero Inventory Risk", 
      desc: "We stock 100% of your tailored formulary. No expiry or wastage burden on you." 
    }
  ];

  return (
    <section className="bg-section-alt border-y border-slate-100 section-py">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {items.map((box, i) => {
            const Icon = box.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card flex flex-col items-start group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                  <Icon size={24} className="stroke-[1.5]" />
                </div>
                <h3 className="text-h3 font-bold mb-4 text-slate-900 tracking-tight leading-tight">{box.title}</h3>
                <p className="text-body text-slate-600 font-medium leading-relaxed">{box.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { VPInfrastructure };
