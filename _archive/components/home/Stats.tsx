"use client"

import { useEffect, useState } from 'react'
import { CheckCircle, Package, Building2, Timer } from 'lucide-react'

const visionStats = [
  { number: '10 Min Delivery', label: 'Medicines & lab samples', sublabel: '', icon: Timer, color: 'from-green-500 to-teal-500' },
  { number: 'AI', label: 'Agents at Core', sublabel: '', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
  { number: 'Free HMS', label: 'Zero-cost hospital software', sublabel: '', icon: Package, color: 'from-purple-500 to-pink-500' },
  { number: 'Built for All', label: 'Small clinics to state hospitals', sublabel: '', icon: Building2, color: 'from-orange-500 to-red-500' },
]

const particlePositions = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 6) * 0.35}s`,
  duration: `${2 + (i % 4) * 0.5}s`,
}))

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
    <section id="stats" className="py-12 sm:py-20 bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 relative overflow-hidden will-change-transform">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((p, i) => (
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
              <div className="flex flex-col items-center space-y-4 transform group-hover:scale-110 transition-all duration-500">
                <div className={`relative bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <stat.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-all duration-500 tabular-nums leading-tight">
                  <span className="inline-block">{stat.number}</span>
                </div>
                <div className="text-blue-50 text-sm md:text-base group-hover:text-white transition-colors duration-300 leading-relaxed">{stat.label}</div>
                {stat.sublabel && (
                  <div className="text-blue-100 text-xs md:text-sm group-hover:text-blue-200 transition-colors duration-300 leading-relaxed">{stat.sublabel}</div>
                )}
              </div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



