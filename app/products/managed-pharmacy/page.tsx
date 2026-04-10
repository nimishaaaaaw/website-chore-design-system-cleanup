import { Header } from '@/components/layout/Header'
import { MPHero } from '@/components/pages/products/managed-pharmacy/MPHero'
import { MPProblemGrid } from '@/components/pages/products/managed-pharmacy/MPProblemGrid'
import { MPv2Solution } from '@/components/pages/products/managed-pharmacy/MPv2Solution'
import { MPv2Timeline } from '@/components/pages/products/managed-pharmacy/MPv2Timeline'
import { MPv2PersonaCTA } from '@/components/pages/products/managed-pharmacy/MPv2PersonaCTA'
import { MPv2FAQ } from '@/components/pages/products/managed-pharmacy/MPv2FAQ'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: "Fully Managed Pharmacy Operations — MediKloud",
  description: "Stop prescription leakage and capture 100% of your Rx value. Deploy a fully managed pharmacy inside your clinic with zero capital or operational load.",
};

export default function ManagedPharmacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
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
