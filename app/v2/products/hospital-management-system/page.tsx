import { Header } from '@/components/Header'
import { HMSHero } from '@/components/v2/products/hospital-management-system/HMSHero'
import { HMSTrustBanner } from '@/components/v2/products/hospital-management-system/HMSTrustBanner'
import { HMSEaseOfUse } from '@/components/v2/products/hospital-management-system/HMSEaseOfUse'
import { HMSModules } from '@/components/v2/products/hospital-management-system/HMSModules'
import { HMSSecurity } from '@/components/v2/products/hospital-management-system/HMSSecurity'
import { HMSComparison } from '@/components/v2/products/hospital-management-system/HMSComparison'
import { HMSFAQ } from '@/components/v2/products/hospital-management-system/HMSFAQ'
import { HMSCTA } from '@/components/v2/products/hospital-management-system/HMSCTA'
import { Footer } from '@/components/v2/Footer'

export const metadata = {
  title: "Hospital Management Software (HMS) | Medikloud",
  description: "Independent clinics and hospitals' most loved HMS. Zero training, high-volume OPD, and ABDM-ready workflows.",
};

export default function HMSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        {/* Hero Section */}
        <HMSHero />
        
        {/* Trust Banner */}
        <HMSTrustBanner />

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
          <HMSFAQ />
        </div>

        {/* Final CTA */}
        <HMSCTA />
      </main>
      <Footer />
    </div>
  );
}
