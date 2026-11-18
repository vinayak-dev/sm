/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EA',
          200: '#F4ECE0',
          300: '#EBDDC8',
        },
        ivory: {
          DEFAULT: '#FFFFF2',
          warm: '#FDFBF7',
          tint: '#FAF7F0',
        },
        wood: {
          DEFAULT: '#3A2A20',
          dark: '#2B1B15',
          light: '#5C4537',
        },
        gold: {
          light: '#FDEBB8',
          champagne: '#E8CA8B',
          DEFAULT: '#D4AF37',
          deep: '#B8860B',
          antique: '#996515',
          bronze: '#85581A',
          hairline: 'rgba(212, 175, 55, 0.28)',
          subtle: 'rgba(212, 175, 55, 0.15)',
        },
        maroon: {
          light: '#8E2536',
          DEFAULT: '#6B1624',
          deep: '#480B16',
          royal: '#58101D',
        },
        rosepink: {
          light: '#FDECEF',
          DEFAULT: '#E8A3B1',
          rich: '#C46279',
        },
        sage: {
          tint: '#F4F6F0',
          light: '#EAF0E8',
          DEFAULT: '#9FB89A',
          dark: '#5A684C',
          deep: '#3B432F',
          forest: '#272E20',
          night: '#1C2117',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.25em',
        'ultra-wide': '0.35em',
      },
      animation: {
        'ken-burns': 'kenBurns 24s ease-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'timer-pulse': 'timerPulse 2s ease-in-out infinite',
        'timer-glow': 'timerGlow 3s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(212, 175, 55, 0.7))' },
        },
        timerPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        timerGlow: {
          '0%, 100%': {
            borderColor: 'rgba(212, 175, 55, 0.25)',
            boxShadow: '0 0 0 rgba(212, 175, 55, 0)'
          },
          '50%': {
            borderColor: 'rgba(212, 175, 55, 0.65)',
            boxShadow: '0 0 16px rgba(212, 175, 55, 0.2)'
          },
        }
      }
    },
  },
  plugins: [],
}
