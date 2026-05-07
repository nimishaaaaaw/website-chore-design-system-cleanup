const fs = require('fs');
const path = require('path');

/**
 * 1. CONFIGURATION
 */
const searchDirs = ['./app', './components', './pages'];
const tailwindConfigPath = './tailwind.config.ts'; // Adjust to .js if necessary

// We are looking for keys inside these specific extend blocks
const targetBlocks = ['fontSize', 'colors', 'spacing', 'borderRadius', 'boxShadow', 'backgroundImage'];

/**
 * 2. HELPER FUNCTIONS
 */
function getFiles(dir, files_ = []) {
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = path.join(dir, files[i]);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      if (name.endsWith('.tsx')) files_.push(name);
    }
  }
  return files_;
}

/**
 * 3. EXECUTION
 */
console.log('🚀 Starting Deep MediKloud Token Audit...');

try {
  const configContent = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  // Extracting keys using a Regex approach to capture quoted keys and property names
  // This looks for " 'key': " or " key: " patterns
  const allTokens = [];
  targetBlocks.forEach(block => {
    const blockRegex = new RegExp(`${block}:\\s*{([\\s\\S]*?)}`, 'g');
    const match = blockRegex.exec(configContent);
    if (match) {
      const keys = match[1].match(/(?<=['"]?)[a-zA-Z0-9.\-%/]+(?=['"]?\s*:)/g);
      if (keys) allTokens.push(...keys);
    }
  });

  // Remove duplicates and standard numeric Tailwind keys we want to keep
  const uniqueTokens = [...new Set(allTokens)].filter(t => !/^[0-9]+$/.test(t));

  const allFiles = searchDirs.flatMap(dir => fs.existsSync(dir) ? getFiles(dir) : []);
  const codebase = allFiles.map(file => fs.readFileSync(file, 'utf8')).join(' ');

  const unused = [];
  const active = [];

  uniqueTokens.forEach(token => {
    // We search for the token. Note: we don't check for 'brand' generally, 
    // but specific shades like 'brand-600'
    if (!codebase.includes(token)) {
      unused.push(token);
    } else {
      active.push(token);
    }
  });

  // 4. REPORTING
  console.log(`\n📊 Audit Summary:`);
  console.log(`- Total Custom Tokens Scanned: ${uniqueTokens.length}`);
  console.log(`- Tokens In Use: ${active.length}`);
  console.log(`- Potentially Unused: ${unused.length}`);

  if (unused.length > 0) {
    console.log('\n❌ UNUSED TOKENS (Safe to investigate for removal):');
    console.table(unused.sort());
  } else {
    console.log('\n✅ Your design system is 100% efficient! No unused tokens found.');
  }

} catch (error) {
  console.error('Audit failed:', error.message);
}