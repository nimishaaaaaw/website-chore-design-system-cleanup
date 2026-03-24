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
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              AI Prescription Reader
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Drug Discovery
            </div>
            <div className="mx-3 px-5 py-2 bg-white rounded-full text-base md:text-lg font-medium text-slate-500">
              Clinical Decision Support
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Drug Interaction Checker
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Demand Forecasting
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Fraud Prevention
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
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
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Imaging Analysis
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Lab Automation
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              AI Inventory Management
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              AI Billing Agent
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              AI Discharge Agent
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Health Assistant
            </div>
            <div className="mx-3 px-5 py-3 bg-white rounded-full text-base md:text-lg font-bold text-slate-600">
              Test Recommendation Engine
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
