import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectData from "../../utils/ProjectData";

const ProjectSection = () => {
  return (
    <>
      <section className="project-section-5 section-padding fix">
        <div className="project-wrapper-2">
          <div className="container">
            <div className="row g-4">
            {ProjectData.map(({imgsrc,arrow,para,designation},index) => 
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
                <div className="project-items-3 mt-0">
                  <div
                    className="project-image bg-cover"
                  style={{ backgroundImage: `url(${imgsrc})` }}
                  >
                    <div className="project-content ">
                      <a href="project-details.html" className="icon">
                        {arrow}
                      </a>
                      <p>{para} </p>
                      <h4>
                        <a href="project-details.html" className="teamblog">
                          {designation}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
