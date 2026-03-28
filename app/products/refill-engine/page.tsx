"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { RotateCw, MessageCircle, BarChart, TrendingUp } from 'lucide-react'

export default function RefillEngine() {
  return (
    <LandingPageTemplate
      category="Product · Refill Engine"
      title="Never lose a chronic"
      subtitle="patient ever again."
      description="Automated refills for long-term prescriptions. Our engine predicts when a patient's medicine is running low and triggers proactive reminders and delivery prompts."
      accentColor="indigo"
      benefits={[
        { 
          title: "Prediction Logic", 
          desc: "AI-driven forecasting predicts exact consumption cycles for chronic meds.",
          icon: RotateCw
        },
        { 
          title: "WhatsApp Engagement", 
          desc: "Low-friction reminders sent directly to patient WhatsApp for 1-click refill.",
          icon: MessageCircle
        },
        { 
          title: "Retention Analytics", 
          desc: "Improve patient 6-month retention by up to 45% automatically.",
          icon: BarChart
        },
        { 
          title: "Compounding Revenue", 
          desc: "Every retained patient adds more to your monthly recurring baseline.",
          icon: TrendingUp
        }
      ]}
    />
  )
}
