"use client"

import LandingPageTemplate from '@/components/shared/LandingPageTemplate'
import { ShieldCheck, Lock, Eye, CheckCircle } from 'lucide-react'

export default function SecurityPage() {
  return (
    <LandingPageTemplate
      category="Trust"
      title="Bank-grade security for"
      subtitle="your clinical data."
      description="We prioritize patient privacy and data integrity. Our platforms are built on enterprise-grade infrastructure with multi-layer encryption."
      accentColor="blue"
      benefits={[
        { title: "Data Encryption", desc: "AES-256 encryption for all patient and clinical data at rest and in transit.", icon: Lock },
        { title: "Compliance", desc: "Adhering to Indian healthcare data standards and privacy regulations.", icon: ShieldCheck },
        { title: "Audit Trailers", desc: "Every action in our system is logged and auditable in real-time.", icon: Eye },
        { title: "Uptime · 99.9%", desc: "Reliable cloud infrastructure ensures your pharmacy never stops.", icon: CheckCircle }
      ]}
    />
  )
}
