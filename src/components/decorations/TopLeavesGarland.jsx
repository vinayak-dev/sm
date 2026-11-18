import React from 'react';

/**
 * Traditional South Indian Mango Leaves Thoranam (Maavilai Thoranam)
 * Auspicious hanging mango leaves garland along the top lintel of the invitation doors.
 */
export const TopLeavesGarland = ({ side = "left" }) => {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 ${isLeft ? 'left-0 right-0' : 'left-0 right-0'} h-16 sm:h-24 pointer-events-none z-30 overflow-visible`}
    >
      <svg
        viewBox="0 0 400 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${!isLeft ? '-scale-x-100' : ''}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Leaf Gradients */}
          <linearGradient id={`leafGrad1_${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F9C5B" />
            <stop offset="50%" stopColor="#537238" />
            <stop offset="100%" stopColor="#364E22" />
          </linearGradient>

          <linearGradient id={`leafGrad2_${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#96B46F" />
            <stop offset="50%" stopColor="#5F8240" />
            <stop offset="100%" stopColor="#3C5627" />
          </linearGradient>

          <linearGradient id={`goldRope_${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFB142" />
            <stop offset="50%" stopColor="#FFF2A3" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Golden Marigold Accent Bead */}
          <radialGradient id={`marigold_${side}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
        </defs>

        {/* Top Gold & Jute Hanging Cord */}
        <path
          d="M 0 6 Q 100 12, 200 8 T 400 6"
          stroke={`url(#goldRope_${side})`}
          strokeWidth="3"
          fill="none"
        />

        {/* Mango Leaves Cluster 1 (Left / Anchor) */}
        <g transform="translate(20, 8)">
          <path
            d="M 0 0 C -8 18, -12 36, -6 52 C -2 62, 0 68, 2 72 C 4 68, 6 62, 10 52 C 16 36, 12 18, 0 0 Z"
            fill={`url(#leafGrad1_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 70" stroke="#8FA86D" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Mango Leaves Cluster 2 */}
        <g transform="translate(80, 10)">
          <path
            d="M 0 0 C -10 20, -14 42, -7 60 C -3 70, 0 78, 2 82 C 4 78, 7 70, 11 60 C 18 42, 14 20, 0 0 Z"
            fill={`url(#leafGrad2_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 80" stroke="#A9C780" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Mango Leaves Cluster 3 */}
        <g transform="translate(150, 9)">
          <path
            d="M 0 0 C -8 18, -12 38, -6 54 C -2 64, 0 70, 2 74 C 4 70, 6 64, 10 54 C 16 38, 12 18, 0 0 Z"
            fill={`url(#leafGrad1_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 72" stroke="#8FA86D" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Mango Leaves Cluster 4 */}
        <g transform="translate(225, 9)">
          <path
            d="M 0 0 C -10 20, -15 44, -8 62 C -3 72, 0 80, 2 84 C 4 80, 7 72, 12 62 C 19 44, 14 20, 0 0 Z"
            fill={`url(#leafGrad2_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 82" stroke="#A9C780" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Mango Leaves Cluster 5 */}
        <g transform="translate(300, 8)">
          <path
            d="M 0 0 C -8 18, -12 36, -6 52 C -2 62, 0 68, 2 72 C 4 68, 6 62, 10 52 C 16 36, 12 18, 0 0 Z"
            fill={`url(#leafGrad1_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 70" stroke="#8FA86D" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Mango Leaves Cluster 6 (Meeting Seam) */}
        <g transform="translate(370, 7)">
          <path
            d="M 0 0 C -9 20, -13 40, -6 56 C -2 66, 0 74, 2 78 C 4 74, 6 66, 10 56 C 16 40, 13 20, 0 0 Z"
            fill={`url(#leafGrad2_${side})`}
            stroke="#2B3E1B"
            strokeWidth="0.8"
          />
          <path d="M 0 2 L 2 76" stroke="#A9C780" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill={`url(#marigold_${side})`} />
        </g>

        {/* Jasmine Flower Droplets */}
        {[50, 115, 185, 260, 335].map((pos, idx) => (
          <g key={idx} transform={`translate(${pos}, 9)`}>
            <circle cx="0" cy="8" r="2.2" fill="#FFFFF0" />
            <circle cx="0" cy="14" r="2" fill="#FFFFF0" />
            <circle cx="0" cy="20" r="1.6" fill="#F8F6E6" />
            <circle cx="0" cy="2" r="2" fill="#D4AF37" />
          </g>
        ))}
      </svg>
    </div>
  );
};
