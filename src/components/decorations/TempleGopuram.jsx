import React from 'react';

/**
 * Animated South Indian Dravidian Temple Gopuram Motif
 * Featuring glowing sacred Kalasam pinnacles, radiating golden aura,
 * and illuminated sanctum archway.
 */
export const TempleGopuram = ({ className = "w-full h-32 text-gold" }) => {
  return (
    <div className={`relative flex flex-col justify-center items-center select-none ${className}`}>
      {/* Animated Golden Sunburst Aura behind Gopuram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-36 bg-amber-400/20 rounded-full blur-2xl animate-temple-radiance" />
      </div>

      <svg
        viewBox="0 0 400 160"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-lg mx-auto drop-shadow-md relative z-10"
      >
        <defs>
          <linearGradient id="gopuramGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="30%" stopColor="#DFB142" />
            <stop offset="70%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#721B29" />
          </linearGradient>

          <radialGradient id="kalasamBurst" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* 5 SACRED KALASAMS WITH ANIMATED DIVINE GLOW */}
        <g className="animate-kalasam-glow" style={{ transformOrigin: '200px 14px' }}>
          {/* Main center Kalasam */}
          <circle cx="200" cy="14" r="8" fill="url(#kalasamBurst)" opacity="0.75" />
          <path d="M 197 10 C 197 4, 203 4, 203 10 L 202 20 L 198 20 Z" fill="#FFF8DC" />
          <circle cx="200" cy="6" r="3" fill="#FFE57F" />

          {/* Flanking Kalasams */}
          <path d="M 187 13 C 187 8, 191 8, 191 13 L 190 20 L 188 20 Z" fill="#FFECB3" />
          <path d="M 209 13 C 209 8, 213 8, 213 13 L 212 20 L 210 20 Z" fill="#FFECB3" />
          <path d="M 177 16 C 177 12, 181 12, 181 16 L 180 22 L 178 22 Z" fill="#FFE082" />
          <path d="M 219 16 C 219 12, 223 12, 223 16 L 222 22 L 220 22 Z" fill="#FFE082" />
        </g>

        {/* Shikhara Crown Ridge */}
        <path
          d="M 170 24 C 185 19, 215 19, 230 24 L 228 32 L 172 32 Z"
          fill="url(#gopuramGold)"
        />

        {/* Tier 1 (Topmost tier) */}
        <path d="M 165 32 L 235 32 L 232 46 L 168 46 Z" fill="url(#gopuramGold)" />
        <rect x="178" y="36" width="6" height="7" rx="1.5" fill="#FFFDE8" opacity="0.6" />
        <rect x="190" y="36" width="6" height="7" rx="1.5" fill="#FFFDE8" opacity="0.6" />
        <rect x="204" y="36" width="6" height="7" rx="1.5" fill="#FFFDE8" opacity="0.6" />
        <rect x="216" y="36" width="6" height="7" rx="1.5" fill="#FFFDE8" opacity="0.6" />

        {/* Tier 2 */}
        <path d="M 158 48 L 242 48 L 238 64 L 162 64 Z" fill="url(#gopuramGold)" />
        <circle cx="172" cy="56" r="3.5" fill="#FFFDE8" opacity="0.5" />
        <circle cx="186" cy="56" r="3.5" fill="#FFFDE8" opacity="0.5" />
        <circle cx="200" cy="56" r="4" fill="#FFFDE8" opacity="0.7" />
        <circle cx="214" cy="56" r="3.5" fill="#FFFDE8" opacity="0.5" />
        <circle cx="228" cy="56" r="3.5" fill="#FFFDE8" opacity="0.5" />

        {/* Tier 3 */}
        <path d="M 150 66 L 250 66 L 244 86 L 156 86 Z" fill="url(#gopuramGold)" />
        <rect x="162" y="72" width="8" height="10" rx="2" fill="#FFFDE8" opacity="0.5" />
        <rect x="178" y="72" width="8" height="10" rx="2" fill="#FFFDE8" opacity="0.5" />
        <rect x="196" y="71" width="8" height="11" rx="2" fill="#FFFDE8" opacity="0.7" />
        <rect x="214" y="72" width="8" height="10" rx="2" fill="#FFFDE8" opacity="0.5" />
        <rect x="230" y="72" width="8" height="10" rx="2" fill="#FFFDE8" opacity="0.5" />

        {/* Tier 4 */}
        <path d="M 140 88 L 260 88 L 252 112 L 148 112 Z" fill="url(#gopuramGold)" />

        {/* Tier 5 (Base Level) */}
        <path d="M 130 114 L 270 114 L 262 138 L 138 138 Z" fill="url(#gopuramGold)" />

        {/* Animated Sacred Gateway Arch (Gopura Vaasal with divine glow) */}
        <path
          d="M 182 160 L 182 126 C 182 116, 218 116, 218 126 L 218 160 Z"
          fill="#FFFDF0"
          className="animate-pulse"
        />
        <path
          d="M 187 160 L 187 132 C 187 124, 213 124, 213 132 L 213 160 Z"
          fill="#DFB142"
          opacity="0.4"
        />

        {/* Flanking Temple Pillars */}
        <rect x="115" y="125" width="9" height="35" rx="1.5" fill="url(#gopuramGold)" />
        <rect x="276" y="125" width="9" height="35" rx="1.5" fill="url(#gopuramGold)" />
        <rect x="94" y="132" width="8" height="28" rx="1.5" fill="url(#gopuramGold)" opacity="0.8" />
        <rect x="298" y="132" width="8" height="28" rx="1.5" fill="url(#gopuramGold)" opacity="0.8" />

        {/* Base Foundation (Peedam) */}
        <rect x="60" y="156" width="280" height="4" rx="2" fill="url(#gopuramGold)" />
      </svg>
    </div>
  );
};
