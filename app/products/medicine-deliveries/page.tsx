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

export default function MedicineDeliveriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
