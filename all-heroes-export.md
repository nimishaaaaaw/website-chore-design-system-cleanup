# Export for All Hero Sections

## app/globals.css

```css
/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          MEDIKLOUD DESIGN SYSTEM — globals.css               ║
 * ║                                                              ║
 * ║  Source of truth for all CSS custom properties.              ║
 * ║  Mirrors every token in tailwind.config.ts.                  ║
 * ║  Load this file FIRST, before any component styles.          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, *::before, *::after {
    border-color: theme('colors.slate.200');
  }
}

/* ═══════════════════════════════════════════════════════════════
   CSS CUSTOM PROPERTIES — design tokens as variables
   Use these anywhere Tailwind utilities aren't available:
   SVG fills, canvas, third-party components, inline styles.
   ═══════════════════════════════════════════════════════════════ */
:root {

  /* ── BRAND GRADIENT STOPS ─────────────────────────────────
     The three points of the brand gradient.
     Never add new stops. Never change the hue direction.
     The gradient moves warm (blue) → mid (indigo) → cool (violet). */
  --gradient-blue:    #2563EB;   /* blue-600  — gradient start, links */
  --gradient-blue-dk: #1D4ED8;   /* blue-700  — display gradient start */
  --gradient-indigo:  #4F46E5;   /* indigo-600 — gradient end (buttons) */
  --gradient-violet:  #7C3AED;   /* violet-600 — display gradient end */

  /* ── GRADIENT DEFINITIONS ────────────────────────────────── */
  /* display  → text-clip only. One headline per page.         */
  /* action   → CTA buttons on white/light sections            */
  /* accent   → CTA buttons inside the dark section ONLY       */
  --gradient-display: linear-gradient(to right, #1D4ED8, #4F46E5, #7C3AED);
  --gradient-action:  linear-gradient(to right, #2563EB, #4F46E5);
  --gradient-accent:  linear-gradient(to right, #06B6D4, #2563EB);
  --gradient-hero:    linear-gradient(to bottom, #F8FAFC, rgba(239,246,255,0.5), #FFFFFF);
  --gradient-dark:    linear-gradient(135deg, #1E1B4B, #1E3A8A);
  --gradient-tinted:  linear-gradient(135deg, #EFF6FF, #EEF2FF);
  --gradient-eyebrow-r: linear-gradient(to right, transparent, #3B82F6);
  --gradient-eyebrow-l: linear-gradient(to left, transparent, #3B82F6);
  --gradient-fade-bottom: linear-gradient(to top, #FFFFFF, rgba(255,255,255,0.8), transparent);

  /* ── BRAND COLOUR TOKENS ─────────────────────────────────── */
  /* Primary interactive */
  --brand-50:         #EFF6FF;   /* tinted section bg */
  --brand-100:        #DBEAFE;   /* blob-blue */
  --brand-200:        #BFDBFE;   /* light border */
  --brand-500:        #3B82F6;   /* eyebrow line, chip dot */
  --brand-600:        #2563EB;   /* primary links, gradient start */
  --brand-700:        #1D4ED8;   /* display gradient start */
  /* Indigo */
  --indigo-50:        #EEF2FF;
  --indigo-100:       #E0E7FF;   /* blob-indigo approx */
  --indigo-200:       #C7D2FE;   /* badge border, focus ring */
  --indigo-600:       #4F46E5;   /* gradient end, solid accent */
  --indigo-700:       #4338CA;   /* indigo hover */
  /* Violet */
  --violet-50:        #F5F3FF;
  --violet-100:       #EDE9FE;   /* blob-violet */
  --violet-600:       #7C3AED;   /* display gradient end */
  /* Dark backgrounds */
  --brand-900:        #1E1B4B;   /* dark section bg start */
  --brand-dark:       #1E3A8A;   /* dark section bg end */

  /* ── TEXT TOKENS ─────────────────────────────────────────── */
  --text-primary:     #0F172A;   /* slate-900 — h2, h1 */
  --text-secondary:   #334155;   /* slate-700 — h1-sub, dark sublines */
  --text-heading:     #1E293B;   /* slate-800 — h3, h4 */
  --text-body:        #475569;   /* slate-600 — body copy */
  --text-subtitle:    #64748B;   /* slate-500 — hero sublines, secondary content */
  --text-muted:       #94A3B8;   /* slate-400 — chips, eyebrow, captions */
  --text-accent:      #2563EB;   /* brand-600 — links, eyebrow text */
  --text-inverse:     #FFFFFF;   /* on dark backgrounds */
  --text-indigo:      #4F46E5;   /* indigo-600 — section accents */

  /* ── BACKGROUND TOKENS ───────────────────────────────────── */
  --bg-surface:       #FFFFFF;   /* primary section bg */
  --bg-surface-alt:   #F8FAFC;   /* slate-50 — alternating sections */
  --bg-tinted:        #EFF6FF;   /* blue-50 — tinted areas */
  --bg-tinted-indigo: #EEF2FF;   /* indigo-50 — indigo tinted areas */
  --bg-dark-start:    #1E1B4B;   /* dark section bg (indigo-950) */
  --bg-dark-end:      #1E3A8A;   /* dark section bg (blue-900) */

  /* ── BORDER TOKENS ───────────────────────────────────────── */
  --border-default:   #E2E8F0;   /* slate-200 — default card border */
  --border-muted:     #F1F5F9;   /* slate-100 — subtle dividers */
  --border-accent:    #C7D2FE;   /* indigo-200 — hover/focus borders */
  --border-focus:     #4F46E5;   /* indigo-600 — focus ring */

  /* ── SEMANTIC TOKENS ─────────────────────────────────────── */
  --success:          #059669;   /* emerald-600 */
  --success-light:    #D1FAE5;   /* emerald-100 */
  --success-dark:     #065F46;   /* emerald-900 */
  --danger:           #E11D48;   /* rose-600 */
  --danger-light:     #FFE4E6;   /* rose-100 */
  --danger-dark:      #9F1239;   /* rose-900 */
  --warning:          #D97706;   /* amber-600 */
  --warning-light:    #FEF3C7;   /* amber-100 */
  --warning-dark:     #92400E;   /* amber-900 */
  --metric:           #7C3AED;   /* violet-600 — LTV, retention */
  --metric-light:     #EDE9FE;   /* violet-100 */
  --metric-dark:      #4C1D95;   /* violet-900 */

  /* ── SHADOW TOKENS ───────────────────────────────────────── */
  /* All shadows use indigo-600 tint (#4F46E5), never grey.    */
  --shadow-card:    0 1px 3px 0 rgba(15,23,42,0.06), 0 1px 2px -1px rgba(15,23,42,0.04);
  --shadow-card-md: 0 4px 20px -4px rgba(79,70,229,0.12);
  --shadow-card-lg: 0 8px 32px -8px rgba(79,70,229,0.20);
  --shadow-btn:     0 4px 14px -2px rgba(79,70,229,0.35);
  --shadow-float:   0 8px 32px -4px rgba(79,70,229,0.18), 0 2px 8px -2px rgba(15,23,42,0.08);
  --shadow-glow:    0 0 40px -8px rgba(79,70,229,0.40);

  /* ── SPACING TOKENS ──────────────────────────────────────── */
  --section-xs:     32px;    /* tight sections */
  --section-sm:     48px;    /* mobile section padding */
  --section:        80px;    /* desktop standard */
  --section-lg:     112px;   /* hero, CTA */

  /* ── BORDER RADIUS TOKENS ────────────────────────────────── */
  --radius-sm:      4px;
  --radius-md:      8px;
  --radius-lg:      12px;
  --radius-xl:      16px;    /* ← primary: buttons, cards */
  --radius-2xl:     20px;    /* large cards */
  --radius-3xl:     24px;    /* hero cards */
  --radius-full:    9999px;  /* pills, badges */

  /* ── BLOB ATMOSPHERE ─────────────────────────────────────── */
  /* Exact values from the hero section                        */
  --blob-blue:      rgba(219, 234, 254, 0.30);   /* blue-100/30 */
  --blob-indigo:    rgba(224, 231, 255, 0.20);   /* indigo-100/20 */
  --blob-violet:    rgba(237, 233, 254, 0.25);   /* violet-100/25 */
}


/* ═══════════════════════════════════════════════════════════════
   BASE LAYER — global resets and base element styles
   ═══════════════════════════════════════════════════════════════ */
@layer base {
  html {
    font-family: 'Poppins', 'Poppins Fallback', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  body {
    color: var(--text-body);
    background-color: var(--bg-surface);
    font-size: 15px;
    line-height: 1.6;
  }

  /* Headings — semantic defaults, override only size/colour */
  h1 {
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.025em;
    line-height: 1.15;
  }
  h2 {
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    line-height: 1.25;
  }
  h3 {
    font-weight: 600;
    color: var(--text-heading);
    line-height: 1.35;
  }
  h4 {
    font-weight: 600;
    color: var(--text-heading);
    line-height: 1.4;
  }
  p {
    color: var(--text-body);
    line-height: 1.7;
  }
  a:where(:not([class*="text-"])) {
    color: var(--text-accent);
    text-decoration: none;
    transition: color 200ms ease;
  }
  a:where(:not([class*="text-"])):hover {
    color: var(--gradient-blue-dk, #1D4ED8);
  }

  /* Focus rings — indigo-tinted, not the default blue */
  *:focus-visible {
    outline: 2px solid var(--indigo-600);
    outline-offset: 2px;
    border-radius: var(--radius-md);
  }

  /* Selection colour — brand-tinted */
  ::selection {
    background-color: var(--indigo-100);
    color: var(--indigo-600);
  }
}


/* ═══════════════════════════════════════════════════════════════
   COMPONENT LAYER — reusable patterns
   ═══════════════════════════════════════════════════════════════ */
@layer components {

  /* ── PAGE LAYOUT ─────────────────────────────────────────── */
  .container-page {
    @apply max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8;
  }

  /* ── SECTION PADDING ─────────────────────────────────────── */
  /* Always use these. Never write arbitrary py-[Npx] values.  */
  .section-py    { @apply py-12 md:py-20; }
  .section-py-sm { @apply py-8 md:py-12; }
  .section-py-lg { @apply py-20 md:py-28; }

  /* ── SECTION BACKGROUNDS ─────────────────────────────────── */
  /* Alternation pattern: hero → surface → surface-alt → surface → surface-alt → dark */
  .bg-section-hero      { background: var(--gradient-hero); }
  .bg-section-surface   { @apply bg-white; }
  .bg-section-alt       { @apply bg-slate-50; }
  .bg-section-dark      { background: var(--gradient-dark); }

  /* ── BLOB ATMOSPHERE LAYER ───────────────────────────────── */
  /* Use inside sections that need depth. Hero uses all 3.     */
  /* Other key sections use 1–2 blobs maximum.                 */
  .blob-layer {
    @apply absolute inset-0 w-full h-full pointer-events-none overflow-hidden;
  }
  .blob-blue {
    @apply absolute rounded-full;
    background: var(--blob-blue);
    filter: blur(60px);
  }
  .blob-indigo {
    @apply absolute rounded-full;
    background: var(--blob-indigo);
    filter: blur(60px);
  }
  .blob-violet {
    @apply absolute rounded-full;
    background: var(--blob-violet);
    filter: blur(50px);
  }

  /* ── EYEBROW PATTERN ─────────────────────────────────────── */
  /* Flanking gradient lines + tracking label.                 */
  /* Use on EVERY section that has an eyebrow label.           */
  .eyebrow-wrap {
    @apply flex items-center justify-center gap-3 mb-6;
  }
  .eyebrow-line-r {
    @apply h-[2px] w-12 sm:w-20 rounded-full opacity-70;
    background: var(--gradient-eyebrow-r);
  }
  .eyebrow-line-l {
    @apply h-[2px] w-12 sm:w-20 rounded-full opacity-70;
    background: var(--gradient-eyebrow-l);
  }
  .eyebrow-text {
    @apply text-xs font-semibold uppercase tracking-[0.15em];
    color: var(--brand-600);
  }

  /* ── DISPLAY HEADLINE (gradient clip) ───────────────────── */
  /* RULES:                                                    */
  /* 1. One per page — the main hero headline only             */
  /* 2. Always add style={{ color: '#4F46E5' }} as fallback    */
  /* 3. font-black (900) on this element ONLY                  */
  .display-headline {
    @apply font-black leading-[1.1] tracking-tighter;
    background: var(--gradient-display);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* Fallback must be added inline: style={{ color: '#4F46E5' }} */
  }

  /* ── SECTION HEADING ACCENT ──────────────────────────────── */
  /* For emphasising a word inside an h2 (e.g. "30–40%")      */
  .heading-accent {
    color: var(--indigo-600);
  }

  /* ── TYPOGRAPHY UTILITIES ────────────────────────────────── */
  .text-display  { @apply text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl; }
  .text-section  { @apply text-h2 font-bold text-slate-900 tracking-tight; }
  
  /* ── HERO SUBTITLE ────────────────────────────────────────── */
  /* Replaces ad-hoc text-slate-500/600 with the Gold Standard.  */
  .hero-subtitle {
    color: var(--text-subtitle) !important;
    @apply text-xl font-medium leading-[1.6];
  }

  /* ── BUTTONS ─────────────────────────────────────────────── */
  /* Base — shared across all button variants */
  .btn {
    @apply inline-flex items-center justify-center gap-2 font-semibold
           rounded-xl transition-all duration-200
           focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-indigo-500 focus-visible:ring-offset-2
           active:scale-[.98] select-none;
  }
  .btn-lg  { @apply btn px-8 py-3.5 text-[15px]; }
  .btn-md  { @apply btn px-6 py-2.5 text-sm; }
  .btn-sm  { @apply btn px-4 py-2 text-xs; }

  /* Primary — gradient on white/light sections */
  .btn-primary {
    @apply btn-lg text-white;
    background-image: var(--gradient-action);
    box-shadow: var(--shadow-btn);
  }
  .btn-primary:hover { opacity: 0.92; }

  /* Secondary — white with border */
  .btn-secondary {
    @apply btn-lg bg-white font-semibold;
    color: var(--text-secondary);
    border: 1px solid var(--border-default);
  }
  .btn-secondary:hover {
    border-color: var(--border-accent);
    color: var(--indigo-600);
  }

  /* Ghost — transparent with indigo border */
  .btn-ghost {
    @apply btn-md;
    color: var(--indigo-600);
    border: 1.5px solid var(--indigo-200);
    background: transparent;
  }
  .btn-ghost:hover {
    background: var(--indigo-50);
  }

  /* Dark section CTA — cyan→blue gradient */
  .btn-dark-cta {
    @apply btn-lg text-white font-bold;
    background-image: var(--gradient-accent);
    box-shadow: var(--shadow-glow);
  }
  .btn-dark-cta:hover { opacity: 0.92; }

  /* Nav CTA — smaller, same gradient */
  .btn-nav {
    @apply btn px-5 py-2 text-sm text-white;
    background-image: var(--gradient-action);
  }

  /* ── CARDS ───────────────────────────────────────────────── */
  /* Standard — white, subtle border */
  .card {
    @apply bg-white rounded-2xl p-6;
    border: 1px solid var(--border-default);
    box-shadow: var(--shadow-card);
    transition: box-shadow 200ms ease, border-color 200ms ease;
  }
  .card:hover {
    box-shadow: var(--shadow-card-md);
    border-color: var(--indigo-200);
  }

  /* Tinted — brand gradient bg, indigo border */
  .card-tinted {
    @apply rounded-2xl p-6;
    background-image: var(--gradient-tinted);
    border: 1px solid var(--indigo-200);
  }

  /* Glassmorphic — frosted glass over blob bg */
  .card-glass {
    @apply rounded-2xl p-6;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(79,70,229,0.12);
    box-shadow: var(--shadow-card);
  }

  /* Dark — for content inside the dark CTA section */
  .card-dark {
    @apply rounded-2xl p-6;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    border: 1px solid rgba(255,255,255,0.12);
  }

  /* ── BADGES ──────────────────────────────────────────────── */
  .badge {
    @apply inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold;
  }
  /* Blue family — feature claims */
  .badge-brand  { background: var(--brand-50);   color: var(--brand-600);   border: 1px solid var(--brand-200); }
  .badge-indigo { background: var(--indigo-50);  color: var(--indigo-600);  border: 1px solid var(--indigo-200); }
  /* AI/tech */
  .badge-violet { background: var(--violet-50);  color: var(--violet-600);  border: 1px solid rgba(124,58,237,0.2); }
  /* Semantic */
  .badge-success { background: var(--success-light); color: var(--success-dark); border: 1px solid rgba(5,150,105,0.2); }
  .badge-danger  { background: var(--danger-light);  color: var(--danger-dark);  border: 1px solid rgba(225,29,72,0.2); }
  .badge-metric  { background: var(--metric-light);  color: var(--metric-dark);  border: 1px solid rgba(124,58,237,0.2); }
  /* Neutral */
  .badge-slate  { @apply bg-slate-100 text-slate-600 border border-slate-200; }

  /* ── TRUST CHIPS (hero / section bottom row) ─────────────── */
  .trust-chip {
    @apply flex items-center gap-2;
  }
  .trust-chip-dot {
    @apply w-[5px] h-[5px] rounded-full flex-shrink-0;
    background: var(--gradient-action);
  }
  .trust-chip-text {
    @apply text-xs font-semibold text-slate-400 tracking-[0.1em] uppercase;
  }

  /* ── STAT NUMBERS (metric display) ──────────────────────── */
  .stat-number {
    @apply font-black leading-none tracking-tight;
    color: var(--indigo-600);
  }
  .stat-label {
    @apply text-xs text-slate-400 mt-1;
  }

  /* ── NAVIGATION ──────────────────────────────────────────── */
  .nav-link {
    @apply text-[15px] font-medium text-slate-700 px-2 py-1 rounded-md
           transition-colors duration-150;
  }
  .nav-link:hover { color: var(--indigo-600); }
  .nav-link.active { color: var(--brand-600); }

  /* ── SECTION DIVIDER ─────────────────────────────────────── */
  .section-divider {
    @apply w-full;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--border-default), transparent);
  }
}


/* ═══════════════════════════════════════════════════════════════
   UTILITY LAYER — one-off helpers
   ═══════════════════════════════════════════════════════════════ */
@layer utilities {

  /* Gradient text — use on display headline only */
  .text-gradient {
    background: var(--gradient-display);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Indigo-tinted shadow utilities */
  .shadow-card-brand { box-shadow: var(--shadow-card-md); }
  .shadow-btn-brand  { box-shadow: var(--shadow-btn); }
  .shadow-float-brand { box-shadow: var(--shadow-float); }

  /* Gradient backgrounds as utilities */
  .bg-gradient-action  { background-image: var(--gradient-action); }
  .bg-gradient-display { background-image: var(--gradient-display); }
  .bg-gradient-dark    { background-image: var(--gradient-dark); }
  .bg-gradient-tinted  { background-image: var(--gradient-tinted); }
  .bg-gradient-hero    { background-image: var(--gradient-hero); }

  /* Prevent text selection on interactive UI elements */
  .no-select { user-select: none; -webkit-user-select: none; }

  /* Balanced text wrapping for headings */
  .text-balance { text-wrap: balance; }
}


/* ═══════════════════════════════════════════════════════════════
   ANIMATION KEYFRAMES
   Defined here because they need to be globally available
   and referenced by Tailwind's animation utilities.
   ═══════════════════════════════════════════════════════════════ */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(20px, -15px) scale(1.05); }
  66%       { transform: translate(-10px, 10px) scale(0.97); }
}
@keyframes float-medium {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40%       { transform: translate(-18px, 12px) scale(1.04); }
  70%       { transform: translate(12px, -8px) scale(0.98); }
}
@keyframes float-slower {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25%       { transform: translate(14px, 18px) scale(0.96); }
  75%       { transform: translate(-20px, -12px) scale(1.03); }
}
@keyframes fade-in-up {
  0%   { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .blob-blue,
  .blob-indigo,
  .blob-violet,
  .animate-float-slow,
  .animate-float-medium,
  .animate-float-slower {
    animation: none !important;
  }
}


/* ═══════════════════════════════════════════════════════════════
   LAYOUT.TSX SETUP — add this to your root layout file
   ═══════════════════════════════════════════════════════════════

   import { Poppins } from 'next/font/google';

   const poppins = Poppins({
     weight: ['400', '600', '700', '900'],
     subsets: ['latin'],
     variable: '--font-poppins',
     display: 'swap',
   });

   export default function RootLayout({ children }) {
     return (
       <html lang="en" className={poppins.variable}>
         <body className={poppins.className}>
           {children}
         </body>
       </html>
     );
   }

   NOTE: weight '900' is loaded for the ONE display headline.
   All other elements use 400, 600, or 700 only.
   ═══════════════════════════════════════════════════════════════ */

```

## tailwind.config.ts

```typescript
/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           MEDIKLOUD DESIGN SYSTEM — TAILWIND CONFIG          ║
 * ║                                                              ║
 * ║  Built from live audit of /v2 hero section                   ║
 * ║  Every token extracted from computed styles — not guessed    ║
 * ║                                                              ║
 * ║  Core direction: Blue-700 → Indigo-600 → Violet-600          ║
 * ║  The gradient is the brand. The rest defers to it.           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],

  theme: {
    extend: {

      // ─────────────────────────────────────────────────────────
      // FONT FAMILY
      // Single family. font-sans = Poppins everywhere, always.
      // Remove any other font imports from layout.tsx.
      // ─────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Poppins', 'Poppins Fallback', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      // ─────────────────────────────────────────────────────────
      // FONT SIZE — 8 steps, all named semantically
      //
      // display  → the ONE gradient headline. Hero only.
      // h1       → page-level headings (section titles that lead a page)
      // h2       → section headings ("Your hospital is losing...")
      // h3       → card and component headings
      // h4       → sub-labels, Apollo comparison titles
      // body-lg  → hero subtext, lead paragraphs
      // body     → standard body copy
      // sm       → supporting text, meta, footer links
      // xs       → eyebrow labels, trust chips, captions
      // ─────────────────────────────────────────────────────────
      fontSize: {
        'xs':      ['11px', { lineHeight: '16px',  letterSpacing: '0.01em' }],
        'sm':      ['12px', { lineHeight: '18px',  letterSpacing: '0' }],
        'base':    ['15px', { lineHeight: '24px',  letterSpacing: '0' }],
        'body-lg': ['17px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h4':      ['16px', { lineHeight: '24px',  letterSpacing: '0' }],
        'h3':      ['19px', { lineHeight: '28px',  letterSpacing: '-0.01em' }],
        'h2':      ['28px', { lineHeight: '36px',  letterSpacing: '-0.02em' }],
        'h1':      ['40px', { lineHeight: '48px',  letterSpacing: '-0.025em' }],
        'display': ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
        // Responsive display (fluid, set via responsive modifiers on className)
        'display-sm':  ['32px', { lineHeight: '36px',  letterSpacing: '-0.025em' }],
        'display-md':  ['44px', { lineHeight: '50px',  letterSpacing: '-0.028em' }],
        'display-lg':  ['52px', { lineHeight: '58px',  letterSpacing: '-0.03em' }],
        'display-xl':  ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
      },

      // ─────────────────────────────────────────────────────────
      // FONT WEIGHT — 3 values only
      //
      // 900 (font-black)   → display headline ONLY. One use, site-wide.
      // 700 (font-bold)    → h1, h2 section headings
      // 600 (font-semibold)→ h3, h4, eyebrow labels, button text
      // 400 (font-normal)  → body, captions, nav links, chips
      //
      // !! DO NOT add font-black to any new component !!
      // ─────────────────────────────────────────────────────────
      // (Tailwind already has these — listed here for documentation)

      // ─────────────────────────────────────────────────────────
      // COLORS
      // ─────────────────────────────────────────────────────────
      colors: {

        // ── BRAND RAMP ───────────────────────────────────────
        // Extracted from hero: blue-700→indigo-600→violet-600 gradient
        // This IS the brand. Every interactive and expressive element
        // draws from this ramp.
        brand: {
          // Tints — backgrounds, badge fills, card surfaces
          50:  '#EFF6FF',  // section tint bg (blue-50)
          100: '#DBEAFE',  // blob-blue colour (blue-100)
          // Indigo tints
          'indigo-50':  '#EEF2FF',  // indigo tinted bg
          'indigo-100': '#E0E7FF',  // indigo badge fill, card tint
          'indigo-200': '#C7D2FE',  // indigo border, input focus ring
          // Violet tints
          'violet-50':  '#F5F3FF',  // violet tinted bg
          'violet-100': '#EDE9FE',  // blob-violet colour (violet-100)

          // Active colours — the gradient ramp itself
          // Blue stops
          400: '#60A5FA',  // light accent, disabled state
          500: '#3B82F6',  // eyebrow line endpoint, chip dot
          600: '#2563EB',  // gradient START (CTA buttons, links)
          700: '#1D4ED8',  // display gradient START (headline only)
          // Indigo stop — GRADIENT MID/END
          'indigo-600': '#4F46E5',  // gradient END (buttons), solid accent
          'indigo-700': '#4338CA',  // indigo hover state
          // Violet stop — DISPLAY GRADIENT END
          'violet-600': '#7C3AED',  // display gradient END (headline only)
          'violet-700': '#6D28D9',  // violet deep

          // Dark — near-black with indigo undertone
          // Used for dark section backgrounds (CTA panel)
          900: '#1E1B4B',  // indigo-950 — dark section bg START
          'dark': '#1E3A8A', // blue-900 — dark section bg END
        },

        // ── NEUTRALS — Slate ONLY ────────────────────────────
        // RULE: Never use gray-*, zinc-*, neutral-* anywhere.
        // Slate has a cool blue undertone that harmonises with
        // the brand gradient. Gray does not.
        slate: {
          50:  '#F8FAFC',  // surface-alt (alternating section bg)
          100: '#F1F5F9',  // subtle dividers
          200: '#E2E8F0',  // default card border
          300: '#CBD5E1',  // secondary button border, disabled
          400: '#94A3B8',  // muted text (chips, captions, eyebrow)
          500: '#64748B',  // secondary body text
          600: '#475569',  // primary body text (--text-body)
          700: '#334155',  // h1-sub, dark secondary text
          800: '#1E293B',  // h3, h4 headings
          900: '#0F172A',  // h2, h1 — primary heading colour
        },

        // ── SEMANTIC ─────────────────────────────────────────
        // These encode meaning. Use them ONLY for that meaning.
        // Never use emerald decoratively. Never use red for branding.
        success: {
          DEFAULT: '#059669',  // emerald-600 — savings, live, positive
          light:   '#D1FAE5',  // emerald-100
          dark:    '#065F46',  // emerald-900
          text:    '#065F46',
        },
        danger: {
          DEFAULT: '#E11D48',  // rose-600 — revenue loss, leakage
          light:   '#FFE4E6',  // rose-100
          dark:    '#9F1239',  // rose-900
          text:    '#9F1239',
        },
        warning: {
          DEFAULT: '#D97706',  // amber-600 — risk, caution
          light:   '#FEF3C7',  // amber-100
          dark:    '#92400E',  // amber-900
          text:    '#92400E',
        },
        metric: {
          DEFAULT: '#7C3AED',  // violet-600 — LTV, retention, AI metrics
          light:   '#EDE9FE',  // violet-100
          dark:    '#4C1D95',  // violet-900
          text:    '#4C1D95',
        },
      },

      // ─────────────────────────────────────────────────────────
      // BORDER RADIUS
      // All interactive components use rounded-2xl (16px).
      // Cards use rounded-2xl or rounded-3xl.
      // Pills use rounded-full.
      // ─────────────────────────────────────────────────────────
      borderRadius: {
        'sm':   '4px',     // chips, tags, tiny elements
        'md':   '8px',     // inputs, small inline components
        'lg':   '12px',    // nav CTA, inner components
        'xl':   '16px',    // buttons, standard cards ← PRIMARY
        '2xl':  '20px',    // large cards, setup cards
        '3xl':  '24px',    // hero cards, featured panels
        'full': '9999px',  // badges, trust chips, avatar circles
      },

      borderWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '1.5': '1.5px', // Premium standard
      },

      // ─────────────────────────────────────────────────────────
      // BOX SHADOW
      // All shadows tinted with indigo-600 (#4F46E5) — not grey.
      // This is the detail that makes shadows feel branded.
      // ─────────────────────────────────────────────────────────
      boxShadow: {
        // Resting state — barely visible, always on
        'card':    '0 1px 3px 0 rgba(15,23,42,0.06), 0 1px 2px -1px rgba(15,23,42,0.04)',
        // Hover / elevated
        'card-md': '0 4px 20px -4px rgba(79,70,229,0.12)',
        // Featured / selected card
        'card-lg': '0 8px 32px -8px rgba(79,70,229,0.20)',
        // Primary CTA button
        'btn':     '0 4px 14px -2px rgba(79,70,229,0.35)',
        // Floating UI (modals, dropdowns)
        'float':   '0 8px 32px -4px rgba(79,70,229,0.18), 0 2px 8px -2px rgba(15,23,42,0.08)',
        // Blue-tinted (for cards on dark bg)
        'glow':    '0 0 40px -8px rgba(79,70,229,0.40)',
        'none':    'none',
      },

      // ─────────────────────────────────────────────────────────
      // SPACING — named scale
      // Sections use section-sm (mobile) / section (desktop)
      // ─────────────────────────────────────────────────────────
      spacing: {
        '0':   '0px',
        '1':   '4px',
        '2':   '8px',
        '3':   '12px',
        '4':   '16px',
        '5':   '20px',
        '6':   '24px',
        '7':   '28px',
        '8':   '32px',
        '9':   '36px',
        '10':  '40px',
        '11':  '44px',
        '12':  '48px',
        '14':  '56px',
        '16':  '64px',
        '18':  '72px',
        '20':  '80px',
        '24':  '96px',
        '28':  '112px',
        '32':  '128px',
        '36':  '144px',
        '40':  '160px',
        // Section padding tokens
        'section-xs':  '32px',   // tight sections (marquee, badges)
        'section-sm':  '48px',   // mobile section padding
        'section':     '80px',   // desktop standard
        'section-lg':  '112px',  // hero, CTA
      },

      // ─────────────────────────────────────────────────────────
      // MAX WIDTH
      // ─────────────────────────────────────────────────────────
      maxWidth: {
        'container': '1280px',  // outer page wrapper
        'content':   '768px',   // prose / text blocks
        'narrow':    '560px',   // hero subtext, focused content
      },

      // ─────────────────────────────────────────────────────────
      // BACKGROUND IMAGE — gradient utilities
      // Named so agents and developers use the right gradient
      // without guessing stop values.
      // ─────────────────────────────────────────────────────────
      backgroundImage: {
        // ── Brand gradients ──────────────────────────────────
        // Display gradient: text-clip use ONLY. One headline per page.
        'gradient-display':
          'linear-gradient(to right, #1D4ED8, #4F46E5, #7C3AED)',

        // Action gradient: CTA buttons on light/white backgrounds
        'gradient-action':
          'linear-gradient(to right, #2563EB, #4F46E5)',

        // Accent gradient: buttons inside the dark CTA section only
        'gradient-accent':
          'linear-gradient(to right, #06B6D4, #2563EB)',

        // ── Section backgrounds ──────────────────────────────
        // Hero section background (behind the blobs)
        'gradient-hero':
          'linear-gradient(to bottom, #F8FAFC, rgba(239,246,255,0.5), #FFFFFF)',

        // Dark CTA section background
        'gradient-dark':
          'linear-gradient(135deg, #1E1B4B, #1E3A8A)',

        // Tinted card background (MediKloud advantage cards)
        'gradient-tinted':
          'linear-gradient(135deg, #EFF6FF, #EEF2FF)',

        // ── Eyebrow line gradients ───────────────────────────
        // from-transparent to-blue-500 (flanking the eyebrow text)
        'gradient-eyebrow-r':
          'linear-gradient(to right, transparent, #3B82F6)',
        'gradient-eyebrow-l':
          'linear-gradient(to left, transparent, #3B82F6)',

        // ── Fade overlays ────────────────────────────────────
        // Bottom fade on hero (masks blob overflow)
        'fade-bottom':
          'linear-gradient(to top, #FFFFFF, rgba(255,255,255,0.8), transparent)',
      },

      // ─────────────────────────────────────────────────────────
      // KEYFRAME ANIMATIONS
      // The three blob float animations from the hero.
      // Always stagger timing so blobs never sync.
      // ─────────────────────────────────────────────────────────
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(20px, -15px) scale(1.05)' },
          '66%':      { transform: 'translate(-10px, 10px) scale(0.97)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%':      { transform: 'translate(-18px, 12px) scale(1.04)' },
          '70%':      { transform: 'translate(12px, -8px) scale(0.98)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%':      { transform: 'translate(14px, 18px) scale(0.96)' },
          '75%':      { transform: 'translate(-20px, -12px) scale(1.03)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'float-slow':     'float-slow 8s ease-in-out infinite',
        'float-medium':   'float-medium 6s ease-in-out infinite',
        'float-slower':   'float-slower 10s ease-in-out infinite',
        'fade-in-up':     'fade-in-up 0.5s ease-out forwards',
        'fade-in':        'fade-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'marquee':        'marquee 30s linear infinite',
        'marquee-slow':   'marquee 50s linear infinite',
      },

      // ─────────────────────────────────────────────────────────
      // TRANSITION
      // ─────────────────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },

  plugins: [],
};

export default config;


// ═══════════════════════════════════════════════════════════════
// USAGE REFERENCE — Copy-paste ready patterns
// ═══════════════════════════════════════════════════════════════
//
// ── DISPLAY HEADLINE (hero only, one per page) ──────────────
//   <span
//     className="text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl
//                font-black leading-[1.1] tracking-tighter
//                bg-gradient-display bg-clip-text text-transparent"
//     style={{ color: '#4F46E5' }}  {/* ← fallback — REQUIRED */}
//   >
//     Building Inhouse Pharmacies
//   </span>
//
// ── EYEBROW PATTERN ─────────────────────────────────────────
//   <div className="flex items-center justify-center gap-3 mb-6">
//     <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-r rounded-full opacity-70" />
//     <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
//       India's First · Zero Capex · Fully Managed
//     </span>
//     <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-l rounded-full opacity-70" />
//   </div>
//
// ── PRIMARY CTA BUTTON ───────────────────────────────────────
//   <a className="inline-flex items-center gap-2 px-8 py-3.5
//                 bg-gradient-action text-white font-semibold
//                 rounded-xl shadow-btn
//                 hover:opacity-90 active:scale-[.98] transition-all duration-200">
//     Book a Demo →
//   </a>
//
// ── SECONDARY BUTTON ─────────────────────────────────────────
//   <a className="inline-flex items-center gap-2 px-8 py-3.5
//                 bg-white text-slate-600 font-semibold
//                 rounded-xl border border-slate-300
//                 hover:border-brand-indigo-200 hover:text-brand-indigo-600
//                 transition-all duration-200">
//     See How It Works
//   </a>
//
// ── DARK SECTION CTA BUTTON ──────────────────────────────────
//   <a className="inline-flex items-center gap-2 px-8 py-4
//                 bg-gradient-accent text-white font-bold
//                 rounded-xl shadow-glow
//                 hover:opacity-90 active:scale-[.98] transition-all duration-200">
//     Book Free Demo →
//   </a>
//
// ── SECTION WRAPPER ──────────────────────────────────────────
//   <section className="bg-white py-section-sm md:py-section">
//     <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
//       ...
//     </div>
//   </section>
//
// ── HERO BLOB LAYER ──────────────────────────────────────────
//   {/* Inside the section, z-index 0, pointer-events-none */}
//   <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
//     <div className="absolute top-[10%] left-[15%] w-72 h-72
//                     bg-blue-100/30 rounded-full blur-[80px]
//                     animate-float-slow" />
//     <div className="absolute bottom-[20%] right-[10%] w-80 h-80
//                     bg-brand-indigo-100/20 rounded-full blur-[90px]
//                     animate-float-slower" />
//     <div className="absolute top-[45%] right-[30%] w-48 h-48
//                     bg-brand-violet-100/25 rounded-full blur-[60px]
//                     animate-float-medium" />
//   </div>
//
// ── TRUST CHIP ───────────────────────────────────────────────
//   <div className="flex items-center gap-2">
//     <span className="w-1 h-1 rounded-full bg-gradient-action" />
//     <span className="text-xs font-semibold text-slate-400
//                      tracking-[0.1em] uppercase">
//       Zero Capex
//     </span>
//   </div>
//
// ── STANDARD CARD ────────────────────────────────────────────
//   <div className="bg-white border border-slate-200 rounded-2xl
//                   p-6 shadow-card hover:shadow-card-md
//                   transition-shadow duration-200">
//     ...
//   </div>
//
// ── TINTED CARD (MediKloud advantage) ────────────────────────
//   <div className="bg-gradient-tinted border border-brand-indigo-200
//                   rounded-2xl p-6">
//     ...
//   </div>
//
// ── BADGE ────────────────────────────────────────────────────
//   <span className="inline-flex items-center gap-1 px-3 py-0.5
//                    rounded-full text-xs font-semibold
//                    bg-brand-indigo-100 text-brand-indigo-600
//                    border border-brand-indigo-200">
//     Zero Capex
//   </span>
//
// ── SECTION HEADING WITH ACCENT ──────────────────────────────
//   <h2 className="text-h2 font-bold text-slate-900 tracking-tight">
//     Your hospital is losing{' '}
//     <span className="text-brand-indigo-600">30–40%</span>
//     {' '}of pharmacy revenue
//   </h2>
//
// ─────────────────────────────────────────────────────────────
// NEVER DO — quick anti-pattern reference
// ─────────────────────────────────────────────────────────────
//  ✗  font-black on anything except the hero display span
//  ✗  text-gray-*, bg-gray-* — always use slate-*
//  ✗  bg-[#fafafa], bg-[#FAFAFC] — always bg-slate-50
//  ✗  text-transparent without style={{ color: '#4F46E5' }} fallback
//  ✗  New gradient directions (no rose, amber, green gradients)
//  ✗  font-sans on individual sections (it's set globally)
//  ✗  shadow-blue-200, shadow-slate-* — always indigo-tinted shadows
//  ✗  More than 2 blob layers outside the hero section
//  ✗  The eyebrow pattern without both flanking lines
//  ✗  A gradient-action button inside the dark section (use gradient-accent)

```

## components/pages/home/MainHero.tsx

```tsx
"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronRight } from 'lucide-react'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'

import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

export function MainHero() {
  const { openModal } = useContactModal()
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[90px] pb-4 md:pt-[110px] md:pb-8">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Medical Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient glow orbs — simplified for performance */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-[1000px] mx-auto">

          {/* Eyebrow — above the h1, not inside it */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="eyebrow-wrap justify-center"
          >
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">India's First · AI-Driven · Fully Managed</span>
            <span className="eyebrow-line-r" />
          </motion.div>

          {/* ── H1 ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 md:mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl"
          >
            <span
              className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.2] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
              style={{ color: '#4F46E5' }}
            >
              Building In-House Pharmacies
            </span>
            <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700">
              for Independent Hospitals & Clinics
            </span>
          </motion.h1>

          {/* ── SUBTITLE ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hero-subtitle max-w-[800px] mx-auto mb-8 md:mb-10"
          >
            Complete <strong className="text-slate-600 font-medium">hospital pharmacy management</strong> — from digital tools and end-to-end operations to tech-led inventory control, trained staff, and doorstep delivery.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-10 md:mb-12"
          >
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px]"
            >
              Book A Free Demo
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Proof Signal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-3 mb-12"
          >

            <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4">
              {HERO_TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-blue-500" />
                    <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* SEO hidden content */}
          <p className="sr-only">
            MediKloud is India&apos;s first tech-driven hospital pharmacy management company offering fully managed 
            hospital pharmacy operations, hospital pharmacy management, and zero capex pharmacy setup for 
            independent hospitals and clinics. Our AI-powered platform covers pharmacy inventory management, 
            procurement automation, pharmacy billing and revenue leakage control, medicine home delivery, 
            and automated prescription refills. Free hospital management software (HMS) included with 
            AI scribe, EHR, and clinical billing tools. Serving hospitals and clinics across India 
            with virtual pharmacy fulfillment, pharmacy staffing, and complete pharmacy operations management.
          </p>
        </div>
      </div>
    </section>
  )
}

```

## components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyHero.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, MousePointer2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface ClinicWithPharmacyHeroProps {
  onBookDemo?: () => void;
  onTalkToExpert?: () => void;
}

export const ClinicWithPharmacyHero = ({ onBookDemo, onTalkToExpert }: ClinicWithPharmacyHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">
      {/* Dynamic Background Blobs */}
      <div className="blob-layer pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px] animate-float-slow opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[100px] animate-pulse opacity-50"></div>
      </div>

      <div className="container-page relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainerLocal}
          className="max-w-6xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap justify-start mb-8">
            <span className="eyebrow-line-l bg-blue-600/30" />
            <span className="eyebrow-text text-blue-600">Built for high-volume clinics</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-24 items-start">
            <div className="space-y-10">
              <motion.h1 
                variants={fadeInUp}
                className="text-display-xl font-black text-slate-900 leading-[1.05] tracking-tight"
              >
                You already have a pharmacy.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600">
                  Why are patients buying outside?
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-body-lg text-slate-600 max-w-2xl font-medium leading-relaxed"
              >
                Every consultation ends with a prescription. But your revenue, your patient, and your clinical control leave the moment they walk out the door.
              </motion.p>

              <motion.div variants={fadeInUp} className="space-y-5">
                <p className="font-bold text-slate-900 text-lg">MediKloud stops the leakage instantly:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Managed Pharmacy (End-to-end ops)",
                    "Unified HMS (Prescription sync)",
                    "Refill Engine (Automated delivery)",
                    "100% Availability Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button 
                  onClick={onBookDemo}
                  className="btn-primary min-w-[240px] group shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all"
                >
                  Book a free demo
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={onTalkToExpert}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-all group px-4 py-2"
                >
                  <MessageCircle className="w-5 h-5 transition-colors group-hover:text-blue-600" />
                  Talk to our clinic experts
                </button>
              </motion.div>
            </div>

            {/* Visual Side - Leakage Grid */}
            <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0">
              <div className="relative aspect-square max-w-[440px] mx-auto lg:ml-auto">
                {/* Floating "Risk" Cards with Pulse */}
                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute top-0 right-0 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-30 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-[15px] leading-relaxed font-medium">"I’ll just buy these medicines on my way home..."</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-500">
                    <MousePointer2 className="w-3 h-3 group-hover:animate-bounce" />
                    Prescription Leakage active
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, 20, 0] }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute top-40 left-0 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-20 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-[15px] leading-relaxed font-medium">"My regular online pharmacy delivers for cheaper."</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-500">
                    <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    Revenue at risk
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute bottom-4 right-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100/60 max-w-[260px] z-10 group backdrop-blur-md cursor-default"
                >
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                  </div>
                  <p className="text-slate-500 italic text-[15px] leading-relaxed font-medium">"I'll have to check another store for stock."</p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Stock unavailability
                  </div>
                </motion.div>

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator hook */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400 no-select"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Scroll to explore leakage patterns</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

```

## components/pages/solutions/clinic-without-pharmacy/ClinicHero.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  UserPlus, 
  Pill, 
  Droplets, 
  Sparkles, 
  Truck,
  Wallet,
  Clock,
  TrendingUp
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';

import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface ClinicHeroProps {
  onBookDemo?: () => void;
}

export const ClinicHero = ({ onBookDemo }: ClinicHeroProps) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* ── BASE ATMOSPHERE (Standardized) ── */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />
      
      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer} 
            className="space-y-8 max-w-xl"
          >
            <motion.div variants={fadeInUp} className="eyebrow-wrap justify-start">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">For Independent Clinics</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            
            <div className="flex flex-col gap-12 md:gap-16">
              <motion.h1 
                variants={fadeInUp} 
                className="flex flex-col gap-3 md:gap-4 text-center lg:text-left"
              >
                {/* Line 1: Black */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#0F172A]">
                  You Prescribe
                </span>
                
                {/* Line 2: Medical Indigo */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#4F46E5]">
                  We Deliver
                </span>
                
                {/* Line 3: Supporting (Small/Slate-600) */}
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold tracking-[-0.02em] text-slate-600 mt-2 line-height-tight">
                  Zero Setup Needed
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="hero-subtitle max-w-xl text-center lg:text-left leading-relaxed tracking-normal">
                <span className="font-bold text-slate-900">10-minute delivery</span> from our nearest dark pharmacy directly to your clinic. Enable <span className="font-bold text-slate-900">instant patient fulfillment</span> with zero inventory and zero operational overhead.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-8 pt-2 md:pt-4">
              <div>
                <button 
                  onClick={onBookDemo}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px]"
                >
                  Book A Free Demo
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Standardized Trust Markers */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {HERO_TRUST_BADGES.filter(badge => badge.label !== "Zero Revenue Leakage").map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual (Dynamic SaaS Widget) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} 
            className="relative hidden lg:block mt-8 lg:mt-0 self-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Main Interactive Card */}
              <div className="w-[440px] card-glass relative z-20 shadow-card-lg border-[#C7D2FE] p-0 overflow-visible animate-float-slower">
                <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl rounded-[20px] z-0 pointer-events-none border border-white/60" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-[#E2E8F0]/80 bg-white/50 rounded-t-[20px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5] border border-[#C7D2FE] shadow-sm">
                        <UserPlus className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0F172A] leading-tight">Rahul Sharma, 42</h4>
                        <p className="text-xs text-[#64748B] font-medium mt-0.5">Consultation complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Rx Ready</span>
                    </div>
                  </div>
                  
                  {/* Prescription Items */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#C7D2FE] transition-colors group/item">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-[#F1F5F9] group-hover/item:bg-[#EEF2FF] group-hover/item:text-[#4F46E5] transition-colors">
                          <Pill className="w-5 h-5 text-[#64748B] group-hover/item:text-[#4F46E5]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#0F172A]">Telmisartan 40mg</div>
                          <div className="text-xs font-medium text-[#64748B] mt-0.5">1 Tablet · After Breakfast</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0F172A]">₹145</div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">In Stock</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#C7D2FE] transition-colors group/item">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center border border-[#F1F5F9] group-hover/item:bg-[#EEF2FF] group-hover/item:text-[#4F46E5] transition-colors">
                          <Droplets className="w-5 h-5 text-[#64748B] group-hover/item:text-[#4F46E5]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#0F172A]">Metformin 500mg</div>
                          <div className="text-xs font-medium text-[#64748B] mt-0.5">1 Tablet · After Dinner</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-[#0F172A]">₹65</div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">In Stock</div>
                      </div>
                    </div>
                  </div>

                  {/* Shimmering Infrastructure Box */}
                  <div className="px-6 pb-2">
                     <div className="relative overflow-hidden p-4 bg-[#EEF2FF] rounded-xl border border-[#C7D2FE] flex justify-between items-center shadow-inner">
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                        
                        <div className="relative z-10 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                          <span className="text-sm font-bold text-[#1D4ED8]">Clinic Facilitation Fee</span>
                        </div>
                        <span className="relative z-10 text-xl font-black text-[#4F46E5]">+₹210.00</span>
                     </div>
                  </div>

                  {/* Footer Action */}
                  <div className="px-6 pb-6 pt-4">
                    <button className="w-full btn btn-primary py-4 text-[15px] shadow-btn flex items-center justify-center gap-2 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <Truck className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" /> 
                      <span className="relative z-10 font-bold">Deliver to Patient's Home</span>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero.tsx

```tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  ChevronRight,
  Wallet,
  ShieldCheck,
  Clock,
  TrendingUp
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainerLocal: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalPharmacyHero = ({ onBookDemo, onViewDemo }: { onBookDemo: () => void, onViewDemo?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* ── BASE ATMOSPHERE (Standardized) ── */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />
      
      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainerLocal}
        >
          <motion.div variants={fadeInUp} className="eyebrow-wrap justify-start">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">For Clinics & Hospitals with a Pharmacy</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-12 md:gap-16">
              <motion.h1 
                variants={fadeInUp}
                className="flex flex-col gap-3 md:gap-4 text-center lg:text-left"
              >
                {/* Line 1: Black */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#0F172A]">
                  Why Patients Buy Outside?
                </span>
                
                {/* Line 2: Medical Indigo */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#4F46E5]">
                  Capture Every Prescription.
                </span>
                
                {/* Line 3: Supporting (Small/Slate-600) */}
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold tracking-[-0.02em] text-slate-600 mt-2 line-height-tight">
                  Grow your in-house revenue.
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="hero-subtitle max-w-xl text-center lg:text-left leading-relaxed tracking-normal"
              >
                Stop medication leakage and transform your facility into a <span className="font-bold text-slate-900">high-efficiency care hub</span>. Our technology ensures <span className="font-bold text-slate-900">automated inventory and compliance</span> with zero operational overhead.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col gap-10 pt-2 md:pt-4">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button 
                    onClick={onBookDemo}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] min-w-[240px]"
                  >
                    Partner With Us
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-all group px-4 py-2"
                  >
                    See How It Works
                  </button>
                </div>

                {/* Standardized Trust Markers */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {HERO_TRUST_BADGES.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Icon size={16} className="text-blue-500" />
                        <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Visual Side - Clean, Professional Audit Card */}
            <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0 self-center">
              <div className="relative max-w-[420px] mx-auto lg:ml-auto">
                <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-indigo-600/10 border border-slate-100 relative z-20">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <Activity className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Typical Clinic</p>
                        <p className="text-sm font-bold text-slate-900">Pharmacy Performance</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Prescriptions Written</span>
                        <span className="text-slate-900">100%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Filled In-House</span>
                        <span className="text-rose-500 font-bold">~ 40%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className="w-[40%] h-full bg-rose-400 rounded-full"></div>
                        <motion.div 
                          initial={{ x: "-100%" }} animate={{ x: "250%" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 left-0 w-1/4 h-full bg-white/30 skew-x-12"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-slate-500">Chronic Patient Retention</span>
                        <span className="text-rose-500 font-bold">Low</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className="w-[25%] h-full bg-rose-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium text-center">
                      We help clinics completely close the gap between <span className="font-bold text-indigo-600">consultation and fulfillment</span>.
                    </p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-full mix-blend-overlay z-30"></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-50 rounded-full blur-[40px] z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

```

## components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyHero.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Building2, 
  Smartphone, 
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Sparkles
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainerLocal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HospitalWithoutPharmacyHero = ({ 
  onBookDemo, 
  onTalkToExpert 
}: { 
  onBookDemo?: () => void;
  onTalkToExpert?: () => void;
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-section-hero">
      {/* Abstract Background Blobs */}
      <div className="blob-layer">
        <div className="blob-blue w-[28rem] h-[28rem] -top-24 -left-24 animate-float-slow" />
        <div className="blob-indigo w-[32rem] h-[32rem] top-1/4 -right-24 animate-float-medium" />
        <div className="blob-violet w-[30rem] h-[30rem] bottom-0 left-1/3 animate-float-slower" />
      </div>

      <div className="relative container-page text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerLocal}
          className="space-y-12"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">Integrated Pharmacy Engine</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1 
              variants={fadeInUp} 
              className="text-display-xl font-black leading-[1.05] tracking-tighter max-w-5xl mx-auto"
            >
              <span className="text-slate-900 inline-block">You heal the patient.</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block overflow-visible pb-2">
                Why does the revenue leave?
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-body-lg text-slate-600 leading-relaxed font-medium">
              Every day, your hospital creates clinical value — only to hand over a prescription fulfilled elsewhere. MediKloud helps you capture that value instantly.
            </motion.p>
          </div>

          {/* Leakage Grid with Pulse Markers */}
          <motion.div variants={staggerContainerLocal} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 px-4 sm:px-0">
            {[
              { icon: Building2, text: "Patient walks to retail pharmacy", color: "rose" },
              { icon: Smartphone, text: "Orders from online aggregators", color: "rose" },
              { icon: Clock, text: "Delays treatment due to friction", color: "rose" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="card p-6 border-slate-200/60 hover:border-indigo-200 group hover:shadow-card-lg transition-all duration-500 bg-white/70 backdrop-blur-md flex flex-col items-start text-left min-h-[160px] relative overflow-hidden"
              >
                {/* Pulse Marker */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 no-select">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active leakage</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4 shadow-sm border border-rose-100 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug pr-8">{item.text}</p>
                <div className="mt-auto pt-3">
                  <div className="h-1 w-8 rounded-full bg-slate-100 group-hover:bg-rose-500 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Positioning Box with Secondary Action */}
          <motion.div variants={fadeInUp} className="pt-8 px-4 sm:px-0">
            <div className="card-glass p-8 md:p-14 text-left max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center border border-indigo-100/50 shadow-float-brand relative">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest no-select">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Instant infrastructure layer
                </div>
                <h3 className="text-h2 font-black text-slate-900 tracking-tight leading-tight">
                  MediKloud changes <br className="hidden lg:block" /> the hospital economics.
                </h3>
                <p className="text-slate-600 text-body-lg leading-relaxed font-medium">
                  Without setting up a single physical shelf, our integrated engine helps your hospital capture 100% of prescribed value while improving patient compliance.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="badge badge-indigo">Digital fulfillment</div>
                  <div className="badge badge-brand">Revenue share</div>
                  <div className="badge badge-slate">Zero operations</div>
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-4">
                <button onClick={onBookDemo} className="btn-primary w-full group shadow-btn-brand active:scale-[0.97] transition-all">
                  Launch your pharmacy engine
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button onClick={onTalkToExpert} className="btn-ghost w-full active:scale-[0.97] transition-all">
                  Talk to our hospital experts
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-16 flex flex-col items-center gap-3 no-select"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] ml-[0.3em]">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-indigo-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



```

## components/pages/products/hospital-management-system/HMSHero.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Calendar,
  Users,
  Phone,
  BarChart3,
  ChevronRight,
  Wallet,
  TrendingUp
} from 'lucide-react';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';

export const HMSHero = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* Base gradient and atmosphere */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />

      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      {/* Bottom fade matched to product pages */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* Main Content */}
      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Eyebrow pattern aligned with product pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">100% Secure · Zero Training · High-Volume OPD</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>

            <div className="space-y-6">
              {/* Gold standard H1 structure */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                {/* Line 1: Intro */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-2">
                  Hospital Management,
                </span>

                {/* Line 2: Brand/Product Gradient */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-4 mb-2">
                  Finally Simple
                </span>

                {/* Line 3: Target Audience */}
                <span className="block text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-700/90">
                  for Independent Hospitals & Clinics
                </span>
              </motion.h1>

              {/* Body Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle max-w-xl mx-auto lg:mx-0"
              >
                No setup headaches. No clunky screens. Just smooth OPD and EMR workflows from day one.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-10 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto"
                >
                  Book A Free Demo
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Standardized Trust Markers */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                {HERO_TRUST_BADGES.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>


          </motion.div>

          {/* ── RIGHT COLUMN (POLISHED DASHBOARD VISUAL) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center"
          >
            {/* Premium Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />

            {/* Main Glass Panel Dashboard */}
            <div className="relative z-10 bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_30px_80px_-20px_rgba(30,58,138,0.15)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden">
              
              {/* Dashboard Layout Simulation */}
              <div className="relative">
                {/* Header Mockup */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                       <BarChart3 size={20} />
                     </div>
                     <div>
                       <h4 className="text-sm font-black text-slate-900 tracking-tight leading-none mb-1">Clinic Central</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Control</p>
                     </div>
                   </div>
                   <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-2">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     <span className="text-[10px] font-bold tracking-widest uppercase">System Live</span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Today's OPD</p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">142</span>
                        <span className="text-[10px] font-bold text-emerald-500 mb-1">+12%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Avg Wait</p>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">12</span>
                        <span className="text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">min</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions / Queue */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                      Recent Activity <span>View All</span>
                    </p>
                    {[
                      { name: "Aarav S.", id: "PT-8472", status: "Consultation", color: "text-blue-500", bg: "bg-blue-50" },
                      { name: "Priya P.", id: "PT-8473", status: "Completed", color: "text-emerald-500", bg: "bg-emerald-50" },
                      { name: "Rahul V.", id: "PT-8474", status: "Billing", color: "text-amber-500", bg: "bg-amber-50" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-slate-100/80">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-none mb-1">{item.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 tracking-wider font-mono">{item.id}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-md ${item.bg} ${item.color} text-[9px] font-bold uppercase tracking-widest`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};


```

## components/pages/products/managed-pharmacy/MPHero.tsx

```tsx
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FileText, Users, Package, Lock, TrendingUp, HeartPulse, Server, Zap, Activity, Clock, Smile,
  ChevronRight,
  Wallet,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'
import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

const deployItems = [
  { icon: Users, label: 'Expert Pharmacists' },
  { icon: Package, label: 'Fully-Funded Stock' },
  { icon: Activity, label: 'Clinical Tech' },
  { icon: ShieldCheck, label: 'Total Compliance' }
]

const secureItems = [
  { icon: HeartPulse, label: '100% Clinical Focus' },
  { icon: Clock, label: 'Your Time' },
  { icon: CheckCircle2, label: 'Zero Hassle' },
  { icon: TrendingUp, label: 'Maximized Profits' },
  { icon: Smile, label: 'Happy Patients' }
]

export function MPHero() {
  const { openModal } = useContactModal()

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />

      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      {/* === CONTENT === */}
      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mb-5"
            >
              <div className="eyebrow-wrap justify-start">
                <span className="eyebrow-line-l"></span>
                <span className="eyebrow-text">Zero Capex · Fully Managed</span>
                <span className="eyebrow-line-r"></span>
              </div>
            </motion.div>

            {/* ── H1 ── */}
            <div className="flex flex-col gap-12 md:gap-16 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="flex flex-col gap-3 md:gap-4 text-center lg:text-left"
              >
                {/* Line 1: Black */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#0F172A]">
                  Stop Managing Inventory.
                </span>
                
                {/* Line 2: Medical Indigo */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold leading-tight tracking-[-0.02em] text-[#4F46E5]">
                  Your Pharmacy, Operated.
                </span>
                
                {/* Line 3: Supporting (Small/Slate-600) */}
                <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-bold tracking-[-0.02em] text-slate-600 mt-2 line-height-tight">
                  Fully Managed by MediKloud.
                </span>
              </motion.h1>

              {/* ── Subtitle ── */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hero-subtitle text-center lg:text-left leading-relaxed tracking-normal"
              >
                Scale your clinical operations with our <span className="font-bold text-slate-900">fully managed pharmacy network</span>. We provide the <span className="font-bold text-slate-900">tech, talent, and inventory</span> so you can focus on patient care with zero setup cost.
              </motion.p>
            </div>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-10 pt-2 md:pt-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto"
                >
                  Partner With Us
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Standardized Trust Markers */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {HERO_TRUST_BADGES.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN (ILLUSTRATIVE FLOW UI) ── */}
          <div className="lg:col-span-5 xl:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end self-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-full max-w-md"
            >
              {/* Outer Glow & Border */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent blur-xl" />
              
              <div className="relative bg-[#f8fafc]/90 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-5 lg:p-7 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] overflow-hidden">
                
                {/* Dashboard Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-50" />

                <div className="relative z-10 flex flex-col">
                  
                  {/* TOP: Input Generator (We Deploy) */}
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-blue-100/80 p-1.5 rounded-lg border border-blue-200/50">
                        <ShieldCheck size={16} className="text-blue-600" />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">We Bring</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {deployItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1), type: 'spring' }}
                          className="group relative flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i }}
                            className="bg-blue-50 p-1.5 rounded-md text-blue-600 shrink-0"
                          >
                            <item.icon size={14} strokeWidth={2.5} />
                          </motion.div>
                          <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700 relative z-10">{item.label}</span>
                          
                          {/* Animated scanline effect inside pill */}
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent skew-x-12"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE: Operations Engine Conduit */}
                  <div className="relative h-16 my-2 flex items-center justify-center">
                     {/* Vertical Flow Line mapping Top to Bottom */}
                     <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-[2px] bg-slate-200/50">
                       <motion.div 
                         animate={{ y: ['-100%', '150%'] }} 
                         transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                         className="h-10 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                       />
                     </div>
                     
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-3 shadow-lg shadow-indigo-500/30 border-2 border-white flex items-center justify-center mt-1 mb-1 before:absolute before:inset-0 before:rounded-xl before:ring-4 before:ring-indigo-100"
                     >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                          <Zap size={22} className="text-white drop-shadow-md" />
                        </motion.div>
                     </motion.div>
                  </div>

                  {/* BOTTOM: Output Success (You Secure) */}
                  <div className="relative mt-2">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="bg-indigo-100/80 p-1.5 rounded-lg border border-indigo-200/50">
                        <CheckCircle2 size={16} className="text-indigo-600" />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">Clinics &amp; Hospitals Gain</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {secureItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + (i * 0.1), type: 'spring' }}
                          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-200/50 shadow-sm overflow-hidden"
                        >
                          <div className="text-indigo-600 relative z-10">
                            <item.icon size={14} strokeWidth={2.5} />
                          </div>
                          <span className="text-[12px] sm:text-[13px] font-semibold text-slate-800 relative z-10">{item.label}</span>
                          
                          {/* Subdued ping animation on outputs */}
                          <motion.div
                             animate={{ opacity: [0, 0.5, 0] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                             className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-200/40 to-indigo-400/0 pointer-events-none"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

```

## components/pages/products/refill-engine/RefillHero.tsx

```tsx
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  Activity, 
  LayoutDashboard, 
  Route, 
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  ClipboardList,
  Truck,
  Building2,
  CheckCircle2,
  TrendingUp
} from 'lucide-react'
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData'
import { useContactModal } from '@/hooks/use-contact-modal'
import { ParticleNetwork } from '@/components/shared/ParticleNetwork'

// 100% Reliable Inline SVG Avatar Generator (Indian Faces)
const AvatarSVG = ({ gender, seed }: { gender: 'male' | 'female', seed: string }) => {
  // Various Indian skin tones
  const skinTones = ['#a67b5b', '#8e5a3d', '#714022', '#c19375'];
  const skinColor = skinTones[seed.length % skinTones.length];
  const hairColor = "#111827"; // Dark hair
  
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="100" height="100" fill="#1e293b" />
      
      {/* Body/Shoulders */}
      <path d="M 15 110 Q 50 65 85 110" fill={gender === 'female' ? '#ec4899' : '#3b82f6'} opacity="0.3" />
      
      {/* Back hair for female */}
      {gender === 'female' && <path d="M 25 45 Q 10 70 25 90 Q 50 100 75 90 Q 90 70 75 45 Z" fill={hairColor} />}
      
      {/* Neck */}
      <rect x="42" y="60" width="16" height="20" rx="4" fill={skinColor} />
      <rect x="42" y="60" width="16" height="10" fill="#000" opacity="0.15" />
      
      {/* Face */}
      <rect x="30" y="25" width="40" height="48" rx="20" fill={skinColor} />
      
      {/* Male Hair */}
      {gender === 'male' && <path d="M 28 40 Q 50 15 72 40 Q 75 20 50 15 Q 25 20 28 40 Z" fill={hairColor} />}
      
      {/* Female Hair front */}
      {gender === 'female' && <path d="M 28 40 Q 50 20 72 40 Q 50 10 28 40 Z" fill={hairColor} />}
      
      {/* Eyes */}
      <circle cx="42" cy="48" r="3.5" fill="#111827" />
      <circle cx="58" cy="48" r="3.5" fill="#111827" />
      
      {/* Mouth */}
      <path d="M 44 62 Q 50 68 56 62" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      
      {/* Optional Beard for some males based on seed */}
      {gender === 'male' && seed.length % 2 === 0 && (
        <path d="M 32 55 Q 50 78 68 55 Q 50 72 32 55 Z" fill={hairColor} opacity="0.8" />
      )}
    </svg>
  );
};

export function RefillHero() {
  const { openModal } = useContactModal();

  // Dynamic Dispatch State
  const [dispatches, setDispatches] = useState<any[]>([]);
  const activeDispatchesRef = useRef<any[]>([]);

  useEffect(() => {
    const generateDispatch = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const isFemale = Math.random() > 0.5;
      
      // Indian names
      const namesF = ["Priya S.", "Ananya M.", "Kavya R.", "Neha K.", "Aditi V.", "Sneha T.", "Riya D.", "Pooja N."];
      const namesM = ["Rahul D.", "Aditya C.", "Vikram S.", "Rohan K.", "Arjun M.", "Karan L.", "Siddharth P.", "Amit J."];
      const name = isFemale 
        ? namesF[Math.floor(Math.random() * namesF.length)] 
        : namesM[Math.floor(Math.random() * namesM.length)];

      let targetX: number = 0, targetY: number = 0;
      let overlap = true;
      let attempts = 0;
      const currentActive = activeDispatchesRef.current;

      // Anti-Overlap Logic
      while (overlap && attempts < 20) {
        targetX = 45 + Math.random() * 40; // 45% to 85% width
        targetY = 15 + Math.random() * 70; // 15% to 85% height
        
        overlap = currentActive.some(d => {
          const dx = Math.abs(d.x - targetX);
          const dy = Math.abs(d.y - targetY);
          return dx < 25 && dy < 25; 
        });
        attempts++;
      }

      const newDispatch = {
        id,
        name,
        gender: isFemale ? 'female' : 'male',
        x: targetX,
        y: targetY,
        status: 'transit'
      };

      activeDispatchesRef.current = [...currentActive.slice(-2), newDispatch];
      setDispatches(prev => [...prev.slice(-2), newDispatch]);

      setTimeout(() => {
        setDispatches(prev => prev.map(d => d.id === id ? { ...d, status: 'delivered' } : d));
      }, 2000);

      setTimeout(() => {
        setDispatches(prev => prev.filter(d => d.id !== id));
        activeDispatchesRef.current = activeDispatchesRef.current.filter(d => d.id !== id);
      }, 4000);
    };

    generateDispatch();
    const interval = setInterval(generateDispatch, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* Base gradient and atmosphere */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />
      
      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />

      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />


      {/* Main Content */}
      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Eyebrow pattern aligned with product pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">Digital Health Extension · Patient Retention</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>

            <div className="space-y-6">
              {/* Gold standard H1 structure */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                {/* Line 1: Intro */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] text-slate-900 pb-2">
                  Enabling Medicine Deliveries From
                </span>

                {/* Line 2: Brand/Product Gradient */}
                <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight md:tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-4 mb-2">
                  Hospital Pharmacies
                </span>
              </motion.h1>

              {/* Body Copy - Reverted style */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle max-w-xl mx-auto lg:mx-0"
              >
                We provide the technology and resources for patients to order directly from you and deliver them as well.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col gap-10 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto"
                >
                  Partner With Us
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Standardized Trust Markers */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                {HERO_TRUST_BADGES.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5">
                      <Icon size={16} className="text-blue-500" />
                      <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>


          </motion.div>

          {/* ── RIGHT COLUMN (ANIMATED DISPATCH NETWORK) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 mt-12 lg:mt-0 self-center"
          >
            {/* Premium Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[3rem] transform rotate-3 scale-105 blur-2xl -z-10" />

            {/* Main Light Engine Terminal Box */}
            <div className="relative z-10 bg-white/80 backdrop-blur-3xl border border-white/60 shadow-[0_30px_100px_-20px_rgba(30,58,138,0.15)] ring-1 ring-slate-900/5 rounded-[2.5rem] overflow-hidden flex flex-col">
              
              {/* Abstract Tech Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.4] pointer-events-none" />

              <div className="p-6 sm:p-8 relative z-10 flex-1">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100/60">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                       <Activity size={16} className="text-blue-600 animate-pulse" />
                     </div>
                     <span className="text-[12px] font-bold text-slate-900 tracking-widest uppercase">Live Dispatch Map</span>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[9px] font-bold text-emerald-600 tracking-widest uppercase">Routing</span>
                   </div>
                </div>

                {/* --- DYNAMIC HOSPITAL TO PATIENT VISUALIZATION --- */}
                <div className="h-[280px] relative w-full overflow-hidden rounded-2xl bg-slate-50/50 shadow-inner">
                   
                   {/* Dynamic Connecting Lines (SVG Tracks) */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                     <AnimatePresence>
                       {dispatches.map(d => (
                         <motion.line
                           key={`line-${d.id}`}
                           x1="15%" y1="50%" // Starts at Hospital center
                           x2={`${d.x}%`} y2={`${d.y}%`} // Ends at Patient
                           stroke={d.status === 'delivered' ? 'rgba(16,185,129,0.5)' : 'rgba(59,130,246,0.3)'}
                           strokeWidth="2.5"
                           strokeDasharray="4 4"
                           initial={{ pathLength: 0, opacity: 0 }}
                           animate={{ pathLength: 1, opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                         />
                       ))}
                     </AnimatePresence>
                   </svg>

                   {/* 1. SOURCE: Hospital Pharmacy (Fixed Position) */}
                   <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] z-20">
                      <div className="relative group">
                         <motion.div 
                           animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0, 0.1] }} 
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                           className="absolute inset-0 bg-blue-500 rounded-3xl blur-xl" 
                         />
                         
                         <div className="relative bg-white/95 backdrop-blur-md border border-blue-100 p-4 rounded-2xl flex flex-col items-center gap-3 w-full shadow-lg">
                            <div className="relative">
                               <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 rounded-xl" />
                               <div className="relative bg-blue-600 p-3 rounded-xl shadow-md">
                                  <Building2 size={24} className="text-white" />
                               </div>
                            </div>
                            <div className="text-center w-full">
                               <div className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-wider">Hospital</div>
                               <div className="text-blue-600 text-[8px] sm:text-[9px] uppercase tracking-widest mt-0.5 font-bold">Pharmacy</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* 2 & 3. DYNAMIC PATIENTS & TRUCKS */}
                   <AnimatePresence>
                     {dispatches.map(d => (
                       <React.Fragment key={d.id}>
                         
                         {/* Moving Delivery Truck */}
                         {d.status === 'transit' && (
                           <motion.div
                             initial={{ left: "15%", top: "50%", opacity: 0, scale: 0.5 }}
                             animate={{ left: `${d.x}%`, top: `${d.y}%`, opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 0.5 }}
                             transition={{ duration: 2, ease: "linear" }}
                             className="absolute -ml-3 -mt-3 z-30"
                           >
                              <div className="bg-white border border-blue-200 p-1.5 rounded-full shadow-lg">
                                 <Truck size={14} className="text-blue-600" />
                              </div>
                           </motion.div>
                         )}

                         {/* Dynamically Popping Patient Destination */}
                         <motion.div
                           initial={{ opacity: 0, scale: 0.5, y: 10 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.8 }}
                           transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                           style={{ left: `${d.x}%`, top: `${d.y}%` }}
                           className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                         >
                            <div className={`bg-white/90 backdrop-blur-md border ${d.status === 'delivered' ? 'border-emerald-200 shadow-lg' : 'border-slate-100'} p-2 rounded-xl flex items-center gap-2.5 min-w-[130px] transition-all duration-300 shadow-sm ring-1 ring-black/5`}>
                               
                                {/* Inline SVG Patient Avatar */}
                                <div className="relative shrink-0 w-8 h-8 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                                  <AvatarSVG gender={d.gender} seed={d.name} />
                                </div>

                                <div className="min-w-0 flex-1">
                                   <div className="text-slate-900 text-[10px] sm:text-[11px] font-bold truncate">{d.name}</div>
                                   <div className="text-[8px] uppercase tracking-widest mt-0.5 truncate flex items-center gap-1 font-bold">
                                     {d.status === 'delivered' ? (
                                        <><CheckCircle2 size={10} className="text-emerald-500"/> <span className="text-emerald-600">Delivered</span></>
                                     ) : (
                                        <><Clock size={10} className="text-blue-500 animate-pulse"/> <span className="text-slate-400">En Route</span></>
                                     )}
                                   </div>
                                </div>
                            </div>
                         </motion.div>

                       </React.Fragment>
                     ))}
                   </AnimatePresence>

                </div>
              </div>

              {/* Integrated Metrics Footer */}
              <div className="relative z-10 bg-slate-50/80 border-t border-slate-100 p-4 sm:p-5 backdrop-blur-xl">
                 <div className="grid grid-cols-2 gap-4">
                    {/* Brand Status Metric */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:bg-white/60 transition-colors shadow-sm">
                       <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                          <CheckCircle2 size={18} />
                       </div>
                       <div className="min-w-0">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 truncate">Brand Status</p>
                          <p className="text-xs sm:text-sm font-black text-slate-900 leading-none truncate">100% Retained</p>
                       </div>
                    </div>
                    
                    {/* Revenue Metric */}
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 hover:bg-white/60 transition-colors shadow-sm">
                       <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                          <TrendingUp size={18} />
                       </div>
                       <div className="min-w-0">
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 truncate">Direct Revenue</p>
                          <p className="text-xs sm:text-sm font-black text-slate-900 leading-none truncate">Secured</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

          </motion.div>
        </div>
      </div>

      {/* Strategic Outcome Banner - Matched to HMS format */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-12 relative z-10 w-full hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-center shadow-float relative overflow-hidden group"
        >
          {/* Background decorative glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-1.5 bg-blue-500 rounded-full mb-8"></div>
            <h3 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold text-white max-w-4xl mx-auto leading-[1.1] tracking-tight">
              <span className="font-black bg-gradient-display bg-clip-text text-transparent">Bridge the gap between consultation</span><br className="hidden md:block" />
              and doorstep care.
            </h3>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

```

## components/pages/products/virtual-pharmacy/VPHero.tsx

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  ClipboardList,
  Package,
  Truck,
  Zap,
  CheckCircle2, 
  Phone,
  FileText,
  ChevronRight,
  Wallet,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/hooks/use-contact-modal';
import { ParticleNetwork } from '@/components/shared/ParticleNetwork';
import { HERO_TRUST_BADGES } from '@/components/pages/home/HomeData';

const VPHero = () => {
  const [timer, setTimer] = useState("03:42");
  const { openModal } = useContactModal();

  // New State for the Live Automation Engine
  const [activeStage, setActiveStage] = useState(0);
  const [orderId, setOrderId] = useState(8429);

  // Timer for the 10-minute countdown (existing)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev: string) => {
        const [m, s] = prev.split(':').map(Number);
        if (s === 0 && m === 0) return "00:00";
        if (s === 0) return `${String(m - 1).padStart(2, '0')}:59`;
        return `${String(m).padStart(2, '0')}:${String(s - 1).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer for the Automation Engine progression
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev: number) => {
        const next = (prev + 1) % 4;
        if (next === 0) setOrderId((id) => id + 1); // Increment order ID on cycle restart
        return next;
      });
    }, 4000); // 4 seconds per stage
    return () => clearInterval(stageInterval);
  }, []);

  const stages = [
    {
      id: 0,
      title: "Prescribed via MediKloud HMS",
      desc: "Doctor's Rx is auto-received by our Dark Store",
      icon: FileText,
      iconBg: "bg-blue-100/80",
      iconColor: "text-blue-600",
      barColor: "bg-blue-500",
      metrics: "Transfer Time: < 1s",
    },
    {
      id: 1,
      title: "Packed & Verified",
      desc: "AI & Pharmacist safety check in under 2 mins",
      icon: ShieldCheck,
      iconBg: "bg-indigo-100/80",
      iconColor: "text-indigo-600",
      barColor: "bg-indigo-500",
      metrics: "Processing Time: 1m 45s",
    },
    {
      id: 2,
      title: "Rider Dispatched",
      desc: "Medicines picked up and en route to clinic",
      icon: Truck,
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600",
      barColor: "bg-purple-500",
      metrics: "Status: On the way",
    },
    {
      id: 3,
      title: "Delivered at Clinic Door",
      desc: "Handed directly to patient within 10 minutes",
      icon: CheckCircle2,
      iconBg: "bg-amber-100/80",
      iconColor: "text-amber-600",
      barColor: "bg-amber-500",
      metrics: "Total Time: 9m 12s",
    }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-start overflow-hidden pt-[75px] pb-12 md:pt-[110px] md:pb-20">
      {/* Base gradient and atmosphere bits matched to MPHero */}
      <div className="absolute inset-0 bg-gradient-hero z-[-1]" aria-hidden="true" />

      {/* Interactive Cursor Glow (Internal Pages Mode: No Particles) */}
      <ParticleNetwork showParticles={false} />

      {/* Ambient Glows (Standardized wash) */}
      <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-blue-100/25 rounded-full blur-[60px]" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-indigo-100/20 rounded-full blur-[60px]" aria-hidden="true" />

      {/* Bottom fade matched to MPHero */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" aria-hidden="true" />

      <div className="container-page relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── LEFT COLUMN (TEXT & CTAs) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Eyebrow pattern aligned with MPHero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow-wrap lg:justify-start"
            >
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">Zero Setup Cost · Seamless Integration</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>

            <div className="space-y-6">
              {/* Refined Headline Hierarchy */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 md:mb-8 text-center lg:text-left"
              >
                <span className="block text-h3 md:text-h2 font-bold text-slate-900 tracking-[-0.02em] mb-1">
                  The 10-Minute
                </span>
                <span className="block text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl font-bold tracking-[-0.02em] bg-gradient-display bg-clip-text text-transparent pb-2 lg:pb-4">
                  Digital Pharmacy
                </span>
                <span className="block text-xl md:text-2xl font-bold tracking-[-0.02em] text-slate-600/90 mt-2">
                  for Independent Clinics
                </span>
              </motion.h1>

              {/* Layer 3: Body / Description - Shortened */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle max-w-xl mx-auto lg:mx-0"
              >
                Deliver medicines in 10 minutes. We handle the tech, inventory, and logistics—you focus on care. Zero setup, zero overhead.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 pt-2"
            >
              <div>
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4F46E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 text-[16px] md:text-[17px] w-full sm:w-auto"
                >
                  Partner With Us
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4"
            >
              {HERO_TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Icon size={16} className="text-blue-500" />
                    <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN (LIVE AUTOMATION ENGINE) ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:pl-4 self-center"
          >
            {/* Background Glow for Panel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-purple-200/40 rounded-[3rem] transform rotate-3 scale-105 blur-xl -z-10" />

            {/* Main Glass Panel */}
            <div className="relative z-10 bg-white/70 backdrop-blur-2xl border border-white shadow-[0_30px_80px_-20px_rgba(30,58,138,0.15)] rounded-[2.5rem] p-6 lg:p-8 ring-1 ring-slate-900/5 overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    Live Order #{orderId}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Virtual Pharmacy Engine</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Processing</span>
                </div>
              </div>

              {/* The Pipeline */}
              <div className="relative">
                {/* Connecting Line Background */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] bg-slate-200 rounded-full" />
                
                {/* Active Progress Line */}
                <div className="absolute left-[1.35rem] top-6 bottom-6 w-[2px] overflow-hidden rounded-full flex flex-col justify-start">
                  <motion.div 
                    className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
                    animate={{ height: `${((activeStage + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                {/* Pipeline Nodes */}
                <div className="space-y-4">
                  {stages.map((stage, idx) => {
                    const isActive = activeStage === idx;
                    const isPast = activeStage > idx;

                    return (
                      <div key={stage.id} className="relative pl-12">
                        {/* Node Indicator */}
                        <div 
                          className={`absolute left-[1.05rem] top-5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 transition-colors duration-500 
                          ${isActive ? 'bg-blue-500 ring-4 ring-blue-500/20' : isPast ? 'bg-slate-800' : 'bg-slate-300'}`} 
                        />

                        {/* Stage Card */}
                        <motion.div
                          layout
                          className={`p-4 rounded-2xl transition-all duration-500 ${
                            isActive 
                              ? 'bg-white shadow-xl shadow-blue-900/5 border border-blue-100 ring-1 ring-black/5 scale-[1.02]' 
                              : isPast
                                ? 'bg-white/40 border border-transparent opacity-80'
                                : 'bg-transparent border border-transparent opacity-40 grayscale-[50%]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl transition-colors ${isActive || isPast ? stage.iconBg : 'bg-slate-100'}`}>
                              <stage.icon className={`w-5 h-5 ${isActive || isPast ? stage.iconColor : 'text-slate-400'}`} />
                            </div>
                            <div>
                              <h4 className={`font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {stage.title}
                              </h4>
                              <p className="text-xs font-medium text-slate-500 mt-0.5">{stage.desc}</p>
                            </div>
                          </div>

                          {/* Expanded Content for Active Stage */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {stage.metrics}
                                  </span>
                                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: "0%" }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 4, ease: "linear" }}
                                      className={`h-full ${stage.barColor}`}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* No local styles needed if badges are removed */}
    </section>
  );
};

export { VPHero };

```

