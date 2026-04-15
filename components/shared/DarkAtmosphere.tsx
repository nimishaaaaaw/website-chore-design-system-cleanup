"use client";
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

interface DarkAtmosphereProps {
  className?: string;
  withMouseEffect?: boolean;
  showStars?: boolean;
}

/**
 * Gold Standard: Dark Atmosphere
 * Standardized "Vibrant Indigo" background for all dark sections.
 */
export function DarkAtmosphere({ 
  className, 
  withMouseEffect = true,
  showStars = true
}: DarkAtmosphereProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!withMouseEffect) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [withMouseEffect]);

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* 1. Base Gradient (Indigo-950 to Blue-900) */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* 2. Vibrant Overlay (Blue-900 to Cyan-900) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30" />

      {/* 3. Interactive Radial Glow (Parallax) */}
      <div
        className="absolute inset-0 opacity-30 will-change-transform"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, transparent 50%)',
          transform: withMouseEffect 
            ? `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)` 
            : 'none'
        }}
      />

      {/* 4. Stars & Shooting Stars (Premium Layer) */}
      {showStars && (
        <>
          <StarsBackground starDensity={0.00015} allStarsTwinkle={true} className="opacity-40" />
          <ShootingStars 
            starColor="#818cf8" 
            trailColor="#22d3ee" 
            minDelay={1500} 
            maxDelay={4500} 
            className="opacity-20"
          />
        </>
      )}

      {/* 5. Fine Grain Texture (Forensic Sync) */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
