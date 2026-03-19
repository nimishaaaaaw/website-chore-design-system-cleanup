"use client"

import dynamic from 'next/dynamic'
import { BackToTop } from '@/components/BackToTop'
const Stats = dynamic(() => import('@/components/home/Stats').then(m => ({ default: m.Stats })), { ssr: false })
const SetupSelector = dynamic(() => import('@/components/home/SetupSelector').then(m => ({ default: m.SetupSelector })))
const ProblemSection = dynamic(() => import('@/components/home/ProblemSection').then(m => ({ default: m.ProblemSection })))
const ROICalculator = dynamic(() => import('@/components/home/ROICalculator').then(m => ({ default: m.ROICalculator })))
const PersonaROISection = dynamic(() => import('@/components/home/PersonaROISection').then(m => ({ default: m.PersonaROISection })))
const Solutions = dynamic(() => import('@/components/home/Solutions').then(m => ({ default: m.Solutions })))
const Contact = dynamic(() => import('@/components/home/Contact').then(m => ({ default: m.Contact })))
const Footer = dynamic(() => import('@/components/home/Footer').then(m => ({ default: m.Footer })))
const GetStartedCTA = dynamic(() => import('@/components/home/GetStartedCTA').then(m => ({ default: m.GetStartedCTA })))
// const MobileMenu = dynamic(() => import('@/components/MobileMenu'), { ssr: false })
const MarqueeSection = dynamic(() => import('@/components/home/MarqueeSection').then(m => ({ default: m.MarqueeSection })))
import { Header } from '@/components/Header'
import { MainHero } from '@/components/home/MainHero'


export default function Page() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main">
        <MainHero />

        <Stats />

        <ProblemSection />

        <SetupSelector />

        <ROICalculator />

        <PersonaROISection />

        {/* Marquee Section */}
        <MarqueeSection />

        {/* Solutions Section */}
        <Solutions />

        {/* Contact Section */}
        <Contact />
      </main>
      <GetStartedCTA />
      <Footer />
      <BackToTop />
    </div>
  )
}

