# Export for app/solutions/clinic-without-pharmacy/page.tsx

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

## app/solutions/clinic-without-pharmacy/page.tsx

```tsx
"use client"

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { useContactModal } from '@/hooks/use-contact-modal';

// Component imports
import { ClinicHero } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHero';
import { ClinicHiddenLoss } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHiddenLoss';
import { ClinicInsightShift } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicInsightShift';
import { ClinicHowItWorks } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks';
import { ClinicWhatChanges } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicWhatChanges';
import { ClinicEmotionalClose } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicEmotionalClose';
import { ClinicCTA } from '@/components/pages/solutions/clinic-without-pharmacy/ClinicCTA';

export default function ClinicWithoutPharmacyPage() {
  const { openModal } = useContactModal();

  const handleBookDemo = () => {
    openModal();
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      openModal();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main id="main">
        {/* Section 1 - Hero */}
        <ClinicHero />

        {/* Section 2 - The Hidden Loss */}
        <ClinicHiddenLoss />

        {/* Section 3 - The Insight Shift */}
        <ClinicInsightShift />

        {/* Section 4 - How MediKloud Works */}
        <ClinicHowItWorks />

        {/* Section 5 - What Changes for Your Clinic */}
        <ClinicWhatChanges />

        {/* Section 6 - Emotional Close */}
        <ClinicEmotionalClose />

        {/* Section 7 - Final CTA Section */}
        <ClinicCTA 
          onBookDemo={handleBookDemo}
          onSeeHowItWorks={handleSeeHowItWorks}
        />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

```

## components/pages/solutions/clinic-without-pharmacy/ClinicHero.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  MapPin, 
  Smartphone, 
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

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

export const ClinicHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-section-hero">
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
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">For independent clinic owners</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1 
              variants={fadeInUp} 
              className="text-display-xl font-black leading-[1.1] tracking-tighter max-w-4xl mx-auto"
            >
              <span style={{ color: '#0F172A' }} className="inline-block">You write the prescription.</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 inline-block overflow-visible" style={{ color: '#1D4ED8' }}>
                Someone else makes the money.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-body-lg text-slate-600 leading-relaxed font-medium">
              Every patient you treat walks out with a prescription — and walks straight into a pharmacy you don’t control.
            </motion.p>
          </div>

          {/* Loss Cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
            {[
              { 
                icon: MapPin, 
                text: "Nearby retail stores capture the sale", 
                color: "rose" 
              },
              { 
                icon: Smartphone, 
                text: "Online apps deliver it faster than you can offer", 
                color: "rose" 
              },
              { 
                icon: Clock, 
                text: "Patients forget, delay, or skip medicines entirely", 
                color: "rose" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="card border-slate-200 hover:border-indigo-100 group hover:shadow-card-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-indigo-600 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-sm border border-slate-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="font-semibold text-slate-800 text-left leading-snug">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Value Box */}
          <motion.div variants={fadeInUp} className="pt-8 px-4 sm:px-0">
            <div className="card-glass p-8 md:p-12 text-left max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center border border-indigo-100/50">
              <div className="flex-1 space-y-5">
                <h3 className="text-h2 font-bold text-slate-900 tracking-tight">
                  MediKloud changes that.
                </h3>
                <p className="text-slate-600 text-body-lg leading-relaxed font-medium">
                  We turn your clinic into a pharmacy — <span className="text-indigo-600 font-bold">without setting one up.</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "No inventory", icon: AlertCircle },
                    { label: "No pharmacist", icon: AlertCircle },
                    { label: "No license", icon: AlertCircle },
                    { label: "No headaches", icon: AlertCircle }
                  ].map((badge, idx) => (
                    <span key={idx} className="badge badge-brand shadow-sm">
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <button className="btn-primary w-full md:w-auto group shadow-btn">
                  Start earning from day 1
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/clinic-without-pharmacy/ClinicHiddenLoss.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  UserMinus, 
  Settings, 
  HeartPulse,
  TrendingDown,
  ArrowUpRight
} from 'lucide-react';

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

export const ClinicHiddenLoss = () => {
  return (
    <section className="section-py bg-section-alt overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} className="eyebrow-wrap justify-start">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">The hidden loss</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-h2 font-bold text-slate-900 leading-tight tracking-tight mt-6">
              A clinic without a pharmacy <br />
              <span className="text-indigo-600">is a leaking system.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Loss Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Acute patients",
                  desc: "May never buy the medicines at all after leaving.",
                  icon: TrendingDown,
                  tag: "Immediate leak"
                },
                {
                  title: "Chronic patients",
                  desc: "They shift to external pharmacies forever.",
                  icon: UserMinus,
                  tag: "LTV loss"
                },
                {
                  title: "Dispensing control",
                  desc: "No control over what brand or substitute is actually given.",
                  icon: Settings,
                  tag: "Clinical risk"
                },
                {
                  title: "Treatment adherence",
                  desc: "No way to ensure patients actually follow the prescription.",
                  icon: HeartPulse,
                  tag: "Care gap"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="card group hover:shadow-card-md transition-all duration-300 border-slate-200 hover:border-indigo-200"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 text-indigo-600 flex items-center justify-center border border-slate-100 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700 shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="badge badge-indigo text-[10px] shadow-sm">{item.tag}</span>
                  </div>
                  <h4 className="text-h3 font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact Insight Card */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />
              <div className="relative card-tinted p-10 md:p-12 border-indigo-200 shadow-card-md">
                <blockquote className="space-y-6">
                  <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-[1.3] italic tracking-tight">
                    "It’s not just about missing one sale. It’s about losing the entire patient lifecycle."
                  </p>
                  <footer className="pt-6 border-t border-indigo-100 flex items-center gap-4">
                    <div className="h-1 bg-indigo-500 w-12 rounded-full" />
                    <p className="text-slate-500 font-medium text-sm">
                      Over time, this becomes <span className="text-indigo-600 font-bold">invisible</span> — but it compounds into massive revenue and care loss.
                    </p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

```

## components/pages/solutions/clinic-without-pharmacy/ClinicInsightShift.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  PackageCheck,
  Truck,
  Zap
} from 'lucide-react';

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

export const ClinicInsightShift = () => {
  return (
    <section className="section-py bg-section-surface relative overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="eyebrow-wrap">
            <span className="eyebrow-line-l"></span>
            <span className="eyebrow-text">The insight shift</span>
            <span className="eyebrow-line-r"></span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp} 
            className="text-h2 font-black text-slate-900 leading-tight tracking-tight px-4"
          >
            What if every prescription you write... <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 px-1" style={{ color: '#4F46E5' }}>
              was automatically fulfilled?
            </span>
          </motion.h2>

          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {[
              "No extra effort from you",
              "No operational setup"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-indigo-50/30 border border-indigo-100/50 shadow-sm transition-transform hover:scale-[1.02]">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="font-bold text-slate-800">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Simple Process Flow */}
          <motion.div variants={fadeInUp} className="pt-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 hidden md:block -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { label: "Prescription created", icon: Zap },
                { label: "Medicines prepared instantly", icon: PackageCheck },
                { label: "Delivered right there or at home", icon: Truck }
              ].map((step, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center transition-all group-hover:border-indigo-500 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm max-w-[140px] mx-auto px-2">
                    {step.label}
                  </p>
                  {idx < 2 && (
                    <div className="md:hidden w-[1px] h-8 bg-slate-200 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-body-lg font-medium text-slate-600">
              Your clinic becomes the <span className="text-indigo-600 font-bold">default fulfillment point</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  Warehouse, 
  Banknote, 
  RotateCcw,
  Plus
} from 'lucide-react';

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

export const ClinicHowItWorks = () => {
  return (
    <section id="how-it-works" className="section-py bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div variants={fadeInUp} className="eyebrow-wrap">
              <span className="eyebrow-line-l"></span>
              <span className="eyebrow-text">The MediKloud engine</span>
              <span className="eyebrow-line-r"></span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-h2 font-bold text-slate-900 leading-tight tracking-tight">
              How it works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 text-body-lg font-medium leading-relaxed">
              Four simple steps to transform your clinic's economics.
            </motion.p>
          </div>

          {/* Process Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Digitize your prescriptions",
                desc: "Write digital prescriptions in seconds. Store patient history automatically with our free HMS.",
                icon: ClipboardCheck
              },
              {
                step: "02",
                title: "Instant fulfillment",
                desc: "Orders route to a nearby MediKloud dark pharmacy. Packed in minutes and delivered directly.",
                icon: Warehouse
              },
              {
                step: "03",
                title: "Capture revenue",
                desc: "No stock handling, staff, or compliance. You simply earn a structured partner fee on every order.",
                icon: Banknote
              },
              {
                step: "04",
                title: "Turn patients into recurring revenue",
                desc: "Automated refills and reminders. 1-tap reorders ensure long-term medication adherence.",
                icon: RotateCcw
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="relative group h-full"
              >
                <div className="card h-full flex flex-col p-8 md:p-10 transition-all duration-300 border-slate-200 group-hover:border-indigo-200 group-hover:shadow-card-md group-hover:-translate-y-1">
                  <div className="absolute top-6 right-8 text-slate-50 font-black text-6xl group-hover:text-slate-100 transition-colors pointer-events-none select-none">
                    {item.step}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 transition-transform group-hover:scale-110">
                      <item.icon className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-h3 font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting arrow/line logic */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <Plus className="w-6 h-6 text-slate-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/clinic-without-pharmacy/ClinicWhatChanges.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Heart, 
  Zap, 
  UserPlus
} from 'lucide-react';

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

export const ClinicWhatChanges = () => {
  return (
    <section className="section-py bg-section-surface overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Comparison Strategy Card */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto w-full">
            <div className="relative p-6 md:p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-12 items-center">
                {/* Side 1 - The Leak */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-rose-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Inefficient</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Prescription leakage
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Patients leave with paper slips. You lose revenue and care control to third-party pharmacies.
                  </p>
                </div>

                {/* Desktop Divider */}
                <div className="hidden md:flex flex-col items-center py-4">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                  <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center my-4 shadow-xl">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent flex-1" />
                </div>

                {/* Side 2 - The Capture */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-indigo-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">MediKloud Way</span>
                  </div>
                  <h3 className="text-2xl font-black text-indigo-600 tracking-tight">
                    Prescription capture
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    Closed-loop digital fulfillment. Retain 100% of revenue and ensure patient compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {[
              {
                title: "New revenue stream",
                desc: "Every prescription becomes monetizable from day 1.",
                icon: TrendingUp
              },
              {
                title: "Zero setup cost",
                desc: "No pharmacy infrastructure or capital investment required.",
                icon: Zap
              },
              {
                title: "Better patient experience",
                desc: "Faster, easier access to medicines without leaving your clinic.",
                icon: Heart
              },
              {
                title: "Higher treatment compliance",
                desc: "Patients actually take what you prescribe promptly.",
                icon: ShieldCheck
              },
              {
                title: "Long-term patient retention",
                desc: "Refill tracking and reminders maintain lifelong patient care cycles.",
                icon: UserPlus
              }
            ].map((gain, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="card-tinted group hover:shadow-card-md transition-all duration-300 border-indigo-100"
              >
                <div className="flex gap-1.5 mb-6">
                  <div className={`h-1.5 w-8 rounded-full bg-indigo-500 shadow-sm`} />
                  <div className={`h-1.5 w-1.5 rounded-full bg-indigo-200`} />
                </div>
                
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-indigo-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <gain.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-h3 font-bold text-slate-900 tracking-tight">{gain.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{gain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/clinic-without-pharmacy/ClinicEmotionalClose.tsx

```tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Quote } from 'lucide-react';

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

export const ClinicEmotionalClose = () => {
  return (
    <section className="section-py bg-section-alt relative overflow-hidden border-t border-slate-100">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-10"
        >
          {/* Section Indicator */}
          <motion.div variants={fadeInUp} className="flex justify-center flex-col items-center">
             <div className="w-16 h-[2px] bg-indigo-500/30 rounded-full mb-8" />
             <HeartPulse className="w-12 h-12 text-indigo-600" />
          </motion.div>

          <motion.h3 
            variants={fadeInUp} 
            className="text-h2 font-black text-slate-900 leading-tight tracking-tight px-4"
          >
            Your job isn’t just to prescribe. <br />
            <span className="text-indigo-600">
               It’s to ensure the patient gets better.
            </span>
          </motion.h3>

          <motion.div 
            variants={fadeInUp} 
            className="space-y-6 max-w-2xl mx-auto border-l-4 border-indigo-500 pl-8 text-left"
          >
            <p className="text-body-lg md:text-xl font-medium text-slate-700 leading-relaxed">
              But that only happens if the patient actually gets the medicine — on time, without friction, and exactly as prescribed.
            </p>
            <p className="text-base text-slate-500 font-medium leading-relaxed">
              Right now, that part is out of your control.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="pt-12 space-y-6"
          >
             <p className="text-2xl font-bold text-slate-900 tracking-tight">
               MediKloud brings it back — <span className="underline decoration-indigo-500 underline-offset-8">seamlessly</span>.
             </p>
             <p className="text-body-lg text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
               So every prescription you write doesn’t just end on paper — it completes the loop.
             </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


```

## components/pages/solutions/clinic-without-pharmacy/ClinicCTA.tsx

```tsx
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


```

