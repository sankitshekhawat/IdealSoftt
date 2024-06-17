import React from "react";
import PricingData from "../../utils/PricingData";

const PricingSection = () => {
  return (
    <>
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Our pricing plans
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              Choose Your Optimal <br /> Pricing Plans
            </h2>
          </div>
          <div className="row">
            {PricingData.map(
              (
                {
                  doller,
                  month,
                  offer,
                  imgsrc,
                  designation,
                  check,
                  plan,
                  imgsrc2,
                },
                index
              ) => (
                <div
                key={index}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="single-pricing-items">
                    <div className="pricing-header">
                      <h2>
                        {doller} <sub>{month}</sub>
                      </h2>
                      <span>{offer}</span>
                      <div className="icon-area">
                        <img src={imgsrc} alt="icon-img" />
                        <div className="content">
                          <span>{designation}</span>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>{check} Exclusive Templaes</li>
                      <li>{check} Business &amp; Finance Analysing</li>
                      <li>{check} Customer Management</li>
                      <li>{check} Full Access Library</li>
                      <li className="last-list">{check} 24 Hours Support</li>
                    </ul>
                    <div className="pricing-button">
                      <a href="#" className="theme-btn header-color">
                        {plan}
                      </a>
                    </div>
                    <div className="shape-image">
                      <img src={imgsrc2} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
