import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FloatingHearts } from './FloatingHearts';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const phrases = ["My Queen.", "My Peace.", "My Forever."];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    if (charIdx < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentPhrase[charIdx]);
        setCharIdx(charIdx + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIdx(0);
        setDisplayText('');
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, phraseIdx]);

  const handleEnterStory = () => {
    if ((window as any).playBackgroundMusic) {
      (window as any).playBackgroundMusic();
    }
    const nextSection = document.getElementById('love-letter');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b0e] via-[#4a1c24] to-[#1a0b0e]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            initial={{ opacity: 0, y: Math.random() * 100 + "%", x: Math.random() * 100 + "%" }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: ["-10%", "110%"],
              transition: { duration: 5 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }
            }}
          />
        ))}
      </div>

      <FloatingHearts count={15} />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center px-6 w-full max-w-5xl"
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center mb-4"
        >
          <Sparkles className="text-[#D4AF37] w-6 h-6 md:w-8 md:h-8" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight"
        >
          Happy Valentine’s Day, <br className="sm:hidden" /><span className="text-[#ff4d6d]">Amaka</span> ❤️
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-2 md:mb-4 font-light italic"
        >
          “In a world of billions, God gave me you.”
        </motion.p>

        <div className="h-8 md:h-12 text-xl md:text-3xl lg:text-4xl text-[#D4AF37] font-romantic font-bold">
          {displayText}<span className="animate-pulse">|</span>
        </div>

        <motion.button
          onClick={handleEnterStory}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 md:mt-12 bg-white text-[#1a0b0e] px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all flex items-center gap-3 mx-auto gold-glow"
        >
          Enter Our Love Story
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
        </motion.button>
      </motion.div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 opacity-30 text-white w-full text-center px-4">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] font-light">Elegance • Passion • Forever</p>
      </div>
    </section>
  );
};