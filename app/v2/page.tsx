"use client"

import dynamic from 'next/dynamic'
import { BackToTop } from '@/components/BackToTop'
import { Header } from '@/components/Header'

// ── V2-specific components (independent copies in components/v2/) ──────────────
// Edit these freely without affecting the V1 homepage.
const Stats = dynamic(() => import('@/components/v2/Stats').then(m => ({ default: m.Stats })), { ssr: false })
const ProblemSection = dynamic(() => import('@/components/v2/ProblemSection').then(m => ({ default: m.ProblemSection })))
const PersonaROISection = dynamic(() => import('@/components/v2/PersonaROISection').then(m => ({ default: m.PersonaROISection })))
const WhyItWorks = dynamic(() => import('@/components/v2/WhyItWorks').then(m => ({ default: m.WhyItWorks })))
const Footer = dynamic(() => import('@/components/v2/Footer').then(m => ({ default: m.Footer })))
const GetStartedCTA = dynamic(() => import('@/components/v2/GetStartedCTA').then(m => ({ default: m.GetStartedCTA })))
const MarqueeSection = dynamic(() => import('@/components/v2/MarqueeSection').then(m => ({ default: m.MarqueeSection })))
import { MainHero } from '@/components/v2/MainHero'

export default function PageV2() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* V2 INDICATOR — remove before launch */}
      <div className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest pointer-events-none">
        V2 Preview
      </div>

      <main id="main">
        {/* 1. Hero */}
        <MainHero />

        {/* 2. Stats strip */}
        <Stats />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. Combined Persona + ROI (replaces SetupSelector + ROICalculator) */}
        <PersonaROISection />

        {/* 5. Social proof marquee */}
        <MarqueeSection />

        {/* 6. Why it works (summary) */}
        <WhyItWorks />
      </main>

      <GetStartedCTA />
      <Footer />
      <BackToTop />
    </div>
  )
}
