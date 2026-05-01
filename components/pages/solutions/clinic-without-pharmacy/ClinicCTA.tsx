
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DarkAtmosphere } from '@/components/shared/DarkAtmosphere';
import { useContactModal } from '@/hooks/use-contact-modal';
import { premiumEase } from '@/lib/animation';

export const ClinicCTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="section-py-lg relative overflow-hidden">
      <DarkAtmosphere />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="header-lock mx-auto"
        >
          <h2 className="premium-h2 text-white mb-8">
            Ready to <span className="text-indigo-400">transform your clinic?</span>
          </h2>
          <p className="premium-p text-slate-400 text-body-lg intro-lock mx-auto">
            Join the clinics using MediKloud to deliver medications instantly and grow their revenue. Zero inventory, zero space, and zero financial risk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => openModal({
                badge: "Clinic Transformation",
                title: "Start Your Clinic Transformation",
                description: "Schedule a demo to see how MediKloud can help you fulfill every prescription instantly and recover hidden revenue.",
                btnText: "Schedule Your Demo",
                successTitle: "Consultation Scheduled!",
                successDescription: "Our specialists will reach out within 24 hours to schedule your clinic's transformation consult."
              })}
              className="group btn-primary"
            >
              <span>Join The Network</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>

        {/* Support Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-x-10 gap-y-6"
        >
          {[
            { label: "10 Min Delivery Network", color: "bg-indigo-500" },
            { label: "Instant Digital Setup",   color: "bg-brand-500" },
            { label: "Zero Space Required",     color: "bg-emerald-500" }
          ].map((chip, i) => (
            <div key={i} className="trust-chip bg-white/5 border-white/10">
              <div className={`w-1.5 h-1.5 rounded-full ${chip.color} shadow-[0_0_8px_rgba(59,130,246,0.3)]`} />
              <span className="trust-chip-text text-slate-300">{chip.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};