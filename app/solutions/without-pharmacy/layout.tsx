import type { Metadata } from 'next';

import { getMetadata } from '@/lib/seo'

export const metadata = getMetadata({
  title: "Solutions for Clinics Without Pharmacies",
  description: "Operating a clinic without an in-house pharmacy? We provide a free HMS and integrate automated medicine delivery to close your patient care loop.",
  path: '/solutions/without-pharmacy'
})

export default function ClinicWithoutPharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
