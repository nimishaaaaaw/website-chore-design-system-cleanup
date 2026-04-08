import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Usage: node .agent/scripts/export-page.mjs <route-path>
// Example: node .agent/scripts/export-page.mjs app/solutions/clinic-without-pharmacy/page.tsx

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Please provide the path to the page.tsx file");
  process.exit(1);
}

const pagePath = args[0];
const workspaceRoot = process.cwd();

// We'll create the markdown file in the current directory
const pageDirName = path.basename(path.dirname(pagePath));
const outputPath = path.join(workspaceRoot, `${pageDirName}-export.md`);

// Files we want to export in order
const filesToExport = [];

// 1. Global CSS
const globalCssPath = path.join(workspaceRoot, 'app/globals.css');
if (fs.existsSync(globalCssPath)) {
  filesToExport.push(globalCssPath);
}

// 2. Tailwind Config
const tailwindConfigPath = path.join(workspaceRoot, 'tailwind.config.ts');
if (fs.existsSync(tailwindConfigPath)) {
  filesToExport.push(tailwindConfigPath);
}

// 3. Page File
const fullPagePath = path.join(workspaceRoot, pagePath);
if (fs.existsSync(fullPagePath)) {
  filesToExport.push(fullPagePath);
} else {
  console.error(`Page file not found: ${fullPagePath}`);
  process.exit(1);
}

// 4. Component Level Code (Parsed from page file)
function resolveComponent(importPath, currentFilePath) {
  let resolvedPath = '';
  if (importPath.startsWith('@/')) {
    resolvedPath = path.join(workspaceRoot, importPath.slice(2));
  } else if (importPath.startsWith('.')) {
    resolvedPath = path.resolve(path.dirname(currentFilePath), importPath);
  } else {
    // Only resolve relative and alias paths
    return null;
  }
  
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  for (const ext of extensions) {
    if (fs.existsSync(resolvedPath + ext)) {
      return resolvedPath + ext;
    }
  }
  // Try index files
  for (const ext of extensions) {
    const indexFile = path.join(resolvedPath, 'index' + ext);
    if (fs.existsSync(indexFile)) {
      return indexFile;
    }
  }
  return null;
}

const components = new Set();

function extractComponents(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all imports
  const importRegex = /import\s+[\s\S]*?\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    // Filter for local components usually stored in a components directory
    if (importPath.includes('components') || importPath.startsWith('.')) {
      const resolved = resolveComponent(importPath, filePath);
      if (
        resolved && 
        !components.has(resolved) && 
        resolved.includes('components/') &&
        !resolved.includes('components/layout') &&
        !resolved.includes('layout')
      ) {
        components.add(resolved);
        filesToExport.push(resolved);
      }
    }
  }
}

// Extract components from the page
extractComponents(fullPagePath);

// Generate Markdown
console.log(`Exporting ${filesToExport.length} files to ${outputPath}...`);

let markdownOutput = `# Export for ${pagePath}\n\n`;

for (const file of filesToExport) {
  const relativePath = path.relative(workspaceRoot, file);
  const ext = path.extname(file).slice(1) || 'text';
  let language = ext;
  if (ext === 'ts' || ext === 'tsx') language = 'typescript';
  if (ext === 'js' || ext === 'jsx') language = 'javascript';
  if (relativePath.endsWith('tsx')) language = 'tsx';
  
  let content = '';
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch (err) {
    content = `// Error reading file: ${err.message}`;
  }
  
  markdownOutput += `## ${relativePath}\n\n`;
  markdownOutput += `\`\`\`${language}\n`;
  markdownOutput += content;
  markdownOutput += `\n\`\`\`\n\n`;
}

fs.writeFileSync(outputPath, markdownOutput);
console.log(`Success! File saved to ${outputPath}`);
