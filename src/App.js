import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedGadgets from './components/FeaturedGadgets';
import TechHighlights from './components/TechHighlights';
import TechnicalStats from './components/TechnicalStats';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedGadgets />
      <TechHighlights />
      <TechnicalStats />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
