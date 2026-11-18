import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

/**
 * Clean Floating Music Player
 * - Only Play / Pause button
 * - Starts playback when invitation is opened
 * - Continuous playback across scrolling
 * - Web Audio API synthesizer fallback
 */
export const MusicPlayer = ({ isTriggered, config }) => {
  const audioRef = useRef(null);
  const synthAudioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  // Web Audio Synth Fallback (Melodic Carnatic Kalyana Vaibhogame tune)
  const initWebAudioSynth = () => {
    if (synthAudioRef.current) return synthAudioRef.current;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      const ctx = new AudioContext();
      
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66];
      let noteIndex = 0;
      let intervalId = null;
      let isSynthPlaying = false;

      const playNote = () => {
        if (!isSynthPlaying || ctx.state === 'suspended') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.42);

        noteIndex++;
      };

      synthAudioRef.current = {
        ctx,
        start: () => {
          if (ctx.state === 'suspended') ctx.resume();
          isSynthPlaying = true;
          if (!intervalId) {
            intervalId = setInterval(playNote, 420);
          }
        },
        stop: () => {
          isSynthPlaying = false;
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      };
      return synthAudioRef.current;
    } catch {
      return null;
    }
  };

  // Start playback when invitation is opened
  useEffect(() => {
    if (isTriggered && !hasStartedOnce) {
      setHasStartedOnce(true);
      playAudio();
    }
  }, [isTriggered]);

  // Pause background music when video plays
  useEffect(() => {
    const handleVideoPlay = () => {
      pauseAudio();
    };
    window.addEventListener('wedding-video-play', handleVideoPlay);
    return () => {
      window.removeEventListener('wedding-video-play', handleVideoPlay);
    };
  }, []);

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          const synth = initWebAudioSynth();
          if (synth) {
            synth.start();
            setIsPlaying(true);
          }
        });
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    if (synthAudioRef.current) {
      synthAudioRef.current.stop();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <>
      {/* Hidden Native Audio Element (Continuous Looping) */}
      <audio
        ref={audioRef}
        src={config?.music?.audioUrl}
        loop
        preload="auto"
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          }
        }}
        onError={() => {
          if (audioRef.current && config?.music?.fallbackAudioUrl) {
            audioRef.current.src = config.music.fallbackAudioUrl;
            audioRef.current.load();
            audioRef.current.play().catch(() => {});
          }
        }}
      />

      {/* Minimal Floating Play / Pause Button */}
      <aside
        aria-label="Wedding Music Control"
        className="fixed top-4 right-4 z-40 select-none"
      >
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white/90 hover:bg-black/65 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-90"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
          )}
        </button>
      </aside>
    </>
  );
};
