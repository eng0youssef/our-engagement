import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto bg-blush/20 rounded-3xl my-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">The Gallery</h2>
        <p className="text-rosegold font-light text-lg">كل صورة بتحكي تفصيلة صغيرة من حكايتنا</p>
      </div>

      <div className="masonry-grid">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="masonry-item relative overflow-hidden rounded-xl cursor-pointer group shadow-lg"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-rosegold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              alt="Expanded gallery view"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
