import React from 'react';
import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { getMetadata } from '@/lib/seo'

export const metadata = getMetadata({
  title: 'Return Policy',
  description: 'Review MediKloud\'s return and refund policy for purchases and subscriptions.',
  path: '/return-policy'
})

const Header = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-muted shadow-card">
    <div className="container-page">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center group cursor-pointer">
          <Link href="/">
            <Image
              src="/Logos/medikloud-logo-primary.webp"
              alt="MediKloud Logo"
              className="w-[120px] sm:w-[140px] h-auto transition-all duration-500 group-hover:scale-105"
              priority
              width={1536}
              height={1024}
              sizes="(max-width: 640px) 120px, 140px"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/privacy-policy" className="nav-link">Privacy Policy</Link>
          <Link href="/terms-of-service" className="nav-link">Terms</Link>
          <Link href="/return-policy" className="nav-link active">Return Policy</Link>
        </div>
      </div>
    </div>
  </nav>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="mb-8">
    <h2 className="text-h2 font-bold mt-8 mb-4 text-slate-900">{title}</h2>
    {children}
  </section>
);

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-section-hero text-slate-800 pb-16">
      <Header />
      <div className="max-w-4xl mx-auto pt-32 px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-card-lg border border-muted p-8 md:p-12">

          <h1 className="text-h1 font-bold mb-6 text-brand-700 leading-tight">Return Policy</h1>
          <p className="mb-2 font-semibold">Last updated: Aug 9, 2025</p>

          <p className="mb-4">Thank you for your purchase. We hope you are happy with your order. However, if you are not completely satisfied for any reason, you may return the item to us for a refund, store credit, or exchange. Please review the guidelines below for more details on our return process.</p>

          <Section title="Returns">
            <ul className="list-disc pl-6 mb-4">
              <li>All returns must be postmarked within two (2) days of the purchase date.</li>
              <li>Returned items must be in new and unused condition, with all original tags, labels, and packaging intact.</li>
            </ul>
          </Section>

          <Section title="Return Process">
            <p className="mb-2">To initiate a return, please email our customer service team at <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a> to obtain a Return Merchandise Authorization (RMA) number.</p>
            <p className="mb-2">After receiving your RMA number:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Place the item securely in its original packaging.</li>
              <li>Include proof of purchase and the RMA number.</li>
              <li>Ship the return to the following address:</li>
            </ol>
            <address className="not-italic mb-4">
              Medikloud<br />
              Attn: Returns<br />
              RMA #<br />
              Startup Village, Chandrampalem,<br />
              Pedda Rushikonda, Madhurawada,<br />
              Visakhapatnam, Andhra Pradesh – 530048<br />
              India
            </address>
            <ul className="list-disc pl-6 mb-4">
              <li>Please note: You are responsible for all return shipping charges.</li>
              <li>We strongly recommend using a trackable shipping method.</li>
            </ul>
          </Section>

          <Section title="Refunds">
            <p className="mb-2">After we receive and inspect your returned item, we will process your refund or exchange. Please allow up to two (2) business days from receipt of the return for processing.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds may take 1–2 billing cycles to appear on your credit card statement, depending on your payment provider.</li>
              <li>You will receive an email confirmation once your return has been processed.</li>
            </ul>
          </Section>

          <Section title="Exceptions">
            <p className="mb-2">The following items cannot be returned or exchanged:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Any item explicitly marked as non-returnable on the product information page.</li>
            </ul>
            <p className="mb-4">If you receive a defective or damaged item, please contact us immediately at the email or phone number below to arrange a refund or replacement.</p>
          </Section>

          <Section title="Questions">
            <p className="mb-2">If you have any questions or need further assistance regarding our return policy, please contact us:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>📞 +91 77026 70993</li>
              <li>📧 <a href="mailto:hello@medikloud.com" className="text-brand-600 underline">hello@medikloud.com</a></li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
}