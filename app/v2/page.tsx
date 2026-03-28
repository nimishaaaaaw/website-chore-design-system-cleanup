"use client"

import dynamic from 'next/dynamic'
import { BackToTop } from '@/components/BackToTop'
import { Header } from '@/components/Header'

// ── Regular imports for above-the-fold + lightweight sections ──────────────────
// These render immediately — no blank flash while JS chunk downloads.
import { MainHero } from '@/components/v2/MainHero'
import { Stats } from '@/components/v2/Stats'
import { ProblemSection } from '@/components/v2/ProblemSection'
import { PersonaROISection } from '@/components/v2/PersonaROISection'
import { AdvantageSection } from '@/components/v2/AdvantageSection'
import { MarqueeSection } from '@/components/v2/MarqueeSection'

// ── Dynamic imports only for heavy below-fold sections with loading skeletons ──
const GetStartedCTA = dynamic(
  () => import('@/components/v2/GetStartedCTA').then(m => ({ default: m.GetStartedCTA })),
  { loading: () => <div className="w-full py-16 bg-slate-900" /> }
)
const Footer = dynamic(
  () => import('@/components/v2/Footer').then(m => ({ default: m.Footer })),
  { loading: () => <div className="w-full py-12 bg-slate-900" /> }
)

export default function PageV2() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main">
        {/* 1. Hero */}
        <MainHero />

        {/* 2. Stats strip */}
        <Stats />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. Combined Persona + ROI (Choose your Setup) */}
        <PersonaROISection />

        {/* 5. Advantage Section */}
        <AdvantageSection />

        {/* 6. Social proof marquee */}
        <MarqueeSection />
      </main>

      <GetStartedCTA />
      <Footer />
      <BackToTop />
    </div>
  )
}
