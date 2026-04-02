import { Header } from '@/components/Header'
import { MPHero } from '@/components/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/products/managed-pharmacy/MPProblemGrid'
// import { MPv2ProblemStack } from '@/components/v2/products/managed-pharmacy/MPv2ProblemStack'
import { MPv2Solution } from '@/components/v2/products/managed-pharmacy/MPv2Solution'
import { MPv2Timeline } from '@/components/v2/products/managed-pharmacy/MPv2Timeline'
import { MPv2PersonaCTA } from '@/components/v2/products/managed-pharmacy/MPv2PersonaCTA'
import { MPv2FAQ } from '@/components/v2/products/managed-pharmacy/MPv2FAQ'
import { Footer } from '@/components/v2/Footer'

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
        
        <div className="bg-slate-50 relative overflow-clip border-t border-slate-100">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[150px]" />
          </div>

          <div className="px-4 md:px-8 lg:px-12">
            {/* <MPv2ProblemStack /> */}
            <MPv2Solution />
            <MPv2Timeline />
            <MPv2PersonaCTA />
            <MPv2FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
