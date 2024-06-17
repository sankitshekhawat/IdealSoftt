import React from 'react';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiSolidCameraMovie } from "react-icons/bi";

// import WOW from 'wow.js'; // If you're using the WOW library for animations

// Make sure to initialize WOW if you're using it
// This should be done outside of the component, perhaps in the root of your application
// new WOW().init();

const WebsiteCheckingSection = () => {
  return (
    <section className="website-checking section-padding">
      <div className="website-checking-wrapper">
        <div className="container">
          <div className="section-title text-center">
            <span className="text-white wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Ready to buildup</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              Get your free quote today
            </h2>
          </div>
          <div className="website-checking-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="checking-area">
                  <div className="check-items d-flex align-items-center wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                    <div className="check-input">
                      <input type="text" id="text" placeholder="Web URL" />
                    </div>
                    <div className="check-input">
                      <input type="email" id="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <button className="theme-btn header-color-2 wow fadeInUp" data-wow-delay=".7s" type="submit" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                    CHECK NOW
                  </button>
                </div>
                <h6 className="wow fadeInUp" data-wow-delay=".9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'fadeInUp' }}>
                  Please check our <a href="index.html">Privacy Policy</a> to find out how we manage and protect your data
                </h6>
              </div>
            </div>
            <div className="icon-area">
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                  <div className="icon-items">
                    <div className="icon">
                      <BiSolidCameraMovie/>
                    </div>
                    <div className="content">
                      <h5>Professional Agency</h5>
                      <p>
                        Nullam eu nibh vitae est tempor molestie ullam patha Quisque dignissim maximus ipsum cong
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                  <div className="icon-items style-2">
                    <div className="icon">
                      <VscWorkspaceTrusted/>
                    </div>
                    <div className="content">
                      <h5>Unique method</h5>
                      <p>
                        Nullam eu nibh vitae est tempor molestie ullam patha Quisque dignissim maximus ipsum cong
                      </p>
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

export default WebsiteCheckingSection;