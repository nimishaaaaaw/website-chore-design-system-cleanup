import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VPHero } from '@/components/pages/products/virtual-pharmacy/VPHero';
import { VPNerveCenter } from '@/components/pages/products/virtual-pharmacy/VPNerveCenter';
import { VPProblem } from '@/components/pages/products/virtual-pharmacy/VPProblem';
import { VPSolution } from '@/components/pages/products/virtual-pharmacy/VPSolution';
import { VPComparison } from '@/components/pages/products/virtual-pharmacy/VPComparison';
import { VPFAQ } from '@/components/pages/products/virtual-pharmacy/VPFAQ';
import { VPCTA } from '@/components/pages/products/virtual-pharmacy/VPCTA';
import Script from 'next/script';

import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = getMetadata({
  title: '10-Minute Virtual Pharmacy for Clinics in India',
  description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.',
  path: '/products/virtual-pharmacy'
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What happens if the 10-minute delivery is delayed?', acceptedAnswer: { '@type': 'Answer', text: 'If our rider is delayed, we automatically provide Free Same-Day Home Delivery for the patient. Accuracy and patient satisfaction are our top priorities.' } },
    { '@type': 'Question', name: 'Is this legal and compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MediKloud operates its own licensed retail pharmacies. We assume 100% of the legal and regulatory liability. All fulfillment happens through authorized channels.' } },
    { '@type': 'Question', name: 'How much does it cost the clinic to start?', acceptedAnswer: { '@type': 'Answer', text: 'Establishing a Virtual Pharmacy node costs ₹0. There are no setup fees, inventory investment, or monthly software charges. We only earn when we fulfill prescriptions successfully.' } },
    { '@type': 'Question', name: 'How long does the setup take?', acceptedAnswer: { '@type': 'Answer', text: 'We can go live in 7 days. This includes mapping your preferred brands, setting up your custom stock in our hub, and a quick training for your staff.' } },
    { '@type': 'Question', name: 'Does this increase my staff’s workload?', acceptedAnswer: { '@type': 'Answer', text: 'No. Operationally, it is Zero-Touch. Your staff simply issues the Rx via our HMS—our hub handles the packing, delivery, and payments automatically.' } },
    { '@type': 'Question', name: 'What medicines do you stock in my local hub?', acceptedAnswer: { '@type': 'Answer', text: 'We stock the exact brands you prefer. We build a custom formulary mapped to your clinic\'s prescribing patterns to ensure 100% brand accuracy.' } },
    { '@type': 'Question', name: 'Do I need to hire a pharmacist for the clinic?', acceptedAnswer: { '@type': 'Answer', text: 'No. MediKloud provides licensed pharmacists within our local fulfillment hubs to verify and fulfill all your clinic\'s orders. No additional payroll is required.' } },
    { '@type': 'Question', name: 'How are patient payments handled?', acceptedAnswer: { '@type': 'Answer', text: 'MediKloud collects all payments directly via UPI or cash handled by our riders. The clinic does not handle cash, eliminating financial overhead and reconciliation.' } },
    { '@type': 'Question', name: 'Is my patient data private and secure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All data is 100% encrypted and private. You own the patient relationship; we simply provide the technology and fulfillment infrastructure.' } }
  ]
};

export default function VirtualPharmacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd 
        id="ld-breadcrumb" 
        data={getBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/#products' },
          { name: 'Virtual Pharmacy', item: '/products/virtual-pharmacy' },
        ])} 
      />
      <JsonLd
        id="ld-virtual-pharmacy-service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '10-Minute Virtual Pharmacy for Clinics in India',
          provider: {
            '@type': 'Organization',
            name: 'MediKloud',
            url: 'https://www.medikloud.com'
          },
          description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.',
          areaServed: "India",
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            description: "Zero physical retail setup required"
          }
        }}
      />
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <VPHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                  Launch Your Own
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  10-Minute Digital Pharmacy.
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  Without Physical Setup.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
              MediKloud delivers medicines straight to your patients at the clinic door in 10 minutes. Eliminate the overhead of inventory, physical space, and hiring pharmacists.
            </p>
          </div>
        </VPHero>
        <VPNerveCenter />
        <VPProblem />
        <VPSolution />
        <VPComparison />
        <VPCTA />
        <VPFAQ />
      </main>
      <Footer />
    </div>
  );
}
