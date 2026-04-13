"use client"

import React from 'react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { BackToTop } from '@/components/layout/BackToTop'

// Import About Sections
import { AboutHero } from '@/components/pages/about/AboutHero'
import { OriginStory } from '@/components/pages/about/OriginStory'
import { UrgencySection } from '@/components/pages/about/UrgencySection'
import { VisionMission } from '@/components/pages/about/VisionMission'
import { TeamSection } from '@/components/pages/about/TeamSection'

// Dynamic imports for below-fold heavy sections
const AboutCTA = dynamic(
  () => import('@/components/pages/about/AboutCTA').then(m => ({ default: m.AboutCTA })),
  { loading: () => <div className="w-full py-24 bg-brand-950" /> }
)
const Footer = dynamic(
  () => import('@/components/layout/Footer').then(m => ({ default: m.Footer })),
  { loading: () => <div className="w-full py-12 bg-slate-900" /> }
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main">
        {/* 1. Hero */}
        <AboutHero />

        {/* 2. Origin Story — Personal Narrative */}
        <OriginStory />

        {/* 3. The Compounding Crisis — Urgency */}
        <UrgencySection />

        {/* 4. Vision & Mission — Foundation */}
        <VisionMission />

        {/* 5. Team — The Builders */}
        <TeamSection />
      </main>

      {/* Dedicated About CTA */}
      <AboutCTA />

      <Footer />
      <BackToTop />
    </div>
  )
}
