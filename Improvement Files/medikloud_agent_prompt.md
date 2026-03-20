
# MediKloud /v2 — Design System Implementation Prompt
# Hand this entire file to an AI agent with file-edit access to the codebase.
# The agent should execute all 4 phases in sequence, verifying each before proceeding.
# ─────────────────────────────────────────────────────────────────────────────────


You are implementing a new design system and fixing 33 typography/colour issues on the
MediKloud /v2 page. This is a Next.js 14 project using Tailwind CSS and TypeScript.

You have been given three pre-built files:
  • medikloud.tailwind.config.ts   — the new Tailwind config (drop-in replacement)
  • medikloud.globals.css          — the new globals CSS (drop-in replacement)
  • medikloud_v2_design_spec_v3.docx — full spec with all details

Read this entire prompt before making any changes. Execute the phases in order.
After each phase, confirm it compiled without errors before moving to the next.


═══════════════════════════════════════════════════════════════════════════════════
DESIGN SYSTEM — CORE RULES (memorise these before touching any file)
═══════════════════════════════════════════════════════════════════════════════════

GRADIENT DIRECTION (the brand identity):
  • display-gradient:  blue-700 (#1D4ED8) → indigo-600 (#4F46E5) → violet-600 (#7C3AED)
    → Used ONLY on the hero headline span via bg-gradient-display bg-clip-text text-transparent
    → ONE use per page, never more
    → ALWAYS add  style={{ color: '#4F46E5' }}  as inline fallback

  • action-gradient:   blue-600 (#2563EB) → indigo-600 (#4F46E5)
    → All CTA buttons on white/light sections
    → Tailwind class: bg-gradient-action

  • accent-gradient:   cyan-500 (#06B6D4) → blue-600 (#2563EB)
    → ONLY inside the dark CTA section
    → Tailwind class: bg-gradient-accent

COLOUR RULES:
  • Neutrals: ONLY slate-* (never gray-*, zinc-*, neutral-* anywhere)
  • Blue consolidation: text-blue-400 → text-blue-600, text-blue-300 → text-blue-500
  • Shadows: always indigo-tinted — shadow-btn, shadow-card-md, shadow-card-lg
    (rgba(79,70,229,α)) — never shadow-blue-200, never grey shadows
  • Section backgrounds: white → slate-50 → white → slate-50 → dark (one dark, CTA only)
  • No custom hex backgrounds: bg-[#fafafa] → bg-slate-50, bg-[#FAFAFC] → bg-slate-50

FONT WEIGHT RULES:
  • 900 (font-black)    → hero display headline span ONLY. Absolute maximum 1 use.
  • 700 (font-bold)     → h1, h2 section headings only
  • 600 (font-semibold) → h3, h4, buttons, eyebrow labels, nav active state
  • 400 (font-normal)   → body, captions, nav links, chips, most text
  • Never use 500 (font-medium) except for the body strong spans in the hero subtext
  • Never use 800 (font-extrabold) anywhere

FONT FAMILY:
  • Poppins everywhere. One family. font-sans = Poppins after the config change.
  • No other font families loaded for the /v2 page.


═══════════════════════════════════════════════════════════════════════════════════
PHASE 1 — DROP IN THE NEW DESIGN SYSTEM FILES
Target time: 5 minutes
Files changed: tailwind.config.ts, app/globals.css (or styles/globals.css)
═══════════════════════════════════════════════════════════════════════════════════

STEP 1.1 — Replace tailwind.config.ts
  Find the file: tailwind.config.ts (project root)
  Action: Replace its ENTIRE contents with the contents of medikloud.tailwind.config.ts
  Do not merge — replace completely.

STEP 1.2 — Replace globals.css
  Find the file: app/globals.css  OR  styles/globals.css  (check both locations)
  Action: Replace its ENTIRE contents with the contents of medikloud.globals.css
  Do not merge — replace completely.

STEP 1.3 — Verify Phase 1
  Run: npm run build (or npx tsc --noEmit for type check only)
  Expected: Zero TypeScript errors related to the config
  If there are errors about unknown config keys, check that the file was replaced
  completely and that the import path for Config matches your project's tailwind version.


═══════════════════════════════════════════════════════════════════════════════════
PHASE 2 — FONT UNIFICATION
Target time: 5 minutes
Files changed: app/layout.tsx (or pages/_app.tsx), app/v2/page.tsx (or pages/v2.tsx)
═══════════════════════════════════════════════════════════════════════════════════

STEP 2.1 — Update Poppins font loader in layout.tsx

  FIND this block (exact weights may vary):
  ┌─────────────────────────────────────────────────────────┐
  │  const poppins = Poppins({                              │
  │    weight: ['400', '700'],                              │
  │    subsets: ['latin'],                                  │
  │  });                                                    │
  └─────────────────────────────────────────────────────────┘

  REPLACE WITH:
  ┌─────────────────────────────────────────────────────────┐
  │  const poppins = Poppins({                              │
  │    weight: ['400', '600', '700', '900'],                │
  │    subsets: ['latin'],                                  │
  │    variable: '--font-poppins',                          │
  │    display: 'swap',                                     │
  │  });                                                    │
  └─────────────────────────────────────────────────────────┘

STEP 2.2 — Delete unused font imports from layout.tsx

  DELETE these lines (they may not all exist — remove whichever do):
    import { Geist, GeistMono } from 'next/font/google';
    import { Inter } from 'next/font/google';
    const geist = Geist({ ... });
    const geistMono = GeistMono({ ... });
    const inter = Inter({ ... });
  Also remove any className references to these variables from the <html> or <body> tags.
  Only the Poppins className should remain.

STEP 2.3 — Remove font-sans override from Revenue section in page.tsx

  FIND the Revenue section element (contains "Your hospital is losing 30–40%..."):
    className="... bg-white border-y border-slate-100 py-10 md:py-14 font-sans"
  
  REMOVE  font-sans  from that className string.
  Result: "bg-white border-y border-slate-100 py-10 md:py-14"

STEP 2.4 — Remove font-sans override from Footer element in page.tsx

  FIND the <footer> element:
    className="bg-white text-slate-900 pt-16 pb-8 border-t border-slate-100 font-sans relative overflow-hidden"
  
  REMOVE  font-sans  from that className string.
  Result: "bg-white text-slate-900 pt-16 pb-8 border-t border-slate-100 relative overflow-hidden"

STEP 2.5 — Verify Phase 2
  Open the site in a browser and inspect the Revenue section H2 in DevTools.
  Computed font-family must show "Poppins" — not "ui-sans-serif" or "system-ui".
  Same check on the Footer H3 elements.


═══════════════════════════════════════════════════════════════════════════════════
PHASE 3 — FONT WEIGHT + TYPOGRAPHY FIXES
Target time: 15–20 minutes
Files changed: app/v2/page.tsx (or pages/v2.tsx) only
═══════════════════════════════════════════════════════════════════════════════════

STEP 3.1 — Restructure H1: extract eyebrow above it, give h1 its own display size

  The current structure has the eyebrow label and the display headline both nested
  INSIDE the <h1> tag. This is semantically broken (the h1 element itself is 16px).

  FIND the entire h1 block (starts with <h1 className="mb-5 md:mb-8"...>):
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │  <h1 className="mb-5 md:mb-8" style={...}>                                 │
  │    <span className="flex items-center justify-center gap-3 sm:gap-4        │
  │                      mb-6 sm:mb-8">                                        │
  │      <span className="h-[2px] w-12 sm:w-20 bg-gradient-to-r               │
  │                        from-transparent to-blue-500 rounded-full           │
  │                        opacity-70" />                                       │
  │      <span className="text-[11px] sm:text-[13px] font-bold uppercase       │
  │                        tracking-[0.15em] text-blue-600">                   │
  │        India's First · Zero Capex · Fully Managed                          │
  │      </span>                                                                │
  │      <span className="h-[2px] w-12 sm:w-20 bg-gradient-to-l               │
  │                        from-transparent to-blue-500 rounded-full           │
  │                        opacity-70" />                                       │
  │    </span>                                                                  │
  │    <span className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] │
  │                      lg:text-[3.75rem] font-black leading-[1.1]            │
  │                      tracking-tighter md:tracking-[-0.03em]                │
  │                      bg-gradient-to-r from-blue-700 via-indigo-600         │
  │                      to-violet-600 bg-clip-text text-transparent           │
  │                      mb-4 md:mb-6">                                        │
  │      Building Inhouse Pharmacies                                            │
  │    </span>                                                                  │
  │    <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem]  │
  │                      font-bold leading-[1.2] tracking-[-0.02em]            │
  │                      text-slate-700">                                       │
  │      for Independent Hospitals & Clinics                                    │
  │    </span>                                                                  │
  │  </h1>                                                                      │
  └─────────────────────────────────────────────────────────────────────────────┘

  REPLACE WITH:
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │  {/* Eyebrow — above the h1, not inside it */}                              │
  │  <div className="flex items-center justify-center gap-3 sm:gap-4           │
  │                  mb-6 sm:mb-8">                                             │
  │    <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-r             │
  │                      rounded-full opacity-70" />                            │
  │    <span className="text-[11px] sm:text-[13px] font-semibold uppercase     │
  │                      tracking-[0.15em] text-brand-600">                    │
  │      India's First · Zero Capex · Fully Managed                            │
  │    </span>                                                                  │
  │    <span className="h-[2px] w-12 sm:w-20 bg-gradient-eyebrow-l             │
  │                      rounded-full opacity-70" />                            │
  │  </div>                                                                     │
  │  <h1 className="mb-5 md:mb-8">                                             │
  │    <span                                                                    │
  │      className="block text-[2rem] sm:text-[2.75rem] md:text-[3.25rem]     │
  │                 lg:text-[3.75rem] font-black leading-[1.1]                 │
  │                 tracking-tighter md:tracking-[-0.03em]                     │
  │                 bg-gradient-display bg-clip-text text-transparent          │
  │                 mb-4 md:mb-6"                                              │
  │      style={{ color: '#4F46E5' }}                                          │
  │    >                                                                        │
  │      Building Inhouse Pharmacies                                            │
  │    </span>                                                                  │
  │    <span className="block text-[1.5rem] sm:text-[2rem] md:text-[2.25rem]  │
  │                      font-bold leading-[1.2] tracking-[-0.02em]            │
  │                      text-slate-700">                                       │
  │      for Independent Hospitals & Clinics                                    │
  │    </span>                                                                  │
  │  </h1>                                                                      │
  └─────────────────────────────────────────────────────────────────────────────┘

  Key changes in this step:
    - Eyebrow <span> wrapper → <div> above the h1
    - font-bold on eyebrow text → font-semibold
    - bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 → bg-gradient-display
    - Added style={{ color: '#4F46E5' }} fallback on headline span

STEP 3.2 — H2 font-black/extrabold → font-bold (3 elements)

  Find and update these three H2 elements:

  A) Revenue section H2 — text: "Your hospital is losing 30–40% of pharmacy revenue"
     FIND:    font-black  within its className
     REPLACE: font-bold

  B) Choose Your Setup section H2 — text: "Choose Your Setup"
     FIND:    font-extrabold  within its className
     REPLACE: font-bold

  C) Apollo section H2 — text: "The advantage Apollo has."
     FIND:    font-black  within its className
     REPLACE: font-bold

  The CTA section H2 ("Your pharmacy revenue is waiting") already uses font-bold — no change needed.

STEP 3.3 — H3 setup card titles: text-xs font-bold → text-sm font-semibold (4 elements)

  FIND all h3 elements with these texts:
    "Have a Pharmacy" / "No Pharmacy Yet" / "Have a Dispensary" / "No Dispensary"
  
  These all share: className="text-xs font-bold leading-snug text-slate-700 ..."
  
  REPLACE: text-xs → text-sm,  font-bold → font-semibold
  Result: className="text-sm font-semibold leading-snug text-slate-700 ..."

STEP 3.4 — H3 Apollo sub-labels: text-base font-black → text-sm font-semibold (4 elements)

  FIND all h3 elements with texts: "Day 1" / "Zero" / "Chain" / "Recurring"
  These share: className="text-base font-black tracking-tight leading-none ..."
  
  REPLACE: text-base → text-sm,  font-black → font-semibold
  Result: className="text-sm font-semibold tracking-tight leading-none ..."

STEP 3.5 — H4 impact cards: font-black → font-semibold (all H4 instances)

  FIND all h4 elements (texts like "Go live in under 7 days", "30-40% avg. revenue recovered", etc.)
  These share: className="text-lg md:text-xl font-black text-white tracking-tighter ..."
  
  REPLACE: font-black → font-semibold
  Result: className="text-lg md:text-xl font-semibold text-white tracking-tight ..."
  Also change: tracking-tighter → tracking-tight (soften the compression)

STEP 3.6 — Eyebrow <p> in Choose Your Setup: font-black → font-semibold

  FIND the <p> element with text: "uncover hidden revenue streams and operational savings"
  className contains: "font-black uppercase tracking-[0.3em] text-blue-600"
  
  REPLACE: font-black → font-semibold

STEP 3.7 — "Impact Profile" labels: font-black + text-blue-400 → fix both (4 instances)

  FIND all <span> elements with text "Impact Profile"
  className contains: "font-black uppercase tracking-[0.2em] text-blue-400"
  
  REPLACE: font-black → font-semibold,  text-blue-400 → text-blue-500

STEP 3.8 — "Traditional" and "MediKloud" comparison chips: font-black → font-bold (8 instances)

  FIND all <div> elements with text "Traditional":
    className contains: "font-black uppercase tracking-widest" and "bg-slate-700/50"
    REPLACE: font-black → font-bold

  FIND all <div> elements with text "MediKloud" (the chip/badge, not the heading):
    className contains: "font-black uppercase tracking-widest" and "bg-blue-600"
    REPLACE: font-black → font-bold

STEP 3.9 — Apollo subtitle: font-semibold + whitespace-nowrap → fix both

  FIND the <p> element starting with "Apollo wins because of scale, not luck..."
  className contains: "font-semibold leading-relaxed whitespace-nowrap"
  
  REPLACE: font-semibold → font-normal
  REMOVE: whitespace-nowrap  (this causes mobile text overflow)

STEP 3.10 — MediKloud comparison body paragraphs: font-semibold → font-normal (4 instances)

  FIND all <p> elements that:
    - Have className containing "text-blue-50 font-semibold leading-relaxed"
    - Contain text like "We've already built the playbook" / "Billing, inventory..." / etc.
  
  REPLACE: font-semibold → font-normal

STEP 3.11 — Setup card facility labels: leading-none → leading-tight (4 instances)

  FIND all <p> elements with texts "Hospital" / "Clinic" (the small eyebrow labels on setup cards)
  className contains: "font-bold uppercase tracking-widest leading-none"
  
  REPLACE: leading-none → leading-tight

STEP 3.12 — Verify Phase 3
  Check in DevTools: no element outside the hero display span should have font-weight: 900
  The page should feel like it has genuine typographic hierarchy — not everything at the same emphasis level.


═══════════════════════════════════════════════════════════════════════════════════
PHASE 4 — COLOUR SYSTEM + DESIGN TOKENS
Target time: 20–25 minutes
Files changed: app/v2/page.tsx (or pages/v2.tsx) only
═══════════════════════════════════════════════════════════════════════════════════

STEP 4.1 — Standardise section backgrounds (2 changes)

  FIND: className containing  bg-[#fafafa]   (Choose Your Setup section)
  REPLACE: bg-[#fafafa]  →  bg-slate-50

  FIND: className containing  bg-[#FAFAFC]   (Apollo / advantages section)
  REPLACE: bg-[#FAFAFC]  →  bg-slate-50

STEP 4.2 — Add transparent-text fallbacks (3 CRITICAL changes — invisible headline risk)

  FIND the hero headline span:
    The <span> containing "Building Inhouse Pharmacies" that has text-transparent
    Add  style={{ color: '#4F46E5' }}  to this element (or merge with existing style prop)

  FIND the Apollo H2 span:
    The <span> containing "Now available to you." that has text-transparent
    Add  style={{ color: '#4F46E5' }}  to this element

  FIND the CTA H2 span:
    The <span> containing "Let's recover it together." that has text-transparent
    Add  style={{ color: '#22d3ee' }}  to this element

  These fallbacks ensure headlines stay visible if CSS gradient-clip fails.
  Without them, three headlines become completely invisible in fallback rendering.

STEP 4.3 — Replace raw gradient chains with named tokens

  After Phase 1, the following named gradient utilities are available in Tailwind.
  Replace raw from/via/to chains with the token names:

  A) Hero display headline:
     FIND:    bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600
     REPLACE: bg-gradient-display

  B) Primary CTA button ("Book a Demo"):
     FIND:    bg-gradient-to-r from-blue-600 to-indigo-600
     REPLACE: bg-gradient-action

  C) Dark section CTA button ("Book Free Demo"):
     FIND:    bg-gradient-to-r from-cyan-500 to-blue-500
     REPLACE: bg-gradient-accent

  D) Hero section background div:
     FIND:    bg-gradient-to-b from-slate-50 via-blue-50/50 to-white
     REPLACE: bg-gradient-hero

  E) Eyebrow flanking lines:
     FIND:    bg-gradient-to-r from-transparent to-blue-500
     REPLACE: bg-gradient-eyebrow-r

     FIND:    bg-gradient-to-l from-transparent to-blue-500
     REPLACE: bg-gradient-eyebrow-l

  NOTE: Do NOT change the marquee section gradient (from-blue-700 via-cyan-700 to-teal-700)
  — that is a visual effect, not a brand CTA, and stays as-is.
  Do NOT change any gradient that is part of animated blob elements.

STEP 4.4 — Consolidate stray blue shades

  Do a find-replace across page.tsx for these:

  text-blue-400  →  text-blue-600   (except where it appears in blob/animation classes)
  text-blue-300  →  text-blue-500
  bg-blue-400    →  bg-blue-600     (except animated blobs)

  EXCEPTIONS — do NOT change these:
    - bg-blue-100/30  (blob atmosphere class)
    - Any class inside an animate-* context
    - The marquee band gradient

STEP 4.5 — Fix AI marquee pill elements (approximately 28 elements)

  FIND all <div> elements inside the marquee/AI strip that have:
    className containing: "bg-white rounded-full ... font-normal text-gray-500"

  REPLACE in each:
    text-gray-500  →  text-slate-500
    font-normal    →  font-medium

  These are the AI feature pills: "AI Prescription Reader", "Drug Discovery", etc.
  There are two rows (duplicated for scroll effect) — fix all instances.

STEP 4.6 — Fix nav link colours (inactive state should not be blue)

  FIND all nav link <span> elements (Solutions, Products, Compare, Blogs, About Us)
  These share: className="relative text-blue-600 group-hover:text-blue-800 font-medium ..."

  REPLACE:
    text-blue-600          →  text-slate-700
    group-hover:text-blue-800  →  group-hover:text-indigo-600

STEP 4.7 — Update shadow tokens (optional but recommended)

  FIND any instances of:
    shadow-blue-200     →  shadow-[rgba(79,70,229,0.12)]   or  shadow-card-md (from globals)
    shadow-blue-600/15  →  shadow-[rgba(79,70,229,0.25)]
    shadow-blue-600/20  →  shadow-[rgba(79,70,229,0.30)]

STEP 4.8 — Trust chip dot: use gradient instead of solid dot

  FIND all trust chip dot elements (the small coloured dots before chip text):
    Elements with className like "w-1.5 h-1.5 rounded-full bg-blue-500"
    or similar single-colour dots

  REPLACE the bg-blue-500 dots with:
    className="w-[5px] h-[5px] rounded-full bg-gradient-action flex-shrink-0"

STEP 4.9 — Final verify Phase 4
  In browser DevTools, run this check:
    1. Temporarily disable CSS (DevTools → Cmd/Ctrl+Shift+P → "Disable CSS")
       All 3 gradient headlines should show fallback text in colour, not be invisible
    2. Re-enable CSS. Inspect an AI pill div — font-family should be Poppins, color slate-500
    3. Inspect nav links at rest — color should be slate-700 (#334155), not blue
    4. Choose Your Setup and Apollo sections should have identical background colours
    5. Scroll the full page — every section should feel like it belongs to the same system


═══════════════════════════════════════════════════════════════════════════════════
COMPLETE LIST OF ALL 33 CHANGES (for tracking / verification)
═══════════════════════════════════════════════════════════════════════════════════

PHASE 1 (2 changes):
  [1]  tailwind.config.ts  → replace entire file with medikloud.tailwind.config.ts
  [2]  globals.css         → replace entire file with medikloud.globals.css

PHASE 2 (5 changes):
  [3]  layout.tsx   weight: ['400','700']                    → ['400','600','700','900']
  [4]  layout.tsx   import { Geist, GeistMono }              → DELETE
  [5]  layout.tsx   import { Inter }                        → DELETE
  [6]  page.tsx     Revenue section className: font-sans    → remove font-sans
  [7]  page.tsx     Footer className: font-sans             → remove font-sans

PHASE 3 (16 changes):
  [8]  page.tsx   H1 structure: eyebrow inside h1           → restructure per Step 3.1
  [9]  page.tsx   Eyebrow span: font-bold                   → font-semibold
  [10] page.tsx   H2 Revenue: font-black                    → font-bold
  [11] page.tsx   H2 Setup: font-extrabold                  → font-bold
  [12] page.tsx   H2 Apollo: font-black                     → font-bold
  [13] page.tsx   H3 setup cards ×4: text-xs font-bold      → text-sm font-semibold
  [14] page.tsx   H3 Apollo labels ×4: text-base font-black → text-sm font-semibold
  [15] page.tsx   H4 impact cards ×4: font-black            → font-semibold
  [16] page.tsx   Eyebrow p: font-black                     → font-semibold
  [17] page.tsx   Impact Profile ×4: font-black text-blue-400 → font-semibold text-blue-500
  [18] page.tsx   Traditional chip ×4: font-black           → font-bold
  [19] page.tsx   MediKloud chip ×4: font-black             → font-bold
  [20] page.tsx   Apollo subtitle: font-semibold + whitespace-nowrap → font-normal, remove nowrap
  [21] page.tsx   MediKloud body ×4: font-semibold          → font-normal
  [22] page.tsx   Setup card labels ×4: leading-none        → leading-tight
  [23] page.tsx   tracking-tighter on H4s                   → tracking-tight

PHASE 4 (10 changes):
  [24] page.tsx   bg-[#fafafa] (Setup section)              → bg-slate-50
  [25] page.tsx   bg-[#FAFAFC] (Apollo section)             → bg-slate-50
  [26] page.tsx   Hero headline span: text-transparent      → add style={{ color:'#4F46E5' }}
  [27] page.tsx   Apollo H2 span: text-transparent          → add style={{ color:'#4F46E5' }}
  [28] page.tsx   CTA H2 span: text-transparent             → add style={{ color:'#22d3ee' }}
  [29] page.tsx   Gradient chains → bg-gradient-display / action / accent / hero / eyebrow
  [30] page.tsx   text-blue-400 / text-blue-300 (stray)     → text-blue-600 / text-blue-500
  [31] page.tsx   AI pills ×28: text-gray-500 font-normal   → text-slate-500 font-medium
  [32] page.tsx   Nav spans: text-blue-600 group-hover:text-blue-800 → text-slate-700 group-hover:text-indigo-600
  [33] page.tsx   Trust chip dots: bg-blue-500              → bg-gradient-action


═══════════════════════════════════════════════════════════════════════════════════
IMPORTANT: WHAT NOT TO CHANGE
═══════════════════════════════════════════════════════════════════════════════════

Do NOT change any of the following — they are intentional and correct:

  • The marquee band section (from-blue-700 via-cyan-700 to-teal-700) — visual effect
  • Animated blob colour classes (bg-blue-100/30, bg-indigo-100/20, bg-violet-100/25)
  • The animate-float-slow / animate-float-medium / animate-float-slower classes
  • The canvas element inside the hero
  • The CTA section's dark gradient background (intentional dark section)
  • The MediKloud logo image/src
  • Any padding, margin, grid, or layout classes (this is a colour/typography pass only)
  • The sr-only hidden SEO paragraph in the hero
  • Any JavaScript logic, state management, or component behaviour
  • The "Book Free Demo" button's cyan gradient (gradient-accent is correct for dark bg)


═══════════════════════════════════════════════════════════════════════════════════
FINAL DELIVERABLE CHECK
═══════════════════════════════════════════════════════════════════════════════════

After all 4 phases, confirm:

  □ npm run build completes with zero errors
  □ All 4 font families collapsed to 1 (Poppins) — verify in DevTools Network tab
  □ No element has font-weight: 900 except the hero "Building Inhouse Pharmacies" span
  □ Revenue section H2 renders in Poppins (not system font)
  □ Footer renders in Poppins (not system font)
  □ All three transparent-text headlines have inline color fallbacks
  □ Disabling CSS leaves all headlines visible (not blank)
  □ Nav links are slate-700 at rest, not blue
  □ AI pill tags use slate-500, not gray-500
  □ Choose Your Setup and Apollo sections have same background shade
  □ Scrolling the page feels like one cohesive design system, not sections stitched together
  □ The hero gradient headline (blue→indigo→violet) is unchanged and still renders correctly
  □ The hero blob animations (float-slow, float-medium, float-slower) still run
