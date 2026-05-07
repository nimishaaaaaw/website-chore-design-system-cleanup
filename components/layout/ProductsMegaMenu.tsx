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
    title: 'Medicine Deliveries',
    tagline: 'Automated retention for chronic care patients.',
    href: '/products/medicine-deliveries',
    color: 'indigo'
  }
]

export default function ProductsMegaMenu() {
  return (
    <div className="w-[440px] p-5">

      {/* Header */}
      <div className="px-1 flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 rounded-full bg-brand-600" />
          <h3 className="eyebrow-text">Our Ecosystem</h3>
        </div>
        <div className="inline-flex">
          <span className="badge badge-brand">
            Integrated Technology &amp; Logistics
          </span>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-2">
        {products.map((product, i) => {
          const Icon = product.icon
          const isBlue = product.color === 'blue'

          return (
            <Link key={i} href={product.href} className="group block">
              <div className={cn(
                "flex items-center justify-between p-4 rounded-3xl transition-all duration-300 border",
                "relative overflow-hidden shadow-card active:scale-[0.985]",
                isBlue
                  ? "bg-white border-slate-100 hover:border-brand-200 hover:shadow-card-md"
                  : "bg-white border-slate-100 hover:border-brand-indigo-200 hover:shadow-card-md"
              )}>

                <div className="flex items-center gap-5 relative z-10">
                  {/* Icon Container */}
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm",
                    isBlue
                      ? "bg-brand-600 text-white"
                      : "bg-brand-indigo-600 text-white"
                  )}>
                    <Icon size={22} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-h4 tracking-tight leading-none mb-2 flex items-center gap-2">
                      {product.title}
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                        isBlue ? "bg-brand-400" : "bg-brand-indigo-400"
                      )} />
                    </p>
                    <p className="text-sm text-subtitle">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Arrow CTA */}
                <div className={cn(
                  "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300",
                  isBlue
                    ? "border-slate-200 text-slate-400 bg-white group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-btn"
                    : "border-slate-200 text-slate-400 bg-white group-hover:bg-brand-indigo-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-btn"
                )}>
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Hover glow */}
                <div className={cn(
                  "absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-700",
                  isBlue
                    ? "bg-brand-400/10 group-hover:opacity-100"
                    : "bg-brand-indigo-400/10 group-hover:opacity-100"
                )} />

              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}