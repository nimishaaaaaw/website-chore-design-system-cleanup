'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Building, Stethoscope, Package, ClipboardList, Truck, LineChart } from 'lucide-react';

const VPImplementation = () => {
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const colorRange = ["#3b82f6", "#4f46e5", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef"];
  
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    colorRange
  );

  const processSteps = [
    {
      step: "Day 01",
      title: "Hub Establishment",
      icon: <Building size={20} />,
      desc: "We establish a fully-licensed Dark Pharmacy hub strategically located to serve a 2–3 km radius of your clinic.",
      highlight: "Infrastructure setup."
    },
    {
      step: "Day 03",
      title: "Clinic Integration",
      icon: <Stethoscope size={20} />,
      desc: "We deploy our Clinic Management System (HMS) and finalize your custom formulary with your lead doctors.",
      highlight: "Digital onboarding."
    },
    {
      step: "Day 05",
      title: "Procurement",
      icon: <Package size={20} />,
      desc: "We procure the exact brands you prefer and ensure 100% of your formulary is stocked at the local hub.",
      highlight: "Stock funding."
    },
    {
      step: "Day 07+",
      title: "Seamless Prescribing",
      icon: <ClipboardList size={20} />,
      desc: "You consult patients and generate digital prescriptions effortlessly through the MediKloud HMS.",
      highlight: "Operational loop."
    },
    {
      step: "Insta-Pack",
      title: "10-Minute Delivery",
      icon: <Truck size={20} />,
      desc: "The prescription is packed in 60 seconds and delivered to the patient at your clinic door instantly.",
      highlight: "Doorstep fulfillment."
    },
    {
      step: "Real-Time",
      title: "Tracking & Earnings",
      icon: <LineChart size={20} />,
      desc: "Track delivery status and your service fee earnings in real-time on your clinical dashboard.",
      highlight: "Revenue transparency."
    }
  ];

  const StepCard = ({ step, index }: { step: any, index: number }) => {
    const isEven = index % 2 !== 0;
    return (
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-10% 0px", once: true }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="card h-full group"
      >
        <div className="flex flex-col items-start mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100 mb-4">{step.step}</span>
          <h3 className="text-h3 font-bold text-slate-900 tracking-tight">{step.title}</h3>
          <span className="text-sm font-bold text-indigo-500 mt-1 italic opacity-80">{step.highlight}</span>
        </div>
        <p className="text-body text-slate-600 font-medium leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    );
  };

  const StepNode = ({ step, index }: { step: any, index: number }) => (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15 }}
      viewport={{ margin: "-10% 0px", once: false }}
      className="w-14 h-14 rounded-full p-1 shadow-lg cursor-pointer z-30 ring-4 ring-white"
      style={{ background: colorRange[index] }}
    >
      <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-slate-900">
        <div style={{ color: colorRange[index] }}>
          {step.icon}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-section-alt border-y border-slate-100 section-py relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24 space-y-6"
        >
          <div className="eyebrow-wrap">
            <span className="eyebrow-line-r" />
            <span className="eyebrow-text">ONBOARDING EXPERIENCE</span>
            <span className="eyebrow-line-l" />
          </div>
          
          <h2 className="text-section md:text-5xl text-balance">
            Zero Effort. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">Total Impact.</span>
          </h2>
          
          <p className="text-body-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            How we integrate into your practice architecture in just 7 days.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative px-4" ref={processRef}>
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full" />
          <motion.div 
            style={{ height: lineHeight, backgroundColor: lineColor }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 w-1 rounded-full origin-top z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
          />

          <div className="space-y-12 md:space-y-16 relative z-20">
            {processSteps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-[1fr_120px_1fr] items-center w-full">
                    <div className={`${isEven ? 'order-3' : 'order-1'} h-full`}>
                      <StepCard step={step} index={index} />
                    </div>
                    <div className="order-2 flex justify-center">
                      <StepNode step={step} index={index} />
                    </div>
                    <div className="order-1" />
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-16 relative">
                    <div className="absolute left-0 top-0">
                      <StepNode step={step} index={index} />
                    </div>
                    <StepCard step={step} index={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { VPImplementation };
