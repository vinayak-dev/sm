import React, { useRef, useEffect, useState } from 'react';

/**
 * 100% Full-Width Wedding Video Reel (Lazy-loaded below the fold)
 * - Full-width edge-to-edge video presentation (respects owner decision)
 * - Autoplay/muted/loop with no controls or titles
 * - Subtle 10px edge feathering (no heavy gradient masks)
 * - Lazy-loads and plays only when scrolled into viewport (Task 10)
 */
export const WeddingVideo = ({ config }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const videoUrl = config?.video?.videoUrl || "/video/wedding_reel.mp4";
  const posterUrl = config?.video?.posterUrl || "/images/reel_poster.jpg";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const video = videoRef.current;
          if (video && video.paused) {
            video.muted = true;
            video.playsInline = true;
            video.play().catch(() => {});
          }
        } else {
          const video = videoRef.current;
          if (video && !video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.15, rootMargin: '100px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="video" className="relative w-full overflow-hidden py-4 sm:py-8 bg-[#FDFBF7]">
      {/* 100% Full-Width Video with Soft-Feathered Edges */}
      <div
        className="relative w-full aspect-[9/16] sm:aspect-[16/9] md:aspect-[21/9] sm:h-[80vh] overflow-hidden bg-black"
        style={{
          // Micro-feathering on the extreme edges (10px) so no harsh cut line is visible
          maskImage: 'linear-gradient(to bottom, transparent 0, black 10px, black calc(100% - 10px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, black 10px, black calc(100% - 10px), transparent 100%)',
        }}
      >
        <video
          ref={videoRef}
          src={isInView ? videoUrl : undefined}
          poster={posterUrl}
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
