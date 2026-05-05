/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║        DESIGN TOKEN USAGE AUDIT — Auto-Extract & Count       ║
 * ║                                                              ║
 * ║  Extracts tokens from globals.css + tailwind.config.ts       ║
 * ║  then counts usage across the entire codebase.               ║
 * ║  Output: token-usage-report.md                               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const fs = require('fs');
const path = require('path');

// ─── CONFIG ────────────────────────────────────────────────────
const SCAN_DIRS = ['app', 'components'];
const SCAN_EXTS = ['.ts', '.tsx', '.jsx', '.js', '.css'];
const GLOBALS_CSS = path.join(__dirname, 'app', 'globals.css');
const TAILWIND_CONFIG = path.join(__dirname, 'tailwind.config.ts');
const OUTPUT_FILE = path.join(__dirname, 'token-usage-report.md');

// ─── FILE WALKER ───────────────────────────────────────────────
function walk(dir, exts, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue;
      walk(full, exts, results);
    } else if (exts.some(e => entry.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

// ─── 1. EXTRACT CSS VARIABLES FROM globals.css :root ───────────
function extractCSSVariables(cssContent) {
  const tokens = [];
  // Match everything inside :root { ... }
  const rootMatch = cssContent.match(/:root\s*\{([\s\S]*?)\n\}/);
  if (!rootMatch) return tokens;
  const rootBlock = rootMatch[1];
  // Match each --var-name: value;
  const varRegex = /^\s*(--[\w-]+)\s*:/gm;
  let m;
  while ((m = varRegex.exec(rootBlock)) !== null) {
    tokens.push(m[1]);
  }
  return tokens;
}

// ─── 2. EXTRACT CUSTOM CLASSES FROM globals.css ────────────────
function extractCustomClasses(cssContent) {
  const classes = new Set();
  // Match class selectors like .class-name { or .class-name:hover {
  // Exclude pseudo-element selectors and generic tag selectors
  const classRegex = /^\s*\.([\w][\w-]*(?:--[\w-]+)?)\s*(?:\{|,|:(?:hover|focus|active|focus-visible))/gm;
  let m;
  while ((m = classRegex.exec(cssContent)) !== null) {
    const cls = m[1];
    // Skip Tailwind directives and common non-custom classes
    if (['prose', 'group'].includes(cls)) continue;
    classes.add(cls);
  }
  return Array.from(classes);
}

// ─── 3. EXTRACT TAILWIND CONFIG TOKENS ─────────────────────────
function extractTailwindTokens(configContent) {
  const tokens = {};

  // Colors — extract nested objects
  tokens.colors = extractNestedKeys(configContent, 'colors');
  // fontSize
  tokens.fontSize = extractSimpleKeys(configContent, 'fontSize');
  // spacing
  tokens.spacing = extractSimpleKeys(configContent, 'spacing');
  // borderRadius
  tokens.borderRadius = extractSimpleKeys(configContent, 'borderRadius');
  // boxShadow
  tokens.boxShadow = extractSimpleKeys(configContent, 'boxShadow');
  // backgroundImage
  tokens.backgroundImage = extractSimpleKeys(configContent, 'backgroundImage');
  // animation
  tokens.animation = extractSimpleKeys(configContent, 'animation');
  // maxWidth
  tokens.maxWidth = extractSimpleKeys(configContent, 'maxWidth');

  return tokens;
}

function extractSimpleKeys(content, sectionName) {
  const keys = [];
  // Find the section block
  const regex = new RegExp(`(?:^|\\n)\\s*${sectionName}\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, 'm');
  const match = content.match(regex);
  if (!match) return keys;
  const block = match[1];
  // Match quoted keys like 'key': or "key":
  const keyRegex = /['"]([^'"]+)['"]\s*:/g;
  let m;
  while ((m = keyRegex.exec(block)) !== null) {
    keys.push(m[1]);
  }
  return keys;
}

function extractNestedKeys(content, sectionName) {
  const results = [];
  // Find colors block — it's deeply nested
  const regex = new RegExp(`${sectionName}\\s*:\\s*\\{([\\s\\S]*?)\\n\\s*\\},?\\s*\\n`, 'm');
  const match = content.match(regex);
  if (!match) return results;
  const block = match[1];

  // Find sub-objects like brand: { ... }, slate: { ... }
  const subObjRegex = /([\w-]+)\s*:\s*\{([^}]+)\}/g;
  let m;
  while ((m = subObjRegex.exec(block)) !== null) {
    const prefix = m[1];
    const inner = m[2];
    const keyRegex = /['"]?([\w-]+)['"]?\s*:/g;
    let km;
    while ((km = keyRegex.exec(inner)) !== null) {
      const key = km[1];
      if (key === 'DEFAULT') {
        results.push(prefix);
      } else {
        results.push(`${prefix}-${key}`);
      }
    }
  }

  // Also find top-level color keys like 'brand-1': ...
  const topKeyRegex = /^\s*['"]([^'"]+)['"]\s*:\s*(?:'|"|var)/gm;
  let tk;
  while ((tk = topKeyRegex.exec(block)) !== null) {
    if (!results.includes(tk[1])) {
      results.push(tk[1]);
    }
  }

  return results;
}

// ─── 4. COUNT USAGE ────────────────────────────────────────────
function countUsage(token, type, filesWithContent) {
  let totalCount = 0;
  const locations = new Set();

  for (const { filePath, content, relPath } of filesWithContent) {
    let count = 0;

    if (type === 'css-variable') {
      // Count var(--token-name) and direct --token-name references
      const varRegex = new RegExp(`var\\(${escapeRegex(token)}\\)`, 'g');
      const directRegex = new RegExp(`(?<!\\w)${escapeRegex(token)}(?!\\w)`, 'g');
      const varMatches = content.match(varRegex) || [];
      count = varMatches.length;
      // Also count direct references in CSS files (not inside var())
      if (filePath.endsWith('.css')) {
        const directMatches = content.match(directRegex) || [];
        // Subtract definition line and var() matches already counted
        const defRegex = new RegExp(`${escapeRegex(token)}\\s*:`, 'g');
        const defMatches = content.match(defRegex) || [];
        count += Math.max(0, directMatches.length - varMatches.length - defMatches.length);
      }
    } else if (type === 'custom-class') {
      // Count className references and @apply references
      const classRegex = new RegExp(`(?:^|\\s|"|'|\`)${escapeRegex(token)}(?:\\s|"|'|\`|$|\\b)`, 'g');
      const matches = content.match(classRegex) || [];
      count = matches.length;
    } else if (type === 'tw-color') {
      // Colors are used as: text-{token}, bg-{token}, border-{token}, etc.
      const prefixes = ['text', 'bg', 'border', 'ring', 'shadow', 'divide', 'from', 'to', 'via', 'decoration', 'fill', 'stroke', 'outline', 'accent', 'placeholder'];
      for (const prefix of prefixes) {
        const regex = new RegExp(`${prefix}-${escapeRegex(token)}(?![\\w-])`, 'g');
        const matches = content.match(regex) || [];
        count += matches.length;
      }
      // Also check hover:, focus:, etc. variants
      const variantRegex = new RegExp(`(?:hover|focus|active|group-hover|dark):[\\w-]*-${escapeRegex(token)}(?![\\w-])`, 'g');
      const variantMatches = content.match(variantRegex) || [];
      count += variantMatches.length;
    } else if (type === 'tw-fontSize') {
      const regex = new RegExp(`text-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    } else if (type === 'tw-spacing') {
      const prefixes = ['p', 'm', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
                        'w', 'h', 'top', 'bottom', 'left', 'right', 'gap', 'gap-x', 'gap-y',
                        'inset', 'inset-x', 'inset-y', 'space-x', 'space-y',
                        'max-w', 'min-w', 'max-h', 'min-h', 'basis'];
      for (const prefix of prefixes) {
        const regex = new RegExp(`(?:^|\\s|:|")${escapeRegex(prefix)}-${escapeRegex(token)}(?![\\w-])`, 'g');
        const matches = content.match(regex) || [];
        count += matches.length;
      }
    } else if (type === 'tw-borderRadius') {
      const regex = new RegExp(`rounded-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    } else if (type === 'tw-boxShadow') {
      const regex = new RegExp(`shadow-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    } else if (type === 'tw-backgroundImage') {
      const regex = new RegExp(`bg-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    } else if (type === 'tw-animation') {
      const regex = new RegExp(`animate-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    } else if (type === 'tw-maxWidth') {
      const regex = new RegExp(`max-w-${escapeRegex(token)}(?![\\w-])`, 'g');
      const matches = content.match(regex) || [];
      count = matches.length;
    }

    if (count > 0) {
      totalCount += count;
      locations.add(relPath);
    }
  }

  return { count: totalCount, locations: Array.from(locations) };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── MAIN ──────────────────────────────────────────────────────
function main() {
  console.log('🔍 Reading source files...');

  const cssContent = fs.readFileSync(GLOBALS_CSS, 'utf-8');
  const twContent = fs.readFileSync(TAILWIND_CONFIG, 'utf-8');

  // Extract all tokens
  console.log('📦 Extracting tokens from globals.css...');
  const cssVars = extractCSSVariables(cssContent);
  const customClasses = extractCustomClasses(cssContent);

  console.log('📦 Extracting tokens from tailwind.config.ts...');
  const twTokens = extractTailwindTokens(twContent);

  console.log(`   CSS Variables: ${cssVars.length}`);
  console.log(`   Custom Classes: ${customClasses.length}`);
  console.log(`   TW Colors: ${twTokens.colors.length}`);
  console.log(`   TW FontSize: ${twTokens.fontSize.length}`);
  console.log(`   TW Spacing: ${twTokens.spacing.length}`);
  console.log(`   TW BorderRadius: ${twTokens.borderRadius.length}`);
  console.log(`   TW BoxShadow: ${twTokens.boxShadow.length}`);
  console.log(`   TW BackgroundImage: ${twTokens.backgroundImage.length}`);
  console.log(`   TW Animation: ${twTokens.animation.length}`);
  console.log(`   TW MaxWidth: ${twTokens.maxWidth.length}`);

  // Load all source files
  console.log('📂 Scanning source files...');
  const files = [];
  for (const dir of SCAN_DIRS) {
    for (const f of walk(dir, SCAN_EXTS)) {
      files.push({
        filePath: f,
        content: fs.readFileSync(f, 'utf-8'),
        relPath: path.relative(__dirname, f).replace(/\\/g, '/'),
      });
    }
  }
  console.log(`   Found ${files.length} files to scan.`);

  // Count usage for all tokens
  console.log('🔢 Counting usage...');
  const allResults = [];

  for (const v of cssVars) {
    const r = countUsage(v, 'css-variable', files);
    allResults.push({ token: v, source: 'globals.css :root', category: 'CSS Variable', ...r });
  }
  for (const c of customClasses) {
    const r = countUsage(c, 'custom-class', files);
    allResults.push({ token: `.${c}`, source: 'globals.css @layer', category: 'Custom Class', ...r });
  }
  for (const c of twTokens.colors) {
    const r = countUsage(c, 'tw-color', files);
    allResults.push({ token: c, source: 'tailwind colors', category: 'TW Color', ...r });
  }
  for (const t of twTokens.fontSize) {
    const r = countUsage(t, 'tw-fontSize', files);
    allResults.push({ token: `text-${t}`, source: 'tailwind fontSize', category: 'TW FontSize', ...r });
  }
  for (const s of twTokens.spacing) {
    const r = countUsage(s, 'tw-spacing', files);
    allResults.push({ token: `spacing: ${s}`, source: 'tailwind spacing', category: 'TW Spacing', ...r });
  }
  for (const br of twTokens.borderRadius) {
    const r = countUsage(br, 'tw-borderRadius', files);
    allResults.push({ token: `rounded-${br}`, source: 'tailwind borderRadius', category: 'TW BorderRadius', ...r });
  }
  for (const bs of twTokens.boxShadow) {
    const r = countUsage(bs, 'tw-boxShadow', files);
    allResults.push({ token: `shadow-${bs}`, source: 'tailwind boxShadow', category: 'TW BoxShadow', ...r });
  }
  for (const bg of twTokens.backgroundImage) {
    const r = countUsage(bg, 'tw-backgroundImage', files);
    allResults.push({ token: `bg-${bg}`, source: 'tailwind backgroundImage', category: 'TW BackgroundImage', ...r });
  }
  for (const a of twTokens.animation) {
    const r = countUsage(a, 'tw-animation', files);
    allResults.push({ token: `animate-${a}`, source: 'tailwind animation', category: 'TW Animation', ...r });
  }
  for (const mw of twTokens.maxWidth) {
    const r = countUsage(mw, 'tw-maxWidth', files);
    allResults.push({ token: `max-w-${mw}`, source: 'tailwind maxWidth', category: 'TW MaxWidth', ...r });
  }

  // ─── GENERATE MARKDOWN REPORT ────────────────────────────────
  console.log('📝 Generating report...');

  const used = allResults.filter(r => r.count > 0).sort((a, b) => b.count - a.count);
  const unused = allResults.filter(r => r.count === 0).sort((a, b) => a.token.localeCompare(b.token));

  let md = `# Design Token Usage Report\n\n`;
  md += `> Auto-generated on ${new Date().toISOString().split('T')[0]}\n`;
  md += `> Scanned: ${files.length} files in \`${SCAN_DIRS.join(', ')}\`\n\n`;
  md += `## Summary\n\n`;
  md += `| Metric | Count |\n|---|---|\n`;
  md += `| Total tokens defined | ${allResults.length} |\n`;
  md += `| Tokens in use | ${used.length} |\n`;
  md += `| **Unused tokens** | **${unused.length}** |\n\n`;

  // ── USED TOKENS TABLE ──
  md += `## Used Tokens (${used.length})\n\n`;
  md += `| Token | Category | Source | Usage Count | Files |\n`;
  md += `|---|---|---|---:|---|\n`;
  for (const r of used) {
    const locs = r.locations.map(l => `\`${l}\``).join(', ');
    md += `| \`${r.token}\` | ${r.category} | ${r.source} | ${r.count} | ${locs} |\n`;
  }

  // ── UNUSED TOKENS TABLE ──
  md += `\n## Unused Tokens (${unused.length})\n\n`;
  md += `These tokens are defined but have **0 usages** in the scanned source files. Candidates for removal.\n\n`;
  md += `| Token | Category | Source |\n`;
  md += `|---|---|---|\n`;
  for (const r of unused) {
    md += `| \`${r.token}\` | ${r.category} | ${r.source} |\n`;
  }

  // ── BY-CATEGORY BREAKDOWN ──
  md += `\n## Breakdown by Category\n\n`;
  const categories = [...new Set(allResults.map(r => r.category))];
  for (const cat of categories) {
    const catItems = allResults.filter(r => r.category === cat).sort((a, b) => b.count - a.count);
    const catUsed = catItems.filter(r => r.count > 0);
    const catUnused = catItems.filter(r => r.count === 0);
    md += `### ${cat} (${catUsed.length} used / ${catUnused.length} unused)\n\n`;
    md += `| Token | Usage Count |\n|---|---:|\n`;
    for (const r of catItems) {
      md += `| \`${r.token}\` | ${r.count} |\n`;
    }
    md += `\n`;
  }

  fs.writeFileSync(OUTPUT_FILE, md);
  console.log(`\n✅ Report saved to: ${OUTPUT_FILE}`);
  console.log(`   ${used.length} tokens in use, ${unused.length} unused tokens found.`);
}

main();
