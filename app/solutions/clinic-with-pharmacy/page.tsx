"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { ClinicWP_Hero } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_Hero';
import { ClinicWP_HiddenReality } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_HiddenReality';
import { ClinicWP_InfrastructureGap } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_InfrastructureGap';
import { ClinicWP_SystemChange } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_SystemChange';
import { ClinicWP_UnifiedEcosystem } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_UnifiedEcosystem';
import { ClinicWP_Comparison } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_Comparison';
import { ClinicWP_EmotionalCTA } from '@/components/pages/solutions/clinic-with-pharmacy/ClinicWP_EmotionalCTA';

export default function ClinicWithPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleLiveDemo = () => {
    openModal();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      <Header />
      
      <main id="main">
        {/* Section 1 - Hero */}
        <ClinicWP_Hero />

        {/* Section 2 - Hidden Reality */}
        <ClinicWP_HiddenReality />

        {/* Section 3 - Infrastructure Gap */}
        <ClinicWP_InfrastructureGap />

        {/* Section 4 - System Change */}
        <ClinicWP_SystemChange />

        {/* Section 5 - Unified Ecosystem */}
        <ClinicWP_UnifiedEcosystem />

        {/* Section 6 - Comparison */}
        <ClinicWP_Comparison />

        {/* Section 7 - Emotional CTA */}
        <ClinicWP_EmotionalCTA 
          onBookDemo={handleBookDemo}
          onLiveDemo={handleLiveDemo}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
