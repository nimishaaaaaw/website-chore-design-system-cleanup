const fs = require('fs');
const path = require('path');

const tailwindConfigPath = './tailwind.config.ts';
const searchDirs = ['./app', './components', './pages'];

// Map config blocks to common Tailwind prefixes
const prefixMap = {
  colors: ['text-', 'bg-', 'border-', 'from-', 'to-', 'via-', 'ring-', 'outline-', 'accent-', 'shadow-'],
  spacing: ['m-', 'mt-', 'mb-', 'ml-', 'mr-', 'mx-', 'my-', 'p-', 'pt-', 'pb-', 'pl-', 'pr-', 'px-', 'py-', 'w-', 'h-', 'gap-', 'top-', 'bottom-', 'left-', 'right-', 'inset-'],
  fontSize: ['text-'],
  borderRadius: ['rounded-', 'rounded-t-', 'rounded-b-', 'rounded-l-', 'rounded-r-'],
  boxShadow: ['shadow-'],
};

function getFiles(dir, files_ = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = path.join(dir, files[i]);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else if (name.endsWith('.tsx')) {
      files_.push(name);
    }
  }
  return files_;
}

console.log('🚀 Starting Advanced MediKloud Token Audit...');

try {
  const configContent = fs.readFileSync(tailwindConfigPath, 'utf8');
  const allFiles = searchDirs.flatMap(dir => fs.existsSync(dir) ? getFiles(dir) : []);
  const codebase = allFiles.map(file => fs.readFileSync(file, 'utf8')).join(' ');

  const reports = [];

  Object.keys(prefixMap).forEach(block => {
    const blockRegex = new RegExp(`${block}:\\s*{([\\s\\S]*?)}`, 'g');
    const match = blockRegex.exec(configContent);
    
    if (match) {
      // Extract keys, handling nested objects like 'brand: { 50: ... }'
      const lines = match[1].split('\n');
      let currentParent = '';
      
      lines.forEach(line => {
        // Detect parent objects (like brand: {)
        const parentMatch = line.match(/^\s*['"]?([a-zA-Z0-9-]+)['"]?\s*:\s*{/);
        if (parentMatch) currentParent = parentMatch[1];
        if (line.includes('}')) currentParent = '';

        // Detect keys
        const keyMatch = line.match(/^\s*['"]?([a-zA-Z0-9.-]+)['"]?\s*:/);
        if (keyMatch) {
          const rawKey = keyMatch[1];
          if (rawKey === currentParent) return; // Skip parent line

          const fullToken = currentParent ? `${currentParent}-${rawKey}` : rawKey;
          
          // Check if token exists literally OR with any prefix
          const prefixes = prefixMap[block];
          const isUsed = codebase.includes(fullToken) || 
                         prefixes.some(p => codebase.includes(`${p}${fullToken}`));

          if (!isUsed && !['DEFAULT', 'sans', 'mono', 'letterSpacing', 'lineHeight'].includes(rawKey)) {
            reports.push({ Block: block, Token: fullToken });
          }
        }
      });
    }
  });

  console.log('\n📊 Advanced Audit Results:');
  if (reports.length > 0) {
    console.table(reports);
    console.log(`\n💡 These ${reports.length} tokens were not found as literals or with Tailwind prefixes.`);
  } else {
    console.log('✅ No unused tokens found, even with prefix checking!');
  }

} catch (error) {
  console.error('Audit failed:', error.message);
}