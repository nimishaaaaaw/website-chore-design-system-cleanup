const fs = require('fs');
const path = require('path');

// Files that should be removed (unused, temporary, or duplicate)
const filesToRemove = [
  // Temporary scripts (already used)
  'cleanup-unused-images.js',
  'convert-to-webp.js',
  'compress-images.js',

  // Unused images
  'typewriter-no-wrapping.png',

  // Duplicate CSS file (app/globals.css is used, styles/globals.css is not)
  'styles/globals.css',

  // macOS system files
  '.DS_Store',
  'components/.DS_Store',

  // Unused UI components (not imported anywhere)
  'components/ui/chart.tsx',
  'components/ui/resizable.tsx',
  'components/ui/sonner.tsx',
  'components/ui/input-otp.tsx',
  'components/ui/textarea.tsx',

  // Unused UI components (only imported by other UI components, not by main app)
  'components/ui/accordion.tsx',
  'components/ui/alert-dialog.tsx',
  'components/ui/alert.tsx',
  'components/ui/aspect-ratio.tsx',
  'components/ui/avatar.tsx',
  'components/ui/badge.tsx',
  'components/ui/breadcrumb.tsx',
  'components/ui/calendar.tsx',
  'components/ui/carousel.tsx',
  'components/ui/checkbox.tsx',
  'components/ui/collapsible.tsx',
  'components/ui/command.tsx',
  'components/ui/context-menu.tsx',
  'components/ui/dialog.tsx',
  'components/ui/drawer.tsx',
  'components/ui/dropdown-menu.tsx',
  'components/ui/form.tsx',
  'components/ui/hover-card.tsx',
  'components/ui/input.tsx',
  'components/ui/label.tsx',
  'components/ui/menubar.tsx',
  'components/ui/navigation-menu.tsx',
  'components/ui/pagination.tsx',
  'components/ui/popover.tsx',
  'components/ui/progress.tsx',
  'components/ui/radio-group.tsx',
  'components/ui/scroll-area.tsx',
  'components/ui/select.tsx',
  'components/ui/separator.tsx',
  'components/ui/sidebar.tsx',
  'components/ui/skeleton.tsx',
  'components/ui/slider.tsx',
  'components/ui/switch.tsx',
  'components/ui/table.tsx',
  'components/ui/tabs.tsx',
  'components/ui/toggle.tsx',
  'components/ui/toggle-group.tsx',
  'components/ui/tooltip.tsx',
  'components/ui/use-toast.ts',
  'components/ui/toast.tsx',
  'components/ui/toaster.tsx'
];

// Directories that should be removed if empty
const dirsToCheck = [
  'styles'
];

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      const stats = fs.statSync(filePath);
      const sizeInMB = (stats.size / 1024 / 1024).toFixed(2);

      fs.unlinkSync(filePath);
      return { success: true, size: stats.size, sizeInMB };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: false, error: 'File not found' };
}

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      const files = fs.readdirSync(dirPath);
      if (files.length === 0) {
        fs.rmdirSync(dirPath);
        return { success: true, message: 'Empty directory removed' };
      } else {
        return { success: false, message: `Directory not empty (${files.length} files)` };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: false, error: 'Directory not found' };
}

function comprehensiveCleanup() {
  console.log('🧹 Starting comprehensive codebase cleanup...\n');

  let totalSizeRemoved = 0;
  let filesRemoved = 0;
  let dirsRemoved = 0;

  // Remove files
  filesToRemove.forEach(filePath => {
    const result = removeFile(filePath);

    if (result.success) {
      totalSizeRemoved += result.size;
      filesRemoved++;
      console.log(`✅ Removed: ${filePath} (${result.sizeInMB}MB)`);
    } else if (result.error === 'File not found') {
      console.log(`⚠️  ${filePath} not found, skipping...`);
    } else {
      console.log(`❌ Error removing ${filePath}:`, result.error);
    }
  });

  // Check and remove empty directories
  dirsToCheck.forEach(dirPath => {
    const result = removeDirectory(dirPath);

    if (result.success) {
      dirsRemoved++;
      console.log(`✅ Removed empty directory: ${dirPath}`);
    } else {
      console.log(`ℹ️  ${dirPath}: ${result.message}`);
    }
  });

  const totalSizeRemovedMB = (totalSizeRemoved / 1024 / 1024).toFixed(2);

  console.log('\n🎉 Comprehensive cleanup complete!');
  console.log(`📁 Files removed: ${filesRemoved}`);
  console.log(`📂 Directories removed: ${dirsRemoved}`);
  console.log(`💾 Space saved: ${totalSizeRemovedMB}MB`);

  // Show remaining structure
  console.log('\n📋 Remaining project structure:');
  showProjectStructure('.');
}

function showProjectStructure(dir, indent = '') {
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    if (item === 'node_modules' || item === '.git' || item === '.next') {
      console.log(`${indent}📁 ${item}/ (system directory)`);
      return;
    }

    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      console.log(`${indent}📁 ${item}/`);
      // Don't go deeper than 2 levels to avoid clutter
      if (indent.length < 4) {
        showProjectStructure(itemPath, indent + '  ');
      }
    } else {
      const sizeInKB = (stats.size / 1024).toFixed(1);
      console.log(`${indent}📄 ${item} (${sizeInKB}KB)`);
    }
  });
}

// Run cleanup
comprehensiveCleanup();

