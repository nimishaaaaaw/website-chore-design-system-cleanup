import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/api'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getMetadata, siteConfig, getBreadcrumbSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { Calendar, Clock, BookOpen } from 'lucide-react'

export const revalidate = 3600 // Revalidate every hour

export const metadata = getMetadata({
    title: 'Healthcare Insights & Updates',
    description: 'Healthcare deep dives, insights and the stories behind Medikloud.',
    path: '/blogs',
})

export default async function BlogsPage() {
    const posts = await getAllPosts()
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', item: '/' },
        { name: 'Blogs', item: '/blogs' },
    ])

    return (
        <div className="min-h-screen">
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
            <Header />

            <main className="page-main">
                <div className="container-page">
                    {/* --- COMPACT HEADER --- */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                        <div className="flex-1">
                            <h1 className="text-center lg:text-left text-balance max-w-none mx-auto lg:mx-0 premium-h2 mb-4 md:mb-6">
                            Healthcare <span className="heading-accent drop-shadow-sm">Perspectives</span>
                            </h1>
                            <p className="premium-p max-w-2xl">
                                Exploring the intersection of technology, hospital operations, and patient care.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                                <div className="icon-chip">
                                    <BookOpen className="icon-chip-icon" />
                                    <span className="icon-chip-text">
                                        {posts.length} Articles
                                    </span>
                                </div>
                        </div>
                    </header>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="card--blog group"
                                >
                                    {/* Image Container */}
                                    <Link href={`/blogs/${post.slug}`} className="relative aspect-video w-full overflow-hidden block">
                                        {post.mainImage?.url ? (
                                            <Image
                                                src={post.mainImage.url}
                                                alt={post.mainImage.alt || post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-brand-50 to-brand-indigo-50 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center text-3xl shadow-sm">
                                                    📰
                                                </div>
                                            </div>
                                        )}

                                        {/* Category Tag overlay */}
                                        <div className="absolute top-4 left-4">
                                            <span className="badge bg-brand-indigo-600 text-white px-4 py-1.5 font-bold uppercase tracking-wider shadow-btn">
                                                {post.role || 'Insights'}
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Content Container */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        {/* Meta Row */}
                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{post.readTime} min read</span>
                                            </div>
                                        </div>

                                        <h3 className="text-h3 font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-600 transition-colors line-clamp-2">
                                            <Link href={`/blogs/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                            {post.seo.description || post.subtitle}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="relative py-section px-8 overflow-hidden rounded-3xl bg-section-alt border border-slate-100 group">
                            {/* Decorative background elements */}
                                <div className="blob-indigo top-0 left-0 w-96 h-96 -ml-48 -mt-48 opacity-60" />
                                <div className="blob-blue bottom-0 right-0 w-96 h-96 -mr-48 -mb-48 opacity-60" />

                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                <div className="icon-container group-hover:scale-110">
                                    <BookOpen className="w-10 h-10 text-brand-indigo-600" />
                                </div>

                                <h2 className="text-section md:text-h1 mb-4">
                                    Crafting the <span className="heading-accent">Future of Care</span>
                                </h2>

                                <p className="text-body-lg text-slate-500 mb-10 leading-relaxed font-medium">
                                    We're currently documenting the operational innovations and mission-driven stories behind MediKloud. The "Why" is coming soon.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        href="/"
                                        className="btn-primary"
                                    >
                                        Back to Mission
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}