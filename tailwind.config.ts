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

  // ─────────────────────────────────────────────────────────
  // SAFELIST
  // This protects dynamic classes that might be generated via 
  // template literals (e.g., `text-${status}-text`).
  // ─────────────────────────────────────────────────────────
  safelist: [
    {
      // Protects dynamic semantic colors: success, danger, metric
      pattern: /^(bg|text|border)-(success|danger|metric)(-(light|dark|text))?$/,
    },
    {
      // Protects brand tints used in hero blobs or dynamic badges
      pattern: /^(bg|text|border)-brand-(indigo|violet)?-?\d+$/,
    },
  ],

  theme: {
    extend: {

      // ─────────────────────────────────────────────────────────
      // FONT FAMILY
      // ─────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Poppins', 'Poppins Fallback', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      // ─────────────────────────────────────────────────────────
      // FONT SIZE — 8 steps, all named semantically
      // ─────────────────────────────────────────────────────────
      fontSize: {
        'xxxs':     ['9px', { lineHeight: '12px',  letterSpacing: '0.01em' }],
        'xxs':      ['10px', { lineHeight: '14px',  letterSpacing: '0.01em' }],
        'xs':       ['11px', { lineHeight: '16px',  letterSpacing: '0.01em' }],
        'sm':       ['12px', { lineHeight: '18px',  letterSpacing: '0' }],
        'base':     ['15px', { lineHeight: '24px',  letterSpacing: '0' }],
        'body-lg':  ['17px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h6':       ['24px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h4':       ['16px', { lineHeight: '24px',  letterSpacing: '0' }],
        'h3':       ['19px', { lineHeight: '28px',  letterSpacing: '-0.01em' }],
        'h5':       ['20px', { lineHeight: '28px',  letterSpacing: '0' }],
        'h2':       ['28px', { lineHeight: '36px',  letterSpacing: '-0.02em' }],
        'h1':       ['40px', { lineHeight: '48px',  letterSpacing: '-0.025em' }],
        'display':  ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
        'display-sm':  ['32px', { lineHeight: '36px',  letterSpacing: '-0.025em' }],
        'display-md':  ['44px', { lineHeight: '50px',  letterSpacing: '-0.028em' }],
        'display-lg':  ['52px', { lineHeight: '58px',  letterSpacing: '-0.03em' }],
        'display-xl':  ['60px', { lineHeight: '66px',  letterSpacing: '-0.03em' }],
        '1-75rem': '1.75rem',
        '2rem': '2rem',
        '2-25rem': '2.25rem',
        '2-5rem': '2.5rem',
        '2-75rem': '2.75rem',
      },

      // ─────────────────────────────────────────────────────────
      // COLORS
      // ─────────────────────────────────────────────────────────
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          'indigo-50':  '#EEF2FF',
          'indigo-100': '#E0E7FF',
          'indigo-200': '#C7D2FE',
          'violet-100': '#EDE9FE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          'indigo-600': '#4F46E5',
          'indigo-700': '#4338CA',
          900: '#1E1B4B',
        },
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: {
          DEFAULT: '#059669',
          light:   '#D1FAE5',
          dark:    '#065F46',
          text:    '#065F46',
        },
        danger: {
          DEFAULT: '#E11D48',
          light:   '#FFE4E6',
          dark:    '#9F1239',
          text:    '#9F1239',
        },
        metric: {
          DEFAULT: '#7C3AED',
          light:   '#EDE9FE',
          dark:    '#4C1D95',
          text:    '#4C1D95',
        },
        'brand-1': 'var(--color-brand-1)',
        'brand-2': 'var(--color-brand-2)',
      },

      // ─────────────────────────────────────────────────────────
      // BORDER RADIUS & WIDTH
      // ─────────────────────────────────────────────────────────
      borderRadius: {
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'xl':   '16px',
        '2xl':  '20px',
        '3xl':  '24px',
        'full': '9999px',
      },

      borderWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '1.5': '1.5px',
      },

      // ─────────────────────────────────────────────────────────
      // BOX SHADOW
      // ─────────────────────────────────────────────────────────
      boxShadow: {
        'card':    '0 1px 3px 0 rgba(15,23,42,0.06), 0 1px 2px -1px rgba(15,23,42,0.04)',
        'card-md': '0 4px 20px -4px rgba(79,70,229,0.12)',
        'card-lg': '0 8px 32px -8px rgba(79,70,229,0.20)',
        'btn':     '0 4px 14px -2px rgba(79,70,229,0.35)',
        'float':   '0 8px 32px -4px rgba(79,70,229,0.18), 0 2px 8px -2px rgba(15,23,42,0.08)',
        'glow':    '0 0 40px -8px rgba(79,70,229,0.40)',
        'glow-indigo': '0 0 12px 2px rgba(79, 70, 229, 0.40)',
        'none':    'none',
      },

      // ─────────────────────────────────────────────────────────
      // SPACING
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
        'section-sm':  '48px',
        'section':     '80px',
        'section-lg':  '112px',
        'breathing':   '128px',
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

      maxWidth: {
        'container': '1280px',
        'header-lock': '900px',
        'intro-lock':  '800px',
        'hero-subtitle': '1100px',
      },

      // ─────────────────────────────────────────────────────────
      // BACKGROUND IMAGE
      // ─────────────────────────────────────────────────────────
      backgroundImage: {
        'gradient-display': 'linear-gradient(to right, #1D4ED8, #4F46E5, #7C3AED)',
        'gradient-action': 'linear-gradient(to right, #2563EB, #4F46E5)',
        'gradient-hero': 'linear-gradient(to bottom, #F8FAFC, rgba(239,246,255,0.5), #FFFFFF)',
        'gradient-dark': 'linear-gradient(135deg, #1E1B4B, #1E3A8A)',
        'gradient-dark-alt': 'linear-gradient(to bottom right, #0F172A, #1E1B4B)',
        'tech-grid': 'linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)',
      },

      // ─────────────────────────────────────────────────────────
      // ANIMATIONS
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

      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },

      // ─────────────────────────────────────────────────────────
      // TYPOGRAPHY (prose)
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