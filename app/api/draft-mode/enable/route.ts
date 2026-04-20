import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const slug = searchParams.get('slug')

    // Validate slug to prevent open redirect and path traversal
    // Slugs should only contain alphanumeric characters, hyphens, and underscores
    const isValidSlug = slug && /^[a-zA-Z0-9-_]+$/.test(slug)

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !isValidSlug) {
        return new Response('Invalid token or slug', { status: 401 })
    }

    const draft = await draftMode()
    draft.enable()

    redirect(`/blogs/${slug}`)
}
