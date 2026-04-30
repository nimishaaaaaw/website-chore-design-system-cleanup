"use client"

import React from 'react'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'

// Lazy load ParticleNetwork as it is a heavy canvas component
const ParticleNetwork = dynamic(
  () => import('@/components/shared/ParticleNetwork').then((mod) => mod.ParticleNetwork),
  { ssr: false }
)

interface MainHeroProps {
  children?: React.ReactNode
}

export function MainHero({ children }: MainHeroProps) {
  const { openModal } = useContactModal()
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-section-lg pb-section-sm">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas - Client-side Only */}
      <ParticleNetwork showParticles={true} />

      {/* Ambient glow orbs — staggered animations for premium feel */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand-100/30 rounded-full blur-[80px] animate-float-slow" aria-hidden="true" />
      {/* Fixed invalid color namespace */}
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-indigo-100/20 rounded-full blur-[90px] animate-float-slower" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      {/* Mapped to container-page token */}
      <div className="container-page relative z-10 w-full">
        {/* Mapped arbitrary 1000px to standard max-w-5xl */}
        <div className="text-center max-w-5xl mx-auto">

          {/* Eyebrow — above the h1, not inside it */}
          <div className="eyebrow-wrap justify-center animate-fade-in opacity-0 [animation-delay:60ms] [animation-fill-mode:forwards]">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Zero Capex · AI-Driven · End-to-End</span>
            <span className="eyebrow-line-r" />
          </div>

          {/* ── Main Content Block (Passed from Server) ── */}
          <div className="mb-8 animate-fade-in-up opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards]">
            {children}
          </div>

          {/* ── CTAs ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-10 md:mb-12 animate-fade-in opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]">
            <button
              onClick={() => openModal({
                    badge: "Partnership",
                    title: "Schedule Your Demo",
                    description: "Learn how MediKloud can help you recover margins and automate your patient journey.",
                    btnText: "Book My Free Demo",
                    successTitle: "Demo Scheduled!",
                    successDescription: "Our team will reach out within 24 hours to schedule your platform walkthrough."
                  })}
              
              className="btn-lg w-full sm:w-auto group flex items-center justify-center gap-2 bg-brand-1 text-white shadow-btn hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-transform"
            >
              Book A Free Demo
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof Signal */}
          <div className="flex flex-col items-center justify-center gap-3 mb-12 animate-fade-in opacity-0 [animation-delay:550ms] [animation-fill-mode:forwards]">
            <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4">
              {HERO_TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-brand-500" />
                    <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}