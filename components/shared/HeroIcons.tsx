import React from 'react';

// 100% Reliable Inline SVG Avatar Generator (Indian Faces)
export const AvatarSVG = ({ gender, seed }: { gender: 'male' | 'female', seed: string }) => {
  const skinTones = ['#a67b5b', '#8e5a3d', '#714022', '#c19375'];
  const skinColor = skinTones[seed.length % skinTones.length];
  const hairColor = "#111827"; 
  
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="100" height="100" fill="#1e293b" />
      <path d="M 15 110 Q 50 65 85 110" fill={gender === 'female' ? '#ec4899' : '#3b82f6'} opacity="0.3" />
      {gender === 'female' && <path d="M 25 45 Q 10 70 25 90 Q 50 100 75 90 Q 90 70 75 45 Z" fill={hairColor} />}
      <rect x="42" y="60" width="16" height="20" rx="4" fill={skinColor} />
      <rect x="42" y="60" width="16" height="10" fill="#000" opacity="0.15" />
      <rect x="30" y="25" width="40" height="48" rx="20" fill={skinColor} />
      {gender === 'male' && <path d="M 28 40 Q 50 15 72 40 Q 75 20 50 15 Q 25 20 28 40 Z" fill={hairColor} />}
      {gender === 'female' && <path d="M 28 40 Q 50 20 72 40 Q 50 10 28 40 Z" fill={hairColor} />}
      <circle cx="42" cy="48" r="3.5" fill="#111827" />
      <circle cx="58" cy="48" r="3.5" fill="#111827" />
      <path d="M 44 62 Q 50 68 56 62" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {gender === 'male' && seed.length % 2 === 0 && (
        <path d="M 32 55 Q 50 78 68 55 Q 50 72 32 55 Z" fill={hairColor} opacity="0.8" />
      )}
    </svg>
  );
};

// Custom Delivery Scooter SVG for instant metaphor recognition
export const DeliveryScooterSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
    {/* Delivery Box */}
    <rect x="2" y="8" width="12" height="11" rx="1" fill="#4F46E5" />
    <path d="M2 13h12" stroke="#fff" strokeWidth="1" opacity="0.5" />
    {/* Rider Body */}
    <path d="M16 18h4l2-5h-3l-1-4h3a2 2 0 0 1 2 2v2l3 4h2v2h-9z" />
    {/* Rider Helmet */}
    <circle cx="18" cy="7" r="3.5" />
    {/* Scooter Chassis */}
    <path d="M2 20h22l3 3h3v2H2z" />
    {/* Wheels */}
    <circle cx="7" cy="25" r="3.5" fill="#0F172A" />
    <circle cx="23" cy="25" r="3.5" fill="#0F172A" />
    {/* Motion lines */}
    <path d="M28 22h4 M30 18h2 M26 26h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);
