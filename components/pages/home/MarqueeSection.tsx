"use client"

import Marquee from 'react-fast-marquee'

const topMarqueeItems = [
  "AI Inventory Forecasting",
  "Zero-Capex Pharmacy Setup",
  "Automated Procurement",
  "Revenue Leakage Control",
  "Dynamic Stock Management",
  "Smart Billing Engine",
  "Virtual Pharmacy Fulfillment"
];

const bottomMarqueeItems = [
  "AI Prescription Reader",
  "Doorstep Medicine Delivery",
  "Fully Managed Operations",
  "Automated Refill Workflows",
  "Smart Expiry Management",
  "Clinical Medication Review",
  "Seamless EHR Integration"
];

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="mx-4 md:mx-6 flex items-center justify-center px-6 py-3">
    <span className="text-base font-normal text-slate-600 tracking-wide">
      {text}
    </span>
  </div>
);

export function MarqueeSection() {
  return (
    <section className="py-section-sm bg-section-surface relative overflow-hidden">
      <div className="max-w-container mx-auto relative z-10 w-full">
        
        {/* Top Row - Moving Left */}
        <div className="mb-6">
          <Marquee 
            speed={35}
            pauseOnHover={true}
            gradient={true}
            gradientColor="white"
            gradientWidth={100}
            autoFill={true}
          >
            {topMarqueeItems.map((item, idx) => (
              <MarqueeItem key={`top-${idx}`} text={item} />
            ))}
          </Marquee>
        </div>

        {/* Bottom Row - Moving Right */}
        <div>
          <Marquee 
            speed={35}
            direction="right"
            pauseOnHover={true}
            gradient={true}
            gradientColor="white"
            gradientWidth={100}
            autoFill={true}
          >
            {bottomMarqueeItems.map((item, idx) => (
              <MarqueeItem key={`bottom-${idx}`} text={item} />
            ))}
          </Marquee>
        </div>
        
      </div>
    </section>
  )
}
