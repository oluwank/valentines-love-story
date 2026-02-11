import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Proposal: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'reveal' | 'accepted'>('idle');

  const handleReveal = () => {
    setStep('reveal');
  };

  const handleAccept = () => {
    setStep('accepted');
    
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5, x: 0.5 },
      colors: ['#ff4d6d', '#D4AF37', '#ffffff'],
      ticks: 300,
      gravity: 0.8,
      scalar: 1.2,
      shapes: ['circle']
    });

    const end = Date.now() + 6 * 1000;
    const colors = ['#ff4d6d', '#D4AF37', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="py-20 md:py-32 bg-[#1a0b0e] relative overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
      <AnimatePresence>
        {step !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: step === 'accepted' ? [0.4, 0.7, 0.4] : 0.2,
              scale: step === 'accepted' ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 pointer-events-none blur-[100px] ${
              step === 'accepted' 
                ? 'bg-gradient-to-tr from-[#ff4d6d]/40 via-[#D4AF37]/20 to-[#ff4d6d]/40' 
                : 'bg-[#ff4d6d]/10'
            }`}
          />
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <AnimatePresence mode="wait">
          {step === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-10 italic">A Special Question for My Queen...</h2>
              <motion.button
                onClick={handleReveal}
                whileHover={{ scale: 1.1, backgroundColor: '#ff4d6d', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 md:px-12 py-4 md:py-6 rounded-full text-xl md:text-2xl font-bold tracking-widest uppercase transition-all flex items-center gap-4 mx-auto"
              >
                Click If You Trust Me 👀
              </motion.button>
            </motion.div>
          )}

          {step === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mb-6 md:mb-10"
              >
                <Sparkles className="w-12 h-12 md:w-20 md:h-20 text-[#D4AF37] mx-auto" />
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 md:mb-12 drop-shadow-lg leading-tight">
                <span className="text-[#ff4d6d]">Amaka</span>,<br />
                Will You Marry Me?
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <motion.button
                  onClick={handleAccept}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 77, 109, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#ff4d6d] text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl text-2xl md:text-3xl font-bold"
                >
                  YES 💍
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 py-5 md:px-12 md:py-6 rounded-2xl text-2xl md:text-3xl font-bold"
                >
                  Of Course! 😍
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 'accepted' && (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-8 md:p-12 bg-white/10 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] border border-[#ff4d6d]/40 shadow-[0_0_80px_rgba(255,77,109,0.3)]"
            >
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <Heart className="w-24 h-24 text-[#ff4d6d] fill-current" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 md:w-24 md:h-24 text-[#ff4d6d] mx-auto mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(255,77,109,0.5)]" />
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-romantic text-white mb-4 md:mb-6 leading-tight">She Said Yes! ❤️</h2>
              <p className="text-lg md:text-2xl text-gray-200 font-light italic mb-6 md:mb-8">
                “My future just got a whole lot brighter because you're in it.”
              </p>
              
              <div className="flex justify-center gap-4 md:gap-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1],
                      rotate: [0, i % 2 === 0 ? 15 : -15, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className={`w-8 h-8 md:w-12 md:h-12 ${i === 1 ? 'text-[#D4AF37]' : 'text-[#ff4d6d]'} fill-current`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};