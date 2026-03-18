
const fs = require('fs');
const path = require('path');

// Read .env.local manually since we don't want to depend on dotenv
const envPath = path.join(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim().replace(/^["']|["']$/g, ''); // Remove quotes
    }
});

const SPACE_ID = env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = env.CONTENTFUL_MANAGEMENT_TOKEN;

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
    console.error('Missing Contentful Credentials in .env.local');
    process.exit(1);
}

const BASE_URL = `https://api.contentful.com/spaces/${SPACE_ID}/environments/master`;

async function request(endpoint, method = 'GET', body = null) {
    const headers = {
        'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
        'Content-Type': 'application/vnd.contentful.management.v1+json'
    };

    // Add version header if updating (optimistic locking) - specialized use case
    // For creation, we don't need it usually, but if we update, we need X-Contentful-Version

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API Error ${res.status}: ${errorText}`);
    }
    if (res.status === 204) return {};
    return res.json();
}

async function createAsset() {
    console.log('Creating Asset...');
    // 1. Create the Asset
    const assetData = {
        fields: {
            title: { 'en-US': 'AI in Healthcare' },
            description: { 'en-US': 'AI assisting a doctor' },
            file: {
                'en-US': {
                    contentType: 'image/jpeg',
                    fileName: 'ai-healthcare.jpg',
                    upload: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80'
                }
            }
        }
    };

    const asset = await request('/assets', 'POST', assetData);
    const assetId = asset.sys.id;
    console.log(`Asset Created: ${assetId}`);

    // 2. Process the Asset
    console.log('Processing Asset...');
    await request(`/assets/${assetId}/files/en-US/process`, 'PUT');

    // Wait for processing to complete
    let processed = false;
    while (!processed) {
        await new Promise(r => setTimeout(r, 1000));
        const check = await request(`/assets/${assetId}`);
        if (check.sys.publishedVersion || (check.fields.file['en-US'].url)) {
            processed = true;
        }
    }
    console.log('Asset Processed.');

    // 3. Publish the Asset
    console.log('Publishing Asset...');
    // We need the current version for publishing
    const currentAsset = await request(`/assets/${assetId}`);
    const version = currentAsset.sys.version;

    await fetch(`${BASE_URL}/assets/${assetId}/published`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
            'X-Contentful-Version': version
        }
    });
    console.log('Asset Published.');

    return assetId;
}

async function createBlogPost(imageId) {
    console.log('Creating Blog Post...');

    const entryData = {
        fields: {
            title: { 'en-US': 'Generative AI: The New Clinical Copilot' },
            slug: { 'en-US': 'generative-ai-clinical-copilot' },
            subtitle: { 'en-US': 'How AI is moving from experimental tech to an indispensable partner in daily medical workflows.' },
            publishedDate: { 'en-US': new Date().toISOString() },
            author: { 'en-US': 'Dr. Sarah Chen' },
            role: { 'en-US': 'Chief Medical Officer' },
            mainImage: {
                'en-US': {
                    sys: { type: 'Link', linkType: 'Asset', id: imageId }
                }
            },
            seoTitle: {
                'en-US': 'Generative AI in Healthcare 2026'
            },
            seoDescription: {
                'en-US': 'Explore how Generative AI is transforming clinical workflows and patient care in 2026.'
            },
            keywords: {
                'en-US': ['AI', 'Healthcare', 'Generative AI', 'Clinical Workflow', 'Future of Medicine']
            },
            themeColor: {
                'en-US': 'purple'
            },
            fontStyle: {
                'en-US': 'sans'
            },
            body: {
                'en-US': {
                    nodeType: 'document',
                    data: {},
                    content: [
                        {
                            nodeType: 'paragraph',
                            data: {},
                            content: [
                                { nodeType: 'text', value: 'As of January 2026, generative artificial intelligence (GenAI) is rapidly transforming the healthcare technology landscape. No longer just an experimental toy, it has become an indispensable component of daily clinical and operational workflows.', marks: [], data: {} }
                            ]
                        },
                        {
                            nodeType: 'heading-2',
                            data: {},
                            content: [{ nodeType: 'text', value: 'The Rise of the "Invisible" Helper', marks: [], data: {} }]
                        },
                        {
                            nodeType: 'paragraph',
                            data: {},
                            content: [
                                { nodeType: 'text', value: 'GenAI is increasingly acting as a "trusted copilot" for healthcare professionals. Tools like ambient clinical intelligence are identifying care gaps, synthesizing notes, and streamlining communication without the doctor ever touching a keyboard. These "invisible digital helpers" are slashing administrative burnout.', marks: [], data: {} }
                            ]
                        },
                        {
                            nodeType: 'heading-2',
                            data: {},
                            content: [{ nodeType: 'text', value: 'Accelerated Drug Discovery', marks: [], data: {} }]
                        },
                        {
                            nodeType: 'paragraph',
                            data: {},
                            content: [
                                { nodeType: 'text', value: 'Beyond the clinic, GenAI is revolutionizing pharmaceutical research. We are seeing algorithms design new molecules and simulate chemical reactions, compressing the timeline for new drug development from years to months.', marks: [], data: {} }
                            ]
                        },
                        {
                            nodeType: 'blockquote',
                            data: {},
                            content: [
                                { nodeType: 'paragraph', data: {}, content: [{ nodeType: 'text', value: 'AI is not replacing doctors. It is replacing the keyboard.', marks: [], data: {} }] }
                            ]
                        },
                        {
                            nodeType: 'paragraph',
                            data: {},
                            content: [
                                { nodeType: 'text', value: 'The future is here, and it is collaborative. The most successful health systems in 2026 are those that view AI not as a tool, but as a partner in care.', marks: [], data: {} }
                            ]
                        }
                    ]
                }
            }
        }
    };



    // Note: The POST /entries endpoint requires the Content-Type header in the *HTTP* request to specify the Content Type ID? 
    // No, standard API uses X-Contentful-Content-Type header.

    // Actually, let's fix the request function to allow custom headers for this specific call
    const res = await fetch(`${BASE_URL}/entries`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': 'blogPost'
        },
        body: JSON.stringify(entryData)
    });

    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Failed to create entry: ${txt}`);
    }

    const createdEntry = await res.json();
    const entryId = createdEntry.sys.id;
    console.log(`Entry Created: ${entryId}`);

    // Publish Entry
    console.log('Publishing Entry...');
    await fetch(`${BASE_URL}/entries/${entryId}/published`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${MANAGEMENT_TOKEN}`,
            'X-Contentful-Version': createdEntry.sys.version
        }
    });
    console.log('Entry Published!');
}

(async () => {
    try {
        const assetId = await createAsset();
        await createBlogPost(assetId);
        console.log('SUCCESS: Blog Post Added.');
    } catch (e) {
        console.error('ERROR:', e);
    }
})();
