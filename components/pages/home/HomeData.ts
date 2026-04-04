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
