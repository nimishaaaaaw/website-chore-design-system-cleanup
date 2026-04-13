---
description: Re-runs the automated content extraction script to sync snapshots with the latest codebase.
---

# Workflow: Refresh Content Snapshots

Use this workflow whenever the website copy has been updated in the source code, or to initialize a new session with the latest site-wide content.

---

## // turbo
## Step 1: Run Extraction Script
Run the Python extractor to crawl all pages and update the markdown snapshots in `.agent/content-snapshot/`.

```bash
python3 .agent/scripts/extract_content.py
```

## Step 2: Read All Extracted Content
Once refreshed, read the **master index** and **all individual page snapshots** in the `.agent/content-snapshot/` directory completely. 

## Step 3: 360-Degree Ecosystem Analysis
Synthesize a holistic, 360-degree view of the MediKloud ecosystem. This is critical for maintaining zero bias and understanding how different products (HMS, Managed Pharmacy, Virtual Pharmacy, Deliveries) interlock. 

Before making any localized changes, you must:
1.  **Identify the Core Value Prop**: How does the target page contribute to stopping revenue leakage?
2.  **Map Interdependencies**: Does this page reference other products? (e.g., HMS as a foundation for Managed Pharmacy).
3.  **Audit the "Gold Standard"**: Compare the current page against "Certified" pages to ensure absolute atmospheric and narrative consistency.

- [Snapshot Index](file:///Users/yeswanth/Documents/Medikloud_Tech/Website/Website_Part2/.agent/content-snapshot/index.md)

## Step 4: Verify Target Page
If you are working on a specific page, open its snapshot immediately to ensure you are working from the **latest extracted copy**, not raw TSX files.

> [!IMPORTANT]
> Always use the snapshots as the **Primary Source of Truth** for content audits. If the snapshot and the code differ, run this workflow again.

---

## Step 5: Update Inventory (Optional)
Check the [Content Revamp Inventory](file:///Users/yeswanth/Documents/Medikloud_Tech/Website/Website_Part2/.agent/content-revamp-inventory.md) to see if the page you are working on has been "Certified".

