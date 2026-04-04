"use client"

import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Settings, Truck, Cpu, RotateCw } from 'lucide-react'

export default function ProductsOverview() {
  return (
    <LandingPageTemplate
      category="Our Portfolio"
      title="The complete infrastructure for"
      subtitle="modern pharmacy ops."
      description="From full operational takeovers to AI-driven virtual fulfillment, MediKloud provides the tech and the team to scale your clinical revenue."
      accentColor="blue"
      benefits={[
        { title: "Managed Pharmacy", desc: "Full ops takeover for hospitals.", icon: Settings },
        { title: "Virtual Pharmacy", desc: "Hub fulfillment for clinics.", icon: Truck },
        { title: "Free HMS", desc: "AI-powered control layer.", icon: Cpu },
        { title: "Refill Engine", desc: "Automated chronic retention.", icon: RotateCw }
      ]}
    />
  )
}
