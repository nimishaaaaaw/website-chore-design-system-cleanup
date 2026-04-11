---
description: Orchestration of a site-wide content revamp, focusing on Doctors and flexible storytelling.
---

# Workflow: MediKloud Content Revamp Orchestration

Use this workflow to systematically upgrade the copy of any page to the "Gold Standard" Brand Voice.

---

## Phase 0: Target Selection
1. Ask the USER which page to revamp.
2. Confirm scope: full page or specific section?
3. Reminder: audience is always **Doctors**.

---

## Phase 1: File Mapping & Audit

> [!TIP]
> **Shortcut**: Before reading any TSX file, run the [`/refresh-content`](./refresh-content.md) workflow. This ensures your snapshots are 100% in sync with the codebase. Always use the snapshot in `.agent/content-snapshot/[page-slug].md` as your authoritative source of current live content.

### 1A. File Discovery
- Read the page entry (`app/[route]/page.tsx`) to identify all sections.
- For each section, check if it uses a `*Data.ts` file.
- Check `HomeData.ts` — it is shared site-wide. Flag before making any changes to it.

### 1B. Known Violation
`HomeData.ts > PROBLEM_STATS > note` contains competitor brand names. Replace with `'Fills at third-party retail stores'` during any home page revamp.

### 1C. Audit Checklist
Run on every section before writing new copy:
- [ ] Scroll Fatigue / Redundancy? (Are multiple sections repeating the same operational mechanics or "how it works"? If so, flag for deletion)
- [ ] Competitor brand names present? (Apollo, 1mg, MedPlus — including in `HomeData.ts > PROBLEM_STATS > note`)
- [ ] Banned legal language? (Commission, Rev-Share, Referral, Cut)
- [ ] Drug license mentions? (Remove silently)
- [ ] Aggressive or off-brand CTAs? ("FIX THIS NOW" → replace)
- [ ] Hardcoded stats? (List them — do not change without confirmation)
- [ ] Gold Copy phrases at risk? (Do not rewrite)
- [ ] Simple English? (Re-read as a busy doctor)
- [ ] SEO/GEO gaps? (Missing FAQ? No primary keyword in H1? Vague claims with no numbers?)

### 1D. Data Requests
List all stats needing user verification. Collect upfront — present in Phase 2, don't block the audit.

---

## Phase 2: Draft & Review

### 2A. Draft Proposal
For each section being changed, produce a table:

| Element | Current Copy | Proposed Copy | Reason |
| :--- | :--- | :--- | :--- |
| Headline | ... | ... | jargon / tone / competitor name |
| Body | ... | ... | ... |
| CTA | ... | ... | ... |

### 2B. SEO/GEO Deliverables (Mandatory — Produce for Every Page)
- **Meta Title**: ≤60 chars, objective *Product + Audience* snapshot. Avoid marketing pitches. Format: `[Product/Benefit] for [Audience] | MediKloud`
- **Meta Description**: Strictly ≤154 chars to prevent Google snippet truncation! *Operational Snapshot* formula. Direct, action + outcome. Avoid sales jargon.
- **FAQ Section**: Minimum 4 Q&As. Questions match how a doctor searches. Answers are 40–80 words, direct, fact-first. No marketing tone.
- **Internal Links**: Identify 2 other MediKloud pages this page should link to naturally.
- **Keyword Check**: Confirm primary keyword from `seo-geo-playbook.md` appears naturally in H1 and at least once in body copy.

### 2C. Clarification Queue
Collect everything that needs user input before injection:
- Stats needing confirmation
- Any Gold Copy flagged for potential changes
- CTA choice: "Book A Free Demo" vs "Partner With Us"

### 2D. Evaluation Checklist (Attach to every draft)
- [ ] Simple English / No Jargon?
- [ ] Competitor Neutral?
- [ ] Legally Compliant (No Commission/Rev-Share)?
- [ ] No drug license mentions?
- [ ] Stats verified by user?
- [ ] SEO meta tags drafted?
- [ ] Gold Copy preserved?

---

## Phase 3: Injection
1. Apply approved changes to TSX/TS files — one section at a time.
2. Preserve all existing component logic, animations, and styling — this is a content change only.
3. Verify the build runs without errors after changes.

---

## Phase 4: Certification
1. Provide a "Before/After" summary table for the page.
2. Update [`content-revamp-inventory.md`](./.agent/content-revamp-inventory.md) — set page status to `✅ Certified`.
3. Ask USER: which page is next?

---

> [!IMPORTANT]
> **One page at a time.** Do not begin Phase 3 on the next page until the current page is Certified by the USER.
