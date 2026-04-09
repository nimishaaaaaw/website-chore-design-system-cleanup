# MediKloud "Non-Hero" Gold Standard — Design & Engineering Tokens

This document codifies the forensic architectural standards for all **Non-Hero** components. These tokens have been integrated into the **Tailwind Config** and **Global CSS** for semantic usage.

## 1. Semantic Typographic Components
| Element | CSS Component Class | Role |
| :--- | :--- | :--- |
| **Master Headline** | `.premium-h2` | Major section headers (`text-5xl`). |
| **Feature Headline** | `.premium-h3` | Feature card/row titles (`text-3xl`). |
| **Detail Paragraph** | `.premium-p` | Supporting narrative text (`text-base`). |

### **Color Architecture**
- **Variables**: Use `var(--indigo-600)` for primary brand accents and `var(--blue-600)` for secondary interactions.
- **Rhythm**: Use `<br className="hidden md:block" />` for visual line balancing in headlines.

---

## 2. Geometric Core (Constraints)
| Lock Name | CSS Class | Constraint | Standard Usage |
| :--- | :--- | :--- | :--- |
| **Header Lock** | `.header-lock` | `900px` (Desktop) | Wrapping section H2s and eyebrows. |
| **Intro Lock** | `.intro-lock` | `800px` (Desktop) | Wrapping lead-in paragraphs. |
| **Grid Lock** | `.max-w-6xl` | `1152px` | Wrapping multiple feature grids. |

---

## 3. Atmospheric Patterns
- **Technological Depth**: Use `.tech-grid-overlay` for high-precision dark mode backgrounds.
- **Graphic Texture**: Use `.noise-texture` for premium film-grain blending on gradients.
- **Premium Breathing**: Use `space-y-24 lg:space-y-breathing` (128px) between major feature blocks.

---

## 4. Engineering & Motion Tokens
- **Icon Weight**: Strictly use **`strokeWidth={1.5}`** for all Lucide assets.
- **Motion Curve**: use the **`premium`** timing function: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Scroll Margin**: Standardize `viewport={{ once: true, margin: "-100px" }}` for all reveal animations.
- **Hover Depth**: Use `group-hover:z-20` on stacked cards to ensure hover shadow bleed.
