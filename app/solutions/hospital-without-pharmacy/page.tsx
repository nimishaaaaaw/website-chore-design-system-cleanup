"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { HospitalWithoutPharmacyHero } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyHero';
import { HospitalWithoutPharmacyReality } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyReality';
import { HospitalWithoutPharmacyShift } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyShift';
import { HospitalWithoutPharmacySolutions } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacySolutions';
import { HospitalWithoutPharmacyBenefits } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyBenefits';
import { HospitalWithoutPharmacyEmotionalClose } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyEmotionalClose';
import { HospitalWithoutPharmacyCTA } from '@/components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyCTA';

export default function HospitalWithoutPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleTalkToExpert = () => {
    openModal();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <HospitalWithoutPharmacyHero 
          onBookDemo={handleBookDemo} 
          onTalkToExpert={handleTalkToExpert}
        />

        {/* Reality Section - The Leakage Problem */}
        <HospitalWithoutPharmacyReality />

        {/* Shift Section - The Strategic Opportunity */}
        <HospitalWithoutPharmacyShift />

        {/* Solutions Section - The 3-Step Engine */}
        <section id="how-it-works">
          <HospitalWithoutPharmacySolutions />
        </section>

        {/* Benefits Section - Key Value Propositions */}
        <HospitalWithoutPharmacyBenefits />

        {/* Emotional Close - The Vision */}
        <HospitalWithoutPharmacyEmotionalClose />

        {/* Final CTA Section */}
        <HospitalWithoutPharmacyCTA 
          onBookDemo={handleBookDemo}
          onTalkToExpert={handleTalkToExpert}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
