"use client"

import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  ChevronRight,
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
    tagline: 'Full operational takeover of your hospital pharmacy.',
    href: '/products/managed-pharmacy',
    color: 'blue'
  },
  {
    icon: Truck,
    title: 'Virtual Pharmacy',
    tagline: 'Hyper-local hub fulfillment for small clinics.',
    href: '/products/virtual-pharmacy',
    color: 'indigo'
  },
  {
    icon: Cpu,
    title: 'Integrated HMS',
    tagline: 'AI-first management layer for the entire facility.',
    href: '/products/hospital-management-system',
    color: 'blue'
  },
  {
    icon: RotateCw,
    title: 'Refill Engine',
    tagline: 'Automated retention for chronic care patients.',
    href: '/products/refill-engine',
    color: 'indigo'
  }
]

export default function ProductsMegaMenu() {
  return (
    <div className="w-[410px] p-5">
      <div className="px-1 flex flex-col gap-2.5 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 rounded-full bg-blue-600" />
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Ecosystem</h3>
        </div>
        <div className="inline-flex">
          <span className="text-[10px] font-bold px-3 py-1 rounded-xl leading-relaxed bg-blue-50 text-blue-600">
              Integrated Technology & Logistics
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {products.map((product, i) => {
          const Icon = product.icon
          const isBlue = product.color === 'blue'
          
          return (
            <Link
              key={i}
              href={product.href}
              className="group block"
            >
              <div className={cn(
                "flex items-center justify-between p-4 rounded-[24px] transition-all duration-300 border",
                "relative overflow-hidden shadow-sm",
                isBlue 
                  ? "bg-blue-50/30 border-blue-100/50 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md" 
                  : "bg-indigo-50/30 border-indigo-100/50 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-md",
                "hover:scale-[1.01] active:scale-[0.99]"
              )}>
                <div className="flex items-center gap-4 relative z-10">
                  {/* Icon Container */}
                  <div className={cn(
                    "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
                    isBlue 
                        ? "bg-blue-600 text-white shadow-blue-200" 
                        : "bg-indigo-600 text-white shadow-indigo-200"
                  )}>
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="min-w-0">
                    <p className="font-bold text-[15px] text-slate-900 tracking-tight leading-none mb-1.5 flex items-center gap-1.5">
                      {product.title}
                      <span className={cn(
                        "w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                        isBlue ? "bg-blue-400" : "bg-indigo-400"
                      )} />
                    </p>
                    <p className="text-[12px] text-slate-500 font-medium tracking-tight opacity-80 group-hover:opacity-100 transition-opacity">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Interactive Arrow CTA */}
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                  isBlue 
                    ? "border-blue-200 text-blue-500 bg-white group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent" 
                    : "border-indigo-200 text-indigo-500 bg-white group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent"
                )}>
                  <ChevronRight 
                    size={14} 
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Subtle background glow on hover */}
                <div className={cn(
                  "absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-0 transition-opacity duration-500",
                  isBlue ? "bg-blue-400/10 group-hover:opacity-100" : "bg-indigo-400/10 group-hover:opacity-100"
                )} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
