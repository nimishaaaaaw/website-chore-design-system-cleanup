"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Package, Truck, Smile, LayoutGrid } from 'lucide-react'

export default function ClinicWithoutPharmacy() {
  return (
    <LandingPageTemplate
      category="Clinic · Without Pharmacy"
      title="Grow your clinic's"
      subtitle="bottom line."
      description="Increase clinic EBITDA by 15-20% by adding a pharmacy. Zero setup cost for our compact, high-efficiency pharmacy pods designed for clinics."
      accentColor="indigo"
      benefits={[
        { 
          title: "Pharmacy Pods", 
          desc: "Compact, modular setups designed for specialized outpatient clinics.",
          icon: LayoutGrid
        },
        { 
          title: "Turnkey Operations", 
          desc: "Licensing, staffing, and stocking completely handled by MediKloud.",
          icon: Package
        },
        { 
          title: "Profit Uplift", 
          desc: "Grow revenue without increasing your patient volume.",
          icon: Smile
        },
        { 
          title: "Digital Workflow", 
          desc: "E-prescriptions sent directly to dispensing for 0-min wait time.",
          icon: Truck
        }
      ]}
    />
  )
}
