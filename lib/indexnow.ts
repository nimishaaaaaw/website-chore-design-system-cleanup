/**
 * IndexNow Utility
 * Used to notify search engines (Bing, Yandex, etc.) of content updates.
 * Key is hosted at /82fd361282bf55c08ac7f2c6179e53ec.txt
 */

const INDEXNOW_KEY = '82fd361282bf55c08ac7f2c6179e53ec';
const HOST = 'www.medikloud.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function submitToIndexNow(urlList: string[]) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`IndexNow submission failed: ${response.status} - ${errorText}`);
      return false;
    }

    console.log('IndexNow submission successful');
    return true;
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return false;
  }
}
