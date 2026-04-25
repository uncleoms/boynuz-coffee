import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Ana Sayfa', id: 'hero-section-k9z2m8' },
    { name: 'Deneyim', id: 'experience-section-p4r3w1' },
    { name: 'Hikayemiz', id: 'about-section-v7n5x2' },
    { name: 'Galeri', id: 'gallery-section-t8u4q9' },
    { name: 'İletişim', id: 'contact-section-b2l1m6' },
  ];

  return (
    <nav 
      id="main-nav-w7k2j9" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div 
            data-role="logo" 
            className="flex items-center cursor-pointer" 
            onClick={() => scrollTo('hero-section-k9z2m8')}
            id="nav-logo-container-v4k8"
          >
            <img 
              src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/42a9e6e5-291d-4895-a52e-59bc131e2cc5/pending-1777151693570/logo.jpg" 
              alt="Boynuz Coffee Logo" 
              className="h-10 sm:h-12 w-auto object-contain rounded-full"
              id="nav-logo-img-x9v1n4"
            />
          </div>
          <div 
            id="nav-brand-badge-v4k8m2"
            className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-semibold transition-all cursor-default text-sm sm:text-base tracking-wide uppercase ${scrolled ? 'bg-[#1A0F0A] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#1A0F0A]'} drop-shadow-sm`}
          >
            Boynuz Coffee
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              id={`nav-link-${link.id}`}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#C5A059] ${scrolled ? 'text-[#1A0F0A]' : 'text-[#FFFFFF]'} drop-shadow-sm`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact-section-b2l1m6')}
            id="nav-cta-btn-j9x2k4"
            className={`px-6 py-2 rounded-full font-semibold transition-all ${scrolled ? 'bg-[#1A0F0A] text-[#FFFFFF] hover:bg-[#C5A059]' : 'bg-[#FFFFFF] text-[#1A0F0A] hover:bg-[#C5A059] hover:text-[#FFFFFF]'} drop-shadow-sm`}
          >
            Ziyaret Et
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden drop-shadow-sm transition-colors duration-300 ${scrolled ? '' : 'text-[#FFFFFF]'} text-[#F5F5F5]`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle-s4r9v1"
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#1A0F0A] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu-overlay-k2m8x1"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-[#FFFFFF] text-2xl font-display font-medium hover:text-[#C5A059] transition-colors drop-shadow-sm"
            id={`mobile-nav-link-${link.id}`}
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact-section-b2l1m6')}
          className="mt-4 px-10 py-2 bg-[#C5A059] rounded-full font-bold text-lg text-[#111111]"
          id="mobile-nav-cta-btn-v4k8"
        >
          Ziyaret Et
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
