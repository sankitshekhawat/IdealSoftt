import React from 'react';

const AbCtaSection = () => {
  return (
    <section className="cta-section-2 fix section-padding background-image" style={{ backgroundImage: "url('../img/cta-banner/01.jpg')" }}>
      <div className="shape-image">
        <img src="../img/layer-shape-4.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="cta-wrapper-2">
          <div className="cta-content">
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              Watch the video and see what it feels <br /> like to work with us
            </h2>
            <div className="cta-button mt-5 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
              <a href="contact.html" className="theme-btn hover-white">
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbCtaSection;
