import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions for Hospitals With Pharmacies | MediKloud",
  description: "Operating an in-house hospital pharmacy? We take over operations, fully fund your inventory, and integrate automated delivery to stop revenue leakage.",
};

export default function HospitalWithPharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
