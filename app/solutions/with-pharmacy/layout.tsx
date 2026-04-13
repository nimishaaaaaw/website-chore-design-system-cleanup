import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed Pharmacy & HMS for Independent Hospitals",
  description: "Upgrade your hospital pharmacy with a fully managed operations layer and free enterprise HMS. Stop revenue leakage and automate inventory with zero capex.",
  alternates: {
    canonical: '/solutions/with-pharmacy',
  },
  openGraph: {
    title: "Managed Pharmacy & HMS for Independent Hospitals | MediKloud",
    description: "Upgrade your hospital pharmacy with a fully managed operations layer and free enterprise HMS. Stop revenue leakage and automate inventory with zero capex.",
    url: '/solutions/with-pharmacy',
  },
  twitter: {
    title: "Managed Pharmacy & HMS for Independent Hospitals | MediKloud",
    description: "Upgrade your hospital pharmacy with a fully managed operations layer and free enterprise HMS. Stop revenue leakage and automate inventory with zero capex.",
  },
};

export default function HospitalWithPharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
