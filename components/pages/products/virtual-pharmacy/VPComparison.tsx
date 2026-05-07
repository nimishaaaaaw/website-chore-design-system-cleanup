'use client';

import React from 'react';
import { 
  Zap, 
  CheckCircle2, 
  Minus, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { premiumEase } from '@/lib/animation';


export const VPComparison = () => {
  const comparisonData = [
    { 
      feature: "Upfront Capital", 
      no: { value: "₹0", status: "neutral" }, 
      own: { value: "₹5L - ₹15L+", status: "standard" }, 
      medi: { value: "₹0", status: "positive" } 
    },
    { 
      feature: "Space Required", 
      no: { value: "None", status: "neutral" }, 
      own: { value: "150+ sq. ft. minimum", status: "standard" }, 
      medi: { value: "None", status: "positive" } 
    },
    { 
      feature: "Daily Management", 
      no: { value: "Zero", status: "neutral" }, 
      own: { value: "High (Staff & vendors)", status: "standard" }, 
      medi: { value: "Zero (We run all ops)", status: "positive" } 
    },
    { 
      feature: "Licensing & Compliance", 
      no: { value: "N/A", status: "neutral" }, 
      own: { value: "Clinic is legally liable", status: "standard" }, 
      medi: { value: "We hold the licenses", status: "positive" } 
    },
    { 
      feature: "Dead Stock & Expiry", 
      no: { value: "N/A", status: "neutral" }, 
      own: { value: "100% Clinic financial loss", status: "standard" }, 
      medi: { value: "100% MediKloud loss", status: "positive" } 
    },
    { 
      feature: "Time to Patient", 
      no: { value: "Delayed (Patient travels)", status: "standard" }, 
      own: { value: "Immediate (At counter)", status: "positive" }, 
      medi: { value: "~10 Minutes", status: "highlight" } 
    },
    { 
      feature: "Brand Substitution", 
      no: { value: "High (Chemists flip brands)", status: "standard" }, 
      own: { value: "Low (You control shelves)", status: "standard" }, 
      medi: { value: "Zero (Exact Rx mapping)", status: "highlight" } 
    },
    { 
      feature: "Patient Retention", 
      no: { value: "0% (Lost to apps)", status: "standard" }, 
      own: { value: "Manual (Clinic staff)", status: "standard" }, 
      medi: { value: "Automated (Smart refills)", status: "highlight" } 
    },
  ];

  const renderCellContent = (data: any, isDarkColumn = false) => {
    const { value, status } = data;
    
    const styles: Record<string, { icon: React.ReactNode, text: string }> = {
      neutral: {
        icon: <Minus size={16} strokeWidth={1.5} className={isDarkColumn ? "text-slate-500" : "text-slate-400"} />,
        text: isDarkColumn ? "text-slate-400" : "text-slate-500"
      },
      standard: {
        icon: <div className={`w-1.5 h-1.5 rounded-full ${isDarkColumn ? "bg-slate-500" : "bg-slate-300"}`} />,
        text: isDarkColumn ? "text-slate-300" : "text-slate-600 font-medium"
      },
      positive: {
        icon: <CheckCircle2 size={18} strokeWidth={1.5} className={isDarkColumn ? "text-emerald-400" : "text-emerald-500"} />,
        text: isDarkColumn ? "text-white font-medium" : "text-slate-900 font-medium"
      },
      highlight: {
        icon: <TrendingUp size={18} strokeWidth={1.5} className={isDarkColumn ? "text-blue-400" : "text-indigo-600"} />,
        text: isDarkColumn ? "text-blue-100 font-bold" : "text-indigo-700 font-bold"
      }
    };

    const currentStyle = styles[status] || styles.standard;

    return (
      <div className="flex items-center justify-center space-x-2">
        {currentStyle.icon}
        <span className={currentStyle.text}>{value}</span>
      </div>
    );
  };

  return (
    <div className="bg-white relative pt-12 pb-0 flex flex-col justify-center">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <section className="section-py relative overflow-hidden w-full">
        <div className="container-page relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="header-lock text-center mb-16 md:mb-20 space-y-6"
          >
            <div className="eyebrow-wrap">
              <span className="eyebrow-line-l" />
              <span className="eyebrow-text">Compare Options</span>
              <span className="eyebrow-line-r" />
            </div>
            
            <h2 className="premium-h2 text-balance leading-[1.2]">
              Pick the right pharmacy <br className="hidden md:block" />
              <span className="text-indigo-600">
                operating model for your clinic.
              </span>
            </h2>
            
            <p className="premium-p max-w-full lg:max-w-intro-lock mx-auto text-slate-600 leading-relaxed">
              Compare the setup costs, daily operations, and patient outcomes to make the right choice for your clinic.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative">
              
              <div className="overflow-x-auto pb-4 md:pb-0">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="p-6 md:p-8 bg-white/80 backdrop-blur-md sticky left-0 z-20 w-[28%] border-b border-slate-100"></th>
                      
                      <th className="p-6 md:p-8 text-center w-[24%] border-b border-slate-100 bg-slate-50/50">
                        <div className="flex flex-col items-center space-y-1">
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">No Pharmacy</h3>
                          <p className="text-xs text-slate-400 font-medium">Status Quo</p>
                        </div>
                      </th>
                      
                      <th className="p-6 md:p-8 text-center w-[24%] relative">
                        <div className="absolute inset-0 bg-indigo-950 rounded-t-2xl shadow-[0_-10px_40px_-10px_rgba(79,70,229,0.3)] border-t border-x border-indigo-500/30" />
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="inline-flex items-center justify-center px-4 py-1 mb-4 text-xxs uppercase tracking-[0.2em] font-bold text-indigo-200 bg-indigo-500/20 ring-1 ring-indigo-500/40 rounded-full backdrop-blur-md">
                            <Zap size={10} strokeWidth={1.5} className="mr-1.5 text-indigo-300" fill="currentColor" />
                            Virtual Pharmacy
                          </span>
                          <h3 className="text-2xl font-extrabold text-white tracking-tight">MediKloud</h3>
                        </div>
                      </th>
                      
                      <th className="p-6 md:p-8 text-center w-[24%] border-b border-slate-100 bg-slate-50/50">
                        <div className="flex flex-col items-center space-y-1">
                          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Own Pharmacy</h3>
                          <p className="text-xs text-slate-500 font-medium">In-house Setup</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {comparisonData.map((row, idx) => {
                      const isLast = idx === comparisonData.length - 1;
                      return (
                        <tr key={idx} className="group">
                          <td className={`p-5 md:px-8 md:py-6 font-semibold text-slate-800 bg-white sticky left-0 z-20 transition-colors border-b border-slate-100 shadow-[1px_0_0_0_rgba(241,245,249,1)] ${isLast ? 'border-b-0' : ''}`}>
                            {row.feature}
                          </td>
                          
                          <td className={`p-5 md:px-8 md:py-6 text-center border-b border-slate-100 bg-slate-50/30 transition-colors ${isLast ? 'border-b-0' : ''}`}>
                            {renderCellContent(row.no)}
                          </td>
                          
                          <td className="p-0 relative text-center">
                            <div className={`absolute inset-0 bg-indigo-950 border-x border-indigo-500/20 ${isLast ? 'rounded-b-2xl border-b' : 'border-b border-white/5'}`}>
                               <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            
                            <div className="relative z-10 p-5 md:px-8 md:py-6">
                              {renderCellContent(row.medi, true)}
                            </div>
                          </td>
                          
                          <td className={`p-5 md:px-8 md:py-6 text-center border-b border-slate-100 bg-slate-50/30 transition-colors ${isLast ? 'border-b-0' : ''}`}>
                            {renderCellContent(row.own)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-t border-indigo-100/60 p-5 md:p-6 text-center">
                 <div className="inline-flex items-center justify-center space-x-3 text-indigo-800 font-semibold text-sm md:text-base">
                    <CheckCircle2 size={20} strokeWidth={1.5} className="text-indigo-600" />
                    <span>Focus on patient care. We handle the rest.</span>
                 </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
};