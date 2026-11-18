import React from 'react';

/**
 * Hand-Crafted South Indian Dravidian Temple Architectural Illustration
 * Replacing flat icons with a detailed, regal temple illustration featuring
 * tiered gopuram carvings, kalasa finials, mandapam pillars, and sanctum glow.
 */
export const TempleIllustration = ({ className = "w-full max-w-sm mx-auto h-auto" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Soft celestial backlight glow behind temple */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 bg-amber-200/25 rounded-full blur-2xl animate-pulse" />
      </div>

      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md relative z-10"
      >
        <defs>
          <linearGradient id="stoneGopuram" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D1" />
            <stop offset="25%" stopColor="#E5C378" />
            <stop offset="60%" stopColor="#B38528" />
            <stop offset="100%" stopColor="#6C4511" />
          </linearGradient>

          <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ECC87A" />
            <stop offset="50%" stopColor="#FFF9E0" />
            <stop offset="100%" stopColor="#ECC87A" />
          </linearGradient>

          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="70%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* 5 SACRED KALASAMS ON TOP WITH GOLD FINIALS */}
        <g>
          {/* Main central Kalasam */}
          <path d="M 158 14 C 158 8, 162 8, 162 14 L 161 22 L 159 22 Z" fill="url(#goldShine)" />
          <circle cx="160" cy="8" r="3" fill="#FFF4BD" />
          <circle cx="160" cy="14" r="5" fill="url(#stoneGopuram)" stroke="#6C4511" strokeWidth="0.5" />

          {/* Flanking Kalasams */}
          <circle cx="148" cy="16" r="3.5" fill="url(#stoneGopuram)" />
          <circle cx="148" cy="11" r="2" fill="url(#goldShine)" />
          <circle cx="172" cy="16" r="3.5" fill="url(#stoneGopuram)" />
          <circle cx="172" cy="11" r="2" fill="url(#goldShine)" />

          <circle cx="138" cy="18" r="3" fill="url(#stoneGopuram)" />
          <circle cx="138" cy="13" r="1.5" fill="url(#goldShine)" />
          <circle cx="182" cy="18" r="3" fill="url(#stoneGopuram)" />
          <circle cx="182" cy="13" r="1.5" fill="url(#goldShine)" />
        </g>

        {/* TIER 1 - SHIKHARA ROOF RIDGE */}
        <path d="M 132 23 C 146 19, 174 19, 188 23 L 186 32 L 134 32 Z" fill="url(#stoneGopuram)" stroke="#59370A" strokeWidth="0.8" />
        <line x1="140" y1="27" x2="180" y2="27" stroke="#FFF7D6" strokeWidth="0.8" strokeDasharray="3 2" />

        {/* TIER 2 - UPPER LEVEL */}
        <path d="M 126 32 L 194 32 L 190 48 L 130 48 Z" fill="url(#stoneGopuram)" stroke="#59370A" strokeWidth="0.8" />
        {/* Niche Carvings */}
        <rect x="142" y="36" width="7" height="9" rx="1.5" fill="#FFFDE8" opacity="0.8" />
        <rect x="156" y="35" width="8" height="10" rx="1.5" fill="#FFFDE8" opacity="0.9" />
        <rect x="171" y="36" width="7" height="9" rx="1.5" fill="#FFFDE8" opacity="0.8" />

        {/* TIER 3 - MID UPPER LEVEL */}
        <path d="M 118 48 L 202 48 L 197 68 L 123 68 Z" fill="url(#stoneGopuram)" stroke="#59370A" strokeWidth="0.8" />
        <circle cx="136" cy="58" r="3" fill="#FFFDE8" opacity="0.8" />
        <rect x="146" y="54" width="8" height="11" rx="1.5" fill="#FFFDE8" opacity="0.85" />
        <rect x="166" y="54" width="8" height="11" rx="1.5" fill="#FFFDE8" opacity="0.85" />
        <circle cx="184" cy="58" r="3" fill="#FFFDE8" opacity="0.8" />

        {/* TIER 4 - CENTRAL MAIN TIER */}
        <path d="M 110 68 L 210 68 L 204 92 L 116 92 Z" fill="url(#stoneGopuram)" stroke="#59370A" strokeWidth="0.8" />
        <rect x="126" y="74" width="9" height="13" rx="2" fill="#FFFDE8" opacity="0.75" />
        <rect x="144" y="74" width="9" height="14" rx="2" fill="#FFFDE8" opacity="0.85" />
        <rect x="167" y="74" width="9" height="14" rx="2" fill="#FFFDE8" opacity="0.85" />
        <rect x="185" y="74" width="9" height="13" rx="2" fill="#FFFDE8" opacity="0.75" />

        {/* TIER 5 - BROAD BASE TIER */}
        <path d="M 100 92 L 220 92 L 214 120 L 106 120 Z" fill="url(#stoneGopuram)" stroke="#59370A" strokeWidth="0.8" />
        <rect x="115" y="98" width="10" height="16" rx="2" fill="#FFFDE8" opacity="0.7" />
        <rect x="135" y="98" width="11" height="17" rx="2" fill="#FFFDE8" opacity="0.8" />
        <rect x="154" y="97" width="12" height="18" rx="2" fill="#FFFDE8" opacity="0.9" />
        <rect x="174" y="98" width="11" height="17" rx="2" fill="#FFFDE8" opacity="0.8" />
        <rect x="195" y="98" width="10" height="16" rx="2" fill="#FFFDE8" opacity="0.7" />

        {/* MANDAPAM CORNICE (Kapotha / Chhajja) */}
        <path d="M 75 120 L 245 120 L 250 128 L 70 128 Z" fill="url(#stoneGopuram)" stroke="#4A2D05" strokeWidth="1" />
        <line x1="72" y1="124" x2="248" y2="124" stroke="#FFE9A3" strokeWidth="1" />

        {/* PILLARED MANDAPAM & SANCTUM */}
        <rect x="80" y="128" width="160" height="68" fill="url(#stoneGopuram)" opacity="0.95" />

        {/* ARCHITECTURAL CARVED PILLARS (Stambhas) */}
        {/* Outer Left Pillar */}
        <rect x="84" y="128" width="12" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />
        <ellipse cx="90" cy="145" rx="7" ry="3" fill="#B38528" />
        <ellipse cx="90" cy="175" rx="7" ry="3" fill="#B38528" />

        {/* Mid Left Pillar */}
        <rect x="110" y="128" width="11" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />

        {/* Inner Left Pillar */}
        <rect x="134" y="128" width="11" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />

        {/* Inner Right Pillar */}
        <rect x="175" y="128" width="11" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />

        {/* Mid Right Pillar */}
        <rect x="199" y="128" width="11" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />

        {/* Outer Right Pillar */}
        <rect x="224" y="128" width="12" height="68" fill="url(#goldShine)" stroke="#59370A" strokeWidth="0.6" />
        <ellipse cx="230" cy="145" rx="7" ry="3" fill="#B38528" />
        <ellipse cx="230" cy="175" rx="7" ry="3" fill="#B38528" />

        {/* SACRED TEMPLE GATEWAY ARCH (Thoranum Arch with Warm Diya Sanctum Glow) */}
        <path
          d="M 145 196 L 145 152 C 145 140, 175 140, 175 152 L 175 196 Z"
          fill="url(#innerGlow)"
        />
        <path
          d="M 148 196 L 148 156 C 148 146, 172 146, 172 156 L 172 196 Z"
          fill="#3B1C0A"
          opacity="0.85"
        />

        {/* Sanctum Golden Diya Flame */}
        <circle cx="160" cy="172" r="3" fill="#FFE57F" className="animate-pulse" />
        <ellipse cx="160" cy="170" rx="1.5" ry="3.5" fill="#FFF" />

        {/* BASE PLATFORM / UPAPEEDAM STEPS */}
        <rect x="60" y="196" width="200" height="8" rx="1.5" fill="url(#stoneGopuram)" stroke="#4A2D05" strokeWidth="0.8" />
        <rect x="50" y="204" width="220" height="7" rx="1.5" fill="url(#stoneGopuram)" stroke="#4A2D05" strokeWidth="0.8" />
        <rect x="40" y="211" width="240" height="6" rx="2" fill="url(#stoneGopuram)" stroke="#4A2D05" strokeWidth="0.8" />

        {/* Step highlights */}
        <line x1="62" y1="198" x2="258" y2="198" stroke="#FFEBA8" strokeWidth="0.8" />
        <line x1="52" y1="206" x2="268" y2="206" stroke="#FFEBA8" strokeWidth="0.8" />
      </svg>
    </div>
  );
};
