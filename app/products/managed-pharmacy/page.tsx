"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Settings, ShieldCheck, BadgePercent, Clock } from 'lucide-react'

export default function ManagedPharmacy() {
  return (
    <LandingPageTemplate
      category="Product · Managed Pharmacy"
      title="Total pharmacy"
      subtitle="takeover for hospitals."
      description="We take over your pharmacy operations end-to-end—from staffing and procurement to billing and inventory. We transform your pharmacy into a high-margin, leak-proof asset."
      accentColor="blue"
      benefits={[
        { 
          title: "Operations Takeover", 
          desc: "Complete management of staffing, shifts, and inventory procurement.",
          icon: Settings
        },
        { 
          title: "Leakage Control", 
          desc: "Real-time auditing and pilferage guards ensure every pill is accounted for.",
          icon: ShieldCheck
        },
        { 
          title: "Revenue Share", 
          desc: "Our model is performance-based. We only grow when you grow.",
          icon: BadgePercent
        },
        { 
          title: "Transition Plan", 
          desc: "Full operational transition in under 30 days with zero downtime.",
          icon: Clock
        }
      ]}
    />
  )
}
