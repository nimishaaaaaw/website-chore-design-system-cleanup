"use client"

import Marquee from 'react-fast-marquee'

export function MarqueeSection() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        
        {/* Top Row - Moving Left */}
        <div className="mb-8">
          <Marquee 
            speed={30}
            pauseOnHover={true}
            gradient={true}
            gradientColor="white"
            gradientWidth={100}
            autoFill={true}
          >
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              AI Prescription Reader
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Drug Discovery
            </div>
            <div className="mx-3 px-5 py-2 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Clinical Decision Support
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Drug Interaction Checker
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Demand Forecasting
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Fraud Prevention
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Voice to Text Translation
            </div>
          </Marquee>
        </div>

        {/* Bottom Row - Moving Right */}
        <div>
          <Marquee 
            speed={30}
            direction="right"
            pauseOnHover={true}
            gradient={true}
            gradientColor="white"
            gradientWidth={100}
            autoFill={true}
          >
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Imaging Analysis
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Lab Automation
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              AI Inventory Management
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              AI Billing Agent
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              AI Discharge Agent
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Health Assistant
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-normal text-gray-500">
              Test Recommendation Engine
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
