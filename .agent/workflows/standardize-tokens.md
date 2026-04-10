---
description: Iterative standardization of design tokens (replacing hard-coding with Global CSS/Tailwind)
---

# Workflow: MediKloud Design Token Standardization

Use this workflow to systematically replace hard-coded styles with standardized design tokens. This process ensures high-fidelity consistency and makes the site easily themeable.

## Phase 0: Target Selection
1. **Log Check**: Open `standardisation/STANDARDISATION_LOG.md`.
2. **Next Item**: Identify the next component marked `[ ]` (To-Do).
3. **Confirmation**: Ask the USER: "I am ready to standardize `[Component Name]`. Should I proceed?"

## Phase 1: Forensic Audit (One Component Only)
1. **Search for "Debt"**: Identify any of the following in the target component:
    - Hardcoded hex colors (e.g., `#FFFFFF`, `#4F46E5`).
    - Random pixel heights/widths/spacing (e.g., `h-[400px]`, `mt-[23px]`).
    - Non-standard fonts or weights.
    - Custom gradients not defined in `tailwind.config.ts`.
2. **SVG Inspection**: Check SVGs for hard-coded fills/strokes that should use brand tokens.

## Phase 2: Token Mapping & Proposal
1. **Mapping**: Propose replacements using:
    - **Global CSS**: `.premium-h2`, `.premium-p`, `.header-lock`, `.btn-primary`.
    - **Tailwind Config**: `text-brand-indigo-600`, `bg-slate-50`, `rounded-3xl`.
    - **CSS Variables**: `var(--indigo-600)`, `var(--gradient-action)`.
2. **Reference Validation**: For each proposed token, provide at least one reference file where it is ALREADY used in the project. This allows the user to visually confirm the standard.
3. **Proposal**: Present the "Before" vs. "After" mapping along with the **Evidence/References**.

## Phase 3: Iterative Implementation
1. **Single-File Edit**: Update ONLY the target component.
2. **Zero-Latency Visuals**: Ensure no layout shifts or flickering occurs.
3. **Wait for Approval**: Do NOT move to the next component until the USER says "Proceed to next".

## Phase 4: Finalization & Logging
1. **Update Log**: Change the status of the component to `[x]` in `standardisation/STANDARDISATION_LOG.md`.
2. **Verify**: Ensure the component still renders correctly in a development environment.
3. **Feedback Loop**: If the user provides feedback (e.g., "This color looks too dark"), update the `MediKloud_NonHero_Gold_Standard.md` and the current component immediately.

## Phase 5: Transition
1. Repeat Phase 0 for the next component.
---

// turbo-all
// The following steps should be run automatically by the agent once approved.
