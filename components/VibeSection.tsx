import React from 'react';
import { motion } from 'framer-motion';

const vibeReasons = [
  { id: 1, title: 'Lagos Night', text: 'Because your smile is brighter than Lagos at night.' },
  { id: 2, title: 'African Grace', text: 'Because you carry grace like a true African queen.' },
  { id: 3, title: 'The Hustle', text: 'Because you support my hustle and believe in my dreams.' },
  { id: 4, title: 'Sunday Peace', text: 'Because loving you feels like Sunday jollof and peace.' },
  { id: 5, title: 'Pure Intellect', text: 'Because you are beauty with brains.' },
  { id: 6, title: 'The Soft Life', text: 'Because with you, I have soft life.' },
];

export const VibeSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#4a1c24] mb-4">Why I Call You My Queen</h2>
        <p className="text-[#D4AF37] font-romantic text-3xl mb-16">The Nigerian Love Vibe</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vibeReasons.map((reason) => (
            <div key={reason.id} className="flip-card h-80 perspective-1000">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 bg-[#fff5f6] border border-[#D4AF37]/30 flex flex-col items-center justify-center p-8 shadow-lg">
                  <div className="text-5xl mb-6">👑</div>
                  <h3 className="text-2xl font-bold text-[#4a1c24] mb-2">{reason.title}</h3>
                  <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4"></div>
                </div>
                
                {/* Back */}
                <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-[#4a1c24] to-[#1a0b0e] flex items-center justify-center p-10 shadow-2xl text-center">
                  <p className="text-white text-xl md:text-2xl leading-relaxed italic font-light">
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