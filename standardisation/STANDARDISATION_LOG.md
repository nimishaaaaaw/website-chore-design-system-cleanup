# MediKloud Design Token Standardization Log

This log tracks the progress of replacing hard-coded styles (hex colors, custom spacing, etc.) with standardized design tokens across the website.

## Status Legend
- `[ ]` To-Do (Hard-coding present)
- `[/]` In-Progress (Currently being refactored)
- `[x]` Standardized (Zero hard-coding, uses tokens)

## 1. Home Page
| Section/Component | File Path | Status | Feedback/Notes |
| :--- | :--- | :---: | :--- |
| **Main Hero** | `components/pages/home/MainHero.tsx` | `[x]` | Refactored to use display scales, brand gradients, and float animations. |
| **Marquee** | `components/pages/home/MarqueeSection.tsx` | `[x]` | Standardized shadows, spacing, and typography. |
| **Problem** | `components/pages/home/ProblemSection.tsx` | `[x]` | Standardized typography, pipeline colors, and 3D funnel. |
| **Fulfillment Ecosystem** | `components/pages/home/FulfillmentEcosystem.tsx` | `[x]` | Refactored dark-theme tokens, spacing, and luxury typography. |
| **Advantage** | `components/pages/home/AdvantageSection.tsx` | `[ ]` | |
| **Stats** | `components/pages/home/Stats.tsx` | `[ ]` | |
| **Setup Wizard** | `components/pages/home/SetupWizard.tsx` | `[ ]` | |
| **Get Started CTA** | `components/pages/home/GetStartedCTA.tsx` | `[ ]` | |

## 2. Products
### Managed Pharmacy
| Component | File Path | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Hero** | `components/pages/products/managed-pharmacy/MPHero.tsx` | `[ ]` | |
| **Pain Points** | `components/pages/products/managed-pharmacy/MPPainPoints.tsx` | `[ ]` | |
| **Solution** | `components/pages/products/managed-pharmacy/MPSolution.tsx` | `[ ]` | |
| **CTA** | `components/pages/products/managed-pharmacy/MPCTA.tsx` | `[ ]` | |

### Hospital Management System
| Component | File Path | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Hero** | `components/pages/products/hospital-management-system/HMSHero.tsx` | `[ ]` | |
| **Features** | `components/pages/products/hospital-management-system/HMSFeatures.tsx` | `[ ]` | |

### Virtual Pharmacy
| Component | File Path | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Hero** | `components/pages/products/virtual-pharmacy/VPHero.tsx` | `[ ]` | |
| **Problem** | `components/pages/products/virtual-pharmacy/VPProblem.tsx` | `[ ]` | |

### Medicine Deliveries
| Component | File Path | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Hero** | `components/pages/products/medicine-deliveries/MDHero.tsx` | `[ ]` | |

## 3. Solutions
| Page / Section | Status | Notes |
| :--- | :---: | :--- |
| **Clinic with Pharmacy** | `[ ]` | |
| **Clinic without Pharmacy** | `[ ]` | |
| **Hospital Pharmacy** | `[ ]` | |
| **Hospital without Pharmacy** | `[ ]` | |

---

## Standardization Rules & Checklist
1. **Colors**: **ZERO** hex codes inside components. Use `text-brand-indigo-600`, `bg-slate-50`, etc.
2. **Typography**: Use semantic classes: `.premium-h2`, `.premium-p`, `.stat-number`.
3. **Spacing**: Avoid `mt-[23px]`. Use Tailwind scale (`mt-6`, `space-y-12`) or named spacing (`py-section`).
4. **SVGs**: Use `var(--indigo-600)` for fills/strokes. Avoid matching hex codes to the theme manually.
5. **Animations**: Use `premiumEase` and standardized `viewport` settings.
