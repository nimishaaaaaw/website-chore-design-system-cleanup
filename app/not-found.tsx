import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">404</h2>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h3>
                <p className="text-slate-600 mb-8 max-w-md">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                >
                    Return Home
                </Link>
            </main>
            <Footer />
        </div>
    )
}
