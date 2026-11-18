import React from 'react';

/**
 * Traditional South Indian Brass Kuthu Vilakku (Auspicious Deepam Lamp)
 * Features warm golden brass metallic gradient and an animated flickering flame with soft radial aura.
 */
export const KuthuVilakku = ({ className = "w-16 h-36", withGlow = true }) => {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {withGlow && (
        <div className="absolute top-2 w-12 h-12 bg-amber-400/30 rounded-full blur-xl animate-pulse-glow pointer-events-none" />
      )}
      <svg
        viewBox="0 0 100 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="35%" stopColor="#DFB142" />
            <stop offset="70%" stopColor="#9C6B17" />
            <stop offset="100%" stopColor="#DFB142" />
          </linearGradient>

          <linearGradient id="brassHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDE0" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#7A4F0B" />
          </linearGradient>

          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="40%" stopColor="#FFC837" />
            <stop offset="80%" stopColor="#FF8008" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Flickering Lamp Flame on top */}
        <g className="animate-pulse">
          <ellipse cx="50" cy="22" rx="7" ry="14" fill="url(#flameGlow)" opacity="0.95" />
          <path
            d="M 50 8 C 53 14, 55 18, 54 24 C 53 28, 47 28, 46 24 C 45 18, 47 14, 50 8 Z"
            fill="#FFF"
            opacity="0.85"
          />
        </g>

        {/* Kalasam Finial / Bird ornament at the top tip */}
        <path d="M 47 26 C 47 24, 53 24, 53 26 L 52 32 L 48 32 Z" fill="url(#brassHighlight)" />
        <circle cx="50" cy="30" r="3" fill="url(#brassGold)" />

        {/* Top Oil Bowl Tier (Thattu) with 5 wick spouts */}
        <ellipse cx="50" cy="42" rx="22" ry="7" fill="url(#brassGold)" stroke="#6A4506" strokeWidth="0.8" />
        <path d="M 28 42 Q 50 48 72 42 Q 66 52 50 52 Q 34 52 28 42 Z" fill="url(#brassHighlight)" />
        {/* Wick spouts */}
        <circle cx="30" cy="41" r="2" fill="#7A4F0B" />
        <circle cx="40" cy="43" r="2" fill="#7A4F0B" />
        <circle cx="50" cy="44" r="2.2" fill="#7A4F0B" />
        <circle cx="60" cy="43" r="2" fill="#7A4F0B" />
        <circle cx="70" cy="41" r="2" fill="#7A4F0B" />

        {/* Upper Column Collar */}
        <path d="M 44 52 L 56 52 L 54 62 L 46 62 Z" fill="url(#brassGold)" />
        <ellipse cx="50" cy="62" rx="8" ry="3" fill="url(#brassHighlight)" />

        {/* Central Slender Stem / Stambha with ornamental beads */}
        <rect x="47" y="62" width="6" height="50" rx="3" fill="url(#brassGold)" />
        <ellipse cx="50" cy="85" rx="9" ry="4" fill="url(#brassHighlight)" />
        <ellipse cx="50" cy="112" rx="10" ry="4" fill="url(#brassGold)" />

        {/* Middle Tier Ring */}
        <path d="M 42 113 Q 50 118 58 113 L 56 122 L 44 122 Z" fill="url(#brassGold)" />

        {/* Lower Main Shaft */}
        <rect x="46" y="122" width="8" height="55" rx="3" fill="url(#brassHighlight)" />
        <ellipse cx="50" cy="148" rx="11" ry="5" fill="url(#brassGold)" stroke="#7A4F0B" strokeWidth="0.5" />

        {/* Base Bell Ring / Peedam transition */}
        <path d="M 38 178 Q 50 174 62 178 L 66 195 Q 50 190 34 195 Z" fill="url(#brassGold)" />

        {/* Circular Fluted Base (Peedam) */}
        <ellipse cx="50" cy="195" rx="26" ry="9" fill="url(#brassHighlight)" stroke="#6A4506" strokeWidth="0.8" />
        <path d="M 24 195 C 24 212, 76 212, 76 195 L 80 220 C 80 234, 20 234, 20 220 Z" fill="url(#brassGold)" />
        <ellipse cx="50" cy="222" rx="34" ry="11" fill="url(#brassHighlight)" stroke="#593703" strokeWidth="1" />
        
        {/* Foot Rim */}
        <path d="M 16 222 C 16 238, 84 238, 84 222 L 86 230 C 86 242, 14 242, 14 230 Z" fill="url(#brassGold)" />
        
        {/* Intricate Engraving Lines */}
        <line x1="30" y1="205" x2="70" y2="205" stroke="#FFF7C2" strokeWidth="0.6" strokeDasharray="2 2" />
        <line x1="22" y1="223" x2="78" y2="223" stroke="#FFF7C2" strokeWidth="0.8" />
      </svg>
    </div>
  );
};
