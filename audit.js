const fs = require('fs');
const path = require('path');

const cssVars = [
  "--gradient-blue", "--gradient-blue-dk", "--gradient-indigo", "--gradient-violet", 
  "--gradient-display", "--gradient-action", "--gradient-accent", "--gradient-hero", 
  "--gradient-dark", "--gradient-tinted", "--gradient-eyebrow-r", "--gradient-eyebrow-l", 
  "--gradient-fade-bottom", "--brand-50", "--brand-100", "--brand-200", "--brand-500", 
  "--brand-600", "--brand-700", "--indigo-50", "--indigo-100", "--indigo-200", 
  "--indigo-600", "--indigo-700", "--violet-50", "--violet-100", "--violet-600", 
  "--brand-900", "--text-primary", "--text-secondary", "--text-heading", "--text-body", 
  "--text-subtitle", "--text-muted", "--text-accent", "--text-inverse", "--text-indigo", 
  "--bg-surface", "--bg-surface-alt", "--bg-tinted", "--bg-tinted-indigo", "--bg-dark-start", 
  "--bg-dark-end", "--border-default", "--border-muted", "--border-accent", "--border-focus", 
  "--success", "--success-light", "--success-dark", "--danger", "--danger-light", 
  "--danger-dark", "--metric-light", "--metric-dark", "--shadow-card", "--shadow-card-md", 
  "--shadow-card-lg", "--shadow-btn", "--shadow-float", "--shadow-glow", "--section-sm", 
  "--section", "--section-lg", "--radius-sm", "--radius-md", "--radius-lg", "--radius-xl", 
  "--radius-2xl", "--radius-3xl", "--radius-full", "--blob-blue", "--blob-indigo", 
  "--blob-violet", "--premium-ease", "--color-brand-1", "--color-brand-2"
];

const customClasses = [
  "container-page", "section-py", "section-py-sm", "section-py-lg", "section-py-premium", 
  "bg-section-hero", "bg-section-surface", "bg-section-alt", "bg-section-dark", "blob-layer", 
  "blob-blue", "blob-indigo", "blob-violet", "blob-glow-blue", "page-main", "form-input", 
  "form-input--error", "form-label", "form-icon", "form-error", "text-muted", "eyebrow-wrap", 
  "eyebrow-line-r", "eyebrow-line-l", "eyebrow-text", "display-headline", "display-headline--sub", 
  "blog-blockquote", "inline-code", "heading-accent", "text-display", "text-section", 
  "hero-subtitle", "btn", "btn-lg", "btn-md", "btn-sm", "btn-primary", "btn-secondary", 
  "btn-ghost", "btn-cta-dark", "btn-nav", "btn-dark", "btn-dark-glass", "card", "card--static", 
  "card-tinted", "card-glass", "card-dark", "card-dark--flush", "card-dark--solid", "card--blog", 
  "icon-container", "badge", "badge-brand", "badge-indigo", "badge-violet", "badge-success", 
  "badge-danger", "badge-metric", "badge-slate", "trust-chip", "trust-chip-dot", "trust-chip-text", 
  "icon-chip", "icon-chip-text", "icon-chip-icon", "stat-number", "stat-label", "nav-link", 
  "nav-link--flush", "nav-item-mobile", "section-divider", "premium-h2", "premium-h3", 
  "premium-p", "header-lock", "intro-lock", "tech-grid-overlay", "noise-texture", "prose", 
  "border-muted", "shadow-card-brand", "shadow-btn-brand", "shadow-float-brand", 
  "bg-gradient-action", "bg-gradient-display", "bg-gradient-dark", "bg-gradient-hero", 
  "no-select", "text-balance", "animate-float-slow", "animate-float-medium", 
  "animate-float-slower", "animate-shimmer"
];

const tailwindTokens = [
  "brand-50", "brand-100", "brand-indigo-50", "brand-indigo-100", "brand-indigo-200", 
  "brand-violet-100", "brand-400", "brand-500", "brand-600", "brand-700", "brand-indigo-600", 
  "brand-indigo-700", "brand-900", "slate-50", "slate-100", "slate-200", "slate-300", 
  "slate-400", "slate-500", "slate-600", "slate-700", "slate-800", "slate-900", "success", 
  "success-light", "success-dark", "success-text", "danger", "danger-light", "danger-dark", 
  "danger-text", "metric", "metric-light", "metric-dark", "metric-text", "brand-1", "brand-2",
  "xxxs", "xxs", "xs", "sm", "base", "body-lg", "h6", "h4", "h3", "h5", "h2", "h1", "display", 
  "display-sm", "display-md", "display-lg", "display-xl", "1-75rem", "2rem", "2-25rem", "2-5rem", "2-75rem",
  "sm", "md", "lg", "xl", "2xl", "3xl", "full",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "18", "20", 
  "24", "28", "32", "36", "40", "section-sm", "section", "section-lg", "breathing", "110px", 
  "120px", "280px", "300px", "380px", "500px", "600px", "800px", "28rem", "30rem", "32rem", 
  "24%", "28%", "85%", "92%",
  "card", "card-md", "card-lg", "btn", "float", "glow", "glow-indigo", "none",
  "gradient-display", "gradient-action", "gradient-hero", "gradient-dark", "gradient-dark-alt", "tech-grid",
  "float-slow", "float-medium", "float-slower", "fade-in-up", "fade-in", "marquee"
];

function getAllFiles(dir, extFilter, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, extFilter, fileList);
    } else {
      if (extFilter.some(ext => file.endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const files = [
  ...getAllFiles('app', ['.ts', '.tsx']),
  ...getAllFiles('components', ['.ts', '.tsx'])
];

const results = {};

// Initialize results
cssVars.forEach(v => results[v] = { type: 'CSS Variable', count: 0, locations: new Set() });
customClasses.forEach(c => results['.' + c] = { type: 'Custom Class', count: 0, locations: new Set() });
tailwindTokens.forEach(t => results[t] = { type: 'Tailwind Token', count: 0, locations: new Set() });

const allTokens = [...cssVars, ...customClasses.map(c => '.' + c), ...tailwindTokens];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Find all classes used in className="..." or className={`...`}
  const classMatches = content.match(/className=(?:["']([^"']+)["']|{`([^`]+)`})/g) || [];
  const allClasses = classMatches.map(m => m.replace(/className=|["'`]/g, '').replace(/\${[^}]+}/g, ' ')).join(' ').split(/\s+/).filter(Boolean);
  
  // Find all CSS vars used in styles or anywhere
  const varMatches = content.match(/var\((--[\w-]+)\)/g) || [];
  
  // Direct matching for Tailwind tokens - checking if they exist in class list
  // Usually tokens are parts of classes like text-brand-50, bg-brand-50, etc.
  for (const cls of allClasses) {
    // Check Custom Classes
    if (customClasses.includes(cls)) {
      results['.' + cls].count++;
      results['.' + cls].locations.add(file.replace(/\\/g, '/'));
    }
    
    // Check Tailwind Tokens
    // Extract the token part from a utility class, e.g. text-brand-50 -> brand-50
    const parts = cls.split('-');
    // Try to match suffixes like "brand-50" from "text-brand-50"
    for (let i = 0; i < parts.length; i++) {
        const potentialToken = parts.slice(i).join('-');
        if (tailwindTokens.includes(potentialToken)) {
            // make sure it's a valid match (e.g. not matching "0" from "w-10")
            // Wait, "0" is a token, so "w-10" contains "0" if we just split by "-" and take the last part.
            // Better logic: the token must match the exact suffix after a known prefix (like text-, bg-, border-, etc.)
            // Or just check if the potential token is exactly in the list.
            if (potentialToken === cls) {
               // e.g. "flex", not in our list
               if (tailwindTokens.includes(cls)) {
                 results[cls].count++;
                 results[cls].locations.add(file.replace(/\\/g, '/'));
               }
            } else {
               // e.g. text-brand-50 -> potentialToken = brand-50
               results[potentialToken].count++;
               results[potentialToken].locations.add(file.replace(/\\/g, '/'));
            }
            break; // once we matched a token from this class, move to next class
        }
    }
  }
  
  // Check CSS vars
  for (const varMatch of varMatches) {
    const varName = varMatch.replace(/var\(|\)/g, '');
    if (results[varName]) {
      results[varName].count++;
      results[varName].locations.add(file.replace(/\\/g, '/'));
    }
  }
}

// Generate Markdown
let md = `# Design System Token Audit\n\n`;
md += `This audit tracks the usage of design tokens defined in \`tailwind.config.ts\` and \`app/globals.css\` across the \`app\` and \`components\` directories.\n\n`;

md += `| Design Token | Type | Usage Count | Used Where (Files) |\n`;
md += `|---|---|---|---|\n`;

// Sort results by count (descending), then alphabetically
const sortedTokens = Object.keys(results).sort((a, b) => {
  if (results[b].count !== results[a].count) {
    return results[b].count - results[a].count;
  }
  return a.localeCompare(b);
});

for (const token of sortedTokens) {
  const data = results[token];
  if (data.count > 0) {
    const locations = Array.from(data.locations).map(l => "`" + l + "`").join('<br>');
    md += "| `" + token + "` | " + data.type + " | " + data.count + " | " + locations + " |\n";
  }
}

// Add tokens with 0 usage
md += `\n## Unused Tokens\n\nThe following tokens are defined but not currently used in the audited files:\n\n`;
md += `| Design Token | Type |\n`;
md += `|---|---|\n`;
for (const token of sortedTokens) {
  const data = results[token];
  if (data.count === 0) {
    md += "| `" + token + "` | " + data.type + " |\n";
  }
}

fs.writeFileSync('./audit-results.md', md);
console.log('Audit completed. Results saved to audit-results.md in the current directory.');
