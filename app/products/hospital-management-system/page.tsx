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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I migrate my existing patient data?', acceptedAnswer: { '@type': 'Answer', text: 'We handle everything. Our clinical onboarding team will batch-import your records from your legacy systems or Excel sheets with zero data loss.' } },
    { '@type': 'Question', name: 'Is MediKloud HMS ABDM compliant?', acceptedAnswer: { '@type': 'Answer', text: '100% Compliant. MediKloud is Tier-1 ABDM-compliant. Create ABHA IDs and link health records natively right from the dashboard.' } },
    { '@type': 'Question', name: 'What happens if the internet goes down?', acceptedAnswer: { '@type': 'Answer', text: 'You stay operational. Our offline-resilient architecture lets you continue charting without interruption. Data syncs automatically the second you are back online.' } },
    { '@type': 'Question', name: 'Can it be customized for my specialty?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We provide pre-built templates for 15+ specialties (Cardio, Ortho, etc.) and customizable SOAP notes to match your exact workflow.' } },
    { '@type': 'Question', name: 'Are there any hidden maintenance AMC fees?', acceptedAnswer: { '@type': 'Answer', text: 'Zero. We use a transparent subscription model. All over-the-air updates, security protocols, and system maintenance are included for free.' } },
    { '@type': 'Question', name: 'How much training does my staff need?', acceptedAnswer: { '@type': 'Answer', text: 'Under 2 hours. The interface is as intuitive as a smartphone app. Most reception staff are fully proficient after a single onboarding session.' } },
    { '@type': 'Question', name: 'Does it support multi-doctor clinics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can instantly add new doctors, set up specialized department desks, and configure strict role-based access for your entire staff.' } },
    { '@type': 'Question', name: 'What are the hardware requirements?', acceptedAnswer: { '@type': 'Answer', text: 'Anything with a browser. Because we are a cloud-native OS, there are no bulky local servers required. It runs flawlessly on your existing laptops or tablets.' } },
    { '@type': 'Question', name: 'Who owns my clinical data?', acceptedAnswer: { '@type': 'Answer', text: 'You retain 100% ownership. MediKloud acts strictly as a secure custodian. You own your data and can export your complete records at any time.' } },
    { '@type': 'Question', name: 'Does it handle GST and TPA automatically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Generate real-time GST-compliant invoices and track TPA insurance claims and pending settlements in one unified financial dashboard.' } }
  ]
};

export default function HMSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JsonLd data={faqSchema} id="faq-schema" />
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
              Run your entire facility from any device. Built exclusively for doctor-owned clinics, MediKloud connects your reception, OPD, and pharmacy into one zero-friction workflow.
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
