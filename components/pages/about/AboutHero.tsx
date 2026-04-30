"use client"

import React from 'react'

interface AboutHeroProps {
  children?: React.ReactNode
}

export function AboutHero({ children }: AboutHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden section-py-lg">

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-hero z-0" aria-hidden="true" />

      {/* Blob atmosphere */}
      <div className="blob-layer" aria-hidden="true">
        <div className="blob-blue w-72 h-72 top-[10%] left-[15%] animate-float-slow" />
        <div className="blob-indigo w-80 h-80 bottom-[20%] right-[10%] animate-float-slower" />
      </div>

      <div className="container-page relative z-10 w-full text-center">
        <div className="header-lock">

          <div className="eyebrow-wrap animate-fade-in-up opacity-0 [animation-delay:60ms] [animation-fill-mode:forwards]">
            <span className="eyebrow-line-l" />
            <span className="eyebrow-text">Our Story · Our Mission</span>
            <span className="eyebrow-line-r" />
          </div>

          <div className="animate-fade-in-up opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards]">
            {children}
          </div>

        </div>
      </div>

    </section>
  )
}