import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      let nextValentine = new Date(now.getFullYear(), 1, 14); // Feb 14
      
      if (now > nextValentine) {
        nextValentine = new Date(now.getFullYear() + 1, 1, 14);
      }

      const difference = nextValentine.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#4a1c24] text-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 italic leading-tight">Counting down to more memories with you...</h2>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-12 md:mb-16"></div>
        
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <motion.div 
              key={item.label}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 border border-white/10 shadow-2xl flex flex-col items-center"
            >
              <div className="text-4xl md:text-7xl font-bold mb-2 md:mb-3 text-[#D4AF37]">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium opacity-60">{item.label}</div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-16 md:mt-20 text-xl md:text-2xl font-romantic text-[#D4AF37] tracking-widest px-4">
          “Every second spent with you is a gift from God.”
        </p>
      </div>
    </section>
  );
};