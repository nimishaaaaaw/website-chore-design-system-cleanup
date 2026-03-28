"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Stethoscope, ClipboardCheck, History, LineChart } from 'lucide-react'

export default function ClinicWithPharmacy() {
  return (
    <LandingPageTemplate
      category="Clinic · With Pharmacy"
      title="Supercharge your"
      subtitle="clinic pharmacy."
      description="Automate inventory and billing so you can focus on patients. We handle the high-effort distractions for you, ensuring your clinic pharmacy is a profit center."
      accentColor="blue"
      benefits={[
        { 
          title: "Inventory Automation", 
          desc: "AI-driven ordering predicts demand and prevents stockouts.",
          icon: Stethoscope
        },
        { 
          title: "Staff Audit Loops", 
          desc: "Automated digital logs stop billing errors and inventory loss.",
          icon: ClipboardCheck
        },
        { 
          title: "Refill Management", 
          desc: "Proactive reminders for chronic patients keep them coming back.",
          icon: History
        },
        { 
          title: "Precision Analytics", 
          desc: "Detailed margin reports for every drug and every consultation.",
          icon: LineChart
        }
      ]}
    />
  )
}
