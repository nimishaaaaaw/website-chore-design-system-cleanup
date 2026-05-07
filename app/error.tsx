'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-section-surface">
            <Header />
            <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <h2 className="text-h2 font-bold mb-4">Something went wrong!</h2>
                <p className="premium-p text-body mb-8 max-w-md">
                    {error.message || "An unexpected error occurred. Please try again."}
                </p>
                <button
                    onClick={() => reset()}
                    className="btn-primary rounded-xl"
                >
                    Try again
                </button>
            </main>
            <Footer />
        </div>
    )
}