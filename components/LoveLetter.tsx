import React from 'react';
import { motion } from 'framer-motion';

export const LoveLetter: React.FC = () => {
  return (
    <section id="love-letter" className="py-20 md:py-32 px-4 bg-[#fffafb] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-7xl md:text-9xl">🇳🇬</div>
        <div className="absolute bottom-10 right-10 text-7xl md:text-9xl rotate-12">❤️</div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative glass p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/40"
        >
          <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 bg-[#ff4d6d] text-white p-4 md:p-6 rounded-full shadow-xl">
            <span className="text-2xl md:text-3xl">💌</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold text-[#4a1c24] mb-8 md:mb-12 text-center mt-4 md:mt-0">My Dearest Amaka,</h2>
          
          <div className="space-y-6 md:space-y-8 text-[#4a1c24]/80 leading-relaxed text-lg md:text-2xl font-light text-center">
            <p className="italic">
              “From the moment you walked into my life, everything changed. You are my answered prayer, my calm in chaos, my biggest blessing. Loving you feels like home.”
            </p>
            <p>
              You carry yourself with a grace that leaves me speechless, and your brain... your intellect is just as beautiful as your soul. I thank God every day for the way our paths crossed.
            </p>
            <p>
              This isn't just about a day; it's about every second I get to spend being your partner. You are my Queen, and I will always protect your smile.
            </p>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col items-center">
            <p className="text-[#ff4d6d] font-romantic text-4xl md:text-5xl mb-2">Forever Yours,</p>
            <p className="text-2xl md:text-3xl font-bold text-[#4a1c24] tracking-wider">Nifesimi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};