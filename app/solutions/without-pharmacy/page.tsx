import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { ClinicHero } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHero';
import { ClinicHiddenLoss } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHiddenLoss';
import { ClinicInsightShift } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicInsightShift';
import { ClinicHowItWorks } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks';
import { ClinicWhatChanges } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicWhatChanges';
import { ClinicEmotionalClose } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicEmotionalClose';
import { ClinicPharmacyFAQ } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicPharmacyFAQ';
import { ClinicCTA } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicCTA';
import { StorytellingStyles } from '@/components/pages/solutions/clinic-without-pharmacy/StorytellingStyles';

export const metadata = getMetadata({
  title: 'Pharmacy Solutions for Clinics & Daycares',
  description: 'Deliver medications to your patients instantly without running an in-house pharmacy. MediKloud handles procurement and home delivery for your clinic.',
  path: '/solutions/without-pharmacy'
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How fast is the delivery to my clinic?', acceptedAnswer: { '@type': 'Answer', text: '10 Minutes. We deliver medicines to your clinic door in just 10 minutes. Our routing system automatically dispatches the rider from the nearest MediKloud Hub the moment you sign the prescription.' } },
    { '@type': 'Question', name: 'Do I have to pay for or store the medicines?', acceptedAnswer: { '@type': 'Answer', text: 'Zero Inventory. You don\'t buy or store any medicine in your clinic. MediKloud manages the entire lifecycle of the stock, tracking, and expiries for you.' } },
    { '@type': 'Question', name: 'How do I earn margin through this?', acceptedAnswer: { '@type': 'Answer', text: 'Transparent Earnings. You earn a professional margin on every prescription fulfilled through the MediKloud network. All earnings are tracked in real-time on your dashboard.' } },
    { '@type': 'Question', name: 'What if my patient needs a refill at home?', acceptedAnswer: { '@type': 'Answer', text: 'Home Delivery Included. For chronic medicines, our system sends a WhatsApp reminder to the patient and manages home delivery automatically, ensuring they never miss a dose.' } },
    { '@type': 'Question', name: 'Does it work with my existing patient software?', acceptedAnswer: { '@type': 'Answer', text: 'Full Integration. MediKloud works perfectly alongside your existing setups or as a standalone Clinical OS on desktop, tablet, and mobile devices.' } },
    { '@type': 'Question', name: 'How long does it take to get started?', acceptedAnswer: { '@type': 'Answer', text: 'Under 24 Hours. We can get your clinic live and routing medicines in less than a day with zero setup fees and zero disruption to your daily practice.' } }
  ]
};

export default function ClinicWithoutPharmacyPage() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/#solutions' },
    { name: 'Without Pharmacy', item: '/solutions/without-pharmacy' },
  ]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <StorytellingStyles />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd id="ld-breadcrumb" data={breadcrumbData} />
      <JsonLd 
        id="ld-service" 
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Clinic Virtual Pharmacy Solution',
          provider: {
            '@type': 'Organization',
            name: 'MediKloud'
          },
          description: 'Virtual pharmacy and medication delivery solution for clinics and daycares, enabling instant fulfillment without onsite stock.'
        }} 
      />
      
      <Header />
      
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <ClinicHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-1-75rem sm:text-2rem md:text-2-25rem lg:text-2-5rem xl:text-2-75rem font-bold leading-[1.3] tracking-tight text-slate-900">
                  You Write the Prescriptions.
                </span>
                <span className="block text-1-75rem sm:text-2rem md:text-2-25rem lg:text-2-5rem xl:text-2-75rem font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  We Deliver the Medicines.
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  Straight to the Clinic Door. You Win.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0">
              Ensure your patients get the exact medicines you prescribe, delivered by MediKloud to your waiting room in just 10 minutes. No substitutions, zero inventory risk, and 100% operational clarity.
            </p>
          </div>
        </ClinicHero>
        <ClinicHiddenLoss />
        <ClinicInsightShift />
        <ClinicHowItWorks />
        <ClinicWhatChanges />
        <ClinicEmotionalClose />
        <ClinicCTA />
        <ClinicPharmacyFAQ />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
