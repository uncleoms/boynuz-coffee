import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-section-v7n5x2" className="py-24 md:py-32 bg-[#1A0F0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
            id="about-img-container-j9v4"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/8e35a7d4-d16d-429d-84fb-c5bd9a5d529a/photo-1777152556292-k7s0.jpg" 
                alt="Boynuz Coffee Interior"
                className="w-full h-[500px] object-cover"
                id="about-image-main-k2v8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-[#C5A059] rounded-2xl z-0" id="about-img-decor-x3n1" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
            id="about-content-v7k1"
          >
            <span className="text-[#C5A059] font-bold uppercase tracking-widest mb-4 block" id="about-tagline-m2v8">Biz Kimiz?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-8 leading-tight" id="about-title-f8x2">
              Her Yudumda <br /> Bir Hikaye
            </h2>
            <div className="space-y-6">
              <p className="text-[#FAF7F2]/80 text-lg leading-relaxed" id="about-p1-n9w1">
                İzmit'in kalbinde yer alan Boynuz Coffee, kahve kültürünü bir sanata dönüştürme vizyonuyla doğdu. Karabaş mahallesindeki şık ve minimalist mekanımızda, misafirlerimize en kaliteli çekirdekleri, en modern demleme teknikleriyle sunuyoruz.
              </p>
              <p className="text-[#FAF7F2]/80 text-lg leading-relaxed" id="about-p2-v4k8">
                Adımızdan dekorasyonumuza kadar her detayda özgünlüğü ve kaliteyi temsil ediyoruz. Boynuz Coffee sadece bir kafe değil; dostlarınızla hoşça vakit geçirebileceğiniz, kitabınızı okurken huzur bulabileceğiniz veya verimli çalışabileceğiniz bir yaşam alanı.
              </p>
            </div>
            <div className="mt-10 flex gap-12 items-center" id="about-stats-grid-x9v1">
              <div>
                <span className="block text-4xl font-bold text-[#C5A059]" id="stat-1-val">12+</span>
                <span className="text-[#FFFFFF]/60 text-sm uppercase tracking-wider" id="stat-1-label">Kahve Çeşidi</span>
              </div>
              <div className="w-px h-12 bg-[#FFFFFF]/20" />
              <div>
                <span className="block text-4xl font-bold text-[#C5A059]" id="stat-2-val">5000+</span>
                <span className="text-[#FFFFFF]/60 text-sm uppercase tracking-wider" id="stat-2-label">Mutlu Misafir</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
