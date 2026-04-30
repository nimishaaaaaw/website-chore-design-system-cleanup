const fs = require('fs');
const path = require('path');

const typography = [
  'xs', 'sm', 'base', 'body-lg', 'h4', 'h3', 'h2', 'h1', 'display', 'display-sm', 'display-md', 'display-lg', 'display-xl',
  '9px', '10px', '11px', '12px', '12-5', '13px', '13-5', '14px', '15px', '16px', '17px', '40px',
  '1-75rem', '2rem', '2-25rem', '2-5rem', '2-75rem'
];

const colors = [
  'brand-50', 'brand-100', 'brand-indigo-50', 'brand-indigo-100', 'brand-indigo-200', 'brand-violet-50', 'brand-violet-100',
  'brand-400', 'brand-500', 'brand-600', 'brand-700', 'brand-indigo-600', 'brand-indigo-700', 'brand-violet-600', 'brand-violet-700',
  'brand-900', 'brand-dark',
  'success', 'success-light', 'success-dark', 'success-text',
  'danger', 'danger-light', 'danger-dark', 'danger-text',
  'warning', 'warning-light', 'warning-dark', 'warning-text',
  'metric', 'metric-light', 'metric-dark', 'metric-text',
  'brand-1', 'brand-2', 'brand-3', 'brand-4', 'dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5', 'dark-6',
  'light-1', 'light-2', 'light-3', 'muted-1', 'muted-2', 'semantic-1', 'semantic-2'
];

const spacing = [
  'section-xs', 'section-sm', 'section', 'section-lg', 'breathing',
  '90px', '110px', '120px', '240px', '280px', '300px', '380px', '500px', '600px', '800px',
  '28rem', '30rem', '32rem', '24%', '28%', '42%', '85%', '92%'
];

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = [...getAllFiles('app'), ...getAllFiles('components')];

const counts = {
  typography: {},
  colors: {},
  spacing: {}
};

typography.forEach(t => counts.typography[t] = 0);
colors.forEach(c => counts.colors[c] = 0);
spacing.forEach(s => counts.spacing[s] = 0);

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  typography.forEach(t => {
    const regex = new RegExp(`text-${t}\\b|font-${t}\\b`, 'g');
    const matches = content.match(regex);
    if (matches) counts.typography[t] += matches.length;
  });

  colors.forEach(c => {
    const regex = new RegExp(`text-${c}\\b|bg-${c}\\b|border-${c}\\b|ring-${c}\\b|shadow-${c}\\b|divide-${c}\\b|from-${c}\\b|to-${c}\\b|via-${c}\\b|decoration-${c}\\b|fill-${c}\\b|stroke-${c}\\b`, 'g');
    const matches = content.match(regex);
    if (matches) counts.colors[c] += matches.length;
  });

  spacing.forEach(s => {
    const regex = new RegExp(`\\b(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|w|h|top|bottom|left|right|gap|gap-x|gap-y|inset|inset-x|inset-y)-${s}\\b|\\bmax-w-${s}\\b|\\bmin-w-${s}\\b|\\bmax-h-${s}\\b|\\bmin-h-${s}\\b`, 'g');
    const matches = content.match(regex);
    if (matches) counts.spacing[s] += matches.length;
  });
});

console.log("=== UNUSED GHOST TOKENS ===");

console.log("\n[Typography]");
Object.entries(counts.typography).filter(([k,v]) => v === 0).forEach(([k]) => console.log(k));

console.log("\n[Colors]");
Object.entries(counts.colors).filter(([k,v]) => v === 0).forEach(([k]) => console.log(k));

console.log("\n[Spacing]");
Object.entries(counts.spacing).filter(([k,v]) => v === 0).forEach(([k]) => console.log(k));
