import React, { useEffect, useRef, useState } from 'react';

/**
 * Traditional Indian Wedding Fireworks & Crackers (Diwali / Kalyana Vedivedi) Canvas
 * Creates dynamic celebratory firework bursts, sparkler trails, and golden flowerpot fountains
 * when the invitation opens and in the background.
 */
export const WeddingCrackers = ({ isActive, triggerBurstCount = 5 }) => {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      '#FFD700', // Gold
      '#FFA500', // Orange
      '#FF4500', // Red-Orange
      '#FF1493', // Deep Pink
      '#E6C787', // Champagne Gold
      '#FFFAFA', // Sparkling White
      '#00FF7F', // Spring Green
    ];

    class Spark {
      constructor(x, y, color, isHeavy = false) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (isHeavy ? 7 : 5) + (isHeavy ? 2 : 1);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.gravity = 0.08;
        this.size = Math.random() * 2.5 + 1.5;
        this.flicker = Math.random() > 0.5;
      }

      update() {
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    class Rocket {
      constructor(targetX, targetY) {
        this.x = targetX || Math.random() * (width * 0.8) + width * 0.1;
        this.y = height;
        this.targetY = targetY || Math.random() * (height * 0.5) + height * 0.1;
        this.speed = Math.random() * 5 + 11;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.exploded = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.exploded = true;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF8DC';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFD700';
        ctx.fill();

        // Spark trail behind rocket
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + (Math.random() - 0.5) * 4, this.y + 16);
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    }

    let rockets = [];
    let sparks = [];

    const createExplosion = (x, y) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const sparkCount = Math.floor(Math.random() * 35) + 40;
      for (let i = 0; i < sparkCount; i++) {
        sparks.push(new Spark(x, y, color, true));
      }
      // Add sparkling white glitter center
      for (let j = 0; j < 15; j++) {
        sparks.push(new Spark(x, y, '#FFFFFF', false));
      }
    };

    // Initial festive burst barrage
    for (let k = 0; k < triggerBurstCount; k++) {
      setTimeout(() => {
        rockets.push(new Rocket());
      }, k * 280);
    }

    // Occasional subtle festive sky crackers in the background
    let lastAutoRocket = Date.now();

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn background crackers
      if (isActive && Date.now() - lastAutoRocket > 3500) {
        lastAutoRocket = Date.now();
        if (Math.random() > 0.3) {
          rockets.push(new Rocket());
        }
      }

      // Update rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.update();
        r.draw();
        if (r.exploded) {
          createExplosion(r.x, r.y);
          rockets.splice(i, 1);
        }
      }

      // Update sparks
      for (let j = sparks.length - 1; j >= 0; j--) {
        const s = sparks[j];
        s.update();
        s.draw();
        if (s.alpha <= 0) {
          sparks.splice(j, 1);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, triggerBurstCount, enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30"
    />
  );
};
