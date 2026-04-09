import fs from 'fs';
import path from 'path';

// Files we want to export in order
const filesToExport = [
  'app/globals.css',
  'tailwind.config.ts',
  'components/pages/home/MainHero.tsx',
  'components/pages/solutions/clinic-with-pharmacy/ClinicWithPharmacyHero.tsx',
  'components/pages/solutions/clinic-without-pharmacy/ClinicHero.tsx',
  'components/pages/solutions/hospital-pharmacy/HospitalPharmacyHero.tsx',
  'components/pages/solutions/hospital-without-pharmacy/HospitalWithoutPharmacyHero.tsx',
  'components/pages/products/hospital-management-system/HMSHero.tsx',
  'components/pages/products/managed-pharmacy/MPHero.tsx',
  'components/pages/products/refill-engine/RefillHero.tsx',
  'components/pages/products/virtual-pharmacy/VPHero.tsx'
];

const workspaceRoot = process.cwd();
const outputPath = path.join(workspaceRoot, 'all-heroes-export.md');

console.log(`Exporting ${filesToExport.length} Hero components to ${outputPath}...`);

let markdownOutput = `# Export for All Hero Sections\n\n`;

for (const relativePath of filesToExport) {
  const fullPath = path.join(workspaceRoot, relativePath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${relativePath}`);
    continue;
  }

  const ext = path.extname(fullPath).slice(1) || 'text';
  let language = ext;
  if (ext === 'ts' || ext === 'tsx') language = 'typescript';
  if (ext === 'js' || ext === 'jsx') language = 'javascript';
  if (relativePath.endsWith('tsx')) language = 'tsx';
  
  let content = '';
  try {
    content = fs.readFileSync(fullPath, 'utf8');
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
