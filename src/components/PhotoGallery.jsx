import React, { useState, useEffect, useCallback } from 'react';
import { SectionHeading } from './common/SectionHeading';
import { Reveal } from './common/Reveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Editorial Masonry Wedding Photo Gallery
 * - Rounded borders on all photo cards (rounded-2xl/3xl with gold border)
 * - Increased font size in mobile view
 * - Fullscreen viewer modal with touch swipe & keyboard arrows
 */
export const PhotoGallery = ({ config }) => {
  const images = config.gallery?.items || config.gallery || [];
  const enableLightbox = config.gallery?.lightbox !== false;

  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const isOpen = activeIndex !== null;

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleClose, handleNext, handlePrev]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-24 w-full overflow-hidden bg-[#FDFBF7]">
      <Reveal direction="up">
        <SectionHeading
          eyebrow="MEMORIES IN TIME"
          title="Captured Moments"
          subtitle="Cherished glimpses of our journey leading into forever"
        />
      </Reveal>

      {/* GALLERY (FULL UN-CROPPED NATURAL IMAGE, CENTERED WITH ROUNDER BORDER RADIUS) */}
      <div className="relative mt-8 sm:mt-14 w-full max-w-4xl mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col gap-5 sm:gap-8 md:gap-10 items-center">
          {images.map((img, index) => (
            <Reveal
              key={img.id || index}
              direction="up"
              delay={index * 60}
              className="w-full flex justify-center"
            >
              {/* PHOTO CONTAINER (ROUNDER BORDER RADIUS, CENTERED, NOT CROPPED) */}
              <div
                onClick={() => enableLightbox && setActiveIndex(index)}
                className={`relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 group bg-neutral-900 ${
                  enableLightbox ? 'cursor-pointer' : ''
                }`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.alt || "Subash & Monika Wedding Moment"}
                  width={img.width || 1400}
                  height={img.height || 933}
                  className="w-full h-auto block object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL WITH SWIPE & KEYBOARD ARROWS */}
      {isOpen && enableLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between text-white z-50">
            <span className="font-serif text-sm uppercase tracking-widest text-amber-200/90 font-semibold">
              {activeIndex + 1} / {images.length}
            </span>

            <button
              type="button"
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all text-white border border-white/20"
              aria-label="Close photo viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button (Desktop) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all text-white border border-white/20 z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button (Desktop) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 transition-all text-white border border-white/20 z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].imageUrl}
              alt={images[activeIndex].alt || "Subash & Monika"}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
            />
          </div>

          {/* Mobile Bottom Navigation Hint */}
          <div className="sm:hidden absolute bottom-5 inset-x-0 text-center text-white/60 text-xs font-serif tracking-widest uppercase pointer-events-none">
            Swipe left or right
          </div>
        </div>
      )}
    </section>
  );
};
