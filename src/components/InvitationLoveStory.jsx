import React from 'react';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';

/**
 * Traditional Formal Auspicious Wedding Invitation Card
 * - Soft sage tint background to create visual rhythm
 * - Thin gold hairline border and subtle parchment card
 * - Increased mobile font size for comfortable reading
 * - Config-driven Blessings section (rendered only if config.showParents === true)
 */
export const InvitationLoveStory = ({ config }) => {
  const showParents = config?.showParents === true;

  return (
    <section id="invitation-story" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#F8FAF5] border-y border-gold/20 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="INVITATION"
            title="Auspicious Invitation"
            subtitle="Under the grace of the Almighty and the warmth of family"
          />
        </Reveal>

        <Reveal direction="up" delay={150}>
          {/* Formal Invitation Parchment Card */}
          <div className="mt-8 sm:mt-12 relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 xs:p-8 sm:p-12 border border-gold/40 shadow-sm text-center">
            {/* Subtle Corner Accents */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-gold/70" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-gold/70" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b border-l border-gold/70" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-gold/70" />

            <blockquote className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl text-[#3A2A20] leading-relaxed italic px-2 sm:px-6 font-normal">
              "{config.couple.formalInvitation}"
            </blockquote>

            {/* Optional Blessings Section (Rendered only when config.showParents === true) */}
            {showParents && (
              <div className="mt-8 pt-6 border-t border-gold/25 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-gold/30">
                  <p className="font-serif text-xs uppercase tracking-[0.2em] text-[#5A684C] font-semibold">
                    Groom's Parents
                  </p>
                  <p className="font-display text-lg sm:text-xl font-medium text-[#3A2A20] mt-1">
                    {config.couple.groomParents}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-gold/30">
                  <p className="font-serif text-xs uppercase tracking-[0.2em] text-[#5A684C] font-semibold">
                    Bride's Parents
                  </p>
                  <p className="font-display text-lg sm:text-xl font-medium text-[#3A2A20] mt-1">
                    {config.couple.brideParents}
                  </p>
                </div>
              </div>
            )}

            {/* Auspicious Shubh Vivah Tag */}
            <div className="mt-8 inline-flex items-center gap-2">
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8A6820] font-semibold">
                Shubh Vivah
              </span>
              <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-gold to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
