import { Header } from '@/components/layout/Header'
import { MPHero } from '@/components/pages/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/pages/products/managed-pharmacy/MPProblemGrid'
import { MPv2Solution } from '@/components/pages/products/managed-pharmacy/MPv2Solution'
import { MPv2Timeline } from '@/components/pages/products/managed-pharmacy/MPv2Timeline'
import { MPv2PersonaCTA } from '@/components/pages/products/managed-pharmacy/MPv2PersonaCTA'
import { MPv2FAQ } from '@/components/pages/products/managed-pharmacy/MPv2FAQ'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'

import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = getMetadata({
  title: "Fully Managed Pharmacy for Hospitals in India",
  description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage.",
  path: '/products/managed-pharmacy'
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I have to pay anything upfront?', acceptedAnswer: { '@type': 'Answer', text: 'No. MediKloud covers 100% of the opening costs. We fully fund the initial stock, install the shelving, and deploy our smart technology at zero cost to you.' } },
    { '@type': 'Question', name: 'What happens to my current pharmacy staff during transition?', acceptedAnswer: { '@type': 'Answer', text: 'We are flexible. We can absorb your high-performing pharmacists directly onto our payroll, or we can simply replace them with our own trained professionals. The choice is yours.' } },
    { '@type': 'Question', name: 'Do you dictate which specific medicines are stocked?', acceptedAnswer: { '@type': 'Answer', text: 'Never. We respect clinical authority. We collaborate directly with your doctors to build a custom formulary perfectly mapped to their exact prescribing habits, ensuring zero disruption to patient care.' } },
    { '@type': 'Question', name: 'What is the catch? How long is the contract?', acceptedAnswer: { '@type': 'Answer', text: 'No. We require only an initial 12-month lock-in to justify our setup investment. After year one, the partnership continues strictly based on our ability to grow your clinic\'s profit.' } },
    { '@type': 'Question', name: 'How do you stop patients from migrating to online apps?', acceptedAnswer: { '@type': 'Answer', text: 'Through automated timing. Our AI calculates the exact day their prescription runs out and proactively sends a WhatsApp refill link, locking in the home delivery through your hospital hub.' } },
    { '@type': 'Question', name: 'Do you buy out my existing unsold inventory stock?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you currently operate your own pharmacy, we audit your viable stock and can purchase it directly to form the opening inventory, instantly freeing up your sunk cash.' } },
    { '@type': 'Question', name: 'Who handles the medicine inventory and suppliers?', acceptedAnswer: { '@type': 'Answer', text: 'We handle everything. MediKloud oversees 100% of network procurement, purchase orders, and supplier payments. You never have to process an invoice or chase down a delayed shipment ever again.' } },
    { '@type': 'Question', name: 'How long does the actual physical pharmacy transition take?', acceptedAnswer: { '@type': 'Answer', text: 'It happens overnight. While regulatory paperwork takes a few weeks, the actual physical handover—installing shelving, loading inventory, and going live—is executed entirely overnight to ensure zero patient downtime.' } }
  ]
};

export default function ManagedPharmacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd 
        id="ld-breadcrumb" 
        data={getBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/#products' },
          { name: 'Managed Pharmacy', item: '/products/managed-pharmacy' },
        ])} 
      />
      <JsonLd
        id="ld-managed-pharmacy-service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Fully Managed Pharmacy for Hospitals',
          provider: {
            '@type': 'Organization',
            name: 'MediKloud',
            url: 'https://www.medikloud.com'
          },
          description: "Deploy a fully managed pharmacy inside your hospital with zero capex. We handle the staff, stock, and software to completely stop prescription leakage.",
          areaServed: "India",
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            description: "Zero upfront capital expenditure model"
          }
        }}
      />
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <MPHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance max-w-[750px] mx-auto lg:mx-0">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                  Capture 100% of Your Rx Value.
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  With a Managed Pharmacy.
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  Without Touching a Single Box of Stock.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
              Stop losing prescriptions to external retail chains. MediKloud provides the capital, HMS, and pharmacists to capture revenue internally with zero operational load.
            </p>
          </div>
        </MPHero>
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
