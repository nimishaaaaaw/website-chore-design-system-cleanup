"use client"

import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Settings, 
  Truck, 
  Cpu, 
  RotateCw,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const products = [
  {
    icon: Settings,
    title: 'Managed Pharmacy',
    tagline: 'Full ops takeover for hospitals',
    href: '/products/managed-pharmacy',
    color: 'blue'
  },
  {
    icon: Truck,
    title: 'Virtual Pharmacy',
    tagline: 'Hub fulfillment for clinics',
    href: '/products/virtual-pharmacy',
    color: 'indigo'
  },
  {
    icon: Cpu,
    title: 'Free HMS',
    tagline: 'AI-powered control layer',
    href: '/products/hospital-management-system',
    color: 'blue'
  },
  {
    icon: RotateCw,
    title: 'Refill Engine',
    tagline: 'Automated chronic retention',
    href: '/products/refill-engine',
    color: 'indigo'
  }
]

export default function ProductsMegaMenu() {
  return (
    <div className="w-[340px] p-4">
      <div className="flex items-center justify-between mb-5 px-1.5">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Our Ecosystem</h3>
        <Zap size={10} className="text-blue-500/50" />
      </div>
      
      <div className="space-y-2">
        {products.map((product, i) => {
          const Icon = product.icon
          
          return (
            <Link
              key={i}
              href={product.href}
              className="group block relative"
            >
              <div className={cn(
                "flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 border shadow-sm",
                "bg-white border-slate-200 hover:border-transparent",
                product.color === 'blue' ? "hover:bg-blue-50/80" : "hover:bg-indigo-50/80"
              )}>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                    product.color === 'blue' 
                        ? "bg-slate-50 text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent" 
                        : "bg-slate-50 text-indigo-600 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent"
                  )}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className={cn(
                      "font-bold text-sm tracking-tight transition-colors duration-300",
                      product.color === 'blue' ? "text-slate-900 group-hover:text-blue-600" : "text-slate-900 group-hover:text-indigo-600"
                    )}>
                      {product.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium tracking-tight mt-0.5 opacity-90 truncate">
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight 
                  size={14} 
                  className={cn(
                    "transition-all duration-300 transform -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
                    product.color === 'blue' ? "text-blue-400" : "text-indigo-400"
                  )} 
                />
              </div>
            </Link>
          )
        })}
      </div>
      

    </div>
  )
}
