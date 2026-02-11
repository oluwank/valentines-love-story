
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Surprise: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  const handleReveal = () => {
    setShowSecret(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
    });
  };

  return (
    <section className="py-32 bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {!showSecret ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#ff4d6d] mb-8 italic">Wait, I have one last surprise for you...</h2>
            <motion.button
              onClick={handleReveal}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#ff4d6d] p-10 rounded-full shadow-2xl text-white group transition-all"
            >
              <Heart className="w-16 h-16 fill-current group-hover:scale-110 transition-transform" />
            </motion.button>
            <p className="mt-6 text-gray-400 animate-pulse">Click the heart to unlock my secret</p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#fff5f6] p-12 rounded-3xl shadow-2xl border-4 border-dashed border-[#ff4d6d]/30"
            >
              <Sparkles className="w-12 h-12 text-[#ff4d6d] mx-auto mb-6 animate-spin-slow" />
              <h3 className="text-3xl font-bold text-[#ff4d6d] mb-4">My Promise to You</h3>
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "No matter where life takes us, my heart will always find its way back to yours. I promise to hold your hand through every high and every low. You are my forever and always."
              </p>
              <motion.div 
                className="mt-8 text-5xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                💍❤️✨
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
