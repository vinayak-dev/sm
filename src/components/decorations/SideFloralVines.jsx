import React from 'react';

/**
 * Romantic Botanical & Floral Vines running along the vertical edges of the screen,
 * inspired by luxury mobile wedding invitations.
 * Prominently visible on mobile view and desktop.
 */
export const SideFloralVines = ({ position = "left", isFixed = true }) => {
  const isLeft = position === "left";

  return (
    <div
      aria-hidden="true"
      className={`hidden md:block ${
        isFixed ? 'fixed inset-y-0' : 'absolute top-0 bottom-0'
      } ${
        isLeft ? 'left-0' : 'right-0 -scale-x-100'
      } w-10 sm:w-12 md:w-16 pointer-events-none z-20 overflow-hidden select-none opacity-90`}
    >
      <svg
        viewBox="0 0 70 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`stemGrad_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7D8F6E" />
            <stop offset="100%" stopColor="#4A5A3D" />
          </linearGradient>

          <linearGradient id={`roseGrad_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE0E6" />
            <stop offset="45%" stopColor="#F5A3B3" />
            <stop offset="100%" stopColor="#C4536B" />
          </linearGradient>

          <linearGradient id={`goldAccent_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4BD" />
            <stop offset="50%" stopColor="#DFB142" />
            <stop offset="100%" stopColor="#9C6B17" />
          </linearGradient>

          <radialGradient id={`jasmineBloom_${position}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FCFAF2" />
            <stop offset="100%" stopColor="#E2E8D8" />
          </radialGradient>
        </defs>

        {/* Continuous undulating botanical vine stem */}
        <path
          d="M 12 0 
             Q 24 60 14 125 
             Q 4 190 16 250 
             Q 28 310 14 375 
             Q 2 440 16 500 
             Q 28 560 14 625 
             Q 2 690 16 750 
             Q 28 810 14 875 
             Q 2 940 14 1000"
          stroke={`url(#stemGrad_${position})`}
          strokeWidth="2.5"
          fill="none"
        />

        {/* Delicate golden tendril curls */}
        <path
          d="M 14 125 Q 36 140 28 160 Q 18 170 16 155"
          stroke={`url(#goldAccent_${position})`}
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 14 375 Q 36 390 28 410 Q 18 420 16 405"
          stroke={`url(#goldAccent_${position})`}
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 14 625 Q 36 640 28 660 Q 18 670 16 655"
          stroke={`url(#goldAccent_${position})`}
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 14 875 Q 36 890 28 910 Q 18 920 16 905"
          stroke={`url(#goldAccent_${position})`}
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />

        {/* Repeating Floral Clusters: Roses, Jasmine & Leaves */}
        {[30, 110, 190, 270, 350, 430, 510, 590, 670, 750, 830, 910, 980].map((y, idx) => {
          const flip = idx % 2 === 0;
          const isLargeRose = idx % 3 === 0;

          return (
            <g key={idx} transform={`translate(${flip ? 16 : 10}, ${y})`}>
              {/* Sage Green Leaf pointing right/inward */}
              <path
                d="M 0 0 C 20 -12, 36 -6, 44 14 C 26 16, 10 10, 0 0 Z"
                fill={`url(#stemGrad_${position})`}
                opacity="0.9"
                transform={flip ? "rotate(18)" : "rotate(-25)"}
              />

              {/* Smaller Gold Highlight Leaf */}
              <path
                d="M 0 0 C 14 -10, 26 -6, 30 6 C 18 8, 8 4, 0 0 Z"
                fill={`url(#goldAccent_${position})`}
                opacity="0.75"
                transform={flip ? "rotate(-35)" : "rotate(25)"}
              />

              {/* Rose Flower (Full bloom or tender bud) */}
              {isLargeRose ? (
                <g transform="translate(12, 2)">
                  <circle cx="0" cy="0" r="8" fill={`url(#roseGrad_${position})`} />
                  {/* Rose petals spiral */}
                  <circle cx="-1.5" cy="-1.5" r="5" fill="#FFEBF0" opacity="0.6" />
                  <circle cx="1" cy="1" r="3.5" fill={`url(#roseGrad_${position})`} />
                  <circle cx="0" cy="0" r="1.5" fill="#C4536B" />
                </g>
              ) : (
                <g transform="translate(10, 2)">
                  <ellipse cx="0" cy="0" rx="5.5" ry="6.5" fill={`url(#roseGrad_${position})`} />
                  <ellipse cx="0" cy="-1" rx="3.5" ry="4" fill="#FFEBF0" opacity="0.6" />
                </g>
              )}

              {/* Delicate White Jasmine Blossom Companion */}
              <g transform="translate(26, -4)">
                {/* 4 Petals of Jasmine */}
                <ellipse cx="0" cy="-3.5" rx="2" ry="3.5" fill={`url(#jasmineBloom_${position})`} />
                <ellipse cx="0" cy="3.5" rx="2" ry="3.5" fill={`url(#jasmineBloom_${position})`} />
                <ellipse cx="-3.5" cy="0" rx="3.5" ry="2" fill={`url(#jasmineBloom_${position})`} />
                <ellipse cx="3.5" cy="0" rx="3.5" ry="2" fill={`url(#jasmineBloom_${position})`} />
                {/* Center Pollen Dot */}
                <circle cx="0" cy="0" r="1.2" fill="#E5C378" />
              </g>

              {/* Tiny Jasmine Buds & Drops */}
              <circle cx="18" cy="12" r="2.2" fill={`url(#jasmineBloom_${position})`} />
              <circle cx="4" cy="-8" r="1.8" fill={`url(#jasmineBloom_${position})`} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
