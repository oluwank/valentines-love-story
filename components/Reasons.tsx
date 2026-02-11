import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { id: 1, title: 'Reason #1', text: 'The way you make me feel like I can conquer the world just by holding my hand.' },
  { id: 2, title: 'Reason #2', text: 'Your infectious laugh that brightens even my darkest days.' },
  { id: 3, title: 'Reason #3', text: 'The kindness you show to everyone around you, showing the beauty of your soul.' },
  { id: 4, title: 'Reason #4', text: 'How you remember the smallest details about the things I love.' },
  { id: 5, title: 'Reason #5', text: 'The way you challenge me to be the best version of myself every day.' },
  { id: 6, title: 'Reason #6', text: 'Simply because you are you, and "you" is the most amazing person I know.' },
];

export const Reasons: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff4d6d] text-center mb-12 md:mb-16 italic">Reasons I Love You</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="flip-card h-72 md:h-64 perspective-1000">
              <div className="flip-card-inner relative w-full h-full text-center cursor-pointer">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 bg-[#fff5f6] border border-[#ff4d6d]/20 rounded-2xl flex flex-col items-center justify-center p-6 shadow-md">
                  <div className="text-3xl md:text-4xl mb-4 text-[#ff4d6d]">❤️</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#ff4d6d]">{reason.title}</h3>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Tap to reveal</p>
                </div>
                
                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-[#ff4d6d] to-[#ffb3c1] rounded-2xl flex items-center justify-center p-6 md:p-8 shadow-xl text-white">
                  <p className="text-base md:text-lg leading-relaxed font-medium italic">
                    {reason.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};