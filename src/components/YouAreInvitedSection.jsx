import React from 'react';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';
import { Calendar, MapPin } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendar';

/**
 * Dedicated "You're Invited" Section
 * - Warm, heartfelt invitation statement to all guests
 * - Celebratory highlights with stylish typography
 * - Direct one-click calendar reminder & venue directions
 */
export const YouAreInvitedSection = ({ config }) => {
  const data = config?.invitedSection || {
    eyebrow: "CORDIALLY INVITED",
    title: "You're Invited!",
    subtitle: "With joyful hearts, we request the honor of your gracious presence",
    message: "Together with our families, we warmly invite you to join us in celebrating our wedding. Your blessings, laughter, and presence will make our union truly auspicious and memorable.",
    dateHighlight: "Friday, 26 February 2027",
    venueHighlight: "SS Mani Mahal, Tiruppur",
  };

  const handleCalendar = () => {
    const url = getGoogleCalendarUrl({
      title: "Subash & Monika's Sacred Wedding Ceremony",
      details: "Together with our families, we warmly invite you to celebrate our sacred wedding union.",
      location: config.location?.venueName || "SS Mani Mahal, Tiruppur",
      startUTC: "20270226T033000Z",
      endUTC: "20270226T160000Z",
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="invited" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F0] border-t border-gold/25 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Reveal>

        <Reveal direction="up" delay={120}>
          <div className="mt-8 sm:mt-12 relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 xs:p-8 sm:p-12 border border-gold/40 shadow-sm text-center">
            {/* Soft decorative corner marks */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/50 rounded-tl-sm" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/50 rounded-tr-sm" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/50 rounded-bl-sm" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/50 rounded-br-sm" />

            <p className="font-serif text-base xs:text-lg sm:text-2xl text-[#3A2A20] leading-relaxed italic max-w-xl mx-auto font-normal pt-2">
              "{data.message}"
            </p>

            {/* Date & Location Highlight Badge (Increased Mobile Font Size) */}
            <div className="mt-8 py-3.5 px-4 xs:px-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 rounded-2xl bg-[#F8FAF5] border border-gold/40">
              <div className="flex items-center gap-2 text-xs xs:text-sm sm:text-base font-serif font-bold text-[#454D38]">
                <Calendar className="w-4 h-4 text-[#5A684C]" />
                <span>{data.dateHighlight}</span>
              </div>
              <span className="hidden sm:inline text-gold/60">•</span>
              <div className="flex items-center gap-2 text-xs xs:text-sm sm:text-base font-serif font-bold text-[#454D38]">
                <MapPin className="w-4 h-4 text-[#5A684C]" />
                <span>{data.venueHighlight}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleCalendar}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs xs:text-sm font-serif font-semibold text-white bg-[#454D38] hover:bg-[#343B2A] shadow-xs active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Save to Google Calendar</span>
              </button>

              <a
                href={config.location?.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs xs:text-sm font-serif font-semibold text-[#454D38] bg-white border border-gold/45 hover:bg-[#FAF6ED] shadow-xs active:scale-95 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#5A684C]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
