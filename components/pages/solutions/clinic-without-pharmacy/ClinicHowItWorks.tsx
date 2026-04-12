"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserPlus, Pill, CheckCircle2, Activity, Home, PackageCheck, Sparkles, Monitor, Truck, TrendingUp, Warehouse, Bike, Search, FileText, Stethoscope, Smartphone, Repeat, Building2, Package } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { DeliveryScooterSVG } from '@/components/shared/HeroIcons';

const premiumEase = [0.16, 1, 0.3, 1] as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

const RefillMicroDemo = () => {
  const [confirmed, setConfirmed] = React.useState(false);
  const [showTap, setShowTap] = React.useState(false);
  
  React.useEffect(() => {
    const sequence = async () => {
      // Step 1: Show tap animation
      await new Promise(r => setTimeout(r, 2500));
      setShowTap(true);
      
      // Step 2: Confirm
      await new Promise(r => setTimeout(r, 600));
      setConfirmed(true);
      setShowTap(false);

      // Step 3: Reset loop
      await new Promise(r => setTimeout(r, 4000));
      setConfirmed(false);
    };

    const interval = setInterval(() => {
      sequence();
    }, 8000);
    
    // Initial run
    sequence();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[280px] h-[380px] rounded-[3rem] border-[8px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col z-10 group-hover:-translate-y-2 transition-transform duration-500 bg-[#0B141A]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />
      
      {/* ── PHONE HEADER ── */}
      <div className="relative h-14 w-full bg-[#202C33] border-b border-white/5 flex items-center px-4 pt-4 gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-white/10 overflow-hidden">
          <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white uppercase">MC</div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-white tracking-tight">MediKloud Care</span>
            <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 size={8} className="text-white" strokeWidth={3} />
            </div>
          </div>
          <span className="text-[8px] text-emerald-500 font-semibold uppercase tracking-wider">Verified Account</span>
        </div>
      </div>

      {/* ── CHAT CONTENT ── */}
      <div className="flex-1 p-4 space-y-4 relative flex flex-col justify-end pb-8">
        {/* Proactive Reminder (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#202C33] p-3 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%] shadow-md"
        >
          <p className="text-white text-[11px] font-medium leading-[1.4]">
            Hello Mr. Karan, your prescription for <span className="text-indigo-400 font-bold">Glycomet</span> is finishing in 2 days.
          </p>
        </motion.div>

        {/* Interaction Zone (Left) */}
        <div className="relative">
            <motion.div 
              animate={{ 
                opacity: confirmed ? 0.4 : 1,
                scale: confirmed ? 0.98 : (showTap ? 0.95 : 1)
              }}
              className={`p-2.5 rounded-xl rounded-tl-none max-w-[80%] flex items-center gap-2 transition-all duration-300 ${confirmed ? 'bg-slate-800 border-transparent' : 'bg-indigo-600/20 border border-indigo-500/30'}`}
            >
              <div className={`w-2 h-2 rounded-full ${confirmed ? 'bg-slate-500' : 'bg-indigo-400 animate-pulse'}`} />
              <span className={`text-[10px] font-bold ${confirmed ? 'text-slate-500' : 'text-indigo-100'}`}>Yes, please dispatch</span>
            </motion.div>

            {/* CURSOR ANIMATION */}
            {showTap && (
              <motion.div 
                initial={{ opacity: 0, x: 120, y: 80 }}
                animate={{ opacity: 1, x: 55, y: 15 }}
                className="absolute top-0 left-0 z-50 pointer-events-none"
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  {/* Outer Pulse Ring */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0.5 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 w-8 h-8 rounded-full bg-white/40"
                  />
                  {/* The Cursor Dot */}
                  <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                     <motion.div 
                       animate={{ scale: [1, 0.8, 1], opacity: [0.8, 1, 0.8] }}
                       className="w-3 h-3 rounded-full bg-white shadow-xl"
                     />
                  </div>
                </div>
              </motion.div>
            )}
        </div>

        {/* Confirmation State (Right) */}
        <div className="h-12 flex justify-end">
          {confirmed && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="bg-emerald-600 p-3 rounded-2xl rounded-tr-none shadow-xl flex items-center gap-2 border border-emerald-500"
            >
              <CheckCircle2 size={14} className="text-emerald-100" strokeWidth={2.5} />
              <div className="text-right">
                <p className="text-white text-[10px] font-bold">Refill Confirmed</p>
                <p className="text-[8px] text-emerald-100/70 font-medium whitespace-nowrap">Order #MK-402 • 4 PM</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Input Bar Area */}
      <div className="bg-[#202C33] h-14 w-full flex items-center px-4 gap-3 opacity-30 mt-auto">
        <div className="flex-1 h-8 bg-[#2A3942] rounded-full" />
        <div className="w-8 h-8 bg-emerald-500 rounded-full" />
      </div>
    </div>
  );
};

const SoftwareMicroDemo = () => {
  const [step, setStep] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[340px] bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative z-10 flex flex-col h-[320px] group-hover:-translate-y-2 transition-transform duration-500">
      {/* ── FORENSIC BACKGROUND (REVERT TO VPCTA STYLE) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)] opacity-60" />
      
      {/* Search Header */}
      <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-100 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-slate-200 flex-1 mr-4">
          <Search size={12} className="text-slate-400" />
          <span className="text-[10px] text-slate-400 font-medium font-sans">Search Patient...</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <div className="w-2 h-2 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="p-5 space-y-5 relative z-10">
        {/* Patient Profile - Real Data */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-bold text-sm">KS</span>
          </div>
          <div className="flex-1">
            <h4 className="text-[13px] font-bold text-slate-900 leading-tight">Karan Sharma</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Male • 42 yrs</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Status</div>
            <div className="text-[10px] font-bold text-indigo-600 mt-1">Ongoing OPD</div>
          </div>
        </div>

        {/* Prescription Card - Real Data */}
        <div className="space-y-3">
          <div className="flex items-center justify-between group/line">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/line:bg-indigo-50 transition-colors">
                  <Pill size={14} className="text-slate-400 group-hover/line:text-indigo-600 transition-colors" />
                </div>
                <div>
                   <div className="text-[11px] font-bold text-slate-800">Glycomet GP 1mg</div>
                   <div className="text-[9px] text-slate-500 font-medium">1-0-1 • After Meals • 30 Days</div>
                </div>
             </div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-bold text-emerald-500">In Stock</motion.div>
          </div>
          <div className="h-px bg-slate-100" />
          <div className="flex items-center justify-between group/line">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/line:bg-indigo-50 transition-colors">
                  <Pill size={14} className="text-slate-400 group-hover/line:text-indigo-600 transition-colors" />
                </div>
                <div>
                   <div className="text-[11px] font-bold text-slate-800">Telmikind 40mg</div>
                   <div className="text-[9px] text-slate-500 font-medium">0-1-0 • Morning • 15 Days</div>
                </div>
             </div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-bold text-emerald-500">In Stock</motion.div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-auto p-4 border-t border-slate-50 relative z-10">
        <div className="relative h-12 w-full">
          <motion.div 
            animate={{ 
              backgroundColor: step === 0 ? "#F8FAFC" : step === 1 ? "#EEF2FF" : "#10B981",
              borderColor: step === 0 ? "#F1F5F9" : step === 1 ? "#E0E7FF" : "#10B981",
              y: step === 2 ? -2 : 0
            }}
            className={`absolute inset-0 rounded-xl border flex items-center justify-center gap-2 transition-all duration-500 shadow-sm ${step === 2 ? 'shadow-emerald-200' : ''}`}
          >
            {step === 0 && (
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-slate-400" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Sign Prescription</span>
              </div>
            )}
            {step === 1 && (
              <div className="flex items-center gap-2">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                  <Activity size={14} className="text-indigo-600" />
                </motion.div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">Routing to hub...</span>
              </div>
            )}
            {step === 2 && (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-white" />
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">Hub Verified & Ready</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};


const DeliveryMicroDemo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-white">
      {/* ── FORENSIC BACKGROUND (VPCTA STYLE) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)] opacity-60" />
      
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] origin-center opacity-30 pointer-events-none" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.1) 80%, rgba(59, 130, 246, 0.4) 100%)' }} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((ring) => (<div key={ring} className="absolute rounded-full border border-blue-400/20" style={{ width: `${ring * 120}px`, height: `${ring * 120}px` }} />))}
        <motion.div className="absolute rounded-full border-2 border-blue-500/40" initial={{ width: 0, height: 0, opacity: 1 }} animate={{ width: 400, height: 400, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
      </div>

      {/* Delivery Animation (Hub to Clinic) */}
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
        className="absolute z-20 text-blue-600 bg-white p-1.5 rounded-full shadow-md border border-blue-100"
      >
        <div className="scale-x-[-1]">
            <DeliveryScooterSVG className="w-4 h-4 text-blue-600" />
        </div>
      </motion.div>

      <motion.svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.line x1="50%" y1="51%" x2="70%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" className="opacity-40" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1, ease: "easeOut" }} />
      </motion.svg>
      
      {/* Node: Your Clinic */}
      <div className="absolute top-[51%] left-[50%] z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20 border border-slate-700">
           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl pointer-events-none" />
          <Stethoscope size={28} strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
        </div>
        <div className="absolute top-full mt-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Your Clinic</span>
        </div>
      </div>
      
      {/* Node: MediKloud Hub */}
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1 }} className="absolute top-[25%] left-[70%] z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-full mb-3 bg-white border border-blue-100 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 whitespace-nowrap">
          <div className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </div>
          <span className="text-[9px] font-bold text-blue-700 uppercase tracking-[0.2em]">MediKloud Hub</span>
        </motion.div>
         <div className="relative w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-blue-50">
          <Package size={20} strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
};

export const ClinicHowItWorks = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden border-t border-slate-100" id="how-it-works">
      <div className="tech-grid-overlay !opacity-[0.03]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock text-center mb-12 lg:mb-20"
        >
          <div className="eyebrow-wrap justify-center mb-6">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The MediKloud Platform</span>
            <span className="eyebrow-line-r"></span>
          </div>
          <h2 className="premium-h2">
            Everything you need to run your <br className="hidden md:block" />
            <span className="text-indigo-600">clinic and pharmacy</span>, built into one platform.
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-breathing">
          {/* Feature 1: Software */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-6 lg:pr-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/50 relative">
                <Monitor size={20} strokeWidth={1.5} className="mr-2 mb-1" />
                <Smartphone size={16} strokeWidth={1.5} className="absolute bottom-2.5 right-2.5 bg-indigo-50 rounded-sm" />
              </div>
              <h3 className="premium-h3">
                Clinic Management <span className="text-indigo-600">Software.</span>
              </h3>
              <p className="premium-p">
                A simple software to manage your patients, write digital prescriptions, and handle billing without any special training.
              </p>
              <ul className="space-y-3">
                {[
                  "One-click patient registration and queue management",
                  "Digital prescriptions that process instantly",
                  "Real-time visibility of every medicine status"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors group">
                  Explore how our software works
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            <div className="relative h-[400px] flex items-center justify-center group">
              <SoftwareMicroDemo />
            </div>
          </motion.div>

          {/* Feature 2: Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative h-[400px] flex flex-col justify-center items-center group">
                <DeliveryMicroDemo />
            </div>
            <div className="order-1 lg:order-2 space-y-6 lg:pl-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
                <Truck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3">
                10-Minute <span className="text-blue-600">Clinic Delivery.</span>
              </h3>
              <p className="premium-p">
                We stock the medicines you prescribe in our nearby hubs. Our riders deliver them to your patients at the clinic door in just 10 minutes.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated dispatch from local MediKloud Hubs",
                  "Real-time delivery tracking via WhatsApp assistant",
                  "100% authentic medicines with batch-level security"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                  Explore how 10-minute delivery works
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Home Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-6 lg:pr-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/50">
                <Repeat size={24} strokeWidth={1.5} />
              </div>
              <h3 className="premium-h3">
                Medicine <span className="text-emerald-600">Home Delivery.</span>
              </h3>
              <p className="premium-p">
                Keep your patients connected to your clinic. We automatically handle their long-term medicine refills and home delivery via WhatsApp.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated re-order reminders based on your dosage plan",
                  "Consistent patient follow-ups without any manual effort",
                  "Transparent revenue visibility on every fulfilled order"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button onClick={() => {}} className="inline-flex items-center text-[15px] font-bold text-emerald-600 hover:text-emerald-800 transition-colors group">
                  Explore how home delivery works
                  <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative h-[400px] flex items-center justify-center group">
                <RefillMicroDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
