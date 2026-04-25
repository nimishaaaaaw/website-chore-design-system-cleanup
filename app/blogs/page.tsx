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
        <div className="min-h-screen bg-white font-sans">
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
            <Header />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* --- COMPACT HEADER --- */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 leading-tight">
                                Healthcare <span className="text-indigo-600 inline-block">Perspectives</span>
                            </h1>
                            <p className="text-base text-slate-500 font-medium max-w-2xl">
                                Exploring the intersection of technology, hospital operations, and patient care.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
                                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{posts.length} Articles</span>
                            </div>
                        </div>
                    </header>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="group flex flex-col h-full bg-white rounded-[24px] border border-slate-100 overflow-hidden hover:border-indigo-200 hover:shadow-card-lg transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <Link href={`/blogs/${post.slug}`} className="relative h-64 w-full overflow-hidden block">
                                        {post.mainImage?.url ? (
                                            <Image
                                                src={post.mainImage.url}
                                                alt={post.mainImage.alt || post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center text-3xl shadow-sm">
                                                    📰
                                                </div>
                                            </div>
                                        )}

                                        {/* Category Tag overlay */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-indigo-600 text-white shadow-lg py-1.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-wider">
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

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
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
                        <div className="relative py-24 px-8 overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 group">
                            {/* Decorative background elements */}
                            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] -ml-48 -mt-48 opacity-60" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -mr-48 -mb-48 opacity-60" />

                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-white shadow-card border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                    <BookOpen className="w-10 h-10 text-indigo-600" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                    Crafting the <span className="text-indigo-600">Future of Care</span>
                                </h2>

                                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                                    We're currently documenting the operational innovations and mission-driven stories behind MediKloud. The "Why" is coming soon.
                                </p>

                                <div className="mt-8">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-btn hover:opacity-90 transition-all active:scale-95"
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
