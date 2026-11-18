import React from 'react';

/**
 * Traditional Hanging Brass Temple Bell (Mani)
 * Swings smoothly and visibly from LEFT to RIGHT with realistic pendulum physics.
 */
export const TempleBell = ({ className = "w-10 h-32 sm:w-12 sm:h-38", delay = "0s", duration = "2.8s" }) => {
  return (
    <div
      className={`relative inline-block select-none origin-top pointer-events-none ${className}`}
      style={{
        animation: `bellSwingLeftRight ${duration} ease-in-out infinite`,
        animationDelay: delay,
        transformOrigin: 'top center',
      }}
    >
      <svg
        viewBox="0 0 60 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="bellGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFB142" />
            <stop offset="35%" stopColor="#FFF4B8" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C5C0F" />
          </linearGradient>

          <linearGradient id="chainGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C5C0F" />
          </linearGradient>
        </defs>

        {/* Top Ceiling Hook */}
        <circle cx="30" cy="8" r="5" stroke="url(#chainGoldGrad)" strokeWidth="2.5" fill="none" />

        {/* Chain Links */}
        {[18, 30, 42, 54, 66, 78].map((y, idx) => (
          <ellipse
            key={idx}
            cx="30"
            cy={y}
            rx="3.5"
            ry="6"
            stroke="url(#chainGoldGrad)"
            strokeWidth="2.2"
            fill="none"
          />
        ))}

        {/* Bell Top Cap & Ring */}
        <ellipse cx="30" cy="88" rx="8" ry="3.5" fill="url(#bellGoldGrad)" />
        <path d="M 27 88 L 24 94 L 36 94 L 33 88 Z" fill="url(#bellGoldGrad)" />

        {/* Bell Body / Dome */}
        <path
          d="M 24 94 C 23 105, 13 122, 11 134 C 10 138, 50 138, 49 134 C 47 122, 37 105, 36 94 Z"
          fill="url(#bellGoldGrad)"
        />

        {/* Rim Flange of Bell */}
        <ellipse cx="30" cy="134" rx="20" ry="6.5" fill="url(#bellGoldGrad)" stroke="#6A4506" strokeWidth="0.8" />
        <ellipse cx="30" cy="134" rx="17" ry="4.5" fill="#5A3A05" />

        {/* Clapper / Tongue swinging beneath rim */}
        <line x1="30" y1="130" x2="30" y2="152" stroke="#7A4F0B" strokeWidth="2.5" />
        <circle cx="30" cy="153" r="5" fill="url(#bellGoldGrad)" stroke="#6A4506" strokeWidth="0.5" />

        {/* Decorative Engraved Grooves on Bell Dome */}
        <path d="M 22 108 Q 30 113 38 108" stroke="#FFF7C2" strokeWidth="1" fill="none" />
        <path d="M 18 120 Q 30 127 42 120" stroke="#FFF7C2" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  );
};
