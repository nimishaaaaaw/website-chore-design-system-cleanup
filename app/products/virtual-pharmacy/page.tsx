"use client"

import LandingPageTemplate from '@/components/v2/LandingPageTemplate'
import { Truck, MapPin, BadgePercent, MessageSquare } from 'lucide-react'

export default function VirtualPharmacy() {
  return (
    <LandingPageTemplate
      category="Product · Virtual Pharmacy"
      title="A full pharmacy for clinics"
      subtitle="— without building one."
      description="MediKloud's hub-and-spoke network fulfills prescriptions from the nearest hub to the patient in ~10 minutes. Zero license, zero inventory, and zero space required."
      accentColor="indigo"
      benefits={[
        { 
          title: "Hub Fulfillment", 
          desc: "Digital prescriptions sent automatically to our nearest city hub.",
          icon: Truck
        },
        { 
          title: "Coverage Network", 
          desc: "Available across major hubs with ~10-15 minute delivery times.",
          icon: MapPin
        },
        { 
          title: "15-20% Revenue Share", 
          desc: "Earn commission on every prescription fulfilled by our hub.",
          icon: BadgePercent
        },
        { 
          title: "Patient Experience", 
          desc: "Real-time WhatsApp tracking and easy medicine reordering.",
          icon: MessageSquare
        }
      ]}
    />
  )
}
