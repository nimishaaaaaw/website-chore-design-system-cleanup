import { Header } from '@/components/layout/Header'
import { MedicineDeliveriesHero } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesHero'
import { MedicineDeliveriesProblem } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesProblem'
import { MedicineDeliveriesImpact } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesImpact'
import { MedicineDeliveriesEconomics } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesEconomics'
import { MedicineDeliveriesFAQ } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesFAQ'
import { MedicineDeliveriesCTA } from '@/components/pages/products/medicine-deliveries/MedicineDeliveriesCTA'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: "Medicine Deliveries | MediKloud",
  description: "Enable medicine deliveries directly from your hospital pharmacy. Bridge the gap between consultation and doorstep care with our technology and logistics.",
};

export default function MedicineDeliveriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        {/* Hero Section */}
        <MedicineDeliveriesHero />
        
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
          <MedicineDeliveriesFAQ />
        </div>

        {/* Final CTA */}
        <MedicineDeliveriesCTA />
      </main>
      <Footer />
    </div>
  );
}
