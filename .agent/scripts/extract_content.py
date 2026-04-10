#!/usr/bin/env python3
"""
MediKloud Content Snapshot Extractor
=====================================
Extracts all user-facing copy from TSX/TS components, organized by page and section.
Outputs markdown snapshot files that an agent can load immediately at conversation start.

Usage:
    python3 .agent/scripts/extract_content.py

Output:
    .agent/content-snapshot/
        index.md          — master table of contents + summary
        home.md
        managed-pharmacy.md
        medicine-deliveries.md
        virtual-pharmacy.md
        hms.md
        clinic-without-pharmacy.md
        clinic-with-pharmacy.md
        hospital-with-pharmacy.md
        hospital-without-pharmacy.md
"""

import re
import os
from pathlib import Path
from datetime import datetime

# ─── Root detection ─────────────────────────────────────────────────────────────
SCRIPT_DIR  = Path(__file__).parent
ROOT        = SCRIPT_DIR.parent.parent          # Website_Part2/
OUTPUT_DIR  = SCRIPT_DIR.parent / "content-snapshot"
OUTPUT_DIR.mkdir(exist_ok=True)

# ─── Page → component mapping ───────────────────────────────────────────────────
PAGES = [
    {
        "slug":          "home",
        "title":         "Home Page",
        "url":           "/",
        "page_file":     "app/page.tsx",
        "component_dir": "components/pages/home",
        "data_files":    ["components/pages/home/HomeData.ts", "components/pages/home/persona-roi/ROIData.ts"],
    },
    {
        "slug":          "managed-pharmacy",
        "title":         "Managed Pharmacy",
        "url":           "/products/managed-pharmacy",
        "page_file":     "app/products/managed-pharmacy/page.tsx",
        "component_dir": "components/pages/products/managed-pharmacy",
        "data_files":    [],
    },
    {
        "slug":          "medicine-deliveries",
        "title":         "Medicine Deliveries",
        "url":           "/products/medicine-deliveries",
        "page_file":     "app/products/medicine-deliveries/page.tsx",
        "component_dir": "components/pages/products/medicine-deliveries",
        "data_files":    [],
    },
    {
        "slug":          "virtual-pharmacy",
        "title":         "Virtual Pharmacy",
        "url":           "/products/virtual-pharmacy",
        "page_file":     "app/products/virtual-pharmacy/page.tsx",
        "component_dir": "components/pages/products/virtual-pharmacy",
        "data_files":    [],
    },
    {
        "slug":          "hms",
        "title":         "Hospital Management System (HMS)",
        "url":           "/products/hospital-management-system",
        "page_file":     "app/products/hospital-management-system/page.tsx",
        "component_dir": "components/pages/products/hospital-management-system",
        "data_files":    [],
    },
    {
        "slug":          "clinic-without-pharmacy",
        "title":         "Solutions: Clinic Without Pharmacy",
        "url":           "/solutions/without-pharmacy",
        "page_file":     "app/solutions/without-pharmacy/page.tsx",
        "component_dir": "components/pages/solutions/clinic-without-pharmacy",
        "data_files":    [],
    },
    {
        "slug":          "hospital-with-pharmacy",
        "title":         "Solutions: Hospital With Pharmacy",
        "url":           "/solutions/with-pharmacy",
        "page_file":     "app/solutions/with-pharmacy/page.tsx",
        "component_dir": "components/pages/solutions/hospital-pharmacy",
        "data_files":    [],
    },
]

# ─── Preprocessing ───────────────────────────────────────────────────────────────

def preprocess(content: str) -> str:
    """Normalize TSX content to make extraction more reliable."""
    # Remove HTML/JSX comments: {/* ... */}
    content = re.sub(r'\{/\*.*?\*/\}', '', content, flags=re.DOTALL)
    # Remove HTML comments: <!-- ... -->
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    # Collapse JSX string concat: {' '} → space
    content = re.sub(r"\{'\s*'\}", " ", content)
    content = re.sub(r'\{"\s*"\}', " ", content)
    # Collapse HTML entities
    content = content.replace('&apos;', "'").replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
    # Collapse escaped quotes in JSX strings
    content = content.replace("\\'", "'").replace('\\"', '"')
    # Normalize multi-line backtick template strings — join into single line
    content = re.sub(r'`([^`]*)`', lambda m: '`' + ' '.join(m.group(1).split()) + '`', content)
    return content

def clean(s: str) -> str:
    """Strip and normalize whitespace."""
    s = re.sub(r'\s+', ' ', s).strip()
    return s

# ─── Skip rules ─────────────────────────────────────────────────────────────────

# Values that look like CSS class strings
CSS_START = re.compile(
    r'^(bg-|text-|flex|grid|p-|px-|py-|m-|mx-|my-|w-|h-|rounded|border|shadow|gap|space|overflow|absolute|relative|z-|opacity|scale|translate|rotate|animate|transition|duration|ease|hover:|group-|ring-|from-|via-|to-|block|inline|hidden|pointer|select|no-|min-|max-|lg:|md:|sm:|xl:|2xl:|sr-only|container|section|tracking-|leading-|font-|uppercase|lowercase|cursor-|justify-|items-|content-|col-|row-|aspect-|object-|inset-|order-|will-change)'
)
# Values that look like code
CODE_CONTENT = re.compile(
    r'(import |export |from ["\']|require\(|useState|useEffect|useRef|useCallback|onClick|onChange|onSubmit|href=|src=|alt=|aria-|data-|dangerouslySetInnerHTML|\$\{|=>|&&|\|\||console\.|typeof |instanceof |return |const |let |var |interface |type |\.map\(|\.filter\(|\.reduce\()'
)

def is_noise(s: str) -> bool:
    """Return True if the string is not user-facing copy."""
    s = s.strip()
    if len(s) < 3:
        return True
    if CSS_START.match(s):
        return True
    if CODE_CONTENT.search(s):
        return True
    # Pure hex colors
    if re.match(r'^#[0-9a-fA-F]{3,8}$', s):
        return True
    # Single camelCase word (likely a variable or component name)
    if re.match(r'^[a-z][a-zA-Z0-9]+$', s) and len(s) < 25:
        return True
    # Pure numbers or percentages that are too short to be meaningful
    if re.match(r'^[\d\s%+\-₹<>.,]+$', s) and len(s) < 3:
        return True
    # Scroll indicator hints (not user content)
    if re.match(r'^Scroll to', s):
        return True
    # Layout-only labels that aren't content
    if s.lower() in ('item', 'id', 'key', 'index', 'true', 'false', 'null', 'undefined'):
        return True
    return False

# ─── Extraction strategies ───────────────────────────────────────────────────────

def extract_tag_content(content: str, tag: str) -> list[str]:
    """
    Extract all text content inside a specific HTML/JSX tag.
    Also matches Framer Motion variants: motion.h1, motion.h2, etc.
    Handles nested elements by stripping inner tags and collapsing whitespace.
    """
    # Build pattern that matches both <h1 ...> and <motion.h1 ...>
    tag_pattern = re.compile(
        rf'<(?:motion\.)?{tag}(?:\s[^>]*)?>(.+?)</(?:motion\.)?{tag}>',
        re.DOTALL
    )
    results = []
    for m in tag_pattern.finditer(content):
        inner = m.group(1)
        # Strip all nested JSX tags
        inner = re.sub(r'<[^>]+>', ' ', inner)
        # Remove JSX expressions (curly brace blocks)
        inner = re.sub(r'\{[^{}]*\}', ' ', inner)
        val = clean(inner)
        if val and not is_noise(val) and len(val) >= 4:
            results.append(val)
    return list(dict.fromkeys(results))  # deduplicate preserving order

def extract_eyebrow(content: str) -> list[str]:
    """Extract eyebrow text from eyebrow-text class spans and tracking-widest pill badges."""
    results = []

    # Pattern 1: <span className="eyebrow-text ...">...</span>
    pattern = re.compile(r'<span[^>]*eyebrow-text[^>]*>(.+?)</span>', re.DOTALL)
    for m in pattern.finditer(content):
        inner = re.sub(r'<[^>]+>', ' ', m.group(1))
        inner = re.sub(r'\{[^{}]*\}', ' ', inner)
        val = clean(inner)
        if val and not is_noise(val) and len(val) >= 4:
            results.append(val)

    # Pattern 2: tracking-widest pill badges (FulfillmentEcosystem, etc.)
    # Look for <span ...tracking-widest...>TEXT</span> where TEXT is short and clean
    pill_pattern = re.compile(r'<span[^>]*tracking-widest[^>]*>\s*([^<{\n]{4,80}?)\s*</span>', re.DOTALL)
    for m in pill_pattern.finditer(content):
        val = clean(m.group(1))
        if val and not is_noise(val):
            results.append(val)

    return list(dict.fromkeys(results))

def extract_object_field(content: str, field_names: list[str]) -> list[str]:
    """
    Extract string values from JS/TS object literals for specific field names.
    Handles both single-quoted, double-quoted, and backtick strings.
    Also handles multi-line backtick template strings.
    """
    results = []
    field_regex = '|'.join(re.escape(f) for f in field_names)
    # Match: fieldName: 'value' or fieldName: "value" or fieldName: `value`
    pattern = re.compile(
        rf'(?:^|\s)(?:{field_regex})\s*:\s*(?:\'((?:[^\']|\'\')*?)\'|"((?:[^"]|"")*?)"|`((?:[^`])*?)`)',
        re.MULTILINE | re.DOTALL
    )
    for m in pattern.finditer(content):
        val = m.group(1) or m.group(2) or m.group(3) or ''
        val = clean(val)
        if val and not is_noise(val) and len(val) >= 4:
            results.append(val)
    return list(dict.fromkeys(results))

def extract_buttons(content: str) -> list[str]:
    """Extract button text (supports nested icon elements and motion.button)."""
    results = []
    # Build pattern that matches <button ...>, <Button ...>, and <motion.button ...>
    pattern = re.compile(rf'<(?:motion\.)?[bB]utton(?:\s[^>]*)?>(.+?)</(?:motion\.)?[bB]utton>', re.DOTALL)
    for m in pattern.finditer(content):
        inner = re.sub(r'<[^>]+>', ' ', m.group(1))
        inner = re.sub(r'\{[^{}]*\}', ' ', inner)
        val = clean(inner)
        if val and not is_noise(val) and 3 <= len(val) <= 120:
            results.append(val)
    return list(dict.fromkeys(results))

def extract_paragraphs(content: str) -> list[str]:
    """Extract longer prose text from <p>, <li>, and <a> tags."""
    results = []
    for tag in ['p', 'li', 'a']:
        results.extend(extract_tag_content(content, tag))
    return list(dict.fromkeys(results))

def extract_plain_string_arrays(content: str) -> list[str]:
    """
    Extract string values from plain arrays like:
    ["item 1", "item 2"].map(...)
    """
    results = []
    # Match: [ 'value1', "value2" ]
    array_pattern = re.compile(r'\[\s*(?:\s*[\'"`].+?[\'"`]\s*,?\s*){2,}\s*\]', re.DOTALL)
    for m in array_pattern.finditer(content):
        arr_body = m.group(0)
        str_pattern = re.compile(r'[\'"`](.*?)[\'"`]')
        for s_m in str_pattern.finditer(arr_body):
            val = clean(s_m.group(1))
            if val and not is_noise(val) and len(val) >= 4:
                results.append(val)
    return results

def extract_inline_array_objects(content: str) -> dict[str, list[str]]:
    """
    Extract string values from INLINE object literals inside JSX .map() calls.
    Handles patterns like:
        [{ title: 'X', desc: 'Y', risk: 'Z' }, ...].map(...)
    or:
        const items = [{ title: 'X' }, ...]    (also caught by extract_object_field)
    This targets the inline-JSX case specifically.
    """
    # Find all JS object literals (shallow — one level of {} )
    field_map: dict[str, list[str]] = {
        'titles': [],
        'bodies': [],
        'risks': [],
        'results': [],
    }

    title_fields  = {'title', 'heading', 'label', 'name', 'tagline', 'badge', 'eyebrow', 'step', 'risk', 'result', 'outcome', 'impact', 'metric', 'buttonText', 'btnText', 'cta', 'ctaText', 'feature', 'legacy', 'modern'}
    body_fields   = {'desc', 'description', 'sub', 'body', 'text', 'subtitle', 'detail', 'summary', 'copy'}

    # Match object literals: { key: 'value', ... }
    obj_pattern = re.compile(r'\{([^{}]{20,})\}', re.DOTALL)
    for obj_m in obj_pattern.finditer(content):
        obj_body = obj_m.group(1)
        # Extract key: 'value' pairs from within this object
        kv_pattern = re.compile(
            r'(?:^|,|\s)(\w+)\s*:\s*(?:\'((?:[^\'])*?)\'|"((?:[^"])*?)")(?=\s*[,}])',
            re.MULTILINE
        )
        for kv in kv_pattern.finditer(obj_body):
            key = kv.group(1)
            val = clean(kv.group(2) or kv.group(3) or '')
            if not val or is_noise(val) or len(val) < 4:
                continue
            if key in title_fields:
                field_map['titles'].append(val)
            elif key in body_fields:
                field_map['bodies'].append(val)

    return {
        k: list(dict.fromkeys(v)) for k, v in field_map.items()
    }

def extract_span_text(content: str) -> list[str]:
    """Extract text from <span> and <div> blocks that look like headings or labels."""
    results = []
    for tag in ['span', 'div']:
        # Loosened to 4 chars to catch status badges like 'Live', 'Clinic', etc.
        pattern = re.compile(rf'<{tag}(?:\s[^>]*)?>([^<{{}}\n]{{4,}}?)</{tag}>', re.DOTALL)
        for m in pattern.finditer(content):
            val = clean(m.group(1))
            if val and not is_noise(val):
                results.append(val)
    return list(dict.fromkeys(results))

# ─── Main per-file extractor ─────────────────────────────────────────────────────

def extract_all_from_file(filepath: Path) -> dict:
    """Run all extractors on a single file and return categorized content."""
    try:
        raw = filepath.read_text(encoding="utf-8")
    except Exception as e:
        print(f"    ⚠️  Could not read {filepath.name}: {e}")
        return {}

    content = preprocess(raw)

    # --- Structured JSX tag extraction ---
    h1 = extract_tag_content(content, 'h1')
    h2 = extract_tag_content(content, 'h2')
    h3 = extract_tag_content(content, 'h3')
    h4 = extract_tag_content(content, 'h4')
    eyebrow = extract_eyebrow(content)
    buttons = extract_buttons(content)
    # Spans often contain visual labels like "Clinic", "Patient", "10-Min"
    spans = extract_span_text(content)
    paragraphs = extract_paragraphs(content)
    plain_arrays = extract_plain_string_arrays(content)

    # --- Object field extraction (data arrays / const objects) ---
    data_titles = extract_object_field(content, [
        'title', 'heading', 'label', 'name', 'tagline', 'badge', 'eyebrow',
        'risk', 'result', 'outcome', 'impact', 'buttonText', 'btnText', 'cta', 'ctaText',
        'feature', 'legacy', 'modern'
    ])
    data_bodies = extract_object_field(content, ['desc', 'description', 'sub', 'body', 'text', 'subtitle', 'detail', 'summary', 'copy', 'content'])
    comparisons  = extract_object_field(content, ['traditional', 'medikloud', 'before', 'after', 'challenge', 'solution'])
    metrics      = extract_object_field(content, ['stat', 'metric', 'value', 'number'])
    questions    = extract_object_field(content, ['question', 'q'])
    answers      = extract_object_field(content, ['answer', 'a'])
    steps        = extract_object_field(content, ['step', 'action'])

    # --- Inline JSX array object extraction (for .map() patterns with inline objects) ---
    inline = extract_inline_array_objects(content)
    # Merge inline titles/bodies into data_titles/data_bodies (they're same category)
    data_titles = list(dict.fromkeys(data_titles + inline['titles']))
    # Inline bodies will be added to body_copy after dedup

    # --- Deduplicate prose body copy from <p> tags ---
    # Only exclude from JSX paragraphs what's already in JSX headings/buttons.
    # Data-object fields (data_titles, data_bodies) are shown as their own categories.
    jsx_captured = set()
    for lst in [h1, h2, h3, h4, eyebrow, buttons, spans]:
        jsx_captured.update(lst)

    body_copy = []
    seen_body = set()
    for p in paragraphs + plain_arrays:
        if p not in jsx_captured and p not in seen_body and len(p) >= 4:
            body_copy.append(p)
            seen_body.add(p)

    # Add data_bodies that aren't already in headings or jsx body
    all_seen = jsx_captured | seen_body
    for b in data_bodies + inline.get('bodies', []):
        if b not in all_seen and len(b) >= 10:
            body_copy.append(b)
            all_seen.add(b)

    return {
        "eyebrow":     eyebrow,
        "h1":          h1,
        "h2":          h2,
        "h3":          h3,
        "h4":          h4,
        "data_titles": list(dict.fromkeys(data_titles)),   # Titles from data objects/arrays
        "body":        list(dict.fromkeys(body_copy)),      # Prose from <p> + data body fields
        "comparisons": comparisons,
        "metrics":     metrics,
        "questions":   questions,
        "answers":     answers,
        "steps":       list(dict.fromkeys(steps)),
        "cta":         buttons,
    }

# ─── Markdown rendering ──────────────────────────────────────────────────────────

def render_list(title: str, items: list[str], prefix: str = "-") -> str:
    if not items:
        return ""
    lines = [f"**{title}**"]
    for item in items:
        lines.append(f"{prefix} {item}")
    return "\n".join(lines) + "\n"

def render_section(component_name: str, data: dict) -> str:
    if not any(v for v in data.values()):
        return ""

    lines = [f"### `{component_name}`"]

    if data.get("eyebrow"):
        lines.append(render_list("Eyebrow / Badge", data["eyebrow"]))
    if data.get("h1"):
        lines.append(render_list("H1", data["h1"]))
    if data.get("h2"):
        lines.append(render_list("H2", data["h2"]))
    if data.get("h3"):
        lines.append(render_list("H3", data["h3"]))
    if data.get("h4"):
        lines.append(render_list("H4", data["h4"]))
    if data.get("data_titles"):
        lines.append(render_list("Data Array Titles / Labels", data["data_titles"]))
    if data.get("body"):
        lines.append(render_list("Body Copy", data["body"]))
    if data.get("comparisons"):
        lines.append(render_list("Comparison Copy (Traditional vs MediKloud)", data["comparisons"]))
    if data.get("steps"):
        lines.append(render_list("Steps (data objects)", data["steps"]))
    if data.get("metrics"):
        lines.append(render_list("Stats / Metrics", data["metrics"]))
    if data.get("questions"):
        lines.append(render_list("FAQ — Questions", data["questions"]))
    if data.get("answers"):
        lines.append(render_list("FAQ — Answers", data["answers"]))
    if data.get("cta"):
        lines.append(render_list("CTAs / Buttons", data["cta"]))

    return "\n".join(lines) + "\n\n"

def render_page(page: dict, sections: dict) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    lines = [
        f"# {page['title']}",
        f"> **URL**: `{page['url']}` | **Snapshot**: {now}",
        "",
        "> ⚠️ Auto-generated. Run `python3 .agent/scripts/extract_content.py` to refresh after any content changes.",
        "",
        "---",
        "",
    ]
    for comp_name, data in sections.items():
        rendered = render_section(comp_name, data)
        if rendered:
            lines.append(rendered)

    return "\n".join(lines)

# ─── Main orchestration ──────────────────────────────────────────────────────────

def get_ordered_components(page: dict) -> list[str]:
    """Extract the ordered list of component names from a page.tsx import list."""
    if not page.get("page_file"):
        return []
    page_file = ROOT / page["page_file"]
    if not page_file.exists():
        return []
    page_content = page_file.read_text(encoding="utf-8")
    # Find all named imports from component paths
    imports = re.findall(
        r"import\s*\{?\s*(\w+)\s*\}?\s*from\s*['\"]([^'\"]+)['\"]",
        page_content
    )
    # Only keep those from 'components/' paths, skip layout/shared
    ordered = []
    for name, path in imports:
        if 'components/pages' in path and name not in ('Header', 'Footer', 'BackToTop'):
            ordered.append(name)
    return ordered

def process_page(page: dict) -> str:
    comp_dir = ROOT / page["component_dir"]
    sections = {}

    ordered_names = get_ordered_components(page)

    # All TSX/TS files in the component directory
    all_files = []
    if comp_dir.exists():
        all_files = sorted(comp_dir.glob("*.tsx")) + sorted(comp_dir.glob("*.ts"))

    # Global data files (shared across pages)
    GLOBAL_DATA = ["components/pages/home/HomeData.ts"]
    
    # Add data files
    data_to_add = page.get("data_files", []) + GLOBAL_DATA
    for df in data_to_add:
        df_path = ROOT / df
        if df_path.exists():
            # Check if already in all_files to avoid duplicates
            if not any(f.resolve() == df_path.resolve() for f in all_files):
                all_files.append(df_path)

    file_map = {f.stem: f for f in all_files}

    processed = []
    # Process in page-order first
    for comp_name in ordered_names:
        if comp_name in file_map:
            data = extract_all_from_file(file_map[comp_name])
            sections[comp_name] = data
            processed.append(comp_name)

    # Then remaining files alphabetically
    for f in all_files:
        if f.stem not in processed:
            data = extract_all_from_file(f)
            sections[f.stem] = data

    return render_page(page, sections)

def build_index(pages: list[dict]) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    lines = [
        "# MediKloud Content Snapshot — Index",
        f"> Generated: {now}",
        "",
        "> ⚠️ Auto-generated. Run `python3 .agent/scripts/extract_content.py` to refresh.",
        "",
        "---",
        "",
        "## Pages",
        "",
        "| Page | URL | Snapshot File |",
        "| :--- | :--- | :--- |",
    ]
    for page in pages:
        slug = page["slug"]
        lines.append(f"| {page['title']} | `{page['url']}` | [`{slug}.md`](./{slug}.md) |")

    lines += [
        "",
        "---",
        "",
        "## How to Use This in a New Chat",
        "",
        "1. Read `index.md` to get oriented.",
        "2. Open the specific page snapshot (e.g., `managed-pharmacy.md`) for the page you are revamping.",
        "3. Use the extracted copy as the authoritative source of **current live content** — no need to read raw TSX files.",
        "4. After injecting any content changes, re-run: `python3 .agent/scripts/extract_content.py`",
        "",
        "---",
        "",
        "## Quick Reference",
        "",
        "⚠️ **Known violation**: `HomeData.ts > PROBLEM_STATS > note` contains competitor brand names (Apollo, MedPlus, 1mg).",
        "",
        "| Resource | Path |",
        "| :--- | :--- |",
        "| Brand & Compliance Rules | `.agent/rules/content-guidelines.md` |",
        "| SEO & GEO Playbook | `.agent/rules/seo-geo-playbook.md` |",
        "| Content Harmonization Skill | `.agent/skills/content-harmonization/SKILL.md` |",
        "| Revamp Workflow | `.agent/workflows/content-revamp-orchestration.md` |",
        "| Page Revamp Tracker | `.agent/content-revamp-inventory.md` |",
    ]
    return "\n".join(lines)

def main():
    print("🔍 MediKloud Content Extractor (v2)")
    print(f"   Root: {ROOT}")
    print(f"   Output: {OUTPUT_DIR}")
    print()

    for page in PAGES:
        print(f"  ⏳ {page['title']}...")
        try:
            md = process_page(page)
            out_path = OUTPUT_DIR / f"{page['slug']}.md"
            out_path.write_text(md, encoding="utf-8")
            line_count = md.count('\n')
            print(f"  ✅ {out_path.name}  ({line_count} lines)")
        except Exception as e:
            import traceback
            print(f"  ❌ Error: {e}")
            traceback.print_exc()

    index_md = build_index(PAGES)
    (OUTPUT_DIR / "index.md").write_text(index_md, encoding="utf-8")

    total_lines = sum(
        (OUTPUT_DIR / f"{p['slug']}.md").read_text().count('\n')
        for p in PAGES
        if (OUTPUT_DIR / f"{p['slug']}.md").exists()
    )
    print(f"\n  📋 index.md written")
    print(f"\n✅ Done. {len(PAGES)} pages extracted. Total: {total_lines} lines\n")

if __name__ == "__main__":
    main()
