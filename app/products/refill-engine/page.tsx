import { Header } from '@/components/layout/Header'
import { RefillHero } from '@/components/pages/products/refill-engine/RefillHero'
import { RefillProblem } from '@/components/pages/products/refill-engine/RefillProblem'
import { RefillImpact } from '@/components/pages/products/refill-engine/RefillImpact'
import { RefillEconomics } from '@/components/pages/products/refill-engine/RefillEconomics'
import { RefillFAQ } from '@/components/pages/products/refill-engine/RefillFAQ'
import { RefillCTA } from '@/components/pages/products/refill-engine/RefillCTA'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: "Medicine Refill Engine | MediKloud",
  description: "Enable medicine deliveries directly from your hospital pharmacy. Bridge the gap between consultation and doorstep care with our technology and logistics.",
};

export default function RefillEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        {/* Hero Section */}
        <RefillHero />
        
        <div className="relative overflow-hidden">
          {/* Subtle Global Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px]" />
            <div className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-brand-indigo-50/20 rounded-full blur-[150px]" />
          </div>

          {/* Core Content Sections */}
          <RefillProblem />
          <RefillImpact />
          <RefillEconomics />
          <RefillFAQ />
        </div>

        {/* Final CTA */}
        <RefillCTA />
      </main>
      <Footer />
    </div>
  );
}
