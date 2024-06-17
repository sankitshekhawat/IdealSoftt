import React from 'react';
import PricingData from "../../utils/PricingData"


const PricingSection = () => {
  return (
    <section className="pricing-section section-padding pt-0">
      <div className="shape-image">
        <img src="../img/service/arrow-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp" style={{ visibility: 'hidden', animationName: 'none' }}>Our pricing plans</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'hidden', animationDelay: '.3s', animationName: 'none' }}>
            Choose Your Optimal <br /> Pricing Plans
          </h2>
        </div>
        <div className="row">
        {PricingData.map(({doller,month,offer,imgsrc,designation,check,plan,imgsrc2},index) => 

          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s" 
          style={{ visibility: 'hidden', animationDelay: '.3s', animationName: 'none' }} key={index}>
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>{doller} <sub>{month}</sub></h2>
                <span>{offer}</span>
                <div className="icon-area">
                  <img src={imgsrc} alt="icon-img" />
                  <div className="content">
                    <span>{designation}</span>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  {check} Exclusive Templaes
                </li>
                <li>
                {check} Business &amp; Finance Analysing
                </li>
                <li>
                {check}Customer Management
                </li>
                <li>
                {check} Full Access Library
                </li>
                <li className="last-list">
                {check} 24 Hours Support
                </li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">{plan}</a>
              </div>
              <div className="shape-image">
                <img src={imgsrc2} alt="shape-img" />
              </div>
            </div>
          </div>
        )}
          {/* <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'hidden', animationDelay: '.5s', animationName: 'none' }}>
            <div className="single-pricing-items active">
              <div className="pricing-header">
                <h2>\$150 <sub>/ month</sub></h2>
                <span>Collaborate Professionally.</span>
                <div className="icon-area">
                  <img src="../img/icon/commercial.png" alt="icon-img" />
                  <div className="content">
                    <span>Commercial</span>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <FaCheck/> Exclusive Templaes
                </li>
                <li>
                  <FaCheck/> Business &amp; Finance Analysing
                </li>
                <li>
                  <FaCheck/> Customer Management
                </li>
                <li>
                  <FaCheck/> Full Access Library
                </li>
                <li>
                  <FaCheck/> 24 Hours Support
                </li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src="../img/shape-2.png" alt="shape-img" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s" style={{ visibility: 'hidden', animationDelay: '.7s', animationName: 'none' }}>
            <div className="single-pricing-items">
              <div className="pricing-header">
                <h2>\$75 <sub>/ month</sub></h2>
                <span>True Power of Management</span>
                <div className="icon-area">
                  <img src="../img/icon/enterprise.png" alt="icon-img" />
                  <div className="content">
                    <span>Enterprise</span>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <FaCheck/> Exclusive Templaes
                </li>
                <li>
                  <FaCheck/> Business &amp; Finance Analysing
                </li>
                <li>
                  <FaCheck/> Customer Management
                </li>
                <li>
                  <FaCheck/> Full Access Library
                </li>
                <li>
                  <FaCheck/> 24 Hours Support
                </li>
              </ul>
              <div className="pricing-button">
                <a href="#" className="theme-btn header-color">CHOOSE PLAN</a>
              </div>
              <div className="shape-image">
                <img src="../img/shape-2.png" alt="shape-img" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;