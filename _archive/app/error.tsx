'use client'

import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/home/Footer'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
                <p className="text-slate-600 mb-8 max-w-md">
                    {error.message || "An unexpected error occurred. Please try again."}
                </p>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                    Try again
                </button>
            </main>
            <Footer />
        </div>
    )
}
