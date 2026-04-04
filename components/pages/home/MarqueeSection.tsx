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
  <div className="mx-3 md:mx-4 flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)]">
    <span className="text-[15px] font-normal text-slate-600 tracking-wide">
      {text}
    </span>
  </div>
);

export function MarqueeSection() {
  return (
    <section className="py-10 md:py-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        
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
