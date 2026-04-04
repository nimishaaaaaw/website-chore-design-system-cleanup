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
    <section className="bg-white border-y border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((box, i) => {
            const Icon = box.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-2 rounded-3xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{box.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{box.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { VPInfrastructure };
