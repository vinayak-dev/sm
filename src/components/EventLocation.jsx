import React, { useState } from 'react';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';
import { MapPin, Navigation, Copy, Check, Share2, Phone, Calendar } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendar';

/**
 * Simplified, High-End Venue Location Component
 * - Focused on venue details, directions, and Google Calendar
 * - Lazy-loaded Google Maps iframe
 * - Increased font size in mobile view
 */
export const EventLocation = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const location = config.location;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${location.venueName}, ${location.venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleShareVenueWhatsApp = () => {
    const text = encodeURIComponent(
      `📍 *Subash & Monika Wedding Venue*\n\n🏛️ *Venue:* ${location.venueName}\n📮 *Address:* ${location.venueAddress}\n🗺️ *Directions:* ${location.directionsUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl({
      title: "Subash & Monika's Sacred Wedding Ceremony",
      details: "Together with our families, we joyfully invite you to celebrate our sacred wedding union.",
      location: `${location.venueName}, ${location.venueAddress}`,
      startUTC: "20270226T033000Z",
      endUTC: "20270226T160000Z",
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="LOCATION & DIRECTIONS"
            title="The Wedding Venue"
            subtitle="We look forward to welcoming you at our celebration"
          />
        </Reveal>

        {/* UNIFIED STREAMLINED VENUE CARD */}
        <Reveal direction="up" delay={120}>
          <div className="mt-10 sm:mt-14 relative bg-white rounded-3xl p-6 xs:p-8 sm:p-10 border border-gold/40 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gold/20">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A684C]/10 text-[#454D38] text-xs font-serif font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#5A684C]" />
                  <span>Main Venue</span>
                </div>
                <h3 className="font-display text-2xl xs:text-3xl sm:text-4xl font-medium text-[#3A2A20]">
                  {location.venueName}
                </h3>
                <p className="font-serif text-base xs:text-lg sm:text-xl text-[#6A574A] max-w-lg leading-relaxed">
                  {location.venueAddress}
                </p>
                {location.phone && (
                  <p className="font-serif text-sm sm:text-base text-[#7A6658] flex items-center gap-2 pt-1 font-medium">
                    <Phone className="w-4 h-4 text-[#5A684C]" />
                    <span>Phone: {location.phone}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons Row (Larger Sizing on Mobile) */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs xs:text-sm font-serif font-semibold text-white bg-[#454D38] hover:bg-[#343B2A] shadow-xs active:scale-95 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-white" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs xs:text-sm font-serif font-semibold text-[#454D38] bg-[#F8FAF5] hover:bg-[#EFF3EB] border border-gold/40 shadow-xs active:scale-95 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Address'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareVenueWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs xs:text-sm font-serif font-semibold text-[#454D38] bg-[#F8FAF5] hover:bg-[#EFF3EB] border border-gold/40 shadow-xs active:scale-95 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Quick Calendar Reminder */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs xs:text-sm font-serif text-[#6A574A]">
              <span>Save the date to your personal calendar:</span>
              <button
                type="button"
                onClick={handleGoogleCalendar}
                className="inline-flex items-center gap-1.5 text-[#5A684C] hover:text-[#3B432F] font-semibold underline decoration-gold/60 underline-offset-4"
              >
                <Calendar className="w-4 h-4" />
                <span>Add to Google Calendar</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* GOOGLE MAPS PREVIEW (LAZY-LOADED) */}
        <Reveal direction="up" delay={200}>
          <div className="mt-8 rounded-3xl overflow-hidden border border-gold/40 shadow-xs bg-[#F4ECE1]">
            <iframe
              title="Wedding Venue Google Maps Location"
              src={location.embedMapUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[360px] grayscale-[15%] contrast-[105%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
