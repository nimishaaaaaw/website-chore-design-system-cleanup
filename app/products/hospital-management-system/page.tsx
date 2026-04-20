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

import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = getMetadata({
  title: "Clinic & Hospital Management System (HMS SaaS)",
  description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training.",
  path: '/products/hospital-management-system'
});

export default function HMSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JsonLd 
        id="ld-breadcrumb" 
        data={getBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/#products' },
          { name: 'HMS', item: '/products/hospital-management-system' },
        ])} 
      />
      <JsonLd 
        id="ld-hms-product"
        data={{
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
          description: "Deploy an easy-to-use hospital management SaaS in 24 hours. Connect your clinic's OPD, billing, and pharmacy workflows instantly with zero training.",
          author: {
            '@type': 'Organization',
            name: 'MediKloud',
            url: 'https://www.medikloud.com',
            areaServed: 'India'
          }
        }}
      />
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <HMSHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                  Hospital Management.
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  Fast, Smart & Simple.
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  For Independent Clinics.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
              Run your entire facility from any device. Built exclusively for doctor-owned clinics, MediKloud HMS connects your reception, OPD, and pharmacy into one zero-friction workflow.
            </p>
          </div>
        </HMSHero>
        

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
