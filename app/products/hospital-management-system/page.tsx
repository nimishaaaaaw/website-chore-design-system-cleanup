import { Header } from '@/components/layout/Header'
import { HMSHero } from '@/components/pages/products/hospital-management-system/HMSHero'

import { HMSEaseOfUse } from '@/components/pages/products/hospital-management-system/HMSEaseOfUse'
import { HMSModules } from '@/components/pages/products/hospital-management-system/HMSModules'
import { HMSSecurity } from '@/components/pages/products/hospital-management-system/HMSSecurity'
import { HMSComparison } from '@/components/pages/products/hospital-management-system/HMSComparison'
import { HMSFAQ } from '@/components/pages/products/hospital-management-system/HMSFAQ'
import { HMSCTA } from '@/components/pages/products/hospital-management-system/HMSCTA'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Clinic & Hospital Management System (HMS SaaS)",
  description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training.",
  alternates: {
    canonical: '/products/hospital-management-system',
  },
  openGraph: {
    title: "Clinic & Hospital Management System (HMS SaaS) | MediKloud",
    description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training.",
    url: '/products/hospital-management-system',
  },
  twitter: {
    title: "Clinic & Hospital Management System (HMS SaaS) | MediKloud",
    description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training.",
  },
};

export default function HMSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Script
        id="ld-hms-product"
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'MediKloud HMS',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR'
            },
            description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training."
          })
        }}
      />
      <main id="main">
        {/* Hero Section */}
        <HMSHero />
        

        <div className="relative overflow-hidden">
          {/* Subtle Global Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />
            <div className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-brand-indigo-50/20 rounded-full blur-[150px]" />
          </div>

          {/* Core Content Sections */}
          <HMSEaseOfUse />
          <HMSModules />
          <HMSSecurity />
          <HMSComparison />
          
          <HMSCTA />
          <HMSFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
