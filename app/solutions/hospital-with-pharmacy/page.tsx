"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { HospitalPharmacyHero } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero';
import { HospitalPharmacyPain } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyPain';
import { HospitalPharmacyApproach } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyApproach';
import { HospitalPharmacyProducts } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyProducts';
import { HospitalPharmacyOutcomes } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyOutcomes';
import { HospitalPharmacyEmotionalClose } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyEmotionalClose';
import { HospitalPharmacyCTA } from '@/components/pages/solutions/hospital-pharmacy/HospitalPharmacyCTA';

export default function HospitalPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleContactSales = () => {
    openModal();
  };

  const handleViewDemo = () => {
    openModal();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <HospitalPharmacyHero 
          onBookDemo={handleBookDemo} 
          onViewDemo={handleViewDemo} 
        />

        {/* Pain Section - The Real Problem */}
        <HospitalPharmacyPain />

        {/* Approach Section - The MediKloud Approach (Bento Grid) */}
        <HospitalPharmacyApproach />

        {/* Product Section - The System Overview */}
        <HospitalPharmacyProducts />

        {/* Outcomes Section - Before/After Comparison */}
        <HospitalPharmacyOutcomes />

        {/* Emotional Close / Trust Section */}
        <HospitalPharmacyEmotionalClose />

        {/* Final CTA Section */}
        <HospitalPharmacyCTA 
          onBookDemo={handleBookDemo} 
          onContactSales={handleContactSales} 
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
