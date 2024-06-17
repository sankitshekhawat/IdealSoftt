import React from 'react';
import { Lightbulb } from 'lucide-react';
import { MdRateReview } from "react-icons/md";

const AbserProductiveSec = () => {
  return (
    <section className="service-productive fix section-padding">
    <div className="service-productive-wrapper style-2">
      <div className="circle-shape">
        <img
          src="../img/circle-shape.png"
          alt="shape-img"
          className="text-circle"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="productive-image-2">
              <img src="../img/service/04.jpg" alt="img" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-5 mt-xl-0">
            <div className="productive-content">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp"
                }}
              >
                <h2>
                  We made things easier <br /> for your business
                </h2>
              </div>
              <p
                className="mt-4 mt-md-0 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp"
                }}
              >
                Bring to the table win-win survival strategies to ensure proactive
                domination. At the end of the day going forward, a new normal that
                has evolved from operational X is on the runway
              </p>
              <div className="icon-items-area">
                <div
                  className="icon-item d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="icon">
                    {/* <i className="flaticon-light-bulb" /> */}
                      {/* <TbBulb className='flaticon-light-bulb'/> */}
                      {/* <FontAwesomeIcon icon={faCoffee} /> */}
                      {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                      {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                      {/* <Siren size={28} /> */}
                      <Lightbulb size={40} strokeWidth={1.25} />
                  </div>
                  <div className="content">
                    <h5>
                      Deliver <br /> Awesome Idea
                    </h5>
                  </div>
                </div>
                <div
                  className="icon-item d-flex align-items-center active wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp"
                  }}
                >
                  <div className="icon">
                    {/* <i className="flaticon-review" /> */}
                    <MdRateReview/>
                  </div>
                  <div className="content">
                    <h5>
                      Moneyback <br /> Gurantee
                    </h5>
                  </div>
                </div>
              </div>
              <h6
                className="wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp"
                }}
              >
                We’re commited to deliver high quality productive service
              </h6>
              <div
                className="author-items wow fadeInUp"
                data-wow-delay=".9s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="about-button">
                  <a href="about.html" className="theme-btn">
                    {" "}
                    Discover More{" "}
                  </a>
                </div>
                <img src="../img/about/signature-2.png" alt="signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AbserProductiveSec;
