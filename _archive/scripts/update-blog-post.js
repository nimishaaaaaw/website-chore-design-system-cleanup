
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
    }
});

const SPACE_ID = env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = env.CONTENTFUL_MANAGEMENT_TOKEN;
const BASE_URL = `https://api.contentful.com/spaces/${SPACE_ID}/environments/master`;

async function request(endpoint, method = 'GET', body = null, headers = {}) {
    const defaultHeaders = {
        'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        ...headers
    };

    const options = { method, headers: defaultHeaders };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API Error ${res.status}: ${errorText}`);
    }
    return res.json();
}

async function updateBlogPost() {
    console.log('Finding Blog Post...');

    // 1. Find the entry by slug
    const entries = await request('/entries?content_type=blogPost&fields.slug=generative-ai-clinical-copilot');

    if (entries.items.length === 0) {
        console.error('Blog post not found!');
        return;
    }

    const entry = entries.items[0];
    const entryId = entry.sys.id;
    const currentVersion = entry.sys.version;

    console.log(`Found Entry: ${entryId} (v${currentVersion})`);

    // 2. Prepare new content
    // Using standard Rich Text nodes. Note: "data: {}" is required for all blocks.
    const newBodyContent = {
        nodeType: 'document',
        data: {},
        content: [
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', value: "It’s 6:00 PM on a Friday. A primary care physician finishes her last consultation. In 2024, her workday was just starting—she had two hours of 'pajama time' ahead, documenting charts at home. But this is 2026. She closes her laptop and goes home to her family. Her notes? Already done, accurate, and coded. This isn't magic. It's the new reality of AI in healthcare.", marks: [], data: {} }
                ]
            },
            {
                nodeType: 'heading-2',
                data: {},
                content: [{ nodeType: 'text', value: 'From "Terminator" to Teammate', marks: [], data: {} }]
            },
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', value: "For years, the narrative was fear: 'Will AI replace doctors?' The answer, it turns out, is a resounding no. Instead, Generative AI has become the ultimate teammate. It doesn't tire, it doesn't get frustrated with paperwork, and it reads millions of medical journals in seconds.", marks: [], data: {} }
                ]
            },
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', value: "Imagine a 'Clinical Copilot' that sits quietly in the room (listening securely, of course). It captures the nuance of a patient's story—not just the symptoms, but the worries—and weaves them into a perfect clinical note. It spots potential drug interactions instantly. It suggests care gaps that might have been missed in the rush.", marks: [], data: {} }
                ]
            },
            {
                nodeType: 'heading-2',
                data: {},
                content: [{ nodeType: 'text', value: 'The "Whoa" Factor: Drug Discovery', marks: [], data: {} }]
            },
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', value: "But wait, there's more. We aren't just talking about efficiency; we're talking about miracles. Generative AI is now running simulations of millions of chemical reactions to identify potential new drugs for rare diseases. What used to take a decade of trial and error is now happening in months.", marks: [], data: {} }
                ]
            },
            {
                nodeType: 'blockquote',
                data: {},
                content: [
                    { nodeType: 'paragraph', data: {}, content: [{ nodeType: 'text', value: "The irony is beautiful: By taking over the robotic tasks, AI has made medicine human again. Doctors are looking at patients, not screens.", marks: [], data: {} }] }
                ]
            },
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', value: "So, the next time you hear about AI in healthcare, don't think of robots with stethoscopes. Think of your doctor, finally having the time to really listen to you.", marks: [], data: {} }
                ]
            },
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    { nodeType: 'text', marks: [{ type: 'bold' }], value: "Know a healthcare hero who needs this hope? Share this article with them.", data: {} }
                ]
            }
        ]
    };

    // 3. Update the entry
    // We must send X-Contentful-Version to avoid "Version Mismatch" errors
    console.log('Updating Entry...');

    const updateData = {
        fields: {
            ...entry.fields,
            body: { 'en-US': newBodyContent },
            subtitle: { 'en-US': "Forget the sci-fi tropes. In 2026, AI isn't replacing doctors—it's giving them their lives back." }
        }
    };

    const updatedEntry = await request(`/entries/${entryId}`, 'PUT', updateData, {
        'X-Contentful-Version': currentVersion
    });

    console.log(`Entry Updated to v${updatedEntry.sys.version}`);

    // 4. Publish the entry
    console.log('Publishing Entry...');
    await request(`/entries/${entryId}/published`, 'PUT', null, {
        'X-Contentful-Version': updatedEntry.sys.version
    });

    console.log('Entry Published!');
}

(async () => {
    try {
        await updateBlogPost();
        console.log('SUCCESS: Blog Post Enhanced.');
    } catch (e) {
        console.error('ERROR:', e);
    }
})();
