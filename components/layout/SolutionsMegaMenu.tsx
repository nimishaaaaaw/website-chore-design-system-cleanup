"use client"

import React from 'react'
import Link from 'next/link'
import { Pill, PackageX, ChevronRight, Activity, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const solutionGroups = [
  {
    title: 'Choose Your Setup',
    desc: "Solutions built for your facility's current stage.",
    accent: 'indigo',
    icon: Building2,
    items: [
      {
        icon: Pill,
        title: 'I have an In-House Pharmacy',
        desc: 'Optimize ops, staff & inventory management',
        href: '/solutions/with-pharmacy',
        color: 'indigo'
      },
      {
        icon: PackageX,
        title: 'No Pharmacy Yet',
        desc: 'Launch a digital pharmacy in 10 minutes',
        href: '/solutions/without-pharmacy',
        color: 'blue'
      }
    ]
  }
]

export default function SolutionsMegaMenu() {
  return (
    <div className="w-[440px] p-6">
      <div className="space-y-8">
        {solutionGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-5">
            {/* Group Header */}
            <div className="px-1 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-1 h-3 rounded-full",
                  group.accent === 'indigo' ? 'bg-brand-indigo-600' : 'bg-brand-500'
                )} />
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.15em]">
                  {group.title}
                </h3>
              </div>
              <div className="inline-flex">
                <span className={cn(
                    "text-xs font-semibold px-3 py-1 rounded-full border leading-relaxed",
                    group.accent === 'indigo' 
                      ? "bg-brand-indigo-50 text-brand-indigo-600 border-brand-indigo-100" 
                      : "bg-brand-50 text-brand-600 border-brand-100"
                )}>
                    {group.desc}
                </span>
              </div>
            </div>
            
            {/* Group Items */}
            <div className="space-y-4">
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon
                const isIndigo = (item.color || group.accent) === 'indigo'
                
                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="group block"
                  >
                    <div className={cn(
                        "flex items-center justify-between p-5 rounded-3xl transition-all duration-300 border",
                        "relative overflow-hidden shadow-card",
                        isIndigo 
                          ? "bg-white border-slate-100 hover:border-brand-indigo-200 hover:shadow-card-md" 
                          : "bg-white border-slate-100 hover:border-brand-200 hover:shadow-card-md",
                        "active:scale-[0.985]"
                    )}>
                        <div className="flex items-center gap-5 relative z-10">
                            {/* Icon Container */}
                            <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
                                isIndigo 
                                    ? "bg-brand-indigo-600 text-white" 
                                    : "bg-brand-600 text-white"
                            )}>
                                <Icon size={22} className="group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            
                            <div className="min-w-0">
                                <p className="font-bold text-base text-slate-900 tracking-tight leading-none mb-2 flex items-center gap-2">
                                    {item.title}
                                    {isIndigo && <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </p>
                                <p className="text-sm text-slate-500 font-medium tracking-tight leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {/* Interactive Arrow CTA */}
                        <div className={cn(
                          "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300",
                          isIndigo 
                            ? "border-slate-200 text-slate-400 bg-white group-hover:bg-brand-indigo-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-btn" 
                            : "border-slate-200 text-slate-400 bg-white group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-btn"
                        )}>
                          <ChevronRight 
                              size={16} 
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </div>

                        {/* Subtle background glow on hover */}
                        <div className={cn(
                          "absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-700",
                          isIndigo ? "bg-brand-indigo-400/10 group-hover:opacity-100" : "bg-brand-400/10 group-hover:opacity-100"
                        )} />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 px-2 flex items-center justify-center gap-2">
        <div className="w-1 h-1 rounded-full bg-brand-500" />
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
            AI-driven ops for modern healthcare
        </p>
      </div>
    </div>
  )
}
