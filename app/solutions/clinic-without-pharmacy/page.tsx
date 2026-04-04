"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { ClinicHero } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHero';
import { ClinicHiddenLoss } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHiddenLoss';
import { ClinicInsightShift } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicInsightShift';
import { ClinicHowItWorks } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks';
import { ClinicWhatChanges } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicWhatChanges';
import { ClinicEmotionalClose } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicEmotionalClose';
import { ClinicCTA } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicCTA';

export default function ClinicWithoutPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      openModal();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main id="main">
        {/* Section 1 - Hero */}
        <ClinicHero />

        {/* Section 2 - The Hidden Loss */}
        <ClinicHiddenLoss />

        {/* Section 3 - The Insight Shift */}
        <ClinicInsightShift />

        {/* Section 4 - How MediKloud Works */}
        <ClinicHowItWorks />

        {/* Section 5 - What Changes for Your Clinic */}
        <ClinicWhatChanges />

        {/* Section 6 - Emotional Close */}
        <ClinicEmotionalClose />

        {/* Section 7 - Final CTA Section */}
        <ClinicCTA 
          onBookDemo={handleBookDemo}
          onSeeHowItWorks={handleSeeHowItWorks}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
