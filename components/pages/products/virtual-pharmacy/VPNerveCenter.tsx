'use client';

import React from 'react';
import { Building2, Plus, Clock, Package, ShieldCheck, Activity, MapPin, Zap, Bike } from 'lucide-react';

const clinics = [
  { 
    id: 1, name: "City Health Clinic", x: 260, y: 140, path: "M500,325 Q350,300 260,140", 
    deliveries: [{ delay: 0, dur: 2.5 }, { delay: 1.2, dur: 2.5 }, { delay: 2.8, dur: 2.5 }] 
  },
  { 
    id: 2, name: "Wellness Care", x: 880, y: 160, path: "M500,325 Q650,250 880,160", 
    deliveries: [{ delay: 0.5, dur: 4.5 }, { delay: 3.0, dur: 4.5 }] 
  },
  { 
    id: 3, name: "Prime Pediatrics", x: 140, y: 510, path: "M500,325 Q350,380 140,510", 
    deliveries: [{ delay: 1.5, dur: 5.5 }] 
  },
  { 
    id: 4, name: "Family Practice", x: 760, y: 540, path: "M500,325 Q600,450 760,540", 
    deliveries: [{ delay: 0.8, dur: 3.2 }, { delay: 2.4, dur: 3.2 }] 
  },
  { 
    id: 5, name: "Metro Care Plus", x: 580, y: 80, path: "M500,325 Q550,200 580,80", 
    deliveries: [{ delay: 2.0, dur: 3.8 }, { delay: 4.2, dur: 3.8 }] 
  },
];

export const VPNerveCenter = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#030712] text-slate-200 flex flex-col justify-center py-12 md:py-20">
      {/* Background Gradient Matched to User Code */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <div className="container-page flex flex-col items-center relative z-10">
        {/* Section Header - Removed as per user request */}

        {/* Main Animation Container */}
        <div className="w-full max-w-6xl bg-[#0B1120] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] relative mb-16 ring-1 ring-white/5">
          
          {/* SVG Animation Canvas */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
            <svg 
              viewBox="0 0 1000 650" 
              className="w-full h-full absolute inset-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="radarSweep" x1="50%" y1="50%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                  <stop offset="80%" stopColor="rgba(59, 130, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                </linearGradient>
              </defs>

              {/* Grid Background */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Radar Animation centered on Hub */}
              <g id="radar-system">
                {[0, 1.3, 2.6].map((delay, i) => (
                  <circle key={`ring-${i}`} cx="500" cy="325" r="20" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="500" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="4s" begin={`${delay}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                
                {/* Radar Sweeper */}
                <path d="M500,325 L500,-175 A500,500 0 0,1 700,-130 Z" fill="url(#radarSweep)" opacity="0.4">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0 500 325" 
                    to="360 500 325" 
                    dur="8s" 
                    repeatCount="indefinite" 
                  />
                </path>
              </g>

              {/* Delivery Routes (Curved Paths) */}
              {clinics.map((clinic) => (
                <g key={`route-${clinic.id}`}>
                  {/* Background Track */}
                  <path 
                    d={clinic.path} 
                    fill="none" 
                    stroke="rgba(59, 130, 246, 0.1)" 
                    strokeWidth="4" 
                  />
                  {/* Flowing Dashed Line */}
                  <path 
                    d={clinic.path} 
                    fill="none" 
                    stroke="rgba(59, 130, 246, 0.5)" 
                    strokeWidth="2" 
                    strokeDasharray="6 8"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="28" 
                      to="0" 
                      dur="1s" 
                      repeatCount="indefinite" 
                    />
                  </path>

                  {/* Animated Delivery Riders (Multiple per path) */}
                  {clinic.deliveries.map((delivery, i) => (
                    <g key={`rider-${clinic.id}-${i}`} filter="url(#glow)">
                      <animateMotion dur={`${delivery.dur}s`} begin={`${delivery.delay}s`} repeatCount="indefinite" path={clinic.path} />
                      <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.05; 0.9; 1" dur={`${delivery.dur}s`} begin={`${delivery.delay}s`} repeatCount="indefinite" />
                      
                      <g transform="translate(-16, -16)">
                        {/* Outer Glow Badge */}
                        <circle cx="16" cy="16" r="18" fill="rgba(16, 185, 129, 0.2)" />
                        {/* Badge Background */}
                        <circle cx="16" cy="16" r="14" fill="#047857" stroke="#10B981" strokeWidth="1.5" />
                        {/* Bike Icon */}
                        <Bike x="6" y="6" width="20" height="20" color="#ffffff" strokeWidth={2.5} />
                      </g>
                    </g>
                  ))}
                </g>
              ))}

              {/* Foreign Objects for HTML Elements (Clinics) */}
              {clinics.map((clinic) => (
                <foreignObject 
                  key={`clinic-${clinic.id}`}
                  x={clinic.x - 90} 
                  y={clinic.y - 50} 
                  width="180" 
                  height="100"
                  className="overflow-visible"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full group cursor-default">
                    <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/60 border-t-blue-500/50 p-3.5 rounded-2xl shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#1e293b]/90 group-hover:border-t-blue-400 flex flex-col items-center gap-1.5 z-10 w-full relative">
                      {/* Active Clinic Ping indicator */}
                      <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" style={{ animationDuration: '3s' }}></span>
                         <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-[#0f172a]"></span>
                      </div>
                      <div className="bg-slate-800/50 p-2 rounded-lg">
                        <Building2 className="w-5 h-5 text-blue-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-100 text-center leading-tight whitespace-nowrap tracking-wide">{clinic.name}</span>
                    </div>
                    <div className="mt-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      <MapPin className="w-3 h-3" /> Doorstep
                    </div>
                  </div>
                </foreignObject>
              ))}

              {/* Central Dark Hub */}
              <foreignObject x={500 - 120} y={325 - 100} width="240" height="200">
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="relative group cursor-default">
                    {/* Outer glowing rings */}
                    <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse transition-opacity group-hover:opacity-50"></div>
                    
                    {/* Main Hub Box */}
                    <div className="bg-slate-900/90 backdrop-blur-2xl border border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.3)] p-6 rounded-[2rem] flex flex-col items-center relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                      <div className="relative mb-3">
                        <div className="absolute inset-0 bg-blue-400 blur-lg opacity-50"></div>
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl relative z-10 shadow-inner">
                          <Plus className="w-8 h-8 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-base font-extrabold text-white mb-1.5 tracking-tight">Dark Pharmacy Hub</span>
                      <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">
                          Inventory Core
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>

          {/* Overlay Stats/Info positioned at the bottom corners */}
          <div className="absolute bottom-6 left-6 hidden md:block">
            <div className="bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Avg Response</p>
                  <p className="text-2xl font-black text-white tracking-tight">9.4 min</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden md:block">
            <div className="bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl">
                  <Activity className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Fulfillment</p>
                  <p className="text-2xl font-black text-white tracking-tight">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (Adapted from User's original sections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {[
            {
              title: "10-Min Fulfillment",
              desc: "Optimistic dispatch sends riders out the moment a prescription is signed. Patients get meds before leaving the clinic.",
              icon: Clock,
              colors: {
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
                text: "text-blue-400",
                gradient: "from-blue-500 to-indigo-500",
                shadow: "rgba(59, 130, 246, 0.15)"
              }
            },
            {
              title: "Zero Inventory Risk",
              desc: "We stock 100% of your tailored formulary in our central hub. Zero expiry or dead stock burden on your clinic.",
              icon: ShieldCheck,
              colors: {
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
                text: "text-emerald-400",
                gradient: "from-emerald-500 to-teal-500",
                shadow: "rgba(16, 185, 129, 0.15)"
              }
            },
            {
              title: "Zero Space Needed",
              desc: "No valuable patient space wasted on pharmacy counters. Operates entirely as a virtual node in the background.",
              icon: Building2,
              colors: {
                bg: "bg-purple-500/10",
                border: "border-purple-500/20",
                text: "text-purple-400",
                gradient: "from-purple-500 to-fuchsia-500",
                shadow: "rgba(168, 85, 247, 0.15)"
              }
            },
            {
              title: "100% Brand Accuracy",
              desc: "We guarantee the exact brands you prescribe. Real-time HMS integration ensures flawless physical delivery.",
              icon: Package,
              colors: {
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
                text: "text-amber-400",
                gradient: "from-amber-500 to-orange-500",
                shadow: "rgba(245, 158, 11, 0.15)"
              }
            }
          ].map((feature, idx) => (
            <div key={idx} className={`group relative bg-[#0f172a]/50 backdrop-blur-md border border-slate-800 p-8 rounded-[2rem] hover:bg-[#1e293b]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_${feature.colors.shadow}] overflow-hidden`}>
               {/* Accent bar */}
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`${feature.colors.bg} ${feature.colors.border} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-7 h-7 ${feature.colors.text}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
