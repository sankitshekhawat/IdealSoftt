import React from 'react';

const AbFaqSection = () => {
  return (
    <section className="faq-section fix">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image bg-cover" style={{ backgroundImage: "url('../img/faq/faq.jpg')" }}></div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="faq-content">
                <div className="section-title">
                  <span className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>What people ask</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>Get every single answer <br /> from here</h2>
                </div>
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '0.3s', animationName: 'none' }}>
                      <h5 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                          How can we improve the lead generation process?
                        </button>
                      </h5>
                      <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          The main elements of a marketing strategy are your target audience goals and objectives and the tactics you will employ to actively market to achieve the goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'hidden', animationDelay: '0.5s', animationName: 'none' }}>
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                          What is content marketing strategy?
                        </button>
                      </h5>
                      <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          The main elements of a marketing strategy are your target audience goals and objectives and the tactics you will employ to actively market to achieve the goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".7s" style={{ visibility: 'hidden', animationDelay: '0.7s', animationName: 'none' }}>
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                          What is the purpose of a digital agency?
                        </button>
                      </h5>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          The main elements of a marketing strategy are your target audience goals and objectives and the tactics you will employ to actively market to achieve the goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".9s" style={{ visibility: 'hidden', animationDelay: '0.9s', animationName: 'none' }}>
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                          Can I succeed on this platform with my experience?
                        </button>
                      </h5>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          The main elements of a marketing strategy are your target audience goals and objectives and the tactics you will employ to actively market to achieve the goals.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbFaqSection;
