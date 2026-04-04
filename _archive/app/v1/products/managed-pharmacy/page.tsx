"use client"

import { Header } from '@/components/Header'
import { BackToTop } from '@/components/BackToTop'
import { MPHero } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPProblemGrid'
import { MPWhatWeAre } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPWhatWeAre'
import { MPScenarios } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPScenarios'
import { MPPatientExperience } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPPatientExperience'
import { MPGapCalculator } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPGapCalculator'
import { MPWhatWeInvest } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPWhatWeInvest'
import { MPRevenueShare } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPRevenueShare'
import { MPTimeline } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPTimeline'
import { MPDailyOps } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPDailyOps'
import { MPGuarantee } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPGuarantee'
import { MPFAQ } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPFAQ'
import { MPFinalCTA } from '@/components/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/v1/products/managed-pharmacy/MPFinalCTA'
import dynamic from 'next/dynamic'

const Footer = dynamic(
  () => import('@/components/Footer').then(m => ({ default: m.Footer })),
  { loading: () => <div className="w-full py-12 bg-white border-t border-slate-100" /> }
)

export default function ManagedPharmacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main">
        {/* 1. Hero — above fold */}
        <MPHero />

        {/* 2. The Problem — custom dark section */}
        <MPProblemGrid />

        {/* 2. What MediKloud actually is — operator vs vendor vs HMS */}
        <MPWhatWeAre />

        {/* 3. Scenario A/B — interactive toggle */}
        <MPScenarios />

        {/* 4. Patient experience — emotional hook before financials */}
        <MPPatientExperience />

        {/* 5. Gap calculator — dark section, vendor hospitals */}
        <MPGapCalculator />

        {/* 6. What MediKloud invests */}
        <MPWhatWeInvest />

        {/* 7. Revenue share formula + specialty earnings */}
        <MPRevenueShare />

        {/* 8. 6-week go-live timeline */}
        <MPTimeline />

        {/* 9. Daily operations grid */}
        <MPDailyOps />

        {/* 10. Income guarantee for Scenario B */}
        <MPGuarantee />

        {/* 11. FAQ */}
        <MPFAQ />

        {/* 12. Final CTA */}
        <MPFinalCTA />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
