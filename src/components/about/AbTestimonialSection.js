import React from 'react';
import { FaQuoteRight } from "react-icons/fa";


const AbTestimonialSection = () => {
  return (
    <section className="testimonial-section section-padding fix section-bg">
      <div className="left-shape">
        <img src="../img/client/left-shape.png" alt="shape-img" />
      </div>
      <div className="right-shape">
        <img src="../img/client/right-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Success stories</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
            Why customers love to <br /> working with us
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
            <div className="testimonial-card-items">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: "url('../img/client/01.jpg')" }}></div>
              <div className="icon">
                <FaQuoteRight/>
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the
                  day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Janes Cooper</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
            <div className="testimonial-card-items active">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: "url('../img/client/02.jpg')" }}></div>
              <div className="icon">
              <FaQuoteRight/>
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the
                  day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Jack Daniel</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
            <div className="testimonial-card-items">
              <div className="testimonial-image bg-cover" style={{ backgroundImage: "url('../img/client/03.jpg')" }}></div>
              <div className="icon">
              <FaQuoteRight/>
              </div>
              <div className="testimonial-content">
                <p>
                  Bring to the table win-win strategies to ensure proactive domination. At the end of the
                  day going forward normal that has evolved from operational X is on the
                </p>
                <h4>Ava Olivia</h4>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbTestimonialSection;
