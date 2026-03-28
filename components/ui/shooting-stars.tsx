"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const starRef = useRef<{
    x: number; y: number; angle: number; scale: number;
    speed: number; distance: number; active: boolean;
  } | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const svg = svgRef.current;
    const rect = rectRef.current;
    if (!svg || !rect) return;

    let animFrameId: number;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let disposed = false;

    const getRandomStartPoint = (w: number, h: number) => {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) return { x: Math.random() * w, y: 0, angle: 45 };
      if (side === 1) return { x: w, y: Math.random() * h, angle: 135 };
      if (side === 2) return { x: Math.random() * w, y: h, angle: 225 };
      return { x: 0, y: Math.random() * h, angle: 315 };
    };

    const spawnStar = () => {
      if (disposed) return;
      const bounds = svg.getBoundingClientRect();
      if (!bounds.width || !bounds.height) {
        timeoutId = setTimeout(spawnStar, 300);
        return;
      }
      const start = getRandomStartPoint(bounds.width, bounds.height);
      starRef.current = {
        ...start,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
        active: true,
      };
      // Show the rect element
      rect.setAttribute('opacity', '1');
    };

    const tick = () => {
      if (disposed) return;
      const star = starRef.current;
      if (star && star.active) {
        const bounds = svg.getBoundingClientRect();
        star.x += star.speed * Math.cos((star.angle * Math.PI) / 180);
        star.y += star.speed * Math.sin((star.angle * Math.PI) / 180);
        star.distance += star.speed;
        star.scale = 1 + star.distance / 100;

        if (star.x < -20 || star.x > bounds.width + 20 || star.y < -20 || star.y > bounds.height + 20) {
          star.active = false;
          rect.setAttribute('opacity', '0');
          // Schedule next star
          const delay = Math.random() * (maxDelay - minDelay) + minDelay;
          timeoutId = setTimeout(spawnStar, delay);
        } else {
          // Update DOM directly — no React state
          const w = starWidth * star.scale;
          rect.setAttribute('x', String(star.x));
          rect.setAttribute('y', String(star.y));
          rect.setAttribute('width', String(w));
          rect.setAttribute('height', String(starHeight));
          rect.setAttribute('transform', `rotate(${star.angle}, ${star.x + w / 2}, ${star.y + starHeight / 2})`);
        }
      }
      animFrameId = requestAnimationFrame(tick);
    };

    spawnStar();
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(animFrameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth, starHeight]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
      preserveAspectRatio="none"
    >
      <rect
        ref={rectRef}
        x="0" y="0" width={starWidth} height={starHeight}
        fill="url(#shootingGradient)"
        opacity="0"
      />
      <defs>
        <linearGradient id="shootingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
