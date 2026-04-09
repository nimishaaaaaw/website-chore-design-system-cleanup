---
description: Forensic synchronization of a single website section with the MediKloud Gold Standard
---

# Workflow: MediKloud Gold Standard Forensic synchronization

Use this workflow to refactor any existing website section into a "Gold Standard" high-fidelity component. This involves codifying design tokens into a semantic architecture and ensuring typographic, layout, and atmospheric fidelity.

## Phase 0: Initialization
1. **Target Selection**: Ask the USER which specific page and component/section should be synchronized.
2. **Constraint Confirmation**: Confirm that the synchronization should proceed "one section at a time" and whether the Hero section should be excluded.
3. **Wait for Approval**: Do not proceed to Phase 1 until the USER defines the target.

## Phase 1: Forensic Audit & Research
1. **Identify Legacy Patterns**: Search for ad-hoc styles in the target section, including:
    - Manual line breaks (`<br />`) in headlines.
    - Hardcoded hex colors (e.g., `#0B1120`, `#F8FAFC`).
    - Inconsistent font weights (e.g., `font-black` (900) where `font-bold` (700) is now standard).
    - Non-standard border radiuses.
2. **Contextual Mapping**: Identify which "Atmospheric Primitives" (Light vs. Dark) should be applied based on the section's background.

## Phase 2: Implementation of Gold Primitives

### 1. Geometric & Layout Parity (Constraints)
- **Header Lock**: Apply `.header-lock` (**900px**) to all section H2s and eyebrow wrappers.
- **Intro Lock**: Apply `.intro-lock` (**800px**) to lead-in paragraphs to ensure readable line lengths.
- **Grid Lock**: Wrap multi-card grids in **`.max-w-6xl`** (**1152px**) for consistent horizontal alignment.
- **Macro-Rhythm**: Use **`lg:space-y-breathing`** (**128px**) vertical spacing between major feature blocks within a section.
- **Corners**: Standardize major containers to **`rounded-[2.5rem]`** and smaller cards to **`rounded-[2rem]`**.

### 2. Atmospheric Injection
- **Tech Grid**: Inject `<div className="tech-grid-overlay !opacity-[0.03]" />` for dark sections or subtle texture on light ones.
- **Noise Texture**: Add the signature forensic grain: `<div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />`.
- **Z-Index Health**: Always ensure background textures/blobs are at the base, and use **`group-hover:z-20`** on animated cards to prevent shadow clipping during hover.

### 3. Typographic Calibration
- **Headers**: Use `.premium-h2` (Display) and `.premium-h3` (Feature). 
    - **Branding**: Highlight key terms in section headers using `<span className="text-indigo-600">...</span>` for medical brand emphasis.
- **Balancing**: Use `<br className="hidden md:block" />` strategically within the 900px lock for headline balancing.
- **Weights**: Downgrade secondary headers and metrics to **`font-bold` (700)**. Use **`.stat-number`** for all numerical indicators.
- **Metric Hierarchy**: 
    - **Primary Section Stats**: Use **`text-2xl` to `text-4xl`** for high-impact section headers or hero blocks. (Avoid `6xl+`).
    - **Sub-module Status Values**: Use **`text-sm` to `text-lg`** for supporting status UI (e.g., margins, counts, status indicators) to maintain visual breathing room.
- **Body & Lists**: Use `.premium-p`. Calibrate feature list items to **`text-sm font-medium text-slate-600`**.
- **Icons**: Strictly enforce **`strokeWidth={1.5}`** for all Lucide assets.

### 4. Engineering & Motion Tokens
- **Viewport Standard**: Apply `viewport={{ once: true, margin: "-100px" }}` to all `whileInView` triggers.
- **Motion Curve**: Enforce the **`premiumEase`** curve: `[0.16, 1, 0.3, 1]`.
- **Shadow Physics**: Use **`shadow-card-lg`** for static elevated blocks and **`shadow-glow`** for interactive brand surfaces.
- **Token Mapping**: Replace all hardcoded hex values with semantic Tailwind classes (e.g. `slate-900`, `brand-indigo-600`).

---

## Phase 3: Final Certification & Walkthrough
1. **Visual Audit**: Compare the refactored section side-by-side with an already certified page (e.g. Managed Pharmacy).
2. **Component Cleanup**: Remove unused imports or legacy variants (e.g., old `fadeInUp` variables) in favor of inline standard motion props.
3. **Walkthrough**: Document the specific "Forensic Changes" made to provide clarity to the USER.

## Phase 4: Workflow Evolution
1. **Feedback Integration**: If the USER suggests novel design solutions, corrective points, or identifies new "problems," these MUST be integrated back into this master workflow immediately.
2. **Standardization**: Ensure all future synchronizations adhere to the updated rules (e.g., heading highlights, metric scaling) to prevent regression.
