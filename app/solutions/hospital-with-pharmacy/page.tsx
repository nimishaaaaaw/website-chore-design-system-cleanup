"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Building2, ShieldAlert, BarChart3, Users } from 'lucide-react'

export default function HospitalWithPharmacy() {
  return (
    <LandingPageTemplate
      category="Hospital · With Pharmacy"
      title="Stop revenue leaks in your"
      subtitle="existing pharmacy."
      description="Fixing 30–40% revenue leakage caused by pilferage and billing mismatches. MediKloud takes over full operations—staff, procurement, and tech."
      accentColor="blue"
      benefits={[
        { 
          title: "Full operations takeover", 
          desc: "We manage your existing staff and procurement end-to-end.",
          icon: Building2
        },
        { 
          title: "Stop internal leakage", 
          desc: "Real-time billing control and inventory audits eliminate pilferage.",
          icon: ShieldAlert
        },
        { 
          title: "Revenue Optimization", 
          desc: "Improve your margins by up to 15% with AI-driven procurement.",
          icon: BarChart3
        },
        { 
          title: "Staff Management", 
          desc: "We provide highly trained pharmacists and operational managers.",
          icon: Users
        }
      ]}
    />
  )
}
