import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-20 bg-white border-t border-gray-100 text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#ff4d6d] fill-current" />
          <Heart className="w-7 h-7 md:w-8 md:h-8 text-[#D4AF37] fill-current animate-pulse" />
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#ff4d6d] fill-current" />
        </div>
        
        <p className="text-[#4a1c24] text-xl md:text-3xl font-light italic mb-8 px-4">
          “Built with vision, ambition, and endless love.”
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 md:mb-12">
          <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]"></div>
          <p className="text-[#4a1c24] font-bold text-lg md:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Nifesimi ❤️ Amaka
          </p>
          <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]"></div>
        </div>
        
        <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase mb-4">
          Luxury Romantic Experience • Est. 2024
        </p>
        
        <div className="flex items-center justify-center gap-2 text-[#D4AF37] opacity-60">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Premium Love Encrypted</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#ff4d6d] to-[#D4AF37]"></div>
    </footer>
  );
};