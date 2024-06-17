import React from 'react';
import {  PiPlayFill } from "react-icons/pi";


const CTASection = () => {
  return (
    <section className="cta-section-2 style-2 fix section-padding bg-cover" style={{ backgroundImage: "url('../img/cta-banner/video-bg.jpg')" }}>
      <div className="container">
        <div className="cta-wrapper-2">
          <div className="cta-content">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '.3s', animationName: 'fadeInUp' }}>
              Watch the video and see what it feels <br /> like to work with us
            </h2>
            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-icon video-popup wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '.5s', animationName: 'fadeInUp' }}>
              <PiPlayFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;