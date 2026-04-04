'use client';

import React from 'react';
import { Scale, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const VPComparison = () => {
  const comparisonData = [
    { feature: "Upfront Cost", no: "₹0", own: "₹10 Lakhs+", medi: "₹0" },
    { feature: "Floor Space", no: "0 sq ft", own: "150+ sq ft", medi: "0 sq ft" },
    { feature: "Monthly Salaries", no: "₹0", own: "₹30,000+", medi: "₹0" },
    { feature: "Stock Risk (Expiry)", no: "N/A", own: "High", medi: "Zero (We cover it)" },
    { feature: "Legal & Licensing", no: "N/A", own: "High Liability", medi: "We assume liability" },
    { feature: "Patient Convenience", no: "Low (Walk out)", own: "High (In-house)", medi: "Maximum (10-min delivery)" },
    { feature: "Revenue Potential", no: "Zero", own: "High (but high effort)", medi: "High (Zero-effort Fee)" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full shadow-sm">
            <Scale size={14} className="text-blue-600" />
            <span className="text-blue-700 font-bold uppercase tracking-widest text-[10px]">Model Comparison</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            No Pharmacy vs. Own Pharmacy vs. <span className="text-blue-600">MediKloud.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            Choose the model that scales your practice without the operational drag.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 bg-white w-1/4 border-b border-slate-200"></th>
                  <th className="p-6 bg-slate-50 text-center w-1/4 border-b border-slate-200 border-x border-slate-200">
                    <h3 className="font-bold text-slate-500 text-lg">No Pharmacy</h3>
                  </th>
                  <th className="p-6 bg-blue-600 text-center w-1/4 border-b border-blue-700 relative overflow-hidden border-x-2 border-blue-600 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 z-0 text-white/5">
                      <Zap size={100} className="absolute -top-10 -right-10" />
                    </div>
                    <h3 className="font-black text-white text-xl relative z-10 flex items-center justify-center space-x-2">
                      <CheckCircle2 size={20} className="text-blue-200" />
                      <span>MediKloud</span>
                    </h3>
                  </th>
                  <th className="p-6 bg-white text-center w-1/4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-800 text-lg">Own Pharmacy</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => {
                  const isSuperHighlight = row.feature.includes("Revenue") || row.feature.includes("Convenience");
                  
                  return (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors">
                      <td className="p-5 md:p-6 font-bold text-slate-800 bg-white">
                        {row.feature}
                      </td>
                      <td className="p-5 md:p-6 text-center text-slate-500 font-medium bg-slate-50 border-x border-slate-200">
                        {row.no}
                      </td>
                      <td className={`p-5 md:p-6 text-center bg-blue-50/50 border-x-2 border-blue-200 ${isSuperHighlight ? 'font-black text-blue-700 text-lg' : 'font-bold text-blue-700'}`}>
                        {row.medi}
                      </td>
                      <td className="p-5 md:p-6 text-center text-slate-600 font-medium bg-white">
                        {row.own}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-0 right-[25%] w-[min(100%,_25%)] h-1.5 bg-blue-600 z-20 hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

export { VPComparison };
