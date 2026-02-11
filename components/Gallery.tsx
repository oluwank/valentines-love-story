import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';

/**
 * ---------------------------------------------------------
 * MEMORY GALLERY CONFIGURATION
 * ---------------------------------------------------------
 * 1. HOW TO ADD PHOTOS:
 *    - Place your images in a folder named 'images' (at the same level as index.html).
 *    - Name them 'photo1.jpg', 'photo2.jpg', etc.
 *    - Update the 'url' below to match your filename (e.g., 'images/vacation.jpg').
 * 
 * 2. HOW TO ADD MORE ITEMS:
 *    - Copy a whole { id: ..., url: ..., title: ... } block and paste it below.
 *    - Increment the 'id' number.
 * 
 * 3. GITHUB PAGES NOTE:
 *    - Ensure your image filenames match exactly (case-sensitive).
 * ---------------------------------------------------------
 */

const galleryImages = [
  { 
    id: 1, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo1.jpg.jpeg', 
    title: 'A Special Moment' 
  },
  { 
    id: 2, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo2.jpg.jpeg', 
    title: 'Our First Date' 
  },
  { 
    id: 3, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo3.jpg.jpeg', 
    title: 'Sunset Walks' 
  },
  { 
    id: 4, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo4.jpg.jpeg', 
    title: 'Laughter Shared' 
  },
  { 
    id: 5, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo5.jpg.jpeg', 
    title: 'New Adventures' 
  },
  { 
    id: 6, 
    /* REPLACE THIS IMAGE WITH OUR PHOTO */
    url: 'images/photo6.jpg.jpeg', 
    title: 'Perfect Quietude' 
  },
  /* DUPLICATE THE ABOVE BLOCK TO ADD MORE PHOTOS */
];

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Fallback for placeholder demonstration if local images aren't found yet
  const getImageUrl = (url: string) => {
    // If you haven't uploaded your images yet, this helps you see the layout
    return url.startsWith('http') ? url : url;
  };

  return (
    <section className="py-32 bg-[#fffafb]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <Camera className="w-12 h-12 text-[#ff4d6d] mx-auto mb-4 opacity-50" />
          <h2 className="text-5xl md:text-7xl font-bold text-[#4a1c24] italic">Our Beautiful Moments</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
          <p className="mt-4 text-gray-500 font-light">The story of us, one frame at a time.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((img) => (
            /* <div class="gallery-item"> - Easy to duplicate block below */
            <motion.div
              key={img.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="gallery-item cursor-pointer overflow-hidden rounded-3xl shadow-2xl relative group bg-white p-3 border border-gray-100"
              onClick={() => setSelectedImg(img.url)}
            >
              <div className="overflow-hidden rounded-2xl h-96 bg-gray-100">
                <img 
                  src={getImageUrl(img.url)} 
                  alt={`Memory with Amaka - ${img.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // This shows a nice placeholder if the local image is missing
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x500?text=Upload+to+images/`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-2xl font-romantic font-bold">{img.title}</p>
              </div>
            </motion.div>
            /* </div> */
          ))}
        </div>
      </div>

      {/* Lightbox Effect - Click to expand */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0b0e]/95 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-[#ff4d6d] transition-colors bg-white/10 p-4 rounded-full">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              src={getImageUrl(selectedImg)}
              className="max-w-full max-h-[85vh] rounded-3xl shadow-[0_0_100px_rgba(255,77,109,0.2)] border-8 border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};