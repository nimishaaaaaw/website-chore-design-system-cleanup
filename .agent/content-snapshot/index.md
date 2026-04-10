# MediKloud Content Snapshot — Index
> Generated: 2026-04-11 00:52

> ⚠️ Auto-generated. Run `python3 .agent/scripts/extract_content.py` to refresh.

---

## Pages

| Page | URL | Snapshot File |
| :--- | :--- | :--- |
| Home Page | `/` | [`home.md`](./home.md) |
| Managed Pharmacy | `/products/managed-pharmacy` | [`managed-pharmacy.md`](./managed-pharmacy.md) |
| Medicine Deliveries | `/products/medicine-deliveries` | [`medicine-deliveries.md`](./medicine-deliveries.md) |
| Virtual Pharmacy | `/products/virtual-pharmacy` | [`virtual-pharmacy.md`](./virtual-pharmacy.md) |
| Hospital Management System (HMS) | `/products/hospital-management-system` | [`hms.md`](./hms.md) |
| Solutions: Clinic Without Pharmacy | `/solutions/without-pharmacy` | [`clinic-without-pharmacy.md`](./clinic-without-pharmacy.md) |
| Solutions: Hospital With Pharmacy | `/solutions/with-pharmacy` | [`hospital-with-pharmacy.md`](./hospital-with-pharmacy.md) |

---

## How to Use This in a New Chat

1. Read `index.md` to get oriented.
2. Open the specific page snapshot (e.g., `managed-pharmacy.md`) for the page you are revamping.
3. Use the extracted copy as the authoritative source of **current live content** — no need to read raw TSX files.
4. After injecting any content changes, re-run: `python3 .agent/scripts/extract_content.py`

---

## Quick Reference

⚠️ **Known violation**: `HomeData.ts > PROBLEM_STATS > note` contains competitor brand names (Apollo, MedPlus, 1mg).

| Resource | Path |
| :--- | :--- |
| Brand & Compliance Rules | `.agent/rules/content-guidelines.md` |
| SEO & GEO Playbook | `.agent/rules/seo-geo-playbook.md` |
| Content Harmonization Skill | `.agent/skills/content-harmonization/SKILL.md` |
| Revamp Workflow | `.agent/workflows/content-revamp-orchestration.md` |
| Page Revamp Tracker | `.agent/content-revamp-inventory.md` |