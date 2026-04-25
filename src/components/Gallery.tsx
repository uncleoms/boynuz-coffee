import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-2.jpg",
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-3.jpg",
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-4.jpg",
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-5.jpg",
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-6.jpg",
  "https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/photo-7.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery-section-t8u4q9" className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A0F0A] mb-4" id="gallery-title-k2v8">Galeri</h2>
          <p className="text-[#4A4A4A]" id="gallery-subtitle-v4n1">Mekanımızdan ve lezzetlerimizden kareler</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group"
              id={`gallery-item-${index}-m2v8`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                id={`gallery-img-${index}-p9r3`}
              />
              <div className="absolute inset-0 bg-[#1A0F0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[#FFFFFF] border border-[#FFFFFF] px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">Detayları Gör</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
