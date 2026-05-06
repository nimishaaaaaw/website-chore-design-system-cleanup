const { PurgeCSS } = require('purgecss');
const fs = require('fs');

(async () => {
  console.log('🔍 Starting PurgeCSS analysis...');
  
  try {
    const purgeCSSResults = await new PurgeCSS().purge({
      // 1. Where your React components live
      content: [
        './app/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './hooks/**/*.{ts,tsx,js,jsx}' 
      ],
      // 2. The global CSS file to clean
      css: ['./app/globals.css'],
      // 3. Enable variable purging
      variables: true,
      // 4. React/Tailwind extractor
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    });

    if (purgeCSSResults.length === 0) {
      console.log('⚠️ No CSS file was processed. Check your css path.');
      return;
    }

    // Extract the cleaned CSS string
    const cleanedCSS = purgeCSSResults[0].css;

    // Write it to a new file
    fs.writeFileSync('./app/globals-cleaned.css', cleanedCSS);
    
    console.log('✅ Done! Successfully created app/globals-cleaned.css');
  } catch (error) {
    console.error('❌ An error occurred during purging:', error);
  }
})();