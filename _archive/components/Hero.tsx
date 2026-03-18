"use client"

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { LazyMotion, domAnimation, m as motion } from 'framer-motion'

// Client-only Lottie to avoid SSR/hydration issues on first load
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((m) => ({ default: m.DotLottieReact })),
  { ssr: false }
)

export function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState<boolean>(false)
  const [lottieError, setLottieError] = useState<boolean>(false)

  const typewriterTexts = useMemo(() => [
    'Patient Experience',
    'Hospital Workflows', 
    'Clinical Support'
  ], [])

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentFullText = typewriterTexts[currentIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length)
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentFullText.slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, typewriterTexts])

  // Respect prefers-reduced-motion for framer-motion heavy blocks
  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative min-h-[90vh] lg:h-[90vh] h-auto flex items-center justify-center overflow-visible lg:overflow-hidden pt-12 pb-8 lg:pb-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center w-full" style={{ minHeight: 'calc(90vh - 6rem)' }}>
          {/* Left Content - 7 columns */}
                      <div className="lg:col-span-7 space-y-3 font-sans">
            {/* Tagline Badge */}
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/70 backdrop-blur-md rounded-full border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px]">🚀</span>
              </div>
              <span className="text-blue-700 font-medium text-[11px] tracking-wide">
                Transforming Hospitals with AI Agents
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-tight flex flex-col gap-3 md:gap-4 lg:gap-5">
                <span className="block">Redefining</span>
                <span className="block bg-gradient-to-r from-blue-700 via-purple-700 to-teal-700 bg-clip-text text-transparent">
                  {currentText}
                  <motion.span
                    aria-hidden
                    animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.8, repeat: Infinity }}
                    className="text-blue-400 ml-1"
                  >
                    |
                  </motion.span>
                </span>
                <span className="block">Through AI</span>
              </h1>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
              className="space-y-3 md:space-y-4 pt-4 md:pt-6"
            >
              <h2 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                Shaping the Future of Indian Healthcare
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl font-normal text-sm md:text-base">
              Not just building AI for healthcare — we&apos;re driving its execution, adoption, and transformation on the ground.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/90 to-teal-600/90 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none text-base"
              >
                Get a Demo
                <motion.svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Illustration - 5 columns */}
          <div className="lg:col-span-5">
            <motion.div
              initial={false}
              animate={reduceMotion ? undefined : { x: 0, opacity: 1, scale: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/20 backdrop-blur-xl rounded-2xl p-4 md:p-6 lg:p-8 border border-white/30 shadow-2xl overflow-visible">
                <div className="w-full max-w-lg mx-auto drop-shadow-2xl transform scale-[1.3] md:scale-[1.6] lg:scale-[2] origin-center">
                  {!lottieError ? (
                    <DotLottieReact
                      src="/animations/hero.lottie"
                      loop
                      autoplay
                      className="w-full h-auto"
                      onError={() => setLottieError(true)}
                    />
                  ) : (
                    <Image
                      src="/healthcare-hero-illustration.png"
                      alt="Healthcare operations illustration"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                  )}
                </div>
                {/* Floating UI Elements */}
                <motion.div
                  animate={reduceMotion ? undefined : { y: [-5, 5, -5], rotate: [0, 2, 0] }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-xl border border-white/50"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-semibold text-gray-700">All medicines in stock</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={reduceMotion ? undefined : { y: [5, -5, 5], rotate: [0, -2, 0] }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-3 md:p-4 shadow-2xl text-white"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg">🚚</span>
                    <div>
                      <div className="text-xs font-medium opacity-90">Avg delivery</div>
                      <div className="text-sm font-bold">~10 min</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Background Decorative Elements */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-teal-400/10 rounded-2xl blur-xl"></div>
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-blue-300/5 via-purple-300/5 to-teal-300/5 rounded-2xl blur-2xl"></div>

              {/* Decorative band removed for a cleaner clinical look */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-slate-50/30 to-transparent pointer-events-none" style={{ minHeight: '8rem' }} />
    </section>
    </LazyMotion>
  )
}



