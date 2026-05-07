'use client';

import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  ArrowUpRight, 
  Stethoscope, 
  Package,
  Zap,
  ShieldCheck,
  ClipboardCheck,
  Phone,
  Bike,
  Warehouse,
  ChevronRight
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useContactModal } from '@/hooks/use-contact-modal';
import { premiumEase } from '@/lib/animation';

const VPCTA = () => {
  const { openModal } = useContactModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: premiumEase 
      }
    }
  };

  return (
    <section className="relative bg-white pt-10 pb-20 md:pb-32 overflow-hidden">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <div className="blob-layer">
        <div className="blob-blue w-32rem h-32rem -top-24 -left-20 opacity-40" />
        <div className="blob-indigo w-28rem h-28rem -bottom-24 -right-20 opacity-30" />
      </div>

      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 xl:col-span-6 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="eyebrow-wrap justify-center lg:justify-start">
               <span className="eyebrow-line-l" />
               <span className="eyebrow-text text-center lg:text-left">Close The Care Loop</span>
               <span className="eyebrow-line-r" />
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="premium-h2 text-center lg:text-left mb-6"
            >
              Launch your Virtual Pharmacy <br className="hidden md:block" />
              and guarantee <span className="text-indigo-600">100% care continuity.</span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-100/50 shadow-sm">
                <Zap size={14} strokeWidth={1.5} className="text-amber-500" fill="currentColor" />
                <span className="text-xxxs font-bold text-slate-700 uppercase tracking-widest leading-none">More Clinic Revenue</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100/50 shadow-sm">
                <ShieldCheck size={14} strokeWidth={1.5} className="text-emerald-500" />
                <span className="text-xxxs font-bold text-slate-700 uppercase tracking-widest leading-none">Zero Capex</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-100/50 shadow-sm">
                <ClipboardCheck size={14} strokeWidth={1.5} className="text-blue-500" />
                <span className="text-xxxs font-bold text-slate-700 uppercase tracking-widest leading-none">Clinic OS Included</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <button 
                onClick={() => openModal({
                  badge: "Virtual Pharmacy",
                  title: "Start Your Virtual Pharmacy Launch",
                  description: "Schedule a demo to see how we can fulfill your exact prescriptions with zero space required.",
                  btnText: "Schedule Your Demo",
                  successTitle: "Launch Initiated!",
                  successDescription: "Our team will be in touch within 24 hours to map your local fulfillment grid."
                })} 
                className="group btn-second-cta whitespace-nowrap"
              >
                <span>Launch My Pharmacy</span>
                <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 xl:col-span-6 relative flex justify-center items-center h-80 md:h-[450px] bg-slate-50/50 rounded-[2.5rem] border border-slate-200/60 shadow-inner overflow-hidden mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)] opacity-60" />
            
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] origin-center opacity-30 pointer-events-none" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.1) 80%, rgba(59, 130, 246, 0.4) 100%)' }} />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[1, 2, 3].map((ring) => (<div key={ring} className="absolute rounded-full border border-blue-400/20" style={{ width: `${ring * 120}px`, height: `${ring * 120}px` }} />))}
              <motion.div className="absolute rounded-full border-2 border-blue-500/40" initial={{ width: 0, height: 0, opacity: 1 }} animate={{ width: 400, height: 400, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
            </div>
            
            <motion.div 
              initial={{ left: "70%", top: "25%", opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ 
                left: ["70%", "50%"], 
                top: ["25%", "50%"], 
                opacity: [0, 1, 1, 0] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: 2.5, 
                ease: "linear" 
              }}
              className="absolute z-20 text-blue-600 bg-white p-1 rounded-full shadow-md border border-blue-100"
            >
              <motion.div
                animate={{ rotate: [0, 0] }}
                className="flex items-center justify-center p-0.5"
              >
                <div className="scale-x-[-1]">
                   <Bike size={14} className="text-blue-600" strokeWidth={1.5} />
                </div>
              </motion.div>
            </motion.div>

            <motion.svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <motion.line x1="50%" y1="50%" x2="70%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" className="opacity-50" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeOut" }} />
            </motion.svg>
            
            <div className="absolute top-[50%] left-[50%] z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20 border border-slate-700">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl pointer-events-none" />
                <Stethoscope size={28} strokeWidth={1.5} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div className="absolute top-full mt-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
                <span className="text-xxs font-bold text-slate-700 uppercase tracking-widest">Your Clinic</span>
              </div>
            </div>
            
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }} className="absolute top-[25%] left-[70%] z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-full mb-3 bg-white border border-blue-100 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 whitespace-nowrap">
                <div className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </div>
                <span className="text-xxxs font-bold text-blue-700 uppercase tracking-[0.2em]">MediKloud Hub</span>
              </motion.div>
               <div className="relative w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-blue-50">
                <Warehouse size={20} strokeWidth={1.5} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { VPCTA };