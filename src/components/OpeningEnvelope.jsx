import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TopLeavesGarland } from './decorations/TopLeavesGarland';
import { KolamPattern } from './decorations/KolamPattern';
import { SideFloralVines } from './decorations/SideFloralVines';

/**
 * Royal Botanical Sage & Gold Opening Cover Animation
 * Strictly Mobile-First Responsive:
 * - Side flowers prominently visible on mobile screen edges
 * - Perfectly fitted cartouche medallion on all phone viewports
 * - Clean parting doors and silk drapes
 * - Animated swinging temple bells (left to right)
 */
export const OpeningEnvelope = ({ isOpen, onOpen, config }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Stately ceremonial gold & petal shower
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#721B29', '#E8CA8B', '#FAD2D8', '#FFFFF0'],
    });

    onOpen();

    setTimeout(() => {
      setIsFullyRevealed(true);
    }, 3600);
  };

  if (isFullyRevealed && isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none transition-all duration-[3600ms] ${
        isOpening ? 'pointer-events-none' : ''
      }`}
      style={{ perspective: '1600px' }}
    >
      {/* =========================================================================
          LAYER 1 (INNER): BLUSH SILK CURTAINS / DRAPES WITH PEARL BEADING
          ========================================================================= */}
      {/* Left Silk Drape */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 z-20 bg-gradient-to-r from-[#F8F2EB] via-[#F3E7DC] to-[#EAD8CA] border-r border-amber-200 shadow-2xl transition-all duration-[3200ms] ease-in-out ${
          isOpening ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{
          transitionDelay: isOpening ? '450ms' : '0ms',
          boxShadow: 'inset -20px 0 40px rgba(180, 140, 110, 0.25)',
        }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-2.5 flex flex-col justify-between py-2 items-center opacity-75">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-white to-amber-200 border border-amber-300 shadow-sm" />
          ))}
        </div>
      </div>

      {/* Right Silk Drape */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 z-20 bg-gradient-to-l from-[#F8F2EB] via-[#F3E7DC] to-[#EAD8CA] border-l border-amber-200 shadow-2xl transition-all duration-[3200ms] ease-in-out ${
          isOpening ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{
          transitionDelay: isOpening ? '450ms' : '0ms',
          boxShadow: 'inset 20px 0 40px rgba(180, 140, 110, 0.25)',
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-2.5 flex flex-col justify-between py-2 items-center opacity-75">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-white to-amber-200 border border-amber-300 shadow-sm" />
          ))}
        </div>
      </div>

      {/* =========================================================================
          LAYER 2 (OUTER): SAGE OLIVE ANTIQUE DOORS
          ========================================================================= */}
      {/* Left Sage Door */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 z-30 bg-gradient-to-br from-[#454D38] via-[#3B432F] to-[#2B3221] border-r-2 border-gold/70 shadow-2xl transition-all duration-[3200ms] ease-in-out ${
          isOpening ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{
          boxShadow: 'inset -30px 0 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Top Auspicious Mango Leaves Thoranam Garland */}
        <TopLeavesGarland side="left" />

        {/* Side Floral Vines on Left Outer Edge (Desktop) */}
        <SideFloralVines position="left" isFixed={false} />

        {/* Soft Background Kolam */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <KolamPattern className="w-44 h-44 sm:w-72 sm:h-72" color="#FBE9B9" />
        </div>

        {/* Central Vertical Gold Zipper / Cord Bead Trim */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#FFF2A3] via-[#DFB142] to-[#B8860B] shadow-sm flex flex-col justify-between py-1 items-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1 h-1.5 rounded-full bg-amber-100/80 shadow-xs" />
          ))}
        </div>
      </div>

      {/* Right Sage Door */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 z-30 bg-gradient-to-bl from-[#454D38] via-[#3B432F] to-[#2B3221] border-l-2 border-gold/70 shadow-2xl transition-all duration-[3200ms] ease-in-out ${
          isOpening ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        style={{
          boxShadow: 'inset 30px 0 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Top Auspicious Mango Leaves Thoranam Garland */}
        <TopLeavesGarland side="right" />

        {/* Side Floral Vines on Right Outer Edge (Desktop) */}
        <SideFloralVines position="right" isFixed={false} />

        {/* Soft Background Kolam */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <KolamPattern className="w-44 h-44 sm:w-72 sm:h-72" color="#FBE9B9" />
        </div>

        {/* Central Vertical Gold Zipper / Cord Bead Trim */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#FFF2A3] via-[#DFB142] to-[#B8860B] shadow-sm flex flex-col justify-between py-1 items-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-1 h-1.5 rounded-full bg-amber-100/80 shadow-xs" />
          ))}
        </div>
      </div>

      {/* =========================================================================
          THE MIDDLE ORNATE ROYAL CARTOUCHE MEDALLION (WITH "SM")
          Centered directly on the vertical seam. Perfectly sized for all phones!
          ========================================================================= */}
      <div
        className={`relative z-40 flex flex-col items-center justify-center transition-all duration-[2600ms] px-2 ${
          isOpening ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Soft Golden Aura */}
        <div className="absolute w-44 h-52 sm:w-60 sm:h-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

        {/* Clickable Ornate Cartouche Medallion */}
        <button
          type="button"
          onClick={handleOpenClick}
          aria-label="Subash & Monika Wedding Seal - Tap to Open"
          className="group relative cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Royal Scalloped Cartouche Shape */}
          <div className="relative w-36 h-44 sm:w-48 sm:h-56 p-2 flex items-center justify-center">
            <svg
              viewBox="0 0 160 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full drop-shadow-xl"
            >
              <defs>
                <linearGradient id="cartoucheGoldMobile2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7D1" />
                  <stop offset="30%" stopColor="#ECC87A" />
                  <stop offset="70%" stopColor="#B8860B" />
                  <stop offset="100%" stopColor="#DFB142" />
                </linearGradient>

                <linearGradient id="innerParchmentMobile2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FBF7EE" />
                  <stop offset="50%" stopColor="#F3E7D5" />
                  <stop offset="100%" stopColor="#EADCCB" />
                </linearGradient>
              </defs>

              {/* Ornate Scalloped Outer Crest Frame */}
              <path
                d="M 80 8 
                   C 105 8, 125 15, 140 35 
                   C 155 55, 150 75, 155 100 
                   C 150 125, 155 145, 140 165 
                   C 125 185, 105 192, 80 192 
                   C 55 192, 35 185, 20 165 
                   C 5 145, 10 125, 5 100 
                   C 10 75, 5 55, 20 35 
                   C 35 15, 55 8, 80 8 Z"
                fill="url(#cartoucheGoldMobile2)"
                stroke="#8A5A0A"
                strokeWidth="1.5"
              />

              {/* Filigree Inner Scroll Curves */}
              <path
                d="M 80 16 
                   C 100 16, 118 22, 130 38 
                   C 142 54, 138 72, 142 100 
                   C 138 128, 142 146, 130 162 
                   C 118 178, 100 184, 80 184 
                   C 60 184, 42 178, 30 162 
                   C 18 146, 22 128, 18 100 
                   C 22 72, 18 54, 30 38 
                   C 42 22, 60 16, 80 16 Z"
                fill="url(#innerParchmentMobile2)"
                stroke="#B8860B"
                strokeWidth="1.2"
              />

              {/* Botanical Flourishes */}
              <g stroke="#9C6B17" strokeWidth="1" fill="none">
                <path d="M 80 30 Q 75 40 80 45 Q 85 40 80 30" fill="#9C6B17" />
                <path d="M 70 38 Q 78 40 80 45 Q 82 40 90 38" />
                <path d="M 80 170 Q 75 160 80 155 Q 85 160 80 170" fill="#9C6B17" />
                <path d="M 70 162 Q 78 160 80 155 Q 82 160 90 162" />
              </g>

              <circle cx="80" cy="50" r="1.5" fill="#8A5A0A" />
              <circle cx="80" cy="150" r="1.5" fill="#8A5A0A" />
            </svg>

            {/* Inner Content (KEEP ONLY INITIAL "SM") */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              {/* PROMINENT INITIALS "SM" */}
              <div className="font-display text-4xl sm:text-5xl font-medium sm:font-semibold tracking-[0.15em] text-[#4A321E] drop-shadow-sm select-none">
                SM
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
