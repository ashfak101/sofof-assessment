import React from 'react';
import HeroSection from './HeroSection';
import HomeOfferSection from './HomeOfferSection';
import HomeSubcriptionInfo from './HomeSubcriptionInfo';
import Whatsapp from './Whatsapp';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeOfferSection />
      <HomeSubcriptionInfo />
      <Whatsapp />
    </div>
  );
};

export default HomePage;
