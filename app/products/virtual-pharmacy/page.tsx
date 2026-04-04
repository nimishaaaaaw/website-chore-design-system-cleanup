import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VPHero } from '@/components/pages/products/virtual-pharmacy/VPHero';
import { VPInfrastructure } from '@/components/pages/products/virtual-pharmacy/VPInfrastructure';
import { VPProblem } from '@/components/pages/products/virtual-pharmacy/VPProblem';
import { VPSolution } from '@/components/pages/products/virtual-pharmacy/VPSolution';
import { VPComparison } from '@/components/pages/products/virtual-pharmacy/VPComparison';
import { VPImplementation } from '@/components/pages/products/virtual-pharmacy/VPImplementation';
import { VPFAQ } from '@/components/pages/products/virtual-pharmacy/VPFAQ';
import { VPCTA } from '@/components/pages/products/virtual-pharmacy/VPCTA';

export const metadata = {
  title: 'Virtual Pharmacy | MediKloud',
  description: 'The 10-Minute Digital Pharmacy for Independent Clinics. MediKloud provides the tech, inventory, and logistics to fulfill your prescriptions at the clinic doorstep in 10 minutes.',
};

export default function VirtualPharmacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <main id="main">
        <VPHero />
        <VPInfrastructure />
        <VPProblem />
        <VPSolution />
        <VPComparison />
        <VPImplementation />
        <VPFAQ />
        <VPCTA />
      </main>
      <Footer />
    </div>
  );
}
