"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  Activity, 
  LayoutDashboard, 
  Route, 
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  ClipboardList,
  Truck,
  Building2,
  CheckCircle2,
  TrendingUp
} from 'lucide-react'
import { useContactModal } from '@/hooks/use-contact-modal'
import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

// 100% Reliable Inline SVG Avatar Generator (Indian Faces)
const AvatarSVG = ({ gender, seed }: { gender: 'male' | 'female', seed: string }) => {
  // Various Indian skin tones
  const skinTones = ['#a67b5b', '#8e5a3d', '#714022', '#c19375'];
  const skinColor = skinTones[seed.length % skinTones.length];
  const hairColor = "#111827"; // Dark hair
  
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="100" height="100" fill="#1e293b" />
      
      {/* Body/Shoulders */}
      <path d="M 15 110 Q 50 65 85 110" fill={gender === 'female' ? '#ec4899' : '#3b82f6'} opacity="0.3" />
      
      {/* Back hair for female */}
      {gender === 'female' && <path d="M 25 45 Q 10 70 25 90 Q 50 100 75 90 Q 90 70 75 45 Z" fill={hairColor} />}
      
      {/* Neck */}
      <rect x="42" y="60" width="16" height="20" rx="4" fill={skinColor} />
      <rect x="42" y="60" width="16" height="10" fill="#000" opacity="0.15" />
      
      {/* Face */}
      <rect x="30" y="25" width="40" height="48" rx="20" fill={skinColor} />
      
      {/* Male Hair */}
      {gender === 'male' && <path d="M 28 40 Q 50 15 72 40 Q 75 20 50 15 Q 25 20 28 40 Z" fill={hairColor} />}
      
      {/* Female Hair front */}
      {gender === 'female' && <path d="M 28 40 Q 50 20 72 40 Q 50 10 28 40 Z" fill={hairColor} />}
      
      {/* Eyes */}
      <circle cx="42" cy="48" r="3.5" fill="#111827" />
      <circle cx="58" cy="48" r="3.5" fill="#111827" />
      
      {/* Mouth */}
      <path d="M 44 62 Q 50 68 56 62" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      
      {/* Optional Beard for some males based on seed */}
      {gender === 'male' && seed.length % 2 === 0 && (
        <path d="M 32 55 Q 50 78 68 55 Q 50 72 32 55 Z" fill={hairColor} opacity="0.8" />
      )}
    </svg>
  );
};

export function RefillHero() {
  const { openModal } = useContactModal();

  // Dynamic Dispatch State
  const [dispatches, setDispatches] = useState<any[]>([]);
  const activeDispatchesRef = useRef<any[]>([]);

  useEffect(() => {
    const generateDispatch = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const isFemale = Math.random() > 0.5;
      
      // Indian names
      const namesF = ["Priya S.", "Ananya M.", "Kavya R.", "Neha K.", "Aditi V.", "Sneha T.", "Riya D.", "Pooja N."];
      const namesM = ["Rahul D.", "Aditya C.", "Vikram S.", "Rohan K.", "Arjun M.", "Karan L.", "Siddharth P.", "Amit J."];
      const name = isFemale 
        ? namesF[Math.floor(Math.random() * namesF.length)] 
        : namesM[Math.floor(Math.random() * namesM.length)];

      let targetX: number = 0, targetY: number = 0;
      let overlap = true;
      let attempts = 0;
      const currentActive = activeDispatchesRef.current;

      // Anti-Overlap Logic
      while (overlap && attempts < 20) {
        targetX = 45 + Math.random() * 40; // 45% to 85% width
        targetY = 15 + Math.random() * 70; // 15% to 85% height
        
        overlap = currentActive.some(d => {
          const dx = Math.abs(d.x - targetX);
          const dy = Math.abs(d.y - targetY);
          return dx < 25 && dy < 25; 
        });
        attempts++;
      }

      const newDispatch = {
        id,
        name,
        gender: isFemale ? 'female' : 'male',
        x: targetX,
        y: targetY,
        status: 'transit'
      };

      activeDispatchesRef.current = [...currentActive.slice(-2), newDispatch];
      setDispatches(prev => [...prev.slice(-2), newDispatch]);

      setTimeout(() => {
        setDispatches(prev => prev.map(d => d.id === id ? { ...d, status: 'delivered' } : d));
      }, 2000);

      setTimeout(() => {
        setDispatches(prev => prev.filter(d => d.id !== id));
        activeDispatchesRef.current = activeDispatchesRef.current.filter(d => d.id !== id);
      }, 4000);
    };

    generateDispatch();
    const interval = setInterval(generateDispatch, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-[110px] pb-12 md:pt-[130px] md:pb-24">
      {/* Base gradient and atmosphere */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs using standard classes */}
      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] top-[5%] left-[5%]" />
        <div className="blob-indigo w-[32rem] h-[32rem] bottom-[10%] right-[10%]" />
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left pt-8 lg:pt-0"
          >
            {/* Eyebrow pattern aligned with product pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-text text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 font-bold text-[10px] tracking-widest uppercase">
                Digital Health Extension · Patient Retention · 100% Secure
              </span>
            </motion.div>

            <div className="space-y-6">
              {/* Gold standard H1 structure */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                {/* Line 1: Intro */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-2">
                  Enabling Medicine Deliveries from
                </span>

                {/* Line 2: Brand/Product Gradient */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-4 mb-2">
                  Hospital Pharmacies.
                </span>
              </motion.h1>

              {/* Body Copy - Reverted style */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                We provide the technology and resources for patients to order directly from you and deliver them as well.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 pt-2"
            >
              <button
                onClick={openModal}
                className="btn-primary w-full sm:w-auto shadow-btn"
              >
                <Phone size={15} className="opacity-80" />
                Launch Delivery Unit
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-4"
            >
              {[
                { icon: ShieldCheck, text: "100% Reliable" },
                { icon: Zap, text: "Direct Revenue" },
                { icon: Clock, text: "Zero Setup Cost" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 text-slate-600">
                    <Icon className="text-blue-500 w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN (ANIMATED DISPATCH NETWORK) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0"
          >
            {/* Premium Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[3rem] transform rotate-3 scale-105 blur-2xl -z-10" />

            {/* Main Light Engine Terminal Box */}
            <div className="relative z-10 bg-white/80 backdrop-blur-3xl border border-white/60 shadow-[0_30px_100px_-20px_rgba(30,58,138,0.15)] ring-1 ring-slate-900/5 rounded-[2.5rem] overflow-hidden flex flex-col">
              
              {/* Abstract Tech Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.4] pointer-events-none" />

              <div className="p-6 sm:p-8 relative z-10 flex-1">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100/60">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                       <Activity size={16} className="text-blue-600 animate-pulse" />
                     </div>
                     <span className="text-[12px] font-bold text-slate-900 tracking-widest uppercase">Live Dispatch Map</span>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[9px] font-bold text-emerald-600 tracking-widest uppercase">Routing</span>
                   </div>
                </div>

                {/* --- DYNAMIC HOSPITAL TO PATIENT VISUALIZATION --- */}
                <div className="h-[280px] relative w-full overflow-hidden rounded-2xl bg-slate-50/50 shadow-inner">
                   
                   {/* Dynamic Connecting Lines (SVG Tracks) */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                     <AnimatePresence>
                       {dispatches.map(d => (
                         <motion.line
                           key={`line-${d.id}`}
                           x1="15%" y1="50%" // Starts at Hospital center
                           x2={`${d.x}%`} y2={`${d.y}%`} // Ends at Patient
                           stroke={d.status === 'delivered' ? 'rgba(16,185,129,0.5)' : 'rgba(59,130,246,0.3)'}
                           strokeWidth="2.5"
                           strokeDasharray="4 4"
                           initial={{ pathLength: 0, opacity: 0 }}
                           animate={{ pathLength: 1, opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                         />
                       ))}
                     </AnimatePresence>
                   </svg>

                   {/* 1. SOURCE: Hospital Pharmacy (Fixed Position) */}
                   <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] z-20">
                      <div className="relative group">
                         <motion.div 
                           animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0, 0.1] }} 
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                           className="absolute inset-0 bg-blue-500 rounded-3xl blur-xl" 
                         />
                         
                         <div className="relative bg-white/95 backdrop-blur-md border border-blue-100 p-4 rounded-2xl flex flex-col items-center gap-3 w-full shadow-lg">
                            <div className="relative">
                               <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 rounded-xl" />
                               <div className="relative bg-blue-600 p-3 rounded-xl shadow-md">
                                  <Building2 size={24} className="text-white" />
                               </div>
                            </div>
                            <div className="text-center w-full">
                               <div className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-wider">Hospital</div>
                               <div className="text-blue-600 text-[8px] sm:text-[9px] uppercase tracking-widest mt-0.5 font-bold">Pharmacy</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* 2 & 3. DYNAMIC PATIENTS & TRUCKS */}
                   <AnimatePresence>
                     {dispatches.map(d => (
                       <React.Fragment key={d.id}>
                         
                         {/* Moving Delivery Truck */}
                         {d.status === 'transit' && (
                           <motion.div
                             initial={{ left: "15%", top: "50%", opacity: 0, scale: 0.5 }}
                             animate={{ left: `${d.x}%`, top: `${d.y}%`, opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.5 }}
                             transition={{ duration: 2, ease: "linear" }}
                             className="absolute -ml-3 -mt-3 z-30"
                           >
                              <div className="bg-white border border-blue-200 p-1.5 rounded-full shadow-lg">
                                 <Truck size={14} className="text-blue-600" />
                              </div>
                           </motion.div>
                         )}

                         {/* Dynamically Popping Patient Destination */}
                         <motion.div
                           initial={{ opacity: 0, scale: 0.5, y: 10 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.8 }}
                           transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                           style={{ left: `${d.x}%`, top: `${d.y}%` }}
                           className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                         >
                            <div className={`bg-white/90 backdrop-blur-md border ${d.status === 'delivered' ? 'border-emerald-200 shadow-lg' : 'border-slate-100'} p-2 rounded-xl flex items-center gap-2.5 min-w-[130px] transition-all duration-300 shadow-sm ring-1 ring-black/5`}>
                               
                                {/* Inline SVG Patient Avatar */}
                                <div className="relative shrink-0 w-8 h-8 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                                  <AvatarSVG gender={d.gender} seed={d.name} />
                                </div>

                                <div className="min-w-0 flex-1">
                                   <div className="text-slate-900 text-[10px] sm:text-[11px] font-bold truncate">{d.name}</div>
                                   <div className="text-[8px] uppercase tracking-widest mt-0.5 truncate flex items-center gap-1 font-bold">
                                     {d.status === 'delivered' ? (
                                        <><CheckCircle2 size={10} className="text-emerald-500"/> <span className="text-emerald-600">Delivered</span></>
                                     ) : (
                                        <><Clock size={10} className="text-blue-500 animate-pulse"/> <span className="text-slate-400">En Route</span></>
                                     )}
                                   </div>
                                </div>
                            </div>
                         </motion.div>

                       </React.Fragment>
                     ))}
                   </AnimatePresence>

                </div>
              </div>

              {/* Integrated Metrics Footer */}
              <div className="relative z-10 bg-slate-50/80 border-t border-slate-100 p-4 sm:p-5 backdrop-blur-xl">
                 <div className="grid grid-cols-2 gap-4">
                    {/* Brand Status Metric */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:bg-white/60 transition-colors shadow-sm">
                       <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                          <CheckCircle2 size={18} />
                       </div>
                       <div className="min-w-0">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 truncate">Brand Status</p>
                          <p className="text-xs sm:text-sm font-black text-slate-900 leading-none truncate">100% Retained</p>
                       </div>
                    </div>
                    
                    {/* Revenue Metric */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:bg-white/60 transition-colors shadow-sm">
                       <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                          <TrendingUp size={18} />
                       </div>
                       <div className="min-w-0">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 truncate">Direct Revenue</p>
                          <p className="text-xs sm:text-sm font-black text-slate-900 leading-none truncate">Secured</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

          </motion.div>
        </div>
      </div>

      {/* Strategic Outcome Banner - Matched to HMS format */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-12 relative z-10 w-full hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-center shadow-float relative overflow-hidden group"
        >
          {/* Background decorative glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold text-white max-w-4xl mx-auto leading-[1.1] tracking-tight">
              <span className="font-black bg-gradient-display bg-clip-text text-transparent">Bridge the gap between consultation</span><br className="hidden md:block" />
              and doorstep care.
            </h3>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
