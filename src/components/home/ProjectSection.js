import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectData from '../../utils/ProjectData';

const ProjectSection = () => {
  return (
    <>
      {/* <!-- Project Section Start --> */}
      <section className="project-section-4 section-padding fix">
        <div className="shape-image">
          <img src="../img/project/shape-3.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
              Our projects
            </span>
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              Check our latest projects
            </h2>
          </div>
        </div>

        <div className="project-wrapper-2">
          <div className="swiper project-slider-3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div className="swiper-wrapper">
              {ProjectData.map(({ imgsrc, arrow, para, designation }, index) => (
                <div
                  key={index}
                  className="swiper-slide"
                  style={{ width: 372, marginRight: 30 }}
                >
                  <div className="project-items-3">
                    <div
                      className="project-image bg-cover"
                      style={{ backgroundImage: `url(${imgsrc})` }}
                    >
                      <div className="project-content">
                        <a href="project-details.html" className="icon">
                          {arrow}
                        </a>
                        <p>{para}</p>
                        <h4>
                          <a href="project-details.html" className='teamblog'>{designation}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
