---
description: Export page components and configuration into a single markdown file
---
This workflow extracts all the frontend code associated with a specific page into a single markdown file, ordered systematically.
It fulfills the requirement to club global CSS, Tailwind config, page-level code, and component-level code together.

// turbo-all
1. Verify that `.agent/scripts/export-page.mjs` exists. If not, inform the user that the underlying script is missing.
2. Run the export script passing the desired page path. If the user hasn't specified the path, prompt them for it.
   ```bash
   node .agent/scripts/export-page.mjs <route-path>
   ```
   *(For example: `node .agent/scripts/export-page.mjs app/solutions/clinic-without-pharmacy/page.tsx`)*
3. Once the command completes successfully, notify the user that the generated markdown file is ready. The markdown file gets created in the root of the project with a `[pageName]-export.md` naming convention (e.g., `clinic-without-pharmacy-export.md`).
