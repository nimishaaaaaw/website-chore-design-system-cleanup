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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10-Minute Virtual Pharmacy for Clinics in India',
  description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.',
  alternates: {
    canonical: '/products/virtual-pharmacy',
  },
  openGraph: {
    title: '10-Minute Virtual Pharmacy for Clinics in India | MediKloud',
    description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.',
    url: '/products/virtual-pharmacy',
  },
  twitter: {
    title: '10-Minute Virtual Pharmacy for Clinics in India | MediKloud',
    description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.',
  },
};

export default function VirtualPharmacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <Script
        id="ld-virtual-pharmacy-service"
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: '10-Minute Virtual Pharmacy for Clinics in India',
            provider: {
              '@type': 'Organization',
              name: 'MediKloud'
            },
            description: 'Provide a full pharmacy experience without buying stock or losing space. MediKloud delivers medicines to your waiting patients in 10 mins at the clinic.'
          })
        }}
      />
      <main id="main">
        <VPHero />
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
