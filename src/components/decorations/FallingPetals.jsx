import React, { useEffect, useRef, useState } from 'react';

/**
 * Romantic Falling Rose Petals Shower
 * - Authentic, organic South Indian wedding rose petals
 * - 3D fluttering, tumbling, and swaying in the breeze
 * - Rich rose palette: royal ruby, crimson velvet, coral & soft blush
 * - Lightweight 60 FPS HTML5 Canvas with prefers-reduced-motion support
 */
export const FallingPetals = () => {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas || !isEnabled) return;

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

    // Rose Petal Count: responsive and smooth 60fps
    const particleCount = window.innerWidth < 768 ? 20 : 32;

    const roseColors = [
      { base: '#C41E3A', light: '#E03B52', dark: '#910D23' }, // Velvet Red Rose
      { base: '#B31B34', light: '#D92D48', dark: '#7E0B1F' }, // Royal Crimson Rose
      { base: '#D93856', light: '#F05874', dark: '#A31933' }, // Coral Rose
      { base: '#E25B75', light: '#F7849B', dark: '#B52D48' }, // Blush Rose
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 7 + 8; // Size: 8px to 15px
        this.speedY = Math.random() * 0.7 + 0.55;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.2;
        this.sway = Math.random() * 2 * Math.PI;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.flip = Math.random() * 2 * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.015;
        this.opacity = Math.random() * 0.25 + 0.65;

        // 85% authentic rose petals, 15% delicate jasmine/gold accents
        const rand = Math.random();
        if (rand < 0.85) {
          this.type = 'rose';
          this.colorScheme = roseColors[Math.floor(Math.random() * roseColors.length)];
        } else if (rand < 0.95) {
          this.type = 'jasmine';
          this.size = Math.random() * 3 + 4;
        } else {
          this.type = 'gold';
          this.size = Math.random() * 2 + 1.5;
        }
      }

      update() {
        this.sway += this.swaySpeed;
        this.flip += this.flipSpeed;
        this.y += this.speedY;
        this.x += Math.sin(this.sway) * 0.75 + this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        // 3D flip effect around horizontal axis
        const flipScale = Math.cos(this.flip);
        ctx.scale(flipScale, 1);
        ctx.globalAlpha = this.opacity;

        if (this.type === 'rose') {
          // Organic curved rose petal shape
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.bezierCurveTo(
            this.size * 0.85, -this.size * 0.7,
            this.size * 0.95, this.size * 0.55,
            0, this.size
          );
          ctx.bezierCurveTo(
            -this.size * 0.95, this.size * 0.55,
            -this.size * 0.85, -this.size * 0.7,
            0, -this.size
          );
          
          // Realistic petal gradient
          const grad = ctx.createLinearGradient(0, -this.size, 0, this.size);
          grad.addColorStop(0, this.colorScheme.light);
          grad.addColorStop(0.55, this.colorScheme.base);
          grad.addColorStop(1, this.colorScheme.dark);
          ctx.fillStyle = grad;
          ctx.fill();

          // Delicate vein highlight
          ctx.beginPath();
          ctx.moveTo(0, -this.size * 0.75);
          ctx.lineTo(0, this.size * 0.75);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
          ctx.lineWidth = 0.6;
          ctx.stroke();

        } else if (this.type === 'jasmine') {
          // South Indian fragrant Malli (jasmine) petal
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 0.55, this.size * 0.9, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFDF5';
          ctx.strokeStyle = '#E8E2CF';
          ctx.lineWidth = 0.5;
          ctx.fill();
          ctx.stroke();

        } else {
          // Golden festive sparkle
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = '#ECC87A';
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const petals = Array.from({ length: particleCount }, () => new Petal());

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20"
    />
  );
};
