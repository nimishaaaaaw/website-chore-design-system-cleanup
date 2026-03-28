"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useContactModal } from '@/hooks/use-contact-modal';
import { v2VisualTokens } from './theme';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

export function GetStartedCTA() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setMousePosition({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById('get-started-cta');
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="get-started-cta"
      className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30" />
        <div
          className="absolute inset-0 opacity-30 will-change-transform"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, transparent 50%)',
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
          }}
        />
        {visible && (
          <>
            <StarsBackground starDensity={0.00025} allStarsTwinkle={false} twinkleProbability={0.4} minTwinkleSpeed={2} maxTwinkleSpeed={4} className="pointer-events-none z-0 opacity-60" />
            <ShootingStars minSpeed={8} maxSpeed={18} minDelay={2500} maxDelay={4500} starColor={v2VisualTokens.colors.starColor} trailColor={v2VisualTokens.colors.trailColor} starWidth={10} starHeight={1.25} className="pointer-events-none z-0 opacity-80" />
          </>
        )}
      </div>

      {/* Content — bounded, no overflow or wrapping */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          Get Started
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tighter mx-auto">
          Stop the pharmacy leaks.<br className="hidden md:block" />{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 pb-2 overflow-visible" style={{ color: '#22d3ee' }}>
            Start growing.
          </span>
        </h2>

        <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">
          You focus on patients. We handle the staff, stock, and stress—zero capital risk. Book a Demo to see your pharmacy&apos;s true potential.
        </p>

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={openModal}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent text-white font-bold rounded-2xl shadow-2xl shadow-cyan-900/20 hover:scale-105 transition-all duration-300 overflow-hidden whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Book a Demo</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
