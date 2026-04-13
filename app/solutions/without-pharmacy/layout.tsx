import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions for Clinics Without Pharmacies",
  description: "Operating a clinic without an in-house pharmacy? We provide a free HMS and integrate automated medicine delivery to close your patient care loop.",
  alternates: {
    canonical: '/solutions/without-pharmacy',
  },
  openGraph: {
    title: "Solutions for Clinics Without Pharmacies | MediKloud",
    description: "Operating a clinic without an in-house pharmacy? We provide a free HMS and integrate automated medicine delivery to close your patient care loop.",
    url: '/solutions/without-pharmacy',
  },
  twitter: {
    title: "Solutions for Clinics Without Pharmacies | MediKloud",
    description: "Operating a clinic without an in-house pharmacy? We provide a free HMS and integrate automated medicine delivery to close your patient care loop.",
  },
};

export default function ClinicWithoutPharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
