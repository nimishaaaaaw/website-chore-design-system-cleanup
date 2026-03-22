"use client"

import { StackingCard } from './StackingCard'
import { FEATURE_CARDS } from './v2-data'

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative bg-white scroll-mt-6 md:scroll-mt-8 isolate" style={{ ['--stack-offset' as string]: 'calc(4rem + 3.75rem)' }}>
      <div className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-6 md:py-10 gap-2">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-600 uppercase">One Platform</span>
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">Run Your Entire Hospital</h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 text-center max-w-2xl leading-relaxed">From pharmacy to front desk, AI tools built for Indian hospitals.</p>
          </div>
        </div>
      </div>

      {FEATURE_CARDS.map((card, index) => (
        <StackingCard key={card.id} card={card} index={index} />
      ))}

      <div className="h-16 md:h-20 lg:h-24"></div>
    </section>
  )
}
