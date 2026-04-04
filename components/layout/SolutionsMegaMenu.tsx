"use client"

import React from 'react'
import Link from 'next/link'
import { Pill, PackageX, ChevronRight, Activity, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const solutionGroups = [
  {
    title: 'Clinic Solutions',
    desc: 'Only OPD / Consultations',
    accent: 'indigo',
    icon: Activity,
    items: [
      {
        icon: Pill,
        title: 'Clinic with Pharmacy',
        desc: 'Inventory & staff management',
        href: '/solutions/clinic-with-pharmacy',
      },
      {
        icon: PackageX,
        title: 'Clinic without Pharmacy',
        desc: 'Custom pharmacy pods for clinics',
        href: '/solutions/clinic-without-pharmacy',
      }
    ]
  },
  {
    title: 'Hospital Solutions',
    desc: 'OPD + IPD + OT + Emergencies',
    accent: 'blue',
    icon: Building2,
    items: [
      {
        icon: Pill,
        title: 'Hospital with Pharmacy',
        desc: 'Full operational takeover & setup',
        href: '/solutions/hospital-with-pharmacy',
      },
      {
        icon: PackageX,
        title: 'Hospital without Pharmacy',
        desc: 'Zero-capex revenue recovery layer',
        href: '/solutions/hospital-without-pharmacy',
      }
    ]
  }
]

export default function SolutionsMegaMenu() {
  return (
    <div className="w-[360px] p-4">
      <div className="space-y-6">
        {solutionGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-3">
            {/* Group Header */}
            <div className="px-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-1 h-3 rounded-full",
                  group.accent === 'indigo' ? 'bg-indigo-600' : 'bg-blue-600'
                )} />
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  {group.title}
                </h3>
              </div>
              <span className={cn(
                "text-[9px] font-bold px-2 py-0.5 rounded-md",
                group.accent === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-blue-600'
              )}>
                {group.desc}
              </span>
            </div>
            
            {/* Group Items */}
            <div className="space-y-2">
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon
                return (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="group block relative"
                  >
                    <div className={cn(
                        "flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 border shadow-sm",
                        "bg-white border-slate-200 hover:border-transparent",
                        group.accent === 'indigo' ? "hover:bg-indigo-50/80 hover:shadow-md" : "hover:bg-blue-50/80 hover:shadow-md"
                    )}>
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                                group.accent === 'indigo' 
                                    ? "bg-slate-50 text-indigo-600 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent" 
                                    : "bg-slate-50 text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent"
                            )}>
                                <Icon size={20} />
                            </div>
                            <div className="min-w-0">
                                <p className={cn(
                                    "font-bold text-sm tracking-tight transition-colors duration-300",
                                    group.accent === 'indigo' ? "text-slate-900" : "text-slate-900"
                                )}>
                                    {item.title}
                                </p>
                                <p className="text-[11px] text-slate-400 font-medium tracking-tight mt-0.5 opacity-90">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        <ChevronRight 
                            size={14} 
                            className={cn(
                                "transition-all duration-300 transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 outline-none",
                                group.accent === 'indigo' ? "text-indigo-400" : "text-blue-400"
                            )} 
                        />
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
