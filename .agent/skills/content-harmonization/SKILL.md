---
name: Content Harmonization
description: Systematically audit and rewrite webpage content to align with the MediKloud brand voice for Doctors. Use this skill when the user asks to "revamp," "rewrite," or "optimize" copy on any component or page.
---

# Skill: Content Harmonization & Strategic Copywriting

This skill enables the agent to act as a **Chief Content Officer** for MediKloud, ensuring every word serves a strategic purpose.

---

## 1. Sync & Discovery (Always Do This First)
1. **Sync Snapshots**: Run the [`/refresh-content`](../../workflows/refresh-content.md) workflow to ensure your snapshots are 100% in sync with the latest code.
2. **Authoritative Source**: Always read the page's snapshot in `.agent/content-snapshot/[slug].md` instead of the raw `.tsx` files to audit content.
3. **Shared Data**: Always check `components/pages/home/HomeData.ts` via the `home.md` snapshot — it is shared across all pages.

---

## 2. Audit Checklist
Run every item before writing any new copy:

| Check | What To Look For |
| :--- | :--- |
| **Headings** | Simple English? Re-read as a busy doctor. Avoid overly technical jargon; keep it simple but make an impact. |
| **Tone** | Sounds like a pitch deck? Too technical? Not empathetic to a doctor? |
| **Competitor Names** | Apollo, 1mg, MedPlus, Pharmeasy — including inside `note` fields or comments. Known location: `HomeData.ts > PROBLEM_STATS > note` |
| **Legal Language** | Commission, Rev-Share, Referral, Cut, Percentage — flag immediately |
| **Licensing** | Any mention of drug license management — omit silently |
| **Stat Integrity** | Note every hardcoded number. Do NOT change without user confirmation |
| **Gold Copy** | Check against the Protected Phrases list — do not rewrite these |
| **CTA Language** | "FIX THIS NOW" and similar aggressive copy — replace with approved CTAs |
| **SEO/GEO** | Does the page have: an H1 with the primary keyword? At least one FAQ section? A meta title + description? Is the copy fact-dense with specific numbers, not vague claims? |

---

## 3. Protected Copy (Do Not Rewrite Without Explicit Approval)
These lines are working well on the live site and must be preserved:

- *"A consultation without the right medicine is an incomplete treatment."*
- *"Right now, your patient care stops at the clinic door."*
- *"You focus on patients. We handle the staff, stock, and stress."*
- *"You generate 100% of the Rx value. But capture < 50%."*
- *"The Broken Loop"*

---

## 4. Stats Under Review (Never Change Without Confirmation)
| Stat | Location |
| :--- | :--- |
| -10% Ops Loss, -30% Walk-outs, -80% Chronic Loss | ProblemSection |
| ₹1 Lakh+ Lost Every Month, 68% Chronic Patients Lost | MPv2ProblemStack |
| Reduced by 65% Wait Time | HMSHero |
| +₹210 Margin per order | ClinicHero |

---

## 5. Copywriting Protocol
Adapt the writing to what the section needs — no rigid formula:
- **Problem/Pain sections**: Surface the pain clearly. Empathetic, not preachy.
- **Feature/Solution sections**: Direct and specific. Say what it does, not what it "enables."
- **Bridge/Ecosystem sections**: Explicitly map to the 3-pillars: 1. Operations (Time saved/no headaches). 2. Fulfillment (Zero stockouts/capturing revenue). 3. Delivery (Continuous care/doorstep).
- **CTA sections**: Affirmative *Transform/Modernize* format (e.g., "Ready to transform your pharmacy? Scale your operations and protect margins.") Avoid repetitive "Stop the leak" phrasing. One action. Zero hesitation. Low friction.

---

## 6. Mandatory Constraints
- **Audience**: Always Doctors first.
- **The "Paperless" Rule**: Never mention "no slips of paper" or "paperless flows" as a direct negative. Some doctors prefer paper or view digital-only transitions negatively. Frame workflows as "seamless".
- **Legal**: No Commission / Rev-Share / Referral language — ever.
- **Competitors**: No brand names. Replace with "Corporate Pharmacy Chains" or "Third-party Aggregators."
- **Licensing**: Never mention who holds the drug license.
- **KISS**: If a doctor has to re-read a sentence, rewrite it.

---

## 7. Execution Workflow
This skill operates within the **Content Revamp Orchestration** workflow. Follow that workflow's phases — this skill is the tool you use during Phase 1 (Audit) and Phase 2 (Draft).

For SEO/GEO deliverables, refer to `seo-geo-playbook.md`.
For page tracking, refer to `content-revamp-inventory.md`.
