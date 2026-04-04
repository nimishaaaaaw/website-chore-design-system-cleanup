"use client"

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: any) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction as keyof typeof directions] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, className = "" }: any) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {}
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ClinicWP_HiddenReality = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Most clinic pharmacies don’t fail loudly.<br />
            <span className="text-red-400">They leak silently.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <FadeIn delay={0.2} direction="right">
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              You don’t see it in reports. You feel it in inconsistency. Your clinic generates massive demand, but your pharmacy doesn’t capture it.
            </p>
            <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <p className="text-lg font-medium text-white mb-2">The Truth:</p>
              <p className="text-slate-400">Even losing 5–10 prescriptions a day translates to massive compounded revenue loss over a year.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left">
            <StaggerContainer className="space-y-4">
              {[
                "Some days sales are good, some days zero",
                "Patients “say” they’ll buy but don’t",
                "Staff gives unauthorized discounts or misses billing",
                "Stock sits, expires, or runs out unexpectedly",
                "Chronic patients never come back for refills"
              ].map((text, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300">{text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
