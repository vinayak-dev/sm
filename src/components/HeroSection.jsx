import React, { useEffect, useRef } from 'react';
import { Countdown } from './Countdown';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

/**
 * Cinematic Hero Section
 * - Leads with full-bleed couple VIDEO reel at the top
 * - Soft bottom ivory-to-transparent gradient dissolution
 * - "We're getting married" tag
 * - Restored classic Playfair Display & Great Vibes typography
 * - Clean mobile-first layout
 * - Single semantic <h1> tag
 */
export const HeroSection = ({ config, onNavigate }) => {
  const videoRef = useRef(null);

  const videoUrl = config?.video?.videoUrl || "/video/wedding_reel.mp4";
  const posterUrl = config?.video?.posterUrl || "/images/reel_poster.jpg";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <header className="relative w-full overflow-hidden bg-[#FDFBF7]">
      {/* =========================================================================
          1. FULL-BLEED COUPLE VIDEO REEL AT THE TOP
          ========================================================================= */}
      <div className="relative w-full h-[70vh] xs:h-[75vh] sm:h-[82vh] md:h-[90vh] overflow-hidden select-none bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover object-center"
        />

        {/* Soft Vignette Gradients */}
        {/* Top subtle shade for header contrast */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />

        {/* Bottom smooth dissolution into site ivory background */}
        <div className="absolute bottom-0 inset-x-0 h-48 sm:h-72 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          2. ELEGANT NAMES & ANNOUNCEMENT (OVERLAPPING BOTTOM OF VIDEO)
          ========================================================================= */}
      <div className="relative -mt-24 sm:-mt-36 max-w-4xl mx-auto px-4 sm:px-6 text-center z-20">
        {/* Ceremonial Tagline: "We're getting married" */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gold/50 shadow-xs mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
          <span className="font-serif text-xs xs:text-sm uppercase tracking-[0.22em] font-bold text-[#5A684C]">
            We're getting married
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
        </div>

        {/* EXACTLY ONE SINGLE SEMANTIC <H1> FOR COUPLE NAMES (RESTORED PLAYFAIR & GREAT VIBES) */}
        <h1 className="font-display font-medium text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-[#3A2A20] tracking-[0.03em] leading-[1.1] drop-shadow-xs">
          <span className="block sm:inline">{config.couple.groom}</span>
          <span className="inline-block font-script font-normal text-4xl xs:text-5xl sm:text-6xl text-[#B8860B] mx-3 sm:mx-5 my-1">
            &
          </span>
          <span className="block sm:inline">{config.couple.bride}</span>
        </h1>

        {/* Auspicious Date Banner (Larger on Mobile) */}
        <p className="font-serif text-sm xs:text-base sm:text-lg font-bold tracking-[0.25em] uppercase text-[#5A684C] mt-3 sm:mt-5">
          {config.couple.dayFormatted || "Friday"}, {config.couple.dateFormatted}
        </p>

        {/* Core Invitation Statement (Larger on Mobile) */}
        <div className="max-w-xl mx-auto mt-4 px-2">
          <p className="font-serif text-base xs:text-lg sm:text-xl text-[#5C4537] italic leading-relaxed">
            "{config.couple.heroInvitation}"
          </p>
        </div>

        {/* Animated Countdown Component */}
        <Countdown
          targetISO={config.weddingDateISO}
          postMessage={config.postWeddingMessage}
        />

        {/* Quick Navigation Action Pills (Mobile-First Larger Sizing) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2 pb-8">
          <button
            type="button"
            onClick={() => onNavigate('events')}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif font-semibold text-[#454D38] bg-white border border-[#454D38]/35 shadow-xs hover:bg-[#FAF5EE] active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-[#5A684C]" />
            <span>Ceremony Program</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('location')}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif font-semibold text-[#454D38] bg-white border border-[#454D38]/35 shadow-xs hover:bg-[#FAF5EE] active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4 text-[#5A684C]" />
            <span>Venue & Directions</span>
          </button>
        </div>
      </div>
    </header>
  );
};
