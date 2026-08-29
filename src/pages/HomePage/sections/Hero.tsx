// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        textAnimation="fade-blur"
        primaryButton={{"text":"Explore Solutions","href":"#solutions"}}
        description="Advanced energy solutions for a sustainable world. Empowering industries with efficiency, reliability, and innovation."
        secondaryButton={{"href":"#contact","text":"Contact Us"}}
        brand="Powering the Future of New Energy"
        imageSrc="http://img.b2bpic.net/free-photo/3d-render-modern-background-with-flowing-cyber-lines-particles_1048-13985.jpg"
      />
    </div>
  );
}
