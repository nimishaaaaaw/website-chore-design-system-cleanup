/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║     DESIGN TOKEN USAGE AUDIT v2 — Comprehensive Counter     ║
 * ║                                                              ║
 * ║  1. Extracts CSS variables from globals.css :root            ║
 * ║  2. Extracts custom classes from globals.css @layer          ║
 * ║  3. Extracts Tailwind config tokens (colors, fontSize, etc.) ║
 * ║  4. Counts usage across app/ and components/ directories     ║
 * ║  5. Outputs a structured Markdown report                     ║
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
      if (['node_modules', '.next', '.git'].includes(entry)) continue;
      walk(full, exts, results);
    } else if (exts.some(e => entry.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── 1. EXTRACT CSS VARIABLES FROM globals.css :root ───────────
function extractCSSVariables(cssContent) {
  const tokens = [];
  const rootMatch = cssContent.match(/:root\s*\{([\s\S]*?)\n\}/);
  if (!rootMatch) return tokens;
  const rootBlock = rootMatch[1];
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
  const classRegex = /^\s*\.([\w][\w-]*(?:--[\w-]+)?)\s*(?:\{|,|:(?:hover|focus|active|focus-visible))/gm;
  let m;
  while ((m = classRegex.exec(cssContent)) !== null) {
    const cls = m[1];
    if (['prose', 'group'].includes(cls)) continue;
    classes.add(cls);
  }
  return Array.from(classes);
}

// ─── 3. HARDCODED TAILWIND CONFIG TOKENS ───────────────────────
// Regex-based extraction is fragile for nested TS objects.
// Instead, we hardcode the known tokens from tailwind.config.ts.
function getTailwindTokens() {
  return {
    colors: [
      'brand-50', 'brand-100', 'brand-indigo-50', 'brand-indigo-100', 'brand-indigo-200',
      'brand-violet-100', 'brand-400', 'brand-500', 'brand-600', 'brand-700',
      'brand-indigo-600', 'brand-indigo-700', 'brand-900',
      'slate-50', 'slate-100', 'slate-200', 'slate-300', 'slate-400',
      'slate-500', 'slate-600', 'slate-700', 'slate-800', 'slate-900',
      'success', 'success-light', 'success-dark', 'success-text',
      'danger', 'danger-light', 'danger-dark', 'danger-text',
      'metric', 'metric-light', 'metric-dark', 'metric-text',
      'brand-1', 'brand-2',
    ],
    fontSize: [
      'xxxs', 'xxs', 'xs', 'sm', 'base', 'body-lg',
      'h6', 'h5', 'h4', 'h3', 'h2', 'h1', 'display',
      'display-sm', 'display-md', 'display-lg', 'display-xl',
      '1-75rem', '2rem', '2-25rem', '2-5rem', '2-75rem',
    ],
    spacing: [
      'section-sm', 'section', 'section-lg', 'breathing',
      '110px', '120px', '280px', '300px', '380px', '500px', '600px', '800px',
      '28rem', '30rem', '32rem', '24%', '28%', '85%', '92%',
    ],
    borderRadius: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    boxShadow: ['card', 'card-md', 'card-lg', 'btn', 'float', 'glow', 'glow-indigo', 'none'],
    backgroundImage: [
      'gradient-display', 'gradient-action', 'gradient-hero',
      'gradient-dark', 'gradient-dark-alt', 'tech-grid',
    ],
    animation: ['float-slow', 'float-medium', 'float-slower', 'fade-in-up', 'fade-in', 'marquee'],
    maxWidth: ['container', 'header-lock', 'intro-lock', 'hero-subtitle'],
  };
}

// ─── 4. COUNT USAGE ────────────────────────────────────────────
function countTokenUsage(token, type, filesWithContent) {
  let totalCount = 0;
  const locations = new Set();

  for (const { filePath, content, relPath } of filesWithContent) {
    let count = 0;

    if (type === 'css-variable') {
      // Count var(--token-name) usage (not definition lines)
      const varRegex = new RegExp(`var\\(\\s*${escapeRegex(token)}\\s*(?:,|\\))`, 'g');
      const varMatches = content.match(varRegex) || [];
      count = varMatches.length;
      // Exclude the :root definition line in globals.css
      if (filePath.endsWith('globals.css')) {
        const defRegex = new RegExp(`^\\s*${escapeRegex(token)}\\s*:`, 'gm');
        const defMatches = content.match(defRegex) || [];
        // Don't subtract — we only counted var() references, not definitions
      }
    } else if (type === 'custom-class') {
      // Count className="..." references in TSX/JSX and @apply in CSS
      // But NOT the class definition itself in globals.css
      const classToken = token.replace(/^\./, '');
      
      if (filePath.endsWith('.css')) {
        // In CSS: count @apply references and className-like usage, but not the definition
        const applyRegex = new RegExp(`@apply[^;]*\\b${escapeRegex(classToken)}\\b`, 'g');
        const applyMatches = content.match(applyRegex) || [];
        count += applyMatches.length;
        // Also count var() or other references to this class (e.g. in @apply chains)
      } else {
        // In TSX/JSX: count class name usage in className attributes and template literals
        const regex = new RegExp(`(?:^|\\s|"|'|\`|{)${escapeRegex(classToken)}(?:\\s|"|'|\`|}|$)`, 'g');
        const matches = content.match(regex) || [];
        count += matches.length;
      }
    } else if (type === 'tw-color') {
      const prefixes = ['text', 'bg', 'border', 'ring', 'shadow', 'divide', 'from', 'to', 'via',
                         'decoration', 'fill', 'stroke', 'outline', 'accent', 'placeholder'];
      for (const prefix of prefixes) {
        const regex = new RegExp(`(?:^|\\s|"|'|\`|:)${prefix}-${escapeRegex(token)}(?![\\w-])`, 'g');
        count += (content.match(regex) || []).length;
      }
      // Variants like hover:text-brand-600
      const variantRegex = new RegExp(`(?:hover|focus|active|group-hover|dark):[\\w-]*-${escapeRegex(token)}(?![\\w-])`, 'g');
      count += (content.match(variantRegex) || []).length;
    } else if (type === 'tw-fontSize') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)text-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    } else if (type === 'tw-spacing') {
      const prefixes = ['p', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
                         'w', 'h', 'gap', 'gap-x', 'gap-y', 'top', 'bottom', 'left', 'right',
                         'inset', 'inset-x', 'inset-y', 'space-x', 'space-y',
                         'max-w', 'min-w', 'max-h', 'min-h', 'basis'];
      for (const prefix of prefixes) {
        const regex = new RegExp(`(?:^|\\s|"|'|\`|:)${escapeRegex(prefix)}-${escapeRegex(token)}(?![\\w-])`, 'g');
        count += (content.match(regex) || []).length;
      }
    } else if (type === 'tw-borderRadius') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)rounded-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    } else if (type === 'tw-boxShadow') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)shadow-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    } else if (type === 'tw-backgroundImage') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)bg-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    } else if (type === 'tw-animation') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)animate-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    } else if (type === 'tw-maxWidth') {
      const regex = new RegExp(`(?:^|\\s|"|'|\`|:)max-w-${escapeRegex(token)}(?![\\w-])`, 'g');
      count = (content.match(regex) || []).length;
    }

    if (count > 0) {
      totalCount += count;
      locations.add(relPath);
    }
  }

  return { count: totalCount, locations: Array.from(locations) };
}

// ─── MAIN ──────────────────────────────────────────────────────
function main() {
  console.log('🔍 Design Token Usage Audit v2');
  console.log('─'.repeat(50));

  const cssContent = fs.readFileSync(GLOBALS_CSS, 'utf-8');

  // Extract tokens
  console.log('📦 Extracting tokens...');
  const cssVars = extractCSSVariables(cssContent);
  const customClasses = extractCustomClasses(cssContent);
  const twTokens = getTailwindTokens();

  console.log(`   CSS Variables:     ${cssVars.length}`);
  console.log(`   Custom Classes:    ${customClasses.length}`);
  console.log(`   TW Colors:         ${twTokens.colors.length}`);
  console.log(`   TW FontSize:       ${twTokens.fontSize.length}`);
  console.log(`   TW Spacing:        ${twTokens.spacing.length}`);
  console.log(`   TW BorderRadius:   ${twTokens.borderRadius.length}`);
  console.log(`   TW BoxShadow:      ${twTokens.boxShadow.length}`);
  console.log(`   TW BackgroundImage:${twTokens.backgroundImage.length}`);
  console.log(`   TW Animation:      ${twTokens.animation.length}`);
  console.log(`   TW MaxWidth:       ${twTokens.maxWidth.length}`);

  // Load all source files
  console.log('\n📂 Scanning source files...');
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

  // Count usage
  console.log('\n🔢 Counting usage...');
  const allResults = [];

  for (const v of cssVars) {
    const r = countTokenUsage(v, 'css-variable', files);
    allResults.push({ token: v, source: 'globals.css :root', category: 'CSS Variable', ...r });
  }
  for (const c of customClasses) {
    const r = countTokenUsage(`.${c}`, 'custom-class', files);
    allResults.push({ token: `.${c}`, source: 'globals.css', category: 'Custom Class', ...r });
  }
  for (const c of twTokens.colors) {
    const r = countTokenUsage(c, 'tw-color', files);
    allResults.push({ token: c, source: 'tailwind colors', category: 'TW Color', ...r });
  }
  for (const t of twTokens.fontSize) {
    const r = countTokenUsage(t, 'tw-fontSize', files);
    allResults.push({ token: `text-${t}`, source: 'tailwind fontSize', category: 'TW FontSize', ...r });
  }
  for (const s of twTokens.spacing) {
    const r = countTokenUsage(s, 'tw-spacing', files);
    allResults.push({ token: `spacing:${s}`, source: 'tailwind spacing', category: 'TW Spacing', ...r });
  }
  for (const br of twTokens.borderRadius) {
    const r = countTokenUsage(br, 'tw-borderRadius', files);
    allResults.push({ token: `rounded-${br}`, source: 'tailwind borderRadius', category: 'TW BorderRadius', ...r });
  }
  for (const bs of twTokens.boxShadow) {
    const r = countTokenUsage(bs, 'tw-boxShadow', files);
    allResults.push({ token: `shadow-${bs}`, source: 'tailwind boxShadow', category: 'TW BoxShadow', ...r });
  }
  for (const bg of twTokens.backgroundImage) {
    const r = countTokenUsage(bg, 'tw-backgroundImage', files);
    allResults.push({ token: `bg-${bg}`, source: 'tailwind backgroundImage', category: 'TW BackgroundImage', ...r });
  }
  for (const a of twTokens.animation) {
    const r = countTokenUsage(a, 'tw-animation', files);
    allResults.push({ token: `animate-${a}`, source: 'tailwind animation', category: 'TW Animation', ...r });
  }
  for (const mw of twTokens.maxWidth) {
    const r = countTokenUsage(mw, 'tw-maxWidth', files);
    allResults.push({ token: `max-w-${mw}`, source: 'tailwind maxWidth', category: 'TW MaxWidth', ...r });
  }

  // ─── GENERATE MARKDOWN REPORT ────────────────────────────────
  console.log('\n📝 Generating report...');
  const used = allResults.filter(r => r.count > 0).sort((a, b) => b.count - a.count);
  const unused = allResults.filter(r => r.count === 0).sort((a, b) => a.token.localeCompare(b.token));

  let md = `# Design Token Usage Report\n\n`;
  md += `> Auto-generated on ${new Date().toISOString().split('T')[0]}\n`;
  md += `> Scanned: ${files.length} files in \`${SCAN_DIRS.join(', ')}\`\n\n`;

  md += `## Summary\n\n`;
  md += `| Metric | Count |\n|---|---:|\n`;
  md += `| Total tokens defined | ${allResults.length} |\n`;
  md += `| Tokens in use | ${used.length} |\n`;
  md += `| **Unused tokens** | **${unused.length}** |\n\n`;

  // ── USED TOKENS TABLE ──
  md += `## ✅ Used Tokens (${used.length})\n\n`;
  md += `| Token | Category | Source | Usage Count | Files |\n`;
  md += `|---|---|---|---:|---|\n`;
  for (const r of used) {
    const locs = r.locations.map(l => `\`${l}\``).join(', ');
    md += `| \`${r.token}\` | ${r.category} | ${r.source} | ${r.count} | ${locs} |\n`;
  }

  // ── UNUSED TOKENS TABLE ──
  md += `\n## ❌ Unused Tokens (${unused.length})\n\n`;
  md += `These tokens are defined but have **0 usages** in scanned source files. Candidates for removal.\n\n`;
  md += `| Token | Category | Source |\n`;
  md += `|---|---|---|\n`;
  for (const r of unused) {
    md += `| \`${r.token}\` | ${r.category} | ${r.source} |\n`;
  }

  // ── BY-CATEGORY BREAKDOWN ──
  md += `\n## 📊 Breakdown by Category\n\n`;
  const categories = [...new Set(allResults.map(r => r.category))];
  for (const cat of categories) {
    const catItems = allResults.filter(r => r.category === cat).sort((a, b) => b.count - a.count);
    const catUsed = catItems.filter(r => r.count > 0);
    const catUnused = catItems.filter(r => r.count === 0);
    md += `### ${cat} (${catUsed.length} used / ${catUnused.length} unused)\n\n`;
    md += `| Token | Usage Count |\n|---|---:|\n`;
    for (const r of catItems) {
      const marker = r.count === 0 ? ' ⚠️' : '';
      md += `| \`${r.token}\`${marker} | ${r.count} |\n`;
    }
    md += `\n`;
  }

  fs.writeFileSync(OUTPUT_FILE, md);
  console.log(`\n✅ Report saved to: ${OUTPUT_FILE}`);
  console.log(`   ${used.length} tokens in use, ${unused.length} unused tokens found.`);
}

main();
