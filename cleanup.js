const fs = require('fs');
const glob = require('glob');

const files = glob.sync('components/pages/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes("from 'framer-motion'") && !content.includes("motion.") && !content.includes("<motion") && !content.includes("AnimatePresence") && !content.includes("useAnimation") && !content.includes("useScroll") && !content.includes("useTransform") && !content.includes("useMotionValue") && !content.includes("Variants") && !content.includes("useInView")) {
    content = content.replace(/import\s+\{.*motion.*\}\s+from\s+['"]framer-motion['"];?\n?/, '');
    fs.writeFileSync(file, content);
    console.log('Cleaned', file);
  }
});
