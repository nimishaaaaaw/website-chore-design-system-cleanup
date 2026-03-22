import { 
  Database, 
  Zap, 
  Truck, 
  Smartphone, 
  Hospital, 
  Pill, 
  BarChart3, 
  Target, 
  Globe, 
  Rocket, 
  Monitor, 
  PieChart, 
  Landmark, 
  Link, 
  Clock, 
  Users,
  TrendingUp,
  RefreshCcw,
  Wallet,
  ShieldCheck,
  Bot,
  LucideIcon
} from 'lucide-react';

export interface StatItem {
  label: string;
  stat: string;
  note: string;
}

export const PROBLEM_STATS: StatItem[] = [
  { label: 'Internal Bleed',        stat: '15–20%', note: 'Pilferage & missed billing' },
  { label: 'Prescription Leakage',  stat: '20–30%', note: 'Fills at Apollo, MedPlus, 1mg' },
  { label: 'No Pharmacy at All',    stat: '25%',    note: 'Every prescription lost to retail' },
];

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionSection {
  id: string;
  title: string;
  content: {
    heading: string;
    description: string;
    items: SolutionItem[];
  };
}

export const SOLUTIONS_SECTIONS: SolutionSection[] = [
  {
    id: 'clinics',
    title: 'Internal Losses',
    content: {
      heading: 'Stop Losses Before They Happen',
      description: '15–20% of pharmacy revenue disappears daily to billing gaps, pilferage, and stockouts — before a patient even walks out.',
      items: [
        { icon: Database, title: 'Auto Billing Match', description: 'Patients get accurate bills — no overcharges, no disputes' },
        { icon: Pill, title: 'Stockout Prevention', description: "Doctors' prescriptions fulfilled completely, every time" },
        { icon: Target, title: 'Expiry Tracking', description: 'Only fresh, safe medicines dispensed to every patient' },
        { icon: BarChart3, title: 'Full Visibility', description: 'Hospital recovers 15–20% of revenue that was silently bleeding' },
      ],
    },
  },
  {
    id: 'mid-hospitals',
    title: 'Procurement Costs',
    content: {
      heading: 'Pay Less for Medicines — From Day One',
      description: 'Independent hospitals negotiate alone and lose. MediKloud pools demand across its network to unlock pricing only large chains get.',
      items: [
        { icon: Globe, title: 'Network Pooling', description: 'Hospital unlocks bulk pricing without being a bulk buyer' },
        { icon: Landmark, title: 'Institutional Pricing', description: 'Patients pay fair prices — not inflated retail margins' },
        { icon: PieChart, title: 'Gross Margin Uplift', description: 'Hospital earns more without charging patients a rupee extra' },
        { icon: Rocket, title: 'Improves With Scale', description: 'Every new partner hospital drives costs down for all' },
      ],
    },
  },
  {
    id: 'large-networks',
    title: 'Prescription Leakage',
    content: {
      heading: 'Recover Revenue Lost to Apollo & MedPlus',
      description: "20–30% of your prescriptions are filled at retail chains — not by patient choice, but because your pharmacy couldn't fulfill in time.",
      items: [
        { icon: Link, title: 'Prescription Capture', description: 'Patients get all medicines in one visit — no second stop' },
        { icon: Truck, title: '~10 Min Delivery', description: 'Medicines reach patients at home, no travel required' },
        { icon: Hospital, title: 'Full Fulfillment', description: "Doctors' prescriptions dispensed exactly as written, every time" },
        { icon: Monitor, title: 'Leakage Tracking', description: 'Hospital sees exactly where revenue is walking out the door' },
      ],
    },
  },
  {
    id: 'government',
    title: 'Chronic Refills',
    content: {
      heading: 'Turn Chronic Patients Into Recurring Revenue',
      description: '60–70% of pharmacy revenue is chronic and repeat. Automated reminders bring every refill back to your pharmacy — not the chemist down the road.',
      items: [
        { icon: Users, title: 'Chronic Disease Focus', description: 'Patients on long-term care never miss a critical dose' },
        { icon: Smartphone, title: 'WhatsApp & SMS Alerts', description: 'Reminders in Telugu, Hindi, and English — in their language' },
        { icon: Zap, title: 'Auto Refill Engine', description: "Doctors' prescribed regimens followed without manual follow-up" },
        { icon: Clock, title: 'Compounding Revenue', description: 'Hospital builds recurring revenue with every chronic patient added' },
      ],
    },
  },
];

export interface ReasonItem {
  title: string;
  subtitle: string;
  description: string;
  tags: { label: string; dir: 'up' | 'down'; color: string }[];
  icon: LucideIcon;
  comparison: {
    key: string;
    without: string;
    with: string;
  };
}

export const WHY_IT_WORKS_REASONS: ReasonItem[] = [
  {
    title: "30-40%",
    subtitle: "Revenue recovered",
    description: "From leakage you already have through automated tracking.",
    tags: [
      { label: "Leakage", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Margins", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: TrendingUp,
    comparison: {
      key: "30-40% avg. pharmacy revenue recovered",
      without: "Losses go undetected until the audit. By then, it's gone.",
      with: "Billing, inventory, and dispense are reconciled automatically — every day."
    }
  },
  {
    title: "Real-time",
    subtitle: "Operational control",
    description: "Stop losses before month-end with proactive inventory logic.",
    tags: [
      { label: "Stockouts", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Expiry", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" }
    ],
    icon: Zap,
    comparison: {
      key: "Zero-latency inventory visibility",
      without: "Managers rely on lagging reports, leading to stockouts.",
      with: "Predictive alerts flag low stock and near-expiry items weeks in advance."
    }
  },
  {
    title: "Network",
    subtitle: "Lower medicine costs",
    description: "Prices no single hospital can get on their own.",
    tags: [
      { label: "COGS", dir: "down", color: "text-rose-600 bg-rose-50 border-rose-100" },
      { label: "Gross margin", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: Globe,
    comparison: {
      key: "15% average reduction in procurement spend",
      without: "Individual hospitals lack bargaining power for market rates.",
      with: "Access wholesale pricing tiers reserved for massive chains."
    }
  },
  {
    title: "Recurring",
    subtitle: "Chronic refill revenue",
    description: "One prescription → years of predictable returns.",
    tags: [
      { label: "Retention", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
      { label: "LTV", dir: "up", color: "text-emerald-600 bg-emerald-50 border-emerald-100" }
    ],
    icon: RefreshCcw,
    comparison: {
      key: "3x increase in patient lifetime value",
      without: "Chronic patients drift away to local pharmacies for maintenance.",
      with: "Automated refill reminders keep patients returning to your pharmacy."
    }
  }
];

export const STATS_PARTICLE_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 6) * 0.35}s`,
  duration: `${2 + (i % 4) * 0.5}s`,
}));

export interface TrustBadgeItem {
  icon: LucideIcon;
  label: string;
}

export const HERO_TRUST_BADGES: TrustBadgeItem[] = [
  { icon: Wallet, label: "Zero Capex" },
  { icon: ShieldCheck, label: "Zero Revenue Leakage" },
  { icon: Clock, label: "Live in 15 Days" },
  { icon: TrendingUp, label: "Hassle-Free Pharmacy" },
];

export const VISION_STATS = [
  { title: '20–30%', label: 'Increased Pharmacy Profits', icon: TrendingUp, color: 'from-blue-600 to-indigo-600' },
  { title: 'Home Delivery', label: '& Automated Refills', icon: Truck, color: 'from-indigo-600 to-violet-600' },
  { title: 'Free HMS', label: 'Zero-cost hospital software', icon: Monitor, color: 'from-blue-500 to-blue-700' },
  { title: 'AI-Powered', label: 'Procurement, billing & inventory', icon: Bot, color: 'from-violet-500 to-indigo-600' },
];

export const FEATURE_CARDS = [
  {
    id: 1,
    title: '',
    tag: '',
    description: '',
    image: '',
    cta: '',
    chips: [],
    theme: {
      ctaFrom: 'from-cyan-600',
      ctaTo: 'to-blue-600',
      aura1: 'bg-cyan-400/25',
      aura2: 'bg-blue-400/25',
      aura3: 'bg-teal-300/20',
      imgAura: 'from-cyan-400/20 via-blue-400/10 to-teal-400/20',
      badgeText: 'text-cyan-700',
      icon: '',
      bg: 'bg-cyan-50',
    },
  },
  {
    id: 2,
    title: '',
    tag: '',
    description: '',
    image: '',
    cta: '',
    chips: [],
    theme: {
      ctaFrom: 'from-indigo-600',
      ctaTo: 'to-violet-600',
      aura1: 'bg-indigo-400/25',
      aura2: 'bg-violet-400/25',
      aura3: 'bg-fuchsia-300/20',
      imgAura: 'from-indigo-400/20 via-violet-400/10 to-fuchsia-400/20',
      badgeText: 'text-indigo-700',
      icon: '',
      bg: 'bg-indigo-50',
    },
  },
  {
    id: 3,
    title: '',
    tag: '',
    description: '',
    image: '',
    cta: '',
    chips: [],
    theme: {
      ctaFrom: 'from-emerald-600',
      ctaTo: 'to-teal-600',
      aura1: 'bg-emerald-400/25',
      aura2: 'bg-teal-400/25',
      aura3: 'bg-green-300/20',
      imgAura: 'from-emerald-400/20 via-teal-400/10 to-green-400/20',
      badgeText: 'text-emerald-700',
      icon: '',
      bg: 'bg-emerald-50',
    },
  },
  {
    id: 4,
    title: '',
    tag: '',
    description: '',
    image: '',
    cta: '',
    chips: [],
    theme: {
      ctaFrom: 'from-amber-500',
      ctaTo: 'to-orange-600',
      aura1: 'bg-amber-400/25',
      aura2: 'bg-orange-400/25',
      aura3: 'bg-yellow-300/20',
      imgAura: 'from-amber-400/20 via-orange-400/10 to-yellow-400/20',
      badgeText: 'text-amber-700',
      icon: '',
      bg: 'bg-amber-50',
    },
  },
];
