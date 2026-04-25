import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <main id="home-page-container-v7k1">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default HomePage;
