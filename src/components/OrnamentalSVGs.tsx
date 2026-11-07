import React from 'react';

export const RoyalMayuraGaneshaCrest: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 165,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 220 220"
        className="absolute inset-0 w-full h-full animate-spinSlow opacity-75"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="emeraldHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#E5C158" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#031A15" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="110" cy="110" r="102" fill="url(#emeraldHaloGrad)" />
        <circle cx="110" cy="110" r="94" fill="none" stroke="#E5C158" strokeWidth="1.1" strokeDasharray="3 5" />
        <circle cx="110" cy="110" r="82" fill="none" stroke="#34D399" strokeWidth="0.8" strokeOpacity="0.6" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * 22.5;
          return (
            <g key={i} transform={`rotate(${angle} 110 110)`}>
              <path
                d="M110 8 C116 20, 116 28, 110 35 C104 28, 104 20, 110 8 Z"
                fill="#E5C158"
                fillOpacity="0.4"
              />
              <circle cx="110" cy="19" r="3" fill="#0F6B58" stroke="#FBF0C4" strokeWidth="0.7" />
              <circle cx="110" cy="5.5" r="1.6" fill="#FBF0C4" />
            </g>
          );
        })}
      </svg>

      <svg
        viewBox="0 0 220 220"
        className="relative z-10 w-full h-full drop-shadow-[0_0_18px_rgba(229,193,88,0.6)]"
        role="img"
        aria-label="Sacred Ganesha and Twin Royal Peacocks Crest"
      >
        <defs>
          <linearGradient id="champagneGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBF0C4" />
            <stop offset="40%" stopColor="#E5C158" />
            <stop offset="75%" stopColor="#FFF7D6" />
            <stop offset="100%" stopColor="#9A721C" />
          </linearGradient>
          <linearGradient id="peacockTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
          <linearGradient id="lotusBlush" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCE7F3" />
            <stop offset="55%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#9D174D" />
          </linearGradient>
        </defs>
        <path
          d="M42 176 L42 95 C42 62, 74 36, 110 18 C146 36, 178 62, 178 95 L178 176"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M44 152 C26 136, 26 108, 42 96 C48 92, 54 98, 50 106 C45 116, 52 132, 66 142"
          fill="url(#peacockTeal)"
          stroke="url(#champagneGold)"
          strokeWidth="1.5"
        />
        <path
          d="M176 152 C194 136, 194 108, 178 96 C172 92, 166 98, 170 106 C175 116, 168 132, 154 142"
          fill="url(#peacockTeal)"
          stroke="url(#champagneGold)"
          strokeWidth="1.5"
        />
        <g transform="translate(10, 14)">
          <path
            d="M45 154 C65 136, 82 142, 100 154 C118 142, 135 136, 155 154 C135 168, 65 168, 45 154 Z"
            fill="url(#lotusBlush)"
            stroke="url(#champagneGold)"
            strokeWidth="1.6"
          />
          <path d="M84 148 C92 126, 108 126, 116 148" fill="url(#champagneGold)" opacity="0.9" />
        </g>
        <path
          d="M92 72 L98 44 L110 28 L122 44 L128 72 Z"
          fill="url(#champagneGold)"
          stroke="#F4FBF7"
          strokeWidth="1.2"
        />
        <circle cx="110" cy="44" r="4" fill="#0D9488" stroke="#FBF0C4" strokeWidth="1" />
        <circle cx="110" cy="58" r="4.8" fill="#10B981" stroke="#FBF0C4" strokeWidth="1.2" />
        <path
          d="M90 75 C64 68, 58 96, 76 110 C84 114, 90 108, 93 102"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M130 75 C156 68, 162 96, 144 110 C136 114, 130 108, 127 102"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="110" cy="77" r="2.5" fill="#10B981" />
        <path
          d="M93 75 C92 95, 98 105, 104 115 C109 123, 112 135, 103 141 C96 145, 90 139, 94 133"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M127 75 C128 95, 120 109, 113 121"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="95" cy="134" r="4.2" fill="#FBF0C4" />
        <path
          d="M86 124 C80 140, 86 154, 110 154 C134 154, 140 140, 134 124"
          fill="none"
          stroke="url(#champagneGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const AnimatedLotusUrliLamp: React.FC<{
  size?: number;
  isLit?: boolean;
  onClick?: () => void;
  label?: string;
}> = ({ size = 62, isLit = true, onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className={`group inline-flex flex-col items-center select-none ${
        onClick ? 'cursor-pointer' : ''
      }`}
      title={label || 'Sacred Kamala Deepam (Lotus Urli Lamp)'}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {isLit && (
          <div
            className="absolute -top-2 rounded-full bg-emerald-300/35 blur-md animate-pulse pointer-events-none"
            style={{ width: size * 0.7, height: size * 0.7 }}
          />
        )}
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lotusFlameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF7" />
              <stop offset="40%" stopColor="#FFE57F" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="emeraldGoldBowl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF0C4" />
              <stop offset="45%" stopColor="#E5C158" />
              <stop offset="80%" stopColor="#0E5243" />
              <stop offset="100%" stopColor="#04241C" />
            </linearGradient>
          </defs>
          {isLit && (
            <g className="origin-[50px_48px] animate-flameDance">
              <path d="M50 8 C61 24, 63 37, 50 49 C37 37, 39 24, 50 8 Z" fill="url(#lotusFlameGrad)" />
              <path d="M50 21 C55 31, 56 39, 50 47 C44 39, 45 31, 50 21 Z" fill="#FFFDF7" />
            </g>
          )}
          <path d="M24 54 C32 42, 42 44, 50 54 C58 44, 68 42, 76 54" fill="#F472B6" stroke="#FBF0C4" strokeWidth="1.3" />
          <path d="M12 54 Q50 64 88 54 C83 78, 67 86, 50 86 C33 86, 17 78, 12 54 Z" fill="url(#emeraldGoldBowl)" stroke="#FBF0C4" strokeWidth="1.6" />
          <circle cx="50" cy="71" r="3.5" fill="#10B981" stroke="#FBF0C4" strokeWidth="1.2" />
          <path d="M32 86 L68 86 L74 94 L26 94 Z" fill="#E5C158" stroke="#FBF0C4" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export const PearlJasmineBandhanwar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 1200 115" preserveAspectRatio="none" className="w-full h-16 sm:h-24 drop-shadow-[0_8px_16px_rgba(0,0,0,0.75)]">
        <rect x="0" y="0" width="1200" height="7" fill="#E5C158" />
        {[0, 200, 400, 600, 800, 1000].map((offset) => (
          <g key={offset} transform={`translate(${offset}, 0)`}>
            {[25, 65, 100, 135, 175].map((lx) => (
              <path
                key={lx}
                d={`M${lx} 7 C${lx - 8} 22, ${lx - 4} 35, ${lx} 44 C${lx + 4} 35, ${lx + 8} 22, ${lx} 7 Z`}
                fill="#065F46"
                stroke="#E5C158"
                strokeWidth="0.9"
              />
            ))}
            <path d="M0 10 Q100 84 200 10" fill="none" stroke="#F4FBF7" strokeWidth="5.5" strokeDasharray="2 9" strokeLinecap="round" />
            <path d="M0 18 Q100 96 200 18" fill="none" stroke="#E5C158" strokeWidth="7" strokeDasharray="1 13" strokeLinecap="round" />
            <line x1="100" y1="50" x2="100" y2="82" stroke="#E5C158" strokeWidth="1.8" />
            <circle cx="100" cy="64" r="5.5" fill="#10B981" stroke="#FBF0C4" strokeWidth="1.2" />
            <path d="M90 92 C90 80, 110 80, 110 92 Z" fill="#E5C158" stroke="#FBF0C4" strokeWidth="1" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export const KundanCornerFiligree: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };
  return (
    <svg viewBox="0 0 100 100" className={`w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none ${rotationMap[position]} ${className}`}>
      <path d="M5 90 L5 16 C5 9, 9 5, 16 5 L90 5" fill="none" stroke="#E5C158" strokeWidth="3" strokeLinecap="round" />
      <path d="M13 72 L13 22 C13 16, 16 13, 22 13 L72 13" fill="none" stroke="#34D399" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M17 17 C36 15, 46 27, 37 39 C27 46, 15 36, 17 17 Z" fill="#0D9488" fillOpacity="0.45" stroke="#E5C158" strokeWidth="1.6" />
      <circle cx="27" cy="27" r="3.5" fill="#FBF0C4" />
    </svg>
  );
};

export const PeacockFeatherDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center w-full my-6 select-none ${className}`}>
      <div className="h-[1px] flex-1 max-w-[190px] bg-gradient-to-r from-transparent via-[#10B981] to-[#E5C158]" />
      <svg viewBox="0 0 140 42" className="w-32 h-10 mx-3 flex-shrink-0">
        <path d="M70 4 C77 15, 77 27, 70 38 C63 27, 63 15, 70 4 Z" fill="#E5C158" />
        <circle cx="70" cy="21" r="4" fill="#0F6B58" stroke="#FBF0C4" strokeWidth="1" />
        <path d="M70 9 C86 13, 92 25, 70 33 C48 25, 54 13, 70 9 Z" fill="none" stroke="#FBF0C4" strokeWidth="1.5" />
        <circle cx="32" cy="21" r="4.5" fill="#0D9488" stroke="#E5C158" strokeWidth="1.2" />
        <circle cx="108" cy="21" r="4.5" fill="#0D9488" stroke="#E5C158" strokeWidth="1.2" />
      </svg>
      <div className="h-[1px] flex-1 max-w-[190px] bg-gradient-to-l from-transparent via-[#10B981] to-[#E5C158]" />
    </div>
  );
};

export const DeccanPalaceSkyline: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-28 sm:h-44 opacity-30">
        <path
          d="M0 220 L0 145 L50 145 L58 70 L70 35 L82 70 L90 145 L170 145 C170 105, 205 80, 230 58 C255 80, 290 105, 290 145 L360 145 C360 112, 390 88, 415 65 C440 88, 470 112, 470 145 L535 145 C535 72, 645 28, 720 8 C795 28, 905 72, 905 145 L970 145 C970 112, 1000 88, 1025 65 C1050 88, 1080 112, 1080 145 L1150 145 C1150 105, 1185 80, 1210 58 C1235 80, 1270 105, 1270 145 L1350 145 L1358 70 L1370 35 L1382 70 L1390 145 L1440 145 L1440 220 Z"
          fill="#E5C158"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
};
