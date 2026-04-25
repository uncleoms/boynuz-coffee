import React from 'react';
import { Coffee, Circle, Cookie, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Coffee className="text-[#C5A059]" size={32} />,
    title: "Nitelikli Çekirdekler",
    desc: "Dünyanın en iyi çiftliklerinden toplanan, ustalıkla kavrulan %100 Arabica çekirdekleri.",
  },
  {
    icon: <Circle className="text-[#C5A059]" size={32} />,
    title: "Artizan Demleme",
    desc: "V60, Chemex ve Aeropress yöntemleriyle kahvenin en saf aromasını keşfedin.",
  },
  {
    icon: <Cookie className="text-[#C5A059]" size={32} />,
    title: "Taze Atıştırmalıklar",
    desc: "Kahvenize eşlik edecek günlük hazırlanan tatlı ve tuzlu fırın ürünlerimiz.",
  },
  {
    icon: <Wifi className="text-[#C5A059]" size={32} />,
    title: "Modern Çalışma Alanı",
    desc: "Hızlı internet ve huzurlu ortamımızla işlerinizi halletmek için ideal bir mekan.",
  },
];

const Services = () => {
  return (
    <section id="experience-section-p4r3w1" className="py-24 md:py-32 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-[#1A0F0A] mb-4"
            id="experience-title-t7v2x9"
          >
            Özel Bir Kahve Deneyimi
          </motion.h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto" id="experience-divider-l3k8v1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              id={`feature-card-${index}-f4v9r1`}
              className="bg-[#FFFFFF] p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1A0F0A]/5 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] inline-block group-hover:bg-[#C5A059]/10 transition-colors" id={`feature-icon-container-${index}-r7x1`}>
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-[#1A0F0A] mb-4" id={`feature-title-${index}-v4k9`}>
                {item.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed" id={`feature-desc-${index}-n3w8`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
