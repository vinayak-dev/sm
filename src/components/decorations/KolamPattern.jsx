import React from 'react';

/**
 * Sacred South Indian Kolam / Rangoli Motif
 * Traditional symmetrical geometric lotus pattern symbolizing auspicious beginnings,
 * harmony, and the goddess Lakshmi's blessings.
 */
export const KolamPattern = ({ className = "w-32 h-32", color = "#D4AF37", opacity = 0.85 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        style={{ color }}
      >
        {/* Central Lotus Bindu */}
        <circle cx="100" cy="100" r="8" fill="currentColor" opacity={opacity} />
        <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity={opacity} />
        
        {/* 8-Petal Sacred Lotus Flower */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
          <g key={idx} transform={`rotate(${angle} 100 100)`}>
            {/* Inner Petal */}
            <path
              d="M 100 84 C 94 72, 94 56, 100 48 C 106 56, 106 72, 100 84 Z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              opacity={opacity}
            />
            {/* Outer Flourish Loop (Sikku Kolam curve) */}
            <path
              d="M 100 48 C 85 36, 85 18, 100 12 C 115 18, 115 36, 100 48 Z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              opacity={opacity * 0.9}
            />
            {/* Decorative Dot / Pulli */}
            <circle cx="100" cy="30" r="2.2" fill="currentColor" opacity={opacity} />
            <circle cx="100" cy="66" r="1.8" fill="currentColor" opacity={opacity} />
          </g>
        ))}

        {/* Outer Circular Floral Rim */}
        <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity={opacity * 0.7} />
        <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.8" opacity={opacity * 0.85} />
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.8" opacity={opacity * 0.5} />

        {/* 16 Border Beads */}
        {Array.from({ length: 16 }).map((_, idx) => {
          const angle = (idx * 360) / 16;
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 82 * Math.cos(rad);
          const y = 100 + 82 * Math.sin(rad);
          return (
            <circle key={idx} cx={x} cy={y} r="2.5" fill="currentColor" opacity={opacity} />
          );
        })}
      </svg>
    </div>
  );
};
