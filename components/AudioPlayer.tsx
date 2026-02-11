import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * ---------------------------------------------------------
 * AUDIO CONFIGURATION
 * ---------------------------------------------------------
 * 1. WHERE TO PUT THE SONG:
 *    - Create a folder named 'audio' (next to index.html).
 *    - Put your song (e.g., 'our-song.mp3') inside it.
 * ---------------------------------------------------------
 */

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  const FADE_DURATION = 2000; 
  const INTERVAL_TIME = 50;
  const VOLUME_STEP = INTERVAL_TIME / FADE_DURATION;

  const clearFade = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const fadeIn = (audio: HTMLAudioElement) => {
    clearFade();
    audio.volume = 0;
    audio.play().catch(e => console.warn("Audio blocked by browser.", e));
    
    fadeIntervalRef.current = window.setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume += VOLUME_STEP;
      } else {
        audio.volume = 1;
        clearFade();
      }
    }, INTERVAL_TIME);
  };

  const fadeOut = (audio: HTMLAudioElement) => {
    clearFade();
    fadeIntervalRef.current = window.setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= VOLUME_STEP;
      } else {
        audio.volume = 0;
        audio.pause();
        clearFade();
      }
    }, INTERVAL_TIME);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        fadeOut(audioRef.current);
      } else {
        fadeIn(audioRef.current);
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    (window as any).playBackgroundMusic = () => {
      if (audioRef.current && !isPlaying) {
        fadeIn(audioRef.current);
        setIsPlaying(true);
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100]">
      <audio 
        id="bgMusic" 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source src="audio/our-song.mp3.mp3" type="audio/mpeg" />
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isPlaying ? {
          boxShadow: [
            "0 0 10px rgba(255, 77, 109, 0.4)",
            "0 0 30px rgba(255, 77, 109, 0.7)",
            "0 0 10px rgba(255, 77, 109, 0.4)"
          ],
        } : {}}
        transition={isPlaying ? { duration: 2, repeat: Infinity } : {}}
        onClick={togglePlay}
        className={`flex items-center gap-2 md:gap-3 px-5 py-3 md:px-8 md:py-5 rounded-full shadow-2xl border border-[#ff4d6d]/20 transition-all duration-500 ${
          isPlaying ? 'bg-[#ff4d6d] text-white' : 'bg-white/90 backdrop-blur-md text-[#ff4d6d]'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <span className="font-bold text-xs md:text-sm tracking-widest uppercase">⏸ Pause</span>
          </>
        ) : (
          <>
            <Music className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold text-xs md:text-sm tracking-widest uppercase">🎵 Play Song</span>
          </>
        )}
      </motion.button>
      
      <p className="hidden md:block text-[10px] text-gray-400 mt-2 text-right uppercase tracking-[0.2em] opacity-50">
        Premium Sound System
      </p>
    </div>
  );
};