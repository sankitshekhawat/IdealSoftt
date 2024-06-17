
import React from 'react';
// import WOW from 'wow.js'; // If you're using the WOW library for animations

// Make sure to initialize WOW if you're using it
// This should be done outside of the component, perhaps in the root of your application

// new WOW().init();
const ClearPostSection = () => {

  return (
    <section className="clear-post section-padding">
      <div className="container">
        <div className="clear-post-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="post-content">
                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                  A clear post will ensure duties &amp; expectation
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day
                  going forward, a new normal that has evolved from
                </p>
                <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
                  KNOW MORE
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 wow fadeInRight" data-wow-delay=".4s">
              <div className="post-image bg-cover" style={{ backgroundImage: 'url("../img/post.jpg")' }}></div>
            </div>
            <div className="col-xl-4 col-lg-6 mt-5 mt-xl-0">
              <div className="progress-content">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  We want to help
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day
                  going forward, a new normal that has evolved from
                </p>
                <div className="progress-wrap">
                  <div className="pro-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="pro-head">
                      <h6 className="title">Work Experience</h6>
                      <span className="point"> 70% </span>
                    </div>
                    <div className="progress">
                      <div className="progress-value"></div>
                    </div>
                  </div>
                  <div className="pro-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="pro-head">
                      <h6 className="title">Deliver Idea</h6>
                      <span className="point"> 85% </span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-two"></div>
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

export default ClearPostSection;