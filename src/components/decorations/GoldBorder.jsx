import React from 'react';

/**
 * Intricate Traditional Gold Corner Ornaments and Dividers
 */
export const GoldCorner = ({ position = "top-left", className = "w-12 h-12" }) => {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position] || "";

  return (
    <div className={`absolute pointer-events-none ${rotationClass} ${className}`}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold">
        {/* Outer Corner Frame */}
        <path d="M 4 4 L 70 4 C 60 12, 60 20, 68 28 L 30 28 C 24 28, 20 24, 20 18 L 4 18 Z" fill="currentColor" opacity="0.85" />
        <path d="M 4 4 L 4 70 C 12 60, 20 60, 28 68 L 28 30 C 28 24, 24 20, 18 20 L 18 4 Z" fill="currentColor" opacity="0.85" />
        
        {/* Filigree Curves */}
        <path d="M 6 6 L 50 6 C 40 14, 30 24, 30 50 L 6 50 Z" stroke="#FBE9B9" strokeWidth="1" fill="none" opacity="0.7" />
        <circle cx="14" cy="14" r="3.5" fill="#FFF2A3" />
        <circle cx="28" cy="10" r="2" fill="#D4AF37" />
        <circle cx="10" cy="28" r="2" fill="#D4AF37" />
        
        {/* Paisley / Mango (Manga) Motif */}
        <path
          d="M 12 12 Q 35 15 32 32 Q 22 42 16 28 Z"
          fill="#DFB142"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export const GoldDivider = ({ title, subtitle, className = "my-8" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center px-4 ${className}`}>
      <div className="flex items-center justify-center gap-3 w-full max-w-md">
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-gold to-gold/40" />
        <div className="flex items-center gap-1.5 text-gold">
          <span className="text-xs">✦</span>
          <span className="w-2.5 h-2.5 rotate-45 border border-gold bg-amber-100" />
          <span className="text-base font-serif">🪔</span>
          <span className="w-2.5 h-2.5 rotate-45 border border-gold bg-amber-100" />
          <span className="text-xs">✦</span>
        </div>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-gold to-gold/40" />
      </div>

      {title && (
        <h3 className="mt-3 font-display tracking-widest text-maroon font-bold text-sm sm:text-base uppercase">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-xs text-[#7A6150] font-serif italic mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
};
