import React from 'react';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';
import { Sparkles, Heart, Utensils, Clock, MapPin } from 'lucide-react';

/**
 * Grand Vertical Ceremony Timeline Section
 * - Styled as the Deep-Sage section providing dramatic visual rhythm
 * - Driven entirely from config.events
 * - Vertical gold line with staggered node reveals
 * - Clear ceremonial details: time, date, attire, and auspicious notes
 */
export const CeremonyTimeline = ({ config }) => {
  const events = config.events || [];

  const getEventIcon = (iconName) => {
    switch (iconName) {
      case 'knot':
        return <Heart className="w-4 h-4 text-amber-200 fill-amber-200/20" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-amber-200" />;
      case 'party':
      default:
        return <Sparkles className="w-4 h-4 text-amber-200" />;
    }
  };

  return (
    <section id="program" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#2F3725] via-[#252C1E] to-[#1C2216] text-[#FAF7F0] overflow-hidden">
      {/* Top Gold Hairline Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="CEREMONY PROGRAM"
            title="Ceremony Program"
            subtitle="Join us for each auspicious moment as we celebrate our new beginning"
            theme="dark"
          />
        </Reveal>

        {/* VERTICAL TIMELINE */}
        <div className="relative mt-12 sm:mt-18 max-w-2xl mx-auto">
          {/* Continuous Vertical Gold Line */}
          <div className="absolute left-5 sm:left-1/2 top-4 bottom-8 w-[1px] bg-gradient-to-b from-amber-300/50 via-amber-300/30 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id || index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#272F20] border border-amber-300/60 shadow-[0_0_12px_rgba(212,175,55,0.25)] z-10">
                    {getEventIcon(event.icon)}
                  </div>

                  {/* Event Content Card */}
                  <div
                    className={`ml-14 sm:ml-0 w-[calc(100%-3.5rem)] sm:w-[44%] ${
                      isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                    }`}
                  >
                    <Reveal direction="up" delay={index * 120}>
                      <div
                        className={`p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-amber-300/25 shadow-lg transition-all hover:border-amber-300/50 ${
                          event.highlight ? 'ring-1 ring-amber-300/40 bg-white/[0.08]' : ''
                        }`}
                      >
                        {/* Eyebrow & Badge */}
                        <div
                          className={`flex flex-wrap items-center gap-2 mb-2 ${
                            isEven ? 'sm:justify-end' : 'sm:justify-start'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.2em] px-3 py-0.5 rounded-full bg-amber-400/15 text-amber-200 border border-amber-300/35 font-semibold">
                            {event.badge || event.eyebrow}
                          </span>
                        </div>

                        {/* Title (Playfair Display) */}
                        <h3 className="font-display text-xl sm:text-2xl font-medium text-white tracking-wide">
                          {event.title}
                        </h3>

                        {/* Date & Time (Increased Mobile Size) */}
                        <div
                          className={`flex items-center gap-2 mt-2 text-sm sm:text-base font-serif text-amber-100/95 ${
                            isEven ? 'sm:justify-end' : 'sm:justify-start'
                          }`}
                        >
                          <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                          <span>{event.time}</span>
                          <span>•</span>
                          <span className="font-medium text-white">{event.date}</span>
                        </div>

                        {/* Auspicious Time / Subtitle */}
                        {event.auspiciousTime && (
                          <p className="font-serif text-xs sm:text-sm text-amber-200/90 italic mt-2">
                            {event.auspiciousTime}
                          </p>
                        )}
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Gold Hairline Divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
    </section>
  );
};
