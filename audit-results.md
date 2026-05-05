# Design System Token Audit

This audit tracks the usage of design tokens defined in `tailwind.config.ts` and `app/globals.css` across the `app` and `components` directories. It helps identify hardcoded or arbitrary values that should be refactored into centralized tokens.

## Token Usage Table

| Design Token | Type | Usage Count | Used Where (Files) |
|---|---|---|---|
| `.container-page` | Custom Class | 11 | `app/blogs/page.tsx`<br>`components/pages/home/MainHero.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/layout/Header.tsx`<br>`components/layout/Footer.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/FulfillmentEcosystem.tsx`<br>`components/pages/home/GetStartedCTA.tsx`<br>`components/pages/home/Stats.tsx`<br>`components/pages/home/HomeFAQ.tsx` |
| `.premium-p` | Custom Class | 25 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/shared/ContactModal.tsx`<br>`components/layout/Footer.tsx`<br>`components/pages/home/HomeFAQ.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/GetStartedCTA.tsx`<br>`app/blogs/page.tsx` |
| `.premium-p--sm` | Custom Class | 15 | `components/pages/home/AdvantageSection.tsx`<br>`components/shared/ContactModal.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`components/layout/Footer.tsx` |
| `.eyebrow-wrap` | Custom Class | 6 | `components/pages/home/MainHero.tsx`<br>`components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/HomeFAQ.tsx` |
| `.eyebrow-text` | Custom Class | 10 | `components/pages/home/MainHero.tsx`<br>`components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/HomeFAQ.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx` |
| `.btn-primary` | Custom Class | 2 | `components/pages/home/GetStartedCTA.tsx`<br>`app/blogs/page.tsx` |
| `.btn-nav` | Custom Class | 2 | `components/layout/Header.tsx`<br>`components/layout/MobileMenu.tsx` |
| `.btn-lg` | Custom Class | 1 | `components/pages/home/MainHero.tsx` |
| `.card` | Custom Class | 5 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/HomeFAQ.tsx` |
| `.shadow-card` | Custom Class | 20 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`components/pages/home/FulfillmentEcosystem.tsx` |
| `.shadow-card-md` | Custom Class | 15 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`components/shared/ContactModal.tsx` |
| `.shadow-card-lg` | Custom Class | 10 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/FulfillmentEcosystem.tsx`<br>`components/pages/home/Stats.tsx` |
| `.blob-indigo` | Custom Class | 6 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`app/blogs/page.tsx` |
| `.blob-blue` | Custom Class | 5 | `components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`app/blogs/page.tsx` |
| `.blob-layer` | Custom Class | 3 | `components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx` |
| `.tech-grid-overlay` | Custom Class | 2 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/HomeFAQ.tsx` |
| `.premium-h2` | Custom Class | 6 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/FulfillmentEcosystem.tsx`<br>`components/pages/home/GetStartedCTA.tsx`<br>`components/pages/home/HomeFAQ.tsx` |
| `.premium-h3` | Custom Class | 3 | `components/pages/home/FulfillmentEcosystem.tsx` |
| `.text-h1` | Custom Class | 4 | `components/pages/home/AdvantageSection.tsx`<br>`components/shared/ContactModal.tsx`<br>`app/blogs/page.tsx` |
| `.text-h2` | Custom Class | 6 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/shared/ContactModal.tsx`<br>`app/blogs/page.tsx` |
| `.text-h3` | Custom Class | 3 | `components/pages/home/HomeFAQ.tsx`<br>`app/blogs/page.tsx` |
| `.text-h4` | Custom Class | 6 | `components/pages/home/AdvantageSection.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx` |
| `.text-h5` | Custom Class | 4 | `components/pages/home/Stats.tsx` |
| `.text-body-lg` | Custom Class | 5 | `components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/FulfillmentEcosystem.tsx`<br>`app/blogs/page.tsx` |
| `.bg-section-surface` | Custom Class | 3 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/pages/home/MarqueeSection.tsx` |
| `.bg-section-alt` | Custom Class | 3 | `components/pages/home/AdvantageSection.tsx`<br>`components/pages/home/HomeFAQ.tsx`<br>`app/blogs/page.tsx` |
| `brand-500` | Tailwind Token | 10 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/shared/ContactModal.tsx` |
| `brand-600` | Tailwind Token | 30 | `components/pages/home/AdvantageSection.tsx`<br>`components/layout/Header.tsx`<br>`components/layout/Footer.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`app/blogs/page.tsx`<br>`components/shared/ContactModal.tsx` |
| `brand-indigo-600` | Tailwind Token | 40 | `components/pages/home/ProblemSection.tsx`<br>`components/pages/home/AdvantageSection.tsx`<br>`components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`app/blogs/page.tsx`<br>`components/shared/ContactModal.tsx` |
| `.bg-gradient-hero` | Custom Class | 1 | `components/pages/home/MainHero.tsx` |
| `.bg-gradient-display` | Custom Class | 2 | `components/shared/ContactModal.tsx` |
| `.bg-gradient-action` | Custom Class | 3 | `components/pages/home/SetupWizard.tsx`<br>`components/pages/home/HowItWorks.tsx`<br>`components/shared/ContactModal.tsx` |
| `.form-input` | Custom Class | 4 | `components/shared/ContactModal.tsx` |
| `.form-label` | Custom Class | 4 | `components/shared/ContactModal.tsx` |
| `.form-error` | Custom Class | 4 | `components/shared/ContactModal.tsx` |
| `.form-icon` | Custom Class | 4 | `components/shared/ContactModal.tsx` |
| `.badge` | Custom Class | 3 | `components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx`<br>`app/blogs/page.tsx` |
| `.badge-brand` | Custom Class | 2 | `components/layout/ProductsMegaMenu.tsx`<br>`components/layout/SolutionsMegaMenu.tsx` |
| `.badge-indigo` | Custom Class | 1 | `components/layout/SolutionsMegaMenu.tsx` |

## Unused Tokens

The following tokens are defined in your `tailwind.config.ts` or `globals.css` but are currently **NOT USED** in any analyzed `.tsx` files. You can safely remove these or consider utilizing them to replace arbitrary values.

| Design Token | Type |
|---|---|
| `--gradient-violet` | CSS Variable |
| `--gradient-accent` | CSS Variable |
| `--gradient-dark` | CSS Variable |
| `--success-dark` | CSS Variable |
| `--danger-dark` | CSS Variable |
| `.blob-glow-blue` | Custom Class |
| `.btn-secondary` | Custom Class |
| `.btn-ghost` | Custom Class |
| `.btn-cta-dark` | Custom Class |
| `.card-tinted` | Custom Class |
| `.card-glass` | Custom Class |
| `.card-dark--flush` | Custom Class |
| `.card-dark--solid` | Custom Class |
| `.badge-violet` | Custom Class |
| `.badge-success` | Custom Class |
| `.badge-danger` | Custom Class |
| `.badge-metric` | Custom Class |
| `.badge-slate` | Custom Class |
| `.trust-chip` | Custom Class |
| `.trust-chip-dot` | Custom Class |
| `.trust-chip-text` | Custom Class |
| `.nav-link--flush` | Custom Class |
| `.section-divider` | Custom Class |
| `.noise-texture` | Custom Class |
| `danger-text` | Tailwind Token |
| `metric-text` | Tailwind Token |
| `card-md` | Tailwind Token |
| `card-lg` | Tailwind Token |
| `glow` | Tailwind Token |
| `glow-indigo` | Tailwind Token |
| `gradient-dark-alt` | Tailwind Token |
| `tech-grid` | Tailwind Token |
| `marquee` | Tailwind Token |
