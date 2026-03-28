"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Zap, Wallet, HeartPulse, Cpu } from 'lucide-react'

export default function HospitalWithoutPharmacy() {
  return (
    <LandingPageTemplate
      category="Hospital · Without Pharmacy"
      title="Zero-capex pharmacy"
      subtitle="setup for hospitals."
      description="Patients walking out is lost revenue. We setup and run a zero-cost pharmacy in your facility, providing a better patient journey and new revenue streams."
      accentColor="indigo"
      benefits={[
        { 
          title: "Zero-Capex Setup", 
          desc: "MediKloud builds, stocks, and staffs the pharmacy at no cost to you.",
          icon: Zap
        },
        { 
          title: "Revenue from Day 1", 
          desc: "Get a transparent share of every prescription fulfilled in your facility.",
          icon: Wallet
        },
        { 
          title: "Better Patient Journey", 
          desc: "Provide clinical care and medications under one roof.",
          icon: HeartPulse
        },
        { 
          title: "Total Integration", 
          desc: "Our systems sync with your HIS for seamless prescription flow.",
          icon: Cpu
        }
      ]}
    />
  )
}
