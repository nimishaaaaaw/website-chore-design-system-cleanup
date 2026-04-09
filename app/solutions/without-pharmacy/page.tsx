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

/**
 * Storytelling Animations for Clinic Without Pharmacy
 */
const StorytellingStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes shimmer { 100% { transform: translateX(100%); } }
    @keyframes float-badge { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }

    @keyframes type-line-1 {
      0%, 10% { width: 0%; opacity: 0; }
      20%, 85% { width: 100%; opacity: 1; }
      95%, 100% { width: 100%; opacity: 0; }
    }
    @keyframes type-line-2 {
      0%, 25% { width: 0%; opacity: 0; }
      35%, 85% { width: 66%; opacity: 1; }
      95%, 100% { width: 66%; opacity: 0; }
    }
    @keyframes send-btn {
      0%, 45% { transform: scale(1); background-color: #4F46E5; }
      50% { transform: scale(0.95); background-color: #3B82F6; }
      55%, 85% { transform: scale(1); background-color: #10B981; }
      95%, 100% { transform: scale(1); background-color: #4F46E5; }
    }
    @keyframes delivery-truck {
      0% { left: 12%; transform: scale(0.5); opacity: 0; }
      10% { left: 12%; transform: scale(1); opacity: 1; }
      60% { left: 70%; transform: scale(1); opacity: 1; }
      75% { left: 70%; transform: scale(0.5); opacity: 0; }
      100% { left: 70%; transform: scale(0.5); opacity: 0; }
    }
    @keyframes chat-msg-1 {
      0%, 10% { opacity: 0; transform: translateY(10px); }
      15%, 85% { opacity: 1; transform: translateY(0); }
      90%, 100% { opacity: 0; transform: translateY(-10px); }
    }
    @keyframes chat-msg-2 {
      0%, 35% { opacity: 0; transform: translateY(10px); }
      40%, 85% { opacity: 1; transform: translateY(0); }
      90%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    .animate-shimmer { animation: shimmer 2s infinite linear; }
    .animate-float-badge { animation: float-badge 4s ease-in-out infinite; }
    .animate-type-1 { animation: type-line-1 5s infinite; white-space: nowrap; overflow: hidden; }
    .animate-type-2 { animation: type-line-2 5s infinite; white-space: nowrap; overflow: hidden; }
    .animate-send { animation: send-btn 5s infinite; transition: background-color 0.3s; }
    .animate-delivery { animation: delivery-truck 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; position: absolute; margin-top: -24px; top: 50%; }
    .animate-chat-1 { animation: chat-msg-1 6s ease-out infinite; }
    .animate-chat-2 { animation: chat-msg-2 6s ease-out infinite; }
    
    .text-gradient-cyan {
      background: linear-gradient(to right, #22d3ee, #3B82F6, #4F46E5);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  ` }} />
);

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
      <StorytellingStyles />
      <Header />
      
      <main id="main">
        {/* Section 1 - Hero */}
        <ClinicHero onBookDemo={handleBookDemo} />

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
