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
    <div className="w-[410px] p-5">
      <div className="space-y-7">
        {solutionGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            {/* Group Header */}
            <div className="px-1 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-1 h-3 rounded-full",
                  group.accent === 'indigo' ? 'bg-indigo-600' : 'bg-blue-600'
                )} />
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {group.title}
                </h3>
              </div>
              <div className="inline-flex">
                <span className={cn(
                    "text-[10px] font-bold px-3 py-1 rounded-xl leading-relaxed",
                    group.accent === 'indigo' ? "bg-indigo-50 text-indigo-600" : "bg-blue-50 text-blue-600"
                )}>
                    {group.desc}
                </span>
              </div>
            </div>
            
            {/* Group Items */}
            <div className="space-y-3">
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
                        "flex items-center justify-between p-4 rounded-[24px] transition-all duration-300 border",
                        "relative overflow-hidden shadow-sm",
                        isIndigo 
                          ? "bg-indigo-50/30 border-indigo-100/50 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-md" 
                          : "bg-blue-50/30 border-blue-100/50 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md",
                        "hover:scale-[1.01] active:scale-[0.99]"
                    )}>
                        <div className="flex items-center gap-4 relative z-10">
                            {/* Icon Container */}
                            <div className={cn(
                                "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
                                isIndigo 
                                    ? "bg-indigo-600 text-white shadow-indigo-200" 
                                    : "bg-blue-600 text-white shadow-blue-200"
                            )}>
                                <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            
                            <div className="min-w-0">
                                <p className="font-bold text-[15px] text-slate-900 tracking-tight leading-none mb-1.5 flex items-center gap-1.5">
                                    {item.title}
                                    {isIndigo && <span className="w-1 h-1 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </p>
                                <p className="text-[12px] text-slate-500 font-medium tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {/* Interactive Arrow CTA */}
                        <div className={cn(
                          "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                          isIndigo 
                            ? "border-indigo-200 text-indigo-500 bg-white group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent" 
                            : "border-blue-200 text-blue-500 bg-white group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent"
                        )}>
                          <ChevronRight 
                              size={14} 
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </div>

                        {/* Subtle background glow on hover */}
                        <div className={cn(
                          "absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-0 transition-opacity duration-500",
                          isIndigo ? "bg-indigo-400/10 group-hover:opacity-100" : "bg-blue-400/10 group-hover:opacity-100"
                        )} />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-slate-50 px-2 flex items-center justify-center gap-2">
        <p className="text-[10px] text-slate-400 font-medium italic tracking-tight">
            AI-driven ops for modern healthcare.
        </p>
      </div>
    </div>
  )
}
