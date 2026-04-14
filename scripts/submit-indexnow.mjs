/**
 * scripts/submit-indexnow.mjs
 * 
 * This script fetches the live sitemap from the production URL, 
 * extracts all URLs, and submits them to IndexNow.
 * 
 * Usage: INDEXNOW_KEY=xxx node scripts/submit-indexnow.mjs
 */

const HOST = 'www.medikloud.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  console.error('Error: INDEXNOW_KEY environment variable is required.');
  process.exit(1);
}

async function run() {
  try {
    console.log(`Fetching sitemap from: ${SITEMAP_URL}`);
    const response = await fetch(SITEMAP_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
    }

    const xml = await response.text();
    
    // Simple regex to extract <loc> URLs from sitemap XML
    const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(xml)) !== null) {
      urls.push(match[1]);
    }

    if (urls.length === 0) {
      console.log('No URLs found in sitemap.');
      return;
    }

    console.log(`Found ${urls.length} URLs. Submitting to IndexNow...`);

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const submitResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (submitResponse.ok) {
      console.log('Successfully submitted URLs to IndexNow.');
    } else {
      const errorText = await submitResponse.text();
      console.error(`IndexNow submission failed: ${submitResponse.status} - ${errorText}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

run();
