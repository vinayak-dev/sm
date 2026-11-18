import React from 'react';
import { KuthuVilakku } from './decorations/KuthuVilakku';
import { Heart, ArrowUp, Share2 } from 'lucide-react';
import { Reveal } from './common/Reveal';

/**
 * Emotional Closing Footer Section
 * - High-end Deep-Sage & Gold aesthetic
 * - Refined Playfair font-medium (no heavy font-black)
 * - Share Invitation & Back to Top actions
 */
export const Footer = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareData = {
      title: `${config.couple.groom} & ${config.couple.bride}'s Wedding Invitation`,
      text: `Together with our families, we joyfully invite you to celebrate our wedding on ${config.couple.dateFormatted}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Ignored
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Wedding invitation link copied to clipboard!");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#2E3624] via-[#242B1D] to-[#171D12] text-white pt-16 sm:pt-24 pb-28 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Gold Hairline Top Edge */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <Reveal direction="up">
          {/* Flanking Kuthu Vilakku Brass Lamps & Center Names */}
          <div className="flex items-center justify-center gap-4 sm:gap-10 mb-6">
            <div className="hidden xs:block shrink-0 opacity-75">
              <KuthuVilakku className="w-8 sm:w-10 h-24 sm:h-32" />
            </div>

            <div className="px-2">
              <p className="font-script text-2xl xs:text-3xl sm:text-4xl text-amber-200/90 tracking-wide mb-1">
                We can't wait to celebrate with you
              </p>

              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-wide text-white">
                {config.couple.groom} & {config.couple.bride}
              </h2>

              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="h-[1px] w-8 sm:w-12 bg-amber-200/40" />
                <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300/30" />
                <span className="h-[1px] w-8 sm:w-12 bg-amber-200/40" />
              </div>
            </div>

            <div className="hidden xs:block shrink-0 opacity-75">
              <KuthuVilakku className="w-8 sm:w-10 h-24 sm:h-32" />
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={120}>
          {/* Closing Message */}
          <div className="max-w-xl mx-auto my-5 px-2">
            <blockquote className="font-serif text-base sm:text-xl text-amber-100/90 italic leading-relaxed">
              "{config.couple.footerMessage}"
            </blockquote>
            <p className="text-[11px] sm:text-xs text-amber-300/70 font-serif mt-2 tracking-[0.25em] uppercase">
              #SubashWedsMonika • 2027
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={handleShare}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-serif font-semibold text-[#242B1D] bg-[#E8CA8B] hover:bg-[#F3DEB0] active:scale-95 transition-all shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5 fill-current" />
              <span>Share Invitation</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-serif font-medium text-amber-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </Reveal>

        {/* Auspicious Shloka */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 text-center">
          <p className="font-serif text-xs sm:text-sm text-amber-100/60 tracking-wider">
            Lokah Samastah Sukhino Bhavantu • May All Be Blessed
          </p>
          <p className="font-serif text-[10px] sm:text-xs text-white/40 mt-1">
            Friday, 26 February 2027 • Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
};
