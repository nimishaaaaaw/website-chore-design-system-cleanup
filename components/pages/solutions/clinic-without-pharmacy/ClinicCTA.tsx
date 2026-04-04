"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Zap,
  Building2
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

interface ClinicCTAProps {
  onBookDemo?: () => void;
  onSeeHowItWorks?: () => void;
}

export const ClinicCTA = ({ onBookDemo, onSeeHowItWorks }: ClinicCTAProps) => {
  return (
    <section className="section-py-lg bg-section-dark relative overflow-hidden">
      {/* Background Blobs for Dark Section */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Join the 100+ Clinics Scaling with MediKloud
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
          >
            Turn Your Clinic Into a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Revenue-Generating Care Hub
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100/70 max-w-2xl mx-auto"
          >
            Start reaping the benefits of an integrated pharmacy layer without the capital risk or operational headache.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >
            <button 
              onClick={onBookDemo}
              className="btn-dark-cta w-full sm:w-auto"
            >
              Get Started with MediKloud
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={onSeeHowItWorks}
              className="btn-secondary w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            >
              See How It Works in Your Clinic
            </button>
          </motion.div>

          {/* Proof Chips */}
          <div className="pt-16 flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {[
              { icon: Zap, text: "Instant Setup" },
              { icon: Building2, text: "Zero Footprint" },
              { icon: MessageCircle, text: "24/7 Support" }
            ].map((chip, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <chip.icon className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold uppercase tracking-widest">{chip.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
