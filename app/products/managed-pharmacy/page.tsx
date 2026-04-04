import { Header } from '@/components/layout/Header'
import { MPHero } from '@/components/pages/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/pages/products/managed-pharmacy/MPProblemGrid'
// import { MPv2ProblemStack } from '@/components/pages/products/managed-pharmacy/MPv2ProblemStack'
import { MPv2Solution } from '@/components/pages/products/managed-pharmacy/MPv2Solution'
import { MPv2Timeline } from '@/components/pages/products/managed-pharmacy/MPv2Timeline'
import { MPv2PersonaCTA } from '@/components/pages/products/managed-pharmacy/MPv2PersonaCTA'
import { MPv2FAQ } from '@/components/pages/products/managed-pharmacy/MPv2FAQ'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: "Managed Pharmacy | Medikloud",
  description: "Tech-enabled managed pharmacy solutions for hospitals and clinics.",
};

export default function ManagedPharmacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <MPHero />
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
