# Hardcoded Values to Semantic Token Mapping

Scope: authored files only. Generated/dependency folders (`node_modules`, `.next`, `package-lock.json`) are excluded.

Use CSS variables from `app/globals.css` when the value must remain inline/SVG/canvas. Use Tailwind utilities from `tailwind.config.ts` in JSX class names.

## app/products/hospital-management-system/page.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `https://schema.org` | 23, 55 | Not a design token. Prefer shared SEO/schema constant if repeated. | N/A |
| `https://www.medikloud.com` | 69 | `siteConfig.url` from `lib/seo.ts`, not CSS/Tailwind. | Exact source exists |
| `text-1-75rem sm:text-2rem md:text-2-25rem lg:text-2-5rem xl:text-2-75rem` | 80, 83 | `text-display` component utility or `text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl` | Nearest semantic |
| `leading-[1.3]` | 80, 83 | Prefer `.display-headline` / `.text-display`; otherwise `leading-tight` | Nearest semantic |
| `style={{ color: '#4F46E5' }}` | 83 | `style={{ color: 'var(--indigo-600)' }}` or rely on `.display-headline` fallback color | Exact |
| `text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem]` | 88 | `hero-subtitle` / `text-body-lg` depending intended hierarchy | Nearest semantic |
| `max-w-[700px]` | 94 | `max-w-intro-lock` (`800px`) or add a new token if 700px must remain | Nearest |
| `w-500px h-500px` | 104 | Already tokenized in Tailwind spacing as `w-500px h-500px` | Exact |
| `blur-[120px]` | 104 | Existing `.blob-blue` uses `blur(60px)`; no 120px token exists | Nearest |
| `w-600px h-600px` | 105 | Already tokenized in Tailwind spacing as `w-600px h-600px` | Exact |
| `blur-[150px]` | 105 | Existing `.blob-indigo` uses `blur(60px)`; no 150px token exists | Nearest |

## components/pages/products/hospital-management-system/HMSHero.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `min-h-[90vh]` | 29 | No semantic viewport-height token exists | Nearest: keep or add token |
| `pt-[75px]` | 29 | `pt-20` (`80px`) or spacing token needed for 75px | Nearest |
| `top-[10%] left-[15%]` | 33 | Blob placement has no token; use `.blob-layer .blob-blue` plus local placement | Nearest |
| `blur-[60px]` | 33, 34 | `.blob-blue` / `.blob-indigo` classes use `filter: blur(60px)` | Exact |
| `bottom-[20%] right-[10%]` | 34 | Blob placement has no token; use `.blob-layer .blob-indigo` plus local placement | Nearest |
| `lg:w-[700px]` | 71 | `max-w-intro-lock` (`800px`) is semantic but not exact width | Nearest |
| `rounded-[3rem]` | 93 | `rounded-3xl` is available (`24px`), no 48px radius token exists | Nearest |
| `rounded-[2.5rem]` | 95 | `rounded-3xl` (`24px`) is nearest existing semantic radius | Nearest |
| `shadow-[0_8px_32px_-8px_rgba(79,70,229,0.20)]` | 95 | `shadow-card-lg` / `--shadow-card-lg` | Exact |
| `text-[#8696a0]` | 105 | `text-muted` semantic variable or `text-slate-400` | Nearest |
| `bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]` | 121 | `colors.slate.300` for `#cbd5e1`; no named radial grid utility exists | Exact color, nearest pattern |
| `stroke="#cbd5e1"` | 125 | `var(--border-default)` is nearest semantic; `slate.300` is exact Tailwind color | Exact Tailwind / nearest semantic |
| `stopColor="#3b82f6"` | 136 | `var(--brand-500)` / `theme(colors.brand.500)` | Exact |
| `stopColor="#6366f1"` | 137 | `var(--indigo-600)` / `theme(colors.brand.indigo-600)` | Nearest |
| `stopColor="#8b5cf6"` | 138 | `var(--violet-600)` | Nearest |
| `shadow-[0_0_15px_rgba(79,70,229,0.3)]` | 147 | `shadow-glow-indigo` or `--shadow-glow` | Nearest |
| `style={{ left: node.x, top: node.y }}` | 153 | Dynamic layout, not tokenizable. Keep inline style. | N/A |
| `text-[8px]` | 157 | No semantic font token for 8px; nearest `text-9px` or semantic `text-xs` (`11px`) | Nearest |
| `shadow-[0_4px_10px_rgba(0,0,0,0.15)]` | 173 | `shadow-card` is nearest; no black token shadow exists | Nearest |
| `style={{ left: tooltip.x, top: tooltip.y }}` | 191 | Dynamic layout, not tokenizable. Keep inline style. | N/A |

## Product hero page duplicates

| Component | Existing issue | Position | Proposed semantic token / utility | Match |
|---|---|---:|---|---|
| `app/products/virtual-pharmacy/page.tsx` | `bg-[#FDFDFF]` | 39 | `bg-section-surface` / `var(--bg-surface)` or `bg-section-alt` | Nearest |
| `app/products/virtual-pharmacy/page.tsx` | `style={{ color: '#4F46E5' }}` | 80 | `style={{ color: 'var(--indigo-600)' }}` / `.display-headline` | Exact |
| `app/products/managed-pharmacy/page.tsx` | `style={{ color: '#4F46E5' }}` | 78 | `style={{ color: 'var(--indigo-600)' }}` / `.display-headline` | Exact |
| `app/products/medicine-deliveries/page.tsx` | `style={{ color: '#4F46E5' }}` | 81 | `style={{ color: 'var(--indigo-600)' }}` / `.display-headline` | Exact |
| `app/solutions/with-pharmacy/page.tsx` | `style={{ color: '#4F46E5' }}` | 72 | `style={{ color: 'var(--indigo-600)' }}` / `.display-headline` | Exact |
| `app/solutions/without-pharmacy/page.tsx` | `style={{ color: '#4F46E5' }}` | 72 | `style={{ color: 'var(--indigo-600)' }}` / `.display-headline` | Exact |

## components/pages/solutions/hospital-pharmacy/WhatsAppMockup.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `bg-[#f0f2f5]` | 47 | `var(--bg-surface-alt)` / `bg-slate-50` | Nearest |
| `style={{ fontFamily: ... }}` | 47 | Existing `font-sans` is Poppins; WhatsApp mimic uses system font, so keep local if intentional | N/A |
| `bg-[#008069]`, `text-[#008069]` | 54, 58, 90, 143, 153 | `var(--success)` / `text-success` / `bg-success` if semantic positive action | Nearest |
| `bg-[#efeae2]` | 70 | `var(--bg-surface-alt)` is nearest; no warm chat-bg token exists | Nearest |
| `style={{ backgroundImage: 'radial-gradient(#000000...)' }}` | 72 | Existing `bg-tech-grid` pattern is nearest, but color differs | Nearest |
| `text-[#667781]` | 76, 94, 127, 150, 169, 189, 211 | `var(--text-muted)` / `text-slate-400` | Nearest |
| `text-[#111b21]` | 89, 125, 142, 152, 188 | `var(--text-primary)` / `text-slate-900` | Nearest |
| `text-[#0685fa]` | 99, 109, 164, 165 | `var(--brand-600)` / `text-brand-600` | Nearest |
| `bg-[#dcf8c6]` | 120, 123 | `var(--success-light)` / `bg-success-light` | Nearest |
| `text-[#53bdeb]` | 128 | `var(--brand-500)` / `text-brand-500` | Nearest |
| `style={{ clipPath: ... }}` | 86, 123, 140, 180, 200 | Shape geometry, not tokenizable. Keep inline or extract class. | N/A |

## components/pages/solutions/clinic-without-pharmacy/ClinicHowItWorks.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `bg-[#0B141A]` | 47 | `var(--bg-dark-start)` / `bg-brand-900` | Nearest |
| `bg-[#202C33]` | 51, 72, 138 | `var(--text-heading)` / `bg-slate-800` | Nearest |
| `bg-[#2A3942]` | 139 | `var(--text-secondary)` / `bg-slate-700` | Nearest |
| `backgroundColor: "#F8FAFC"` | 228 | `var(--bg-surface-alt)` / `bg-slate-50` | Exact |
| `backgroundColor: "#EEF2FF"` | 228 | `var(--bg-tinted-indigo)` / `bg-brand-indigo-50` | Exact |
| `backgroundColor: "#10B981"` | 228 | `var(--success)` / `bg-success` is nearest (`#059669`) | Nearest |
| `borderColor: "#F1F5F9"` | 229 | `var(--border-muted)` / `border-slate-100` | Exact |
| `borderColor: "#E0E7FF"` | 229 | `var(--indigo-100)` / `border-brand-indigo-100` | Exact |
| `borderColor: "#10B981"` | 229 | `var(--success)` / `border-success` is nearest (`#059669`) | Nearest |
| `stroke="#3b82f6"` | 298 | `var(--brand-500)` / `stroke-brand-500` | Exact |
| conic gradient rgba blues | 269 | No matching tokenized conic gradient exists | Nearest |
| dynamic ring sizes | 272 | Use existing spacing where possible; dynamic sizing is acceptable inline | N/A |

## components/pages/solutions/clinic-without-pharmacy/StorytellingStyles.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `#4F46E5` | 24, 27 | `var(--indigo-600)` | Exact |
| `#3B82F6` | 25, 57 | `var(--brand-500)` | Exact |
| `#10B981` | 26 | `var(--success)` is nearest (`#059669`) | Nearest |
| `#22d3ee` | 57 | `var(--gradient-accent)` contains `#06B6D4`; nearest accent cyan | Nearest |
| `linear-gradient(to right, #22d3ee, #3B82F6, #4F46E5)` | 57 | `var(--gradient-accent)` or `var(--gradient-action)` depending intent | Nearest |

## components/pages/products/managed-pharmacy/MPv2ProblemStack.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `bg-[#080a10]` | 85, 119, 159 | `var(--bg-dark-start)` / `bg-brand-900` | Nearest |
| `rounded-[2.5rem]` | 65, 99, 139, 181 | `rounded-3xl` (`24px`) | Nearest |
| `shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.8)]` | 65, 99, 139, 181 | No black/depth shadow token; nearest `shadow-card-lg` or add dark-surface shadow token | Nearest |
| `top-[8vh]`, `top-[32vh]`, `top-[35vh]`, `top-[38vh]`, `top-[41vh]` | 37, 59, 93, 133, 175 | No semantic sticky-position tokens exist | Nearest: keep or add component tokens |

## components/pages/home/AdvantageSection.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `hex: '#2563eb'` | 114 | `var(--brand-600)` / `theme(colors.brand.600)` | Exact |
| `hex: '#059669'` | 122 | `var(--success)` / `theme(colors.success.DEFAULT)` | Exact |
| `hex: '#4f46e5'` | 130 | `var(--indigo-600)` / `theme(colors.brand.indigo-600)` | Exact |
| `hex: '#7c3aed'` | 138 | `var(--violet-600)` | Exact |
| `themeHexes = [...]` duplicate | 270 | Derive from theme map or CSS vars instead of repeated hex list | Exact tokens exist |
| `"#cbd5e1"` | 288 | `theme(colors.slate.300)`; nearest semantic `var(--border-default)` | Exact Tailwind / nearest semantic |
| `style={{ backgroundColor: ... }}` | 278, 288 | Use CSS vars or set classes from theme map; inline acceptable only for dynamic active color | Exact tokens exist |

## components/shared/HeroIcons.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| skin tone array `#a67b5b`, `#8e5a3d`, `#714022`, `#c19375` | 5 | No global skin-tone tokens exist; keep local to avatar illustration or add avatar tokens | N/A |
| `hairColor = "#111827"` | 7 | `var(--text-primary)` / `#0F172A` | Nearest |
| `fill="#1e293b"` | 11 | `var(--text-heading)` / `text-slate-800` | Exact |
| `#ec4899` | 12 | No semantic pink token exists; nearest metric/violet is not exact | Nearest |
| `#3b82f6` | 12 | `var(--brand-500)` | Exact |
| `#000` opacity | 15 | No black token; nearest text-primary if semantic | Nearest |
| `#111827` strokes/fills | 19, 20, 21 | `var(--text-primary)` / `#0F172A` | Nearest |
| `#4F46E5` | 33 | `var(--indigo-600)` | Exact |
| `#fff` | 34 | `var(--text-inverse)` / `var(--bg-surface)` depending intent | Exact |
| `#0F172A` | 42, 43 | `var(--text-primary)` | Exact |

## components/pages/products/virtual-pharmacy/VPNerveCenter.tsx

| Existing issue | Position | Proposed semantic token / utility | Match |
|---|---:|---|---|
| `stroke="#3B82F6"` | 80 | `var(--brand-500)` / `stroke-brand-500` | Exact |
| `fill="#047857"` | 136 | `var(--success-dark)` is nearest (`#065F46`) | Nearest |
| `stroke="#10B981"` | 136 | `var(--success)` is nearest (`#059669`) | Nearest |
| `color="#ffffff"` | 138 | `var(--text-inverse)` | Exact |
| `border-[#0f172a]` | 160 | `border-slate-900` / `var(--text-primary)` | Exact |

## Other repeated hardcoded values

| Component | Existing issue | Position | Proposed semantic token / utility | Match |
|---|---|---:|---|---|
| `components/pages/products/managed-pharmacy/MPv2Timeline.tsx` | `processLineColor = "#4f46e5"` | 24 | `var(--indigo-600)` | Exact |
| `components/pages/products/managed-pharmacy/MPProblemGrid.tsx` | `bg-[#4E46E5]` | 275 | `bg-brand-1` / `var(--color-brand-1)` | Exact |
| `components/pages/products/virtual-pharmacy/VPProblem.tsx` | `bg-[#0B1120]` | 125 | `bg-brand-900` / `var(--bg-dark-start)` | Nearest |
| `components/pages/products/managed-pharmacy/MPHero.tsx` | `text-[#8696a0]` | 114 | `text-muted` / `text-slate-400` | Nearest |
| `components/pages/products/virtual-pharmacy/VPHero.tsx` | `text-[#8696a0]` | 151 | `text-muted` / `text-slate-400` | Nearest |
| `components/pages/products/medicine-deliveries/MedicineDeliveriesHero.tsx` | `text-[#8696a0]` | 157 | `text-muted` / `text-slate-400` | Nearest |
| `components/pages/products/virtual-pharmacy/VPCTA.tsx` | `stroke="#3b82f6"` | 171 | `var(--brand-500)` / `stroke-brand-500` | Exact |
| `components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero.tsx` | `stroke="#fca5a5"` | 136 | danger light/danger tokens are nearest but not exact | Nearest |
| `components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero.tsx` | `stroke="#6366f1"` | 138 | `var(--indigo-600)` | Nearest |
| `components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero.tsx` | `stroke="#4f46e5"` | 140 | `var(--indigo-600)` | Exact |
| `components/pages/solutions/hospital-pharmacy/HospitalPharmacyApproach.tsx` | `bg-[#0B1222]` | 44 | `bg-brand-900` / `var(--bg-dark-start)` | Nearest |
| `components/pages/solutions/hospital-pharmacy/HospitalPharmacyPain.tsx` | `bg-[#0B1222]/80` | 160, 208 | `bg-brand-900/80` / `var(--bg-dark-start)` | Nearest |

## External URLs and contact values

These are hardcoded, but they are not CSS/Tailwind-semantic. Move them to shared config/constants rather than design tokens.

| Component/file | Existing issue | Position | Proposed semantic source | Match |
|---|---|---:|---|---|
| `components/shared/ContactModal.tsx` | `https://formspree.io/f/xrbkovkg` | 134 | `NEXT_PUBLIC_FORMSPREE_ENDPOINT` or `lib/constants.ts` | N/A |
| `components/layout/Footer.tsx` | `mailto:hello@medikloud.com` | 110 | `siteConfig.email` | N/A |
| `components/layout/Footer.tsx` | `tel:+917702670993` | 112 | `siteConfig.phone` | N/A |
| `components/layout/Footer.tsx` | LinkedIn/X URLs | 116, 121 | `siteConfig.social.linkedin`, `siteConfig.social.x` | N/A |
| `app/terms-of-service/page.tsx` | repeated email/site URL | 67, 75, 222, 258, 510 | `siteConfig.url`, `siteConfig.email` | N/A |
| `app/privacy-policy/page.tsx` | site/email/payment/analytics URLs | 75, 98, 194, 406 | `siteConfig` plus policy constants | N/A |
| `app/return-policy/page.tsx` | repeated email | 71, 110 | `siteConfig.email` | N/A |
