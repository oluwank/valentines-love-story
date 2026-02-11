
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingHeartsProps {
  count?: number;
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 10 }) => {
  const hearts = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl text-[#ff4d6d]"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0.5 + Math.random()
          }}
          animate={{ 
            y: -100, 
            opacity: [0, 1, 1, 0],
            rotate: [0, 45, -45, 0],
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};
