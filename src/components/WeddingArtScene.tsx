import React from 'react';

interface WeddingArtSceneProps {
  scene: 'portrait' | 'prewedding' | 'haldi' | 'mehendi' | 'traditional';
  className?: string;
}

export const WeddingArtScene: React.FC<WeddingArtSceneProps> = ({ scene, className = '' }) => {
  if (scene === 'portrait') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <radialGradient id="emeraldPortBg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#0E5243" />
            <stop offset="55%" stopColor="#062920" />
            <stop offset="100%" stopColor="#02120E" />
          </radialGradient>
          <linearGradient id="champagneFoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBF0C4" />
            <stop offset="50%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#8A661B" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#emeraldPortBg)" />
        <circle cx="400" cy="245" r="195" fill="none" stroke="url(#champagneFoilGrad)" strokeWidth="2" strokeDasharray="5 6" opacity="0.55" />
        <path
          d="M155 580 L155 235 C155 115, 315 60, 400 30 C485 60, 645 115, 645 235 L645 580"
          fill="none"
          stroke="url(#champagneFoilGrad)"
          strokeWidth="6"
        />
        <g transform="translate(275, 195)">
          <path d="M25 60 C15 25, 85 15, 95 55 C85 70, 35 70, 25 60 Z" fill="#E5C158" stroke="#FBF0C4" strokeWidth="2" />
          <circle cx="62" cy="32" r="5.5" fill="#10B981" stroke="#FBF0C4" strokeWidth="1.5" />
          <circle cx="60" cy="80" r="28" fill="#E6B89C" stroke="#E5C158" strokeWidth="1.5" />
          <path d="M10 125 C20 110, 100 110, 110 125 L125 340 L-5 340 Z" fill="#073329" stroke="url(#champagneFoilGrad)" strokeWidth="3" />
          <path d="M22 120 Q60 188 98 120" fill="none" stroke="#F4FBF7" strokeWidth="5" strokeDasharray="3 5" />
        </g>
        <g transform="translate(415, 215)">
          <path d="M15 65 C15 15, 95 15, 95 65 L115 210 L-5 210 Z" fill="#0D9488" stroke="url(#champagneFoilGrad)" strokeWidth="2.5" />
          <circle cx="55" cy="70" r="26" fill="#E6B89C" stroke="#E5C158" strokeWidth="1.5" />
          <path d="M15 115 C30 105, 80 105, 95 115 L130 320 L-20 320 Z" fill="#0F6B58" stroke="url(#champagneFoilGrad)" strokeWidth="3" />
          <path d="M-12 290 L122 290" stroke="url(#champagneFoilGrad)" strokeWidth="8" strokeDasharray="8 4" />
        </g>
        <path d="M335 320 Q400 375 470 330" fill="none" stroke="#F472B6" strokeWidth="8" strokeDasharray="6 6" />
      </svg>
    );
  }

  if (scene === 'prewedding') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <linearGradient id="deccanNightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#021824" />
            <stop offset="50%" stopColor="#08382D" />
            <stop offset="80%" stopColor="#0E5243" />
            <stop offset="100%" stopColor="#02120E" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#deccanNightSky)" />
        <circle cx="400" cy="220" r="85" fill="#FBF0C4" opacity="0.25" />
        <circle cx="400" cy="220" r="55" fill="#FFFDF7" opacity="0.75" />
        <path
          d="M70 380 L70 305 L130 305 L145 250 L160 305 L260 305 C260 270, 300 250, 320 232 C340 250, 380 270, 380 305 L420 305 C420 270, 460 250, 480 232 C500 250, 540 270, 540 305 L640 305 L655 250 L670 305 L730 305 L730 380 Z"
          fill="#031A15"
          stroke="#E5C158"
          strokeWidth="1.8"
        />
        <circle cx="382" cy="430" r="16" fill="#E5C158" />
        <circle cx="418" cy="434" r="15" fill="#34D399" />
      </svg>
    );
  }

  if (scene === 'haldi') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <rect width="800" height="600" fill="#06382E" />
        <path
          d="M220 430 Q400 480 580 430 C550 530, 470 555, 400 555 C330 555, 250 530, 220 430 Z"
          fill="#E5C158"
          stroke="#FFFDF7"
          strokeWidth="3"
        />
        <ellipse cx="400" cy="430" rx="175" ry="30" fill="#FDE047" stroke="#FFFDF7" strokeWidth="2" />
      </svg>
    );
  }

  if (scene === 'mehendi') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <rect width="800" height="600" fill="#04241C" />
        <circle cx="400" cy="300" r="210" fill="none" stroke="#E5C158" strokeWidth="3" />
        <circle cx="400" cy="300" r="175" fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="6 6" />
        <text x="400" y="315" textAnchor="middle" fill="#FBF0C4" fontSize="44" fontFamily="Cinzel Decorative, Georgia, serif">
          V &amp; M
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
      <rect width="800" height="600" fill="#031A15" />
      <rect x="130" y="130" width="24" height="400" fill="#E5C158" rx="4" />
      <rect x="646" y="130" width="24" height="400" fill="#E5C158" rx="4" />
      <path d="M95 135 L705 135 L620 75 L400 22 L180 75 Z" fill="#073329" stroke="#FBF0C4" strokeWidth="3" />
      <path d="M320 470 L480 470 L510 530 L290 530 Z" fill="#E5C158" stroke="#FFFDF7" strokeWidth="2.5" />
      <path d="M400 310 C445 365, 455 425, 400 470 C345 425, 355 365, 400 310 Z" fill="#F59E0B" />
    </svg>
  );
};
