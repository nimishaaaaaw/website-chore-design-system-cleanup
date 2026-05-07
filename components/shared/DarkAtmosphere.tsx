"use client";
import React from 'react';
import { cn } from '@/lib/utils';

interface DarkAtmosphereProps {
  className?: string;
  [key: string]: any; 
}

export function DarkAtmosphere({ 
  className,
  showStars,        // Pull this out
  withMouseEffect,  // Pull this out too
  ...props          // Everything else stays here
}: DarkAtmosphereProps) {
  return (
    <div 
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      {...props} 
    >
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}