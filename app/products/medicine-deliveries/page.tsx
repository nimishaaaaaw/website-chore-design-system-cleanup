import { Header } from '@/components/layout/Header'
import { MedicineDeliveriesHero } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesHero'
import { MedicineDeliveriesProblem } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesProblem'
import { MedicineDeliveriesImpact } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesImpact'
import { MedicineDeliveriesEconomics } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesEconomics'
import { MedicineDeliveriesFAQ } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesFAQ'
import { MedicineDeliveriesCTA } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesCTA'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hospital Pharmacy Medicine Delivery",
  description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care.",
  alternates: {
    canonical: '/products/medicine-deliveries',
  },
  openGraph: {
    title: "Hospital Pharmacy Medicine Delivery | MediKloud",
    description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care.",
    url: '/products/medicine-deliveries',
  },
  twitter: {
    title: "Hospital Pharmacy Medicine Delivery | MediKloud",
    description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care.",
  },
};

export default function MedicineDeliveriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Script
        id="ld-medicine-deliveries-service"
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hospital Pharmacy Medicine Delivery',
            provider: {
              '@type': 'Organization',
              name: 'MediKloud'
            },
            description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care."
          })
        }}
      />
      <main id="main">
        {/* Hero Section */}
        <MedicineDeliveriesHero />
        
        <div className="relative overflow-hidden">
          {/* Subtle Global Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />
            <div className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-brand-indigo-50/20 rounded-full blur-[150px]" />
          </div>

          {/* Core Content Sections */}
          <MedicineDeliveriesProblem />
          <MedicineDeliveriesImpact />
          <MedicineDeliveriesEconomics />
          <MedicineDeliveriesCTA />
          <MedicineDeliveriesFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
