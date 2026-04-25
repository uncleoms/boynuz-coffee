import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer-v4k8" className="bg-[#1A0F0A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div data-role="logo" className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => scrollTo('hero-section-k9z2m8')}>
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/logo.jpg" 
                alt="Boynuz Coffee Logo" 
                className="h-10 w-auto object-contain"
                id="footer-logo-img-x9v1"
              />
              <span className="font-display text-xl font-bold text-[#FFFFFF] uppercase tracking-tight">Boynuz Coffee</span>
            </div>
            <p className="text-[#FFFFFF]/60 leading-relaxed">
              İzmit'in nitelikli kahve durağı. Her fincanda kalite, her köşede huzur.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4">
              {['Deneyim', 'Hikayemiz', 'Galeri', 'İletişim'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollTo(item === 'Deneyim' ? 'experience-section-p4r3w1' : item === 'Hikayemiz' ? 'about-section-v7n5x2' : item === 'Galeri' ? 'gallery-section-t8u4q9' : 'contact-section-b2l1m6')}
                    className="text-[#FFFFFF]/60 hover:text-[#C5A059] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">İletişim</h4>
            <ul className="space-y-4 text-[#FFFFFF]/60">
              <li>Karabaş, Ulugazi Sk. 1/D,<br />41001 İzmit/Kocaeli</li>
              <li>0539 296 46 29</li>
              <li>merhaba@boynuzcoffee.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFF] font-bold uppercase tracking-widest text-sm mb-6">Takip Edin</h4>
            <p className="text-[#FFFFFF]/60 mb-4">Sosyal medya hesaplarımızdan bizi takip ederek güncel kalabilirsiniz.</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#C5A059] transition-colors">Instagram</a>
              <a href="#" className="text-[#FFFFFF]/60 hover:text-[#C5A059] transition-colors">Facebook</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#FFFFFF]/40 text-sm">
            &copy; {currentYear} Boynuz Coffee. Tüm hakları saklıdır.
          </p>
          <a 
            href="https://sitejourney.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#1c4b8e] text-[#ffffff] px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors"
            id="footer-sitejourney-badge-v4n1"
          >
            Made with SiteJourney.ai
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
