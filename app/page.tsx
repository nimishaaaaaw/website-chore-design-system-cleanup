"use client"

import dynamic from 'next/dynamic'
import { BackToTop } from '@/components/layout/BackToTop'
import { Header } from '@/components/layout/Header'

// ── Regular imports for above-the-fold + lightweight sections ──────────────────
// These render immediately — no blank flash while JS chunk downloads.
import { MainHero } from '@/components/pages/home/MainHero'
import { Stats } from '@/components/pages/home/Stats'
import { ProblemSection } from '@/components/pages/home/ProblemSection'
import { PersonaROISection } from '@/components/pages/home/persona-roi'
import { AdvantageSection } from '@/components/pages/home/AdvantageSection'
import { MarqueeSection } from '@/components/pages/home/MarqueeSection'

// ── Dynamic imports only for heavy below-fold sections with loading skeletons ──
const GetStartedCTA = dynamic(
  () => import('@/components/pages/home/GetStartedCTA').then(m => ({ default: m.GetStartedCTA })),
  { loading: () => <div className="w-full py-16 bg-slate-900" /> }
)
const Footer = dynamic(
  () => import('@/components/layout/Footer').then(m => ({ default: m.Footer })),
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
