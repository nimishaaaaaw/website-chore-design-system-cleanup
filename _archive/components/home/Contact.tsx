"use client"
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react'
import { StarsBackground } from '@/components/ui/stars-background'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { trackEvent } from '@/lib/analytics'

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => setMousePosition({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const el = document.getElementById('contact')
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="contact" className="py-8 md:py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"></div>
        <div
          className="absolute inset-0 opacity-30 will-change-transform"
          style={{ background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, transparent 50%)', transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)` }}
        />
        {visible && (
          <>
            <StarsBackground starDensity={0.00025} allStarsTwinkle={false} twinkleProbability={0.4} minTwinkleSpeed={2} maxTwinkleSpeed={4} className="pointer-events-none z-0 opacity-60" />
            <ShootingStars minSpeed={8} maxSpeed={18} minDelay={2500} maxDelay={4500} starColor="#E5F6FF" trailColor="#89D2F6" starWidth={10} starHeight={1.25} className="pointer-events-none z-0 opacity-80" />
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Ready to See the Future of Your Hospital?</h2>
            <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">Let's talk. We'll show you how MediKloud can be tailored for your specific needs. Fill out the form for a free, no‑obligation demo.</p>
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: 'Delight Your Patients' },
                { icon: Zap, text: 'Free Up Your Staff to Focus on Care' },
                { icon: Shield, text: 'Built for Trust & Security' },
                { icon: TrendingUp, text: 'Increase Your Revenue and Cut Costs' },
              ].map((item, index) => (
                <div key={index} className="flex items-center text-gray-200 group cursor-pointer" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <item.icon className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300 text-sm md:text-base leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/20">
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const formData = new FormData(form)
                const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
                if (submitButton) submitButton.disabled = true
                try {
                  const response = await fetch('https://formspree.io/f/xrbkovkg', { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
                  if (response.ok) {
                    trackEvent('submit', 'lead_generation', 'contact_form')
                    setFormSubmitted(true)
                    form.reset()
                  } else {
                    alert('There was an issue submitting the form. Please try again.')
                  }
                } catch {
                  alert('Network error. Please try again later.')
                } finally {
                  if (submitButton) submitButton.disabled = false
                }
              }}
              className="space-y-4 max-w-lg"
            >
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              {[
                { id: 'yourName', label: 'Your Name', type: 'text', name: 'name', placeholder: 'Enter your name', required: true },
                { id: 'email', label: 'Your Email', type: 'email', name: 'email', placeholder: 'name@company.com', required: true },
                { id: 'phone', label: 'Phone Number', type: 'tel', name: 'phone', placeholder: 'Enter your phone number', required: true },
                { id: 'company', label: 'Company/Hospital Name', type: 'text', name: 'company', placeholder: 'Enter your organization name', required: true },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2 leading-relaxed">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    autoComplete={field.name === 'name' ? 'name' : field.name === 'email' ? 'email' : field.name === 'phone' ? 'tel' : undefined}
                    inputMode={field.name === 'phone' ? 'tel' : undefined}
                    className="w-full px-3.5 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm leading-5 placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2 leading-relaxed">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-3.5 py-2 bg-white/10 border border-white/30 rounded-xl text-white text-sm leading-5 placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                  placeholder="How can we help you?"
                />
              </div>
              <input type="hidden" name="_redirect" value="https://medikloud.com/thank-you" />
              <p className="text-green-400 text-sm md:text-base font-semibold leading-relaxed" aria-live="polite">{formSubmitted ? 'Thanks for submitting the form. We will get in touch with you shortly.' : ''}</p>
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl text-base font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group" style={{ animationDelay: '600ms' }}>
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}



