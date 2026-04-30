/**
 * scripts/submit-google.mjs
 * 
 * This script fetches the live sitemap and submits all URLs to the 
 * Google Indexing API.
 * 
 * REQUIRES: GOOGLE_SERVICES_JSON environment variable (JSON string of service account key)
 */

import { google } from 'googleapis';

const HOST = 'www.medikloud.com';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const GOOGLE_SERVICES_JSON = process.env.GOOGLE_SERVICES_JSON;

if (!GOOGLE_SERVICES_JSON) {
  console.error('Error: GOOGLE_SERVICES_JSON environment variable is required.');
  process.exit(1);
}

async function run() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(GOOGLE_SERVICES_JSON),
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({
      version: 'v3',
      auth,
    });

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

    console.log(`Found ${urls.length} URLs. Submitting to Google Indexing API...`);

    // Google Indexing API has a quota (standard is 200 per day)
    // and requires individual calls or batching. 
    // For simplicity, we'll iterate through them.
    for (const url of urls) {
      console.log(`Submitting: ${url}`);
      try {
        const res = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`Successfully submitted ${url}: ${res.status}`);
      } catch (err) {
        console.error(`Failed to submit ${url}:`, err.message);
        // We continue with other URLs even if one fails
      }
    }

    console.log('Finished submitting all URLs to Google.');
  } catch (error) {
    console.error('An error occurred during Google submission:', error);
    process.exit(1);
  }
}

run();
