# MediKloud Content Guidelines (v2.1)

This document establishes the "Gold Standard" for all written communication across the MediKloud ecosystem.

---

## 1. Brand Voice: "The Strategic Ally"
We speak to **Doctors** who are also clinic owners. We never use "tech-bro" slang — we use the language of clinical excellence and operational recovery.

- **Tone**: Authoritative, Empathetic, Data-Backed, Minimalist.
- **Perspective**: Solution-oriented, never feature-first.
- **Core Narrative**: "Your practice is excellent. Your pharmacy operations should match — without draining your time or money."

---

## 2. Flexible Narrative Structure
Content structure must adapt to the page context. No rigid templates. Maintain brand voice without formulaic patterns.

---

## 3. Clarity & Accessibility (KISS: Keep It Simple, Surgeon)
- **Clinical Identity vs. Jargon**: Clinical nouns (EHR, HMS, AI Scribe, E-Rx, OPD, Dark Store) are part of a doctor's vocabulary — use them freely. Avoid dense operational jargon that even a hospital admin wouldn't recognize.
- **Plain English**: Short sentences, active voice. The value must be clear to a busy doctor in 5 seconds.
- **Readability**: Skimmable. Tight paragraphs. Bullet points where appropriate.

---

## 4. Legal Compliance & The "Fulfillment Partner" Model
We NEVER frame our partnership as a "commission" or "referral" arrangement.

### The Vocabulary Vault
| 🚫 BANNED | ✅ APPROVED |
| :--- | :--- |
| Commission, Rev-Share | Administrative Facilitation Fee |
| Referral Bonus, "Get a cut" | Flat processing fee per order |
| Percentage of sales | B2B Fulfillment Partner |
| Pharmacy kickbacks | Monetize clinic infrastructure |
| Revenue Share | Expand clinic capabilities |
| Drug License / Licensing | **[DO NOT MENTION — case-specific]** |

---

## 5. Competitor Neutrality
- **No Brand Names**: NEVER mention Apollo, 1mg, MedPlus, Tata 1mg, Pharmeasy by name — anywhere, including tooltip text, notes, or comments.
- **Known Violation**: `HomeData.ts > PROBLEM_STATS > note` currently contains competitor names. Flag and fix on first audit.
- **Standardized References**: Use **"Third-party Aggregators"**, **"Corporate Pharmacy Chains"**, or **"Online Retail Stores"** when discussing prescription leakage.

---

## 6. Site Architecture (Where Copy Lives)
- **Hero headlines, body copy, section labels**: Hardcoded directly in the `.tsx` component.
- **Stats, trust badges, shared reasons**: Stored in `HomeData.ts` — this file is imported by multiple pages, so any change here is site-wide.
- **CTA text**: Hardcoded inline in the button element itself.

---

## 7. Gold Copy — Do Not Rewrite Without Approval
These phrases already exist on the site and are strong. Preserve them:

- *"A consultation without the right medicine is an incomplete treatment."*
- *"Right now, your patient care stops at the clinic door."*
- *"You focus on patients. We handle the staff, stock, and stress."*
- *"You generate 100% of the Rx value. But capture < 50%."*
- *"The Broken Loop"* (used as an eyebrow label)

---

## 8. CTA Conventions
Two primary CTAs are currently live across the site:
- **"Book A Free Demo"** — used where the goal is broad awareness and consultation.
- **"Partner With Us"** — used where the positioning is an operational partnership.

**Banned CTA copy on site**: `"FIX THIS NOW"` (MPv2ProblemStack) — aggressive, off-brand. Replace on revamp.

**Rules**:
- Approved verbs: Book, See, Start, Get, Request, Explore.
- One primary CTA per section. Secondary CTAs must be clearly subordinate.
- Never use: Submit, Click Here, Learn More, Know More.

---

## 9. Stat Integrity
These stats are embedded in UI components. **Do not change without explicit user confirmation.**

| Stat | Location |
| :--- | :--- |
| -10% Ops Loss, -30% Walk-outs, -80% Chronic Loss | ProblemSection |
| ₹1 Lakh+ Lost Every Month | MPv2ProblemStack |
| 68% Chronic Patients Lost | MPv2ProblemStack |
| Reduced by 65% Wait Time | HMSHero |
| +₹210 Margin per order | ClinicHero |

For new copy, use `[X]%` or `[STAT]` as placeholders until the product team validates.

---

## 10. Page-Type Tone
| Page Type | Tone | Value Prop Focus |
| :--- | :--- | :--- |
| **Home** | Broad, inspirational | The whole system, simply explained |
| **Product Pages** | Precise, feature-confident | What it does and how |
| **Solutions Pages** | Empathetic, scenario-driven | We understand your specific problem |
| **CTA Sections** | Urgent, low-friction | One action, no hesitation |

---

## 11. Tone of Voice: Good vs. Bad
| ❌ Bad | ✅ Good |
| :--- | :--- |
| "Leverage our tech-driven dispensary infrastructure" | "Run your pharmacy the smart way — we handle the rest" |
| "Prescription leakage mitigation at enterprise scale" | "Stop losing patients to outside pharmacies" |
| "Optimized COGS through our supplier network" | "We negotiate medicine prices so you don't have to" |
| "Enables clinic monetization via fulfillment flows" | "Turn every prescription into revenue for your clinic" |
| "FIX THIS NOW" | "Book A Free Demo" / "Partner With Us" |

> **"Internal Bleed"**: Use only in Problem/Pain sections where we're surfacing a known pain. In lighter sections, prefer "uncaptured revenue."

---

## 12. Lexicon & Style
| Category | Use These | Avoid These |
| :--- | :--- | :--- |
| **Legal/Financial** | Facilitation Fee, B2B Fulfillment | Commission, Rev-Share, Cut |
| **Competitors** | Corporate Chains, Aggregators, Online Retail | Apollo, 1mg, MedPlus |
| **Financials** | Revenue Recovery, Uncaptured Revenue | Making more money, Profit hacking |
| **Operations** | Zero Capex, Fully Managed, Dark Store | Easy setup, cheap software |
| **Technology** | AI-Driven, E-Rx, Automated Logic | Smart tools, cool features |
| **Patients** | Chronic Care, Patient Lifetime Value (LTV) | Repeat customers, sales |
| **Licenses** | [NO MENTION] | Drug License, License management |

---

## 13. SEO & GEO
SEO and GEO are **non-negotiable requirements** on every page revamp, not afterthoughts.

Full rules, keyword lists, and FAQ standards live in:
**[`seo-geo-playbook.md`](./seo-geo-playbook.md)** — read it before revamping any page.

Summary of mandatory deliverables per page:
- Meta Title (≤60 chars, primary keyword included)
- Meta Description (≤155 chars)
- Minimum 4-question FAQ section (visible on page, GEO-optimized answers)
- Primary keyword must appear naturally in H1 and body copy
- At least 2 internal links to other MediKloud pages

### On Existing FAQ Components
Several pages already have FAQ sections (`HMSFAQ.tsx`, `VPFAQ.tsx`, `MedicineDeliveriesFAQ.tsx`, etc.). When revamping a page that has an existing FAQ:
1. Audit the existing questions first — are they what a doctor actually searches?
2. Audit the answers — are they direct, factual, 40–80 words? Free of marketing tone?
3. Improve the existing FAQ in place. Do not replace it wholesale unless the questions are fundamentally wrong.

### On the `sr-only` SEO Pattern
`MainHero.tsx` uses a `<p className="sr-only">` block to embed long-tail keywords invisibly. This pattern is **not recommended for new copy**. Google is aware of and may discount invisible text. Preferred approach: embed keywords naturally within visible page copy (H2s, body, FAQs). If the sr-only block conflicts with visible copy keywords during a revamp, flag it as a dev task for removal.

---

## 14. Accessibility (a11y)
- All images must have descriptive `alt` text.
- Buttons must be self-describing via `aria-label`.
- Icon-only elements must have an `aria-label` or a visually-hidden label.

---

## 15. Content Freeze Rule
Once a page is **Certified**, its core copy is frozen. No changes without re-running the Content Harmonization Skill. Mark certified pages in the inventory as `✅ Certified`.
