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
    <section className="section-py bg-slate-950 relative overflow-hidden">
      {/* Background Blobs for Dark Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-indigo-950/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[80px] -ml-24 -mb-24" />

      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100/90 text-xs font-bold backdrop-blur-md shadow-2xl tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Join the 100+ clinics scaling with MediKloud
          </motion.div>

          {/* Heading */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight px-4"
            >
              Turn your clinic into a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                revenue-generating care hub
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-body-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto font-medium"
            >
              Start reaping the benefits of an integrated pharmacy layer without the capital risk or operational headache.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center pt-6"
          >
            <button 
              onClick={onBookDemo}
              className="btn-dark-cta min-w-[240px] group shadow-2xl shadow-cyan-500/20"
            >
              Get started with MediKloud
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Proof Chips */}
          <div className="pt-16 flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            {[
              { icon: Zap, text: "Instant setup" },
              { icon: Building2, text: "Zero footprint" },
              { icon: MessageCircle, text: "24/7 Support" }
            ].map((chip, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <chip.icon className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">{chip.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

