import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { HospitalPharmacyHero } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero';
import { HospitalPharmacyPain } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyPain';
import { HospitalPharmacyApproach } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyApproach';
import { HospitalPharmacyProducts } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyProducts';
import { HospitalPharmacyOutcomes } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyOutcomes';
import { HospitalPharmacyFAQ } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyFAQ';
import { HospitalPharmacyEmotionalClose } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyEmotionalClose';
import { HospitalPharmacyCTA } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyCTA';

export const metadata = getMetadata({
  title: 'Managed Pharmacy & HMS for Independent Hospitals',
  description: 'Upgrade your hospital pharmacy with a fully managed ops layer and free enterprise MediKloud HMS. Stop revenue leakage with zero capex.',
  path: '/solutions/with-pharmacy'
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I have to fire my current pharmacy staff?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate them. Your trusted staff remains; we provide professional management, specialized training, and software to make them 2x more efficient without any friction.' } },
    { '@type': 'Question', name: 'Who pays for the initial medicine stock?', acceptedAnswer: { '@type': 'Answer', text: 'MediKloud handles it. We buy your existing inventory at fair market value and fund 100% of all future medicine stock and recurring expansion.' } },
    { '@type': 'Question', name: 'Can I keep using my current billing software?', acceptedAnswer: { '@type': 'Answer', text: 'We offer a better way. We provide our premium Enterprise HMS for free, migrating all your clinical and billing data with zero data loss or downtime.' } },
    { '@type': 'Question', name: 'Who takes the loss for expired medicines?', acceptedAnswer: { '@type': 'Answer', text: '100% MediKloud responsibility. You will never pay for an expired strip of medicine again. We manage the full lifecycle of the inventory.' } },
    { '@type': 'Question', name: 'How do you handle home deliveries?', acceptedAnswer: { '@type': 'Answer', text: 'Full logistics support. We provide the riders, the WhatsApp automated tracking, and the complete delivery infrastructure for your hospital patients.' } },
    { '@type': 'Question', name: 'How do you prevent medicine pilferage?', acceptedAnswer: { '@type': 'Answer', text: 'Total Transparency. Our AI-synced inventory system ensures every single tablet is accounted for, from the loading dock to the patient\'s hand, with real-time activity logs focus.' } },
    { '@type': 'Question', name: 'How long does it take to transition?', acceptedAnswer: { '@type': 'Answer', text: 'Under 7 days. Our clinical onboarding team handles the physical inventory diagnostic and software sync while your hospital remains fully operational and serving patients.' } },
    { '@type': 'Question', name: 'How do my pharmacy margins improve?', acceptedAnswer: { '@type': 'Answer', text: 'Group Buying Power. By joining our network, your hospital gets corporate-level pricing on medicines that standalone pharmacies simply cannot access, boosting your profitability.' } }
  ]
};

export default function HospitalPharmacyPage() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/#solutions' },
    { name: 'With Pharmacy', item: '/solutions/with-pharmacy' },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd id="ld-breadcrumb" data={breadcrumbData} />
      <JsonLd 
        id="ld-service" 
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Managed Hospital Pharmacy Operations',
          provider: {
            '@type': 'Organization',
            name: 'MediKloud'
          },
          description: 'Fully managed pharmacy operations for independent hospitals, including staffing, inventory management, and free HMS software.'
        }} 
      />
      
      <Header />
      
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <HospitalPharmacyHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                  Tech-Driven Hospital Ops.
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  Capture Every Prescription.
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  Retain Every Patient.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
              Every consultation ends with a prescription. But your revenue and care continuity leave the moment they walk out. MediKloud and our HMS help you capture that value right inside your hospital.
            </p>
          </div>
        </HospitalPharmacyHero>
        <HospitalPharmacyPain />
        <HospitalPharmacyApproach />
        <HospitalPharmacyProducts />
        <HospitalPharmacyOutcomes />
        <HospitalPharmacyEmotionalClose />
        <HospitalPharmacyCTA />
        <HospitalPharmacyFAQ />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
