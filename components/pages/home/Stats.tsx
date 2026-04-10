"use client"

import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere'
import { VISION_STATS as visionStats } from '@/components/pages/home/HomeData'

export function Stats() {
  return (
    <section id="stats" className="py-8 md:py-10 relative overflow-hidden">
      <DarkAtmosphere withMouseEffect={false} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {visionStats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer relative">
              <div className="flex flex-col items-center space-y-3 transform group-hover:scale-110">
                <div className={`relative bg-gradient-to-br ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-12 shadow-xl`}>
                  <stat.icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 leading-tight">
                    {stat.title}
                  </div>
                  <div className="text-indigo-200/60 text-[11px] font-bold uppercase tracking-widest mt-1.5 group-hover:text-indigo-300">
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



