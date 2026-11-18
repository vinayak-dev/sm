import React from 'react';

/**
 * Unified Section Heading Component
 * - Eyebrow with Tamil / Sanskrit / English ceremonial title
 * - Stylish Cinzel & Playfair display title
 * - Increased mobile font size for clear reading
 * - Delicate gold hairline divider with diamond ornament
 * - Supports light and dark themes
 */
export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  theme = 'light', // 'light' | 'dark'
  align = 'center',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl px-3 sm:px-4 ${alignClass} ${className}`}>
      {/* Eyebrow (Larger on Mobile) */}
      {eyebrow && (
        <p
          className={`font-serif text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-2 sm:mb-2.5 ${
            isDark ? 'text-amber-200/90' : 'text-[#5A684C]'
          }`}
        >
          {eyebrow}
        </p>
      )}

      {/* Main Title (Playfair Display) */}
      {title && (
        <h2
          className={`font-display text-3xl xs:text-4xl sm:text-5xl font-normal sm:font-medium tracking-wide leading-tight ${
            isDark ? 'text-[#FAF7F0]' : 'text-[#3A2A20]'
          }`}
        >
          {title}
        </h2>
      )}

      {/* Refined Gold Hairline Divider with Diamond Ornament */}
      <div className={`flex items-center gap-3 my-3 sm:my-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span
          className={`h-[1px] w-14 sm:w-24 ${
            isDark
              ? 'bg-gradient-to-r from-transparent via-amber-300/40 to-transparent'
              : 'bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent'
          }`}
        />
        <div
          className={`w-2 h-2 rotate-45 ${
            isDark ? 'bg-amber-300/80 shadow-[0_0_8px_rgba(252,211,77,0.6)]' : 'bg-[#B8860B]'
          }`}
        />
        <span
          className={`h-[1px] w-14 sm:w-24 ${
            isDark
              ? 'bg-gradient-to-l from-transparent via-amber-300/40 to-transparent'
              : 'bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-transparent'
          }`}
        />
      </div>

      {/* Subtitle (Larger on Mobile) */}
      {subtitle && (
        <p
          className={`font-serif text-sm xs:text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-amber-100/75' : 'text-[#6D5A4D]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
