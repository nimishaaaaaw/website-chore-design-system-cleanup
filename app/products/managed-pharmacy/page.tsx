import { Header } from '@/components/layout/Header'
import { MPHero } from '@/components/pages/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/pages/products/managed-pharmacy/MPProblemGrid'
import { MPv2Solution } from '@/components/pages/products/managed-pharmacy/MPv2Solution'
import { MPv2Timeline } from '@/components/pages/products/managed-pharmacy/MPv2Timeline'
import { MPv2PersonaCTA } from '@/components/pages/products/managed-pharmacy/MPv2PersonaCTA'
import { MPv2FAQ } from '@/components/pages/products/managed-pharmacy/MPv2FAQ'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fully Managed Pharmacy for Hospitals in India",
  description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage.",
  alternates: {
    canonical: '/products/managed-pharmacy',
  },
  openGraph: {
    title: "Fully Managed Pharmacy for Hospitals in India | MediKloud",
    description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage.",
    url: '/products/managed-pharmacy',
  },
  twitter: {
    title: "Fully Managed Pharmacy for Hospitals in India | MediKloud",
    description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage.",
  },
};

export default function ManagedPharmacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <Script
        id="ld-managed-pharmacy-service"
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Fully Managed Pharmacy for Hospitals',
            provider: {
              '@type': 'Organization',
              name: 'MediKloud'
            },
            description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage."
          })
        }}
      />
      <main id="main">
        <MPHero />
        <MPProblemGrid />
        <MPv2Solution />
        <MPv2Timeline />
        <MPv2PersonaCTA />
        <MPv2FAQ />
      </main>
      <Footer />
    </div>
  );
}
