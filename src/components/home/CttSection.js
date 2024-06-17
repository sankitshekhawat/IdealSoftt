import React from 'react';
    // import WOW from 'wow.js'; // If you're using the WOW library for animations
    
    // Make sure to initialize WOW if you're using it
    // This should be done outside of the component, perhaps in the root of your application
    // new WOW().init();
    
const CttSection = () => {
  return (
        <section className="cta-section-2 fix section-padding background-image" style={{ backgroundImage: 'url("../img/cta-banner/01.jpg")' }}>
          <div className="shape-image">
            <img src="../img/layer-shape-2.png" alt="shape-img" />
          </div>
          <div className="container">
            <div className="cta-wrapper-4">
              <div className="cta-content">
                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                  Better digital agency solution &amp; <br /> service at your fingertips
                </h2>
                <div className="cta-button mt-4 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                  <a href="contact.html" className="theme-btn hover-white">
                    DISCOVER MORE
                  </a>
                </div>
              </div>
              <div className="cta-image wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <img src="../img/cta.png" alt="img" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default CttSection