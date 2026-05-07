"use client"

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere'
import { VISION_STATS as visionStats } from '@/components/pages/home/HomeData'

export function Stats() {
  return (
    <section id="stats" className="py-8 md:py-10 relative overflow-hidden">
      <DarkAtmosphere />
      <div className="container-page relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {visionStats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer relative">
              <div className="flex flex-col items-center space-y-3 transform group-hover:scale-110">
                <div className={`relative bg-gradient-to-br ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-12 shadow-card-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl" />
                </div>
                <div>
                  <div className="text-h5 font-bold text-white group-hover:text-indigo-400 leading-tight">
                    {stat.title}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-2 mb-0.5 group-hover:text-brand-indigo-200 text-muted">
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}