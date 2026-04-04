"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LucideIcon, AlertCircle, CheckCircle2, TrendingDown, Store, ShieldCheck, Users, RefreshCw, Laptop, Clock, Truck, ArrowRight, XCircle, Activity, HeartPulse } from 'lucide-react';

// --- Animation Variants ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Reusable Components ---
export const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden ${className}`}>
    {children}
  </section>
);

export const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "red" | "green" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    red: "bg-red-50 text-red-600 border-red-100",
    green: "bg-teal-50 text-teal-600 border-teal-100",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colors[color]} mb-6`}>
      {children}
    </span>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => (
  <div className="mb-16 max-w-3xl">
    <motion.h4 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-sm font-bold uppercase tracking-widest ${light ? 'text-blue-200' : 'text-blue-600'} mb-4`}
    >
      {subtitle}
    </motion.h4>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
  </div>
);

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

interface ComparisonCardProps {
  title: string;
  items: string[];
  type: 'before' | 'after';
}

export const ComparisonCard = ({ title, items, type }: ComparisonCardProps) => (
  <div className={`p-8 rounded-2xl ${type === 'before' ? 'bg-slate-50 border border-slate-200' : 'bg-blue-50 border border-blue-200'}`}>
    <h4 className={`text-xl font-bold mb-6 ${type === 'before' ? 'text-slate-700' : 'text-blue-900'}`}>
      {type === 'before' ? 'The Traditional Gap' : 'The MediKloud Result'}
    </h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          {type === 'before' ? (
            <AlertCircle className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
          )}
          <span className={type === 'before' ? 'text-slate-500' : 'text-slate-700 font-medium'}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
