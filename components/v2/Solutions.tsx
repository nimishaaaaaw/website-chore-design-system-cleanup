"use client"

import React, { useEffect, useRef, useState, useId } from 'react'
import { cn } from '@/lib/utils'
import { Database, Zap, Truck, Smartphone, Hospital, Pill, BarChart3, Target, Globe, Rocket, Monitor, PieChart, Landmark, Link, Clock, Users } from 'lucide-react'
import { getModernCardTheme } from './theme'

import { SOLUTIONS_SECTIONS as sidebarSections } from './v2-data'

const StickySection = React.forwardRef<HTMLDivElement, { section: typeof sidebarSections[0]; isActive: boolean; instanceId: string }>(
  ({ section, isActive, instanceId }, ref) => {
    const theme = getModernCardTheme(section.id)
    return (
      <div
        ref={ref}
        id={`section-${instanceId}-${section.id}`}
        className={`md:min-h-[550px] h-auto flex items-stretch md:items-center justify-start md:justify-center p-4 md:p-10 bg-gradient-to-br from-gray-50/30 via-white to-gray-50/30 scroll-mt-24 ${isActive ? 'opacity-100' : 'opacity-30'}`}
      >
        <div className="max-w-4xl w-full">
          <div className={`${theme.cardBg} rounded-2xl p-8 border border-white/40`}>
            <div className="text-center mb-8">
              <div className="md:hidden flex justify-center mb-3">
                <span
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold bg-white/80 border-white/60',
                    theme.headerColor
                  )}
                >
                  {section.title}
                </span>
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${theme.headerColor} leading-tight`}
              >
                {section.content.heading}
              </h2>
              <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {section.content.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {section.content.items.map((item, index) => (
                <div key={index} className={`${theme.featureCardBg} rounded-2xl p-5 border ${theme.featureCardBorder}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 ${theme.iconBg} ${theme.iconShadow} shadow-lg rounded-xl text-white`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  })
StickySection.displayName = 'StickySection'

export function Solutions() {
  const [activeSection, setActiveSection] = useState(0)
  const mobileTabsRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const instanceId = useId().replace(/:/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex((el) => el === entry.target)
            if (index >= 0) setActiveSection(index)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -30% 0px', threshold: 0.1 }
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    requestAnimationFrame(() => {
      const viewportCenter = window.innerHeight * 0.5
      let idx = 0
      sectionsRef.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.top <= viewportCenter && r.bottom >= viewportCenter) idx = i
      })
      setActiveSection(idx)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(`section-${instanceId}-${id}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div id="who-we-serve" className="relative isolate">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden lg:flex sticky top-16 h-[calc(100vh-4rem)] bg-white border-r flex border-transparent justify-start w-[20rem] md:w-[22rem] lg:w-[24rem] border-t-0 border-l-0 opacity-100 font-light flex-col items-stretch p-0 gap-0 mx-0 text-slate-400">
          <div className="flex h-full w-full flex-col px-6 py-6">
            <div className="sticky top-0 z-10 bg-white pt-2 pb-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 leading-tight">Why MediKloud</h2>
              <p className="text-xs font-bold text-slate-700 leading-relaxed mb-0.5 uppercase tracking-wide">Why it works</p>
              <p className="text-xs text-slate-500 leading-relaxed">Closing revenue gaps for independent hospitals every day.</p>
            </div>
            <nav className="w-full max-w-none space-y-4 font-sans pr-2 overflow-visible">
              {sidebarSections.map((section, index) => (
                <button
                  key={section.id}
                  className="group p-4 rounded-2xl cursor-pointer py-2 text-left"
                  onClick={() => handleClick(section.id)}
                  aria-controls={`section-${instanceId}-${section.id}`}
                  aria-current={activeSection === index ? 'true' : undefined}
                >
                  <h3
                    title={section.title}
                    className={cn(
                      'font-semibold text-2xl md:text-3xl whitespace-nowrap truncate leading-tight transition-all duration-300',
                      activeSection === index
                        ? `bg-gradient-to-r ${getModernCardTheme(section.id).sidebarGradient} bg-clip-text text-transparent transform scale-105`
                        : 'text-slate-300 hover:text-slate-400'
                    )}
                  >
                    {section.title}
                  </h3>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 bg-white">
          {/* Spacer first on mobile to prevent sticky tabs overlapping previous section */}
          <div className="h-16 md:h-20 lg:h-24"></div>

          {/* Mobile and Tablet header and description */}
          <div className="lg:hidden px-4 pb-2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 leading-tight">Why MediKloud</h2>
            <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-1">Why it works for your hospital</p>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">MediKloud closes the revenue gaps that independent hospitals and clinics lose money through — every single day.</p>
          </div>

          <div className="lg:hidden sticky top-16 z-10 bg-white/95 backdrop-blur-sm border-b">
            <div ref={mobileTabsRef} className="flex gap-2 px-4 py-3 overflow-x-auto">
              {sidebarSections.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => handleClick(s.id)}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-full border whitespace-nowrap transition-colors',
                    activeSection === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent'
                      : 'border-slate-200 text-slate-600'
                  )}
                  aria-controls={`section-${instanceId}-${s.id}`}
                  aria-current={activeSection === index ? 'true' : undefined}
                  aria-selected={activeSection === index ? true : undefined}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
          {sidebarSections.map((section, index) => (
            <StickySection
              key={section.id}
              ref={(el) => { sectionsRef.current[index] = el }}
              section={section}
              isActive={activeSection === index}
              instanceId={instanceId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



