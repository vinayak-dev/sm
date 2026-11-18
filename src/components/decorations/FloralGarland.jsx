import React from 'react';

/**
 * Traditional South Indian Thoranam & Garland (Maavilai & Malligai / Chevvanthi Thoranam)
 * Hung at wedding hall entrances and mandapams for prosperity and auspicious welcoming.
 */
export const FloralGarland = ({ className = "w-full overflow-hidden" }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm min-w-[700px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7E9F6F" />
            <stop offset="100%" stopColor="#4A6B3D" />
          </linearGradient>

          <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAE33" />
            <stop offset="60%" stopColor="#F57C00" />
            <stop offset="100%" stopColor="#D84315" />
          </linearGradient>

          <linearGradient id="yellowMarigold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEE58" />
            <stop offset="80%" stopColor="#FDD835" />
            <stop offset="100%" stopColor="#F57F17" />
          </linearGradient>

          <radialGradient id="jasmineGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F5F5EC" />
            <stop offset="100%" stopColor="#DDE6D5" />
          </radialGradient>

          {/* Golden Ribbon String */}
          <linearGradient id="goldString" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFB142" />
            <stop offset="50%" stopColor="#FFF2A3" />
            <stop offset="100%" stopColor="#DFB142" />
          </linearGradient>
        </defs>

        {/* Auspicious Golden Support Cord with Swags */}
        <path
          d="M 0 15 Q 150 48 300 15 Q 450 48 600 15 Q 750 48 900 15 Q 1050 48 1200 15"
          stroke="url(#goldString)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Secondary Delicate Jasmine Strand */}
        <path
          d="M 0 18 Q 150 62 300 18 Q 450 62 600 18 Q 750 62 900 18 Q 1050 62 1200 18"
          stroke="#FAF7F0"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.85"
        />

        {/* Repeating Floral & Leaf Clusters across the 4 Swags */}
        {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((cx, idx) => {
          const isTrough = idx % 2 === 1;
          const cy = isTrough ? 44 : 15;
          return (
            <g key={idx} transform={`translate(${cx}, ${cy})`}>
              {/* Sacred Mango Leaf (Maavilai) pointing down */}
              <path
                d="M 0 0 C -12 15, -10 38, 0 52 C 10 38, 12 15, 0 0 Z"
                fill="url(#leafGrad)"
                opacity="0.9"
              />
              <line x1="0" y1="2" x2="0" y2="48" stroke="#36522B" strokeWidth="1" opacity="0.6" />

              {/* Pair of Jasmine Buds */}
              <ellipse cx="-8" cy="12" rx="4" ry="7" transform="rotate(-25 -8 12)" fill="url(#jasmineGrad)" />
              <ellipse cx="8" cy="12" rx="4" ry="7" transform="rotate(25 8 12)" fill="url(#jasmineGrad)" />

              {/* Radiant Marigold Flower Cluster (Chevvanthi) */}
              <circle cx="0" cy="10" r="10" fill="url(#marigoldGrad)" />
              <circle cx="0" cy="10" r="6" fill="url(#yellowMarigold)" />
              <circle cx="0" cy="10" r="2.5" fill="#D84315" />

              {/* Jasmine Drops Hanging from Swag Centers */}
              {isTrough && (
                <g transform="translate(0, 24)">
                  <circle cx="0" cy="2" r="3" fill="url(#jasmineGrad)" />
                  <circle cx="0" cy="8" r="3.2" fill="url(#jasmineGrad)" />
                  <circle cx="0" cy="14" r="3.4" fill="url(#jasmineGrad)" />
                  <circle cx="0" cy="21" r="5" fill="url(#marigoldGrad)" />
                </g>
              )}
            </g>
          );
        })}

        {/* Intermediate Jasmine Clusters between peaks and troughs */}
        {[75, 225, 375, 525, 675, 825, 975, 1125].map((cx, idx) => (
          <g key={`mid-${idx}`} transform={`translate(${cx}, 31)`}>
            <circle cx="-5" cy="0" r="3.5" fill="url(#jasmineGrad)" />
            <circle cx="5" cy="0" r="3.5" fill="url(#jasmineGrad)" />
            <circle cx="0" cy="-4" r="3" fill="url(#yellowMarigold)" />
          </g>
        ))}
      </svg>
    </div>
  );
};
