"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { ClinicWithPharmacyHero } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyHero';
import { ClinicWithPharmacyReality } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyReality';
import { ClinicWithPharmacyShift } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyShift';
import { ClinicWithPharmacySolutions } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacySolutions';
import { ClinicWithPharmacyBenefits } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyBenefits';
import { ClinicWithPharmacyEmotionalClose } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyEmotionalClose';
import { ClinicWithPharmacyCTA } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyCTA';

export default function ClinicWithPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleTalkToExpert = () => {
    openModal();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Header />
      
      <main id="main">
        {/* Section 1 - Hero */}
        <ClinicWithPharmacyHero 
          onBookDemo={handleBookDemo} 
          onTalkToExpert={handleTalkToExpert}
        />

        {/* Section 2 - Hidden Reality */}
        <ClinicWithPharmacyReality />

        {/* Section 3 - The Shift (Comparison) */}
        <ClinicWithPharmacyShift />

        {/* Section 4 - Solutions Ecosystem */}
        <section id="how-it-works">
          <ClinicWithPharmacySolutions />
        </section>

        {/* Section 5 - Benefits */}
        <ClinicWithPharmacyBenefits />

        {/* Section 6 - Emotional Vision */}
        <ClinicWithPharmacyEmotionalClose />

        {/* Section 7 - Final CTA */}
        <ClinicWithPharmacyCTA 
          onBookDemo={handleBookDemo}
          onTalkToExpert={handleTalkToExpert}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
