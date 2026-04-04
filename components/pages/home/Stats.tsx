"use client"

import { useEffect, useState } from 'react'
import { TrendingUp, Monitor, Bot, Truck } from 'lucide-react'

import { VISION_STATS as visionStats, STATS_PARTICLE_POSITIONS as particlePositions } from '@/components/pages/home/HomeData'

export function Stats() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById('stats')
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true))
      },
      { threshold: 0.1 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section id="stats" className="py-8 md:py-10 bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 relative overflow-hidden will-change-transform">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 overflow-hidden">
        {visible && particlePositions.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
          />
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {visionStats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer relative" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col items-center space-y-3 transform group-hover:scale-110 transition-all duration-500">
                <div className={`relative bg-gradient-to-br ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <stat.icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-200 transition-all duration-500 leading-tight">
                    {stat.title}
                  </div>
                  <div className="text-blue-200 text-xs md:text-sm font-bold mt-1 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



