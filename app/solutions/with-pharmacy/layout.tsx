import type { Metadata } from 'next';

import { getMetadata } from '@/lib/seo'

export const metadata = getMetadata({
  title: "Managed Pharmacy & HMS for Independent Hospitals",
  description: "Upgrade your hospital pharmacy with a fully managed operations layer and free enterprise HMS. Stop revenue leakage and automate inventory with zero capex.",
  path: '/solutions/with-pharmacy'
})

export default function HospitalWithPharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
