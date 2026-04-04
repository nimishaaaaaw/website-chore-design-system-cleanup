"use client"

import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Cpu, FileText, CreditCard, Users2 } from 'lucide-react'

export default function HMSPage() {
  return (
    <LandingPageTemplate
      category="Product · Free HMS"
      title="The control layer for"
      subtitle="modern healthcare."
      description="A comprehensive, AI-integrated Hospital Management System that's free for all our pharmacy partners. Streamline your entire clinical workflow with zero software costs."
      accentColor="blue"
      benefits={[
        { 
          title: "AI-Scribe Integration", 
          desc: "Auto-generate clinical notes and prescriptions from consultations.",
          icon: Cpu
        },
        { 
          title: "Electronic Records (EMR)", 
          desc: "Unified patient history, diagnostics, and longitudinal health records.",
          icon: FileText
        },
        { 
          title: "Billing & Insurance", 
          desc: "Automated TPA claims and integrated insurance management.",
          icon: CreditCard
        },
        { 
          title: "Partner Program", 
          desc: "We provide our HMS for free because we grow when your pharmacy grows.",
          icon: Users2
        }
      ]}
    />
  )
}
