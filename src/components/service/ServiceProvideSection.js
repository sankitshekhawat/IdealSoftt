import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { TbDeviceMobileCode } from "react-icons/tb";
import { LuMonitorSpeaker } from "react-icons/lu";
import { FaBezierCurve } from "react-icons/fa6";
import { LuBraces } from "react-icons/lu";

// import { FaArrowLeftLong } from "react-icons/fa6";

const ServiceProvideSection = () => {
  return (
    <section className="service-provide section-padding">
      <div className="shape-image">
        <img src="../img/service/arrow-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">What We Provide</span>
          <h2 className="wow fadeInUp " data-wow-delay=".3s">
            We always deliver best <br /> service for customer
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="service-provide-items text-center">
              <div className="icon">
               <TbDeviceMobileCode/>
              </div>
              <div className="content">
                <h5>
                  <a href="service-details.html" className='teamblog text-black'>
                    Mobile <br />
                    Application
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt ut loreum ipsum dsu
                </p>
                <div className="arrow-icon">
                  <a href="service-details.html" className='text-black'><FaArrowRightLong/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="service-provide-items text-center active">
              <div className="icon">
                <LuMonitorSpeaker/>
              </div>
              <div className="content">
                <h5>
                  <a href="service-details.html" className='teamblog text-black'>
                    Digital <br />
                    Marketing
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt ut loreum ipsum dsu
                </p>
                <div className="arrow-icon">
                  <a href="service-details.html" className='text-black'><FaArrowRightLong/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="service-provide-items text-center">
              <div className="icon">
                <FaBezierCurve/>
              </div>
              <div className="content">
                <h5>
                  <a href="service-details.html" className='teamblog text-black'>
                    Graphics <br />
                    Designing
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt ut loreum ipsum dsu
                </p>
                <div className="arrow-icon">
                  <a href="service-details.html" className='text-black'><FaArrowRightLong/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="service-provide-items text-center">
              <div className="icon">
              <LuBraces/>
              </div>
              <div className="content">
                <h5>
                  <a href="service-details.html" className='teamblog text-black'>
                    Website <br />
                    Development
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit am adipiscing elit sed do eiusm incididunt ut loreum ipsum dsu
                </p>
                <div className="arrow-icon">
                  <a href="service-details.html" className='text-black'><FaArrowRightLong/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvideSection;