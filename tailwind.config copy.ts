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
        'xxxs':    ['9px', { lineHeight: '12px',  letterSpacing: '0.01em' }],
        'xxs':     ['10px', { lineHeight: '14px',  letterSpacing: '0.01em' }],
        'xs':      ['11px', { lineHeight: '16px',  letterSpacing: '0.01em' }],
        'sm':      ['12px', { lineHeight: '18px',  letterSpacing: '0' }],
        'base':    ['15px', { lineHeight: '24px',  letterSpacing: '0' }],
        'body-lg': ['17px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h6':      ['24px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h4':      ['16px', { lineHeight: '24px',  letterSpacing: '0' }],
        'h3':      ['19px', { lineHeight: '28px',  letterSpacing: '-0.01em' }],
        'h5':      ['20px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h2':      ['28px', { lineHeight: '36px',  letterSpacing: '-0.02em' }],
        'h1':      ['40px', { lineHeight: '48px',  letterSpacing: '-0.025em' }],
        'display': ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
        // Responsive display (fluid, set via responsive modifiers on className)
        'display-sm':  ['32px', { lineHeight: '36px',  letterSpacing: '-0.025em' }],
        'display-md':  ['44px', { lineHeight: '50px',  letterSpacing: '-0.028em' }],
        'display-lg':  ['52px', { lineHeight: '58px',  letterSpacing: '-0.03em' }],
        'display-xl':  ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
        // ── ROGUE AUDIT TYPOGRAPHY ─────────────────────────
        '1-75rem': '1.75rem',
        '2rem': '2rem',
        '2-25rem': '2.25rem',
        '2-5rem': '2.5rem',
        '2-75rem': '2.75rem',
      },

      // ─────────────────────────────────────────────────────────
      // FONT WEIGHT — 3 values only
      //
      // 700 (font-bold)    → h1, h2 and display headlines
      // 600 (font-semibold)→ h3, h4, eyebrow labels, button text
      // 400 (font-normal)  → body, captions, nav links, chips
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

          // Dark — near-black with indigo undertone
          // Used for dark section backgrounds (CTA panel)
          900: '#1E1B4B',  // indigo-950 — dark section bg START
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
        metric: {
          DEFAULT: '#7C3AED',  // violet-600 — the "metric" colour for charts and data viz
          light:   '#EDE9FE',  // violet-100
          dark:    '#4C1D95',  // violet-900
          text:    '#4C1D95',
        },
        // ── ROGUE AUDIT COLOURS ──────────────────────────────
        'brand-1': 'var(--color-brand-1)',
        'brand-2': 'var(--color-brand-2)',
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
        // Specialized decorative glows
        'glow-indigo': '0 0 12px 2px rgba(79, 70, 229, 0.40)',
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
        'section-sm':  '48px',   // mobile section padding
        'section':     '80px',   // desktop standard
        'section-lg':  '112px',  // hero, CTA
        'breathing':   '128px',  // Premium breathing gap
        // ── ROGUE AUDIT SPACING ────────────────────────────
        '110px': '110px',
        '120px': '120px',
        '280px': '280px',
        '300px': '300px',
        '380px': '380px',
        '500px': '500px',
        '600px': '600px',
        '800px': '800px',
        '28rem': '28rem',
        '30rem': '30rem',
        '32rem': '32rem',
        '24%': '24%',
        '28%': '28%',
        '85%': '85%',
        '92%': '92%',
      },

      // ─────────────────────────────────────────────────────────
      // MAX WIDTH
      // ─────────────────────────────────────────────────────────
      maxWidth: {
        'container': '1280px',  // outer page wrapper
        'header-lock': '900px',   // Premium solution header constraint
        'intro-lock':  '800px',   // Premium intro paragraph constraint
        'hero-subtitle': '1100px',
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

        // ── Section backgrounds ──────────────────────────────
        // Hero section background (behind the blobs)
        'gradient-hero':
          'linear-gradient(to bottom, #F8FAFC, rgba(239,246,255,0.5), #FFFFFF)',

        // Dark CTA section background
        'gradient-dark':
          'linear-gradient(135deg, #1E1B4B, #1E3A8A)',

        'gradient-dark-alt': 'linear-gradient(to bottom right, #0F172A, #1E1B4B)',

        // ── Patterns ─────────────────────────────────────────
        'tech-grid': 
          'linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)',
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
        'marquee':        'marquee 30s linear infinite',
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

      // ─────────────────────────────────────────────────────────
      // TYPOGRAPHY (prose)
      // Customising the @tailwindcss/typography plugin to match
      // the MediKloud Design System tokens.
      // ─────────────────────────────────────────────────────────
      typography: ({ theme }: { theme: any }) => ({
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate.800'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-lead': theme('colors.slate.600'),
            '--tw-prose-links': theme('colors.brand.600'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.brand.500'),
            '--tw-prose-bullets': theme('colors.brand.500'),
            '--tw-prose-hr': theme('colors.slate.100'),
            '--tw-prose-quotes': theme('colors.slate.900'),
            '--tw-prose-quote-borders': theme('colors.brand.500'),
            '--tw-prose-captions': theme('colors.slate.400'),
            '--tw-prose-code': theme('colors.slate.900'),
            '--tw-prose-pre-code': theme('colors.slate.100'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.200'),
            '--tw-prose-td-borders': theme('colors.slate.100'),
          },
        },
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.800'),
            fontSize: theme('fontSize.body-lg[0]'),
            lineHeight: '1.6',
            fontFamily: theme('fontFamily.sans').join(', '),
            a: {
              color: theme('colors.brand.600'),
              fontWeight: '700',
              textDecoration: 'underline',
              textDecorationColor: theme('colors.brand.100'),
              textUnderlineOffset: '4px',
              transition: 'all 0.2s',
              '&:hover': {
                color: theme('colors.brand.700'),
                textDecorationColor: theme('colors.brand.500'),
              },
            },
            h1: { fontWeight: '700', marginBottom: '0.75rem', letterSpacing: theme('fontSize.h1[1].letterSpacing') },
            h2: { fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem', letterSpacing: theme('fontSize.h2[1].letterSpacing') },
            h3: { fontWeight: '700', marginTop: '1.25rem', marginBottom: '0.4rem', letterSpacing: theme('fontSize.h3[1].letterSpacing') },
            p: { marginBottom: '0.75rem', lineHeight: '1.6' },
            li: { marginTop: '0.2rem', marginBottom: '0.2rem' },
            strong: { fontWeight: '700', color: theme('colors.slate.900') },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.brand.500'),
              backgroundColor: theme('colors.slate.50'),
              paddingTop: theme('spacing.3'),
              paddingBottom: theme('spacing.3'),
              paddingLeft: theme('spacing.6'),
              paddingRight: theme('spacing.6'),
              borderRadius: '0 16px 16px 0',
              fontStyle: 'italic',
              color: theme('colors.slate.800'),
            },
            code: {
              backgroundColor: theme('colors.slate.100'),
              padding: '2px 6px',
              borderRadius: '6px',
              fontWeight: '600',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;


// ═══════════════════════════════════════════════════════════════
// USAGE REFERENCE — Copy-paste ready patterns
// ═══════════════════════════════════════════════════════════════
//
// ── DISPLAY HEADLINE (hero only, one per page) ──────────────
//   <span
//     className="text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl
//                font-bold leading-[1.1] tracking-tighter
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
