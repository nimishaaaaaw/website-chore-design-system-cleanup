import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/api'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { draftMode } from 'next/headers'

export const revalidate = 3600 // Revalidate every hour


export default async function BlogsPage() {
    const { isEnabled } = await draftMode()
    const posts = await getAllPosts(isEnabled)

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">Blogs</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Insights, updates, and stories from the world of healthcare technology and hospital operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
                                <Link href={`/blogs/${post.slug}`} className="block h-48 relative w-full overflow-hidden">
                                    {post.mainImage ? (
                                        <Image
                                            src={post.mainImage.url}
                                            alt={post.mainImage.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center text-4xl">
                                            📰
                                        </div>
                                    )}
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        {post.publishedDate && (
                                            <>
                                                <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        <Link href={`/blogs/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    {post.seo.description && (
                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.seo.description}
                                        </p>
                                    )}
                                    <Link href={`/blogs/${post.slug}`} className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto">
                                        Read Article
                                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-xl">No posts found yet. Check back soon!</p>
                            <p className="mt-2 text-sm">Marketing team: Log in to Contentful to create content.</p>
                        </div>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    )
}
