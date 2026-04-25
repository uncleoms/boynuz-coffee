import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero-section-k9z2m8" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Boynuz Coffee İzmit ana sayfa"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/8e35a7d4-d16d-429d-84fb-c5bd9a5d529a/photo-1777152374525-qjdl.jpg')",
        }}
        role="img"
        aria-label="Boynuz Coffee İzmit kafeterya iç mekan"
      />
      <div className="absolute inset-0 bg-[#1A0F0A]/60 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[#C5A059] font-medium tracking-[0.3em] uppercase mb-4"
          id="hero-subtitle-m2n8x1"
        >
          İzmit'in Kalbinde Nitelikli Kahve
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#FFFFFF] leading-tight mb-8"
          id="hero-title-a7k4v2"
        >
          İzmit'te Gerçek Kahve <br /> <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #C5A059, #F5F5DC)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Tutkuyla</span> Buluşuyor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-[#FDFBF7] mb-10 max-w-2xl mx-auto leading-relaxed"
          id="hero-desc-p9r3w1"
        >
          Modern tasarımı ve özenle seçilmiş çekirdekleriyle Boynuz Coffee, size sadece bir kahve değil, unutulmaz bir deneyim sunuyor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('experience-section-p4r3w1')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-[#C5A059] text-[#1A0F0A] rounded-full font-bold text-lg hover:bg-[#FFFFFF] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all"
            id="hero-cta-primary-b8x2m1"
          >
            Deneyimi Keşfet
          </button>
          <button
            onClick={() => document.getElementById('contact-section-b2l1m6')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border-2 border-[#FFFFFF] rounded-full font-bold text-lg hover:bg-[#FFFFFF] hover:text-[#1A0F0A] transition-all text-[#FFFFFF]"
            id="hero-cta-secondary-v4n7c2"
          >
            Bize Ulaşın
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#FFFFFF]/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
