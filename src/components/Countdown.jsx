import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { getGoogleCalendarUrl } from '../utils/calendar';

/**
 * Animated Countdown Timer
 * - Stylish Cinzel & Playfair numerals with rhythmic glow & pulse animation
 * - Increased font size for mobile view
 * - Google Calendar one-click reminder (iOS .ics calendar removed per request)
 */
export const Countdown = ({ targetISO, postMessage = "Our Forever Begins." }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetISO || "2027-02-26T09:30:00+05:30").getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetISO]);

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl({
      title: "Subash & Monika's Sacred Wedding Ceremony",
      details: "Together with our families, we joyfully invite you to celebrate our sacred wedding union.",
      location: "SS Mani Mahal, Tiruppur",
      startUTC: "20270226T033000Z",
      endUTC: "20270226T160000Z",
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, isSeconds: false },
    { label: 'Hours', value: timeLeft.hours, isSeconds: false },
    { label: 'Minutes', value: timeLeft.minutes, isSeconds: false },
    { label: 'Seconds', value: timeLeft.seconds, isSeconds: true },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-8 sm:my-10 px-3 sm:px-4 text-center">
      {/* Header Eyebrow (Mobile-Friendly Increased Size) */}
      <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A684C] font-semibold mb-1">
        Auspicious Countdown
      </p>
      <p className="font-serif text-sm sm:text-base text-[#7A6150] mb-5">
        Friday, 26 February 2027 • 9:00 AM IST
      </p>

      {timeLeft.isCompleted ? (
        <div className="py-6 border-y border-gold/40">
          <p className="font-display text-2xl sm:text-3xl text-[#5A684C] font-medium tracking-wide">
            {postMessage}
          </p>
        </div>
      ) : (
        /* Animated Timer Container with Glowing Hairline Borders & Rhythmic Pulse */
        <div className="relative py-6 sm:py-8 px-2 sm:px-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gold/40 shadow-xs animate-timer-glow">
          <div className="grid grid-cols-4 divide-x divide-gold/30">
            {timeUnits.map((item, idx) => (
              <div key={idx} className="px-1 xs:px-2 sm:px-3">
                <span
                  className={`block font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal text-[#3A2A20] tracking-tight transition-transform duration-300 ${
                    item.isSeconds ? 'animate-timer-pulse text-[#454D38]' : ''
                  }`}
                >
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="block font-serif text-xs sm:text-sm uppercase tracking-[0.2em] text-[#5A684C] font-semibold mt-1 sm:mt-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Google Calendar Action Only (iOS .ics removed per request) */}
      <div className="flex items-center justify-center mt-6">
        <button
          type="button"
          onClick={handleGoogleCalendar}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif font-semibold text-[#454D38] bg-white border border-gold/50 shadow-xs hover:border-[#454D38] hover:bg-[#FAF6ED] active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 text-[#5A684C]" />
          <span>Add to Google Calendar</span>
        </button>
      </div>
    </div>
  );
};
