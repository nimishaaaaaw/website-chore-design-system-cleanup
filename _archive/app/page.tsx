"use client"

import dynamic from 'next/dynamic'
import type { Card } from '@/components/home/StackingCard'
import { Hero } from '@/components/home/Hero'
import { BackToTop } from '@/components/BackToTop'
const Stats = dynamic(() => import('@/components/home/Stats').then(m => ({ default: m.Stats })), { ssr: false })
const Features = dynamic(() => import('@/components/home/Features').then(m => ({ default: m.Features })))
const Solutions = dynamic(() => import('@/components/home/Solutions').then(m => ({ default: m.Solutions })))
const Contact = dynamic(() => import('@/components/home/Contact').then(m => ({ default: m.Contact })))
const Footer = dynamic(() => import('@/components/home/Footer').then(m => ({ default: m.Footer })))
// const MobileMenu = dynamic(() => import('@/components/MobileMenu'), { ssr: false })
const MarqueeSection = dynamic(() => import('@/components/home/MarqueeSection').then(m => ({ default: m.MarqueeSection })))
import { Header } from '@/components/Header'

const cards: Card[] = [
  {
    id: 1,
    title: 'Modern Pharmacies at Hospitals',
    tag: '100% fulfillment • Zero Setup Cost',
    description:
      'We set up and operate AI-powered, fully automated pharmacies inside hospitals — upgrading outdated setups to compliant, efficient, and profitable operations',
    image: '/Medikloud_Pharmacy_Design.webp',
    cta: 'Get a Demo',
    chips: ['Zero Stockouts & Expiry Losses', 'Real‑time Tracking', 'Medicine Deliveries', 'Higher Profits & Margins'],
    theme: {
      ctaFrom: 'from-cyan-600',
      ctaTo: 'to-blue-600',
      aura1: 'bg-cyan-400/25',
      aura2: 'bg-blue-400/25',
      aura3: 'bg-teal-300/20',
      imgAura: 'from-cyan-400/20 via-blue-400/10 to-teal-400/20',
      badgeText: 'text-cyan-700',
      icon: '💊',
      bg: 'bg-cyan-50',
    },
  },
  {
    id: 2,
    title: 'Hospital Management Software',
    tag: 'Software • Automated Hospital Ops',
    description: 'We provide a complete HMS that takes care of everything — admissions, appointments, billing, stock control, and reports — so hospitals run smoothly, patients are served faster, and mistakes are reduced.',
    image: '/doctor-tablet-dashboard.webp',
    cta: 'Get a Demo',
    chips: ['All-in-One System', 'Faster Patient Care', 'Centralized Control', '100% Visibility'],
    theme: {
      ctaFrom: 'from-indigo-600',
      ctaTo: 'to-violet-600',
      aura1: 'bg-indigo-400/25',
      aura2: 'bg-violet-400/25',
      aura3: 'bg-fuchsia-300/20',
      imgAura: 'from-indigo-400/20 via-violet-400/10 to-fuchsia-400/20',
      badgeText: 'text-indigo-700',
      icon: '🏥',
      bg: 'bg-indigo-50',
    },
  },
  {
    id: 3,
    title: 'Virtual Pharmacy & Lab',
    tag: 'On-Demand • Integrated',
    description:
      'We set up a complete virtual medicine and lab service for clinics and hospitals without physical facilities — enabling 10-minute medicine delivery and on-site lab sample collection without building your own pharmacy or lab.',
    image: '/virtual_Pharmacy.webp',
    cta: 'Learn How It Works',
    chips: ['10‑Min Medicine Delivery', 'Instant Lab Pickups', 'No Physical Setup', 'Lower Operating Costs'],
    theme: {
      ctaFrom: 'from-emerald-600',
      ctaTo: 'to-teal-600',
      aura1: 'bg-emerald-400/25',
      aura2: 'bg-teal-400/25',
      aura3: 'bg-green-300/20',
      imgAura: 'from-emerald-400/20 via-teal-400/10 to-green-400/20',
      badgeText: 'text-emerald-700',
      icon: '🚚',
      bg: 'bg-emerald-50',
    },
  },
  {
    id: 4,
    title: 'Smart Kiosks for Faster Service',
    tag: 'Patient Support • Self Service',
    description:
      'We provide smart kiosks for patients to check in, pay bills, buy insurance, register claims, access loans, join loyalty programs, and get instant support — all in minutes.',
    image: '/hospital-kiosk-ui.webp',
    cta: 'Discover More',
    chips: ['Loyalty & Bill Payments', 'Patient Support', 'Insurance & Loans', 'Zero hassle'],
    theme: {
      ctaFrom: 'from-amber-500',
      ctaTo: 'to-orange-600',
      aura1: 'bg-amber-400/25',
      aura2: 'bg-orange-400/25',
      aura3: 'bg-yellow-300/20',
      imgAura: 'from-amber-400/20 via-orange-400/10 to-yellow-400/20',
      badgeText: 'text-amber-700',
      icon: '💳',
      bg: 'bg-amber-50',
    },
  },
]

export default function Page() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main">
        <Hero />

        <Stats />

        <Features cards={cards} />

        {/* Marquee Section */}
        <MarqueeSection />

        {/* Solutions Section */}
        <Solutions />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}


