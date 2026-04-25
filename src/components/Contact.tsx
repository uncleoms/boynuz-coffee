import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import SiteJourneyForm from './SiteJourneyForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact-section-b2l1m6" className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold text-[#1A0F0A] mb-8"
              id="contact-title-x9k2"
            >
              Bize Ulaşın
            </motion.h2>
            <p className="text-[#4A4A4A] text-lg mb-12" id="contact-desc-v4r1">
              Sorularınız, iş birliği teklifleriniz veya sadece merhaba demek için bize yazabilirsiniz. En kısa sürede size dönüş yapacağız.
            </p>

            <div className="space-y-8" id="contact-info-list-p2v8">
              <div className="flex items-start gap-5" id="info-item-phone">
                <div className="bg-[#C5A059]/10 p-3 rounded-lg">
                  <Phone className="text-[#C5A059]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A0F0A] mb-1">Telefon</h4>
                  <p className="text-[#4A4A4A]">0539 296 46 29</p>
                </div>
              </div>

              <div className="flex items-start gap-5" id="info-item-address">
                <div className="bg-[#C5A059]/10 p-3 rounded-lg">
                  <MapPin className="text-[#C5A059]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A0F0A] mb-1">Adres</h4>
                  <p className="text-[#4A4A4A]">Karabaş, Ulugazi Sk. 1/D, 41001 İzmit/Kocaeli</p>
                </div>
              </div>

              <div className="flex items-start gap-5" id="info-item-hours">
                <div className="bg-[#C5A059]/10 p-3 rounded-lg">
                  <Clock className="text-[#C5A059]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A0F0A] mb-1">Çalışma Saatleri</h4>
                  <p className="text-[#4A4A4A]">Her gün: 08:30 – 23:30</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4" id="contact-socials-v9k1">
              <a href="#" className="p-3 bg-[#1A0F0A] text-[#FFFFFF] rounded-full hover:bg-[#C5A059] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-[#1A0F0A] text-[#FFFFFF] rounded-full hover:bg-[#C5A059] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#FAF7F2] p-8 md:p-12 rounded-3xl shadow-xl">
            <SiteJourneyForm formType="contact" successMessage="Mesajınız başarıyla iletildi!" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#1A0F0A] uppercase tracking-wider">İsim</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="contact-form-name-m2v8"
                    placeholder="Adınız Soyadınız" 
                    className="w-full px-4 py-3 rounded-xl border border-[#1A0F0A]/10 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#1A0F0A] uppercase tracking-wider">E-Posta</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="contact-form-email-v4n1"
                    placeholder="eposta@adresiniz.com" 
                    className="w-full px-4 py-3 rounded-xl border border-[#1A0F0A]/10 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-[#1A0F0A] uppercase tracking-wider">Mesajınız</label>
                <textarea 
                  name="message" 
                  id="contact-form-message-p9r3"
                  rows={5} 
                  placeholder="Nasıl yardımcı olabiliriz?" 
                  className="w-full px-4 py-3 rounded-xl border border-[#1A0F0A]/10 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#1A0F0A] text-[#FFFFFF] font-bold py-4 rounded-xl hover:bg-[#C5A059] transition-all transform hover:-translate-y-1"
                id="contact-form-submit-b2k8"
              >
                Mesaj Gönder
              </button>
            </SiteJourneyForm>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
