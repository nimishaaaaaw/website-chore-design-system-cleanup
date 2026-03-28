"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { MessageCircle, HelpCircle, FileQuestion, Mail } from 'lucide-react'

export default function FAQPage() {
  return (
    <LandingPageTemplate
      category="Support"
      title="Common questions about"
      subtitle="MediKloud."
      description="Everything you need to know about our operational model, technology integration, and revenue-sharing partnerships."
      accentColor="indigo"
      benefits={[
        { title: "What is managed pharmacy?", desc: "We take over operations end-to-end so you don't have to manage staff or stock.", icon: HelpCircle },
        { title: "Is the HMS really free?", desc: "Yes, our AI-powered HMS is free for all our pharmacy partners.", icon: FileQuestion },
        { title: "How long is setup?", desc: "We typically go live in under 30 days for existing pharmacy takeovers.", icon: HelpCircle },
        { title: "Support Channels", desc: "Dedicated 24/7 support for all clinical and operations partners.", icon: Mail }
      ]}
    />
  )
}
