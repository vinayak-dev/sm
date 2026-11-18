import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Reveal Animation Component
 * - Pure IntersectionObserver (zero external dependencies)
 * - Fade-up with configurable delay and direction
 * - Strictly respects prefers-reduced-motion
 */
export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "fade" | "none"
  duration = 800,
  threshold = 0.12,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold, once]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getTransform = () => {
    if (isVisible || direction === 'none' || direction === 'fade') return 'translateY(0)';
    if (direction === 'up') return 'translateY(28px)';
    if (direction === 'down') return 'translateY(-28px)';
    return 'translateY(0)';
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
