import { Header } from '@/components/layout/Header'
import { MedicineDeliveriesHero } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesHero'
import { MedicineDeliveriesProblem } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesProblem'
import { MedicineDeliveriesImpact } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesImpact'
import { MedicineDeliveriesEconomics } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesEconomics'
import { MedicineDeliveriesFAQ } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesFAQ'
import { MedicineDeliveriesCTA } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesCTA'
import { Footer } from '@/components/layout/Footer'
import Script from 'next/script'

import { getMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = getMetadata({
  title: "Hospital Pharmacy Medicine Delivery",
  description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care.",
  path: '/products/medicine-deliveries'
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need to hire my own riders?', acceptedAnswer: { '@type': 'Answer', text: 'No. MediKloud provides the riders and handles all logistics for you.' } },
    { '@type': 'Question', name: 'How do you guarantee the exact brand?', acceptedAnswer: { '@type': 'Answer', text: 'We pick from your hospital’s pharmacy, ensuring the patient gets exactly what you prescribed.' } },
    { '@type': 'Question', name: 'How long does it take to set up?', acceptedAnswer: { '@type': 'Answer', text: 'Your hospital can be live and delivering to patients in less than 24 hours.' } },
    { '@type': 'Question', name: 'Who pays for the delivery fee?', acceptedAnswer: { '@type': 'Answer', text: 'You have total control. You can have the patient pay a small fee or the hospital can cover it.' } },
    { '@type': 'Question', name: 'What if a patient doesn\'t have a smartphone?', acceptedAnswer: { '@type': 'Answer', text: 'Patients can reorder by calling your front desk or our support line. No smartphone needed.' } },
    { '@type': 'Question', name: 'Who owns the patient data?', acceptedAnswer: { '@type': 'Answer', text: 'You do. All prescription and delivery data remains with your hospital and can be exported at any time.' } },
    { '@type': 'Question', name: 'Is the billing GST-compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every transaction is fully GST-compliant and integrated into your billing system.' } },
    { '@type': 'Question', name: 'What is the support response time?', acceptedAnswer: { '@type': 'Answer', text: 'We provide real-time updates for every order and immediate support for any delivery issues.' } },
    { '@type': 'Question', name: 'Is patient privacy protected?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All patient and prescription data is encrypted and stored securely. Your patients\' information is never shared with third parties.' } },
    { '@type': 'Question', name: 'Does it cover specialty medicines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We deliver directly from your hospital\'s pharmacy, so any specialty medicine you stock is automatically covered.' } },
    { '@type': 'Question', name: 'How precise are the refill reminders?', acceptedAnswer: { '@type': 'Answer', text: 'We calculate when each patient is likely to run out and send them a WhatsApp reminder at the right time.' } }
  ],
};

export default function MedicineDeliveriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd 
        id="ld-breadcrumb" 
        data={getBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Products', item: '/#products' },
          { name: 'Medicine Deliveries', item: '/products/medicine-deliveries' },
        ])} 
      />
      <JsonLd
        id="ld-medicine-deliveries-service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hospital Pharmacy Medicine Delivery',
          provider: {
            '@type': 'Organization',
            name: 'MediKloud',
            url: 'https://www.medikloud.com'
          },
          description: "Send medications from your hospital straight to your patients' homes. We handle the tracking and delivery to ensure zero drop-offs in chronic care.",
          areaServed: "India",
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            description: "Automated chronic care refills"
          }
        }}
      />
      <main id="main">
        {/* Hero Section — Composition Pattern: Text is delivered in Initial HTML */}
        <MedicineDeliveriesHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-center lg:text-left text-balance">
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-slate-900">
                  Deliver Medicines From Your
                </span>
                <span className="block text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight bg-gradient-display bg-clip-text text-transparent" style={{ color: '#4F46E5' }}>
                  Hospital Pharmacy
                </span>
              </div>
              <div className="mt-8 md:mt-10">
                <span className="block text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem] font-semibold leading-relaxed tracking-tight text-slate-700/90 italic">
                  Directly to the Patient's Doorstep.
                </span>
              </div>
            </h1>
            
            <p className="hero-subtitle max-w-[700px] mx-auto lg:mx-0 leading-relaxed text-slate-500/90">
              Stop losing revenue to retail aggregators. We handle the logistics to deliver medicines directly from your hospital to the patient's door, securing 100% retention with automated refills.
            </p>
          </div>
        </MedicineDeliveriesHero>
        
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
