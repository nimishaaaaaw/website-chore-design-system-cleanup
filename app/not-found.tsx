import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-section-surface">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h2 className="text-h1 font-bold mb-6">404</h2>
                <h3 className="text-h3 font-bold mb-4">Page Not Found</h3>
                <p className="premium-p mb-8 max-w-md">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="btn-primary"
                >
                    Return Home
                </Link>
            </main>
            <Footer />
        </div>
    )
}